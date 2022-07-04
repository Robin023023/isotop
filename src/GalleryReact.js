import React,{useState} from 'react'

import Menu from './menu.json'

export default function GalleryReact() {
  const [items,setItems]=useState(Menu);

  const filterItem=(categItem)=>{
    const updatedItems=Menu.filter((curyElem)=>{
      return curyElem.category===categItem
    })
    setItems (updatedItems)
  }
  return (
    <div className='text-center'>

      <button onClick={()=>setItems(Menu)}>All</button>
      <button onClick={()=>filterItem('Breakfast')}>Breakfast</button>
      <button onClick={()=>filterItem('Lunch')}>Lunch</button>
      <button onClick={()=>filterItem('dinner')}>Dinner</button>
      <div className='row'>

      {
         items.map((elo)=>{
           return <div className='col-md-4'>
             <img className='img-fluid' src={elo.image}/>
           </div>
         })
       }

      </div>
       
    </div>
  )
}


