import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "@/pages/style/style.css"
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Box, Stack, Typography, Paper ,Button} from '@mui/material';


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

export default function ProductSlider2() {
    const addToCart = () => {
        console.log('add to cart')
    }

    return (



        <Carousel responsive={responsive} >

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid pink', paddingTop: '15px' }}>
            <img src='https://rukminim1.flixcart.com/image/420/420/l0sgyvk0/headphone/e/w/c/buds-z2-oneplus-original-imagcg5gfpcg5ndv.jpeg?q=60' width={150} height={210} />
            <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', padding: '10px' }}>
                <Stack>
                    <Typography variant='body' component='h3' color='red'>Bluetooth Headphone</Typography>
                    <Typography variant='body1'>From ₹999</Typography>
                </Stack>
                <Button onClick={addToCart}><ShoppingCartTwoToneIcon className='cartIcon' /></Button>


            </Stack>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid pink', paddingTop: '15px' }}>

        <img src='https://rukminim1.flixcart.com/fk-p-flap/420/420/image/02eba4d97ecc5ef8.jpg?q=60' width={150} height={210} />
            <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', padding: '10px' }}>
                <Stack>
                    <Typography variant='body' component='h3' color='red'>Callin Smart Watch</Typography>
                    <Typography>From ₹799</Typography>
                </Stack>
                <Button onClick={addToCart}><ShoppingCartTwoToneIcon className='cartIcon' /></Button>

            </Stack>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid pink', paddingTop: '15px' }}>

        <img src='https://rukminim1.flixcart.com/image/420/420/kfbfr0w0/gamingconsole/b/n/a/rrs-00022-512-xbox-yes-original-imafvsyhpuuspgba.jpeg?q=60' width={150} height={210} />
            <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', padding: '10px' }}>
                <Stack>
                    <Typography variant='body' component='h3' color='red'>Play Station  </Typography>
                    <Typography>From ₹14,999</Typography>
                </Stack>
                <Button onClick={addToCart}><ShoppingCartTwoToneIcon className='cartIcon' /></Button>

            </Stack>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid pink', paddingTop: '15px' }}>

        <img src='https://rukminim1.flixcart.com/image/420/420/kgqvlow0/battery-charger/d/a/7/apple-mhjd3hn-a-original-imafwwwfg5xgcctm.jpeg?q=60' height={210} width={150} />
            <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', padding: '10px' }}>
                <Stack>
                    <Typography variant='body' component='h3' color='red'>Mobile Charger</Typography>
                    <Typography>From ₹299</Typography>
                </Stack>
                <Button onClick={addToCart}><ShoppingCartTwoToneIcon className='cartIcon' /></Button>

            </Stack>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid pink', paddingTop: '15px' }}>

        <img src='https://rukminim2.flixcart.com/image/210/210/xif0q/mobile/d/h/q/m6-pro-5g-mzb0eprin-poco-original-imags3e7vewsafst.jpeg?q=80' width={150} height={210} />
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

            <img src='https://rukminim1.flixcart.com/image/420/420/xif0q/smart-lighting/w/k/f/12-ns1210-led-wipro-original-imagu5z6f7tzvzsu.jpeg?q=60' width={150} height={210} />
            <Stack sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', padding: '10px' }}>
                <Stack>
                    <Typography variant='body' component='h3' color='red'>Wipro Bulp</Typography>
                    <Typography>Just ₹199</Typography>
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