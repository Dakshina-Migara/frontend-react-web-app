import './MyGoals.css'
import ImgNav from '../../common/component/Imgnav/Imgnav'
import ProcessBar from '../../common/component/ProcessBar/ProcessBar'
import Footer from '../../common/component/Footer/Footer'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonAll from '../../common/component/ButtonAll/ButtonAll'

export default function MyGoals() {
    return (
        <div className='MyGoals'>



            <ImgNav />



            <ProcessBar
                processText={'My Goals'}
                backtap={() => console.log('halooooo')}
                processStep={3}
                processVal={100}
            />



            <Box sx={{
                maxWidth: 500,
                marginLeft: '100px',
                marginTop: '30px',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 'bold' }}
                >
                    What are your main goals <br /> in life?
                </Typography>
            </Box>



            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '10px',
                    marginLeft: '100px',
                    marginRight: '90px',
                }}
            >
                <Box sx={{ display: 'flex', gap: '10px' }}>
                    <ButtonAll
                        variant='outlined'
                        text='All goals'
                        height='35px'
                        backcolor='#E6E6E6'
                        borderColor='#E6E6E6'
                        width='105px'
                        textColor='black'
                    />

                    <ButtonAll
                        variant='disabled'
                        text='Goal Timeline'
                        height='35px'
                        backcolor='white'
                        borderColor='#E6E6E6'
                        width='140px'
                    />
                </Box>

                <ButtonAll
                    variant='outlined'
                    text='+ Add Goal'
                    height='35px'
                    backcolor='white'
                    borderColor='#FE5000'
                    width='140px'
                    textColor='#FE5000'
                />
            </Box>

            <div className="goalImageContainer">
                <img src="src/assets/Group 182.png" alt="first" className="goalImage" />
                <img src="src/assets/Group 1429.png" alt="second" className="goalImage" />
                <img src="src/assets/Group 1436.png" alt="third" className="goalImage" />
                <img src="src/assets/Group 1430.png" alt="fourth" className="goalImage" />
                <img src="src/assets/Group 1525.png" alt="fifth" className="goalImage" />
                <img src="src/assets/Group 1437.png" alt="six" className="goalImage" />
                <img src="src/assets/Group 1438.png" alt="seven" className="goalImage" />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', marginRight: '90px' , marginBottom:'80px'}}>
                <ButtonAll
                    variant='outlined'
                    text='Next->'
                    height='35px'
                    backcolor='#FE5000'
                    borderColor='#FE5000'
                    width='140px'
                    textColor='white'
                />
            </div>


            <div className='footerNew1'>
                <Footer />
            </div>

        </div>
    )
}
