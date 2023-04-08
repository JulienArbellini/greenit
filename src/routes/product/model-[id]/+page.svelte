<script lang="ts">
  export let data;
  import Logo from "../../../components/Logo.svelte";
  import MenuButton from "../../../components/MenuButton.svelte";
  import OrderButton from "../../../components/OrderButton.svelte";
  import HistoryButton from "../../../components/HistoryButton.svelte";
  import Animation from "../../../components/Animation.svelte";
  console.log(data.image?.autopilot);
</script>

<main class="flex flex-col w-full h-full overflow-x-hidden">
  <div class="absolute px-3 py-2 w-full flex justify-between items-center z-10">
    <div class="w-32 ml-2">
      <Logo />
    </div>
    <MenuButton text="Menu" />
  </div>

  <section class="h-screen w-screen transition duration-500 relative">
    <picture>
      <source
        srcset={data.image?.Main}
        media="(max-width: 599px)" />
        <source srcset={data.image?.Main} />
      <img
      src={data.image?.Main}
        loading="lazy"
        class="h-full w-screen object-cover shadow-inner"
        alt="hero model y" />
    </picture>
    <div
      class="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-between pt-20 pb-10 items-center">
      <h2 class="text-5xl mb-4"> {data.info.model}</h2>
      <div
        class="relative bottom-20 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center w-full p-4">
        <button
          class="bg-zinc-800  sm:w-64 text-white px-4 py-2 rounded shadow"
          >Custom Order</button>
        <button
          class="bg-gray-200/75 sm:w-64 text-black px-4 py-2 rounded shadow"
          >Demo Drive</button>
      </div>
    </div>
    <svg
    class="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce w-6 h-6 text-gray-200"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
  </section>




  <section
    class="w-screen transition duration-500 flex text-gray-400 text-sm">
    <div class="opacity-0 w-1/5 h-screen p-2 flex flex-col items-center space-y-96" id="animate">
      <div class="mt-9  w-10/12 ">
        <div
          class="text-gray-500 text-lg  "
          >
          Safety
        </div>
        <h1 class="text-xl font-bold text-gray-800">Designed for Safety</h1>
        <div class="text-gray-400 mt-4 ">
          Safety is the most important part of every Tesla. We design our
          vehicles to exceed safety standards.
        </div>
        <div class="mt-3 text-sm font-extrabold text-black">5-Star Rating</div>
        <div class="mt-1">
          Model Y achieved NHTSA 5-star safety ratings in every category and
          subcategory.
        </div>
        <div class="mt-3 text-sm font-extrabold text-black">
          Top Safety Pick+
        </div>
        <div class="mt-1">
          Model Y received the IIHS Top Safety Pick+ award, with top ratings in
          all crashworthiness and front crash prevention categories
        </div>
      </div>
      <div
        id="bottom"
        class="w-full  flex flex-col items-center justify-center gap-5">
        <OrderButton text="Order Now" />
        <HistoryButton text="View Inventory" />
      </div>
    </div>
    <picture class="w-4/5">
      <source
        srcset={data.image?.Safety}
        media="(max-width: 599px)" />
      <source srcset={data.image?.Safety} />
      <img
        src={data.image?.Safety}
        loading="lazy"
        class="h-full w-screen object-cover shadow-inner"
        alt="hero model y" />
    </picture>
  </section>

  <!--
  <section
    class="h-screen w-screen transition duration-500 relative flex flex-col justify-center items-center">
    <div class="flex flex-row justify-center w-7/12  mb-12 h-1/6 gap-6">
      <div class="flex flex-col w-2/5">
        <div class="mt-3 text-gray-600 font-thin">Utility</div>
        <div class="text-xl">A Place For Everything</div>
        <div class="flex flex-row gap-5 w-full mt-4">
          <OrderButton text="Order Now" />
          <HistoryButton text="View Inventory" />
        </div>
      </div>
      <div class="w-3/5 text-sm text-gray-600">
        Model Y provides maximum versatility—able to carry 7 passengers and
        their cargo. Each second row seat folds flat independently, creating
        flexible storage for skis, furniture, luggage and more. The liftgate
        opens to a low trunk floor that makes loading and unloading easy and
        quick. Chat with a Tesla Advisor to learn more about Model Y or schedule
        a demo drive today.
      </div>
    </div>
    <picture class="h-3/6 w-8/12 bg-black rounded-2xl">
      <source
        srcset={data.image?.Utility}
        media="(max-width: 599px)" />
      <source srcset={data.image?.Utility} />
      <img
        src={data.image?.Utility}
        loading="lazy"
        class="h-full w-screen object-cover shadow-inner rounded-2xl"
        alt="hero model y" />
    </picture>
  </section>

  <section class="h-screen w-screen transition duration-500 flex flex-col ">
    <picture class="rounded w-full h-5/6">
      <source
        srcset={data.image?.AWD}
        media="(max-width: 599px)" />
      <source srcset={data.image?.AWD} />
      <img
        src={data.image?.AWD}
        loading="lazy"
        class="h-full w-screen object-cover shadow-inner"
        alt="hero model y" />
    </picture>
    <div class="h-1/6 w-full flex flex-row justify-center items-center gap-5">
      <div class="flex flex-col justify-center items-center w-3/6">
        <div class="text-gray-600 font-thin">Transmission intégrale</div>
        <div class="text-black text-2xl text-start ">Dual Motor</div>
        <div class="w-1/3 flex justify-center mt-3">
          <OrderButton text="Order Now" />
        </div>
      </div>
      <div class="w-4/6 flex items-start">
        <div class="text-gray-400 text-sm w-3/5">
          La transmission intégrale Tesla dispose de deux moteurs indépendants
          ultraréactifs qui contrôlent numériquement le couple transmis aux
          roues avant et arrière, pour une tenue de route supérieure et un
          meilleur contrôle de la motricité et de la stabilité. Le Model Y
          conserve ses capacités quelles que soient les conditions : pluie,
          neige, boue et hors des sentiers battus.
        </div>
      </div>
    </div>
  </section>

  <section class="h-screen w-screen transition duration-500 flex flex-col ">
    <picture class="rounded w-full h-5/6">
      <source
        srcset={data.image?.Interior}
        media="(max-width: 599px)" />
      <source srcset={data.image?.Interior} />
      <img
        src={data.image?.Interior}
        loading="lazy"
        class="h-full w-screen object-cover shadow-inner"
        alt="hero model y" />
    </picture>
    <div class="h-1/6 w-full flex flex-row justify-center items-center gap-5">
      <div class="flex flex-col justify-center items-center w-3/6">
        <div class="text-gray-600 font-thin">Transmission intégrale</div>
        <div class="text-black text-2xl text-start ">Dual Motor</div>
        <div class="w-1/3 flex justify-center mt-3">
          <OrderButton text="Order Now" />
        </div>
      </div>
      <div class="w-4/6 flex items-start">
        <div class="text-gray-400 text-sm w-3/5">
          La transmission intégrale Tesla dispose de deux moteurs indépendants
          ultraréactifs qui contrôlent numériquement le couple transmis aux
          roues avant et arrière, pour une tenue de route supérieure et un
          meilleur contrôle de la motricité et de la stabilité. Le Model Y
          conserve ses capacités quelles que soient les conditions : pluie,
          neige, boue et hors des sentiers battus.
        </div>
      </div>
    </div>
  </section>

  <section class="h-screen w-screen transition duration-500 flex flex-col ">
    <picture class="rounded w-full h-4/6">
      <source
        srcset={data.image?.autopilot}
        media="(max-width: 599px)" />
      <source srcset={data.image?.autopilot} />
      <img
        src={data.image?.autopilot}
        loading="lazy"
        class="h-full w-screen object-cover shadow-inner"
        alt="hero model y" />
    </picture>
    <div class="h-2/6 w-full flex flex-row justify-center items-center gap-5">
      <div class="flex flex-col justify-center items-center w-3/6">
        <div class="text-gray-600 font-thin">Autopilot</div>
        <div class="text-black text-2xl text-start ">Future of Driving</div>
        <div class="w-2/3 flex justify-end mt-5 gap-4">
          <OrderButton text="Order Now" />
          <HistoryButton text="View Inventory" />
        </div>
      </div>
      <div class="w-4/6 flex items-start">
        <div class="text-gray-400 text-sm w-3/5">
          Autopilot's advanced safety and convenience features are designed to
          assist you with the most burdensome parts of driving.
        </div>
      </div>
    </div>
  </section>

  <section class="h-screen w-screen transition duration-500 flex flex-col ">
    <picture class="rounded w-full h-4/6">
      <source
        srcset={data.image?.Interior}
        media="(max-width: 599px)" />
      <source srcset={data.image?.Interior} />
      <img
        src={data.image?.Interior}
        loading="lazy"
        class="h-full w-screen object-cover shadow-inner"
        alt="hero model y" />
    </picture>
    <div class="h-2/6 w-full flex flex-row justify-center items-center gap-5">
      <div class="flex flex-col justify-center items-center w-3/6">
        <div class="text-gray-600 font-thin">Interior</div>
        <div class="text-black text-2xl text-start ">
          Built Around the Driver
        </div>
        <div class="w-2/3 flex justify-end mt-5 gap-4">
          <OrderButton text="Order Now" />
          <HistoryButton text="View Inventory" />
        </div>
      </div>
      <div class="w-4/6 flex items-start">
        <div class="text-gray-400 text-sm w-3/5">
          With an elevated seating position and low dash, the driver has a
          commanding view of the road ahead. The interior of Model Y is simple
          and clean, with a 15-inch touch screen, immersive sound system and an
          expansive all-glass roof that creates extra headroom and provides a
          seamless view of the sky. Compare Models
        </div>
      </div>
    </div>
  </section> -->
</main>
<!-- <footer class="h-24 w-full flex flex-row justify-center gap-5 text-xs">
  <div class="h-full flex flex-col justify-center items-center gap-5">
    <div class="h1">Tesla © 2023</div>
  </div>
  <div class="h-full flex flex-col justify-center items-center">
    <div class="h1">Privacy & Legal</div>
  </div>
  <div class="h-full flex flex-col justify-center items-center">
    <div class="h1">Vehicle Recalls</div>
  </div>
  <div class="h-full flex flex-col justify-center items-center">
    <div class="h1">Contact</div>
  </div>
  <div class="h-full flex flex-col justify-center items-center">
    <div class="h1">Careers</div>
  </div>
  <div class="h-full flex flex-col justify-center items-center">
    <div class="h1">News</div>
  </div>
  <div class="h-full flex flex-col justify-center items-center">
    <div class="h1">Engage</div>
  </div>
  <div class="h-full flex flex-col justify-center items-center">
    <div class="h1">Locations</div>
  </div>
</footer> -->
<Animation />
