    import React from 'react'

    
    const Gallery = ({persons}) => {
        // console.log(persons);
      return (
        <div className="b-board-game">
        
         {persons.map((per,i)=>(
            <img src={per.img} key={i} alt='' className={per.isDisabled && 'disabled'}></img>
         ))}   
        </div>
      )
    }
    
    export default Gallery
    