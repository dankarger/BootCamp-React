import React,{useState,useRef} from "react";



const VideoPlayer = () => {
    const player = useRef()

    const playVideo=()=>{
        player.current.play()
    }
    const pauseVideo= ()=>{
        player.current.pause()
    }

    return (
        <div>
            <button onClick={playVideo}>Play</button>
            <button onClick={pauseVideo}>Pause</button>
            <video ref={player} src="/Videos/first_wave_exp.mp4" typeof="mp4"> </video>

        </div>
    )
}
export default VideoPlayer

