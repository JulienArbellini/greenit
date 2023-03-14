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
    <section class="h-screen w-screen">
        <img src="/images/home/hero-model-s.jpg" class="h-full w-screen object-cover" alt="hero">
    </section> 

    <section class="h-screen w-screen">
    </section> 

    <section class="h-screen w-screen">
        <img src="/images/home/hero-model-y.jpg" class="h-full w-screen object-cover" alt="hero">
    </section> 
</main>
