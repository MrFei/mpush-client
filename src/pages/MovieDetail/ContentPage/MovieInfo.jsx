import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

const Container = styled(ExpansionPanel)`
  && {
    width: 100%;
    margin-top: 10px;
  }
`;
const InfoItem = styled.div`
  dl {
    margin-bottom: 5px;
    display: flex;
    dt {
      color: #868686;
      display: inline-block;
      width: 3em;
    }
    dd {
      flex: 1;
      li {
        margin-bottom: 5px;
      }
    }
  }
`;

const infoTable = [
  {
    name: '上映',
    key: 'pubdates',
  },
  {
    name: '片长',
    key: 'durations',
  },
  {
    name: '类型',
    key: 'genres',
  },
  {
    name: '国家',
    key: 'countries',
  },
  {
    name: '语言',
    key: 'languages',
  },
  {
    name: '导演',
    key: 'directors',
  },
  {
    name: '编剧',
    key: 'writers',
  },
  {
    name: '主演',
    key: 'casts',
  },
  {
    name: '又名',
    key: 'aka',
  },
];

const MovieInfo = ({ data }) => (
  <Container>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <Typography>详细信息</Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <InfoItem>
        {infoTable.map(item => {
          const v = data[item.key];
          const value = Array.isArray(v) ? v : [v];
          return (
            <dl key={item.name}>
              <dt>{item.name}</dt>
              <dd>
                <ul>
                  {value.map(d => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </dd>
            </dl>
          );
        })}
      </InfoItem>
    </ExpansionPanelDetails>
  </Container>
);

MovieInfo.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MovieInfo;
