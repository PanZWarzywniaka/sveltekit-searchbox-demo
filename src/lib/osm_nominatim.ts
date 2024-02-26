
export interface OSMNominatimPlace {
    addresstype: string
    boundingbox: number[]
    class: string
    display_name: string
    lat: string
    lon: string
    name: string
    type: string
}


export const getLocations = async (query: string): Promise<OSMNominatimPlace[]> => {
    const url = `https://nominatim.openstreetmap.org/search?q=${query}&limit=10&format=json`
    const response = await (await fetch(url)).json()
    const locations = response as OSMNominatimPlace[]

    return locations
}