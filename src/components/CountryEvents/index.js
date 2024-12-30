
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import styled from '@emotion/styled';

const StyledCard = styled(Card)({
  color: 'black',
  width: '100%',
  maxWidth: 200, // Maximum width for larger screens
  height:100, // Fixed height for the card
  margin: '1rem',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  display: 'flex',
  
  // flexDirection: 'column', // Ensure content is aligned vertically
  alignItems: 'center',
  borderRadius: '10px',
  border: '1px solid',
  overflow: 'hidden', // Ensure no overflow of content
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
  },
  '@media (max-width: 600px)': {
    maxWidth: '100%', // Full width for mobile devices
  },
  '@media (min-width: 601px) and (max-width: 1200px)': {
    maxWidth: '50%', // Half width for tablet devices
  },
});

const StyledCardMedia = styled(CardMedia)({
  height:'1.5rem', // Fixed height for media
  width:'2.3rem', // Full width of the card
  borderRadius: '10%',
  margin: '1rem', // Margin below media
});

const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', // Center content vertically
  height: '100%', // Full height of the card
  padding: '1rem', // Padding inside card
  textAlign: 'center', // Center text
  overflow: 'hidden', // Prevent overflow of text
});

const EventByCountry = ({ image,country,numberOfEvents }) => {
  return (
    <StyledCard>
      <StyledCardMedia
       
        image={image}
       
      />
      <StyledCardContent>
        <Typography sx={{ fontSize: '1rem', fontWeight: '800' }} component="div">
          {country}
        </Typography>
        <Typography sx={{fontSize:'12px'}} color="text.secondary">
          {numberOfEvents}
            
          <span> - Events</span>
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
};

export default EventByCountry;
