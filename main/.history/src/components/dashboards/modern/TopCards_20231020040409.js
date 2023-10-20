import React from 'react';
import { Box, CardContent, Grid, Typography } from '@mui/material';

import icon1 from '../../../assets/images/svgs/icon-connect.svg';
import icon2 from '../../../assets/images/svgs/icon-user-male.svg';


const TopCards = () => {
  return (
    <Grid container spacing={3} mt={3}>
      <Grid item xs={12} sm={4} lg={3}>
        <Box bgcolor={'primary.light'} textAlign="center">
          <CardContent>
            <img src={icon1} width="50" />
            <Typography color={'primary.main'} mt={1} variant="subtitle1" fontWeight={600}>
              Total Rooms
            </Typography>
            <Typography color={'primary.main'} variant="h4" fontWeight={600}>
              7
            </Typography>
          </CardContent>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} lg={3}>
        <Box bgcolor={'error.light'} textAlign="center">
          <CardContent>
            <img src={icon2} width="50" />
            <Typography color={'error.main'} mt={1} variant="subtitle1" fontWeight={600}>
              Available Room
            </Typography>
            <Typography color={'error.main'} variant="h4" fontWeight={600}>
              5
            </Typography>
          </CardContent>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} lg={3}>
        <Box bgcolor={'primary.light'} textAlign="center">
          <CardContent>
            <img src={icon2} width="50" />
            <Typography color={'primary.main'} mt={1} variant="subtitle1" fontWeight={600}>
            Total Earnings
            </Typography>
            <Typography color={'primary.main'} variant="h4" fontWeight={600}>
            ₹ 5000
            </Typography>
          </CardContent>
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} lg={3}>
        <Box bgcolor={'error.light'} textAlign="center">
          <CardContent>
            <img src={icon2} width="50" />
            <Typography color={'error.main'} mt={1} variant="subtitle1" fontWeight={600}>
              Total Guests
            </Typography>
            <Typography color={'error.main'} variant="h4" fontWeight={600}>
              5
            </Typography>
          </CardContent>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TopCards;
