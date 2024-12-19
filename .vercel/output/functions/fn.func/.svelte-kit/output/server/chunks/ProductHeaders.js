import { h as head, f as bind_props, c as pop, e as stringify, p as push } from "./index2.js";
import { e as escape_html } from "./escaping.js";
import { a as attr } from "./MenuButton.js";
function ProductHeaders($$payload, $$props) {
  push();
  let id = $$props["id"];
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Tesla - Model ${escape_html(id.toUpperCase())}</title>`;
    $$payload2.out += `<meta name="description"${attr("content", `Information about the Tesla Model ${stringify(id.toUpperCase())}.`)}> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:description"${attr("content", `Information about the Tesla Model ${stringify(id.toUpperCase())}.`)}> <meta name="twitter:title"${attr("content", `Tesla - Model ${stringify(id.toUpperCase())}`)}> <meta name="twitter:url"${attr("content", `https://tesla.birdi.ng/model-${stringify(id)}`)}> <meta property="og:title"${attr("content", `Tesla - Model ${stringify(id.toUpperCase())}`)}> <meta property="og:description"${attr("content", `Information about the Tesla Model ${stringify(id.toUpperCase())}.`)}> <meta property="og:type" content="website"> <meta property="og:image"${attr("content", `/images/home/hero-model-${stringify(id)}.jpg`)}>`;
  });
  bind_props($$props, { id });
  pop();
}
export {
  ProductHeaders as P
};
