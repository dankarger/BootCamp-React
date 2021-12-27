import React,{useState,useEffect} from "react";

const SearchBar =({value,callback})=>{
    const [term, setTerm] = useState('');


    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter Search Term</label>
                    <input
                        value={value}
                        onChange={callback}
                        className="input"/>
                </div>
            </div>
        </div>
    )
}
export default SearchBar