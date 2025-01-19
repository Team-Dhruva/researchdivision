<script>
  import laptop from "./laptop.mp4";
  import mobile from "./mobile.mp4";
  import { onMount } from "svelte";

  let videoSrc;

  // Determine the video source
  const isMobile = () => typeof window !== "undefined" && window.innerWidth <= 768;

  onMount(() => {
    // Set the video source only in the client-side environment
    videoSrc = isMobile() ? mobile : laptop;
  });
</script>

<div class="video-container">
  {#if videoSrc}
    <video autoplay muted class="background-video" aria-hidden="true">
      <source src={videoSrc} type="video/mp4" />
      <p>Your browser does not support the video tag. Please update your browser.</p>
    </video>
  {/if}
</div>

<style>
  .video-container {
    position: relative; 
    height: 85vh;
    overflow: hidden; 
  }

  .background-video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    object-fit: cover;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
</style>
