<script lang="ts">
  export let i: number;
  export let l: string;
</script>

<section
  class="relative h-screen min-h-screen w-screen snap-start transition duration-500">
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
      loading={i === 0 ? undefined : "lazy"}
      class="h-full w-screen object-cover opacity-0 transition-all duration-1000"
      alt="Electric car model {l} from Tesla" />
  </picture>
  <div
    class="fly-in absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-between pt-20 pb-10">
    <h2 class="mb-4 text-5xl font-bold">
      Model {l.toUpperCase()}
    </h2>
    <div
      class="flex w-full flex-col justify-center gap-2 p-4 sm:flex-row sm:gap-4">
      <a
        href="/model-{l}"
        class="rounded bg-zinc-800 px-4 py-2 text-center text-white shadow sm:w-64"
        >Custom Order</a>
      <button class="rounded bg-gray-200/75 px-4 py-2 text-black shadow sm:w-64"
        >Demo Drive</button>
    </div>
  </div>
</section>
