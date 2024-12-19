import { f as bind_props, i as ensure_array_like, e as stringify } from "./index2.js";
import { f as fallback } from "./utils.js";
import { e as escape_html } from "./escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function Logo($$payload, $$props) {
  let color = fallback($$props["color"], "fill-black");
  $$payload.out += `<svg xmlns:xlink="http://www.w3.org/1999/xlink" class="w-full" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg" width="342" height="35"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"${attr("class", color)}></path></svg>`;
  bind_props($$props, { color });
}
function MenuButton($$payload, $$props) {
  let text = $$props["text"];
  let textColor = fallback($$props["textColor"], "black");
  const each_array = ensure_array_like(["x", "y", "s", "3"]);
  $$payload.out += `<label for="sidebarToggle"${attr("class", `cursor-pointer bg-black bg-opacity-10 px-4 py-[0.3rem] font-big text-sm backdrop-blur-lg transition-all duration-300 hover:bg-opacity-30 ${stringify(textColor)} rounded`)}>${escape_html(text)}</label> <input type="checkbox" id="sidebarToggle" class="hidden svelte-19lms9i"> <label for="sidebarToggle" class="pointer-events-none absolute right-0 top-0 z-50 h-screen w-screen bg-black bg-opacity-30 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 svelte-19lms9i"><section class="fixed right-0 top-0 z-50 h-screen w-80 translate-x-full transform bg-white bg-opacity-100 p-10 transition-all duration-300 svelte-19lms9i"><div class="mb-10 flex w-full justify-end"><label for="sidebarToggle" class="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></label></div> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let l = each_array[$$index];
    $$payload.out += `<a${attr("href", `/model-${stringify(l)}`)} class="block rounded-md px-4 py-2 hover:bg-gray-200">Model ${escape_html(l.toUpperCase())}</a>`;
  }
  $$payload.out += `<!--]--></section></label>`;
  bind_props($$props, { text, textColor });
}
export {
  Logo as L,
  MenuButton as M,
  attr as a
};
