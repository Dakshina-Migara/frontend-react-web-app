import React from 'react'
import './ButtonNav.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ButtonNav({ accountButton, text }) {
  return (
    <div>
      <Stack direction="row" spacing={2} className="buttonNav">
        <Button variant="outlined"
          onClick={accountButton}
          sx={{
            width: '100%',
            height: '50px',
            backgroundColor: 'transparent',
            border: '1px solid #FE5000',
            color: '#FE5000',
            borderRadius: '37px',
            textTransform: 'none',
            fontSize: '15px',
            fontWeight: 'bold',
          }}>
          {text}
        </Button>
      </Stack>
    </div>
  )
}
