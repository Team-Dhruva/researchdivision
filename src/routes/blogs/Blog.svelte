<script>
    import BlogList from './BlogList.svelte';
    import BlogDetail from './BlogDetail.svelte';
    import ChapterDetail from '../contents/ChapterDetail.svelte';
  
    export let blogs = []; // List of blogs passed as a prop

let selectedBlog = null;
let selectedChapter = null;

// Function to handle blog selection
function openBlog(event) {
  const blog = event.detail; // Extract the blog data from the event
  selectedBlog = blog;
  selectedChapter = null;
}

// Function to handle chapter selection
function openChapter(chapter) {
  selectedChapter = chapter; // Set the selected chapter
}

// Function to go back to the blog list
function goBackToBlogs() {
  selectedBlog = null; // Reset blog state
  selectedChapter = null; // Reset chapter state
}

</script>

<div>
<!-- Blog List -->
{#if !selectedBlog && !selectedChapter}
  <BlogList {blogs} on:selectBlog={openBlog} />
{/if}

<!-- Blog Details -->
{#if selectedBlog && !selectedChapter}
  <BlogDetail {selectedBlog} on:back={() => (selectedBlog = null)} on:selectChapter={openChapter} />
{/if}

<!-- Chapter Details -->
{#if selectedChapter}
  <ChapterDetail 
    {selectedChapter} 
    on:back={() => (selectedChapter = null)} 
    on:backToBlogs={() => (goBackToBlogs())} 
  />
{/if}
</div>