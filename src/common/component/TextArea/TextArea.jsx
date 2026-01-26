import './TextArea.css';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';

export default function TextArea({ placeholderText, textFieldText, startIcon, width, left, margintop, onChange, value }) {
    return (
        <div className="textarea-container">
            <form noValidate autoComplete="off">
                <FormControl sx={{ width: width, left: left, marginTop: margintop }}>
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
                        value={value}
                        onChange={onChange}
                        sx={{
                            borderRadius: '8px',
                            height: '35px'
                        }}
                    />
                </FormControl>
            </form>
        </div>
    );
}