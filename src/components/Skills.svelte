<script>
  import { onMount } from "svelte";
  import {logoAnimation} from '../../scripts/animation';
  import gsap from "gsap";
  export let data;
  export let tag;

  
  let skillsLogos = [];


  onMount(() => {
    skillsLogos = gsap.utils.toArray(".logos-core");
    skillsLogos.forEach((marker) => {
      marker.id = marker.dataset.markerContent;
    });
  });

  $: animateTag(tag);

  function animateTag(tag) {
    if (tag !== '') {
      skillsLogos.forEach((marker) => {
        if (tag === marker.id) {
          // calculate position of the logos img 
          const logoSkillPos = (document.querySelector(`.${tag}`)).getBoundingClientRect();
          const _x = data.x - logoSkillPos.x;
          const _y = data.y - logoSkillPos.y;
          logoAnimation(marker.id, _x,_y, logoSkillPos);
        }
      });
      const tempArray = skillsLogos.filter(item=> item.id != tag);
      skillsLogos = tempArray;
    }
  }
</script>

<div class="content-skills">
  <div class="title"><span>Skills</span></div>
  <div class="skills-logos">
    <div class="core">
      <span class="logos">
        <img
          data-marker-content="html"
          class="logos-core html"
          src="images/html.png"
          alt="html logo"
        />
        <img
          data-marker-content="css"
          class="logos-core css"
          src="images/css.png"
          alt="css logo"
        />
        <img
          data-marker-content="sass"
          class="logos-core sass"
          src="images/sass.png"
          alt="sass logo"
        />
        <img
          data-marker-content="js"
          class="logos-core js"
          src="images/js.png"
          alt="javascript logo"
        />
        <img
          data-marker-content="svelte"
          class="logos-core svelte"
          src="images/svelte.png"
          alt="svelte logo"
        />
      </span>
      <span class="core-title">core</span>
    </div>
    <div class="soft">
      <span class="logos-soft">
        <img
          class="logo-soft-img"
          src="images/firebase.png"
          alt="firebase logo"
        />
        <img class="logo-soft-img" src="images/heroku.png" alt="heroku logo" />
        <img class="logo-soft-img" src="images/git.png" alt="git logo" />
        <img class="logo-soft-img" src="images/pwa.png" alt="pwa logo" />
        <img class="logo-soft-img" src="images/uxui.png" alt="uxui logo" />
        <img class="logo-soft-img" src="images/figma.png" alt="figma logo" />
        <img class="logo-soft-img" src="images/xd.png" alt="xd logo" />
        <img class="logo-soft-img" src="images/ai.png" alt="illustrator logo" />
        <img class="logo-soft-img" src="images/ps.png" alt="photoshop logo" />
        <img class="logo-soft-img" src="images/wp.png" alt="wordpress logo" />
      </span>
      <span class="soft-title">complementaries</span>
    </div>
  </div>
</div>

<style>
  .content-skills {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .title {
    color: rgb(118, 118, 118);
    padding-top: 15px;
    padding-left: 15px;
    letter-spacing: 1px;
    height: 15%;
  }
  .skills-logos {
    display: flex;
    padding: 0px 10px;
    justify-content: space-between;
    height: 75%;
  }
  .core {
    flex-grow: 5;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    height: 90%;
    border-right: 1px solid rgba(0, 0, 0, 0.356);
  }
  .soft {
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
    position: relative;
    height: 90%;
    overflow: hidden;
  }
  .core-title,
  .soft-title {
    color: rgb(118, 118, 118);
    font-size: 12px;
    display: flex;
    justify-content: center;
  }
  .logos-core {
    position: relative;
    width: 40px;
    opacity: 0;
  }
  .logos-soft {
    display: flex;
    align-content: center;
    max-width: 100%;
    overflow-x: scroll;
  }
  .logo-soft-img {
    width: 40px;
  }
</style>
