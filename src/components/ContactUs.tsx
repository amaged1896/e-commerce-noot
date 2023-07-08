import { Box, Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import React from 'react';

const ContactUs = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '50px' }}>
            <Box sx={{ textAlign: 'center', border: '2px solid #7C58D3', position: 'relative', padding: "8px", borderRadius: '15px' }}>
                <Typography sx={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)' }}><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="40" fill="#7C58D3" />
                    <LocalPhoneIcon sx={{ color: '#FFFFFF' }} />
                </svg></Typography>
                <Typography sx={{ color: '#0B0417', paddingTop: '35px', paddingX: '95px' }} variant="h6" gutterBottom>Phone</Typography>

                <Typography sx={{ color: '#0B0417' }} variant="h6" gutterBottom>(913) 756-3126</Typography>
                <Typography sx={{ color: '#0B0417' }} variant="h6" gutterBottom>(921) 557-1203</Typography>
            </Box>
            <Box sx={{ textAlign: 'center', border: '2px solid #7C58D3', position: 'relative', padding: "8px", borderRadius: '15px' }}>
                <Typography sx={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)' }}><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="40" fill="#EBE5F7" />
                    <EmailIcon sx={{ color: '#7C58D3' }} />
                </svg></Typography>
                <Typography sx={{ color: '#0B0417', paddingTop: '35px', paddingX: '95px' }} variant="h6" gutterBottom>Phone</Typography>

                <Typography sx={{ color: '#0B0417' }} variant="h6" gutterBottom>(913) 756-3126</Typography>
                <Typography sx={{ color: '#0B0417' }} variant="h6" gutterBottom>(921) 557-1203</Typography>
            </Box>
            <Box sx={{ textAlign: 'center', border: '2px solid #7C58D3', position: 'relative', padding: "8px", borderRadius: '15px' }}>
                <Typography sx={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)' }}><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="40" fill="#EBE5F7" />
                    <FmdGoodIcon sx={{ color: '#7C58D3' }} />
                </svg></Typography>
                <Typography sx={{ color: '#0B0417', paddingTop: '35px', paddingX: '95px' }} variant="h6" gutterBottom>Phone</Typography>

                <Typography sx={{ color: '#0B0417' }} variant="h6" gutterBottom>(913) 756-3126</Typography>
                <Typography sx={{ color: '#0B0417' }} variant="h6" gutterBottom>(921) 557-1203</Typography>
            </Box>
            <Box sx={{ textAlign: 'center', border: '2px solid #7C58D3', position: 'relative', padding: "8px", borderRadius: '15px' }}>
                <Typography sx={{ position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)' }}><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="40" fill="#EBE5F7" />
                    <AccessTimeIcon fontSize='small' sx={{ color: '#09c', fontSize: 'small' }} />
                </svg></Typography>
                <Typography sx={{ color: '#0B0417', paddingTop: '35px', paddingX: '95px' }} variant="h6" gutterBottom>Phone</Typography>

                <Typography sx={{ color: '#0B0417' }} variant="h6" gutterBottom>(913) 756-3126</Typography>
                <Typography sx={{ color: '#0B0417' }} variant="h6" gutterBottom>(921) 557-1203</Typography>
            </Box>
        </Box>
    );
};

export default ContactUs;