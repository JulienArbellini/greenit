<svelte:head>
  <script>
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
  </script>
</svelte:head>
