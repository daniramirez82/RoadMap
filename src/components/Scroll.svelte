<script>
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";

  gsap.registerPlugin(ScrollTrigger);

  onMount(() => {
    gsap.to(".c", {
      scrollTrigger: {
        trigger: ".c",
        start: 'bottom 80%', 
        toggleActions: 'restart pause reverse pause',
        markers: true,
      },
      x: 400,
      rotation: 360,
      duration: 3,
    });
  });
</script>

<div class="scroll-main">
  <div class="scroll-wrapper">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
      dignissimos nemo nostrum dolorem mollitia minus itaque repellat accusamus?
      Quam ratione natus eius quidem nemo minima? Repellendus aperiam sapiente
      facere! Id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
      illo dignissimos praesentium dolore! Aspernatur, inventore. Eaque impedit,
      fuga necessitatibus officiis voluptates nihil voluptate cupiditate. Sit
      saepe quis ad a consectetur. Lorem ipsum dolor sit, amet consectetur
      adipisicing elit. Ea nam voluptatem quisquam tempore sapiente cum
      veritatis distinctio, impedit veniam esse aperiam, porro ex saepe
      nesciunt, iusto dicta minima iste pariatur? Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Doloremque dignissimos nemo nostrum dolorem
      mollitia minus itaque repellat accusamus? Quam ratione natus eius quidem
      nemo minima? Repellendus aperiam sapiente facere! Id. Lorem ipsum </p><br />
      <div class="c"> HTML </div>

      <br />
      <p>dolor sit amet consectetur adipisicing elit. Saepe illo dignissimos
      praesentium dolore! Aspernatur, inventore. Eaque impedit, fuga
      necessitatibus officiis voluptates nihil voluptate cupiditate. Sit saepe
      quis ad a consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing
      elit. Ea nam voluptatem quisquam tempore sapiente cum veritatis
      distinctio, impedit veniam esse aperiam, porro ex saepe nesciunt, iusto
      dicta minima iste pariatur?Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Doloremque dignissimos nemo nostrum dolorem mollitia
      minus itaque repellat accusamus? Quam ratione natus eius quidem nemo
      minima? Repellendus aperiam sapiente facere! Id. Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Saepe illo dignissimos praesentium
      dolore! Aspernatur, inventore. Eaque impedit, fuga necessitatibus officiis
      voluptates nihil voluptate cupiditate. Sit saepe quis ad a consectetur.
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nam
      voluptatem quisquam tempore sapiente cum veritatis distinctio, impedit
      veniam esse aperiam, porro ex saepe nesciunt, iusto dicta minima iste
      pariatur?Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Doloremque dignissimos nemo nostrum dolorem mollitia minus itaque repellat
      accusamus? Quam ratione natus eius quidem nemo minima? Repellendus aperiam
      sapiente facere! Id. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Saepe illo dignissimos praesentium dolore! Aspernatur, inventore.
      Eaque impedit, fuga necessitatibus officiis voluptates nihil voluptate
      cupiditate. Sit saepe quis ad a consectetur. Lorem ipsum dolor sit, amet
      consectetur adipisicing elit. Ea nam voluptatem quisquam tempore sapiente
      cum veritatis distinctio, impedit veniam esse aperiam, porro ex saepe
      nesciunt, iusto dicta minima iste pariatur?
    </p>
  </div>
  <span class="scroll-down">scroll down</span>
</div>

<style>
  .scroll-main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .scroll-wrapper {
    width: 80%;
    height: 80%;
    background-color: aquamarine;
    border-radius: 25px;
    overflow-y: scroll;
  }
  p {
    margin-top: 80%;
    padding: 20px;
  }
  .scroll-down {
    margin-top: 10px;
  }
  .c{
    display: block;
  }
</style>
