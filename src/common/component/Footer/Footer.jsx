import React from 'react';
import './Footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton } from '@mui/material';

export default function Footer() {
    return (
        <div className="footer">
            <div className="socialIcons1">
                <IconButton aria-label="facebook" className='iconButton'>
                    <FacebookOutlinedIcon />
                </IconButton>
                <IconButton aria-label="instagram" className='iconButton'>
                    <InstagramIcon />
                </IconButton>
                <IconButton aria-label="linkedin" className='iconButton'>
                    <LinkedInIcon />
                </IconButton>
                <IconButton aria-label="twitter" className='iconButton'>
                    <TwitterIcon />
                </IconButton>
            </div>
            <h4 className="footerText">Find your Needs</h4>
        </div>
    );
}