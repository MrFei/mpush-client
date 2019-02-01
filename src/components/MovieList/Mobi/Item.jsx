import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CardMedia } from '@material-ui/core';
import { nowrapStyle } from '@/styles';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
`;
const Image = styled(CardMedia)`
  && {
    flex: 0 0 85px;
    height: auto;
  }
`;
const Content = styled.div`
  padding: 8px;
  width: 100%;
  overflow: hidden;
`;
const Title = styled.h6`
  ${nowrapStyle}
  font-size: 16px;
`;
const SubTitle = styled.p`
  ${nowrapStyle}
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
  margin-top: 5px;
`;
const Detail = styled.ul`
  font-size: 14px;
`;
const Item = styled.li`
  margin-top: 5px;
  color: rgba(0, 0, 0, 0.54);
  ${nowrapStyle}
`;
const Name = styled.span`
  display: inline-block;
  width: 3em;
  &::after {
    content: ":"
  }
`;

class ListItem extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    movieInfo: PropTypes.shape({
      movieId: PropTypes.number,
      title: PropTypes.string,
      originalTitle: PropTypes.string,
      image: PropTypes.string,
      rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      pubdate: PropTypes.string,
      genres: PropTypes.array,
    }).isRequired,
  }

  render() {
    const { onClick } = this.props;
    const { title, originalTitle, image, rating, pubdate, genres } = this.props.movieInfo;
    return (
      <Container onClick={onClick}>
        <Image image={image} />
        <Content>
          <Title>{title}</Title>
          {originalTitle !== title && <SubTitle>{originalTitle}</SubTitle>}
          <Detail>
            <Item>
              <Name>评分</Name>
              {rating}
            </Item>
            <Item>
              <Name>上映</Name>
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

export default ListItem;
