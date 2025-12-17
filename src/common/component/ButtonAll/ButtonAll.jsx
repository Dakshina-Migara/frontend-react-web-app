import './ButtonAll.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ButtonAll({ accountButton, text , height , left , top}) {
    return (
        <div>
            <Stack direction="row" spacing={2} className="buttonall">
                <Button variant="outlined"
                    onClick={accountButton}
                    sx={{
                        width: '100%',
                        height: height,
                        backgroundColor: '#FE5000',
                        border: '1px solid #FE5000',
                        color: '#ffffffff',
                        borderRadius: '37px',
                        textTransform: 'none',
                        fontSize: '15px',
                        fontWeight: 'bold',
                        left:left,
                        top:top
                    }}>
                    {text}
                </Button>
            </Stack>
        </div>
    )
}
