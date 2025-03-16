<script>
    // You can modify the image source here or bind it dynamically
    import luna from "./img/luna.webp" // Replace with the actual image path

    const blogs = [
        { name: "Indian Calendar", url: "/indian-calendar" },
        { name: "Stellarium Research", url: "/stellarium-research" },
        { name: "Ancient Observatories", url: "/ancient-observatories" },
        { name: "Modern Indian Astronomy", url: "/modern-astronomy" }
    ];

    function navigate(url) {
        window.location.href = url; // Redirect on click
    }

</script>

<style>
    :root{
        --heading-color: #cad6f2;
        --clickable-color: #32567e;
        --alt-black: #000326;
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

    /* blog text stuff */
    .blog-links {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        margin-top: 20px;
    }

    .blog-item {
        background-color: var(--alt-black);
        border-color: var(--clickable-color);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        font-size: 1.2em;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        width: 250px;
        height: 250px;
    }

    .blog-item:hover {
        transform: translateY(-5px);
        box-shadow: 0px 5px 15px var(--alt-black);
    }

    .blog-item:active {
        transform: translateY(0);
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
        <!-- Blog links section -->
        <div class="blog-links">
            {#each blogs as blog}
                <div class="blog-item" on:click={() => navigate(blog.url)}>
                    {blog.name}
                </div>
            {/each}
        </div>
    <h1 class="vision">Research Papers</h1>
    <p class="vision-text">
        Indian Calendar
    </p>
    <p class="vision-text">Computational research using Stellarium</p>
</div>
