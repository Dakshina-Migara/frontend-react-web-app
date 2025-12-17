import React from 'react'
import './MyDetailFirst.css'
import ImgNav from '../../common/component/Imgnav/Imgnav'
import ProcessBar from '../../common/component/ProcessBar/ProcessBar'
import Footer from '../../common/component/Footer/Footer'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GenDropdown from '../../common/component/GenDropdown/GenDropdown'
import TextArea from '../../common/component/TextArea/TextArea'
import PersonIcon from '@mui/icons-material/Person';
import ButtonAll from '../../common/component/ButtonAll/ButtonAll'

export default function MyDetailFirst() {
    return (
        <div className='Mydetailfirst'>

            <ImgNav />

            <ProcessBar
                processText={'My Details'}
                backtap={() => console.log('halooooo')}
                processStep={1}
                processVal={33.33}
            />

            <Box sx={{
                maxWidth: 500,
                ml: '480px',
                mt: '50px',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 'bold' }}
                >
                    Let's get started by <br />telling a little bit about <br /> yourself
                </Typography>
            </Box>

            <TextArea textFieldText='First Name' placeholderText='' startIcon={<PersonIcon />} width='13%' />

            <GenDropdown marginleft='510px' />

            <TextArea textFieldText='Last Name' placeholderText='' startIcon={<PersonIcon />} width='19%' right='70px' />

            <TextArea textFieldText='My Date Of birth' placeholderText='' startIcon={<PersonIcon />} width='19%' right='70px' />

            <ButtonAll accountButton={() => console.log('clicked')} text='Next->' height='30px' left='665px' top='20px'/>

            <div className='footerNew1'>
                <Footer />
            </div>

        </div>
    )
}
