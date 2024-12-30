import React from 'react';
import { Card, CardMedia, CardContent, Typography, Rating, Box, Avatar, IconButton } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const EventCard = ({ event }) => {
  return (
    <Card sx={{ maxWidth: 400, margin: 2, boxShadow: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardMedia
        component="img"
        sx={{ height: 140,  width: '100%'}}
        image={event.image}
        alt={event.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom  component="div">
            {event.name}
          </Typography>
          <IconButton aria-label="bookmark" sx={{ color: 'text.secondary' }}>
            <BookmarkIcon titleAccess='Bookmarks' />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {event.address}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={2}>
          {event.reviews}
        </Typography>
        <Box mt={2}>
          <Rating name="read-only" value={event.starRating} readOnly />
        </Box>
        <Box mt={2} display="flex" alignItems="center">
          <Avatar src={event.emailLogo} sx={{ width: 30, height: 30, marginRight: 1 }} />
          <Typography variant="body2" color="text.secondary">
            {event.reviewer} - {event.date}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventCard;
