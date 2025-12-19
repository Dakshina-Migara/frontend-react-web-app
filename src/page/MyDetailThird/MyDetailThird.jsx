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

export default function MyDetailThird({ userName, gender, age, spouseName, kids }) {
    return (
        <div className='MyDetailThird'>

            <ImgNav />



            <ProcessBar
                processText={'My Details'}
                backtap={() => console.log('halooooo')}
                processStep={2}
                processVal={68}
            />



            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 3, gap: '15px' }}>
                <Typography variant="h6">My name is {userName}</Typography>
                <Typography variant="h6">And I am {gender} of {age} years old.</Typography>
                <Typography variant="h6">I am married to {spouseName}</Typography>
            </Box>



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


                <Box sx={{ marginTop: 4, display: 'flex', justifyContent: 'center' }}>
                    <ChildSlider kids={kids} />
                </Box>



                <Box sx={{ marginTop: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
                    <TextArea textFieldText="My kid is" startIcon={<EmojiPeopleIcon />} />
                    <TextArea textFieldText="he/she is" width="120px" />
                </Box>


                <Box sx={{ marginTop: '50px', display: 'flex', justifyContent: 'center', marginBottom: '120px', marginLeft: '250px' }}>
                    <ButtonAll
                        text="Next ->"
                        accountButton={() => console.log('clicked')}
                        backcolor="#FE5000"
                        textColor="white"
                        width="100px"
                        height="40px"
                    />
                </Box>
            </div>

            <div className='footerNew1'>
                <Footer />
            </div>

        </div>
    )
}
