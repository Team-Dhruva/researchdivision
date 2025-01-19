<script lang="ts">
    import type { TeamMember } from "$lib"; // Adjust the import path based on your project structure
  
    export let member: TeamMember;
    $: image = member.image != null ? member.image : "https://i.pinimg.com/236x/7b/43/64/7b4364e23626a24838155a63bb1892f2.jpg"; // Fallback image if none provided
  </script>
  
  <style>
    a {
      display: inline-block;
      flex-direction: column;
      width: 14rem; /* 64 Tailwind units */
      height: 20rem; /* 80 Tailwind units */
      background-color: #2d3748; /* bg-neutral-800 */
      transition: background-color 0.3s;
      border-radius: 0.375rem; /* rounded-md */
      margin: 1rem; /* m-4 */
     
      text-decoration: none; /* No underline */
    }
  
    a:hover {
      background-color: #4a5568; /* bg-neutral-700 */
    }
  
    .flex {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      padding-top: 10px;
    }
  
    img {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px; /* rounded-full */
      width: 10rem; /* w-40 */
      height: 10rem; /* h-40 */
      border: 4px solid white; /* Border for the image */
      
    }
  
    h2 {
      display: flex;
      align-items: center;
      font-size: 1.5rem; /* text-2xl */
      flex: 1;
      font-weight: bold; /* font-bold */
      color: white; /* text-white */
    }
  
    p {
      text-align: center;
      color: white; /* text-white */
    }

    
  </style>
  
  <a href={member.link ? `/members/${member.link}` : ""}>
    <div class="flex">
      <img src={image} alt={member.name} />
      <h2>{member.name}</h2>
      <p>{member.role}</p>
    </div>
  </a>
  