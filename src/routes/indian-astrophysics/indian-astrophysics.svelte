<!-- src/routes/indian-astrophysics/indian-astrophysics.svelte -->
<script>
    import luna from "./img/luna.webp"
    import calendar_image from "./img/indiancalendar.webp"
    import stellarium_image from "./img/stellarium.webp"
    import dhruvalogo from "./img/defaultimg.webp"

    const blogs = [
        { 
            title: "Nakshatra", 
            url: "/indian-astrophysics/nakshatra", 
            thumb: calendar_image, 
            desc:"Explore the ancient Indian system of lunar mansions and their astronomical significance.",
            author:"Pranati Rao, Nithyashree S",
            editor:"Deepthi Prasad"
        },
        { 
            title: "Stellarium Research", 
            url: "/indian-astrophysics/stellarium-research", 
            thumb: stellarium_image,
            desc:"Modern computational research using Stellarium software to validate ancient observations.",
            author:"Dr. Dhruva",
            editor:"Deepthi Prasad"
        },
        { 
            title: "Ancient Observatories", 
            url: "/indian-astrophysics/ancient-observatories", 
            thumb: dhruvalogo, 
            desc:"Discover the architectural marvels of ancient Indian astronomical observatories.",
            author:"Dr. Dhruva",
            editor:"Deepthi Prasad"
        },
        { 
            title: "Modern Indian Astronomy", 
            url: "/indian-astrophysics/modern-astronomy", 
            thumb: dhruvalogo, 
            desc:"India's contributions to contemporary astrophysics and space exploration.",
            author:"Dr. Dhruva",
            editor:"Deepthi Prasad"
        }
    ];

    function navigate(url) {
        window.location.href = url;
    }

    // Enable horizontal scrolling with mouse wheel
    function enableHorizontalScroll() {
        const container = document.querySelector('.blog-slider');
        if (!container) return;
        
        container.addEventListener('wheel', (e) => {
            if (e.deltaY === 0) return;
            e.preventDefault();
            container.scrollBy({
                left: e.deltaY,
                behavior: 'smooth'
            });
        });
    }

    import { onMount } from 'svelte';
    onMount(() => {
        enableHorizontalScroll();
    });
</script>

<div class="Main">
    <!-- Image Section -->
    <div class="image-container">
        <img src={luna} alt="Indian Astrophysics" />
        <img src={luna} alt="Indian Astrophysics" />
        <img src={luna} alt="Indian Astrophysics" />
    </div>
    
    <h1 class="Head">INDIAN ASTROPHYSICS</h1>

    <p class="Desc">
        Discover the universe through India’s timeless astronomical wisdom. For centuries, Indian scholars observed the skies, mapping planetary movements and decoding celestial patterns. Here, we delve into that heritage; offering a unique perspective on humanity’s ongoing quest to understand the stars.
    </p>
    
    <h1 class="Head">Here are some of our interesting reads!</h1>
    
    <!-- Blog list section with horizontal scrolling -->
    <div class="blog-container">
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
                            <small>Author: {blog.author} | Editor: {blog.editor}</small>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
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
        --primary: #6a5acd;
        --primary-dark: #5649b0;
        --secondary: #ff6b6b;
        --dark: #121212;
        --darker: #0a0a0a;
        --light: #f5f5f5;
        --gray: #2d2d2d;
        --light-gray: #444;
        --text: #eaeaea;
        --text-secondary: #aaa;
        --card-bg: rgba(30, 30, 40, 0.7);
        --transition: all 0.3s ease;
    }

    .Main {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: justify;
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }

    .Head, .vision {
        color: var(--heading-color);
        font-size: 2.5rem;
        font-weight: 700;
        letter-spacing: 1px;
        line-height: 1.3;
        margin: 30px 0 15px;
        text-align: center;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .vision {
        font-size: 2rem;
        margin-top: 50px;
    }

    .Desc, .vision-text {
        padding: 15px 0;
        max-width: 800px;
        font-size: 1.2rem;
        color: #e0e0ff;
        font-weight: 400;
        letter-spacing: 0.5px;
        line-height: 1.7;
        text-align: center;
    }

    .vision-text {
        font-size: 1.1rem;
        margin: 10px 0;
        color: #c0c0ff;
    }

    .image-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 30px 0;
        gap: 20px;
        width: 100%;
    }

    .image-container img {
        width: 100%;
        max-width: 300px;
        height: 200px;
        object-fit: cover;
        border-radius: 12px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
        transition: transform 0.3s ease;
    }

    .image-container img:hover {
        transform: translateY(-5px);
    }

    /* Blog container */
    .blog-container {
        position: relative;
        width: 100%;
        margin: 40px 0;
        padding: 20px 0;
    }

    .blog-slider {
        display: flex;
        overflow-x: auto;
        scroll-behavior: smooth;
        scrollbar-width: none;
        padding: 10px 0;
        scroll-snap-type: x mandatory;
    }

    .blog-slider::-webkit-scrollbar {
        display: none;
    }

    .blog-list {
        display: flex;
        gap: 25px;
        padding: 10px;
    }

    .blog-item {
        flex: 0 0 calc(30% - 50px);
        max-width: calc(30% - 50px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
        border-radius: 12px;
        overflow: hidden;
        background: rgba(20, 20, 35, 0.8);
        border: 1px solid rgba(255, 255, 255, 0.1);
        cursor: pointer;
        transition: all 0.3s ease;
        text-align: left;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        scroll-snap-align: start;
    }

    .blog-item:hover {
        transform: translateY(-8px);
        box-shadow: 0 10px 25px rgba(106, 90, 205, 0.4);
        border-color: rgba(106, 90, 205, 0.4);
    }

    .blog-item h3 {
        font-size: 1.3rem;
        font-weight: 600;
        margin: 0;
        color: #ffcc00;
        padding: 15px 15px 5px;
    }

    .blog-item p {
        font-size: 1rem;
        margin: 0;
        color: #ddd;
        line-height: 1.6;
        flex-grow: 1;
        padding: 0 15px;
    }

    .blog-item small {
        font-size: 0.9rem;
        color: #999;
        padding: 10px 15px 15px;
    }

    .img-wrapper {
        position: relative;
        width: 100%;
        padding-top: 140%;
        overflow: hidden;
    }

    .blog-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    .blog-item:hover .blog-img {
        transform: scale(1.05);
    }

    .blog-content {
        padding: 15px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        background: rgba(30, 30, 45, 0.7);
        color: #fff;
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
        .blog-item {
            flex: 0 0 calc(45% - 25px);
            max-width: calc(45% - 25px);
        }
        
        .Head, .vision {
            font-size: 2rem;
        }
    }

    @media (max-width: 768px) {
        .blog-item {
            flex: 0 0 calc(70% - 20px);
            max-width: calc(70% - 20px);
        }
        
        .Head, .vision {
            font-size: 1.8rem;
        }
        
        .Desc, .vision-text {
            font-size: 1.1rem;
        }
        
        .image-container img {
            max-width: 45%;
        }
    }

    @media (max-width: 480px) {
        .blog-item {
            flex: 0 0 90%;
            max-width: 90%;
        }
        
        .Head, .vision {
            font-size: 1.5rem;
        }
        
        .Desc, .vision-text {
            font-size: 1rem;
        }
        
        .image-container {
            flex-direction: column;
            align-items: center;
        }
        
        .image-container img {
            max-width: 90%;
        }
    }
</style>