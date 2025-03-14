<script>
    // You can modify the image source here or bind it dynamically
    import luna from "./img/luna.webp" // Replace with the actual image path
</script>

<style>
    :root{
        --heading-color: #cad6f2;
    }

    .Main {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: justify; /* Align text and images center */
        padding: 20px; /* Add padding for better layout */
    }

    .Head, .vision {
        color: var(--heading-color); /* Blue color */
        font-size: 3em; /* Font size */
        font-weight: bold; /* Bold text */
        /*text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4); /* Shadow for depth */
        letter-spacing: 1px; /* Spacing between letters */
        line-height: 1.5; /* Line height */
        margin: 10px 0; /* Add spacing between sections */
    }

    .text, .vision-text {
        padding: 5px; /* Adjust padding for smaller screens */
        justify-content: center;
        max-width: 80%;
        font-size: 1.2em;
        color: white;
        font-weight: bold;
        letter-spacing: 1px; /* Spacing between letters */
        line-height: 1.5; /* Line height */
    }

    .image-container {
        display: flex;
        flex-wrap: wrap; /* Allow images to wrap to the next line */
        justify-content: center; /* Center align images */
        margin: 20px 0;
        gap: 10px; /* Add space between images */
    }

    .image-container img {
        width: 100%; /* Make the image responsive */
        max-width: 300px; /* Adjust max width for images */
        height: auto; /* Maintain aspect ratio */
        border-radius: 8px; /* Optional: Add rounded corners */
    }

    @media (max-width: 768px) {
        .Head, .vision {
            font-size: 20px; /* Reduce font size for smaller screens */
        }

        .text, .vision-text {
            font-size: 16px; /* Adjust font size */
        }

        .image-container img {
            max-width: 30%; /* Allow images to shrink further */
        }
    }

    @media (max-width: 480px) {
        .Head, .vision {
            font-size: 18px; /* Further reduce font size for very small screens */
        }

        .Text, .vision-text {
            font-size: 14px; /* Adjust font size */
        }

        .image-container {
            flex-direction: row; 
        }
    }
</style>

<div class="Main">
    <!-- Image Section -->
    <div class="image-container">
        <img src={luna} alt="Indian Astrophysics" />
        <img src={luna} alt="Indian Astrophysics" />
        <img src={luna} alt="Indian Astrophysics" />
    </div>
    <h1 class="Head">INDIAN ASTROPHYSICS</h1>
  
    <p class="text"> 
        Discover the universe through India’s timeless astronomical wisdom. For centuries, Indian scholars observed the skies, mapping planetary movements and decoding celestial patterns.Here, we delve into that heritage; offering a unique perspective on humanity’s ongoing quest to understand the stars.
    </p>
    <h1 class="Head">Here are some of our interesting reads!</h1>
    <h1 class="vision">Research Papers</h1>
    <p class="vision-text">
        Indian Calendar
    </p>
    <p class="vision-text">Computational research using Stellarium</p>
</div>
