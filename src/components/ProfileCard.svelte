<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let name;
  export let parsedUrl;
  export let thumb;
  export let VideoURL;

  function play() {
    dispatch('play', {
      url: parsedUrl
    });
  }
</script>

<div
  class="shadow-lg leading-normal self-end bg-white rounded-lg m-10 relative">
  <div class="md:flex bg-white rounded-lg p-6">
    <img
      class="h-16 w-16 md:h-24 md:w-24 rounded mx-auto md:mx-0 md:mr-6"
      src={thumb}
      alt="Avatar" />
    <div class="text-center md:text-left">
      <h2 class="text-lg capitalize">{name}</h2>
      <div class="text-gray-600">{VideoURL}</div>
      <button on:click={play} class="btn btn-primary mt-2">play</button>
    </div>
  </div>
</div>
