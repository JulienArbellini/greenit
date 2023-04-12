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

<main class="flex flex-col w-full h-screen overflow-auto snap-y snap-mandatory">
  <header class="fixed px-3 py-2 w-full flex justify-between items-center z-10">
    <h1 class="w-32 ml-2">
      <Logo />
    </h1>
    <MenuButton text="Menu" />
  </header>
  {#each "s3xy" as l}
    <HomeHero {l} />
  {/each}
  <section
    class="w-screen min-h-screen h-screen snap-start flex flex-col items-center justify-around bg-black">
    <span class="text-white text-4xl text-center fly-in"
      >Discover the Roadster</span>
    <video
      class="w-full max-w-2xl md:rounded-xl"
      loop
      muted
      controls
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
      class="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center p-4 items-center fly-in">
      <button
        class="bg-gray-200 max-h-12 sm:w-64 text-black px-4 py-2 rounded shadow"
        >Soon Available</button>
    </div>
  </section>
  {#each extraProducts as product}
    <ExtraProduct {product} />
  {/each}
  <HomeFooter />
</main>
