import React from "react";


class Button extends React.Component {
    constructor(props){
        super(props);
    };
    render() {
        return (
            <div>
                <button className={this.props.classNameProps}> {this.props.text}</button>
            </div>
        )
    }
}

export default Button