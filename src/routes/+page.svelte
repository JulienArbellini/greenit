<script lang="ts">
  import FlyIn from "../components/FlyIn.svelte";
  import HomeFooter from "../components/HomeFooter.svelte";
  import HomeHeaders from "../components/HomeHeaders.svelte";
  import ImageLoader from "../components/ImageLoader.svelte";
  import Logo from "../components/Logo.svelte";
  import MenuButton from "../components/MenuButton.svelte";
  import ExtraProduct from "../components/home/ExtraProduct.svelte";
  import HomeHero from "../components/home/HomeHero.svelte";

  const extraProducts = [
    {
      id: "solar-panels",
      title: "Solar Panels",
      subtitle: "Lowest Cost Solar Panels in America",
      alt: "A close-up of solar panels mounted on a rooftop",
    },
    {
      id: "solar-roof",
      title: "Solar Roof",
      subtitle: "Produce Clean Energy From Your Roof",
      alt: "A house with a roof made of solar tiles",
    },
    {
      id: "charger",
      title: "Accessories",
      subtitle: "Browser All Our Other Accessories",
      alt: "An assortment of charging cables and adapters for electric vehicles",
      singleBtn: true,
    },
  ];
</script>

<HomeHeaders />
<ImageLoader />
<FlyIn />

<main class="flex h-screen w-full snap-y snap-mandatory flex-col overflow-auto">
  <header class="fixed z-10 flex w-full items-center justify-between px-3 py-2">
    <h1 class="ml-2 w-32">
      <Logo />
    </h1>
    <MenuButton text="Menu" />
  </header>
  {#each "s3xy" as l}
    <HomeHero {l} />
  {/each}
  <section
    class="flex h-screen min-h-screen w-screen snap-start flex-col items-center justify-around bg-black">
    <span class="fly-in text-center text-4xl text-white"
      >Discover the Roadster</span>
    <video
      class="w-full max-w-2xl md:rounded-xl"
      loop
      muted
      controls
      preload="none"
      poster="/images/home/thumb.webp"
      height="720"
      width="1152">
      <source
        src="/images/home/plaid-av1.webm"
        type="video/webm; codecs=av1" />
      <source
        src="/images/home/plaid-vp9.webm"
        type="video/webm; codecs=vp9" />
    </video>

    <div
      class="fly-in flex flex-col items-center justify-center gap-2 p-4 sm:flex-row sm:gap-4">
      <button
        class="max-h-12 rounded bg-gray-200 px-4 py-2 text-black shadow sm:w-64"
        >Soon Available</button>
    </div>
  </section>
  {#each extraProducts as product}
    <ExtraProduct {product} />
  {/each}
  <HomeFooter />
</main>
