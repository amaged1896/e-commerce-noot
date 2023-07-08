import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const Services = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ color: '#7C58D3' }} variant="h6" gutterBottom>OUR SERVICES</Typography>
            <Typography sx={{ color: '#0B0417' }} variant="h3" gutterBottom>All Pet Care Services</Typography>

            <Box sx={{ marginRight: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ marginRight: '10px', padding: '5px', border: '2px solid #EBE5F7', borderRadius: '8px' }}>
                        <img src="./../../src/public/assets/imgs/shipping-fast.png" height={'20px'} width={'20px'} alt="" />
                    </Box>
                    <Box>
                        <h3>Trust & Safety</h3>
                        <p>Velit euismod pellentes</p>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ marginRight: '10px', padding: '5px', border: '2px solid #EBE5F7', borderRadius: '8px' }}>
                        <img src="./../../src/public/assets/imgs/support.png" height={'20px'} width={'20px'} alt="" />
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
                        <img src="./../../src/public/assets/imgs/discount.png" height={'20px'} width={'20px'} alt="" />
                    </Box>
                    <Box>
                        <h3>Discounts</h3>
                        <p>Bibendum ut tristique </p>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ marginRight: '10px', padding: '5px', border: '2px solid #EBE5F7', borderRadius: '8px' }}>
                        <img src="./../../src/public/assets/imgs/correct.png" height={'20px'} width={'20px'} alt="" />
                    </Box>
                    <Box>
                        <h3>Guarantee</h3>
                        <p>Convallis tellus id interdum</p>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Services;