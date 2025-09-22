<script>
  import Blog from "./Blog.svelte";
  import Blog1 from "$lib/BlogCover/Blog1.jpg";
  import Blog2 from "$lib/BlogCover/Blog2.jpeg";
  import Blog3 from "$lib/BlogCover/Blog3.jpeg";
  import Blog4 from "$lib/BlogCover/Blog4.png";
  import Blog5 from "$lib/BlogCover/Blog5.png";
  import Blog6 from "$lib/BlogCover/Blog6.png";
  import blog1chapter1 from "./blogs/blog1/ch1/ch1.md";
  import blog1chapter2 from "./blogs/blog1/ch2/ch2.md";
  import blog1chapter3 from "./blogs/blog1/ch3/ch3.md";
  import blog1chapter4 from "./blogs/blog1/ch4/ch4.md";
  import blog1chapter5 from "./blogs/blog1/ch5/ch5.md";
  import blog2chapter1 from "./blogs/blog2/ch1/ch1.md";
  import blog2chapter2 from "./blogs/blog2/ch2/ch2.md";
  import blog3chapter1 from "./blogs/blog3/ch1/ch1.md";
  import blog5chapter1 from "./blogs/blog5/ch1/ch1.md";
  import blog6chapter1 from "./blogs/blog6/ch1/ch1.md";
  import blog6chapter2 from "./blogs/blog6/ch2/ch2.md";

  const blogs = [
    {
      id: 6,
      title: "Cosmic Headlines: What the Universe Told Us This Month",
      author: "Nishtha Chakraborty,Atharva Agarwal",
      description:
        "Astrophysics is a continuously evolving and fascinating field of science.Join us as we explore the breakthroughs in astrophysics each month.",
      chapters: [
        {
          id: 1,
          title: "What the Universe Told Us This April",
          markdown: blog6chapter1,
        },
        {
          id: 2,
          title: "What the Universe Told Us This July",
          markdown: blog6chapter2,
        },
        
      ],
      nextChapterDate: "",
      image: Blog6,
      lastUpdated: "11-05-2025",
    },
     {
      id: 5,
      title: "The Mystery of Hot Helium Stars",
      author: "V Megha",
      description:
        "In 2024, the field of astrophysics witnessed a remarkable breakthrough in understanding helium stars, read to learn more",
      chapters: [
        {
          id: 1,
          title: "The Mystery of Hot Helium Stars",
          markdown: blog5chapter1,
        },
        
      ],
      nextChapterDate: "",
      image: Blog5,
      lastUpdated: "10-04-2025",
    },
    {
      id: 3,
      title: "Inevitable Patterns in sets of numbers",
      author: "Amrutha",
      description:
        "In 2024, the field of mathematics witnessed a remarkable breakthrough, thanks to the collaborative efforts of Ashwin Sah and Mehtaab Sawhney from MIT, and James Leng from UCLA.",
      chapters: [
        {
          id: 1,
          title: "Inevitable Patterns in sets of numbers",
          markdown: blog3chapter1,
        },
        
      ],
      nextChapterDate: "",
      image: Blog4,
      lastUpdated: "23-02-2025",
    },
    {
      id: 2,
      title: "Proof of zero height conjecture",
      author: "Varenya",
      description:
        "Ever heard of a mathematical theory that's all about staying low? Richard Brauer’s Zero Height Conjecture suggests that some algebraic numbers just refuse to grow! The height may be zero, but its packed with algebra and number theory.",
      chapters: [
        {
          id: 1,
          title: "The Math of Being Down to Earth: Zero Height Explained",
          markdown: blog2chapter1,
        },
        {
          id: 2,
          title: "The solution to this: let's disagree to agree",
          markdown: blog2chapter2,
        },
      ],
      nextChapterDate: "",
      image: Blog2,
      lastUpdated: "15-02-2025",
    },
    {
      id: 1,
      title: "History of Space Exploration",
      author: "Prarthana and Atharva",
      description:
        "Countdown…T minus…3…2…1 and you are now in for a trip down the memory lane that will make you admire the efforts and brilliance that has gone into the space exploration missions.",
      chapters: [
        {
          id: 1,
          title: "Cruising into the unexplored (1940-1960)",
          markdown: blog1chapter1,
        },
        {
          id: 2,
          title: "Tryst with Moon (1960-1970)",
          markdown: blog1chapter2,
        },
        {
          id: 3,
          title: "Understanding our neighbours better (1970-90)",
          markdown: blog1chapter3,
        },
        {
          id: 4,
          title: "A harbour to sail in the stellar winds (1990-2000)",
          markdown: blog1chapter4,
        },
        {
          id: 5,
          title: "Current Affairs (2000-2024)",
          markdown: blog1chapter5,
        },
      ],
      nextChapterDate: "",
      image: Blog1,
      lastUpdated: "02-02-2025",
    },
    // {
    //   id: 2,
    //   title: "Exoplanets: Chasing the Alien World",
    //   author: "Khushi and Pratiksha",
    //   description:
    //     "Whether you're a space nerd or just curious about the universe, you're in the right place. Let's explore these distant worlds together and discover what makes them so fascinating. Ready to blast off?",
    //   chapters: [],
    //   nextChapterDate: "Upcoming on 8-02-2025",
    //   image: Blog2,
    //   lastUpdated: "",
    // },
    // {
    //   id: 3,
    //   title: "Beyond Earth Among The Stars",
    //   author: "Adithya and Manohara",
    //   description: "Delve into advanced Space concepts.",
    //   chapters: [
    //     ],
    //   nextChapterDate: "Upcoming",
    //   image:Blog3,
    //   lastUpdated:'',
    // },
  ];
</script>

<div>
  <Blog {blogs} />
</div>
