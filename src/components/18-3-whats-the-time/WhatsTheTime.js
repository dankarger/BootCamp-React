import React, {useEffect, useState} from "react";




export default ()=>{
    const[showSeconds,setSeconds] = useState('');
    const[showMinutes,setMinutes] = useState('');
    const[showHours,setHours] = useState('');
    const[showTime,setShowtime] = useState({
        seconds:showSeconds,
        minutes:showSeconds/60,
        hours:setSeconds/60/1000


    })

    const handleOnChange = (e)=>{
        const{name,value}=e.target
        let func
        if(name==='seconds') func=setSeconds;
        if(name==='minutes') func=setMinutes;
        if(name==='hours') func=setHours;
        func(value)
        adjustTime(name)

    }
    useEffect(()=>adjustTime(),[showSeconds,showMinutes,showHours])
    const adjustTime=(e)=>{
        if(e==='seconds'){
        setMinutes(showSeconds/60*10)
        setHours(showSeconds/600)
        }
        if(e==='minutes'){
            setSeconds(showMinutes *600)
            setHours(showMinutes /60*10)
        }
        if(e==='hours'){

            setMinutes(showHours*600)
            setSeconds(showHours*60*60)
        }

        console.log(e)
    }
    return (
        <div>
            <label htmlFor='seconds'>Seconds</label>
            <input onChange={handleOnChange} name='seconds' type="text" value={showSeconds}/>
            <label htmlFor='minutes'>Minutes</label>
            <input onChange={handleOnChange} name='minutes' type="text" value={showMinutes}/>
            <label htmlFor='hours'>Hours</label>
            <input onChange={handleOnChange} name='hours' type="text" value={showHours}/>
        </div>
    )
}