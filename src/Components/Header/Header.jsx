import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Header = () => {
  return (
    <Container
      sx={{
        margin: '30px auto',
        border: '2px solid black',
        maxWidth: '700px',
        backgroundColor: 'white',
      }}
    >
      <Typography
        variant='h1'
        sx={{
          textAlign: 'center',
          fontSize: 50,
          padding: 1.5,
          fontWeight: 0.5,
        }}
      >
        Hello š, Iām Tapply Bot š¤
      </Typography>
    </Container>
  );
};

export default Header;
