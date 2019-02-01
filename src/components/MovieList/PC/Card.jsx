import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { nowrapStyle } from '@/styles';

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
    flex: 0 0 125px;
    height: auto;
  }
`;
const Content = styled(CardContent)`
  && {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled(Typography)`
  ${nowrapStyle}
`;
const Detail = styled.ul`
  font-size: 14px;
`;
const Item = styled.li`
  margin-top: 5px;
  ${nowrapStyle}
`;
const Name = styled.span`
  display: inline-block;
  width: 3em;
  &::after {
    content: ":"
  }
`;

class MovieCard extends React.Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    movieInfo: PropTypes.shape({
      movieId: PropTypes.number,
      title: PropTypes.string,
      originalTitle: PropTypes.string,
      image: PropTypes.string,
      rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      pubdate: PropTypes.string,
      genres: PropTypes.array,
      countries: PropTypes.array,
      durations: PropTypes.array,
    }).isRequired,
  }

  render() {
    const { className, onClick } = this.props;
    const { title, originalTitle, image, rating, pubdate, genres, countries, durations } = this.props.movieInfo;
    return (
      <Container className={className} onClick={onClick}>
        <Image image={image} title={title} />
        <Content>
          <TitleWrapper>
            <Title component="h6" variant="h6" title={title}>{title}</Title>
            <Typography variant="subtitle1" color="textSecondary">{rating}</Typography>
          </TitleWrapper>
          {originalTitle !== title && <Title variant="subtitle1" color="textSecondary" title={originalTitle}>{originalTitle}</Title>}
          <Detail>
            <Item>
              <Name>上映</Name>
              {pubdate}
            </Item>
            <Item>
              <Name>类型</Name>
              {genres.join(' ')}
            </Item>
            {countries && (
              <Item>
                <Name>国家</Name>
                {countries.join(' ')}
              </Item>
            )}
            {durations && (
              <Item title={durations.join(' ')}>
                <Name>片长</Name>
                {durations.join(' ')}
              </Item>
            )}
          </Detail>
        </Content>
      </Container>
    );
  }
}

export default MovieCard;
