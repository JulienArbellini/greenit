<script lang="ts">
  import { slide, fade } from 'svelte/transition';

  export let text: string;
  let open = false;

  function toggle() {
    open = !open;
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
</script>

<button
  class="px-4 py-1 bg-black bg-opacity-10 transition-all duration-300 hover:bg-opacity-30 text-black rounded"
  on:click={toggle}>
  {text}
</button>

{#if open}
  <div
    class="w-screen h-screen bg-black bg-opacity-50 absolute top-0 left-0 z-10"
    in:fade="{{ duration: 300 }}"
    out:fade="{{ duration: 300 }}"
    on:click={toggle}>
    <section
      class="h-screen absolute bg-white bg-opacity-100 right-0 top-0 w-80 p-10"
      on:click={(e) => e.stopPropagation()}
      out:slide="{{ duration: 300, axis: 'x'}}"
      in:slide="{{ duration: 300, axis: 'x'}}">
      {#each ["x", "y", "z"] as l }
        <a href="/product/model-{l}" class="block px-4 py-2 hover:bg-gray-200 rounded-md">Model {l.toUpperCase()}</a>
      {/each}
    </section>
  </div>
{/if}
