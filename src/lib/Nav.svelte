<!-- src/lib/Nav.svelte -->
<script>
    import { goto } from '$app/navigation';

    const navigate = (route) => {
        goto(route);
    };
</script>

<nav>
    <ul>
        <li><a href="#" on:click|preventDefault={() => navigate('/')}>Home</a></li>
        <li><a href="#" on:click|preventDefault={() => navigate('/about')}>Blogs</a></li>
        <li><a href="#" on:click|preventDefault={() => navigate('/indian-astrophysics')}>Indian Astrophysics</a></li>
        <li><a href="#" on:click|preventDefault={() => navigate('/journal')}>Journal</a></li>
        <li><a href="#" on:click|preventDefault={() => navigate('/team')}>Team</a></li>
    </ul>
</nav>




<style>
    nav {
        background: #333;
        padding: 10px;
    }
    nav ul {
        list-style: none;
        padding: 0;
    }
    nav ul li {
        display: inline;
        margin-right: 15px;
    }
    nav ul li a {
        color: white;
        text-decoration: none;
    }
    nav ul li a:hover {
        text-decoration: underline;
    }
</style>
