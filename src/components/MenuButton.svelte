<script lang="ts">
  import { slide, fade } from "svelte/transition";

  export let text: string;
  export let textColor: string = "black";
  let open = false;

  function toggle() {
    open = !open;
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
</script>

<button
  class="px-4 py-1 bg-black bg-opacity-10 transition-all backdrop-blur-lg duration-300 hover:bg-opacity-30 {textColor} rounded"
  on:click={toggle}>
  {text}
</button>

{#if open}
  <div
    class="w-screen h-screen bg-black backdrop-blur-[2px] bg-opacity-30 absolute top-0 left-0 z-10"
    in:fade={{ duration: 300 }}
    out:fade={{ duration: 300 }}
    on:click={toggle}
    on:keydown={() => {}}>
    <section
      class="h-screen absolute bg-white bg-opacity-100 right-0 top-0 w-80 p-10"
      on:click={(e) => e.stopPropagation()}
      out:slide={{ duration: 300, axis: "x" }}
      in:slide={{ duration: 300, axis: "x" }}
      on:keydown={() => {}}>
      <div class="flex w-full justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          on:click={toggle}
          on:keydown={() => {}}
          class="w-6 h-6 cursor-pointer">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      {#each ["x", "y", "s", "3"] as l}
        <a
          href="/model-{l}"
          class="block px-4 py-2 hover:bg-gray-200 rounded-md"
          >Model {l.toUpperCase()}</a>
      {/each}
    </section>
  </div>
{/if}
