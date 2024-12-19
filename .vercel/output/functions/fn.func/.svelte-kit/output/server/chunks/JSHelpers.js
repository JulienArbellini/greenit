import { h as head } from "./index2.js";
function HomeFooter($$payload) {
  $$payload.out += `<footer class="flex w-screen snap-end flex-col items-center justify-center gap-3 py-5 text-xs text-zinc-500 sm:flex-row"><span class="cursor-pointer">Tesla © 2023</span> <span class="cursor-pointer">Privacy &amp; Legal</span> <span class="cursor-pointer">Vehicle Recalls</span> <a href="/contact" class="cursor-pointer">Contact</a> <span class="cursor-pointer">Careers</span> <span class="cursor-pointer">News</span> <span class="cursor-pointer">Engage</span> <span class="cursor-pointer">Locations</span></footer>`;
}
function JSHelpers($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.out += `<script>
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll("img").forEach((e) => {
        e.addEventListener("load", () => {
          e.classList.remove("opacity-0");
        }),
          e.complete && e.classList.remove("opacity-0");
      });
      const e = new IntersectionObserver(function (e, t) {
          e.forEach(async (e) => {
            e.isIntersecting
              ? (await new Promise((e) => setTimeout(e, 500)),
                e.target.classList.remove("opacity-0"),
                e.target.classList.add("animate-fly-in"))
              : (e.target.classList.remove("animate-fly-in"),
                e.target.classList.add("opacity-0"));
          });
        }),
        t = document.querySelectorAll(".fly-in");
      t.forEach((e) => {
        e.classList.add("opacity-0");
      }),
        t.forEach((t) => {
          e.observe(t);
        });
    });
  <\/script><!---->`;
  });
}
export {
  HomeFooter as H,
  JSHelpers as J
};
