import { PlacesProvider } from './context'
import { MapProvider } from './context/map/MapProvider'
import { HomeScreen } from './screens/HomeScreen'

export const MapsApp = () => {
    return (
        <PlacesProvider >
            <MapProvider>
                <HomeScreen />

            </MapProvider>
        </PlacesProvider>
    )
}
