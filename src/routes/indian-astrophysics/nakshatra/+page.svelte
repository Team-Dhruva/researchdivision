<script>
    import { marked } from 'marked'; 

    import Ch1_import from "./posts/chapter1.md?raw"
    const Chapter1 = marked(Ch1_import);

    import Ch2_import from "./posts/chapter2.md?raw"
    const Chapter2 = marked(Ch2_import);

    function scrollToChapter(id) {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
</script>

<div class="Main">
    <h1 class="Head">NAKSHATRA</h1>

    <p class="Desc">Exploring the ancient indian system</p>
    
    <div class="TOC-Container">
        <div class="TableOfContents">
            Table of Contents
        </div>
        <div class="TOC-Table rounded-box">
            <table>
                <tbody>
                    <tr>
                        <td><button on:click={() => scrollToChapter('chapter1')}>A1: AN INTRODUCTION TO NAKSHATRAS</button></td>
                    </tr>
                    <tr>
                        <td><button on:click={() => scrollToChapter('chapter2')}>A2: THE ASTRONOMICAL RELEVANCE OF NAKSHATRAS</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    <div class="BlogContent" id="chapter1">
    <div>
        <h2 class="ChapterTitle">A1: AN INTRODUCTION TO NAKSHATRAS</h2>
        <p class="AuthorName">Authored by Pranati Rao, IA</p>
        <div class="ChapterContent">
            {@html Chapter1}
        </div>
    </div>
    </div>

    <div class="BlogContent" id="chapter2">
    <div>
        <h2 class="ChapterTitle">A2: THE ASTRONOMICAL RELEVANCE OF NAKSHATRAS</h2>
        <p class="AuthorName">Authored by Nithyashree S, IA</p>
        <div class="ChapterContent">
            {@html Chapter2}
        </div>
    </div>
    </div>
</div>

<style>
    :root {
        --heading-color: #cad6f2;
        --clickable-color: #32567e;
        --alt-black: #000326;
        --chapter-background: #2e2e2e;
        --author-color: #2B6ABC;
    }

    .Main {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    .Head{
        color: var(--heading-color);
        font-size: 3em;
        font-weight: bold;
        letter-spacing: 1px;
        line-height: 1.5;
        margin: 10px 0;
        text-align: center;
        width: 100%;
    }

    .Desc {
        text-align: center;
        max-width: 80%;
        font-size: 1em;
        color: white;
        letter-spacing: 1px;
        line-height: 1.5;
        margin: 10px 0;
    }

    .TOC-Container {
        width: 300px; /* Increased width from 200px to 300px */
        margin-right: 20px;
        flex-shrink: 0;
    }

    .TableOfContents {
        text-align: left;
        font-size: 1.2em;
        color: white;
        margin-top: 0;
        margin-bottom: 5px;
        padding-bottom: 2px;
        border-bottom: 1px solid white;
        width: 100%;
    }

    .TOC-Table {
        text-align: left;
        margin-top: 5px;
    }

    .TOC-Table table {
        width: 100%;
    }

    .TOC-Table td {
        padding: 5px 0;
    }

    .TOC-Table button {
        background: none;
        border: none;
        color: white;
        font-size: 0.9em;
        cursor: pointer;
        text-align: left;
        padding: 3px 0;
        display: block;
        width: 100%; /* Make buttons take full width */
        text-align: left; /* Ensure text aligns left */
    }

    .TOC-Table button:hover {
        color: var(--heading-color);
    }

    .rounded-box {
        background-color: var(--chapter-background);
        border-radius: 10px;
        padding: 15px; /* Increased padding */
    }

    .TableOfContents {
        text-align: left;
        font-size: 1.5em;
        color: white;
        margin: 10px 0;
        padding-bottom: 5px;
        border-bottom: 1px solid white;
        width: 100%;
    }

    .BlogContent {
        width: 90%;
        max-width: 70%;
        background-color: #2e2e2e;
        border-radius: 10px;
        padding: 20px;
        margin: 20px 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .ChapterTitle {
        color: var(--heading-color);
        font-size: 2em;
        font-weight: bold;
        letter-spacing: 1px;
        line-height: 1.5;
        text-align: center;
        width: 100%;
        margin: 15px 0;
    }

    .AuthorName{
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0;
        color: var(--heading-color)
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .TOC-Container {
            width: 250px; /* Slightly smaller on tablets */
        }
    }

    @media (max-width: 480px) {
        .TOC-Container {
            width: 100%; /* Full width on mobile */
            margin-right: 0;
            margin-bottom: 20px;
        }
        
        .Main {
            align-items: stretch;
        }
    }
</style>