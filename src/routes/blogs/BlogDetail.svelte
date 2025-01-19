<script>
  export let selectedBlog;
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function back() {
    dispatch("back");
  }

  function selectChapter(chapter) {
    dispatch("selectChapter", chapter); // Emit chapter selection event
  }
</script>

<div class="blog-container">
  <button class="back-btn" on:click={back}>Back to Blogs</button>

  <div class="blog-header">
    <h1 class="blog-title">{selectedBlog.title}</h1>
    <p class="blog-description">{selectedBlog.description}</p>
    <div class="blog-info">
      <small class="blog-author">By {selectedBlog.author}</small>
      {#if selectedBlog.lastUpdated}
        <small class="blog-date">Last updated: {selectedBlog.lastUpdated}</small>
      {/if}
    </div>
  </div>

  <div class="chapters-section">
    <h2>Explore Chapters</h2>
    {#if Array.isArray(selectedBlog.chapters) && selectedBlog.chapters.length > 0}
      <div class="chapter-grid">
        {#each selectedBlog.chapters as chapter, i}
          <div class="chapter-card" on:click={() => selectChapter(chapter)}>
            <div class="chapter-index">{i + 1}</div>
            <h3 class="chapter-title">{chapter.title}</h3>
            <br />
            <button class="read-more-btn">Read More</button>
          </div>
        {/each}
      </div>
    {:else}
      <p class="no-chapters">No chapters available for this blog.</p>
    {/if}
  </div>

  <p class="next-chapter">
    {#if selectedBlog.nextChapterDate}
      <strong>Next Chapter Release:</strong> {selectedBlog.nextChapterDate}
    {:else}
      <strong>Chapter Completed</strong>
    {/if}
  </p>
</div>

<style>
  .blog-container {
    padding: 30px;
    font-family: "Arial", sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    background-color: #1e1e1e; /* Dark background */
    color: #eaeaea; /* Light text */
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }

  .back-btn {
    background-color: #007bff;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    margin-bottom: 20px;
    transition: background-color 0.3s ease;
  }

  .back-btn:hover {
    background-color: #0056b3;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 40px;
  }

  .blog-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .blog-description {
    font-size: 1.2rem;
    color: #ccc;
    margin-bottom: 20px;
  }

  .blog-info {
    display: flex;
    justify-content: center;
    gap: 20px;
    font-size: 0.9rem;
    color: #aaa;
  }

  .chapters-section {
    margin-top: 40px;
  }

  .chapter-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  .chapter-card {
    background-color: #2a2a2a; /* Card background */
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
    cursor: pointer;
  }

  .chapter-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  .chapter-index {
    background-color: white;
    color: #1e1e1e;
    font-size: 1.5rem;
    font-weight: bold;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-bottom: 15px;
  }

  .chapter-title {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }

  .read-more-btn {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 8px 15px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .read-more-btn:hover {
    background-color: #0056b3;
  }

  .no-chapters {
    text-align: center;
    font-size: 1.1rem;
    color: #888;
  }

  .next-chapter {
    margin-top: 30px;
    font-size: 1.2rem;
    font-weight: bold;
    color: #eaeaea;
    text-align: center;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .blog-title {
      font-size: 2rem;
    }

    .blog-description {
      font-size: 1rem;
    }

    .chapter-card {
      padding: 15px;
    }
  }

  @media (max-width: 480px) {
    .blog-title {
      font-size: 1.8rem;
    }

    .blog-description {
      font-size: 0.9rem;
    }
  }
</style>
