import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { CardMedia } from '@material-ui/core';

const nowrapStyle = css`
  white-space: nowrap;  
  text-overflow: ellipsis; 
  overflow: hidden;
  width: calc(100% - 20px);
`;
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
    className: PropTypes.string.isRequired,
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
    const { className } = this.props;
    const { title, originalTitle, image, rating, pubdate, genres } = this.props.movieInfo;
    return (
      <Container className={className}>
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
