<script>
    // You can modify the image source here or bind it dynamically
    import luna from "./img/luna.webp" // Replace with the actual image path
    import calendar_image from "./img/indiancalendar.webp"
    import stellarium_image from "./img/stellarium.webp"
    import dhruvalogo from "./img/defaultimg.webp"

    const blogs = [
        { title: "Indian Calendar", url: "/indian-astrophysics/indian-calendar", thumb: calendar_image, desc:"lorem ipsum", author:"chuck norris"},
        { title: "Stellarium Research", url: "/indian-astrophysics/stellarium-research", thumb: stellarium_image,desc:"lorem ipsum", author:"chuck norris"},
        { title: "Ancient Observatories", url: "/indian-astrophysics/ancient-observatories", thumb: dhruvalogo, desc:"lorem ipsum", author:"chuck norris"},
        { title: "Modern Indian Astronomy", url: "/indian-astrophysics/modern-astronomy", thumb: dhruvalogo, desc:"lorem ipsum", author:"chuck norris"}
    ];

    function navigate(url) {
        window.location.href = url; // Redirect on click
    }

    // Function to scroll the blog list horizontally
    function scrollBlogs(direction) {
        const container = document.querySelector('.blog-slider');
        const scrollAmount = container.clientWidth;
        container.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth',
        });
    }
</script>

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
        <!-- Blog list section -->
        <div class="blog-container"> <!-- Added blog-container for relative positioning -->
            <div class="blog-slider">
                <div class="blog-list">
                    {#each blogs as blog}
                        <div class="blog-item" on:click={() => navigate(blog.url)}>
                            <div class="img-wrapper">
                                <img class="blog-img" src={blog.thumb} alt={blog.title} />
                            </div>
                            <div class="blog-content">
                                <h3>{blog.title}</h3>
                                <p>{blog.desc}</p>
                                <small>Author: {blog.author}</small>
                            </div>
                            {blog.title}
                        </div>
                    {/each}
                </div>
            </div>
            <!-- Navigation buttons for scrolling the blog list -->
            <button class="nav prev" on:click={() => scrollBlogs(-1)}>&lt;</button>
            <button class="nav next" on:click={() => scrollBlogs(1)}>&gt;</button>
        </div>
    <h1 class="vision">Research Papers</h1>
    <p class="vision-text">Indian Calendar</p>
    <p class="vision-text">Computational research using Stellarium</p>
</div>

<style>
    :root {
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
    .blog-container {
        position: relative; /* Ensure relative positioning for nav buttons */
        width: 100%;
        overflow: hidden;
    }

    .blog-slider {
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;
        scrollbar-width: none;
    } .blog-slider::-webkit-scrollbar {
        display: none; /* Hide scrollbar */
    }

    .blog-list {
        display: flex;
        gap: 20px;
        padding: 10px;
    }

    .blog-item {
        flex: 0 0 calc(30% - 50px); /* Reduced size */
        max-width: calc(30% - 50px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        overflow: hidden;
        background: #121212;
        border: 2px solid white;
        cursor: pointer;
        transition: transform 0.3s, box-shadow 0.3s;
        text-align: left;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }  .blog-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(255, 255, 255, 0.2);
    } .blog-item h3 {
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0;
        color: #ffcc00;
    }

    .blog-item p {
        font-size: 1rem;
        margin: 0;
        color: #ddd;
        line-height: 1.6;
        flex-grow: 1;
    }

    .blog-item small {
        font-size: 0.9rem;
        color: #999;
    }
    .blog-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    } .img-wrapper {
        position: relative;
        width: 100%;
        padding-top: 140%; /* 5:7 Aspect Ratio */
        overflow: hidden;
    }
    .blog-content {
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        background: #1c1c1c;
        color: #fff;
    }

    .blog-item:hover {
        transform: translateY(-5px);
        box-shadow: 0px 5px 15px var(--alt-black);
    }

    .blog-item:active {
        transform: translateY(0);
    }

    .nav {
        position: absolute;
        top: 50%; /* Vertically center */
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.7);
        color: white;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        cursor: pointer;
        z-index: 10;
    } .nav.prev {
        left: 10px; /* Position to the left edge */
    } .nav.next {
        right: 10px; /* Position to the right edge */
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .blog-item {
        flex: 0 0 calc(45% - 20px); /* Adjusted for smaller screens */
        max-width: 45%;
        }
    }

    @media (max-width: 480px) {
        .blog-item {
        flex: 0 0 calc(80% - 20px);
        max-width: 80%;
        }
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