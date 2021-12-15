import React from "react";
import CostumButton from "./CostumButton";


class CostumButtonElement extends React.Component {
   state={selectedColor:''}

    ColorList = [
        {color:'blue',id:0},
        {color:'red',id:1},
        {color:'purple',id:2},
        {color:'green',id:3},
    ]
    updateColor = (color)=> {
        this.setState(()=> {
            return {selectedColor:color};
        })
}

    render() {
        return(
            <>
                {this.ColorList.map((btn)=>{
                    return (
                        <CostumButton
                             callBack = {this.updateColor}
                             color= {btn.color}
                             id = {btn.id}
                             key = {btn.id}
                    />)
                })}
                <h1>The selected Color is :{this.state.selectedColor}</h1>
            </>
        )
    }
}

export default CostumButtonElement;