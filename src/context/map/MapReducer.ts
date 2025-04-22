
import { MapState } from './MapProvider'

type MapAction = {
    type: 'setMap', payload: maplibregl.Map
}

export const MapReducer = (state: MapState, action: MapAction): MapState => {

    switch (action.type) {
        case 'setMap':

            return {
                ...state,
                mapReady: true,

            }


        default:
            return state
    }

}
