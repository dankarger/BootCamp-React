import React from "react";
import './Box.css'


class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {boxAnimation:' '};
    }

    componentDidMount() {
        this.setState((prev)=> {return {  boxAnimation:'box-in'}});
        setTimeout(()=>{
            this.setState((prev)=> {return {  boxAnimation:'box-out'}});
        },4000)
    }

    render(){
        return (
            <>
            <div className={this.state.boxAnimation + " box" } style={{width:this.props.width ,  height:this.props.height}}> </div>
            </>
        )
}
}

export default Box