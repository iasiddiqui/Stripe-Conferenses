// CategoryCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import styled from '@emotion/styled';


const StyledCard = styled(Card)({
  width: '100%',
  maxWidth: 300, // Maximum width for larger screens
  height: 'auto',
  margin: '1rem',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  display: 'flex',
 
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '@media (max-width: 600px)': {
    maxWidth: 200, // Adjust width for smaller screens
    
  },
  '@media (max-width: 400px)': {
    maxWidth: 150, // Further adjust for very small screens
  },
  '&:hover': {
    transform: 'scale(0.9)',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
  },
});

const CategoryCard = ({ name, events, icon }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h6" component="div" align="center">
          {icon}
        </Typography>
        <Typography variant="h6" component="div" align="center">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Events: {events}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default CategoryCard;
