const CountDown = ({timer, handleTimer}) => {
    const {hours , minutes , seconds } = timer;
    return (
        <div className="timer flex">
            <div>
                <input name='hours' onChange={handleTimer} value={hours} type="number" step="1" min="0" max="24" />
            </div>
            <span>:</span>
            <div>
                <input name='minutes' onChange={handleTimer} value={minutes} type="number" step="1" min="0" max="59" />
            </div>
            <span>:</span>
            <div>
                <input name='seconds' onChange={handleTimer} value={seconds} type="number" step="1" min="0" max="59" />
            </div>
        </div>
    )
}

export default CountDown;