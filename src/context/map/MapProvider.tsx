import { JSX, useReducer } from "react"
import maplibregl, { Marker, Popup } from "maplibre-gl"
import { MapContext } from "./MapContext"
import { MapReducer } from "./MapReducer"

export interface MapState {
    isMapReady?: boolean
    map?: maplibregl.Map
}

const INITIAL_STATE = {
    isMapReady: false,
    map: undefined
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const MapProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(MapReducer, INITIAL_STATE)

    const setMap = (map: maplibregl.Map) => {

        const myLocationPopup = new Popup()
            .setHTML(`
                <div>
                    <h2>Aqui Estoy</h2>
                    <p>En algun Lugar del Mundo</p>
                </div>
                `)

        new Marker({
            color: 'gray',
            scale: 1.5
        })
            .setLngLat(map.getCenter())
            .setPopup(myLocationPopup)
            .addTo(map)
        dispatch({ type: 'setMap', payload: map })
    }

    return (
        <MapContext.Provider value={{
            ...state,
            setMap
        }}>
            {children}
        </MapContext.Provider>
    )
}
