<script lang="ts">
    import TeamMember from "$lib/TeamMember.svelte"; // Adjust the path as needed
    import manohara from "$lib/ResearchTeam/Manohara.jpg" 
    import Aryan from "$lib/ResearchTeam/Aryan.png" 
    import Khushi from "$lib/ResearchTeam/Khushi.jpg" 
    import Atharva from "$lib/ResearchTeam/Atharva.png" 
    import Akash from "$lib/ResearchTeam/Akash.jpeg" 
    import Prarthana from "$lib/ResearchTeam/Prarthana.jpeg" 
    import Krishna from "$lib/ResearchTeam/Krishnna.jpeg" 
    import Aneesh from "$lib/ResearchTeam/Aneesh.jpg" 
    import Harshhitha from "$lib/ResearchTeam/Harshhitha.jpg" 
    import Rutvik from "$lib/ResearchTeam/Rutvik.jpg" 
    import Sunil from "$lib/ResearchTeam/Sunil.jpg" 
    import Manav from "$lib/ResearchTeam/Manav.jpg" 
    import Pratiksha from "$lib/ResearchTeam/Pratiksha.jpeg" 
    import Shashank from "$lib/ResearchTeam/Shashank.jpg" 
    import Srujan from "$lib/ResearchTeam/Srujan.jpeg" 
    import Deepthi from "$lib/ResearchTeam/Deepthi.jpeg" 
    import Nitya from "$lib/ResearchTeam/Nitya.jpeg" 
    import Shrirang from "$lib/ResearchTeam/Shrirang.jpeg" 
    import Shrish from "$lib/ResearchTeam/Shrish.jpeg" 
    import Vibha from "$lib/ResearchTeam/Vibha.jpeg" 
    import Amrutha from "$lib/ResearchTeam/Amrutha.jpeg" 
  
    const members = [
      { name: "Krishna", role: "Captain", image: Krishna },
      { name: "Sunil", role: "Member", image: Sunil },
      { name: "Akash", role: "Member", image: Akash },
      { name: "Harshhitha", role: "Member", image: Harshhitha },
      { name: "Shashank", role: "Member", image: Shashank },
      { name: "Prarthana", role: "Member", image: Prarthana },
      { name: "Nitya", role: "Member", image: Nitya },
      { name: "Khushi", role: "Member", image: Khushi },
      { name: "Manohara", role: "Member", image: manohara },
      { name: "Atharva", role: "Member", image: Atharva },
      { name: "Shrirang", role: "Member", image: Shrirang },
      { name: "Manav", role: "Member", image: Manav },
      { name: "Deepthi", role: "Member", image: Deepthi },
      { name: "Srujan", role: "Member", image: Srujan },
      { name: "Aryan", role: "Member", image: Aryan },
      { name: "Pratiksha", role: "Member", image: Pratiksha },
      { name: "Rutvik", role: "Member", image: Rutvik },
      { name: "Spoorthy", role: "Member", image: null },
      { name: "Vibha", role: "Member", image: Vibha },
      { name: "Shrish", role: "Member", image: Shrish },
      { name: "Aneesh", role: "Member", image: Aneesh },
      { name: "Amrutha", role: "Member", image: Amrutha },

      // Add more members as needed
    ];
  </script>
  
  <style>
    .team {
      display: flex;
      flex-wrap: wrap; /* Allow wrapping */
      justify-content: center; /* Center-align items */
      padding: 20px; /* Optional padding around the container */
    }

    h1 {
    color: #007bff; /* Blue color */
    font-weight: bold; /* Bold text */
    text-align: center; /* Center text */
    margin-bottom: 20px; /* Space below the heading */
    
  }
  </style>
  <h1>Team</h1>
  <div class="team">
    
    {#each members as member}
      <TeamMember {member} />
    {/each}
  </div>
  