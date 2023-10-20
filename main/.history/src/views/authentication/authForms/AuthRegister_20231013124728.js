import React from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';
import { Stack } from '@mui/system';
import axios from 'axios';

const AuthRegister = ({ title, subtitle, subtext }) => {
  const handleSubmit=()=>{
    axios.post('localhost:8080/owner/register',{
      
    })
  }
  
  (
  <>
    {title ? (
      <Typography fontWeight="700" variant="h3" mb={1}>
        {title}
      </Typography>
    ) : null}

    {subtext}
    

    <Box>
      <Stack mb={3}>
        <CustomFormLabel htmlFor="name">Username</CustomFormLabel>
        <TextField id="name" variant="outlined" fullWidth  />
        <CustomFormLabel htmlFor="email">Email Adddress</CustomFormLabel>
        <CustomTextField id="email" variant="outlined" fullWidth />
        <CustomFormLabel htmlFor='number'>Number</CustomFormLabel>
        <CustomTextField id='number' variant="outlined" fullWidth />
        <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
        <CustomTextField id="password" variant="outlined" fullWidth />
      </Stack>
      <Button
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        onClick={handleSubmit}
        component={Link}
        to="/owner/login"
      >
        Sign Up
      </Button>
    </Box>
    {subtitle}
  </>
)}

export default AuthRegister;