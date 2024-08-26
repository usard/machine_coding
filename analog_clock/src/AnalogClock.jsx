import SecondsNeedle from "./SecondsNeedle";
import MinutesNeedle from './MinutesNeedle';
import HoursNeedle from './HoursNeedle'
const AnalogClock = () => {
    return (
        <div className='clock-circle'>
            <SecondsNeedle></SecondsNeedle>
            <MinutesNeedle></MinutesNeedle>
            <HoursNeedle></HoursNeedle>
            
            <div className='center-round'></div>
        </div>
    )
}

export default AnalogClock;