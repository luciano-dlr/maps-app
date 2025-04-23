import { useContext, useLayoutEffect, useRef } from "react"
import { PlacesContext } from "../context"
import { LoadingView } from "./LoadingView"
import { Box } from "@mui/material"
import maplibregl from "maplibre-gl"
import { MapContext } from "../context/map/MapContext"


export const MapView = () => {
    const { isLoading, userLocation } = useContext(PlacesContext)
    const { setMap } = useContext(MapContext)
    const mapDiv = useRef<HTMLDivElement>(null)


    useLayoutEffect(() => {
        if (!isLoading && userLocation && mapDiv.current) {

            const mapRef = new maplibregl.Map({
                container: mapDiv.current,
                style: 'https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json',
                center: userLocation,
                zoom: 17,
                pitch: 45,

            })
            setMap(mapRef)
        }
    }, [isLoading])

    if (isLoading) return <LoadingView />

    return (
        <Box
            ref={mapDiv}
            sx={{
                height: '100vh',
                width: '100vw',
                position: 'fixed',
                top: 0,
                left: 0
            }}
        />
    )
}