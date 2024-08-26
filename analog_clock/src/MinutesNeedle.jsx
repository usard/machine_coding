import { useState, useEffect } from "react";

const MinutesNeedle = () => {
    const [time, setTime] = useState(new Date());
    const minutes = time.getMinutes();
    // console.log('seocnds :', minutes)
    console.log('minutes rendered')
    
    useEffect(()=>{
        console.log('ran')
        const id = setInterval(()=>{  
            setTime(new Date())
        },60000)
        return (id)=>{
            clearInterval(id)
        }
    },[])

    const style = {
        width: '2px',
        height: '50%',
        alignItems: 'flex-start',
        backgroundColor: 'red',
        transformOrigin: 'bottom center',
        transform: `rotate(${minutes*6}deg)`


    }
    return (
        <div className="rotating" style={style} >
         
        </div>
    )
}

export default MinutesNeedle;