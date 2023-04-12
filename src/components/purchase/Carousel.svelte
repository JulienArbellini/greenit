<div class="image-container w-full max-w-xl">
  <input
    type="radio"
    name="color"
    id="white"
    class="color-option"
    checked />
  <input
    type="radio"
    name="color"
    id="blue"
    class="color-option" />
  <input
    type="radio"
    name="color"
    id="grey"
    class="color-option" />
  <input
    type="radio"
    name="color"
    id="red"
    class="color-option" />
  <input
    type="radio"
    name="color"
    id="black"
    class="color-option" />

  <img
    src="/images/purchase/model-s-white.avif"
    alt="White Car"
    class="car-image"
    id="white-img" />
  <img
    src="/images/purchase/model-s-blue.avif"
    alt="Blue Car"
    class="car-image"
    id="blue-img" />
  <img
    src="/images/purchase/model-s-grey.avif"
    alt="Grey Car"
    class="car-image"
    id="grey-img" />
  <img
    src="/images/purchase/model-s-red.avif"
    alt="Red Car"
    class="car-image"
    id="red-img" />
  <img
    src="/images/purchase/model-s-black.avif"
    alt="Black Car"
    class="car-image"
    id="black-img" />
</div>
<div class="flex h-10 mt-5 w-full max-w-xl flex-row justify-center gap-2">
  <label
    for="white"
    class="cursor-pointer">
    <img
      src="/images/purchase/color-white.avif"
      alt="White Car"
      class="h-full w-full object-cover" />
  </label>
  <label
    for="blue"
    class="cursor-pointer">
    <img
      src="/images/purchase/color-blue.avif"
      alt="Blue Car"
      class="h-full w-full object-cover" />
  </label>
  <label
    for="grey"
    class="cursor-pointer">
    <img
      src="/images/purchase/color-grey.avif"
      alt="Grey Car"
      class="h-full w-full object-cover" />
  </label>
  <label
    for="red"
    class="cursor-pointer">
    <img
      src="/images/purchase/color-red.avif"
      alt="Red Car"
      class="h-full w-full object-cover" />
  </label>
  <label
    for="black"
    class="cursor-pointer">
    <img
      src="/images/purchase/color-black.avif"
      alt="Black Car"
      class="h-full w-full object-cover" />
  </label>
</div>

<style>
  .image-container {
    position: relative;
  }

  .car-image {
    display: none;
  }

  input[type="radio"] {
    display: none;
  }

  .color-option:checked#blue ~ .car-image#blue-img {
    display: block;
  }

  .color-option:checked#white ~ .car-image#white-img {
    display: block;
  }

  .color-option:checked#grey ~ .car-image#grey-img {
    display: block;
  }

  .color-option:checked#red ~ .car-image#red-img {
    display: block;
  }

  .color-option:checked#black ~ .car-image#black-img {
    display: block;
  }
</style>
