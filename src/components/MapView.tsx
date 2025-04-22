import { useContext, useLayoutEffect, useRef } from "react"
import { PlacesContext } from "../context"
import { LoadingView } from "./LoadingView"
import { Box } from "@mui/material"
import maplibregl from "maplibre-gl"


export const MapView = () => {
    const { isLoading, userLocation } = useContext(PlacesContext)
    const mapDiv = useRef<HTMLDivElement>(null)



    useLayoutEffect(() => {
        if (!isLoading && userLocation && mapDiv.current) {

            const mapRef = new maplibregl.Map({
                container: mapDiv.current,
                style: 'https://tiles.stadiamaps.com/styles/osm_bright.json',
                center: userLocation,
                zoom: 17,
                pitch: 45,

            })

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