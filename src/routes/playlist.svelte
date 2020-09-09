<script lang="ts">
  import Title2 from '../components/title2.svelte';
  import Title1 from '../components/title.svelte'
	import type { APIResponse } from './api.interfaces';
  import type * as firebase from 'firebase/app';
  import { onMount } from 'svelte';
  import ProfileCard from '../components/ProfileCard.svelte';
  import {youtube_parser, getSongInfo, play, Audioifer} from './shared-code'

  let googleProvider;
  let user: any;
  let currentlyAuthenticating: Boolean;
  let authError: String
  let state: String
  let URLList: String[] = []
  onMount(() => {
    //@ts-ignore
    googleProvider = new firebase.auth.GoogleAuthProvider();
  })

  var songList = [];
  var url;

  async function addSong(URL: String) {
    URLList = [...URLList, URL] 
    state = "getting song..."
    var song = await getSongInfo(URL);

    songList = [...songList, await song];
    state = null
  }

  async function PlayAll() {
    for (let i = 0; i < songList.length; i++) {
      const element = new Audio(songList[i].parsedUrl);
      await play(element);
    }
  }


  async function addSongList(element: String[]) {
    const promisesOfSongs = element.map(song => getSongInfo(song));
    const songData = await Promise.all(promisesOfSongs);
    for (let i = 0; i < songData.length; i++) {
      songList = [...songList, songData[i]];
    }
    
    
  }

  async function login() {

        try {
          authError = null
          currentlyAuthenticating = true
          //@ts-ignore
            firebase.auth().signInWithPopup(googleProvider).then((res) => {
                user = res
            }).then(() => currentlyAuthenticating = false).catch((err) => {
              currentlyAuthenticating = false
              authError = err
            });
        } catch(e) {
          currentlyAuthenticating = false
            let message = e.message || e;
            authError = message
        }

  }

  async function updateList() {
     state = "saving"
    const res = await fetch('https://moosik-backend.herokuapp.com/playlist/post', {
      method: "POST",
        body: JSON.stringify({
          "uid": user.user.uid,
          "Songs": URLList
        })
    }).then(() => {
      state = "saved!"
    })
  }

  async function downloadList() {
    state = "downloading Playlist..."

    const res = await fetch('https://moosik-backend.herokuapp.com/playlist/get',
    {
        method: "POST",
        body: JSON.stringify({
          "uid": user.user.uid
        }),
        headers: {
          'Content-Type': 'application/json'
        }
    })
    
     const json = await res.json() as APIResponse
     await addSongList(json.Songs)
     state = null
  }
</script>

<style lang="postcss">
.clearfix {
  overflow: auto;
}

.title2 {
  font-size: 32px;
  @apply text-center;
}
.main-div {
  @apply flex justify-center items-center;
  margin: auto;
  width: 90%;
  padding: 10px;
  position: relative;
}
</style>

<svelte:head>
  <title>Playlist</title>
</svelte:head>

{#if user}
  <img src={user.user.photoURL} alt="your profile pic" class="rounded-full mx-auto mt-6 w-20 h-20 " />
  <Title1 content={user.user.displayName} />
  <div class="w-full clearfix ">
    <form class="bg-white shadow-md clearfix rounded px-8 pt-6 pb-8 mb-4 main-div">
      <div class="mb-4">
        <label class="block text-gray-700 text-lg font-bold mb-2" for="username">
          URL
        </label>
        <input
          bind:value={url}
          class="shadow appearance-none border rounded w-full py-2 px-3
          text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Youtube Video URL" />
      </div>

      <div class="flex justify-evenly mx-auto">

        <button
          on:click={e => {
            e.preventDefault();
            addSong(url);
          }}
          class="btn btn-primary mt-2">
          Add to playlist
        </button>

        <button
          on:click={e => {
            e.preventDefault();
            updateList();
          }}
          class="btn btn-primary mt-2">
          Update online list
        </button>

        <button
        on:click={e => {
          e.preventDefault();
          downloadList();
        }}
        class="btn btn-primary mt-2">
        download online list
        </button>

        <button
          on:click={e => {
            e.preventDefault();
            PlayAll();
          }}
          class="btn btn-primary mt-2">
          Play all
        </button>

      </div>
    </form>
  </div>

  {#if state}
  <Title2 content={state} />
  {/if}

  {#each songList as song}
    <ProfileCard {...song} />
  {/each}


{:else if currentlyAuthenticating}
<Title2 content={'authenticating...'}></Title2>
{:else}

{#if authError}
  <Title2 content={authError}/>
{/if}
<button class="title2 mx-auto self-center" on:click={login}>
  login
</button>

{/if}
