<script>
  import HomeFooter from "../components/HomeFooter.svelte";
  import Logo from "../components/Logo.svelte";
  import MenuButton from "../components/MenuButton.svelte";
</script>

<svelte:head>
  <title>Tesla - Green IT</title>
  <link rel="image_src" href="/images/home/hero-model-3.jpg" />
  <meta name="description" content="Tesla is accelerating the world';s transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses." />
  <meta name="keywords" content="Tesla, Model S, Model Y, Model X, Model 3, Énergie" />
  <link rel="canonical" href="https://green-it.vercel.app/" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@tesla" />
  <meta name="twitter:description" content="Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses." />
  <meta name="twitter:title" content="Tesla - Green IT" />
  <meta name="twitter:creator" content="@tesla" />
  <meta name="twitter:url" content="https://green-it.vercel.app/" />

  <meta property="og:title" content="Tesla - Green IT" />
  <meta property="og:description" content="Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://green-it.vercel.app/" />
  <meta property="og:image" content="/images/home/hero-model-3.jpg" />
  <meta property="og:site_name" content="Tesla - Green IT" />
  <meta property="og:locale" content="en_US" />
</svelte:head>

<main class="flex flex-col w-full h-full">
  <header class="fixed px-3 py-2 w-full flex justify-between items-center z-10">
    <h1 class="w-32 ml-2">
      <Logo />
    </h1>
    <MenuButton text="Menu" />
  </header>
  {#each "syx3" as l}
    <section class="h-screen w-screen transition duration-500 relative">
      <picture>
        <source
          srcset="/images/home/hero-model-{l}-mobile.jpg"
          media="(max-width: 599px)" />
        <source srcset="/images/home/hero-model-{l}.jpg" />
        <img
          src="/images/home/hero-model-{l}.jpg"
          loading="lazy"
          class="h-full w-screen object-cover shadow-inner"
          alt="hero model {l}" />
      </picture>
      <div
        class="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-between pt-20 pb-10 items-center">
        <h2 class="text-5xl mb-4">Model {l.toUpperCase()}</h2>
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
  {#each [{ id: "solar-panels", title: "Solar Panels", subtitle: "Lowest Cost Solar Panels in America" }, { id: "solar-roof", title: "Solar Roof", subtitle: "Produce Clean Energy From Your Roof" }, { id: "charger", title: "Accessories", subtitle: "Browser All Our Other Accessories", singleBtn: true }] as p}
    <section class="h-screen w-screen transition duration-500 relative">
      <picture>
        <source
          srcset="/images/home/hero-{p.id}-mobile.jpg"
          media="(max-width: 599px)" />
        <source srcset="/images/home/hero-{p.id}.jpg" />
        <img
          src="/images/home/hero-{p.id}.jpg"
          loading="lazy"
          class="h-full w-screen object-cover shadow-inner"
          alt="hero {p.id}" />
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
