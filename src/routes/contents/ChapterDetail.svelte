<script>
  export let selectedChapter;
  import { createEventDispatcher } from 'svelte';
  import { marked } from 'marked';

  const dispatch = createEventDispatcher();

  function back() {
    dispatch('back'); // Emit back to chapters event
  }

  function backToBlogs() {
    dispatch('backToBlogs'); // Emit back to blogs event
  }

  // Parse the markdown content
  $: select = selectedChapter.detail;
  $: parsedMarkdown = select?.markdown ? marked(select.markdown) : "";
</script>

<div class="chapter-container">
  <div class="navigation-buttons">
    <button class="nav-btn" on:click={back}>Back to Chapters</button>
    <button class="nav-btn" on:click={backToBlogs}>Back to Blogs</button>
  </div>

  <div class="chapter-content">
    {#if parsedMarkdown}
      <!-- Render parsed markdown as HTML -->
      <div class="markdown-content">{@html parsedMarkdown}</div>
    {:else}
      <p class="no-content">No content available for this chapter.</p>
    {/if}
  </div>
</div>

<style>
  .chapter-container {
    padding: 20px;
    max-width: 900px;
    margin: 0 auto;
    background-color: #1e1e1e; /* Dark background */
    color: #ffffff; /* White text */
    font-family: 'Arial', sans-serif;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }

  .navigation-buttons {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .nav-btn {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .nav-btn:hover {
    background-color: #0056b3;
  }

  .chapter-content {
    background-color: #2a2a2a; /* Content background */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .markdown-content {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #eaeaea;
  }

  .no-content {
    text-align: center;
    font-size: 1.1rem;
    color: #bbbbbb;
  }

  @media (max-width: 768px) {

    .markdown-content {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .markdown-content {
      font-size: 0.9rem;
    }
  }
</style>
