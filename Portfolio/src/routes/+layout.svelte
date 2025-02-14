<script>
  import "../app.css";
  import logo from "../lib/logo.svg";

  //generate stars in each star container
</script>

<svelte:head>
  <title>Web Resume</title>
</svelte:head>

<div
id="layout"
  class="relative max-w-[90rem] mx-auto w-full h-screen overflow-x-hidden font-montserrat"
>
  <nav
    class="header sticky w-full h-[8svh] px-8 flex flex-row flex-shrink items-center justify-between"
  >
    <img src={logo} alt="Logo" class="h-24 p-0" />
    <button class="lg:hidden" >
      <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
    </button>
    <div class="hidden  lg:flex flex-row gap-8">
      <ul class="lg:flex space-x-16">
        <li><a href="#about">About Me</a></li>
        <li><a href="#skills"> Skills</a></li>
        <li><a href="#education"> Education</a></li>
        <li><a href="#projects"> Projects</a></li>
        <li><a class="rounded-[28px] z-50 hover-effect flex-shrink-0 border-[1px] px-[15px] py-[5px] my-auto w-auto border-grey" href="#contact"><span class="text-centre ">Contact</span></a></li>
      </ul>
    </div>
  </nav>

  <main class="w-full text-center  h-max relative" >
    <slot />


  </main>

 
</div>

<div class="overflow-x-hidden overflow-y-hidden">

</div>

<style>
  :root {
    background-color: black;
    color: white;
  }
  
  


  #layout {
    /* background: linear-gradient(180deg, #000000 , #851b7f ); */
    /* background-color: black; */
    /* opacity: 1; */
    /* overflow: hidden; */
  }




  /**
    An
  */
</style>
