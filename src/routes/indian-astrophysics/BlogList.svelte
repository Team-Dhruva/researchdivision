<script>
  export let blogs;
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function selectBlog(blog) {
    dispatch('selectBlog', blog); // Emit blog selection event
  }
  function scrollBlogs(direction) {
    const container = document.querySelector('.blog-slider');
    const scrollAmount = container.clientWidth;
    container.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth',
    });
  }
</script>

<div class="blog-container">
  <h2 style="font-size:25px;"><strong>BLOGS</strong></h2>
  <div class="blog-slider">
    <div class="blog-list">
      {#each blogs as blog}
        <div class="blog-card" on:click={() => selectBlog(blog)}>
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
  <button class="nav prev" on:click={() => scrollBlogs(-1)}>&lt;</button>
  <button class="nav next" on:click={() => scrollBlogs(1)}>&gt;</button>
</div>

<style>
  .blog-container {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #fff;
  }

  .blog-slider {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    scrollbar-width: none;
  }

  .blog-slider::-webkit-scrollbar {
    display: none;
  }

  .blog-list {
    display: flex;
    gap: 20px;
    padding: 10px;
  }

  .blog-card {
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
  }

  .blog-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(255, 255, 255, 0.2);
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    padding-top: 140%; /* 5:7 Aspect Ratio */
    overflow: hidden;
  }

  .blog-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
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

  .blog-card h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin: 0;
    color: #ffcc00;
  }

  .blog-card p {
    font-size: 1rem;
    margin: 0;
    color: #ddd;
    line-height: 1.6;
    flex-grow: 1;
  }

  .blog-card small {
    font-size: 0.9rem;
    color: #999;
  }

  .nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 10;
  }

  .nav.prev {
    left: 10px;
  }

  .nav.next {
    right: 10px;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .blog-card {
      flex: 0 0 calc(45% - 20px); /* Adjusted for smaller screens */
      max-width: 45%;
    }
  }

  @media (max-width: 480px) {
    .blog-card {
      flex: 0 0 calc(80% - 20px);
      max-width: 80%;
    }
  }
</style>
