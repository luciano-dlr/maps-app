import { JSX, useReducer } from "react"
import maplibregl from "maplibre-gl"
import { MapContext } from "./MapContext"
import { MapReducer } from "./MapReducer"

export interface MapState {
    mapReady?: boolean
    map?: maplibregl.Map
}

const INITIAL_STATE = {
    mapReady: false,
    map: undefined
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const MapProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(MapReducer, INITIAL_STATE)

    return (
        <MapContext.Provider value={{
            ...state
        }}>
            {children}
        </MapContext.Provider>
    )
}
