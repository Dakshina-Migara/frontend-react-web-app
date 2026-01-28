import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
}

export default function ChildSlider({ onChange, value }) {
    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: { xs: 190, sm: 220, md: 280, lg: 320 },
                mx: 'auto',
                mt: 2,
                px: 1,
            }}
        >
            <Slider
                aria-label="ChildCount"
                value={value}
                onChange={onChange}
                getAriaValueText={valuetext}
                valueLabelDisplay="on"
                step={1}
                marks
                min={0}
                max={10}
                sx={{
                    color: '#FE5000',
                    '& .MuiSlider-markActive': {
                        bgcolor: '#FE5000',
                    },
                }}
            />
        </Box>
    );
}
