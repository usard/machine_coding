import { useState, useEffect } from "react";

const HoursNeedle = () => {
    const [time, setTime] = useState(new Date());
    const hours = time.getHours();
    console.log('hours :', hours)
    console.log('hours rendered')
    useEffect(()=>{
        console.log('ran')
        const id = setInterval(()=>{  
            setTime(new Date())
        },3600000)
        return (id)=>{
            clearInterval(id)
        }
    },[])

    const style = {
        width: '2px',
        height: '50%',
        backgroundColor: 'green',
        transformOrigin: 'bottom center',
        transform: `rotate(${hours*30}deg)`


    }
    return (
        <div className="rotating" style={style} >
         
        </div>
    )
}

export default HoursNeedle;