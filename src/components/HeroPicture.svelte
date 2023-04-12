<script lang="ts">
  export let id: string;
  export let path: string;
</script>

<picture>
  <source
    srcset="/images/{path}/hero-model-{id}-mobile.avif"
    type="image/avif"
    media="(max-width: 599px)" />
  <source
    srcset="/images/{path}/hero-model-{id}-mobile.jpg"
    type="image/jpeg"
    media="(max-width: 599px)" />
  <source
    srcset="/images/{path}/hero-model-{id}-1280.avif"
    type="image/avif"
    media="(max-width: 1000px)" />
  <source
    srcset="/images/{path}/hero-model-{id}-1280.jpg"
    type="image/jpeg"
    media="(max-width: 1000px)" />
  <source
    srcset="/images/{path}/hero-model-{id}-1920.avif"
    type="image/avif"
    media="(max-width: 2000px)" />
  <source
    srcset="/images/{path}/hero-model-{id}-1920.jpg"
    type="image/jpeg"
    media="(max-width: 2000px)" />
  <source
    srcset="/images/{path}/hero-model-{id}.avif"
    type="image/avif" />
  <source
    srcset="/images/{path}/hero-model-{id}.jpg"
    type="image/jpeg" />
  <img
    src="/images/{path}/hero-model-{id}.jpg"
    loading="lazy"
    class="h-full w-screen object-cover opacity-0 transition-all duration-1000"
    alt="Electric car model {id} from Tesla" />
</picture>
