import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, CardContent, CardMedia, Typography, Chip, Avatar } from '@material-ui/core';

const Container = styled(Card)`
  && {
    display: flex;
    width: 100%;
    height: 130px;
    @media (min-width:450px) {
      height: 160px;
    }
  }
`;
const HeadImage = styled(CardMedia)`
  && {
    flex: 0 0;
    flex-basis: 90px;
    height: auto;
    @media (max-width:300px) {
      display: none;
    }
    @media (min-width:450px) {
      flex-basis: 110px;
    }
  }
`;
const HeadContent = styled(CardContent)`
  && {
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (min-width:450px) {
      padding: 20px;
    }
  }
`;
const Title = styled(Typography)`
  && {
    white-space: nowrap;
    margin-bottom: 5px;
  }
`;
const RatingWrapper = styled.div`
  margin-top: 12px;
`;
const Rating = styled.div`
  display: flex;
`;

const Header = ({ data }) => {
  const { image, title, originalTitle, rating, ratingsCount } = data;
  return (
    <Container>
      <HeadImage image={image} title={title} />
      <HeadContent>
        <Title variant="title" color="textPrimary">{title}</Title>
        {originalTitle !== title && <Title variant="subtitle1" color="textSecondary">{originalTitle}</Title>}
        <RatingWrapper>
          <Rating>
            <Chip
              label={ratingsCount}
              avatar={<Avatar>{rating}</Avatar>}
              color="primary"
              variant="outlined"
            />
          </Rating>
        </RatingWrapper>
      </HeadContent>
    </Container>
  );
};

Header.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Header;
