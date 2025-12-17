import './MyDetailSecond.css'
import ImgNav from '../../common/component/Imgnav/Imgnav'
import ProcessBar from '../../common/component/ProcessBar/ProcessBar'
import Footer from '../../common/component/Footer/Footer'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextArea from '../../common/component/TextArea/TextArea'
import ButtonAll from '../../common/component/ButtonAll/ButtonAll'
import StateSwitch from '../../common/component/StateSwitch/StateSwitch'
import GirlIcon from '@mui/icons-material/Girl';

export default function MyDetailSecond() {
    return (
        <div className='MydetailSecond'>

            <ImgNav />

            <ProcessBar
                processText={'My Details'}
                backtap={() => console.log('halooooo')}
                processStep={1}
                processVal={33.33}
            />

            <Typography variant="h6" gutterBottom sx={{ marginLeft: '520px', lineHeight: 1.8 , marginTop:'20px' }}>
                My name is arjum <br />

            </Typography>
            <Typography
                variant="h6"
                sx={{ marginLeft: '480px' }}
            >
                And I am male of 35 years old.
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
                    Are you married?
                </Typography>
            </Box>

            <StateSwitch left='500px' />

            <TextArea textFieldText='My wife is' placeholderText='' startIcon={<GirlIcon />} width='21%' right='90px' />

            <ButtonAll accountButton={() => console.log('clicked')} text='Next->' height='30px' left='665px' top='40px' />

            <div className='footerNew1'>
                <Footer />
            </div>

        </div>
    )
}
