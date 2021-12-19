import React from "react";
import data from "./data";
import Card from "./Card";
var _ = require('lodash');


class DataMassage extends React.Component {
    state={names:[],before1990:[]}

    getNamesList = () =>{
        let result = data.map(item=>{
            return item.name
        })
        this.setState({names:result})
        console.log(result)
        // return this.state.names
    }

    getPeopleBornBefore1990=() =>{
        let result = data.map(item=> {

            // if(parseInt(item.birthday.substr(-4)<1990)){
            //    return item
            // }
            if (parseInt(item.birthday.substr(-4))<1990){
                return item
            } else {
                return
            }
        })
            this.setState({before1990:_.compact(result)})


}

    render(){
        return(
            <>
                <button onClick={this.getNamesList}> Get Names</button>
                {this.state.names.map(name1=>{
                    return <p key={name1+(+new Date())}> {name1}</p>
                })}
                <button onClick={this.getPeopleBornBefore1990}> before: 1990</button>
                {this.state.before1990.map(name=>{
                    return <h3  key={(+new Date())+Math.random()}>{name.name}</h3>
                })}
                <Card persons={this.state.before1990}/>
            </>
        )
    }
}
export default DataMassage