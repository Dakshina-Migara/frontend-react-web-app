import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function GenDropdown({ onChange , marginleft  }) {
    const [title, setTitle] = React.useState('');

    const handleChange = (event) => {
        const selectedTitle = event.target.value;
        setTitle(selectedTitle);

        const gender =
            selectedTitle === 'Mr' ? 'Male' :
                selectedTitle === 'Mrs' ? 'Female' :
                    '';

        if (onChange) {
            onChange({
                title: selectedTitle,
                gender: gender,
            });
        }
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 62 , position:'absolute', top:'268px',  }}>
                <Select
                
                    onChange={handleChange}
                    displayEmpty
                    sx={{
                        borderRadius: '8px',
                        borderColor: '#969BAB',
                        border: '1px solid',
                        height: '35px',
                        paddingLeft: '14px',
                        '& .MuiSelect-icon': {
                            left: '3px',
                        },
                        marginLeft:marginleft,
                        width:'61px'

                    }}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="" disabled >

                    </MenuItem>
                    <MenuItem value='Mr'>Mr. </MenuItem>
                    <MenuItem value='Mrs'>Mrs. </MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}
