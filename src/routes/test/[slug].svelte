// src/routes/test/[slug].svelte
<script context="module">
    export async function load({ params }) {
        console.log("Test slug:", params.slug);
        return { props: { slug: params.slug } };
    }
</script>

<script>
    export let slug;
</script>

<h1>Test Route: {slug}</h1>
