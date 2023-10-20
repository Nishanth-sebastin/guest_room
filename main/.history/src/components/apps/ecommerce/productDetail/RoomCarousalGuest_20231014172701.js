import React, { useEffect, useRef, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

//Carousel slider for product
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import { fetchProducts } from '../../../../store/apps/eCommerce/EcommerceSlice';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import BlankCard from 'src/components/shared/BlankCard';

const RoomCarouselGuest = () => {
  const [state, setState] = React.useState({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();
  const dispatch = useDispatch();
  const Id = useParams();

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const username = localStorage.getItem('username');
  const url = window.location.href;
  const parts = url.split('/');
  const roomid = parts[parts.length - 1];

  useEffect(() => {
    axios
      .post('http://localhost:8080/guest/roomdetails/', { username, roomid })
      .then((response) => {
        setImages([...response.data.message.images]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);

  const { nav1, nav2 } = state;
  const settings = {
    focusOnSelect: true,
    slidesToShow: 2,
    arrows: false,
    swipeToSlide: true,
    slidesToScroll: 1,
    centerMode: true,
    className: 'centerThumb',
    speed: 500,
  };
  const settings2 = {
    focusOnSelect: true,
    slidesToShow: 3,
    swipeToSlide: true,
    slidesToScroll: 1,
    centerMode: true,
    className: 'centerThumb',
    speed: 500,
  };
  return (
    <Box>
      {/* <Carousel sx={{ width: '100%' }}>
        {images.map((item, i) => (
          <img style={{ width: '100%', height: '300px' }} src={item} alt={item}></img>
        ))}
      </Carousel> */}
      <Slider asNavFor={nav2} ref={(slider) => (slider1.current = slider)} {...settings} >
        
        {images.map((img,index) => (
          <Box key={index}>
            <img
              src={img}
              alt={img}
              width="100%"
              style={{ borderRadius: '5px' }}
            />
          </Box>
        ))}
      </Slider>

      <Grid>
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
                    width={300}
                    height={200}
                    animation="wave"
                    variant="rectangular"
                    style={{ backgroundColor: 'black' }}
                  />
                </BlankCard>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid columns={3}>
            <Slider asNavFor={nav1} ref={(slider) => (slider2.current = slider)} {...settings2}>
              {images.map((step, index) => (
                <Box key={index} sx={{ p: 1, cursor: 'pointer' }}>
                  <img 
                    src={step}
                    alt={step}
                    width="100px"
                    height="100px"
                    style={{ borderRadius: '5px',marginLeft:'20px',backgroundRepeat:"no-repeat"}}
                  />
                </Box>
              ))}
            </Slider>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default RoomCarouselGuest;