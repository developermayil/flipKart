import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "@/pages/style/style.css"
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Box, Stack, Typography, Paper, Button } from '@mui/material';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

export default function ProductSlider() {

    const addToCart = () => {
        console.log('add to cart')
    }

    return (

        <Carousel responsive={responsive} >

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid pink', paddingTop: '15px' }}>
                <img src='https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=80' width={150} height={210} />
                <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', padding: '10px' }}>
                    <Stack>
                        <Typography variant='body' component='h3' color='red'>I Phone 15</Typography>
                        <Typography variant='body1'>Just ₹64,999</Typography>
                    </Stack>
                    <Button onClick={addToCart}><ShoppingCartTwoToneIcon className='cartIcon' /></Button>


                </Stack>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid pink', paddingTop: '15px' }}>

                <img src='https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=80' width={150} height={210} />
                <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', padding: '10px' }}>
                    <Stack>
                        <Typography variant='body' component='h3' color='red'>Moto g</Typography>
                        <Typography>Just ₹54,999</Typography>
                    </Stack>
                    <Button onClick={addToCart}><ShoppingCartTwoToneIcon className='cartIcon' /></Button>

                </Stack>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid pink', paddingTop: '15px' }}>

                <img src='https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/m/c/s/-original-imagztn7sycc4h84.jpeg?q=80' width={150} height={210} />
                <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', padding: '10px' }}>
                    <Stack>
                        <Typography variant='body' component='h3' color='red'>Samsung </Typography>
                        <Typography>Just ₹84,999</Typography>
                    </Stack>
                    <Button onClick={addToCart}><ShoppingCartTwoToneIcon className='cartIcon' /></Button>

                </Stack>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid pink', paddingTop: '15px' }}>

                <img src='https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=80' height={210} width={150} />
                <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', padding: '10px' }}>
                    <Stack>
                        <Typography variant='body' component='h3' color='red'>Poco X3 </Typography>
                        <Typography>Just ₹38,999</Typography>
                    </Stack>
                    <Button onClick={addToCart}><ShoppingCartTwoToneIcon className='cartIcon' /></Button>

                </Stack>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid pink', paddingTop: '15px' }}>

                <img src='https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/g/0/h/-original-imahfqws9yjuv4vv.jpeg?q=80' width={150} height={210} />
                <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', padding: '10px' }}>
                    <Stack>
                        <Typography variant='body' component='h3' color='red'>Oppo F27</Typography>
                        <Typography>Just ₹44,999</Typography>
                    </Stack>
                    <Button onClick={addToCart}><ShoppingCartTwoToneIcon className='cartIcon' /></Button>

                </Stack>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid pink', paddingTop: '15px' }}>

                <img src='https://rukminim1.flixcart.com/image/420/420/xif0q/mobile/k/g/j/t3x-5g-v2338-vivo-original-imahyyzaqhgwzfup.jpeg?q=60' width={150} height={210} />
                <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', padding: '10px' }}>
                    <Stack>
                        <Typography variant='body' component='h3' color='red'>Vivo T3x</Typography>
                        <Typography>Just ₹14,999</Typography>
                    </Stack>
                    <Button onClick={addToCart}><ShoppingCartTwoToneIcon className='cartIcon' /></Button>

                </Stack>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid pink', paddingTop: '15px' }}>

                <img src='https://rukminim1.flixcart.com/image/420/420/xif0q/mobile/k/g/j/t3x-5g-v2338-vivo-original-imahyyzaqhgwzfup.jpeg?q=60' width={150} height={210} />
                <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', padding: '10px' }}>
                    <Stack>
                        <Typography variant='body' component='h3' color='red'>Vivo T3x</Typography>
                        <Typography>Just ₹14,999</Typography>
                    </Stack>
                    <Button onClick={addToCart}><ShoppingCartTwoToneIcon className='cartIcon' /></Button>

                </Stack>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid pink', paddingTop: '15px' }}>

                <img src='https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/m/c/s/-original-imagztn7sycc4h84.jpeg?q=80' width={150} height={210} />
                <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', padding: '10px' }}>
                    <Stack>
                        <Typography variant='body' component='h3' color='red'>Samsung</Typography>
                        <Typography>Just ₹84,999</Typography>
                    </Stack>
                    <Button onClick={addToCart}><ShoppingCartTwoToneIcon className='cartIcon' /></Button>

                </Stack>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid pink', paddingTop: '15px' }}>

                <img src='https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=80' height={210} width={150} />
                <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', padding: '10px' }}>
                    <Stack>
                        <Typography variant='body' component='h3' color='red'>Poco X3 </Typography>
                        <Typography>Just ₹38,999</Typography>
                    </Stack>
                    <Button onClick={addToCart}><ShoppingCartTwoToneIcon className='cartIcon' /></Button>

                </Stack>
            </div>
        </Carousel>


    )
}