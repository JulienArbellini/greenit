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
    });
  </script>
</svelte:head>
