

import { Box, Stack, Typography, Paper } from '@mui/material';

export default function ThreeImage() {
    return (
        <Box >
            <Stack
                flexDirection='row'
                sx={{ justifyContent: 'space-around', mb: 2 }}
            >
                <div> <img src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/95e14cca44fdcb0e.jpg?q=20" width='420' /></div>
                <div>  <img src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/fe10ff6ca4ccbfe7.jpg?q=20" width='420' /></div>
                <div>   <img src="https://rukminim1.flixcart.com/fk-p-flap/520/280/image/dcf7766be27a4478.jpg?q=20" width='420' /></div>
            </Stack>
        </Box>
    )
}