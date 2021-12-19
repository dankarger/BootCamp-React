import React from "react";
import axios from "axios";
import './Avatar.css'
import InputFilter from "./InputFilter";

class Avatar extends React.Component {
    state = {avatars:[],personsList:[],searchValue:'',searchResult:[]}
    API = 'https://randomuser.me/api/'

    get10Avatars = async ()=>{
        let avatarsList =[];
        let personsList = [];
        for(let i=0;i<10;i++){
            avatarsList.push(await axios.get(this.API))
              let  person=  {
                firstName:avatarsList[i].data.results[0].name.first,
                LastName:avatarsList[i].data.results[0].name.last,
                gender:avatarsList[i].data.results[0].gender,
                picture:avatarsList[i].data.results[0].picture,
                phone:avatarsList[i].data.results[0].phone
            }
            personsList.push(person)
        }
        console.log(avatarsList)
        console.log(personsList)
        this.setState({avatars:avatarsList, personsList:personsList})
        console.log(this.state)
        console.log(personsList)
    }
    filterAvatarFunction=(value)=>{
        this.setState((prev)=>{
            return { searchValue:prev+value}
        })
        this.state.avatars.filter(person=>{
            return person.data.results[0].name.first ===this.state.searchValue
        })
        console.log(this.state.searchValue)
        console.log(this.state.searchValue)

    }

    render() {
        return(
            <div className='page'>
                <button onClick={this.get10Avatars}>Get Avatars </button>
            <InputFilter callBack={this.filterAvatarFunction} stateValue={this.state.searchValue}/>
             <button onClick={console.log('g')}>Filter </button>

                <div>
                    <div  className='row'>   {this.state.avatars.map(avatar=>{
                            return(
                                <div>
                                    <div  className='card' key={avatar.data.results[0].name.first+new Date()}>
                                        <p>{avatar.data.results[0].name.first} {avatar.data.results[0].name.last}</p>
                                        <img src={avatar.data.results[0].picture.large} alt=""/>
                                        <p>{avatar.data.results[0].gender}</p>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>


                          </div>
                            </div>

                                )
  }
}
export default Avatar