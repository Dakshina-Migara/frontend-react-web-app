import React from 'react';
import './MyDetailFirst.css'
import { useState, useEffect } from 'react';
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
    const [age, setAge] = React.useState(formData.age || '');


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
        dispatch(saveData({
            firstName,
            lastName,
            dob,
            age,
            genderData
        }));
        dispatch(nextStep());
        navigate('/fourthpage');
    };

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



            <Box sx={{ width: '250px', margin: '0px auto', marginRight: '390px' }}>
                <Box sx={{ display: 'flex', gap: '10px' }}>
                    <Box sx={{ width: '70px' }}>
                        <GenDropdown
                            value={genderData.title}
                            onChange={(data) => setGenderData(data)}
                        />

                    </Box>

                    <Box sx={{ width: '170px' }}>
                        <TextArea
                            textFieldText="First Name"
                            startIcon={<PersonIcon />}
                            width="100%"
                            value={firstName}
                            onChange={(val) => setFirstName(val.target.value)}
                        />
                    </Box>
                </Box>

                <Box sx={{ marginTop: '12px' }}>
                    <TextArea
                        textFieldText="Last Name"
                        startIcon={<PersonIcon />}
                        width="100%"
                        value={lastName}
                        onChange={(val) => setLastName(val.target.value)}
                    />
                </Box>

                <Box sx={{ marginTop: '12px' }}>
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
            </Box>



            <div style={{ marginBottom: '120px', marginTop: '20px' }}>
                <ButtonAll
                    accountButton={handleNext}
                    text='Next->'
                    height='40px'
                    left='665px'
                    top='20px'
                    textColor='white'
                    backcolor='#FE5000'
                    width='100px'
                    disabled={!isValid}
                />
            </div>



            <div className='footerNew1'>
                <Footer />
            </div>

        </div>
    )
}
