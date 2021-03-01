import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import Collapsible from './components/Collapsible'
import './index.css'

const Container = styled.div`
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    width: 80%;
    padding: 20px;
`;

export default class App extends React.Component {
    render() {
        return(
            <Container>
                <Collapsible/>
            </Container>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)