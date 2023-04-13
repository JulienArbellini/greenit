<script lang="ts">
  import HeroPicture from "../../components/HeroPicture.svelte";
  import HomeFooter from "../../components/HomeFooter.svelte";
  import Logo from "../../components/Logo.svelte";
  import MenuButton from "../../components/MenuButton.svelte";
  import ProductHeaders from "../../components/ProductHeaders.svelte";
  import SellingText from "../../components/product/SellingText.svelte";
  import JsHelpers from "../../components/JSHelpers.svelte";

  export let data;
</script>

<ProductHeaders id={data.id} />
<JsHelpers />

<main class="flex flex-col overflow-auto">
  <header class="fixed z-10 flex w-full items-center justify-between px-3 py-2">
    <a
      class="ml-2 w-32"
      href="/"
      aria-label="home">
      <Logo color={data.page.logoColor} />
    </a>
    <MenuButton
      text="Menu"
      textColor={data.page.textColor} />
  </header>
  <section
    class="relative h-screen min-h-screen w-screen transition duration-500">
    <HeroPicture
      id={data.id}
      path="products" />
    <div
      class="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-between pt-36 pb-6 {data
        .page.textColor} fly-in">
      <div class="text-center">
        <h2 class="mb-2 font-huge text-4xl">{data.page.title}</h2>
        <h2 class="mb-4 text-sm font-bold underline underline-offset-4">
          {data.page.subtitle}
        </h2>
      </div>
      <div
        class="flex w-full flex-col items-center justify-center gap-2 text-sm">
        <div class="flex w-80 justify-between">
          {#each data.page.heroStats as stat}
            <div class="flex flex-col items-center text-white">
              <h2 class="font-huge text-xl">{stat.title}</h2>
              <h2 class="text-[0.68rem] font-bold">{stat.subtitle}</h2>
            </div>
          {/each}
        </div>
        <div
          class="flex w-full flex-col items-center justify-center gap-4 p-4 text-sm sm:flex-row sm:gap-4">
          <button
            class="w-80 rounded border-[3px] border-white bg-zinc-800 px-4 py-2 text-white shadow transition-all duration-300 hover:bg-white hover:text-black"
            >Order Now</button>
          <button class="w-80 rounded bg-zinc-800 px-4 py-2 text-white shadow"
            >View Inventory</button>
        </div>
      </div>
    </div>
  </section>
  <section class="flex w-screen flex-col">
    <div class="flex max-h-[50%] items-center justify-end sm:justify-center">
      <picture>
        <source
          srcset="/images/products/model-{data.page
            .skelId}-hero-safety-mobile.avif"
          type="image/avif"
          media="(max-width: 700px)" />
        <source
          srcset="/images/products/model-{data.page
            .skelId}-hero-safety-mobile.webp"
          type="image/webp"
          media="(max-width: 700px)" />
        <source
          srcset="/images/products/model-{data.page.skelId}-hero-safety.avif"
          type="image/avif"
          media="(min-width: 700px)" />
        <source
          srcset="/images/products/model-{data.page.skelId}-hero-safety.webp"
          type="image/webp"
          media="(min-width: 700px)" />
        <img
          src="/images/products/model-{data.page
            .skelId}-hero-safety-mobile.webp"
          loading="lazy"
          class="object-cover opacity-0 transition-all duration-1000 sm:max-w-[800px]"
          alt="Skeleton of an electric car model {data.page
            .skelId} from Tesla" />
      </picture>
    </div>
    <div class="flex w-screen flex-col items-center justify-center">
        <SellingText
          title="Safety"
          subtitle="Designed for Safety">
          <div>
            <p class="pt-4">
              Safety is the most important part of every Tesla. We design our
              vehicles to <span class="cursor-pointer underline"
                >exceed safety standards</span
              >.
            </p>
            <p class="pt-5 font-big">5-Star Rating</p>
            <p>
              Model {data.id.toUpperCase()} achieved NHTSA 5-star safety ratings
              in every category and subcategory.
            </p>
            <p class="pt-5 font-big">MTop Safety Pick+</p>
            <p>
              Model {data.id.toUpperCase()} received the IIHS Top Safety Pick+ award,
              with top ratings in all crashworthiness and front crash prevention
              categories.
            </p>
          </div>
        </SellingText>
      <div class="flex w-screen flex-col items-center justify-center">
        <SellingText
          title="Utility"
          subtitle="A Place For Everything">
          <p class="pt-4">
            Model {data.id.toUpperCase()} provides maximum versatility—able to carry
            7 passengers and their cargo. Each second row seat folds flat independently,
            creating flexible storage for skis, furniture, luggage and more. The
            liftgate opens to a low trunk floor that makes loading and unloading
            easy and quick.
            <span class="cursor-pointer underline"
              >Chat with a Tesla Advisor</span>
            to learn more about Model {data.id.toUpperCase()}
            or <span class="cursor-pointer underline">schedule a demo</span> drive
            today.
          </p>
        </SellingText>
      </div>
    </div>
  </section>

  <section class="mt-10 flex w-screen flex-col items-center">
    <picture>
      <source
        srcset="/images/products/seats-mobile.avif"
        type="image/avif"
        media="(max-width: 599px)" />
      <source
        srcset="/images/products/seats-mobile.jpg"
        type="image/jpeg"
        media="(max-width: 599px)" />
      <source
        srcset="/images/products/seats.avif"
        type="image/avif" />
      <source
        srcset="/images/products/seats.jpg"
        type="image/jpeg" />
      <img
        src="/images/products/seats.jpg"
        loading="lazy"
        class="h-full w-screen object-cover opacity-0 transition-all duration-1000 md:max-w-3xl md:rounded-3xl"
        alt="hero model-{data.id}" />
    </picture>
    <p class="mt-5 text-center text-sm">
      Versatile seating and storage for cargo and passengers
    </p>
  </section>
  <section class="flex w-screen flex-col">
    <SellingText
      title="All-Wheel Drive"
      subtitle="Dual Motor">
      <p class="pt-4">
        Tesla All-Wheel Drive has two ultra-responsive, independent electric
        motors that digitally control torque to the front and rear wheels—for
        far better handling, traction and stability control. Model {data.id.toUpperCase()}
        is capable in rain, snow, mud and off-road.
        <span class="underline">Compare Models</span>
      </p>
    </SellingText>
  </section>
  <section class="flex w-screen flex-col">
    <SellingText
      title="Range"
      subtitle="Go Anywhere">
      <p class="pt-4">
        Model {data.id.toUpperCase()} is fully electric, so you never need to visit
        a gas station again. If you charge overnight at home, you can wake up to
        a full battery every morning. And when you’re on the road, it’s easy to plug
        in along the way—at any public station or with the Tesla charging network.
        We currently have over 40,000 Superchargers worldwide, with six new locations
        opening every week.
        <span class="underline">Chat with a Tesla Advisor</span>
        to learn more about Model {data.id.toUpperCase()} or
        <span class="underline">schedule a demo drive</span> today.
      </p>
    </SellingText>
    <div class="mt-10 flex w-screen flex-col items-center">
      <picture>
        <source
          srcset="/images/products/autopilot-mobile.avif"
          type="image/avif"
          media="(max-width: 599px)" />
        <source
          srcset="/images/products/autopilot-mobile.jpg"
          type="image/jpeg"
          media="(max-width: 599px)" />
        <source
          srcset="/images/products/autopilot.avif"
          type="image/avif" />
        <source
          srcset="/images/products/autopilot.jpg"
          type="image/jpeg" />
        <img
          src="/images/products/autopilot.jpg"
          loading="lazy"
          class="h-full w-screen object-cover opacity-0 transition-all duration-1000 md:max-w-3xl md:rounded-3xl"
          alt="hero model-{data.id}" />
      </picture>

      <SellingText
        title="Autopilot"
        subtitle="Future of Driving">
        <p class="pt-4">
          Autopilot's advanced safety and convenience features are designed to
          assist you with the most burdensome parts of driving.
        </p>
      </SellingText>
    </div>
  </section>
  <section>
    <div
      class="fly-in flex h-screen w-screen flex-col items-center justify-center">
      <div class="flex max-w-4xl flex-col p-10 text-sm sm:flex-row">
        <div
          class="mr-10 hidden w-64 flex-col  items-center justify-center gap-4 p-4 text-sm sm:visible sm:flex sm:gap-4">
          <div class="flex max-w-4xl flex-col text-sm">
            <h2 class="font-huge text-2xl">
              Order Model {data.id.toUpperCase()}
            </h2>
          </div>
          <button
            class="w-48  rounded border-[3px] border-zinc-800 bg-white px-4 py-2 text-black shadow transition-all duration-300 hover:bg-zinc-800 hover:text-white"
            >Order Now</button>
          <button
            class="w-48 rounded bg-gray-100 px-4 py-2 text-black transition-all duration-300 hover:bg-gray-200"
            >View Inventory</button>
        </div>
        <div class="flex max-w-4xl flex-col text-sm">
          <h2 class="mb-10 w-full text-center font-huge text-2xl sm:hidden">
            Order Model {data.id.toUpperCase()}
          </h2>

          <picture>
            <source
              srcset="/images/products/order-{data.id}.avif"
              type="image/avif" />
            <source
              srcset="/images/products/order-{data.id}.jpg"
              type="image/jpeg" />
            <img
              src="/images/products/order-{data.id}.jpg"
              loading="lazy"
              class="h-full w-screen object-cover opacity-0 transition-all duration-1000 md:max-w-full md:rounded-3xl"
              alt="hero model-{data.id}" />
          </picture>
        </div>
      </div>
      <div
        class="flex w-full flex-col items-center justify-center gap-4 p-4 text-sm sm:hidden sm:gap-4">
        <button
          class="w-80  rounded border-[3px] border-zinc-800 bg-white px-4 py-2 text-black shadow transition-all duration-300 hover:bg-zinc-800 hover:text-white"
          >Order Now</button>
        <button
          class="w-80 rounded bg-gray-100 px-4 py-2 text-black transition-all duration-300 hover:bg-gray-200"
          >View Inventory</button>
      </div>
    </div>
  </section>
  <HomeFooter />
</main>
