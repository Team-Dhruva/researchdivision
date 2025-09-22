<script lang="ts">
  import Nav from '$lib/Nav.svelte';
  import { createEventDispatcher, onMount } from 'svelte';

  type Blog = {
    id: number;
    title: string;
    author: string;
    description: string;
    chapters: unknown[];
    image: string;
    lastUpdated?: string;
    nextChapterDate?: string;
  };

  export let blogs: Blog[];

  const dispatch = createEventDispatcher();

  function selectBlog(blog: Blog) {
    dispatch('selectBlog', blog);
  }

  onMount(() => {
    // Do not lock body scroll. Provide horizontal scroll with wheel when not over a scrollable card
    const container = document.querySelector('.blog-slider') as HTMLElement | null;
    if (!container) return;
    container.addEventListener(
      'wheel',
      (e: WheelEvent) => {
        const target = e.target as HTMLElement | null;
        // If hovering a vertically scrollable area and it can scroll, let default happen
        const card = target?.closest?.('.blog-card') as HTMLElement | null;
        const content = card?.querySelector('.blog-content') as HTMLElement | null;
        const canScrollVertically = !!content && content.scrollHeight > content.clientHeight;
        if (canScrollVertically) return; // allow vertical scroll inside card

        if (e.deltaY === 0) return;
        e.preventDefault();
        container.scrollBy({
          left: e.deltaY,
          behavior: 'smooth',
        });
      },
      { passive: false }
    );
  });
</script>

<!-- <Nav /> -->

<div class="blog-container">
  <h2><strong>BLOGS</strong></h2>
  <div class="blog-slider">
    <div class="blog-list">
      {#each blogs as blog}
        <div
          class="blog-card"
          role="button"
          tabindex="0"
          on:click={() => selectBlog(blog)}
          on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectBlog(blog); } }}
        >
          <div class="image-wrapper">
            <img class="blog-image" src={blog.image} alt={blog.title} />
          </div>
          <div class="blog-content">
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <small>Author: {blog.author}</small>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

  :global(body) {
    font-family: 'Poppins', sans-serif;
    background: radial-gradient(ellipse at top, #0b0b1f 0%, #000 100%);
  }

  .blog-container {
    width: 100%;
    padding: 80px 0 20px; /* account for header */
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    box-sizing: border-box;
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 26px;
    color: #ffffff;
    font-weight: 500;
    letter-spacing: 1px;
  }

  .blog-slider {
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;
    flex-grow: 1;
  }

  .blog-slider::-webkit-scrollbar {
    display: none;
  }

  .blog-list {
    display: flex;
    gap: 25px;
    padding: 10px 30px;
  }

  .blog-card {
    flex: 0 0 20%;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 14px;
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 16px rgba(128, 90, 213, 0.2); /* light purple glow */
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    color: white;
  }

  .blog-card:hover {
    transform: translateY(-6px) scale(1.015);
    box-shadow: 0 10px 25px rgba(178, 102, 255, 0.4); /* light purple glow */
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    padding-top: 140%;
    overflow: hidden;
  }

  .blog-image {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .blog-content {
    padding: 16px;
    background: #141414;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 220px; /* fixed preview height */
    overflow-y: auto; /* allow vertical scroll inside card */
  }

  .blog-card h3 {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: #d6b3ff;
    margin: 0;
  }

  .blog-card p {
    font-size: 0.9rem;
    color: #ccc;
    line-height: 1.4;
    flex-grow: 1;
    margin: 0;
  }

  .blog-card small {
    font-size: 0.75rem;
    color: #999;
  }

  /* Responsive adjustments */
  @media (max-width: 1024px) {
    .blog-card {
      flex: 0 0 30%;
    }
  }

  @media (max-width: 768px) {
    .blog-card {
      flex: 0 0 55%;
    }
  }

  @media (max-width: 480px) {
    .blog-card {
      flex: 0 0 85%;
    }
  }
</style>
