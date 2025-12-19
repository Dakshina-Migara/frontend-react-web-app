import './HomePage.css'
import Imgnav from '../../common/component/Imgnav/Imgnav'
import ButtonNav from '../../common/component/ButtonNav/ButtonNav'
import Footer from '../../common/component/Footer/Footer'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonAll from '../../common/component/ButtonAll/ButtonAll';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { nextStep } from '../../redux/formSlice';

export default function HomePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGetStarted = () => {
        dispatch(nextStep());  
        navigate('/secondpage');
    }

    return (
        <div className='homepage-container'>
            <Imgnav />

            <ButtonNav
                text='Already have a account'
                accountButton={() => console.log('clicked')}
            />

            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    overflowX: 'hidden'
                }}
            >
                <Box sx={{
                    maxWidth: 500,
                    ml: '100px',
                    mt: '100px',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Typography
                        variant="h2"
                        gutterBottom
                        sx={{ fontWeight: 'bold' }}
                    >
                        Life Insurance Made Simple
                    </Typography>

                    <Typography variant="overline" gutterBottom sx={{ display: 'block', textTransform: 'none', }}>
                        Find your goals and plan your future
                    </Typography>

                    <ButtonAll
                        text='Get Started ->'
                        backcolor='#FE5000'
                        textColor='white'
                        accountButton={handleGetStarted}
                    />

                </Box>

                <Box sx={{
                    marginLeft: 'auto',
                    maxWidth: '50%'
                }}>
                    <img
                        src="src/assets/1st Image.png"
                        alt="community"
                        className="communityImage" />
                </Box>
            </Box>

            <div className='footerNew'>
                <Footer />
            </div>

        </div>
    )
}
