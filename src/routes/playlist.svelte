<script>
  import VirtualList from '@sveltejs/svelte-virtual-list';
  import ProfileCard from '../components/ProfileCard.svelte';

  var songList = [];
  var url;

  async function getSongInfo(VideoURL) {
    const id = youtube_parser(VideoURL);
    console.log(id);
    console.log(`https://www.yt-mp3s.com/@api/json/mp3/${id}`);
    const res = await fetch(`https://www.yt-mp3s.com/@api/json/mp3/${id}`, {
      method: 'GET',
      mode: 'cors',
      headers: {}
    });
    const json = await res.json();
    const parsedUrl = await json.vidInfo[0].dloadUrl;
    const name = await json.vidTitle;
    const thumb = await json.vidThumb;
    const info = { parsedUrl, name, thumb, VideoURL };
    console.log(info);
    return info;
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
</script>

<style lang="sass">
.center 
  margin: auto 
  width: 70% 
  padding: 10px
.clearfix
  overflow: auto

</style>

<svelte:head>
  <title>Playlist</title>
</svelte:head>

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
    <button
      on:click={e => {
        e.preventDefault();
        addSong(url);
      }}
      class="btn btn-primary mt-2 float-left">
      Add to playlist
    </button>
    <button
      on:click={e => {
        e.preventDefault();
        PlayAll();
      }}
      class="btn btn-primary mt-2 float-right">
      Play all
    </button>
  </form>
</div>
{#each songList as song}
  <ProfileCard {...song} on:play={PlaySong} />
{/each}
