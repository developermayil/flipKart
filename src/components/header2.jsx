import { Box, Stack, Typography, Paper } from '@mui/material';
import "@/pages/style/style.css"
export default function Headers2() {
    return (
        <>
            <Box sx={{p:4}}  className="imgHover">
                <Stack direction='row' justifyContent='space-around' >
                    <Stack  alignItems='center' spacing={1}>
                        <img src='https://rukminim2.flixcart.com/fk-p-flap/64/64/image/698ba0cebe456aaf.jpg?q=100' width={65} />
                        <Typography variant='body' >Top Offers</Typography>
                    </Stack>
                    <Stack alignItems='center' spacing={1}>
                        <img src='https://rukminim2.flixcart.com/fk-p-flap/64/64/image/44e10b16e649b691.jpg?q=100' width={65} />
                        <Typography variant='body' >Mobile & Tablets</Typography>
                    </Stack>
                    <Stack alignItems='center' spacing={1}>
                        <img src='https://rukminim2.flixcart.com/fk-p-flap/64/64/image/717b5077a5e25324.jpg?q=100' width={65} />
                        <Typography variant='body' >Tvs & Appliances</Typography>
                    </Stack>
                    <Stack alignItems='center' spacing={1}>
                        <img src='https://rukminim2.flixcart.com/fk-p-flap/64/64/image/4da1d0d19350cc84.jpg?q=100' width={65} />
                        <Typography variant='body' >Electronics</Typography>
                    </Stack>
                    <Stack alignItems='center' spacing={1}>
                        <img src='https://rukminim2.flixcart.com/fk-p-flap/64/64/image/9d4e9c605fc1d2d3.jpg?q=100' width={65} />
                        <Typography variant='body' >Fashion</Typography>
                    </Stack>
                    <Stack alignItems='center' spacing={1}>
                        <img src='https://rukminim2.flixcart.com/fk-p-flap/64/64/image/a5e656672d0548dd.jpg?q=100' width={65} />
                        <Typography variant='body' >Beautity</Typography>
                    </Stack>
                    <Stack alignItems='center' spacing={1}>
                        <img src='https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5b813b64a3179898.jpg?q=100' width={65} />
                        <Typography variant='body' >Home & Kitchen</Typography>
                    </Stack>
                    <Stack alignItems='center' spacing={1}>
                        <img src='https://rukminim2.flixcart.com/fk-p-flap/64/64/image/7a5e96c10ada8a56.jpg?q=100' width={65} />
                        <Typography variant='body' >Furinature</Typography>
                    </Stack>
                    <Stack alignItems='center' spacing={1}>
                        <img src='https://rukminim2.flixcart.com/fk-p-flap/64/64/image/57fe1ffe54569c41.jpg?q=100' width={65} />
                        <Typography variant='body' >Travel</Typography>
                    </Stack>
                    <Stack alignItems='center' spacing={1}>
                        <img src='https://rukminim2.flixcart.com/fk-p-flap/64/64/image/25f400c36bc3487d.jpg?q=100' width={65} />
                        <Typography variant='body' >Grocery</Typography>
                    </Stack>

                </Stack>

            </Box>
        </>
    )
}