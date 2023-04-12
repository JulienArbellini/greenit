<script lang="ts">
  export let title: string;
  export let subtitle: string;
</script>

<div class="flex flex-col justify-center items-center w-screen fly-in">
  <div class="flex flex-col sm:flex-row max-w-4xl p-10 text-sm">
    <div
      class="sm:flex flex-col w-64 mr-10  hidden sm:visible gap-4 sm:gap-4 justify-center p-4 items-center text-sm">
      <div class="flex flex-col max-w-4xl text-sm">
        <p class="font-big text-xl">{title}</p>
        <h2 class="font-huge text-2xl">{subtitle}</h2>
      </div>
      <button
        class="bg-white  w-48 text-black hover:bg-zinc-800 hover:text-white transition-all duration-300 px-4 py-2 rounded shadow border-[3px] border-zinc-800"
        >Order Now</button>
      <button
        class="bg-gray-100 w-48 text-black px-4 py-2 rounded hover:bg-gray-200 transition-all duration-300"
        >View Inventory</button>
    </div>
    <div class="flex flex-col max-w-4xl text-sm">
      <p class="font-big text-xl sm:hidden">{title}</p>
      <h2 class="font-huge text-2xl sm:hidden">{subtitle}</h2>
      <slot />
    </div>
  </div>
  <div
    class="flex flex-col sm:hidden gap-4 sm:gap-4 justify-center w-full p-4 items-center text-sm">
    <button
      class="bg-white w-80 text-black hover:bg-zinc-800 hover:text-white transition-all duration-300 px-4 py-2 rounded shadow border-[3px] border-zinc-800"
      >Order Now</button>
    <button
      class="bg-gray-100 w-80 text-black px-4 py-2 rounded hover:bg-gray-200 transition-all duration-300"
      >View Inventory</button>
  </div>
</div>
