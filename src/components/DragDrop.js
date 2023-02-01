import React, { useState } from 'react'
import Picture from './Picture'
import { useDrop } from 'react-dnd'
import "../App.css"

const PictureList = [
    {
        id: 1,
        url: "https://images.freeimages.com/images/large-previews/df6/free-image-for-your-seo-blog-or-web-marketing-website-1636060.jpg"
    },
    {
        id: 2,
        url: "https://images.freeimages.com/images/large-previews/eb0/palace-1144329.jpg"
    },
    {
        id: 3,
        url: "https://images.freeimages.com/images/large-previews/033/mosque-1641766.jpg"
    }
]

const DragDrop = () => {

    const [board, setboard] = useState([]);

    const [{}, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
    }))

    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id)
        setboard((board => [...board, pictureList[0]]));
    }

  return (
    <>
    
        <div className='pictures'> 
            {PictureList.map((picture) => {
                return <Picture id={picture.id} url={picture.url} />
            })} 
        </div>
        <div className='board' ref={drop}>
            {board.map((picture) => {
                return <Picture id={picture.id} url={picture.url} />
            })}
        </div>

    </>
  )
}

export default DragDrop
