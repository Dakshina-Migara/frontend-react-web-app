import * as React from 'react';
import './ProcessBar.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function ProcessBar({ backtap, processVal, processStep, processText }) {
    return (
        <div className='processField'>
            <IconButton aria-label="arrow" onClick={backtap}>
                <ArrowBackIcon />
            </IconButton>

            <Typography
                variant="caption"
                sx={{
                    fontWeight: 'bold',
                    flexGrow: 1,
                    textAlign: 'center',
                    display: 'block',
                    fontSize: '12px'
                }}
            >
                {processText}
            </Typography>

            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress sx={{ color: '#FE5000' }} enableTrackSlot variant="determinate" value={processVal} thickness={8} size={47} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        variant="caption"
                        component="div"
                        sx={{ fontWeight: 'bold', color: 'text.primary', fontSize: '0.50rem', textAlign: 'center' }}
                    >
                        Step<br></br> {processStep} of 3
                    </Typography>
                </Box>
            </Box>
        </div>
    );
}
