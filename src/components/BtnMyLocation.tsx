import { Button } from '@mui/material'
import { useContext } from 'react'
import { MapContext } from '../context/map/MapContext'
import { PlacesContext } from '../context/places/PlacesContext';

export const BtnMyLocation = () => {

    const { map, isMapReady } = useContext(MapContext)
    const { userLocation } = useContext(PlacesContext)

    const handleOnClick = () => {

        if (!isMapReady) throw new Error('Map not ready')
        if (!userLocation) throw new Error('User Locatio not ready')

        map?.flyTo({
            zoom: 17,
            center: userLocation
        })



    }
    return (
        <Button
            variant="contained"
            style={{
                position: 'fixed',
                top: '20px',
                right: '20px',
                zIndex: 99999
            }}
            onClick={handleOnClick}
        >
            Mi ubicacion

        </Button>
    )
}
