import React from 'react'
import ReactDOM from 'react-dom'
import Collapsible from './components/Collapsible'
import './index.css'

export default class App extends React.Component {
    render() {
        return(
            <div className="container">
                <Collapsible/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)