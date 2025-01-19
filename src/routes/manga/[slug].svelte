<script context="module">
    export async function load({ params }) {
        const slug = params.slug;

        // Example manga data
        const mangaData = {
            "manga-title-1": {
                coverImage: "https://t3.ftcdn.net/jpg/04/43/88/94/360_F_443889444_IxDN8BRSaxXsPzKXZ3x5SVsC51BsVFgy.jpg",
                title: "Manga Title 1",
                description: "This is the description for Manga Title 1.",
                chapters: [
                    { title: "Chapter 1", images: ["https://example.com/chapter1-1.jpg"] },
                ]
            },
            "manga-title-2": {
                coverImage: "https://t3.ftcdn.net/jpg/04/43/88/95/360_F_443889445_BzDN8BRSaxXsPzKXZ3x5SVsC51BsVFgy.jpg",
                title: "Manga Title 2",
                description: "This is the description for Manga Title 2.",
                chapters: [
                    { title: "Chapter 1", images: ["https://example.com/chapter2-1.jpg"] },
                ]
            }
        };

        if (mangaData[slug]) {
            return { props: mangaData[slug] }; // Pass data to MangaDetail
        }

        return { status: 404, error: new Error('Manga not found') };
    }
</script>

<script>
    import MangaDetail from '../contents/MangaDetail.svelte';

    export let coverImage;
    export let title;
    export let description;
    export let chapters;
</script>

<MangaDetail {coverImage} {title} {description} {chapters} />
