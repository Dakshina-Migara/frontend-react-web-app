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
import { useSelector, useDispatch } from 'react-redux';
import { saveData, nextStep } from '../../redux/formSlice';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MyDetailThird() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formData = useSelector((state) => state.form.data);

    const userName = `${formData.firstName || ''} ${formData.lastName || ''}`;
    const gender = formData.genderData?.gender || '';
    const age = formData.age || '';
    const spouseName = formData.spouseName || '';
    const isMarried = formData.isMarried || false;

    const [numKids, setNumKids] = useState(formData.kids?.length || 0);

    const [kids, setKids] = useState(formData.kids || []);

    useEffect(() => {
        if (kids.length < 10) {
            const newKids = [...kids];
            for (let i = newKids.length; i < 10; i++) {
                newKids.push({ name: '', age: '' });
            }
            setKids(newKids);
        }
    }, [kids]);

    const handleKidChange = (index, field, value) => {
        const newKids = [...kids];
        newKids[index] = { ...newKids[index], [field]: value };
        setKids(newKids);
    };

    const isValid = !isMarried
        ? true
        : kids
            .slice(0, numKids)
            .every(kid => kid.name && kid.age);

    const handleNext = () => {
        if (!isValid) return;

        dispatch(saveData({
            kids: isMarried ? kids.slice(0, numKids) : []
        }));

        dispatch(nextStep());
        navigate('/sixpage');
    };

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
                <Typography variant="h6">
                    {isMarried ? `I am married to ${spouseName}` : 'You are single.'}
                </Typography>
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
                    {isMarried ? 'I have (Kids)' : 'I am Single'}
                </Typography>
            </Box>

            {isMarried && (
                <div className="pageContent">
                    <Box sx={{ marginTop: 4, display: 'flex', justifyContent: 'center' }}>
                        <ChildSlider
                            value={numKids}
                            onChange={(event, value) => setNumKids(value)}
                        />
                    </Box>

                    {kids.slice(0, numKids).map((kid, index) => (
                        <Box key={index} sx={{ marginTop: 2, display: 'flex', gap: 2, justifyContent: 'center' }}>
                            <TextArea
                                textFieldText={`My kid ${index + 1} is`}
                                startIcon={<EmojiPeopleIcon />}
                                value={kid.name}
                                onChange={(val) => handleKidChange(index, 'name', val.target.value)}
                            />
                            <TextArea
                                textFieldText="Age"
                                width="120px"
                                value={kid.age}
                                onChange={(val) => handleKidChange(index, 'age', val.target.value)}
                            />
                        </Box>
                    ))}
                </div>
            )}

            
            <Box sx={{ marginTop: '50px', display: 'flex', justifyContent: 'center', marginBottom: '120px', marginLeft: '250px' }}>
                <ButtonAll
                    text="Next ->"
                    accountButton={handleNext}
                    backcolor="#FE5000"
                    textColor="white"
                    width="100px"
                    height="40px"
                    disabled={!isValid}
                />
            </Box>

            <div className='footerNew1'>
                <Footer />
            </div>
        </div>
    )
}