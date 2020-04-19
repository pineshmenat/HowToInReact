import React from 'react';
import {FaAngleDown, FaAngleRight} from 'react-icons/fa'
export default class Collapsible extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: false
        }
    }
    render() {
        console.log(this.state.toggle);
        return(
            <div className="collapsible">
                <button type="button" className="btn" onClick={() => this.setState((prevState) => ({toggle: !prevState.toggle}))}>
                    {this.state.toggle ? "Close": "Open"} Collapsible
                    {this.state.toggle ? <FaAngleDown className="fa" size={16}/> : <FaAngleRight className="fa" size={16}/>}
                </button>
                {this.state.toggle && <div className="content">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>}
            </div>
        )
    }
}