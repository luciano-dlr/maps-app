import { JSX, useEffect, useReducer } from "react"
import { PlacesContext } from "./PlacesContext"
import { placesReducer } from "./PlacesReducer";
import { getUserLocation } from "../../helpers/getUserLocation";
import searchApi from "../../apis/SearchApi";
import { Feature, SearchResponse } from '../../interfaces/places';

export interface PlacesState {
    isLoading: boolean,
    userLocation?: [number, number],
    isLoadingPlaces: boolean,
    places: Feature[],
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: [],
}

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const PlacesProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE)

    useEffect(() => {
        getUserLocation()
            .then(latitudLongitud => dispatch({ type: 'setUserLocation', payload: latitudLongitud }))
    }, [])


    const searchPlacesByQuery = async (query: string): Promise<Feature[]> => {
        if (query.length === 0) {
            dispatch({ type: 'clearPlaces' });
            return [];
        }
        if (!state.userLocation) throw new Error('No ubicacion del usuario')

        dispatch({ type: 'setLoadingPlaces' })

        const response = await searchApi.get<SearchResponse>(`/search?q=${query}`, {
            params: {
                proximity: state.userLocation.join(',')
            }
        })
        dispatch({ type: 'setPlaces', payload: response.data.features })

        return response.data.features
    }

    return (
        <PlacesContext.Provider value={{
            ...state,
            searchPlacesByQuery
        }}>
            {children}

        </PlacesContext.Provider>
    )
}
