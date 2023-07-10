import { Box, Typography, Grid, Avatar } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ContactUs = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '50px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ textAlign: 'center', border: '2px solid #7C58D3', borderRadius: '15px', padding: '8px' }}>
                        <Avatar sx={{ width: '80px', height: '80px', backgroundColor: '#7C58D3', margin: '0 auto' }}>
                            <LocalPhoneIcon sx={{ fontSize: '2rem', color: '#FFFFFF' }} />
                        </Avatar>
                        <Typography sx={{ color: '#0B0417', paddingTop: '35px' }} variant="h6" gutterBottom>Phone</Typography>
                        <Typography sx={{ color: '#0B0417' }} variant="h6" gutterBottom>(913) 756-3126</Typography>
                        <Typography sx={{ color: '#0B0417' }} variant="h6" gutterBottom>(921) 557-1203</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ textAlign: 'center', border: '2px solid #7C58D3', borderRadius: '15px', padding: '8px' }}>
                        <Avatar sx={{ width: '80px', height: '80px', backgroundColor: '#EBE5F7', margin: '0 auto' }}>
                            <EmailIcon sx={{ fontSize: '2rem', color: '#7C58D3' }} />
                        </Avatar>
                        <Typography sx={{ color: '#0B0417', paddingTop: '35px' }} variant="h6" gutterBottom>Email</Typography>
                        <Typography sx={{ color: '#0B0417' }} variant="h6" gutterBottom>(913) 756-3126</Typography>
                        <Typography sx={{ color: '#0B0417' }} variant="h6" gutterBottom>(921) 557-1203</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ textAlign: 'center', border: '2px solid #7C58D3', borderRadius: '15px', padding: '8px' }}>
                        <Avatar sx={{ width: '80px', height: '80px', backgroundColor: '#EBE5F7', margin: '0 auto' }}>
                            <FmdGoodIcon sx={{ fontSize: '2rem', color: '#7C58D3' }} />
                        </Avatar>
                        <Typography sx={{ color: '#0B0417', paddingTop: '35px' }} variant="h6" gutterBottom>Good</Typography>
                        <Typography sx={{ color: '#0B0417' }} variant="h6" gutterBottom>(913) 756-3126</Typography>
                        <Typography sx={{ color: '#0B0417' }} variant="h6" gutterBottom>(921) 557-1203</Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Box sx={{ textAlign: 'center', border: '2px solid #7C58D3', borderRadius: '15px', padding: '8px' }}>
                        <Avatar sx={{ width: '80px', height: '80px', backgroundColor: '#EBE5F7', margin: '0 auto' }}>
                            <AccessTimeIcon sx={{ fontSize: '2rem', color: '#7C58D3' }} />
                        </Avatar>
                        <Typography sx={{ color: '#0B0417', paddingTop: '35px' }} variant="h6" gutterBottom>Time</Typography>
                        <Typography sx={{ color: '#0B0417' }} variant="h6" gutterBottom>(913) 756-3126</Typography>
                        <Typography sx={{ color: '#0B0417' }} variant="h6" gutterBottom>(921) 557-1203</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactUs;
