<script>



  export let fotoCewe;
  export let fotoCowo;
  export let fotoBg;
  export let fotoBg2;
  export let fotoBg3;
  export let fotoBg4;
  export let fotoBg5;
  export let fotoBg6;
  export let fotoBg7;
  export let fotoBg8;

  // Create an array of properties
  const images = [
    fotoCewe,
    fotoCowo,
    fotoBg,
    fotoBg2,
    fotoBg3,
    fotoBg4,
    fotoBg5,
    fotoBg6,
    fotoBg7,
    fotoBg8,
  ];







</script>

<!-- Loop through the properties and display them -->
<!-- <ul> -->
<!--   {#each fotoProps as fotoProp, index} -->
<!--     <li key={index}>{fotoProp}</li> -->
<!--   {/each} -->
<!-- </ul> -->



<section
    class="relative flex items-center justify-around text-center bg-cover bg-center py-60 snap-start"
>

    <div class="h-full bg-center object-cover w-full absolute z-20"></div>

    <div class="container px-5 py-4 mx-auto lg:pt-12 lg:px-32 z-40 ">
        <div  class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap ">
                {#each fotoProps as fotoProp, index}
                    {#if index === 4}
                        <div key={index} class="w-full p-1 md:p-2">
                            <img 
                                alt="gallery"
                                class="block object-cover object-center w-full min-h-1/4 max-h-min rounded-lg"
                                src={fotoProp}
                            />
                        </div>
                        {:else if index === 9}
                        <div key={index} class="w-full p-1 md:p-2">
                            <img 
                                alt="gallery"
                                class="block object-cover object-center w-full min-h-1/4 max-h-min rounded-lg"
                                src={fotoProp}
                            />
                        </div>
                    {:else}
                        <div key={index} class="md:w-1/4 w-full p-1 md:p-2">
                            <img 
                                alt="gallery"
                                class="block object-cover object-center w-full min-h-1/4 max-h-min rounded-lg"
                                src={fotoProp}
                            />
                        </div>
                    {/if}
                {/each}
            </div>
        </div>
    </div>
</section>
