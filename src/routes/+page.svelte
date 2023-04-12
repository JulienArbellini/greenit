<script lang="ts">
  import HomeFooter from "../components/HomeFooter.svelte";
  import Logo from "../components/Logo.svelte";
  import MenuButton from "../components/MenuButton.svelte";
</script>

<svelte:head>
  <title>Tesla - Green IT</title>
  <link
    rel="image_src"
    href="/images/home/hero-model-3.jpg" />
  <meta
    name="description"
    content="Tesla is accelerating the world';s transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses." />
  <meta
    name="keywords"
    content="Tesla, Model S, Model Y, Model X, Model 3, Énergie" />
  <link
    rel="canonical"
    href="https://green-it.vercel.app/" />

  <meta
    name="twitter:card"
    content="summary_large_image" />
  <meta
    name="twitter:site"
    content="@tesla" />
  <meta
    name="twitter:description"
    content="Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses." />
  <meta
    name="twitter:title"
    content="Tesla - Green IT" />
  <meta
    name="twitter:creator"
    content="@tesla" />
  <meta
    name="twitter:url"
    content="https://green-it.vercel.app/" />

  <meta
    property="og:title"
    content="Tesla - Green IT" />
  <meta
    property="og:description"
    content="Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses." />
  <meta
    property="og:type"
    content="website" />
  <meta
    property="og:url"
    content="https://green-it.vercel.app/" />
  <meta
    property="og:image"
    content="/images/home/hero-model-3.jpg" />
  <meta
    property="og:site_name"
    content="Tesla - Green IT" />
  <meta
    property="og:locale"
    content="en_US" />

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

<main
  class="flex flex-col w-full h-screen overflow-scroll snap-y snap-mandatory">
  <header class="fixed px-3 py-2 w-full flex justify-between items-center z-10">
    <h1 class="w-32 ml-2">
      <Logo />
    </h1>
    <MenuButton text="Menu" />
  </header>
  {#each "syx3" as l}
    <section
      class="h-screen w-screen min-h-screen transition duration-500 relative snap-start">
      <picture>
        <source
          srcset="/images/home/hero-model-{l}-mobile.avif"
          type="image/avif"
          media="(max-width: 599px)" />
        <source
          srcset="/images/home/hero-model-{l}-mobile.jpg"
          type="image/jpeg"
          media="(max-width: 599px)" />
        <source
          srcset="/images/home/hero-model-{l}-1280.avif"
          type="image/avif"
          media="(max-width: 1000px)" />
        <source
          srcset="/images/home/hero-model-{l}-1280.jpg"
          type="image/jpeg"
          media="(max-width: 1000px)" />
        <source
          srcset="/images/home/hero-model-{l}-1920.avif"
          type="image/avif"
          media="(max-width: 2000px)" />
        <source
          srcset="/images/home/hero-model-{l}-1920.jpg"
          type="image/jpeg"
          media="(max-width: 2000px)" />
        <source
          srcset="/images/home/hero-model-{l}.avif"
          type="image/avif" />
        <source
          srcset="/images/home/hero-model-{l}.jpg"
          type="image/jpeg" />
        <img
          src="/images/home/hero-model-{l}.jpg"
          loading="lazy"
          class="h-full w-screen object-cover opacity-0 transition-all duration-1000"
          alt="Electric car model {l} from Tesla" />
      </picture>
      <div
        class="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-between pt-20 pb-10 items-center">
        <h2 class="text-5xl font-bold mb-4">
          Model {l.toUpperCase()}
        </h2>
        <div
          class="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center w-full p-4">
          <button
            class="bg-zinc-800  sm:w-64 text-white px-4 py-2 rounded shadow"
            >Custom Order</button>
          <button
            class="bg-gray-200/75 sm:w-64 text-black px-4 py-2 rounded shadow"
            >Demo Drive</button>
        </div>
      </div>
    </section>
  {/each}
  <section
    class="w-screen min-h-screen h-screen snap-start flex flex-col items-center justify-around bg-black">
    <span class="text-white text-4xl text-center">Discover the Roadster</span>
    <video
      class="w-screen mt-20"
      loop
      muted
      controls
      poster="/images/home/poster-roadster.jpg"
      height="360"
      width="1280">
      <source
        src="/images/home/roadster-av1.webm"
        type="video/webm; codecs=av1" />
      <source
        src="/images/home/roadster-vp9.webm"
        type="video/webm; codecs=vp9" />
    </video>

    <div
      class="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center p-4 items-center">
      <button
        class="bg-gray-200 max-h-12 sm:w-64 text-black px-4 py-2 rounded shadow"
        >Soon Available</button>
    </div>
  </section>
  {#each [{ id: "solar-panels", title: "Solar Panels", subtitle: "Lowest Cost Solar Panels in America", alt: "A close-up of solar panels mounted on a rooftop" }, { id: "solar-roof", title: "Solar Roof", subtitle: "Produce Clean Energy From Your Roof", alt: "A house with a roof made of solar tiles" }, { id: "charger", title: "Accessories", subtitle: "Browser All Our Other Accessories", alt: "An assortment of charging cables and adapters for electric vehicles", singleBtn: true }] as p}
    <section
      class="h-screen w-screen min-h-screen transition duration-500 relative  snap-start">
      <picture>
        <source
          srcset="/images/home/hero-{p.id}-mobile.avif"
          media="(max-width: 599px)"
          type="image/avif" />
        <source
          srcset="/images/home/hero-{p.id}-mobile.jpg"
          media="(max-width: 599px)"
          type="image/jpeg" />
        <source
          srcset="/images/home/hero-{p.id}-1280.avif"
          media="(max-width: 1000px)"
          type="image/avif" />
        <source
          srcset="/images/home/hero-{p.id}-1280.jpg"
          media="(max-width: 1000px)"
          type="image/jpeg" />
        <source
          srcset="/images/home/hero-{p.id}-1920.avif"
          media="(max-width: 2000px)"
          type="image/avif" />
        <source
          srcset="/images/home/hero-{p.id}-1920.jpg"
          media="(max-width: 2000px)"
          type="image/jpeg" />
        <source
          srcset="/images/home/hero-{p.id}.jpg"
          type="image/jpeg" />
        <img
          src="/images/home/hero-{p.id}.jpg"
          loading="lazy"
          class="h-full w-screen object-cover opacity-0 transition-all duration-1000"
          alt="{p.alt}" />
      </picture>
      <div
        class="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-between pt-20 pb-10 items-center">
        <div class="flex flex-col items-center">
          <h2 class="text-5xl mb-4">{p.title}</h2>
          <p class="text-md">{p.subtitle}</p>
        </div>
        <div
          class="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center w-full p-4">
          <button
            class="bg-zinc-800  sm:w-64 text-white px-4 py-2 rounded shadow"
            >Shop Now</button>
          {#if !p.singleBtn}
            <button
              class="bg-gray-200/75 sm:w-64 text-black px-4 py-2 rounded shadow"
              >Learn More</button>
          {/if}
        </div>
      </div>
    </section>
  {/each}
  <HomeFooter />
</main>
