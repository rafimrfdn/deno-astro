<script>

import { onMount } from 'svelte';

export let fotoCewe;
export let fotoCowo;
export let fotoBg;
export let fotoBg2;
export let fotoBg3;
export let fotoBg4;
export let fotoBg5;
export let fotoBg6;

// Create an array of properties
const images = [
    fotoCowo,
    fotoCewe,
    fotoBg,
    fotoBg2,
    fotoBg3,
    fotoBg4,
    fotoBg5,
    fotoBg6,
];




let currentImage = null;
let currentIndex = 0;

function openModal(index) {
    currentImage = images[index];
    currentIndex = index;
    document.body.classList.add('modal-open');
}

function closeModal() {
    currentImage = null == false;
    document.body.classList.remove('modal-open');
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    currentImage = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    currentImage = images[currentIndex];
}

onMount(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
        document.removeEventListener('keydown', handleKeyPress);
    };
});

function handleKeyPress(event) {
    if (event.key === 'Escape') {
        closeModal();
    } else if (event.key === 'ArrowRight') {
        nextImage();
    } else if (event.key === 'ArrowLeft') {
        prevImage();
    }
}
</script>

<style>
    .modal-open {
        overflow: hidden;
    }

</style>

<section
    class="z-40 relative flex items-center justify-around text-center bg-cover bg-center py-60 snap-start"
>

    <div class="h-full bg-center object-cover w-full absolute z-20"></div>

    <div class="container px-5 py-4 mx-auto lg:pt-12 lg:px-32 z-40 ">
        <div  class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap">

              <!-- Simplefied version from chatGPT, this call ternary conditional  -->
{#each images as image, index}
  <div key={index} 
       class="{(index === 3 || index === 8) ? 'w-full' : 
               (index === 10 || index === 11) ? 'w-1/2' : 
               (index === 4 || index === 5 || index === 6 || index === 7) ? 'w-1/4' : 
               'w-1/3'} 
       p-1 md:p-2">
    <img 
      class="block object-cover object-center w-full min-h-1/4 max-h-min rounded-lg"
      src={image}
      on:click={() => openModal(index)} 
    />
  </div>
{/each}

            </div>
        </div>
    </div>



    {#if currentImage}
        <div class="top-0 bottom-0 left-0 right-0 fixed bg-black/80 flex justify-center items-center z-40" on:click={closeModal}>
            <img class="h-100 lg:h-4/5 rounded-lg " src={currentImage} on:click={event => event.stopPropagation()} />
        </div>
        <div class="bottom-0 fixed z-50 flex items-center justify-between w-1/2 m-4 gap-4">
            <svg on:click={prevImage} xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="opacity-70 bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg>
            <svg on:click={nextImage} xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" class="opacity-70 bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
            </svg>
        </div>
    {/if}

</section>
