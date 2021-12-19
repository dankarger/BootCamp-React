import React from "react";



class Card extends React.Component {


    render() {
        const{persons}=this.props
        return (
            <>
                {persons.map(person=>{
                    return <div style={{border:"1px solid black",width:'30%',margin:"5rem"}}key={person.name +(new Date())}>
                       <p> Name:{person.name}</p>
                        <hr/>
                       <p>BirthDay:{person.birthday}</p>
                      <div>Fav Meat: {person.favoriteFoods.meats.map(food=>{return <p key={food}>{food}</p>})}</div>
                       <div>Fav fish: {person.favoriteFoods.fish.map(food=>{return <p key={food}>{food}</p>})}</div>
                    </div>

                })}
            </>
        )
    }
}

export default  Card