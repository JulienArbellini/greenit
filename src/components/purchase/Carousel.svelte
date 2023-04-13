<script>
  import Logo from "../Logo.svelte";
  import MenuButton from "../MenuButton.svelte";
</script>

<div class="container flex w-full flex-col items-center">
  <header class="fixed z-10 flex w-full items-center justify-between px-3 py-2">
    <a
      href="/"
      class="ml-2 w-32">
      <Logo />
    </a>
    <MenuButton text="Menu" />
  </header>
  <div class="demo-image max-w-xl pt-20">
    <img
      src="/images/purchase/model-s-white-show.avif"
      alt="White Car"
      class="car-image"
      id="white-img-show" />
    <img
      src="/images/purchase/model-s-blue-show.avif"
      alt="Blue Car"
      class="car-image"
      id="blue-img-show" />
    <img
      src="/images/purchase/model-s-grey-show.avif"
      alt="Grey Car"
      class="car-image"
      id="grey-img-show" />
    <img
      src="/images/purchase/model-s-red-show.avif"
      alt="Red Car"
      class="car-image"
      id="red-img-show" />
    <img
      src="/images/purchase/model-s-black-show.avif"
      alt="Black Car"
      class="car-image"
      id="black-img-show" />
  </div>
  <div class="mt-5 flex w-full max-w-xl flex-col items-center px-2">
    <h1 class="mb-2 font-huge text-3xl">Model S</h1>
    <p class="text-sm">Est. Delivery: Apr 2023</p>
    <p class="text-sm underline">Enter Delivery ZIP Code</p>
    <div
      class="mt-8 flex h-10 w-full cursor-pointer flex-row items-center justify-around rounded-md bg-gray-200 p-1 text-center font-big text-sm">
      <div
        class="flex h-full w-full items-center justify-center rounded-md bg-white shadow">
        Purchase Price
      </div>
      <div class="w-full">Potential Savings*</div>
    </div>
    <div class="mt-10 flex w-full justify-around gap-10">
      <div class="flex flex-col text-center">
        <p class="font-huge text-2xl">375<span class="text-sm">mi</span></p>
        <p class="text-xs">Range (est.)</p>
      </div>
      <div class="flex flex-col text-center">
        <p class="font-huge text-2xl">149<span class="text-sm">mph</span></p>
        <p class="text-xs underline">Top Speed</p>
      </div>
      <div class="flex flex-col text-center">
        <p class="font-huge text-2xl">3.1<span class="text-sm">sec</span></p>
        <p class="text-xs">0-60 mph</p>
      </div>
    </div>
    <div class="mt-10 flex w-full flex-col">
      <p class="ml-1 font-big">Dual Motor All-Wheel Drive</p>

      <input
        type="radio"
        name="awd"
        id="s"
        checked />
      <label
        for="s"
        class="">
        <div
          class="flew row mt-2 flex h-14 w-full items-center justify-between rounded border-[3px] border-blue-600 p-4 font-big">
          <span>Model S</span>
          <span>$84,990</span>
        </div>
      </label>
      <p class="ml-1 mt-5 font-big">Tri Motor All-Wheel Drive</p>

      <input
        type="radio"
        name="s"
        id="plaid" />
      <label
        for="plaid"
        class="">
        <div
          class="flew row mt-2 flex h-14 w-full items-center justify-between rounded border-[1px] border-zinc-900 p-4 font-big">
          <span>Plaid</span>
          <span>$104,990</span>
        </div>
      </label>
    </div>
    <p class="mt-4 text-center text-xs">
      All prices are shown without potential incentives or gas savings of
      $6,000. <span class="underline">Learn More</span>
    </p>
    <button
      class="mt-10 rounded bg-gray-200 px-6 py-2 text-center font-big text-xs"
      >Feature Details</button>
  </div>
  <p class="mt-10 w-full rounded-lg text-center font-big text-xl">Paint</p>
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
  <div class="mt-5 flex h-10 w-full max-w-xl flex-row justify-center gap-2">
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

  <p class="mt-10 w-full rounded-lg text-center font-big text-xl mt-20">Wheel</p>
  <div class="wheel-container mt-10 w-full max-w-xl">
    <input
      type="radio"
      name="wheel"
      id="wheel-1"
      class="color-option"
      checked />
    <input
      type="radio"
      name="wheel"
      id="wheel-2"
      class="color-option" />

    <img
      src="/images/purchase/white-wheel-1.avif"
      alt="White Car Wheel 1"
      class="car-image"
      id="white-wheel-1" />

    <img
      src="/images/purchase/white-wheel-2.avif"
      alt="White Car Wheel 2"
      class="car-image"
      id="white-wheel-2" />

    <img
      src="/images/purchase/blue-wheel-1.avif"
      alt="Blue Car Wheel 1"
      class="car-image"
      id="blue-wheel-1" />

    <img
      src="/images/purchase/blue-wheel-2.avif"
      alt="Blue Car Wheel 2"
      class="car-image"
      id="blue-wheel-2" />

    <img
      src="/images/purchase/grey-wheel-1.avif"
      alt="Grey Car Wheel 1"
      class="car-image"
      id="grey-wheel-1" />

    <img
      src="/images/purchase/grey-wheel-2.avif"
      alt="Grey Car Wheel 2"
      class="car-image"
      id="grey-wheel-2" />

    <img
      src="/images/purchase/red-wheel-1.avif"
      alt="Red Car Wheel 1"
      class="car-image"
      id="red-wheel-1" />

    <img
      src="/images/purchase/red-wheel-2.avif"
      alt="Red Car Wheel 2"
      class="car-image"
      id="red-wheel-2" />

    <img
      src="/images/purchase/black-wheel-1.avif"
      alt="Black Car Wheel 1"
      class="car-image"
      id="black-wheel-1" />

    <img
      src="/images/purchase/black-wheel-2.avif"
      alt="Black Car Wheel 2"
      class="car-image"
      id="black-wheel-2" />
  </div>
  <div class="mt-5 flex h-10 w-full max-w-xl flex-row justify-center gap-2">
    <label
      for="wheel-1"
      class="cursor-pointer">
      <img
        src="/images/purchase/wheel-1.avif"
        alt="White Car"
        class="h-full w-full object-cover" />
    </label>
    <label
      for="wheel-2"
      class="cursor-pointer">
      <img
        src="/images/purchase/wheel-2.avif"
        alt="Blue Car"
        class="h-full w-full object-cover" />
    </label>
  </div>
</div>

<style>
  .demo-image > img {
    display: none;
  }

  :has(#white:checked) :has(#wheel-1:checked) #white-wheel-1 {
    display: block;
  }

  :has(#white:checked) :has(#wheel-2:checked) #white-wheel-2 {
    display: block;
  }

  :has(#blue:checked) :has(#wheel-1:checked) #blue-wheel-1 {
    display: block;
  }

  :has(#blue:checked) :has(#wheel-2:checked) #blue-wheel-2 {
    display: block;
  }

  :has(#grey:checked) :has(#wheel-1:checked) #grey-wheel-1 {
    display: block;
  }

  :has(#grey:checked) :has(#wheel-2:checked) #grey-wheel-2 {
    display: block;
  }

  :has(#red:checked) :has(#wheel-1:checked) #red-wheel-1 {
    display: block;
  }

  :has(#red:checked) :has(#wheel-2:checked) #red-wheel-2 {
    display: block;
  }

  :has(#black:checked) :has(#wheel-1:checked) #black-wheel-1 {
    display: block;
  }

  :has(#black:checked) :has(#wheel-2:checked) #black-wheel-2 {
    display: block;
  }

  :has(#white:checked) #white-img-show {
    display: block;
  }

  :has(#blue:checked) #blue-img-show {
    display: block;
  }

  :has(#grey:checked) #grey-img-show {
    display: block;
  }

  :has(#red:checked) #red-img-show {
    display: block;
  }

  :has(#black:checked) #black-img-show {
    display: block;
  }

  :has(#black:checked) label[for="black"] {
    outline: 2px solid #3e6ae1;
  }

  :has(#wheel-1:checked) label[for="wheel-1"] {
    outline: 2px solid #3e6ae1;
  }

  :has(#wheel-2:checked) label[for="wheel-2"] {
    outline: 2px solid #3e6ae1;
  }

  :has(#blue:checked) label[for="blue"] {
    outline: 2px solid #3e6ae1;
  }

  :has(#grey:checked) label[for="grey"] {
    outline: 2px solid #3e6ae1;
  }

  :has(#red:checked) label[for="red"] {
    outline: 2px solid #3e6ae1;
  }

  :has(#white:checked) label[for="white"] {
    outline: 2px solid #3e6ae1;
  }

  :has(#white:checked) label[for="white"]::after {
    content: "Pearl White Multi-Coat\AIncluded";
    font-family: "GothamSSM-Large";
    white-space: pre-wrap;
    width: 100%;
    text-align: center;
    left: 0;
    padding-top: 1rem;
    position: absolute;
  }

  :has(#black:checked) label[for="black"]::after {
    content: "Solid Black\A$1,500";
    font-family: "GothamSSM-Large";
    white-space: pre-wrap;
    width: 100%;
    text-align: center;
    left: 0;
    padding-top: 1rem;
    position: absolute;
  }

  :has(#blue:checked) label[for="blue"]::after {
    content: "Deep Blue Metallic\A$1,500";
    font-family: "GothamSSM-Large";
    white-space: pre-wrap;
    width: 100%;
    text-align: center;
    left: 0;
    padding-top: 1rem;
    position: absolute;
  }

  :has(#grey:checked) label[for="grey"]::after {
    content: "Midnight Silver Metallic\A$1,500";
    font-family: "GothamSSM-Large";
    white-space: pre-wrap;
    width: 100%;
    text-align: center;
    left: 0;
    padding-top: 1rem;
    position: absolute;
  }

  :has(#red:checked) label[for="red"]::after {
    content: "Ultra Red\A$3,000";
    font-family: "GothamSSM-Large";
    white-space: pre-wrap;
    width: 100%;
    text-align: center;
    left: 0;
    padding-top: 1rem;
    position: absolute;
  }

  :has(#wheel-1:checked) label[for="wheel-1"]::after {
    content: "19\" Tempest Wheels\AIncluded";
    font-family: "GothamSSM-Large";
    white-space: pre-wrap;
    width: 100%;
    text-align: center;
    left: 0;
    padding-top: 1rem;
    position: absolute;
  }
  :has(#wheel-2:checked) label[for="wheel-2"]::after {
    content: "21\" Arachnid Wheels\A$4,500";
    font-family: "GothamSSM-Large";
    white-space: pre-wrap;
    width: 100%;
    text-align: center;
    left: 0;
    padding-top: 1rem;
    position: absolute;
  }
  .image-container {
    position: relative;
  }
  .wheel-container {
    position: relative;
  }

  .car-image {
    display: none;
  }

  input[type="radio"] {
    display: none;
  }

  label {
    border-radius: 50%;
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
