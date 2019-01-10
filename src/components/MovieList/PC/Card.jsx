import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const Container = styled(Card)`
  && {
    display: flex;
    width: 400px;
    height: 180px;
    cursor: pointer;
  }
`;
const Image = styled(CardMedia)`
  && {
    width: 185px;
    height: auto;
  }
`;
const Content = styled(CardContent)`
  && {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled(Typography)``;
const Detail = styled.ul`
  font-size: 16px;
  margin-top: 8px;
`;
const Item = styled.li`
  margin-top: 8px;
`;
const Name = styled.span`
  display: inline-block;
  width: 5em;
  &::after {
    content: ":"
  }
`;

class MovieCard extends React.Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    movieInfo: PropTypes.shape({
      movieId: PropTypes.number,
      title: PropTypes.string,
      image: PropTypes.string,
      rating: PropTypes.string,
      pubdate: PropTypes.string,
      genres: PropTypes.array,
    }).isRequired,
  }

  render() {
    const { className } = this.props;
    const { title, image, rating, pubdate, genres } = this.props.movieInfo;
    return (
      <Container className={className}>
        <Image image={image} title={title} />
        <Content>
          <TitleWrapper>
            <Title component="h6" variant="h6">{title}</Title>
            <Title variant="subtitle1" color="textSecondary">{rating}</Title>
          </TitleWrapper>
          <Detail>
            <Item>
              <Name>上映日期</Name>
              {pubdate}
            </Item>
            <Item>
              <Name>类型</Name>
              {genres.join(' ')}
            </Item>
          </Detail>
        </Content>
      </Container>
    );
  }
}

export default MovieCard;
