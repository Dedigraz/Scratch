<script>
    import { onMount, createEventDispatcher } from 'svelte';
    import image from "../lib/IMG_4290.jpeg"
    import Mid from '$lib/Mid.svelte';
    import Proficient from '$lib/Proficient.svelte';
    import Project from '$lib/Project.svelte';
  import Discord from '$lib/Discord.svelte';
  import Linkedin from '$lib/Linkedin.svelte';

    // let stateMachine = 
</script>

<section id="name" class=" pt-[136px] flex flex-col items-center">
    <h1 class="text-7xl mb-8">Ebunrere Adebanjo</h1>
    <h1 class="text-7xl mb-8 text-purple-400">Mobile & Fullstack Developer</h1>

    <p class="text-cyan-300 text-base mb-6 bg-cyan-800 space-x-8 rounded-xl w-fit px-4">
        <span>Backend</span>
        <span>Frontend</span>
        <span>Devops</span>
    </p>
    <p class="text-cyan-300 text-xs mb-8 bg-cyan-800 rounded-2xl w-fit px-4 py-2">
        Remote
    </p>

    <div class="py-5 px-2 border rounded-2xl ">
        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="33" viewBox="0 0 6 30" fill="none" style="transform: none;">
            <defs>
                <radialGradient id="Gradient" cx="0.25" cy="0.25" r="0.8" >
                  <stop offset="0%" stop-color="rgb(192 132 252)" />
                  <stop offset="100%" stop-color="rgb(103 232 249)" />
                </radialGradient>
              </defs>
            <path d="M0 0C0 0 0 2.5 3 2.5C6 2.5 6 0 6 0L3 39L0 0Z" fill="url(#Gradient)" ></path>
        </svg>
    </div>
</section>

<section id="aboutMe" class="grid grid-flow-row grid-cols-2 grid-rows-2 pt-24 w-full justify-items-center items-center gap-y-16 ">
    <div class="text-left space-y-8 max-w-screen-sm sm:px-2">
        <p class="text-4xl font-semibold max-w-screen-sm sm:px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi consectetur natus, </p>
        <div>
            <ul>
                <li>10+ years in programming</li>
                <li>6+ years in web development</li>
                <li>3 years in devops</li>
            </ul>
        </div>
        <p>
            <span>A seasoned developing, specialising in creating stunning, responsive and interactive experiences, that help my customers to get their points across to their customers </span>
        </p>
    </div>
    <div class="   sm:mx-2 h-80 w-full  flex justify-end pr-8">
        <div class="h-full w-1/2"><img class=" h-full w-full rounded-lg   object-cover" src={image} alt="Me at a Marathon"></div>
   </div>
    <div class="col-span-2 border-t border-x w-4/5 lg:w-3/5 rounded-t-lg  p-4" id="introspect">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis reprehenderit est rem assumenda, praesentium, perferendis quo animi ut magni ad eveniet ex? Commodi tempora, libero sunt est vitae molestiae? Excepturi.
    </div>
</section>
<section id="skills" class="px-16 mb-16">
    <header class="flex flex-row text-center items-end ">
        <h1 class="text-4xl text-white font-bold mr-8">Mastery of Craft.</h1> 
        <span class="text-xl text-purple-300 mr-32">Tools and Technology</span> 
        <span class="text-gray-400 flex gap-8 items-center">
            <Proficient></Proficient>
            Proficient
            
            <Mid></Mid>
            Mid
        </span>
    </header>

    <div class="grid grid-flow-row skills-grid grid-cols-2 pt-24 w-full place-content-stretch gap-y-16">
        <div>
            <span>
                <Proficient></Proficient>Backend
            </span>
            .Net Web Api, RESTful API, GRPC, Swagger, Express,DI,php
        </div>
        <div>
            <span>
                <Proficient></Proficient>Database
            </span>
            SQL, NoSQL, MongoDB, MySQL, Postgres, Firebase, CosmosDB
        </div>
        <div>
            <span>
                <Proficient></Proficient>Frontend
            </span>
            React, Angular,Blazor,Svelte, Vue,MVC, Laravel, Tailwind, Bootstrap, Material UI
        </div>
        <div>
            <span>
                <Proficient></Proficient>Version Control
            </span>
            Git, Github, Gitlab, Bitbucket, Azure Devops,GitButler
        </div>
        <div>
            <span>
                <Proficient></Proficient> Interactive Design
            </span>
            Lottie, Rive, Figma, Canvas, WebGL, Three.js
        </div>
        <div>
            <span>
                <Proficient></Proficient>Devops
            </span>
            Docker, Kubernetes, Jenkins, CircleCI, TravisCI, Github Actions, Azure Devops, Gitlab CI
        </div>
        <div>
            <span>
                <Proficient></Proficient>Dev tools
            </span>
            Vitest, Jest,Selenium,Playwright, Cypress, Postman, Swagger,Webpack, Gulp, Grunt
        </div>
    </div>
    
</section>
<section id="education"  class="px-16 space-y-8 mb-16">
    <header class="text-left text-4xl font-bold text-white">Education.</header>
    <div class="flex flex-row  w-full justify-between">
        <div class="card">
            <span>2020 - 2021</span>
            <h1>University of Lagos</h1>
            <p>BSc Computer Science</p>
        </div>
        <div class="card">
            <span>2016 - 2019</span>
            <h1>University of Lagos</h1>
            <p>BSc Computer Science</p>
        </div>
        <div class="card">
            <span>2012 - 2015</span>
            <h1>University of Lagos</h1>
            <p>BSc Computer Science</p>
        </div>
        <div class="card ">
            <span>2009 - 2012</span>
            <h1>University of Lagos</h1>
            <p>BSc Computer Science</p>
        </div>
    </div>
</section>
<section id="projects" class="px-16 text-left space-y-6 mb-16">
    <header class="text-4xl font-bold text-white ">Projects.</header>
     <Project date="Jan 2021"  title="Project 1" tech={["React", "Node", "Express", "MongoDB"]} description="A project that does something" status="online"></Project>
        <Project date="Dec 2021" title="Project 2" tech={["React", "Node", "Express", "MongoDB"]} description="A project that does something" status="offline"></Project>
        <Project date="April 2022" title="Project 3" tech={["React", "Node", "Express", "MongoDB"]} description="A project that does something" status="in progress"></Project>
</section>
<section id="contacts" class="grid grid-cols-2 justify-between px-12 gap-y-4">
    <header class="col-span-2 text-5xl font-semibold ">Contact Me</header>
    <div>
        <form class="flex flex-col gap-4 lg: px-12 ">
            <input type="text" placeholder="Name">
            <input type="email" placeholder="Email">
            <textarea placeholder="Message"></textarea>
            <button>Send</button>
        </form>

    </div>
    <div class="flex flex-row">
        <div class="grid grid-cols-2 grid-flow-row">
            <span>Phone</span>
            <span>+234 703 123 4567</span>
            <Discord/>
            <span>ebunrere#1234</span>
            <span>Email</span>
            <span>
                <a href="mailto:e@m.com">
                </span>
            <Linkedin on:click={() => {}}></Linkedin>
            <span>Address</span>
        
            <span>123, Some Street, Lagos, Nigeria</span>

    </div>
</section>

<div id="stars1">
    {#each new Array(100) as _, i}
      <div
        class="star"
        style="left: {Math.random() * 100}%; top: {Math.random() *
          100}%; --index: 1; width:5px; height:5px;"
      ></div>
    {/each}
  </div>
  <div id="stars2">
    {#each new Array(250) as _, i}
      <div
        class="star"
        style="left: {Math.random() * 100}%; top: {Math.random() *
          100}%;--index: 2; width:4px; height:4px;"
      ></div>
    {/each}
  </div>
  <div id="stars3">
    {#each new Array(400) as _, i}
      <div
        class="star"
        style="left: {Math.random() * 100}%; top: {Math.random() *
          100}%; --index: 3; width:2.5px; height:2.5px;"
      ></div>
    {/each}
  </div>

<style>
  #stars1,
  #stars2,
  #stars3 {
      overflow: hidden;
    position: static;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* width: 100%;
    height: 100%; */
    background: transparent;
    padding: 0;
    margin: 0;
    z-index: -1000;
  }
  .star {
    position: absolute;
    border-radius: 99px;
    background: white;
    /* z-index: var(--index); */
    z-index: inherit;
    /* overflow: hidden; */
  }
  .card{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 16px;
    border: 1px solid rgb(192,132,252);
    border-radius: 8px;
    width:300px;
    /* height:calc(640px / 1.618); */
    padding: 16px 8px 16px 8px;
  }
  .card > span{
    color: rgb(192,132,252);
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    font-size: 2em;
  }
    .card > h1{
        font-size: 1.5em;
        font-weight: 600;
        color: white;
    }
  .skills-grid > div{
    color:gray;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
    max-width: 500px;
  }
  .skills-grid span{
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  form input, textarea{
    background-color: black;
    border: 1px solid white;
    border-radius: 4px;
    padding: 0 0 0 8px;
  }
</style>