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
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { saveData, nextStep } from '../../redux/formSlice';
import { useNavigate } from 'react-router-dom';


export default function MyDetailSecond() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formData = useSelector((state) => state.form.data);
    const userName = `${formData.firstName || ''} ${formData.lastName || ''}`;
    const gender = formData.genderData?.gender || '';
    const age = formData.age || '';
    const [isMarried, setIsMarried] = useState(formData.isMarried || false);
    const [spouseName, setSpouseName] = useState(formData.spouseName || '');
    const [isValid, setIsValid] = useState(false);


    useEffect(() => {
        setIsValid(isMarried ? spouseName.trim() !== '' : true);
    }, [isMarried, spouseName]);




    const handleNext = () => {
        if (!isValid) return;

        dispatch(saveData({
            isMarried,
            spouseName: isMarried ? spouseName : ''
        }));

        dispatch(nextStep());
        navigate('/fifthpage');
    };



    return (
        <div className='MydetailSecond'>


            <ImgNav />



            <ProcessBar
                processText={'My Details'}
                backtap={() => console.log('halooooo')}
                processStep={1}
                processVal={33.33}
            />




            <Typography variant="h6" gutterBottom sx={{ marginLeft: '520px', lineHeight: 1.8, marginTop: '20px' }}>
                My name is {userName}

            </Typography>




            <Typography
                variant="h6"
                sx={{ marginLeft: '480px' }}
            >
                And I am {gender} of {age} years old.
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




            <Box style={{ width: '500px', gap: '20px', marginTop: '20px', marginBottom: '140px' }}>
                <StateSwitch
                    left='500px'
                    checked={isMarried}
                    onChange={(val) => setIsMarried(val)}
                />
                {isMarried && (
                    <TextArea
                        textFieldText='My wife is'
                        placeholderText=''
                        startIcon={<GirlIcon />}
                        width='50%'
                        left='500px'
                        margintop='20px'
                        value={spouseName}
                        onChange={(val) => setSpouseName(val.target.value)}
                    />
                )}

                <ButtonAll
                    accountButton={handleNext}
                    text='Next->'
                    height='40px'
                    width='100px'
                    left='655px'
                    top='50px'
                    textColor='white'
                    backcolor='#FE5000'
                    disabled={!isValid}
                />
            </Box>




            <Box className='footerNew1'>
                <Footer />
            </Box>
        </div>
    )
}
