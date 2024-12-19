<script lang="ts">
  export let title: string;
  export let subtitle: string;
</script>

<div class="fly-in flex w-screen flex-col items-center justify-center">
  <div class="flex max-w-4xl flex-col p-10 text-sm sm:flex-row">
    <div
      class="mr-10 hidden w-64 flex-col items-center justify-center gap-4 p-4 text-sm sm:visible sm:flex sm:gap-4">
      <div class="flex max-w-4xl flex-col text-sm">
        <p class="font-big text-xl">{title}</p>
        <h2 class="font-huge text-2xl">{subtitle}</h2>
      </div>
      <a
        href="/purchase/model-s"
        class="w-48 rounded border-[3px] border-zinc-800 bg-white px-4 py-2 text-center text-black shadow transition-all duration-300 hover:bg-zinc-800 hover:text-white"
        >Order Now</a>
      <button
        class="w-48 rounded bg-gray-100 px-4 py-2 text-black transition-all duration-300 hover:bg-gray-200"
        >View Inventory</button>
    </div>
    <div class="flex max-w-4xl flex-col text-sm">
      <p class="font-big text-xl sm:hidden">{title}</p>
      <h2 class="font-huge text-2xl sm:hidden">{subtitle}</h2>
      <slot />
    </div>
  </div>
  <div
    class="flex w-full flex-col items-center justify-center gap-4 p-4 text-sm sm:hidden sm:gap-4">
    <a
      href="/purchase/model-s"
      class="w-80 rounded border-[3px] border-zinc-800 bg-white px-4 py-2 text-center text-black shadow transition-all duration-300 hover:bg-zinc-800 hover:text-white"
      >Order Now</a>
    <button
      class="w-80 rounded bg-gray-100 px-4 py-2 text-black transition-all duration-300 hover:bg-gray-200"
      >View Inventory</button>
  </div>
</div>
