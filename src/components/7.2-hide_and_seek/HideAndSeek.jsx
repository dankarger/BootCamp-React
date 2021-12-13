import React from "react";
import "./HideAndSeek.css"

class HideAndSeek extends React.Component {
    constructor(props) {
        super(props);
        this.state = {class:'show'};
    }
    hideSeek(className){
        if(className==='show'){
            this.setState({class: 'hide'})
        }else{
            this.setState({class: 'show'})
        }

    }
    render(){
        return(
            <>
                <div className="component-div">
                <button onClick={()=>{this.hideSeek(this.state.class)}}>
                    show/hide
                </button>
              <div className={this.state.class}> </div>


                </div>
            </>

        )
    }
}

export default HideAndSeek