import { Box } from "@mui/material"
import { MapView } from "../components/MapView"
import { BtnMyLocation } from "../components/BtnMyLocation"
import { ReactLogo } from "../components/ReactLogo"
import { SearchBar } from "../components/SearchBar"

export const HomeScreen = () => {
    return (
        <Box>
            <MapView />
            <BtnMyLocation />
            <SearchBar />
            <ReactLogo />
        </Box>
    )
}
