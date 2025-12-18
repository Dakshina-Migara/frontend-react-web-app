import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';

export default function TextArea({ placeholderText, textFieldText, startIcon , width , right }) {
    return (
        <form noValidate autoComplete="off">
            <FormControl sx={{ width: width, marginLeft:'590px', marginTop:'2px', right:right }}>
                <Box sx={{ marginBottom: 0.5 }}>
                    <FormHelperText>{textFieldText}</FormHelperText>
                </Box>
                <OutlinedInput
                    placeholder={placeholderText}
                    multiline
                    minRows={1}
                    startAdornment={
                        <InputAdornment position="start">
                            {startIcon}
                        </InputAdornment>
                    }
                    sx={{
                        borderRadius: '8px',
                        borderColor: '#969BAB',
                        border: '1px solid',
                        height: '35px'
                    }}
                />
            </FormControl>
        </form>
    );
}