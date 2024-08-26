import { useState, useEffect } from "react";

const SecondsNeedle = () => {
    const [time, setTime] = useState(new Date());
    const seconds = time.getSeconds();
    console.log('seconds rendered')
    // console.log('seocnds :', seconds)

    useEffect(()=>{
        console.log('ran')
        const id = setInterval(()=>{  
            setTime(new Date())
        },1000)
        return (id)=>{
            clearInterval(id)
        }
    },[])

    const style = {
        width: '2px',
        height: '50%',
        backgroundColor: 'black',
        transformOrigin: 'bottom center',
        transform: `rotate(${seconds*6}deg)`


    }
    return (
        <div style={style} className="rotating">
         
        </div>
    )
}

export default SecondsNeedle;