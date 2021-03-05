import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import './index.css';

import Collapsible from './components/Collapsible';
import ProgressBar from './components/ProgressBar';

const Container = styled.div`
    margin: auto;
    width: 100%;
`;

export default class App extends React.Component {
    render() {
        return(
            <Container>
                <Collapsible/>
                <ProgressBar/>
            </Container>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)