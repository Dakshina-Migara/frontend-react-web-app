import React, { useState, useEffect } from 'react';
import './MyDetailFirst.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ImgNav from '../../common/component/Imgnav/Imgnav';
import ProcessBar from '../../common/component/ProcessBar/ProcessBar';
import Footer from '../../common/component/Footer/Footer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GenDropdown from '../../common/component/GenDropdown/GenDropdown';
import TextArea from '../../common/component/TextArea/TextArea';
import PersonIcon from '@mui/icons-material/Person';
import ButtonAll from '../../common/component/ButtonAll/ButtonAll';
import { nextStep, saveData } from '../../redux/formSlice';

export default function MyDetailFirst() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formData = useSelector(state => state.form.data);

    const [firstName, setFirstName] = useState(formData.firstName || '');
    const [lastName, setLastName] = useState(formData.lastName || '');
    const [dob, setDob] = useState(formData.dob || '');
    const [genderData, setGenderData] = useState(formData.genderData || { title: '', gender: '' });
    const [age, setAge] = useState(formData.age || '');
    const [isValid, setIsValid] = useState(false);

    const calculateAge = (dobValue) => {
        if (!dobValue) return '';
        const birthDate = new Date(dobValue);
        const today = new Date();
        let userAge = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            userAge--;
        }
        return userAge;
    };

    useEffect(() => {
        setIsValid(
            firstName.trim() &&
            lastName.trim() &&
            dob.trim() &&
            age &&
            genderData.gender
        );
    }, [firstName, lastName, dob, age, genderData]);

    const handleNext = () => {
        if (!isValid) return;
        dispatch(saveData({ firstName, lastName, dob, age, genderData }));
        dispatch(nextStep());
        navigate('/fourthpage');
    };

    return (
        <div className='Mydetailfirst'>

            <ImgNav />

            <ProcessBar
                processText={'My Details'}
                backtap={() => console.log('back tapped')}
                processStep={1}
                processVal={33.33}
            />

            <Box className="mydetailfirst-header">
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Let's get started by <br />telling a little bit about <br /> yourself
                </Typography>
            </Box>

            <Box className="mydetailfirst-form">
                <Box className="mydetailfirst-form-row">
                    <Box sx={{
                        flex: { xs: '1 1 100%', sm: '1 1 45%', md: '0 0 70px', lg: '0 0 70px' },
                    }}>
                        <GenDropdown
                            value={genderData.title}
                            onChange={(data) => setGenderData(data)}
                        />
                    </Box>

                    <Box sx={{
                        flex: { xs: '1 1 100%', sm: '1 1 50%', md: '1', lg: '1' },
                        marginLeft: { xs: '0', sm: '0', md: '10px', lg: '10px' }
                    }}>
                        <TextArea
                            textFieldText="First Name"
                            startIcon={<PersonIcon />}
                            width="100%"
                            value={firstName}
                            onChange={(val) => setFirstName(val.target.value)}
                        />
                    </Box>
                </Box>

                <TextArea
                    textFieldText="Last Name"
                    startIcon={<PersonIcon />}
                    width="100%"
                    value={lastName}
                    onChange={(val) => setLastName(val.target.value)}
                />

                <TextArea
                    textFieldText="My date of birth"
                    startIcon={<PersonIcon />}
                    width="100%"
                    value={dob}
                    onChange={(val) => {
                        setDob(val.target.value);
                        setAge(calculateAge(val.target.value));
                    }}
                />
            </Box>

            <Box className="mydetailfirst-button">
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

            <Box className='footerNew1'>
                <Footer />
            </Box>
        </div>
    );
}
