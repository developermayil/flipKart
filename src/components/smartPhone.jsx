

import { Box, Stack, Typography, Paper, Grid } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function SmartPhone() {
    return (
        <Stack >
            <Stack flexDirection='row'>

                <Grid container rowSpacing={1}>
                    <Grid item xs={6} >
                        <Item alignItems='center' display='flex' justifyContent='center'>
                            <img src='https://rukminim1.flixcart.com/image/480/480/xif0q/t-shirt/r/z/l/s-gucci-tshirt-sti-original-imahyyzs4kpgbfby.jpeg?q=60' width={170} height={170} />
                            <Typography>Men's  T- Shirts</Typography>
                            <Typography variant='body1' component='h6' sx={{color:'red',fontWeight:'bold'}}>In Focus Now</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6} >
                        <Item alignItems='center' display='flex' justifyContent='center'>
                            <img src='https://rukminim1.flixcart.com/image/480/480/xif0q/mat/8/c/p/medium-knsl-07-brown-40x60cm-knsl-07-brown-40x60cm-maa-home-original-imagkgzzgbpxkmhv.jpeg?q=60' width={170} height={170} />
                            <Typography>Mat's</Typography>
                            <Typography variant='body1' component='h6' sx={{color:'red',fontWeight:'bold'}}>In Focus Now</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6} >
                        <Item alignItems='center' display='flex' justifyContent='center'>
                            <img src='https://rukminim1.flixcart.com/image/480/480/xif0q/pillow/l/0/q/15-g-4new-uiit107-4-g-4new-uit107-goga-original-imaguhgrc2yxf9sh.jpeg?q=60' width={170} height={170} />
                            <Typography>Billos</Typography>
                            <Typography variant='body1' component='h6' sx={{color:'red',fontWeight:'bold'}}>In Focus Now</Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6} >
                        <Item alignItems='center' display='flex' justifyContent='center'>
                            <img src='https://rukminim1.flixcart.com/image/480/480/xif0q/track-suit/f/f/l/xxl-teetrack-m7-by-metronaut-original-imaghkfbzj6neyvq.jpeg?q=60' width={170} height={170} />
                            <Typography>Men Track-Pants</Typography>
                            <Typography variant='body1' component='h6' sx={{color:'red',fontWeight:'bold'}}>In Focus Now</Typography>
                        </Item>
                    </Grid>
                </Grid>

                <Stack>
                    <img src='https://rukminim1.flixcart.com/www/1070/770/promos/26/09/2023/ed27f892-1bc6-462f-805b-953f5add4f6a.jpg?q=80' height={500} width={900} />
                </Stack>
            </Stack>

            <Box >
                <Stack
                    flexDirection='row'
                    sx={{ justifyContent: 'space-around', mb: 2, mt: 2 }}
                >
                    <div> <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/94fa53fdc3f45c10.jpg?q=20" width='420' /></div>
                    <div>  <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/1c7f8fc78f8e1cc3.jpg?q=20" width='420' /></div>
                    <div>   <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/98b609976c7d1dd2.jpg?q=20" width='420' /></div>
                </Stack>
            </Box>




            <Box >
                <Stack
                    flexDirection='row'
                    sx={{ justifyContent: 'space-around', mb: 2, mt: 2 }}
                >
                    <div> <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/1b0632a6ce94d7c1.jpg?q=20" width='420' /></div>
                    <div>  <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/1043417353034622.jpg?q=20" width='420' /></div>
                    <div>   <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/245cb3f1c6dd773c.jpg?q=20" width='420' /></div>
                </Stack>
            </Box>
            <Box >
                <Stack
                    flexDirection='row'
                    sx={{ justifyContent: 'space-around', mb: 2, mt: 2 }}
                >
                    <div> <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/0efa93171696deef.jpg?q=20" width='420' /></div>
                    <div>  <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/41e2582c4c88f8e7.jpeg?q=20" width='420' /></div>
                    <div>   <img src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/4d26f8f3ccfb4621.jpeg?q=20" width='420' /></div>
                </Stack>
            </Box>


        </Stack>
    )
}