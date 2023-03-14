<script>

  import Logo from "../components/Logo.svelte";
  import MenuButton from "../components/MenuButton.svelte";

</script>
<main class="flex flex-col w-full h-full">
    <div class="fixed px-3 py-2 w-full flex justify-between items-center">
        <div class="w-32 ml-2">
            <Logo />
        </div>
        <MenuButton text="Menu" />
    </div>
    {#each "syx3" as l}
    <section class="h-screen w-screen transition duration-500">
        <picture>
            <source srcset="/images/home/hero-model-{l}-mobile.jpg" media="(max-width: 599px)">
            <source srcset="/images/home/hero-model-{l}.jpg">
            <img src="/images/home/hero-model-{l}.jpg" loading="lazy" class="h-full w-screen object-cover shadow-inner" alt="hero model {l}">
        </picture>
    </section> 
    {/each}
</main>
