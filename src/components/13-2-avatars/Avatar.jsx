import React from "react";
import axios from "axios";
import './Avatar.css'
import InputFilter from "./InputFilter";

class Avatar extends React.Component {
    state = {avatars: [], personsList: [], searchValue: '', searchResult: []}
    API = 'https://randomuser.me/api/?results=10'

    get10Avatars = async () => {
        const{data} = await  axios.get(this.API);

        this.setState({avatars: data.results});
    }

    createCardsFromAvatars() {
        if (this.state.avatars.length > 0) {
            return (
                <div className='ui link cards'>
                    {this.filterAvatarFunction(this.state.avatars, this.state.searchValue).map(avatar => {
                        return <div key={avatar.login.uuid}/>
                    })}
                </div>
            )
        }
    }


    filterUsers = (users, searchValue) => {
        return users.filter((user) => {
            const fullName = (user.name.first + " " + user.name.last).toLowerCase();
            return fullName.indexOf(searchValue.toLowerCase()) !== -1;
        });
    };

    onChangeHandler = (e)=>{
        this.setState({searchValue:e.target.value})
    }
    filterItems(arr, query) {
        return arr.find(function (el) {
            return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
        })
    }

    componentDidMount() {
        this.get10Avatars();
    }

    render() {
        return (
            <div className="container">
                <h1>Search</h1>
                <div className="ui search">
                    <input
                        onChange={(e) => this.onChangeHandler(e)}
                        value={this.state.searchValue}
                        className="prompt"
                        type="text"
                        placeholder="Search..."
                    />
                </div>

                {this.createCardsFromAvatars()}
            </div>
                        )
                    }
                        }

        export default Avatar