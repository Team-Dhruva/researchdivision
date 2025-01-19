<script>
  export let slides = [
    {
      src: "https://i.pinimg.com/236x/d0/51/21/d0512103e0b955549cf02cdde0b0d078.jpg",
      alt: "Image 1",
      title: "Title for Image 1",
      description: "Description for Image 1",
      text: "Additional text for Image 1",
      link: "/page1" // Link for the Explore button
    },
    {
      src: "https://i.pinimg.com/564x/35/37/10/353710a253ff533d2e4b1cc8c945ec3b.jpg",
      alt: "Image 2",
      title: "Title for Image 2",
      description: "Description for Image 2",
      text: "Additional text for Image 2",
      link: "/page2" // Link for the Explore button
    },
    {
      src: "path/to/your/image3.jpg",
      alt: "Image 3",
      title: "Title for Image 3",
      description: "Description for Image 3",
      text: "Additional text for Image 3",
      link: "/page3" // Link for the Explore button
    },
  ]; // Replace with your image paths and texts
  
  let currentIndex = 0;

  function nextImage() {
    currentIndex = (currentIndex + 1) % slides.length;
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  }

  // Automatically change slides every 3 seconds
  const interval = setInterval(nextImage, 10000);

  // Clear interval on component destruction
  import { onDestroy } from 'svelte';
  onDestroy(() => clearInterval(interval));
</script>

<style>
  .slider {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center; /* Center the entire section */
      background: black;
      border-radius: 8px;
      overflow: hidden;
      padding: 20px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      position: relative; /* For absolute positioning of arrows */
  }

  .controls {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-between; /* Space out arrows and content */
  }

  .text {
      padding: 0 5px; /* Reduced padding for closer alignment */
      color: white;
      margin-left: 100px;
      font-size: 28px;
  }

  .image {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 300px; /* Set a fixed height for uniformity */
  }

  img {
      max-width: 100%;
      height: 100%; /* Make image take full height */
      object-fit: cover; /* Maintain aspect ratio and cover the area */
      border-radius: 8px;
      transition: opacity 0.5s ease;
  }

  .explore-button {
      margin-top: 10px; /* Space between text and button */
      background-color: #007BFF;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      cursor: pointer;
      font-size: large;
  }

  .explore-button:hover {
      background-color: #0056b3;
  }

  .arrow {
      background: rgba(255, 255, 255, 0.7);
      border: none;
      border-radius: 50%;
      padding: 10px;
      cursor: pointer;
      position: absolute; /* Positioning arrows absolutely */
      top: 50%;
      transform: translateY(-50%); /* Center vertically */
      z-index: 1; /* Ensure arrows are on top */
  }

  .prev {
      left: 10px; /* Position on the left */
  }

  .next {
      right: 10px; /* Position on the right */
  }

  /* Media Queries for Responsiveness */
  @media (max-width: 768px) {
      .slider {
          flex-direction: column; /* Stack the slider vertically on small screens */
          padding: 10px; /* Adjust padding */
      }

      .controls {
          flex-direction: column;
          justify-content: center;
          align-items: center;
      }

      .text {
          margin-left: 0; /* Remove left margin for smaller screens */
          font-size: 20px; /* Reduce font size */
          text-align: center; /* Center the text */
      }

      .image {
          height: 250px; /* Adjust image height */
          width: 100%; /* Ensure image width is full */
          margin-bottom: 10px; /* Add margin below the image */
      }

      .explore-button {
          font-size: medium; /* Smaller font size for button */
          padding: 8px 15px; /* Smaller padding */
      }

      .arrow {
          padding: 8px;
      }
  }

  @media (max-width: 480px) {
      .text {
          font-size: 16px; /* Further reduce font size on very small screens */
      }

      .explore-button {
          font-size: small; /* Even smaller font size */
          padding: 6px 12px; /* Further reduce padding */
      }
  }
</style>

<div class="slider">
  <button class="arrow prev" on:click={prevImage}>❮</button>
  <div class="controls">
      <div class="text">
          <h2>{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].description}</p>
          <h3>{slides[currentIndex].text}</h3>
          <a href={slides[currentIndex].link} class="explore-button">Explore</a>
      </div>
      <div class="image">
          {#each slides as slide, index}
              <img src={slide.src} alt={slide.alt} style:opacity={index === currentIndex ? 1 : 0} />
          {/each}
      </div>
  </div>
  <button class="arrow next" on:click={nextImage}>❯</button>
</div>
