import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

const nowrapStyle = css`
  white-space: nowrap;  
  text-overflow: ellipsis; 
  overflow: hidden;
  max-width: 200px;
`;
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
    const { className } = this.props;
    const { title, originalTitle, image, rating, pubdate, genres, countries, durations } = this.props.movieInfo;
    return (
      <Container className={className}>
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
