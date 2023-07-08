import { Box, Container, Rating, Typography } from '@mui/material';
import React, { useState } from 'react';

const Rate = () => {
    const [value, setValue] = React.useState<number | null>(2);
    return (
        <Box sx={{ marginTop: "50px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

            <Box sx={{ marginRight: '20px' }}>
                <Typography sx={{ color: '#0B0417' }} variant="h5" gutterBottom>Featured Products</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ marginRight: '10px', padding: '5px' }}>
                        <img src="./../../public/assets/imgs/dog1.png" height={'75px'} width={'150px'} alt="" />
                    </Box>
                    <Box>
                        <h3>Trust & Safety</h3>
                        <p>Velit euismod pellentes</p>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <Typography sx={{ color: '#7C58D3' }} component="legend">$30.12</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ marginRight: '10px', padding: '5px' }}>
                        <img src="./../../public/assets/imgs/dog2.png" height={'75px'} width={'150px'} alt="" />
                    </Box>
                    <Box>
                        <h3>Support</h3>
                        <p>Egestas quis ipsum velit </p>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <Typography sx={{ color: '#7C58D3' }} component="legend">$30.12</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ marginRight: '10px', padding: '5px' }}>
                        <img src="./../../public/assets/imgs/dog3.png" height={'75px'} width={'150px'} alt="" />
                    </Box>
                    <Box>
                        <h3>Support</h3>
                        <p>Egestas quis ipsum velit </p>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <Typography sx={{ color: '#7C58D3' }} component="legend">$30.12</Typography>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ marginRight: '20px' }}>
                <Typography sx={{ color: '#0B0417' }} variant="h5" gutterBottom>On Sale Products</Typography>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ marginRight: '10px', padding: '5px' }}>
                        <img src="./../../public/assets/imgs/dog4.png" height={'75px'} width={'150px'} alt="" />
                    </Box>
                    <Box>
                        <h3>Trust & Safety</h3>
                        <p>Velit euismod pellentes</p>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <Typography sx={{ color: '#7C58D3' }} component="legend">$30.12</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ marginRight: '10px', padding: '5px' }}>
                        <img src="./../../public/assets/imgs/dog5.png" height={'75px'} width={'150px'} alt="" />
                    </Box>
                    <Box>
                        <h3>Support</h3>
                        <p>Egestas quis ipsum velit </p>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <Typography sx={{ color: '#7C58D3' }} component="legend">$30.12</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ marginRight: '10px', padding: '5px' }}>
                        <img src="./../../public/assets/imgs/dog6.png" height={'75px'} width={'150px'} alt="" />
                    </Box>
                    <Box>
                        <h3>Support</h3>
                        <p>Egestas quis ipsum velit </p>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <Typography sx={{ color: '#7C58D3' }} component="legend">$30.12</Typography>
                    </Box>
                </Box>
            </Box>

            <Box>
                <Typography sx={{ color: '#0B0417' }} variant="h5" gutterBottom>Top Rated Products</Typography>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ marginRight: '10px', padding: '5px' }}>
                        <img src="./../../public/assets/imgs/dog7.png" height={'75px'} width={'150px'} alt="" />
                    </Box>
                    <Box>
                        <h3>Discounts</h3>
                        <p>Bibendum ut tristique </p>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <Typography sx={{ color: '#7C58D3' }} component="legend">$30.12</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ marginRight: '10px', padding: '5px' }}>
                        <img src="./../../public/assets/imgs/dog8.png" height={'75px'} width={'150px'} alt="" />
                    </Box>
                    <Box>
                        <h3>Discounts</h3>
                        <p>Bibendum ut tristique </p>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <Typography sx={{ color: '#7C58D3' }} component="legend">$30.12</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ marginRight: '10px', padding: '5px' }}>
                        <img src="./../../public/assets/imgs/dog9.png" height={'75px'} width={'150px'} alt="" />
                    </Box>
                    <Box>
                        <h3>Guarantee</h3>
                        <p>Convallis tellus id interdum</p>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <Typography sx={{ color: '#7C58D3' }} component="legend">$30.12</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Rate;