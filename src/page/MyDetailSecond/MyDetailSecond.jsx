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
                backtap={() => console.log('back tapped')}
                processStep={1}
                processVal={33.33}
            />

            <Box className="mydetailsecond-header">
                <Typography variant="h6" gutterBottom>
                    My name is <span style={{ color: '#FE5000' }}>{userName}</span>
                </Typography>
                <Typography variant="h6">
                    And I am <span style={{ color: '#FE5000' }}>{gender}</span> of <span style={{ color: '#FE5000' }}>{age} years old.</span>
                </Typography>
            </Box>

            <Box className="mydetailsecond-question">
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Are you married?
                </Typography>
            </Box>

            <Box className="mydetailsecond-form">
                <StateSwitch
                    checked={isMarried}
                    onChange={(val) => setIsMarried(val)}
                />

                {isMarried && (
                    <Box className="mydetailsecond-spouse">
                        <TextArea
                            textFieldText='My wife is'
                            placeholderText=''
                            startIcon={<GirlIcon />}
                            width='100%'
                            value={spouseName}
                            onChange={(val) => setSpouseName(val.target.value)}
                        />
                    </Box>
                )}

                <Box className="mydetailsecond-button">
                    <ButtonAll
                        accountButton={handleNext}
                        text='Next ->'
                        height='40px'
                        width='120px'
                        textColor='white'
                        backcolor='#FE5000'
                        disabled={!isValid}
                    />
                </Box>
            </Box>

            <Box className='footerNew1'>
                <Footer />
            </Box>
        </div>
    )
}
