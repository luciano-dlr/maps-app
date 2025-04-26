import { Box } from "@mui/material"
import { MapView } from "../components/MapView"
import { BtnMyLocation } from "../components/BtnMyLocation"

export const HomeScreen = () => {
    return (
        <Box>
            <MapView />
            <BtnMyLocation />
        </Box>
    )
}
