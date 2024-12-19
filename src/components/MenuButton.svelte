<script lang="ts">
  export let text: string;
  export let textColor = "black";
</script>

<label
  for="sidebarToggle"
  class="cursor-pointer bg-black bg-opacity-10 px-4 py-[0.3rem] font-big text-sm backdrop-blur-lg transition-all duration-300 hover:bg-opacity-30 {textColor} rounded">
  {text}
</label>

<input
  type="checkbox"
  id="sidebarToggle"
  class="hidden" />

<label
  for="sidebarToggle"
  class="pointer-events-none absolute right-0 top-0 z-50 h-screen w-screen bg-black bg-opacity-30 opacity-0 backdrop-blur-[2px] transition-opacity duration-300">
  <section
    class="fixed right-0 top-0 z-50 h-screen w-80 translate-x-full transform bg-white bg-opacity-100 p-10 transition-all duration-300">
    <div class="mb-10 flex w-full justify-end">
      <label
        for="sidebarToggle"
        class="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6">
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
        class="block rounded-md px-4 py-2 hover:bg-gray-200">
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
