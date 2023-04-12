<script lang="ts">
  export let l: string;
</script>

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
    class="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-between pt-20 pb-10 items-center fly-in">
    <h2 class="text-5xl font-bold mb-4">
      Model {l.toUpperCase()}
    </h2>
    <div
      class="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center w-full p-4">
      <a
        href="/model-{l}"
        class="bg-zinc-800 text-center sm:w-64 text-white px-4 py-2 rounded shadow"
        >Custom Order</a>
      <button class="bg-gray-200/75 sm:w-64 text-black px-4 py-2 rounded shadow"
        >Demo Drive</button>
    </div>
  </div>
</section>
