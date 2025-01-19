<script>
    import { createEventDispatcher } from 'svelte';
    import ChapterCard from './ChapterCard.svelte'; // Ensure the path is correct

    const dispatch = createEventDispatcher();

    export let title = "Manga Title";
    export let description = "Manga description goes here.";
    export let authors="Authors";
    export let chapters = []; // Array of chapter objects with title and images
    export let imageUrl = ""; // Prop for the image
    export let onBack; // Prop to handle back navigation
    export let onOpenImageViewer; // Prop to handle opening the image viewer
</script>

<style>
    .manga-detail {
    position: absolute; /* or fixed */
    top: 100px; /* Adjust this based on your header height */
    left: 0;
    right: 20px;
    bottom: 0; /* To cover full height below the header */
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    background-color: black;
    margin: 0; /* Remove margin */
    overflow-y: auto; /* Scroll if content overflows */
    z-index: 10; /* Ensure it appears above other content */
    margin-left: 10px;
    margin-bottom: 10px;
    
}


    .manga-image {
        display: flex;
        justify-content: left;
        align-items: center;
    }

    .manga-image img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
    }

    .manga-title {
        font-size: 40px;
        font-weight: bold;
        color:#8A2BE2;
    }

    .manga-chapters {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-left: 20px;
        border-color: aliceblue;
        
    }

    .back-button {
        background-color: #444;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 8px 12px;
        cursor: pointer;
        margin-bottom: 10px;
        font-size: 16px;
    }

    .back-button:hover {
        background-color: #666;
    }

    .overview{
        color: aliceblue;
        font-size: 18px;
        font-weight: bold;
    }

    .author{
        color: aliceblue;
        font-size: 18px;
        font-weight: bold;
    }
</style>

<div class="manga-detail">
    <button class="back-button" on:click={onBack}>Back</button>
    <div class="manga-image">
        <img src={imageUrl} alt={title} />
    </div>
    <div class="manga-info">
        <h2 class="manga-title">{title}</h2>
        <p class="overview">{description}</p>
        <p class="author">{authors}</p>
        <h3>Chapters:</h3>
        <div class="manga-chapters">
            {#each chapters as chapter}
                <ChapterCard 
                    title={chapter.title} 
                    detail={chapter.detail}
                    images={chapter.images} 
                    on:click={(e) => onOpenImageViewer(e.detail)} 
                />
            {/each}
        </div>
    </div>
</div>
