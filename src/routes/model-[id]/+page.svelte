<script lang="ts">
  import HomeFooter from "../../components/HomeFooter.svelte";
  import Logo from "../../components/Logo.svelte";
  import MenuButton from "../../components/MenuButton.svelte";

  export let data;
</script>

<svelte:head>
  <title>Tesla - Green IT</title>
  <link
    rel="image_src"
    href="/images/home/hero-model-{data.id}.jpg" />
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
    content="/images/home/hero-model-{data.id}.jpg" />
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

<main class="flex flex-col overflow-scroll">
  <header class="fixed px-3 py-2 w-full flex justify-between items-center z-10">
    <a
      class="w-32 ml-2"
      href="/"
      aria-label="home">
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
        class="flex flex-col gap-2 justify-center w-full items-center text-sm">
        <div class="flex justify-between w-80">
          {#each data.page.heroStats as stat}
            <div class="flex flex-col text-white items-center">
              <h2 class="text-xl font-huge">{stat.title}</h2>
              <h2 class="text-[0.68rem] font-bold">{stat.subtitle}</h2>
            </div>
          {/each}
        </div>
        <div
          class="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center w-full p-4 items-center text-sm">
          <button
            class="bg-zinc-800 hover:bg-white hover:text-black transition-all duration-300 w-80 text-white px-4 py-2 rounded shadow border-[3px] border-white"
            >Order Now</button>
          <button class="bg-zinc-800 w-80 text-white px-4 py-2 rounded shadow"
            >View Inventory</button>
        </div>
      </div>
    </div>
  </section>
  <section class="w-screen flex flex-col">
    <div class="flex items-center justify-end sm:justify-center max-h-[50%]">
      <picture>
        <source
          srcset="/images/products/model-{data.page
            .skelId}-hero-safety-mobile.avif"
          type="image/avif"
          media="(max-width: 700px)" />
        <source
          srcset="/images/products/model-{data.page
            .skelId}-hero-safety-mobile.webp"
          type="image/webp"
          media="(max-width: 700px)" />
        <source
          srcset="/images/products/model-{data.page.skelId}-hero-safety.avif"
          type="image/avif"
          media="(min-width: 700px)" />
        <source
          srcset="/images/products/model-{data.page.skelId}-hero-safety.webp"
          type="image/webp"
          media="(min-width: 700px)" />
        <img
          src="/images/products/model-{data.page
            .skelId}-hero-safety-mobile.webp"
          loading="lazy"
          class="sm:max-w-[800px] object-cover opacity-0 transition-all duration-1000"
          alt="hero model-{data.page.skelId}" />
      </picture>
    </div>
    <div class="flex flex-col justify-center items-center w-screen">
      <div class="flex flex-col sm:flex-row max-w-4xl p-10 text-sm">
        <div
          class="sm:flex w-64 mr-10 flex-col hidden sm:visible gap-4 sm:gap-4 justify-center p-4 items-center text-sm">
          <div class="flex flex-col max-w-4xl text-sm">
            <p class="font-big text-xl">Safety</p>
            <h2 class="font-huge text-2xl">Designed for Safety</h2>
          </div>
          <button
            class="bg-white  w-48 text-black hover:bg-zinc-800 hover:text-white transition-all duration-300 px-4 py-2 rounded shadow border-[3px] border-zinc-800"
            >Order Now</button>
          <button
            class="bg-gray-100 w-48 text-black px-4 py-2 rounded hover:bg-gray-200 transition-all duration-300"
            >View Inventory</button>
        </div>
        <div class="flex flex-col max-w-4xl text-sm">
          <p class="font-big text-xl sm:hidden">Safety</p>
          <h2 class="font-huge text-2xl sm:hidden">Designed for Safety</h2>
          <p class="pt-4">
            Safety is the most important part of every Tesla. We design our
            vehicles to <span class="underline cursor-pointer"
              >exceed safety standards</span
            >.
          </p>
          <p class="pt-5 font-big">5-Star Rating</p>
          <p>
            Model {data.id.toUpperCase()} achieved NHTSA 5-star safety ratings in
            every category and subcategory.
          </p>
          <p class="pt-5 font-big">MTop Safety Pick+</p>
          <p>
            Model {data.id.toUpperCase()} received the IIHS Top Safety Pick+ award,
            with top ratings in all crashworthiness and front crash prevention categories.
          </p>
        </div>
      </div>
      <div
        class="flex flex-col sm:hidden gap-4 sm:gap-4 justify-center w-full p-4 items-center text-sm">
        <button
          class="bg-white  w-80 text-black hover:bg-zinc-800 hover:text-white transition-all duration-300 px-4 py-2 rounded shadow border-[3px] border-zinc-800"
          >Order Now</button>
        <button
          class="bg-gray-100 w-80 text-black px-4 py-2 rounded hover:bg-gray-200 transition-all duration-300"
          >View Inventory</button>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center w-screen">
      <div class="flex flex-col sm:flex-row max-w-4xl p-10 text-sm">
        <div
          class="sm:flex flex-col w-64 mr-10  hidden sm:visible gap-4 sm:gap-4 justify-center p-4 items-center text-sm">
          <div class="flex flex-col max-w-4xl text-sm">
            <p class="font-big text-xl">Utility</p>
            <h2 class="font-huge text-2xl">A Place For Everything</h2>
          </div>
          <button
            class="bg-white  w-48 text-black hover:bg-zinc-800 hover:text-white transition-all duration-300 px-4 py-2 rounded shadow border-[3px] border-zinc-800"
            >Order Now</button>
          <button
            class="bg-gray-100 w-48 text-black px-4 py-2 rounded hover:bg-gray-200 transition-all duration-300"
            >View Inventory</button>
        </div>
        <div class="flex flex-col max-w-4xl text-sm">
          <p class="font-big text-xl sm:hidden">Utility</p>
          <h2 class="font-huge text-2xl sm:hidden">A Place For Everything</h2>
          <p class="pt-4">
            Model {data.id.toUpperCase()} provides maximum versatility—able to carry
            7 passengers and their cargo. Each second row seat folds flat independently,
            creating flexible storage for skis, furniture, luggage and more. The
            liftgate opens to a low trunk floor that makes loading and unloading
            easy and quick.
            <span class="underline cursor-pointer"
              >Chat with a Tesla Advisor</span>
            to learn more about Model {data.id.toUpperCase()}
            or <span class="underline cursor-pointer">schedule a demo</span> drive
            today.
          </p>
        </div>
      </div>
      <div
        class="flex flex-col sm:hidden gap-4 sm:gap-4 justify-center w-full p-4 items-center text-sm">
        <button
          class="bg-white  w-80 text-black hover:bg-zinc-800 hover:text-white transition-all duration-300 px-4 py-2 rounded shadow border-[3px] border-zinc-800"
          >Order Now</button>
        <button
          class="bg-gray-100 w-80 text-black px-4 py-2 rounded hover:bg-gray-200 transition-all duration-300"
          >View Inventory</button>
      </div>
    </div>
  </section>

  <HomeFooter />
</main>
