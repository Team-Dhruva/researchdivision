<script>
    export let images = []; // Array of images to display
    export let onClose; // Function to handle closing the viewer

    function closeViewer() {
        onClose();
    }
</script>

<style>
    .image-viewer {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.8); /* Semi-transparent background */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden; /* Hide scrollbars */
    }

    .image-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start; /* Align images at the top */
        width: 100%;
        height: 100%; /* Full height for the container */
        overflow-y: auto; /* Enable vertical scrolling */
        padding: 20px; /* Add some padding */
    }

    .image-page {
        margin-bottom: 20px; /* Space between images/pages */
        display: flex;
        justify-content: center;
        width: 100%; /* Full width of the container */
    }

    .image {
        max-width: 80%; /* Full width of the container */
        max-height: 100%; /* Prevent overflow beyond viewport height */
        display: block; /* Removes any extra space below images */
    }

    .close-button {
        position: absolute;
        top: 20px;
        right: 60px;
        background: #fff;
        border: none;
        padding: 10px;
        cursor: pointer;
        z-index: 1001; /* Ensure button is above the content */
    }
</style>

<div class="image-viewer">
    <button class="close-button" on:click={closeViewer}>✖</button>
    <div class="image-container">
        {#each images as image}
            <div class="image-page">
                <img class="image" src={image} alt="Image Viewer" />
            </div>
        {/each}
    </div>
</div>
