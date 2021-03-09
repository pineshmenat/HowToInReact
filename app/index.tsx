import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import './index.css';

import Collapsible from './components/Collapsible.tsx';
import ProgressBar from './components/ProgressBar.tsx';

const Container = styled.div`
    margin: auto;
    width: 100%;
`;

interface AppProps { }

class App extends Component<AppProps> {
    render() {
        return(
            <Container>
                <Collapsible/>
                <ProgressBar/>
            </Container>
        )
    }
}
console.log({ReactDOM});
ReactDOM.render(
    <App/>,
    document.getElementById('app')
)