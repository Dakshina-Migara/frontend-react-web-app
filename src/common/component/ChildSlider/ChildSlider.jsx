import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
}
export default function ChildSlider({ onChange, value, marginleft, marginTop }) {
    return (
        <Box sx={{ width: 250, marginLeft: marginleft, marginTop: marginTop }}>
            <Slider
                aria-label="ChildCount"
                value={value}
                onChange={onChange}
                getAriaValueText={valuetext}
                valueLabelDisplay="on"
                shiftStep={10}
                step={1}
                marks
                min={0}
                max={10}
                sx={{
                    color: '#FE5000',
                    '& .MuiSlider-markActive': { bgcolor: '#FE5000' },
                }}
            />
        </Box>
    )
}
