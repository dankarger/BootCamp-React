import React from "react";
import Buttons from "../4.2-cards/Buttons";



class CardClass extends React.Component {
    constructor(props){
        super(props);
    };
    render() {
        return (
            <div className='card-div flex'>
                <div className='card'>
                    <div className='image  flex'>
                        <img src={this.props.img} alt=""/>
                    </div>
                    <div className='content-div'>
                        <div className="title"> {this.props.title}</div>
                        <div className='content'>{this.props.content} </div>
                        <Buttons
                            className='button'
                            url='https://stackoverflow.com/questions/45251605/iterate-over-javascript-object-with-index' className='flex'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardClass

