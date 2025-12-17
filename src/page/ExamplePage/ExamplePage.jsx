import './ExamplePage.css'
import Imgnav from '../../common/component/Imgnav/Imgnav'
import ButtonNav from '../../common/component/ButtonNav/ButtonNav'
import Footer from '../../common/component/Footer/Footer'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonAll from '../../common/component/ButtonAll/ButtonAll';

export default function ExamplePage() {
    return (
        <div className='example-container'>
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
                        accountButton={() => console.log('clicked')}
                    />

                </Box>

                <Box sx={{
                    marginLeft: 'auto',
                    maxWidth: '50%'
                }}>
                    <img
                        src="src\assets\2nd Image.png"
                        alt="sample"
                        className="sampleImage" />
                </Box>
            </Box>

            <div className='footerNew'>
                <Footer />
            </div>

        </div>
    )
}

