<script lang="ts">
    import { debounce } from "$lib/index";
    import { getLocations, type OSMNominatimPlace } from "$lib/osm_nominatim";

    let foundLocations: OSMNominatimPlace[] = [];
    let query: string = "";

    const searchLocations = async (event: KeyboardEvent) => {
        foundLocations = await getLocations(query);
    };
</script>

<body class="container">
    <header>
        <h1>SvelteKit search box demo:</h1>
        See tutorial
    </header>
    <main>
        <input
            name="search"
            type="search"
            placeholder="Search location"
            bind:value={query}
            on:input={debounce(searchLocations)}
        />
        {#each foundLocations as location}
            <ul>
                <li>
                    {location.display_name}
                </li>
            </ul>
        {/each}
    </main>
    <footer>Made by olek</footer>
</body>

<style>
    footer {
        position: absolute;
        bottom: 0;
        /* width: 100%; */
        height: 2.5rem; /* Footer height */
    }
</style>
