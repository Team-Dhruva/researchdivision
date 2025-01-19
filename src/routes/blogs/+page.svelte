<script>
    import Blog from './Blog.svelte';
    import blog1chapter1 from './blogs/blog1/ch1/ch1.md'
    import Blog1 from '$lib/BlogCover/Blog1.jpg'
    import Blog2 from '$lib/BlogCover/Blog2.jpeg'
    import Blog3 from '$lib/BlogCover/Blog3.jpeg'
    import blog1chapter2 from './blogs/blog1/ch2/ch2.md'
    import blog1chapter3 from './blogs/blog1/ch3/ch3.md'
    // import blog1chapter4 from './blogs/blog1/ch4/ch4.md'
    // import blog1chapter5 from './blogs/blog1/ch5/ch5.md'

    const blogs = [
  {
    id: 1,
    title: "History of Space Exploration",
    author: "Prarthana and Atharva",
    description: "Countdown…T minus…3…2…1 and you are now in for a trip down the memory lane that will make you admire the efforts and brilliance that has gone into the space exploration missions.",
    chapters: [
      { id: 1, title: "Cruising into the unexplored (1940-1960)", markdown: blog1chapter1 },
      { id: 2, title: "Tryst with Moon (1960-1970)", markdown: blog1chapter2 },
      { id: 3, title: "Understanding our neighbours better (1970-90)", markdown: blog1chapter3 },
      // { id: 4, title: "A harbour to sail in the stellar winds (1990-2000)", markdown: blog1chapter4 },
      // { id: 5, title: "Current Affairs (2000-2024)", markdown: blog1chapter5 },
    ],
    nextChapterDate: "26-01-2025",
    image:Blog1,
    lastUpdated:'19-1-2024',
  },
  {
    id: 2,
    title: "Exoplanets: Chasing the Alien World",
    author: "Khushi and Pratiksha",
    description: "Delve into advanced Space concepts.",
    chapters: [
    ],
    nextChapterDate: "Upcoming",
    image:Blog2,
    lastUpdated:'',
  },
  {
    id: 3,
    title: "Beyond Earth Among The Stars",
    author: "Adithya and Manohara",
    description: "Delve into advanced Space concepts.",
    chapters: [
      ],
    nextChapterDate: "Upcoming",
    image:Blog3,
    lastUpdated:'',
  },
];

</script>
<div>
    <h1>Dive into Amazing reads!!!</h1>
    <Blog {blogs} />
  </div>