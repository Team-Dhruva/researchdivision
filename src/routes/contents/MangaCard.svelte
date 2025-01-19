<script>
    export let title = "Manga Title";
    export let imageUrl = ""; // Prop for the manga cover image
    export let chapters = []; // Array of chapter objects
    export let onClick; // Function to handle card clicks
  </script>
  
  <style>
    .card {
      background-color: black;
      border: 2px solid white;
      border-radius: 8px;
      text-align: center;
      width: 250px;
      height: 300px;
      margin: 20px;
      overflow: hidden;
      transition: transform 0.3s;
      cursor: pointer;
    }
  
    .card:hover {
      transform: scale(1.05);
    }
  
    img {
      width: 100%;
      height: 180px;
      object-fit: cover;
      border-bottom: 2px solid white;
    }
  
    .title {
      color: white;
      padding: 10px;
      font-size: 1.2em;
      font-weight: bold;
    }
  </style>
  
  <div class="card" on:click={onClick}>
    <img src={imageUrl} alt={title} />
    <div class="title">{title}</div>
  </div>
  