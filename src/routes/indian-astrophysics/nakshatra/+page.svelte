<script>
    import { marked } from 'marked'; 

    import Ch1_import from "../../../../static/iaposts/chapter1.md?raw"
    const Chapter1 = marked(Ch1_import);

    import Ch2_import from "../../../../static/iaposts/chapter2.md?raw"
    const Chapter2 = marked(Ch2_import);
</script>

<div class="Main">
    <h1 class="Head">NAKSHATRA</h1>

    <p class="Desc">nakshatra blog desc</p>
    
    <div class="TableOfContents">
        Table of Contents
        <div class="TableOfContents-separator"></div>
    </div>
    
    <div class="BlogContent">
    <div>
        <h2 class="ChapterTitle">A1: AN INTRODUCTION TO NAKSHATRAS</h2>
        <p class="AuthorName">Authored by Pranati Rao, IA</p>
        <div class="ChapterContent">
            {@html Chapter1}
        </div>
    </div>
    </div>

    <div class="BlogContent">
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
        align-items: center; /* Center content horizontally */
        padding: 20px;
    }

    .Head{
        color: var(--heading-color);
        font-size: 3em;
        font-weight: bold;
        letter-spacing: 1px;
        line-height: 1.5;
        margin: 10px 0;
        text-align: center; /* Ensure text inside is also centered */
        width: 100%; /* Take full width to be centered in flex container */
    }

    .Desc {
        text-align: center;
        max-width: 80%;
        font-size: 1em; /* Use normal text size */
        color: white;
        letter-spacing: 1px;
        line-height: 1.5;
        margin: 10px 0; /* Add spacing */
    }

    .TableOfContents {
        text-align: left; /* Left align the text */
        font-size: 1.5em;
        color: white; /* Assuming you want TOC text white */
        margin: 10px 0;
        padding-bottom: 5px; /* Add some space above the separator */
        border-bottom: 1px solid white; /* Horizontal line separator */
        width: 100%; /* Make the separator span the width */
    }

    .BlogContent {
        width: 90%; /* Default to a large percentage for smaller screens */
        max-width: 70%; /* Limit to 70% on larger screens */
        background-color: #2e2e2e; /* Gray background */
        border-radius: 10px; /* Rounded corners */
        padding: 20px;
        margin: 20px 0; /* Add some top and bottom margin */
        display: flex;
        flex-direction: column;
        align-items: flex-start; /* Left align text within */
    }

    .ChapterTitle {
        color: var(--heading-color);
        font-size: 2em;
        font-weight: bold;
        letter-spacing: 1px;
        line-height: 1.5;
        text-align: center;
        width: 100%; /* Take full width to be centered in flex container */
        margin: 15px 0; /* Add more spacing for chapter titles */
    } .AuthorName{
        font-size: 1.2rem;
        font-weight: 600;
        margin: 0;
        color: var(--heading-color)
    }
</style>