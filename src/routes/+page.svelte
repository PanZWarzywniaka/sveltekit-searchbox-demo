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
        See
        <a href="https://olek.site/blog/location-search-bar-using-sveltekit">
            code tutorial
        </a>
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
    <footer>
        <div class="grid">
            <div>
                See <a
                    href="https://github.com/PanZWarzywniaka/sveltekit-searchbox-demo"
                    >code</a
                >
            </div>
            <div>
                Made by <a href="https://olek.site/">Olek</a>
            </div>
        </div>
    </footer>
</body>

<style>
    footer {
        position: absolute;
        bottom: 0;
        border-top: solid 1px gray;
        width: 80%;
        /* height: 2.5rem; */
    }
</style>
