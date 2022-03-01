<script>
  import Header from "./components/Header.svelte";
  import Skills from "./components/Skills.svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { onMount } from "svelte";

  let data;
  let tag;
  let tagPos;

  gsap.registerPlugin(ScrollTrigger);

  let triggerPoint = innerHeight * 0.66;

  onMount(() => {

    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

    const contentMarkers = gsap.utils.toArray(".mySkill");

    contentMarkers.forEach((marker) => {
      marker.id = marker.dataset.markerContent;
    });

    //escuchar el scroll
    var last_known_scroll_position = 0;
    var ticking = false;

    function checkPos(scroll_pos) {
      contentMarkers.forEach((marker) => {
        tagPos = marker.getBoundingClientRect();
        if (tagPos.y < triggerPoint) {
          tag = marker.id;
          data = {x: tagPos.x, y: tagPos.y};
        }
      });
    }

    window.addEventListener("scroll", function (e) {

      last_known_scroll_position = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          checkPos(last_known_scroll_position);
          ticking = false;
        });
      }
      ticking = true;
    });
    //fin escuchar el escroll
  });
</script>

<div class="main-grapper">
  <div class="sticky">
    <header>
      <Header />
    </header>
    <div class="skills"><Skills {data} {tag} /></div>
    <div class="gradient" />
  </div>

  <main>
    <div class="content">
      <div class="scroll-main">
        <div class="scroll-wrapper">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            dignissimos nemo nostrum dolorem mollitia minus itaque repellat
            accusamus? Quam ratione natus eius quidem nemo minima? Repellendus
            aperiam sapiente facere! Id. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Saepe illo dignissimos praesentium dolore!
            Aspernatur, inventore. Eaque impedit, fuga necessitatibus officiis
            voluptates nihil voluptate cupiditate. Sit saepe quis ad a
            consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Ea nam voluptatem quisquam tempore sapiente cum veritatis
            distinctio, impedit veniam esse aperiam, porro ex saepe nesciunt,
            iusto dicta minima iste pariatur? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Doloremque dignissimos nemo nostrum
            dolorem mollitia minus itaque repellat accusamus? Quam ratione natus
            eius quidem nemo minima? Repellendus aperiam sapiente facere! Id.
            Lorem ipsum
            <span data-marker-content="html" class="mySkill" id="html">HTML</span>
            dolor sit amet consectetur adipisicing elit. Saepe illo dignissimos praesentium
            dolore! Aspernatur, inventore. Eaque impedit, fuga necessitatibus officiis
            voluptates nihil voluptate cupiditate. Sit saepe quis ad a consectetur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nam voluptatem
            quisquam tempore sapiente cum veritatis distinctio, impedit veniam esse
            aperiam, porro ex saepe nesciunt, iusto dicta minima iste pariatur?Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos
            nemo nostrum dolorem mollitia minus itaque repellat accusamus? Quam ratione
            natus eius quidem nemo minima? Repellendus aperiam sapiente facere! Id.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe illo dignissimos
            praesentium dolore! Aspernatur, inventore. Eaque impedit, fuga necessitatibus<span
            id="css"
              data-marker-content="css"
              class="mySkill myCss">CSS</span
            >
            officiis voluptates  ex saepe nesciunt, iusto dicta minima iste pariatur?Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos
            nemo nostrum dolorem mollitia minus itaque repellat accusamus? Quam ratione
            natus eius quidem nemo miniex saepe nesciunt, iusto dicta minima iste pariatur?Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos
            nemo nostrum dolorem mollitia minus itaque repellat accusamus? Quam ratione
            natus eius quidem nemo mini nihil voluptate cupiditate. Sit saepe quis ad a consectetur.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea nam voluptatem
            quisquam tempore sapiente <span data-marker-content="sass" class="mySkill" id="sass">SASS</span
              >cum veritatis distinctio, impedit veniam esse
            aperiam, porro ex saepe nesciunt, iusto dicta minima iste pariatur?Lorem
            ipsum dolor sit amet consectetur ex saepe nesciunt, iusto dicta minima iste pariatur?Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos
            nemo nostrum dolorem mollitia minus itaque repellat accusamus? Quam ratione
            natus eius quidem nemo mini  adipisicing elit. Doloremque dignissimos
            nemo nostrum dolorem mollitia minus itaque repellat accusamus? Quam ratione
            natus eius quidem nemo minima? Repellendus aperiam sapiente facere! Id.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe illo dignissimos
            praesentium dolore! Aspernatur, inventore. Eaque impedit, fuga necessitatibus
            <span data-marker-content="js" class="mySkill" id="js">JavaScript</span
            >officiis voluptates nihil voluptate cupiditate. Sit saepe quis ad a
            consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Ea nam voluptatem quisquam tempore sapiente cum veritatis
            distinctio, impedit veniam esse aperiam, porro ex saepe nesciunt,
            iusto dicta minima iste pariatur?
            ptates nihil voluptate cupiditate. Sit saepe quis ad a
            consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Ea nam voluptatem quisquam tempore sapiente cum veritatis
            distinctio, impedit veniam esse aperiam, porro ex saepe nesciunt,
            iusto dicta minima iste pariatur?
            ptates nihil voluptate cupiditate. Sit saepe quis ad a
            consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Ea nam voluptatem quisquam <span data-marker-content="svelte" class="mySkill" id="svelte">Svelte</span
              > tempore sapiente cum veritatis
            distinctio, impedit veniam esse aperiam, porro ex saepe nesciunt,
            iusto dicta minima iste pariatur? impedit veniam esse aperiam, porro ex saepe nesciunt,
            iusto dicta minima iste pariatur?
            ptates nihil voluptate cupiditate. Sit saepe quis ad a
            consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Ea nam voluptatem quisquam tempore sapiente cum veritatis
            distinctio, impedit veniam esse aperiam, porro ex saepe nesciunt,
            iusto dicta minima iste pariatur?
            ptates nihil voluptate cupiditate. Sit saepe quis ad a
            consectetur. Lorem ipsum dolor sit,impedit veniam esse aperiam, porro ex saepe nesciunt,
            iusto dicta minima iste pariatur?
            ptates nihil voluptate cupiditate. Sit saepe quis ad a
            consectetur. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Ea nam voluptatem quisquam tempore sapiente cum veritatis
            distinctio, impedit veniam esse aperiam, porro ex saepe nesciunt,
            iusto dicta minima iste pariatur?
            ptates nihil voluptate cupiditate. Sit saepe quis ad a
            consectetur. Lorem ipsum dolor sit,
          </p>
        </div>
        <span class="scroll-down">scroll down</span>
      </div>
    </div>
  </main>
</div>

<style>
  .main-grapper {
    width: 100%;
    max-width: 480px;
    min-width: 360px;
  }
  .sticky {
    position: sticky;
    top: 0;
    z-index: 100;
  }
  main {
    background-color: red;
    width: 100%;
    height: 100%;
    max-width: 480px;
    min-width: 360px;
    margin: 0 auto;
  }
  header {
    width: 100%;
    height: 33%;
  }
  .gradient {
    width: 100%;
    height: 50px;
    background: rgb(255, 255, 255);
    background: -moz-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 16%,
      rgba(255, 255, 255, 1) 86%
    );
    background: -webkit-linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 16%,
      rgba(255, 255, 255, 1) 86%
    );
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 16%,
      rgba(255, 255, 255, 1) 86%
    );
  }

  .content {
    background-color: #ffffff;
    width: 100%;
  }

  .skills {
    position: relative;
    background-color: white;
    width: 100%;
    height: 20%;
    border-radius: 25px 25px 0px 0px;
    margin-top: -20px;
  }

  p {
    margin: 0;
    padding: 50px;
    color: rgba(0, 0, 0, 0.623);
    line-height: 2rem;
  }

  .mySkill {
    display: inline-block;
    background-color: chocolate;
  }
</style>
