<svelte:head>
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const images = document.querySelectorAll("img");
      images.forEach((img) => {
        img.addEventListener("load", () => {
          img.classList.remove("opacity-0");
        });

        if (img.complete) {
          img.classList.remove("opacity-0");
        }
      });
      function handleIntersection(entries, observer) {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting) {
            await new Promise((resolve) => setTimeout(resolve, 500));
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-fly-in");
          } else {
            entry.target.classList.remove("animate-fly-in");
            entry.target.classList.add("opacity-0");
          }
        });
      }

      const observer = new IntersectionObserver(handleIntersection);
      const flyInElements = document.querySelectorAll(".fly-in");
      flyInElements.forEach((element) => {
        element.classList.add("opacity-0");
      });

      flyInElements.forEach((element) => {
        observer.observe(element);
      });
    });
  </script>
</svelte:head>
