<script lang="ts">
  import HomeFooter from "../../components/HomeFooter.svelte";
  import Logo from "../../components/Logo.svelte";
  import MenuButton from "../../components/MenuButton.svelte";

  export let data;
</script>

<svelte:head>
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const images = document.querySelectorAll("img");
      images.forEach((img) => {
        img.addEventListener("load", () => {
          img.classList.remove("opacity-0");
        });

        if (img.complete) {
          img.classList.remove("opacity-0");
        }
      });
    });
  </script>
</svelte:head>

<main class="flex flex-col overflow-scroll">
  <header
    class="absolute px-3 py-2 w-full flex justify-between items-center z-10">
    <a
      class="w-32 ml-2"
      href="/">
      <Logo color={data.page.logoColor} />
    </a>
    <MenuButton
      text="Menu"
      textColor={data.page.textColor} />
  </header>
  <section
    class="h-screen w-screen min-h-screen transition duration-500 relative snap-start">
    <picture>
      <source
        srcset="/images/products/hero-model-{data.id}-mobile.avif"
        type="image/avif"
        media="(max-width: 599px)" />
      <source
        srcset="/images/products/hero-model-{data.id}-mobile.jpg"
        type="image/jpeg"
        media="(max-width: 599px)" />
      <source
        srcset="/images/products/hero-model-{data.id}-1280.avif"
        type="image/avif"
        media="(max-width: 1000px)" />
      <source
        srcset="/images/products/hero-model-{data.id}-1280.jpg"
        type="image/jpeg"
        media="(max-width: 1000px)" />
      <source
        srcset="/images/products/hero-model-{data.id}-1920.avif"
        type="image/avif"
        media="(max-width: 2000px)" />
      <source
        srcset="/images/products/hero-model-{data.id}-1920.jpg"
        type="image/jpeg"
        media="(max-width: 2000px)" />
      <source
        srcset="/images/products/hero-model-{data.id}.avif"
        type="image/avif" />
      <source
        srcset="/images/products/hero-model-{data.id}.jpg"
        type="image/jpeg" />
      <img
        src="/images/products/hero-model-{data.id}.jpg"
        loading="lazy"
        class="h-full w-screen object-cover opacity-0 transition-all duration-1000"
        alt="hero model-{data.id}" />
    </picture>
    <div
      class="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-between pt-36 pb-6 items-center {data
        .page.textColor}">
      <div class="text-center">
        <h2 class="text-4xl font-huge mb-2">{data.page.title}</h2>
        <h2 class="underline text-sm underline-offset-4 font-bold mb-4">
          {data.page.subtitle}
        </h2>
      </div>
      <div
        class="flex flex-col sm:flex-row gap-2 justify-center w-full items-center text-sm">
        <div class="flex justify-between w-80">
          {#each data.page.heroStats as stat}
            <div class="flex flex-col items-center">
              <h2 class="text-xl font-huge">{stat.title}</h2>
              <h2 class="text-[0.68rem] font-bold">{stat.subtitle}</h2>
            </div>
          {/each}
        </div>
        <div
          class="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center w-full p-4 items-center text-sm">
          <button
            class="bg-zinc-800  w-80 text-white px-4 py-2 rounded shadow border-[3px] border-white"
            >Order Now</button>
          <button class="bg-zinc-800 w-80 text-white px-4 py-2 rounded shadow"
            >View Inventory</button>
        </div>
      </div>
    </div>
  </section>
  {#if data.page.hasSkeleton}
    <section class="h-screen min-h-screen w-screen flex flex-col">
      <div class="flex-1 flex items-center justify-center max-h-[50%] bg-gray-100">
        <picture>
          <source
            srcset="/images/products/model-{data.id}-hero-safety-mobile.avif"
            type="image/avif"
            media="(max-width: 1000px)" />
          <source
            srcset="/images/products/model-{data.id}-hero-safety-mobile.webp"
            type="image/webp"
            media="(max-width: 1000px)" />
          <source
            srcset="/images/products/model-{data.id}-hero-safety.avif"
            type="image/avif"
            media="(min-width: 1000px)" />
          <source
            srcset="/images/products/model-{data.id}-hero-safety.webp"
            type="image/webp"
            media="(min-width: 1000px)" />
          <img
            src="/images/products/model-{data.id}-hero-safety-mobile.webp"
            loading="lazy"
            class="h-full w-screen object-cover opacity-0 transition-all duration-1000"
            alt="hero model-{data.id}" />
        </picture>
      </div>
      <div class="flex-1" />
    </section>
  {/if}
</main>
