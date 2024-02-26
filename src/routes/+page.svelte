<script lang="ts">
    import { debounce } from "$lib/index";
    import { getLocations, type OSMNominatimPlace } from "$lib/osm_nominatim";

    let foundLocations: OSMNominatimPlace[] = [];
    let query: string = "";

    const searchLocations = async (event: KeyboardEvent) => {
        foundLocations = await getLocations(query);
    };
</script>

<main class="container">
    <h1>SvelteKit search box demo:</h1>
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
