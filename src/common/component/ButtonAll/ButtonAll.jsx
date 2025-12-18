import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ButtonAll({ accountButton, textColor, text, width, height, left, top, backcolor, borderColor, variant }) {
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Button variant={variant}
                    onClick={accountButton}
                    sx={{
                        width: width,
                        height: height,
                        backgroundColor: backcolor,
                        border: '1px solid ',
                        borderColor: borderColor,
                        color: textColor,
                        borderRadius: '37px',
                        textTransform: 'none',
                        fontSize: '15px',
                        fontWeight: 'bold',
                        left: left,
                        top: top
                    }}>
                    {text}
                </Button>
            </Stack>
        </div>
    )
}
