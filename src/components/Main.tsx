import { Box, Typography } from '@mui/material';
import dogBg from './../../public/assets/imgs/dog.png';

const Main = () => {
    return (



        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100vh',
        }}>
            <Box sx={{ width: '40%' }}>
                <Box sx={{ marginY: "15px" }}>
                    <Typography sx={{ color: '#7C58D3' }} variant="h6" gutterBottom>We care for your pets</Typography>

                    <Typography variant="h3" gutterBottom>
                        We Help You Care
                        For Animals with
                        Nutrition
                    </Typography>

                    <p>All offers are subject to availability. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae.
                        Consectetur a erat nam at. Potenti nullam ac tortor vitae purus faucibus ornare.
                    </p>
                </Box>

                <Box sx={{ display: 'flex' }}>
                    <Box sx={{ marginRight: '20px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ marginRight: '10px', padding: '5px', border: '2px solid #EBE5F7', borderRadius: '8px' }}>
                                <img src="./../../public/assets/imgs/shipping-fast.png" height={'20px'} width={'20px'} alt="" />
                            </Box>
                            <Box>
                                <h3>Trust & Safety</h3>
                                <p>Velit euismod pellentes</p>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ marginRight: '10px', padding: '5px', border: '2px solid #EBE5F7', borderRadius: '8px' }}>
                                <img src="./../../public/assets/imgs/support.png" height={'20px'} width={'20px'} alt="" />
                            </Box>
                            <Box>
                                <h3>Support</h3>
                                <p>Egestas quis ipsum velit </p>
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ marginRight: '10px', padding: '5px', border: '2px solid #EBE5F7', borderRadius: '8px' }}>
                                <img src="./../../public/assets/imgs/discount.png" height={'20px'} width={'20px'} alt="" />
                            </Box>
                            <Box>
                                <h3>Discounts</h3>
                                <p>Bibendum ut tristique </p>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ marginRight: '10px', padding: '5px', border: '2px solid #EBE5F7', borderRadius: '8px' }}>
                                <img src="./../../public/assets/imgs/correct.png" height={'20px'} width={'20px'} alt="" />
                            </Box>
                            <Box>
                                <h3>Guarantee</h3>
                                <p>Convallis tellus id interdum</p>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box>
                <img height={'500px'} src={dogBg} />
            </Box>

        </Box>


    );
};

export default Main;