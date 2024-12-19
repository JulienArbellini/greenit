import{a,t as r,b as o}from"./disclose-version.7pOt-K0F.js";import"./legacy.DBmJDQxd.js";import{j as n,m as c}from"./runtime.2SSwYnVA.js";import{h as i}from"./render.B358DNcu.js";var p=r('<footer class="flex w-screen snap-end flex-col items-center justify-center gap-3 py-5 text-xs text-zinc-500 sm:flex-row"><span class="cursor-pointer">Tesla © 2023</span> <span class="cursor-pointer">Privacy & Legal</span> <span class="cursor-pointer">Vehicle Recalls</span> <a href="/contact" class="cursor-pointer">Contact</a> <span class="cursor-pointer">Careers</span> <span class="cursor-pointer">News</span> <span class="cursor-pointer">Engage</span> <span class="cursor-pointer">Locations</span></footer>');function y(s){var e=p();a(s,e)}var l=o(`<script>
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
  <\/script><!---->`,1);function g(s){i(e=>{var t=l(),m=n(c(t));a(e,t)})}export{y as H,g as J};
