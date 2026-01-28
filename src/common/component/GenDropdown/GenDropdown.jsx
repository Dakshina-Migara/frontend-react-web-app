import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function GenDropdown({ value, onChange }) {
    const [title, setTitle] = React.useState(value || '');

    const handleChange = (event) => {
        const selectedTitle = event.target.value;
        setTitle(selectedTitle);

        const gender =
            selectedTitle === 'Mr' ? 'Male' :
            selectedTitle === 'Mrs' ? 'Female' : '';

        if (onChange) {
            onChange({ title: selectedTitle, gender: gender });
        }
    };

    return (
        <FormControl sx={{ width: '100%' }}>
            <Select
                value={title}
                onChange={handleChange}
                displayEmpty
                sx={{
                    marginTop: '47px',
                    borderRadius: '8px',
                    borderColor: '#969BAB',
                    border: '1px solid',
                    fontSize: '14px',
                    paddingLeft: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    height: {
                        xs: '35px',
                        sm: '35px',
                        md: '42px',
                        lg: '45px'
                    },
                    '& .MuiSelect-select': {
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%',
                        padding: '0 0 0 25px',
                    },
                    '& .MuiSelect-icon': {
                        left: '8px',        
                        right: 'auto',
                    }
                }}
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value="" disabled />
                <MenuItem value='Mr'>Mr.</MenuItem>
                <MenuItem value='Mrs'>Mrs.</MenuItem>
            </Select>
        </FormControl>
    );
}
