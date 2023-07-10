import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  WhatsApp as WhatsAppIcon,
  LocalPhone as LocalPhoneIcon,
  Email as EmailIcon
} from '@mui/icons-material';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#9C5BF5' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: { xs: 1, sm: 2 } }} // Adjust the spacing based on screen size
          />

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <FacebookIcon sx={{ mx: 0.5 }} />
            <InstagramIcon sx={{ mx: 0.5 }} />
            <TwitterIcon sx={{ mx: 0.5 }} />
            <WhatsAppIcon sx={{ mx: 0.5 }} />
          </Box>

          <Box display="flex" alignItems="center" sx={{ marginRight: { xs: 1, sm: 2 } }}>
            <LocalPhoneIcon sx={{ marginRight: '0.5rem' }} />
            <Typography variant="h6" component="div">
              0000 - 123456789
            </Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <EmailIcon sx={{ marginRight: '0.5rem' }} />
            <Typography variant="h6" component="div">
              info@example.com
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
