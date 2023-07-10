import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const Specials = () => {
    return (
        <Box sx={{ flexGrow: 1, marginTop: "50px" }}>

            <Grid container spacing={2} >
                <Grid item xs={8} >
                    <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: "#FCDCB5", padding: "40px" }}>
                        <Box>
                            <Typography gutterBottom variant="h5" >Сheck Out Our Specials</Typography>
                            <Typography>Massa placerat duis ultricies lacus. Aliquet bibendum enim facilisis gravida neque convallis </Typography>
                            <Typography sx={{ marginTop: "20px" }}>Shop Now</Typography>
                        </Box>
                        <Box sx={{ position: "relative" }}>
                            <Box sx={{ position: "absolute", top: "20px", right: "20%" }}>
                                <Typography sx={{ backgroundColor: "#7C58D3", color: "#FFF", borderRadius: "10px", padding: "10px 20px" }} >Up to 40% Off</Typography>
                                {/* <Button >Contained</Button> */}
                            </Box>
                            <Box sx={{ marginTop: "50px" }}>
                                <img height={'300px'} width={'450px'} src="./../../public/assets/imgs/pet-accessories-still-life-concept-with-chew-ball.png" />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box>
                        <Typography>Luxury Fashion Collection</Typography>
                        <Typography>Shop Now</Typography>
                        <Box>
                            <img src="./../../public/assets/imgs/pet-dressed.png" alt="" />
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </Box>

    );
};

export default Specials;