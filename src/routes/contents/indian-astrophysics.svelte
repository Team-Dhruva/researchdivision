<script>
    // You can modify the image source here or bind it dynamically
    let imageSrc = "/path/to/your/image.jpg"; // Replace with the actual image path
</script>

<style>
    .Main {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center; /* Align text and images center */
        padding: 20px; /* Add padding for better layout */
    }

    .Head, .vision {
        color: #007bff; /* Blue color */
        font-size: 24px; /* Font size */
        font-weight: bold; /* Bold text */
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4); /* Shadow for depth */
        letter-spacing: 1px; /* Spacing between letters */
        line-height: 1.5; /* Line height */
        margin: 10px 0; /* Add spacing between sections */
    }

    .Text, .vision-text {
        padding: 10px; /* Adjust padding for smaller screens */
        justify-content: center;
        font-size: 18px;
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

    @media (max-width: 768px) {
        .Head, .vision {
            font-size: 20px; /* Reduce font size for smaller screens */
        }

        .Text, .vision-text {
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
        <img src="https://i.pinimg.com/736x/c6/9b/d3/c69bd3ab92584b8065edf60479df5897.jpg" alt="Indian Astrophysics" />
        <img src="https://i.pinimg.com/736x/c6/9b/d3/c69bd3ab92584b8065edf60479df5897.jpg" alt="Indian Astrophysics" />
        <img src="https://i.pinimg.com/736x/c6/9b/d3/c69bd3ab92584b8065edf60479df5897.jpg" alt="Indian Astrophysics" />
    </div>
    <h1 class="Head">Unveil secrets of Indian Astrophysics</h1>
  
    <p class="Text"> 
        Indian astrophysics has made significant strides over the years, with contributions ranging from theoretical advancements to observational discoveries.
    </p>
  
    <h1 class="vision">Upcoming Review Papers</h1>
    <p class="vision-text">
        Indian Calendar
    </p>
    <p class="vision-text">Computational research using Stellarium</p>
</div>
