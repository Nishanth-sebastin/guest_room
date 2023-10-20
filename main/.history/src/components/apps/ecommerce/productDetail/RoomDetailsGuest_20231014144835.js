import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

// MUI Elements
import { Box, Grid, Typography, Button, Rating, Divider, Stack, useTheme } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../../../store/apps/eCommerce/EcommerceSlice';
import AlertCart from '../productCart/AlertCart';
import Calendar from '@demark-pro/react-booking-calendar';
import axios from 'axios';

const RoomDetailsGuest = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const Id = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const username = localStorage.getItem('username');
  const url = window.location.href;
  const parts = url.split('/');
  const roomid = parts[parts.length - 1];


  useEffect(() => {
    axios
      .post('http://localhost:8080/owner/roomdetails/', { username, roomid })
      .then((response) => {
        setData({...response.data.message});
        setLoading(false)
      });
  }, []);


  const reserved = [
    {
      startDate: new Date(2023, 3, 22),
      endDate: new Date(2016, 4, 22),
    },
  ];
  const [selectedDates, setSelectedDates] = useState([]);
  const handleChange =  (e) => {
    setSelectedDates(e);
  
  };

  // Get Product
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Get Products
  const product = useSelector((state) => state.ecommerceReducer.products[Id.id - 1]);

  // for alert when added something to cart
  const [cartalert, setCartalert] = React.useState(false);

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setCartalert(false);
  };
  const handleSubmit=()=>{
   
    selectedDates.map((select)=>{
      
      console.log(select.toISOString())
    })
  }

  return (
    <Box p={2}>
      {product ? (
        <>
          <Typography fontWeight="600" variant="h4" mt={1}>
            {product.title}
          </Typography>
          <Typography variant="subtitle2" mt={1} color={theme.palette.text.secondary}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ex arcu, tincidunt bibendum
            felis.
          </Typography>

          <Typography mt={2} variant="h4" fontWeight={600}>
            <Box
              component={'small'}
              color={theme.palette.text.secondary}
              sx={{ textDecoration: 'line-through' }}
            >
              ${product.salesPrice}
            </Box>{' '}
            ${product.price}
          </Typography>
          {/* ------------------------------------------- */}
          {/* Ratings */}
          {/* ------------------------------------------- */}
          <Stack direction={'row'} alignItems="center" gap="10px" mt={2} pb={3}>
            <Rating name="simple-controlled" size="small" value={product.rating} readOnly />
            <Link to="/" color="inherit">
              (236 reviews)
            </Link>
          </Stack>
          <Divider />
          <Calendar
            selected={selectedDates}
            onChange={handleChange}
            onOverbook={(e, err) => alert(err)}
            disabled={(date, state) => !state.isSameMonth}
            reserved={reserved}
            variant="events"
            dateFnsOptions={{ weekStartsOn: 1 }}
            range={true}
          />
          <Grid container spacing={2} mt={1}>
            <Grid item xs={12} lg={5} md={12}>
              <Button
                color="primary"
                size="large"
                fullWidth
                component={Link}
                variant="contained"
                to="/guest/booking-status/"
                onClick={handleSubmit}
              >
                Request Booking
              </Button>
            </Grid>
          </Grid>
          <AlertCart handleClose={handleClose} openCartAlert={cartalert} />
        </>
      ) : (
        'No product'
      )}
    </Box>
  );
};

export default RoomDetailsGuest;
