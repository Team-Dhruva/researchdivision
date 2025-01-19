<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  let gifSource = "https://i.pinimg.com/originals/8f/29/ec/8f29ec645255b29f9484485cd96e0904.gif"; // Initial GIF URL
  let staticImageSource = "https://i.pinimg.com/originals/8f/29/ec/8f29ec645255b29f9484485cd96e0904.gif"; // Same URL as static image
  let gifVisible = true; // A flag to manage GIF visibility
  let showText = false; // Flag to control text appearance

  onMount(() => {
    // After 3 seconds, change the GIF to static image and show the text
    setTimeout(() => {
      gifVisible = false; // Hide the GIF after 3 seconds
      gifSource = staticImageSource; // Change to static image
      showText = true; // Show the text after the GIF pauses
    }, 3000); // 3 seconds
  });
</script>

<style>
  .Main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* Center align items */
    padding: 20px; /* Add padding for spacing */
    text-align: center; /* Ensures text is centered */
  }

  .text {
    color: #007bff; /* Blue color */
    font-size: 24px; /* Font size */
    font-weight: bold; /* Bold text */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4); /* Shadow for depth */
    letter-spacing: 1px; /* Spacing between letters */
    line-height: 1.5; /* Line height */
    margin-bottom: 10px; /* Space below the title */
  }

  .Jintro {
    justify-content: center;
    font-size: 18px;
    color: white;
    font-weight: bold;
    letter-spacing: 1px; /* Spacing between letters */
    line-height: 1.5; /* Line height */
    margin-bottom: 20px; /* Space below intro */
  }

  .SubJ {
    color: #007bff; /* Blue color */
    font-size: 20px; /* Font size */
    font-weight: bold; /* Bold text */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4); /* Shadow for depth */
    letter-spacing: 1px; /* Spacing between letters */
    line-height: 1.5; /* Line height */
    margin: 20px 0; /* Space above and below */
  }

  .J1, .J2, .J3 {
    justify-content: center;
    font-size: 18px;
    color: white;
    font-weight: bold;
    letter-spacing: 1px; /* Spacing between letters */
    line-height: 1.5; /* Line height */
    margin: 5px 0; /* Space between journal items */
  }

  .gif-container {
    width: 100%; /* Ensure the container takes the full width */
    margin-bottom: 20px; /* Space below the gif */
  }

  .gif-container img {
    width: 100%; /* Make the GIF stretch to the full width */
    height: auto; /* Maintain aspect ratio */
    border-radius: 8px; /* Optional: Add rounded corners */
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    .text {
      font-size: 20px; /* Smaller font size for mobile */
    }

    .Jintro, .SubJ {
      font-size: 16px; /* Smaller font size for mobile */
    }

    .J1, .J2, .J3 {
      font-size: 14px; /* Adjust journal item font size */
    }

    .gif-container img {
      width: 90%; /* Make the GIF smaller on mobile */
    }
  }

  @media (max-width: 480px) {
    .text {
      font-size: 18px; /* Further reduce font size for very small screens */
    }

    .Jintro, .SubJ {
      font-size: 14px; /* Further reduce font size */
    }

    .J1, .J2, .J3 {
      font-size: 12px; /* Adjust journal item font size */
    }

    .gif-container img {
      width: 80%; /* Further reduce GIF size on very small screens */
    }
  }
</style>

<div class="Main">
  <!-- GIF at the top, spanning the full width -->
  {#if gifVisible}
    <div class="gif-container">
      <img src={gifSource} alt="Space GIF" />
    </div>
  {/if}

  <!-- Text elements that slide in after the GIF pauses -->
  {#if showText}
    <h1 class="text" transition:fly={{ y: 50, duration: 1000 }}>One-stop destination for journal reviews</h1>
    <p class="Jintro" transition:fly={{ y: 50, duration: 1000 }}>Reviewing and simplifying latest happenings of the universe</p>
    <h4 class="SubJ" transition:fly={{ y: 50, duration: 1000 }}>Upcoming Review Papers</h4>
    <p class="J1" transition:fly={{ y: 50, duration: 1000 }}>Quantum Approach towards Dark Matter</p>
    <p class="J2" transition:fly={{ y: 50, duration: 1000 }}>H-21</p>
    <p class="J3" transition:fly={{ y: 50, duration: 1000 }}>Particle Physics</p>
  {/if}
</div>
