import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { openURLNewTab } from '@/utils';

const Container = styled(ExpansionPanel)`
  && {
    width: 100%;
    margin-top: 10px;
  }
`;
const TextCard = styled(Paper)`
  && {
    margin-top: 10px;
    p {
      padding: 15px;
    }
  }
`;
const SiteList = styled.div`
  width: 100%;
`;
const LinkList = styled.ul`
  margin-top: 2px;
`;
const LinkItem = styled.li`
  margin-bottom: 8px;
`;

class ResInfo extends React.Component {
  static propTypes = {
    resInfo: PropTypes.array,
  }

  static defaultProps = {
    resInfo: [],
  }

  state = {
    dialogOpen: false,
    targetURL: '',
  }

  render() {
    const { resInfo } = this.props;
    if (!resInfo) {
      return (
        <TextCard>
          <p>未找到相关资源，爬虫正在努力抓取中...</p>
        </TextCard>
      );
    }
    return (
      <Container>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>电影资源</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <SiteList>
            {resInfo.map(item => (
              <Fragment key={item.website}>
                <Typography variant="subtitle1" color="textSecondary">{item.website}</Typography>
                <LinkList>
                  {item.findInfo.map(res => (
                    <LinkItem key={res.link}>
                      <Button
                        fullWidth
                        size="small"
                        variant="outlined"
                        classes={{
                          label: 'label',
                        }}
                        onClick={() => this.onLinkClick(res.link)}
                      >
                        {res.title}
                      </Button>
                    </LinkItem>
                  ))}
                </LinkList>
              </Fragment>
            ))}
          </SiteList>
        </ExpansionPanelDetails>
        <Dialog
          open={this.state.dialogOpen}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">访问网站</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              即将访问: {this.state.targetURL}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              返回
            </Button>
            <Button onClick={this.openURL} color="primary" autoFocus>
              确定
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    );
  }

  onLinkClick = (link) => {
    this.setState({
      dialogOpen: true,
      targetURL: link,
    });
  }

  handleClose = () => {
    this.setState({ dialogOpen: false });
  }

  openURL = () => {
    openURLNewTab(this.state.targetURL);
    this.handleClose();
  }
}

export default ResInfo;
