<script>
    import { page } from '$app/stores';
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment'; // Import browser check
    let isMenuOpen = false;

    const handleClickOutside = (event) => {
        const nav = document.querySelector('nav');
        const hamburger = document.querySelector('.hamburger');
        if (isMenuOpen && !nav.contains(event.target) && !hamburger.contains(event.target)) {
            isMenuOpen = false;
        }
    };

    // Add event listeners only on the client side
    onMount(() => {
        if (browser) {
            document.addEventListener('click', handleClickOutside);
        }
    });

    onDestroy(() => {
        if (browser) {
            document.removeEventListener('click', handleClickOutside);
        }
    });
</script>


<header>
    <div class="corner">
        <a href="https://teamdhruva.com/">
            <img
                src="https://teamdhruva.com/text_logo.webp"
                alt="Dhruva logo"
            />
        </a>
    </div>
    <!-- Hamburger icon -->
    <button
        class="hamburger"
        aria-label="Toggle menu"
        on:click={() => (isMenuOpen = !isMenuOpen)}
    >
        <span></span>
        <span></span>
        <span></span>
    </button>
    <!-- Navigation menu -->
    <nav class:open={isMenuOpen}>
        <ul>
            <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
                <a href="/">Home</a>
            </li>
            <li
                aria-current={$page.url.pathname === "/blogs"
                    ? "page"
                    : undefined}
            >
                <a href="/blogs">Blogs</a>
            </li>
            <li
                aria-current={$page.url.pathname.startsWith(
                    "/indian-astrophysics",
                )
                    ? "page"
                    : undefined}
            >
                <a href="/indian-astrophysics">Indian Astrophysics</a>
            </li>
            <li
                aria-current={$page.url.pathname.startsWith("/journal")
                    ? "page"
                    : undefined}
            >
                <a href="/journal">Journal</a>
            </li>
            <li
                aria-current={$page.url.pathname === "/about"
                    ? "page"
                    : undefined}
            >
                <a href="/about">About</a>
            </li>
            <li
                aria-current={$page.url.pathname.startsWith("/team")
                    ? "page"
                    : undefined}
            >
                <a href="/team">Team</a>
            </li>
        </ul>
    </nav>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        background-color: black;
        color: white;
        border-bottom: 2px solid white;
        position: relative;
    }

    .corner img {
        width: 20%;
        height: auto;
        margin-left: 10px;
    }

    /* Hamburger menu button */
    .hamburger {
        display: none; /* Hidden on larger screens */
        flex-direction: column;
        justify-content: space-around;
        width: 30px;
        height: 25px;
        background: transparent;
        border: none;
        cursor: pointer;
        z-index: 1001;
    }
    .hamburger span {
        display: block;
        width: 200%;
        height: 3px;
        background: white;
        border-radius: 2px;
        transition: all 0.3s ease-in-out;
    }

    /* Navigation menu */
    nav {
        display: flex; 
        align-items: center;
    }

    nav ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        gap: 25px;
    }

    nav ul li a {
        text-decoration: none;
        color: white;
        font-size: 1rem;
        font-weight: bold;
    }
    nav ul li[aria-current="page"] a {
        color: aqua;
    }

    nav ul li a:hover {
        color: #0d92f4;
    }

    /* Responsive Behavior */
    @media (max-width: 768px) {
        .corner img {
            width: 40%;
            margin-left: 0;
        }
        .hamburger {
            display: flex; /* Show hamburger icon on small screens */
        }
        nav {
            display: none; /* Hide the navigation menu by default on small screens */
            flex-direction: column;
            position: absolute;
            top: 100%;
            right: 0;
            background: rgba(0, 0, 0, 0.9);
            width: 100%;
            z-index: 1000;
            padding: 10px 0;
        }
        nav.open {
            display: flex; /* Show the menu when toggled */
        }
        nav ul {
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }
    }
</style>
