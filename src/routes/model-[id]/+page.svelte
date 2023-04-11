<script lang="ts">
  import HomeFooter from "../../components/HomeFooter.svelte";
  import Logo from "../../components/Logo.svelte";
  import MenuButton from "../../components/MenuButton.svelte";
  import { onMount } from "svelte";

  export let data;

  onMount(() => {
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

<main class="flex flex-col w-full h-screen overflow-scroll">
  <header class="absolute px-3 py-2 w-full flex justify-between items-center z-10">
    <h1 class="w-32 ml-2">
      <Logo color={data.page.logoColor} />
    </h1>
    <MenuButton text="Menu" textColor={data.page.textColor} />
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
      class="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-between pt-20 pb-10 items-center {data.page.textColor}">
      <div class="text-center">
        <h2 class="text-5xl font-bold mb-4">{data.page.title}</h2>
        <h2 class="text-2xl font-bold mb-4">{data.page.subtitle}</h2>
      </div>
      <div
        class="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center w-full p-4">
        <button class="bg-zinc-800  sm:w-64 text-white px-4 py-2 rounded shadow"
          >Custom Order</button>
        <button
          class="bg-gray-200/75 sm:w-64 text-black px-4 py-2 rounded shadow"
          >Demo Drive</button>
      </div>
    </div>
  </section>
</main>
