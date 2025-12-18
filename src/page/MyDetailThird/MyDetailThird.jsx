import './MyDetailThird.css'
import ImgNav from '../../common/component/Imgnav/Imgnav'
import ProcessBar from '../../common/component/ProcessBar/ProcessBar'
import Footer from '../../common/component/Footer/Footer'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextArea from '../../common/component/TextArea/TextArea'
import ButtonAll from '../../common/component/ButtonAll/ButtonAll'
import ChildSlider from '../../common/component/ChildSlider/ChildSlider'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function MyDetailThird() {
    return (
        <div className='MyDetailThird'>

            <ImgNav />

            <ProcessBar
                processText={'My Details'}
                backtap={() => console.log('halooooo')}
                processStep={2}
                processVal={68}
            />

            <Typography variant="h6" gutterBottom sx={{ marginLeft: '520px', lineHeight: 1.6, marginTop: '20px' }}>
                My name is arjum <br />
            </Typography>

            <Typography
                variant="h6"
                sx={{ marginLeft: '480px'  }}
            >
                And I am male of 35 years old.
            </Typography>

             <Typography
                variant="h6"
                sx={{ marginLeft: '500px' , marginTop: '10px' }}
            >
              I am married to Dilu.
            </Typography>

            <Box sx={{
                maxWidth: 500,
                marginLeft: '450px',
                marginTop: '30px',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 'bold' }}
                >
                    I have (Kids)
                </Typography>
            </Box>

            <div className="pageContent">
                <ChildSlider marginleft='460px' marginTop='60px' />

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 1,
                        mt: 4
                    }}
                >
                    <TextArea textFieldText="My kid is" startIcon={<EmojiPeopleIcon />} />
                    <TextArea textFieldText="he/she is" width="120px" />
                </Box>
                
                <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
                    <ButtonAll
                        text="Next ->" 
                        accountButton={() => console.log('clicked')}
                    />
                </Box>
            </div>

            <div className='footerNew1'>
                <Footer />
            </div>

        </div>
    )
}
