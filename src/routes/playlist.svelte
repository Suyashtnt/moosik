<script lang="ts">
	import type { APIResponse } from './api.interfaces';
  import * as cookies from '../cookiehandler'
  import type * as firebase from 'firebase/app';
  import {default as axios} from 'axios';
  import { onMount } from 'svelte';
  import ProfileCard from '../components/ProfileCard.svelte';

  //@ts-ignore
  let db:firebase.firestore.Firestore;
  let googleProvider;
  let user: firebase.auth.UserCredential;
  let currentlyAuthenticating: Boolean;
  let erroredDuringAuth: Boolean
  let authError: String
  let saving: Boolean
  let saved: Boolean
  let errorSaving: Boolean
  let ErrorWhileSaving: String
  let GettingSong: Boolean
  let DownloadingPlaylist: Boolean
  onMount(() => {
    //@ts-ignore
    googleProvider = new firebase.auth.GoogleAuthProvider();
  })

  var songList = [];
  var url;

  async function getSongInfo(VideoURL) {
    GettingSong = true
    const id = youtube_parser(VideoURL);
    console.log(id);
    console.log(`https://www.yt-mp3s.com/@api/json/mp3/${id}`);


    try {
      const response = await axios.get(`https://www.yt-mp3s.com/@api/json/mp3/${id}`, {
      method: 'GET',
      headers: {}
      })
      const json = await response.data
      const parsedUrl = await json.vidInfo[0].dloadUrl;
      const name = await json.vidTitle;
      const thumb = await json.vidThumb;
      const info = { parsedUrl, name, thumb, VideoURL };
      GettingSong = false
      console.log(info);
      return info;
    } catch (err) {
      GettingSong = false
      return err
    }


  }

  async function PlaySong(Info) {
    const audio = new Audio(await Info.detail.url);
    await audio.play();
  }

  async function addSong(URL) {
    var song = await getSongInfo(URL);

    songList = [...songList, await song];
    console.log(songList);
  }

  async function PlayAll() {
    for (let i = 0; i < songList.length; i++) {
      const element = new Audio(songList[i].parsedUrl);
      await play(element);
    }
  }

  function play(element) {
    return element.play().then(
      () =>
        new Promise((res, rej) => {
          function ended() {
            element.removeEventListener('error', error);
            res();
          }

          function error() {
            element.removeEventListener('ended', ended);
            //@ts-ignore
            rej(err);
          }
          element.addEventListener('ended', ended, {
            once: true
          });
          element.addEventListener('error', error, {
            once: true
          });
        })
    );
  }

  function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }

  async function login() {

        try {
          currentlyAuthenticating = true
          erroredDuringAuth = false
          //@ts-ignore
            firebase.auth().signInWithPopup(googleProvider).then((res) => {
                console.log(res);
                user = res
                cookies.setCookie("userID", res.user.uid, 100000)
            }).then(() => currentlyAuthenticating = false).catch((err) => {
              erroredDuringAuth = true
              currentlyAuthenticating = false
              authError = err
            });
        } catch(e) {
          currentlyAuthenticating = false
          erroredDuringAuth = true
            let message = e.message || e;
            console.log("Something went wrong:", message);
            authError = message
        }

  }

  async function updateList() {
    console.log("updating...");
    errorSaving = false
    saving = true
    const res = await axios.post('https://moosik-backend.herokuapp.com/playlist/post', {
        "uid": user.user.uid,
        "Songs": songList
    }).then(() => {
      saving = false
      saved = true
    }).catch((err) => {
      errorSaving = true
      ErrorWhileSaving = err
    })
  }

  async function downloadList() {
    DownloadingPlaylist = true
    console.log("downloading " + JSON.stringify({
        uid: `${user.user.uid}`
      }));
    const res = await axios.post('http://moosik-backend.herokuapp.com/playlist/get',
    {
        uid: `${user.user.uid}`
    })
    const json = await res.data as APIResponse
    console.log(json);
    DownloadingPlaylist = false
    songList = json.Songs
  }
</script>

<style lang="sass">
.center
  margin: auto
  width: 70%
  padding: 10px
.clearfix
  overflow: auto
.title2
  font-size: 32px
</style>

<svelte:head>
  <title>Playlist</title>
</svelte:head>

{#if user}
  <img src={user.user.photoURL} alt="your profile pic" class="rounded-full mx-auto mt-6 w-20 h-20 " />
  <h1 class="text-center text-lg title mx-auto mt-2">{user.user.displayName}</h1>
  <div class="w-full center clearfix">
    <form class="bg-white shadow-md clearfix rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
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

      <div class="justify-evenly items-center content-center self-center">

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
          Update List
        </button>

        <button
        on:click={e => {
          e.preventDefault();
          downloadList();
        }}
        class="btn btn-primary mt-2">
        download list
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

  {#if GettingSong}
    <h1 class="text-center title2">Getting song...</h1>
  {/if }

  {#if errorSaving}
    <h1 class="text-center title2">An error occured while saving: {ErrorWhileSaving}</h1>
  {/if}

  {#if DownloadingPlaylist}
    <h1 class="text-center title2">Downloading your playlist</h1>
  {/if}

  {#if saving}
    <h1 class="text-center title2">saving...</h1>
  {/if}

  {#if saved}
    <h1 class="text-center title2"> saved! </h1>
  {/if}

  {#each songList as song}
    <ProfileCard {...song} on:play={PlaySong} />
  {/each}

{:else if currentlyAuthenticating}
<h1 class="text-center title2">authenticating...</h1>

{:else}

{#if erroredDuringAuth}
  <h1 class="text-center title2 mx-auto">{authError}</h1>
{/if}
<button on:click={login}><p class="text-center title2 mx-auto">
  login
</p></button>

{/if}
