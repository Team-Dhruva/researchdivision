<!-- src/routes/+layout.svelte -->
<script>
    import '../app.css'; // Ensure you import your CSS file
    import Header from '$lib/Header.svelte';
</script>

<Header />
<slot />
