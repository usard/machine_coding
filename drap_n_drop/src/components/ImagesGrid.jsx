import { useState, useRef, useEffect } from "react"

let images = Array.from({length:9}, (_,i)=> (
    { 
        id:i+1, 
        url: `https://picsum.photos/200/200?random=${i}`
    }
))

const ImagesGrid = () => {
    const [stateImages, setStateImages] = useState([...images])
    // const [draggedId, setDraggedId] = useState(null);
    const draggedId = useRef(null)
    const handleDragStart = (id) => {
        draggedId.current = id 
        // setDraggedId(id)
        console.log(draggedId.current)
    }
    useEffect(()=> {
        console.log('useEffect ', stateImages);
        
    },[stateImages])
    const handleDrop = (dropId) =>{
        console.log(dropId)
        setStateImages((prevStateImages)=>{
            const newStateImages = [...prevStateImages]
            const draggedItemIndex = newStateImages.findIndex((item)=> item.id == draggedId.current)
            // const draggedItemIndex = newStateImages.findIndex((item)=> item.id == draggedId)
            const toDropIndex = newStateImages.findIndex((item)=> item.id == dropId )
            console.log(draggedItemIndex, toDropIndex)
            // [newStateImages[draggedItemIndex], newStateImages[toDropIndex]] = [
            //          newStateImages[toDropIndex], 
            //          newStateImages[draggedItemIndex] 
            //         ]  // this is not working possibly due to using useRef to store the draggedId so using traditional way of swaping as below
            let tempVal = newStateImages[toDropIndex]
            newStateImages[toDropIndex] = newStateImages[draggedItemIndex];
            newStateImages[draggedItemIndex] = tempVal; 
            return newStateImages 
        });
        // draggedId.current = null // this is not working possibly due to both draggedId state and setStateImages states should change at a time , but it is not happening as setting directly draggedId to null will make this change first then setStateImages change will change
        setTimeout(()=>{
            draggedId.current = null 
        },0) 
        // setDraggedId(null)
    }
    return (
        <div className="images-container">
            {
                stateImages?.map((item)=> {
                    return (
                        <div className="image" key={`peice-${item.id}`} id={item.id} 
                            // onDragStart={()=>handleDragStart(item.id)} 
                            // onDragOver={(e)=>e.preventDefault()} 
                            // onDrop={()=> { handleDrop(item.id)}}
                        >
                            {/* <div className="image" key={`peice-${item.id}`} id={item.id} 
                                onDragStart={()=>handleDragStart(item.id)} 
                                onDragOver={(e)=>e.preventDefault()} 
                                onDrop={()=> { handleDrop(item.id)}}
                            >
                                <div className="image" key={`peice-${item.id}`} id={item.id} 
                                onDragStart={()=>handleDragStart(item.id)} 
                                onDragOver={(e)=>e.preventDefault()} 
                                onDrop={()=> { handleDrop(item.id)}}
                            > */}
                                <img src={item.url} alt={`item-${item.id}`} onDragStart={()=>handleDragStart(item.id)} onDragOver={(e)=>e.preventDefault()} onDrop={(e)=> { e.preventDefault();handleDrop(item.id)}} />
                                {/* by default draggable is true for img tag so, not explicitly kept in above */}
                             </div>
                        //      </div>
                        // </div>
                    )
                })
            }
        </div>
    )
}

export default ImagesGrid;