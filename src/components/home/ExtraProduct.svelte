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
  class="h-screen w-screen min-h-screen transition duration-500 relative  snap-start">
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
    class="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-between pt-20 pb-10 items-center fly-in">
    <div class="flex flex-col items-center">
      <h2 class="text-5xl mb-4">{product.title}</h2>
      <p class="text-md">{product.subtitle}</p>
    </div>
    <div
      class="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center w-full p-4">
      <button class="bg-zinc-800  sm:w-64 text-white px-4 py-2 rounded shadow"
        >Shop Now</button>
      {#if !product.singleBtn}
        <button
          class="bg-gray-200/75 sm:w-64 text-black px-4 py-2 rounded shadow"
          >Learn More</button>
      {/if}
    </div>
  </div>
</section>
