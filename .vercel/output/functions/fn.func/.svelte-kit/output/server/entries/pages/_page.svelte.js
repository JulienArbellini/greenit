import { h as head, e as stringify, f as bind_props, c as pop, p as push, i as ensure_array_like } from "../../chunks/index2.js";
import { J as JSHelpers, H as HomeFooter } from "../../chunks/JSHelpers.js";
import { a as attr, L as Logo, M as MenuButton } from "../../chunks/MenuButton.js";
import { e as escape_html } from "../../chunks/escaping.js";
function HomeHeaders($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Tesla - Green IT</title>`;
    $$payload2.out += `<meta name="description" content="Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses."> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:description" content="Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses."> <meta name="twitter:title" content="Tesla - Green IT"> <meta name="twitter:url" content="https://tesla.birdi.ng/"> <meta property="og:title" content="Tesla - Green IT"> <meta property="og:description" content="Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses."> <meta property="og:type" content="website"> <meta property="og:image" content="/images/home/hero-model-3.jpg">`;
  });
}
function ExtraProduct($$payload, $$props) {
  push();
  let product = $$props["product"];
  $$payload.out += `<section class="relative h-screen min-h-screen w-screen snap-start transition duration-500"><picture><source${attr("srcset", `/images/home/hero-${stringify(product.id)}-mobile.avif`)} media="(max-width: 599px)" type="image/avif"> <source${attr("srcset", `/images/home/hero-${stringify(product.id)}-mobile.jpg`)} media="(max-width: 599px)" type="image/jpeg"> <source${attr("srcset", `/images/home/hero-${stringify(product.id)}-1280.avif`)} media="(max-width: 1000px)" type="image/avif"> <source${attr("srcset", `/images/home/hero-${stringify(product.id)}-1280.jpg`)} media="(max-width: 1000px)" type="image/jpeg"> <source${attr("srcset", `/images/home/hero-${stringify(product.id)}-1920.avif`)} media="(max-width: 2000px)" type="image/avif"> <source${attr("srcset", `/images/home/hero-${stringify(product.id)}-1920.jpg`)} media="(max-width: 2000px)" type="image/jpeg"> <source${attr("srcset", `/images/home/hero-${stringify(product.id)}.jpg`)} type="image/jpeg"> <img${attr("src", `/images/home/hero-${stringify(product.id)}.jpg`)} loading="lazy" class="h-full w-screen object-cover opacity-0 transition-all duration-1000"${attr("alt", product.alt)}></picture> <div class="fly-in absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-between pb-10 pt-20"><div class="flex flex-col items-center"><h2 class="mb-4 text-5xl">${escape_html(product.title)}</h2> <p class="text-md">${escape_html(product.subtitle)}</p></div> <div class="flex w-full flex-col justify-center gap-2 p-4 sm:flex-row sm:gap-4"><button class="rounded bg-zinc-800 px-4 py-2 text-white shadow sm:w-64">Shop Now</button> `;
  if (!product.singleBtn) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="rounded bg-gray-200/75 px-4 py-2 text-black shadow sm:w-64">Learn More</button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div></section>`;
  bind_props($$props, { product });
  pop();
}
function HomeHero($$payload, $$props) {
  push();
  let i = $$props["i"];
  let l = $$props["l"];
  $$payload.out += `<section class="relative h-screen min-h-screen w-screen snap-start transition duration-500"><picture><source${attr("srcset", `/images/home/hero-model-${stringify(l)}-mobile.avif`)} type="image/avif" media="(max-width: 599px)"> <source${attr("srcset", `/images/home/hero-model-${stringify(l)}-mobile.jpg`)} type="image/jpeg" media="(max-width: 599px)"> <source${attr("srcset", `/images/home/hero-model-${stringify(l)}-1280.avif`)} type="image/avif" media="(max-width: 1000px)"> <source${attr("srcset", `/images/home/hero-model-${stringify(l)}-1280.jpg`)} type="image/jpeg" media="(max-width: 1000px)"> <source${attr("srcset", `/images/home/hero-model-${stringify(l)}-1920.avif`)} type="image/avif" media="(max-width: 2000px)"> <source${attr("srcset", `/images/home/hero-model-${stringify(l)}-1920.jpg`)} type="image/jpeg" media="(max-width: 2000px)"> <source${attr("srcset", `/images/home/hero-model-${stringify(l)}.avif`)} type="image/avif"> <source${attr("srcset", `/images/home/hero-model-${stringify(l)}.jpg`)} type="image/jpeg"> <img${attr("src", `/images/home/hero-model-${stringify(l)}.jpg`)}${attr("loading", i === 0 ? void 0 : "lazy")} class="h-full w-screen object-cover opacity-0 transition-all duration-1000"${attr("alt", `Electric car model ${stringify(l)} from Tesla`)}></picture> <div class="fly-in absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-between pb-10 pt-20"><h2 class="mb-4 text-5xl font-bold">Model ${escape_html(l.toUpperCase())}</h2> <div class="flex w-full flex-col justify-center gap-2 p-4 sm:flex-row sm:gap-4"><a${attr("href", `/purchase/model-${stringify(l)}`)} class="rounded bg-zinc-800 px-4 py-2 text-center text-white shadow sm:w-64">Custom Order</a> <button class="rounded bg-gray-200/75 px-4 py-2 text-black shadow sm:w-64">Demo Drive</button></div></div></section>`;
  bind_props($$props, { i, l });
  pop();
}
function _page($$payload) {
  const extraProducts = [
    {
      id: "solar-panels",
      title: "Solar Panels",
      subtitle: "Lowest Cost Solar Panels in America",
      alt: "A close-up of solar panels mounted on a rooftop"
    },
    {
      id: "solar-roof",
      title: "Solar Roof",
      subtitle: "Produce Clean Energy From Your Roof",
      alt: "A house with a roof made of solar tiles"
    },
    {
      id: "charger",
      title: "Accessories",
      subtitle: "Browser All Our Other Accessories",
      alt: "An assortment of charging cables and adapters for electric vehicles",
      singleBtn: true
    }
  ];
  const each_array = ensure_array_like("s3xy");
  const each_array_1 = ensure_array_like(extraProducts);
  HomeHeaders($$payload);
  $$payload.out += `<!----> `;
  JSHelpers($$payload);
  $$payload.out += `<!----> <main class="flex h-screen w-full snap-y snap-mandatory flex-col overflow-y-auto overflow-x-hidden"><header class="fixed z-10 flex w-full items-center justify-between px-3 py-2"><h1 class="ml-2 w-32">`;
  Logo($$payload, {});
  $$payload.out += `<!----></h1> `;
  MenuButton($$payload, { text: "Menu" });
  $$payload.out += `<!----></header> <!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let l = each_array[i];
    HomeHero($$payload, { l, i });
  }
  $$payload.out += `<!--]--> <section class="flex h-screen min-h-screen w-screen snap-start flex-col items-center justify-around bg-black"><span class="fly-in text-center text-4xl text-white">Discover the Roadster</span> <video class="w-full max-w-2xl md:rounded-xl" loop muted controls preload="none" poster="/images/home/thumb.webp" height="720" width="1152"><source src="/images/home/plaid-av1.webm" type="video/webm; codecs=av1"> <source src="/images/home/plaid-vp9.webm" type="video/webm; codecs=vp9"></video> <div class="fly-in flex flex-col items-center justify-center gap-2 p-4 sm:flex-row sm:gap-4"><button class="max-h-12 rounded bg-gray-200 px-4 py-2 text-black shadow sm:w-64">Soon Available</button></div></section> <!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let product = each_array_1[$$index_1];
    ExtraProduct($$payload, { product });
  }
  $$payload.out += `<!--]--> `;
  HomeFooter($$payload);
  $$payload.out += `<!----></main>`;
}
export {
  _page as default
};
