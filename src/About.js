import React from "react";
import { Container, Segment, Header, List, Image } from "semantic-ui-react";

import headshot from './images/headshot.jpg';
const logo = 'https://www.airmap.com/wp-content/uploads/2017/01/logo-airmap-featured-image-fb.jpg';
const imgStyles = { 
    width: 250, 
    border: '2px solid grey',
    margin: '10px auto'
};

const About = (props) => {
    return (<Container text style={{ margin: 20 }} textAlign={'center'}>
        <Segment attached={'top'}>
            <Header as={'h1'}>About</Header>
        </Segment>
        <Segment attached={'bottom'}>
            <Image src={headshot} alt={'John Dilig'} circular centered bordered style={imgStyles} />
            <Image href={'https://www.airmap.com/'} src={logo} alt={'AirMap'} circular centered bordered style={imgStyles} />
            <List>
                <List.Item>
                    <List.Header>by</List.Header>
                    John Dilig
                </List.Item>
                <List.Item>
                    <List.Header>on</List.Header>
                    10/30/2019
                </List.Item>
                <List.Item>
                    <List.Header>for</List.Header>
                    AIRMAP
                </List.Item>
            </List>
        </Segment>
    </Container>);
}

export default About;