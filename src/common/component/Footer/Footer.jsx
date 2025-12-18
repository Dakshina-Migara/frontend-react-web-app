import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                width: '100%',
                paddingTop: '8px',
                paddingBottom: '8px',
                paddingLeft: '16px',
                paddingRight: '16px',
                backgroundColor: '#ffffffff',
                display: 'flex',
                flexDirection: 'row',   
                alignItems: 'center',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
                flexWrap: 'wrap',      
            }}
        >
            <Box sx={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <IconButton sx={{ backgroundColor: '#e6e8f0', color: '#747070', width: '28px', height: '28px' }}>
                    <FacebookOutlinedIcon />
                </IconButton>
                <IconButton sx={{ backgroundColor: '#e6e8f0', color: '#747070', width: '28px', height: '28px' }}>
                    <InstagramIcon />
                </IconButton>
                <IconButton sx={{ backgroundColor: '#e6e8f0', color: '#747070', width: '28px', height: '28px'}}>
                    <LinkedInIcon />
                </IconButton>
                <IconButton sx={{ backgroundColor: '#e6e8f0', color: '#747070',width: '28px', height: '28px'}}>
                    <TwitterIcon />
                </IconButton>
            </Box>

            <Typography
                sx={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#747070',
                    textAlign: 'right',
                    marginTop: '0px',      
                }}
            >
                Find your Needs
            </Typography>
        </Box>
    );
}
