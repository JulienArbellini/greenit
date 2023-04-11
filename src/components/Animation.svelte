<script lang="ts">
  console.log("ts");
</script>

<div>
  <script lang="js">
    window.addEventListener("scroll", function () {
      var element = document.querySelector("#animate");
      var elementRect = element.getBoundingClientRect();
      var elementVisible =
        elementRect.top <= window.innerHeight - 500 &&
        elementRect.bottom >= 300;

      if (elementVisible) {
        element.classList.remove("sm:opacity-0");
        element.classList.add("sm:transition-opacity");
        element.classList.add("sm:ease-in");
        element.classList.add("sm:duration-500");
        element.classList.add("sm:opacity-100");
        // console.log("visible")
      } else {
        element.classList.remove("sm:opacity-100");
        element.classList.add("sm:opacity-0");
        // console.log("not visible")
      }
    });
  </script>
</div>
