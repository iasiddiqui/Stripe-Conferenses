// FeaturedCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import styled from '@emotion/styled';

// Define the style for the event card
const StyledCard = styled(Card)(props => ({
  color: 'light-green',
  width: '300px', // Adjust width for ATM card appearance
  height: '150px', // Adjust height for ATM card appearance
  margin: '2rem',
  // borderRadius: '12px',
  border: 'none', // Remove border
  overflow: 'hidden', // Ensure no overflow of content
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // background: 'linear-gradient(135deg, #00695c, #004d40)', // Gradient background
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.4)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.5)',
  },
  '@media (max-width: 600px)': {
    width: '90%', // Full width for mobile devices
  },
  '@media (min-width: 601px) and (max-width: 1200px)': {
    width: '80%', // Adjust width for tablet devices
  },
}));

const StyledCardContent = styled(CardContent)(props => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around', // Distribute content evenly
  alignItems: 'center', // Center content horizontally
  height: '100%', // Full height of the card
  padding: '1rem', // Padding inside card
  textAlign: 'center', // Center text
  overflow: 'hidden', // Prevent overflow of text
}));

const EventVenueCard = ({ venue }) => {
  return (
    <StyledCard>
      <StyledCardContent>
        <Typography sx={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.5rem' }} component="div">
          {venue.name}
        </Typography>
        <Typography sx={{ fontSize: '14px', marginBottom: '0.5rem' }} color="inherit">
          {venue.location}
        </Typography>
        <Typography sx={{ fontSize: '12px', marginBottom: '0.5rem' }} color="inherit">
          {venue.totalEvents} Total Events
        </Typography>
        <Typography sx={{ fontSize: '12px' }} color="inherit">
          {venue.upcomingEvents} Upcoming Events
        </Typography>
      </StyledCardContent>
    </StyledCard>
  );
};

export default EventVenueCard;
