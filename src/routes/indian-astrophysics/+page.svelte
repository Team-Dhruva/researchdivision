<!-- src/routes/indian-astrophysics/+page.svelte -->
<script>
    import IndianAstrophysics from './indian-astrophysics.svelte';
    const blogs = [
    {
      id: 1,
      title: "great article",
      author: "bob and alice",
      description:
        "desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc desc",
      chapters: [
        {
          id: 1,
          title: "greatest title in the history of astronomy"
        }
      ],
      nextChapterDate: "",
      lastUpdated: "02-02-2025",
    }
  ];
</script>

<IndianAstrophysics {blogs} />
