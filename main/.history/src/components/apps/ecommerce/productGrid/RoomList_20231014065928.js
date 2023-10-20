import React, { useEffect, useState } from 'react';
import { Box, Grid, Stack, CardContent, Typography, Fab, Tooltip, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { IconBasket } from '@tabler/icons';
import emptyCart from 'src/assets/images/products/empty-shopping-cart.svg';
import BlankCard from '../../../shared/BlankCard';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';

const RoomList = ({ onClick }) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const username = localStorage.getItem('username');
  useEffect(() => {
    axios.post('http://localhost:8080/owner/getrooms', { username }).then((response) => {
      setRooms([...response.data.message]);
      setLoading(false);
    });
  }, [username]);
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" pb={3}>
        <Typography variant="h5">Rooms</Typography>
      </Stack>

      <Grid container spacing={3}>
        {loading ? (
          <Grid container spacing={3}>
            {[...Array(10).keys()].map((index) => (
              <Grid
                item
                xs={12}
                lg={4}
                md={4}
                sm={6}
                display="flex"
                alignItems="stretch"
                key={index}
              >
                <BlankCard className="hoverCard">
                  <Skeleton
                    width={300} // Set the width of the skeleton element
                    height={200} // Set the height of the skeleton element
                    animation="wave" // Use the wave animation for a more pronounced effect
                    variant="rectangular" // Use rectangular variant for card-like shapes
                    style={{ backgroundColor: '#e0e0e0' }} 
                  />
                  In this example: width and height determine the dimensions of the skeleton
                  element. animation sets the animation type. "wave" creates a subtle wave effect.
                  variant sets the shape of the skeleton. "rectangular" is suitable for card-like
                  elements. style allows you to set additional CSS properties. Here, backgroundColor
                  is set to a light gray color ('#e0e0e0') to make the skeleton more visible. Feel
                  free to adjust these values according to your design preferences. You can
                  experiment with different colors, animation types, and sizes to make the skeleton
                  elements clearly visible while loading.
                </BlankCard>
              </Grid>
            ))}
          </Grid>
        ) : (
          <>
            {rooms.map((room) => (
              <Grid
                item
                xs={12}
                lg={4}
                md={4}
                sm={6}
                display="flex"
                alignItems="stretch"
                key={room.roomid}
              >
                <BlankCard className="hoverCard">
                  <Typography component={Link} to={`/owner/${username}/room/detail/${room.roomid}`}>
                    <CardMedia component="img" width="100%" image={room.images[0]} alt="products" />
                  </Typography>
                  <Tooltip title="Add To Cart">
                    <Fab
                      size="small"
                      color="primary"
                      sx={{ bottom: '75px', right: '15px', position: 'absolute' }}
                    >
                      <IconBasket size="16" />
                    </Fab>
                  </Tooltip>
                  <CardContent sx={{ p: 3, pt: 2 }}>
                    <Typography variant="h6">{room.roomname}</Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      mt={1}
                    >
                      <Stack direction="row" alignItems="center">
                        <Typography variant="h6">₹ {room.rateperday}</Typography>
                      </Stack>
                      {/* <Rating name="read-only" size="small" value={product.rating} readOnly /> */}
                    </Stack>
                  </CardContent>
                </BlankCard>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </Box>
  );
};

export default RoomList;
