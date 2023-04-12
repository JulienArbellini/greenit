<script lang="ts">
  import FlyIn from "../../components/FlyIn.svelte";
  import HeroPicture from "../../components/HeroPicture.svelte";
  import HomeFooter from "../../components/HomeFooter.svelte";
  import ImageLoader from "../../components/ImageLoader.svelte";
  import Logo from "../../components/Logo.svelte";
  import MenuButton from "../../components/MenuButton.svelte";
  import ProductHeaders from "../../components/ProductHeaders.svelte";
  import SellingText from "../../components/product/SellingText.svelte";

  export let data;
</script>

<ProductHeaders id={data.id} />
<ImageLoader />
<FlyIn />

<main class="flex flex-col overflow-auto">
  <header class="fixed px-3 py-2 w-full flex justify-between items-center z-10">
    <a
      class="w-32 ml-2"
      href="/"
      aria-label="home">
      <Logo color={data.page.logoColor} />
    </a>
    <MenuButton
      text="Menu"
      textColor={data.page.textColor} />
  </header>
  <section
    class="h-screen w-screen min-h-screen transition duration-500 relative">
    <HeroPicture
      id={data.id}
      path="products" />
    <div
      class="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-between pt-36 pb-6 items-center {data
        .page.textColor} fly-in">
      <div class="text-center">
        <h2 class="text-4xl font-huge mb-2">{data.page.title}</h2>
        <h2 class="underline text-sm underline-offset-4 font-bold mb-4">
          {data.page.subtitle}
        </h2>
      </div>
      <div
        class="flex flex-col gap-2 justify-center w-full items-center text-sm">
        <div class="flex justify-between w-80">
          {#each data.page.heroStats as stat}
            <div class="flex flex-col text-white items-center">
              <h2 class="text-xl font-huge">{stat.title}</h2>
              <h2 class="text-[0.68rem] font-bold">{stat.subtitle}</h2>
            </div>
          {/each}
        </div>
        <div
          class="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center w-full p-4 items-center text-sm">
          <button
            class="bg-zinc-800 hover:bg-white hover:text-black transition-all duration-300 w-80 text-white px-4 py-2 rounded shadow border-[3px] border-white"
            >Order Now</button>
          <button class="bg-zinc-800 w-80 text-white px-4 py-2 rounded shadow"
            >View Inventory</button>
        </div>
      </div>
    </div>
  </section>
  <section class="w-screen flex flex-col">
    <div class="flex items-center justify-end sm:justify-center max-h-[50%]">
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
          class="sm:max-w-[800px] object-cover opacity-0 transition-all duration-1000"
          alt="Skeleton of an electric car model {data.page
            .skelId} from Tesla" />
      </picture>
    </div>
    <div class="flex flex-col justify-center items-center w-screen">
      <div class="flex flex-col sm:flex-row max-w-4xl p-10 text-sm fly-in">
        <SellingText
          title="Safety"
          subtitle="Designed for Safety">
          <p class="pt-4">
            Safety is the most important part of every Tesla. We design our
            vehicles to <span class="underline cursor-pointer"
              >exceed safety standards</span
            >.
          </p>
          <p class="pt-5 font-big">5-Star Rating</p>
          <p>
            Model {data.id.toUpperCase()} achieved NHTSA 5-star safety ratings in
            every category and subcategory.
          </p>
          <p class="pt-5 font-big">MTop Safety Pick+</p>
          <p>
            Model {data.id.toUpperCase()} received the IIHS Top Safety Pick+ award,
            with top ratings in all crashworthiness and front crash prevention categories.
          </p>
        </SellingText>
      </div>
      <div class="flex flex-col justify-center items-center w-screen">
        <SellingText
          title="Utility"
          subtitle="A Place For Everything">
          <p class="pt-4">
            Model {data.id.toUpperCase()} provides maximum versatility—able to carry
            7 passengers and their cargo. Each second row seat folds flat independently,
            creating flexible storage for skis, furniture, luggage and more. The
            liftgate opens to a low trunk floor that makes loading and unloading
            easy and quick.
            <span class="underline cursor-pointer"
              >Chat with a Tesla Advisor</span>
            to learn more about Model {data.id.toUpperCase()}
            or <span class="underline cursor-pointer">schedule a demo</span> drive
            today.
          </p>
        </SellingText>
      </div>
    </div>
  </section>

  <section class="w-screen flex flex-col items-center mt-10">
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
        class="h-full w-screen object-cover md:rounded-3xl md:max-w-3xl opacity-0 transition-all duration-1000"
        alt="hero model-{data.id}" />
    </picture>
    <p class="text-center text-sm mt-5">
      Versatile seating and storage for cargo and passengers
    </p>
  </section>
  <section class="w-screen flex flex-col">
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
  <section class="w-screen flex flex-col">
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
    <div class="w-screen flex flex-col items-center mt-10">
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
          class="h-full w-screen object-cover md:rounded-3xl md:max-w-3xl opacity-0 transition-all duration-1000"
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
      class="flex flex-col justify-center items-center w-screen h-screen fly-in">
      <div class="flex flex-col sm:flex-row max-w-4xl p-10 text-sm">
        <div
          class="sm:flex flex-col w-64 mr-10  hidden sm:visible gap-4 sm:gap-4 justify-center p-4 items-center text-sm">
          <div class="flex flex-col max-w-4xl text-sm">
            <h2 class="font-huge text-2xl">
              Order Model {data.id.toUpperCase()}
            </h2>
          </div>
          <button
            class="bg-white  w-48 text-black hover:bg-zinc-800 hover:text-white transition-all duration-300 px-4 py-2 rounded shadow border-[3px] border-zinc-800"
            >Order Now</button>
          <button
            class="bg-gray-100 w-48 text-black px-4 py-2 rounded hover:bg-gray-200 transition-all duration-300"
            >View Inventory</button>
        </div>
        <div class="flex flex-col max-w-4xl text-sm">
          <h2 class="font-huge text-2xl sm:hidden mb-10 w-full text-center">
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
              class="h-full w-screen object-cover md:rounded-3xl md:max-w-full opacity-0 transition-all duration-1000"
              alt="hero model-{data.id}" />
          </picture>
        </div>
      </div>
      <div
        class="flex flex-col sm:hidden gap-4 sm:gap-4 justify-center w-full p-4 items-center text-sm">
        <button
          class="bg-white  w-80 text-black hover:bg-zinc-800 hover:text-white transition-all duration-300 px-4 py-2 rounded shadow border-[3px] border-zinc-800"
          >Order Now</button>
        <button
          class="bg-gray-100 w-80 text-black px-4 py-2 rounded hover:bg-gray-200 transition-all duration-300"
          >View Inventory</button>
      </div>
    </div>
  </section>
  <HomeFooter />
</main>
