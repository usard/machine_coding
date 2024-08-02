import data from '../data'
import { useCallback, useState } from 'react';

const Accordion = () => {
    const [allowMultipleOpen, setAllowMultipleOpen] = useState(false)
    // const [selectedId, setSelectedId] = useState(null)
    const [activeAccordions, setActiveAccordions] = useState(new Set());

    const toggleAccordion = useCallback((id) => {
        const tempActiveAccordions = new Set(activeAccordions)
        console.log(' allow multiple:',allowMultipleOpen)
        if (allowMultipleOpen) {
            console.log('active accordion :', activeAccordions)
            if (tempActiveAccordions.has(id)) {
                tempActiveAccordions.delete(id)
                setActiveAccordions(new Set(tempActiveAccordions))
            }
            else {
                tempActiveAccordions.add(id)
                setActiveAccordions(new Set(tempActiveAccordions))
            }
        }
        else {
            console.log('i am here', activeAccordions)
            if (tempActiveAccordions?.has(id)) {
                setActiveAccordions(new Set())
            }
            else{
                tempActiveAccordions.clear()
                tempActiveAccordions.add(id)
                setActiveAccordions(new Set(tempActiveAccordions))
            }

        }
    },[allowMultipleOpen, activeAccordions])

    return (
        <div className='accordion-container'>
            <div className='checkbox-container'>
                <label htmlFor="checkbox">Allow multiple answers open</label>
                <input 
                    type="checkbox"
                    checked={allowMultipleOpen}
                    onChange={()=>setAllowMultipleOpen((prev)=> !prev)}
                />
            </div>

            <div>
                {
                    data.map((item)=> {
                        return (
                            <div key={item.id}>
                                <div className='question-container'>
                                    <h2>{item.question}</h2>
                                    <button type='button' onClick={()=>toggleAccordion(item.id)}>{ activeAccordions.has(item.id)? '-': '+'}</button>
                                </div>
                                <div >
                                    <p className={activeAccordions?.has(item.id) ? 'open' : 'close' } >{item.answer}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Accordion;