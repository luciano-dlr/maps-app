import { createContext } from "react"
import maplibregl from "maplibre-gl"


interface MapContextProps {
    mapReady?: boolean
    map?: maplibregl.Map
}


export const MapContext = createContext({} as MapContextProps)