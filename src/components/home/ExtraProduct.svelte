<script lang="ts">
  type Product = {
    id: string;
    title: string;
    subtitle: string;
    alt: string;
    singleBtn?: boolean;
  };
  export let product: Product;
</script>

<section
  class="relative h-screen min-h-screen w-screen snap-start transition duration-500">
  <picture>
    <source
      srcset="/images/home/hero-{product.id}-mobile.avif"
      media="(max-width: 599px)"
      type="image/avif" />
    <source
      srcset="/images/home/hero-{product.id}-mobile.jpg"
      media="(max-width: 599px)"
      type="image/jpeg" />
    <source
      srcset="/images/home/hero-{product.id}-1280.avif"
      media="(max-width: 1000px)"
      type="image/avif" />
    <source
      srcset="/images/home/hero-{product.id}-1280.jpg"
      media="(max-width: 1000px)"
      type="image/jpeg" />
    <source
      srcset="/images/home/hero-{product.id}-1920.avif"
      media="(max-width: 2000px)"
      type="image/avif" />
    <source
      srcset="/images/home/hero-{product.id}-1920.jpg"
      media="(max-width: 2000px)"
      type="image/jpeg" />
    <source
      srcset="/images/home/hero-{product.id}.jpg"
      type="image/jpeg" />
    <img
      src="/images/home/hero-{product.id}.jpg"
      loading="lazy"
      class="h-full w-screen object-cover opacity-0 transition-all duration-1000"
      alt={product.alt} />
  </picture>
  <div
    class="fly-in absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-between pb-10 pt-20">
    <div class="flex flex-col items-center">
      <h2 class="mb-4 text-5xl">{product.title}</h2>
      <p class="text-md">{product.subtitle}</p>
    </div>
    <div
      class="flex w-full flex-col justify-center gap-2 p-4 sm:flex-row sm:gap-4">
      <button class="rounded bg-zinc-800 px-4 py-2 text-white shadow sm:w-64"
        >Shop Now</button>
      {#if !product.singleBtn}
        <button
          class="rounded bg-gray-200/75 px-4 py-2 text-black shadow sm:w-64"
          >Learn More</button>
      {/if}
    </div>
  </div>
</section>
