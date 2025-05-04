import { Box, Button, Typography, Paper, Stack, Divider } from '@mui/material'
import { useContext } from 'react'
import { PlacesContext } from '../context'
import { LoadingView } from './LoadingView'

const SearchResults = () => {
    const { places, isLoadingPlaces } = useContext(PlacesContext)



    if (isLoadingPlaces) return <LoadingView />

    return (
        <Box sx={{
            maxHeight: '80vh',
            overflowY: 'auto',
        }}>
            <Stack spacing={2}>
                {places.map(place => {
                    const { address, display_name, place_id } = place.properties

                    return (
                        <Paper
                            key={place_id}
                            elevation={3}
                            sx={{
                                p: 2,
                                borderRadius: 2,
                                transition: 'background-color 0.3s',
                                '&:hover': {
                                    backgroundColor: '#f9f9f9',
                                }
                            }}
                        >
                            <Typography variant="body2" fontWeight={300} gutterBottom>
                                {display_name}
                            </Typography>

                            <Divider sx={{ mb: 1 }} />

                            <Stack spacing={0.5}>
                                <Typography variant="body2">
                                    <strong>Calle:</strong> {address.road} {address.house_number}
                                </Typography>
                                {address.suburb && (
                                    <Typography variant="body2">
                                        <strong>Barrio:</strong> {address.suburb}
                                    </Typography>
                                )}
                                <Typography variant="body2">
                                    <strong>Ciudad:</strong> {address.city || 'No disponible'}
                                </Typography>
                                <Typography variant="body2">
                                    <strong>Provincia:</strong> {address.state}
                                </Typography>
                                <Typography variant="body2">
                                    <strong>Código postal:</strong> {address.postcode}
                                </Typography>
                                <Typography variant="body2">
                                    <strong>País:</strong> {address.country}
                                </Typography>
                            </Stack>

                            <Button
                                onClick={() => console.log(place.geometry.coordinates[0])}
                                variant="outlined"
                                size="small"
                                sx={{
                                    mt: 2,
                                    textTransform: 'none',
                                    fontWeight: 500,
                                    borderRadius: '12px',
                                    alignSelf: 'flex-start'
                                }}
                            >
                                Direcciones
                            </Button>
                        </Paper>
                    )
                })}
            </Stack>
        </Box>
    )
}

export default SearchResults
