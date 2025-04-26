import { createContext } from "react"
import maplibregl from "maplibre-gl"


interface MapContextProps {
    isMapReady?: boolean
    map?: maplibregl.Map,
    setMap: (map: maplibregl.Map) => void,
}


export const MapContext = createContext({} as MapContextProps)