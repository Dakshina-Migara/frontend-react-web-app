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
                px: 2,
                py: 1,
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <Box sx={{ display: 'flex', gap: 1 }}>
                {[FacebookOutlinedIcon, InstagramIcon, LinkedInIcon, TwitterIcon].map(
                    (Icon, index) => (
                        <IconButton
                            key={index}
                            sx={{
                                backgroundColor: '#e6e8f0',
                                color: '#747070',
                                width: { xs: 32, sm: 28 },
                                height: { xs: 32, sm: 28 },
                            }}
                        >
                            <Icon fontSize="small" />
                        </IconButton>
                    )
                )}
            </Box>

            <Typography
                sx={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#747070',
                    textAlign: { xs: 'center', sm: 'right' },
                }}
            >
                Find your Needs
            </Typography>
        </Box>
    );
}
