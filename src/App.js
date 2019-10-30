import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Segment, Header, Icon } from "semantic-ui-react";

import Carousel from './components/Carousel';
import { fetchCatGifs } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.onLoadApp = this.props.onLoadApp.bind(this);
  }
  componentDidMount(){
    this.onLoadApp();
  }
  render() {
    return (<Container text style={{ margin: 20 }} textAlign={'center'}>
      <Segment attached={'top'}>
        <Header as={'h1'}>Cat Gifs Carousel</Header>
      </Segment>
      <Segment attached={'bottom'}>
        {this.props.gifs && this.props.gifs.length > 0 ? <Carousel images={this.props.gifs} /> : <Icon loading name='spinner' size={'huge'} />}
      </Segment>
    </Container>);
  }
}

export default connect(
  state => ({
    ...state.app
  }),
  dispatch => ({
    onLoadApp: () => {
      dispatch(fetchCatGifs());
    }
  })
)(App);
