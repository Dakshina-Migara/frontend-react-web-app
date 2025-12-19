import * as React from 'react';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import BoyIcon from '@mui/icons-material/Boy';

const BoxSwitch = styled(Switch)(({ theme }) => ({
    width: '250px',
    height: '50px',
    padding: '5px',

    '& .MuiSwitch-switchBase': {
        margin: 3.5,
        padding: 0,
        borderRadius: 8,
        transform: 'translateX(0px)',
        '&.Mui-checked': {
            color: '#ffffffff',
            transform: 'translateX(125px)',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#FE5000',
                borderRadius: 10,
            },
            '&:not(.Mui-checked)': {
                transform: 'translateX(0px)',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: 'white',
        width: '125px',
        height: '42px',
        borderRadius: 10,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        },
    },
    '& .MuiSwitch-track': {
        borderRadius: 8,
        backgroundColor: '#FE5000',
        opacity: 1,
    },
}));

export default function StateSwitch({ left, checked, onChange }) {

    const handleChange = (event) => {
        if (onChange) onChange(event.target.checked);
    };


    return (
        <div style={{ position: 'relative', width: '250px', left: left }}>
            <Box sx={{ marginBottom: 0.5, marginLeft: 1 }}>
                <FormHelperText>Marital Status</FormHelperText>
            </Box>
            <BoxSwitch checked={checked} onChange={handleChange} />
            <span style={{
                position: 'absolute',
                left: 20,
                top: '50%',
                fontFamily: 'serif',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
            }}>
                <BoyIcon />Single</span>
            <span style={{
                position: 'absolute',
                right: 20,
                top: '50%',
                fontFamily: 'serif',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
            }}>
                <FamilyRestroomIcon />Married</span>
        </div>
    );
}
