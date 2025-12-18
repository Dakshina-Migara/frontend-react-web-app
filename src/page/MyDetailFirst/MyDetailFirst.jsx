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



            <Box sx={{ width: '250px', margin: '0px auto', marginRight:'390px' }}>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                    <Box sx={{ width: '70px' }}>
                        <GenDropdown />
                    </Box>

                    <Box sx={{ width:'170px' }}>
                        <TextArea
                            textFieldText="First Name"
                            startIcon={<PersonIcon />}
                            width="100%"
                        />
                    </Box>
                </Box>

                <Box sx={{ marginTop: '12px'}}>
                    <TextArea
                        textFieldText="Last Name"
                        startIcon={<PersonIcon />}
                        width="100%"
                    />
                </Box>

                <Box sx={{ marginTop: '12px' }}>
                    <TextArea
                        textFieldText="My date of birth"
                        startIcon={<PersonIcon />}
                        width="100%"
                    />
                </Box>
            </Box>



            <div style={{ marginBottom: '120px' , marginTop:'20px' }}>
                <ButtonAll
                    accountButton={() => console.log('clicked')}
                    text='Next->'
                    height='40px'
                    left='665px'
                    top='20px'
                    textColor='white'
                    backcolor='#FE5000'
                    width='100px'
                />
            </div>



            <div className='footerNew1'>
                <Footer />
            </div>

        </div>
    )
}
