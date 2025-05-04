import axios from 'axios'

const searchApi = axios.create({
    baseURL: 'https://nominatim.openstreetmap.org',
    params: {
        format: 'geojson',
        limit: 5,
        'accept-language': 'es',
        countrycodes: 'sv',
        adressdetails: 1,
        namedetails: 1,
        polygon_geojson: 1
    }
})

export default searchApi