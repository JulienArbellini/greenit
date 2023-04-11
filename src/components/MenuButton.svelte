<script lang="ts">
  export let text: string;
  export let textColor: string = "black";
</script>

<label
  for="sidebarToggle"
  class="cursor-pointer font-big px-4 py-[0.3rem] text-sm bg-black bg-opacity-10 transition-all backdrop-blur-lg duration-300 hover:bg-opacity-30 {textColor} rounded">
  {text}
</label>

<input
  type="checkbox"
  id="sidebarToggle"
  class="hidden" />

  <label
  for="sidebarToggle"
  class="w-screen h-screen bg-black backdrop-blur-[2px] bg-opacity-30 absolute top-0 right-0 z-50 transition-opacity duration-300 opacity-0 pointer-events-none"
>
  <section
    class="h-screen fixed bg-white z-50 bg-opacity-100 top-0 right-0 w-80 p-10 transition-all transform duration-300 translate-x-full"
  >
    <div class="flex w-full justify-end">
      <label
        for="sidebarToggle"
        class="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </label>
    </div>
    {#each ["x", "y", "s", "3"] as l}
      <a
        href="/model-{l}"
        class="block px-4 py-2 hover:bg-gray-200 rounded-md">
        Model {l.toUpperCase()}
      </a>
    {/each}
  </section>
</label>

<style>
  #sidebarToggle:checked ~ label {
    opacity: 1;
    pointer-events: auto;
  }

  #sidebarToggle:checked ~ label > section {
    transform: translateX(0);
  }
</style>
