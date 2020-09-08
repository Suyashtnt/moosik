<script lang="ts">
  import {youtube_parser, getSongInfo, play, Audioifer} from './shared-code'

  var url;

  var clicked = false;

  function itsClicked() {
    clicked = true
  }

</script>

<style lang="sass">
h1
  text-align: center
  margin: 0 auto
  font-size: 2.8em
  text-transform: uppercase
  font-weight: 700
  margin: 0 0 0.5em 0
.center
  margin: auto
  width: 50%
  padding: 10px
.center2
  margin: auto
  width: 75%
  padding: 10px
  position: relative
  right: -100px

@media (min-width: 480px)
  h1
    font-size: 4em



</style>

<svelte:head>
  <title>Single Song</title>
</svelte:head>


{#if clicked}

{#await getSongInfo(url)}
  <!-- getSong is pending -->
  <h1>getting song</h1>
{:then value}
  <!-- getSong was fulfilled -->
  <div class="bg-white shadow rounded content-center items-center">

    <h1>{value.name}</h1>
    <img class="rounded center" src={value.thumb} alt="thumbnail"/>
    <button
      on:click={e => play(Audioifer(value.parsedUrl))}
      class="bg-blue-600 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4
      border border-gray-400 rounded shadow btn-center text-center center2">
      play
    </button>
  </div>


{:catch error}
  <!-- getSong was rejected -->
{/await}

{:else}


<div class="w-full max-w-xs center">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        URL
      </label>
      <input bind:value={url} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Youtube Video URL">
    </div>
    <button on:click={itsClicked} class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
	Get song
</button>

  </form>

</div>
{/if}
