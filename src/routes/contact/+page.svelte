<script>
  import Logo from "../../components/Logo.svelte";
  import MenuButton from "../../components/MenuButton.svelte";
</script>

<svelte:head>
  <title>Tesla - Green IT</title>
  <meta
    name="description"
    content="Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses." />

  <meta
    name="twitter:card"
    content="summary_large_image" />
  <meta
    name="twitter:description"
    content="Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses." />
  <meta
    name="twitter:title"
    content="Tesla - Contact" />
  <meta
    name="twitter:url"
    content="https://tesla.birdi.ng/contact" />

  <meta
    property="og:title"
    content="Tesla - Contact" />
  <meta
    property="og:description"
    content="Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses." />
  <meta
    property="og:type"
    content="website" />
  <meta
    property="og:image"
    content="/images/home/hero-model-3.jpg" />
</svelte:head>

<main class="flex flex-col overflow-auto">
  <header class="fixed z-10 flex w-full items-center justify-between px-3 py-2">
    <a
      href="/"
      class="ml-2 w-32">
      <Logo />
    </a>
    <MenuButton text="Menu" />
  </header>

  <div class="mt-20 flex flex-col px-10">
    <h1 class=" font-huge text-4xl">Contact</h1>
    <p class="mt-5 font-huge text-lg">Sales</p>

    <p>
      <span class="underline">Visit our Find Us page</span> to locate your nearest
      Tesla location.
    </p>

    <p class="mt-5 font-huge text-lg">Customer Support</p>

    <p>
      <span class="underline">Visit our Support page</span> to find answers and learn
      about our products.
    </p>

    <p class="mt-5 font-huge text-lg">Roadside Assistance</p>

    <p>
      Request roadside assistance from the Tesla app. <span class="underline"
        >Find international phone numbers</span> for emergency roadside assistance.
    </p>
    <span class="underline">Safety recall information</span>

    <p class="mt-5 font-huge text-lg">Careers</p>

    <p>
      <span class="underline">Visit our careers page</span> for a list of current
      employment opportunities.
    </p>

    <p class="mt-5 font-huge text-lg">First Responders</p>

    <p>
      <span class="underline">Visit our First Responders page</span> to download
      Tesla reference guides for emergency personnel.
    </p>

    <p class="mt-5 font-huge text-lg">Press</p>
    <p>North America</p>
    <a
      href="mailto:press@tesla.com"
      class="underline">press@tesla.com</a>

    <p>Europe & Middle East</p>
    <a
      href="mailto:eupress@tesla.com"
      class="underline">eupress@tesla.com</a>
    <p>Australia & Asia</p>
    <a
      href="mailto:apacpress@tesla.com"
      class="underline">apacpress@tesla.com</a>
    <p>China</p>
    <a
      href="mailto:china-press@tesla.com"
      class="underline">china-press@tesla.com</a>
  </div>
</main>
