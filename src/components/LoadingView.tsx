import { Box, Skeleton, Stack } from "@mui/material";

export const LoadingView = () => {
    return (
        <Box sx={{ maxHeight: '60vh', overflowY: 'auto' }}>


            <Box

                sx={{
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: '#f9f9f9',
                }}
            >
                {/* Línea principal (display_name) */}
                <Skeleton
                    variant="text"
                    width="80%"
                    height={24}
                    sx={{ mb: 1 }}
                />

                {/* Divider */}
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={1}
                    sx={{ mb: 1 }}
                />

                {/* Detalles de dirección */}
                <Stack spacing={1}>
                    <Skeleton variant="text" width="70%" height={20} />
                    <Skeleton variant="text" width="60%" height={20} />
                    <Skeleton variant="text" width="65%" height={20} />
                    <Skeleton variant="text" width="75%" height={20} />
                    <Skeleton variant="text" width="50%" height={20} />
                    <Skeleton variant="text" width="55%" height={20} />
                </Stack>

                {/* Botón */}
                <Skeleton
                    variant="rectangular"
                    width={100}
                    height={36}
                    sx={{
                        mt: 2,
                        borderRadius: '12px'
                    }}
                />
            </Box>


        </Box>
    );
};