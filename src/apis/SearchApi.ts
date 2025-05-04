import axios from 'axios'

const searchApi = axios.create({
    baseURL: 'https://nominatim.openstreetmap.org',
    params: {
        format: 'geojson',
        limit: 5,
        'accept-language': 'es',
        // countrycodes: 'ar',
        addressdetails: 1,
        namedetails: 1,
        polygon_geojson: 1,
        // viewbox: '-65.5,-32.5,-62.5,-30.5', // Coordenadas aproximadas que cubren Córdoba
        bounded: 1 // Priorizar resultados dentro del viewbox
    }
})

export default searchApi