import TextField from "@mui/material/TextField";
import { ChangeEvent, useRef, useContext } from 'react';
import { PlacesContext } from "../context";
import { Box } from "@mui/material";
import SearchResults from "./SearchResults";

export const SearchBar = () => {

    const { searchPlacesByQuery } = useContext(PlacesContext)

    const debounceRef = useRef<NodeJS.Timeout>('');

    const queryChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current)
        }

        debounceRef.current = setTimeout(() => {
            console.log('soy debounce', event.target.value)
            searchPlacesByQuery(event.target.value)
        }, 400);

    }

    return (
        <div
            style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                left: '20px',
                position: 'fixed',
                top: '20px',
                width: '320px',
                zIndex: 9999,
            }}
        >
            <TextField
                onChange={queryChange}
                type="text"
                variant="filled"
                label="Buscar ubicación"
                fullWidth
                sx={{
                    '& .MuiFilledInput-root': {
                        backgroundColor: 'transparent', // Fondo transparente
                        '&:before': {
                            borderBottom: '0px solid #e0e0e0', // Línea inferior normal
                        },
                        '&:hover:not(.Mui-disabled):before': {
                            borderBottom: '0px solid #bdbdbd', // Color al hover
                        },
                        '&:after': {
                            borderBottom: '0px solid black', // Color de la barra activa (azul)
                            transform: 'scaleX(1)', // Mantiene el ancho completo
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                        }
                    },
                    '& label': {
                        color: '#616161',
                        '&.Mui-focused': {
                            color: 'gray', // Color del label cuando está enfocado
                        }
                    },
                    '& .MuiInputBase-input': {
                        fontSize: '14px',

                    }
                }}
            />

            <SearchResults />

        </div>
    )
}