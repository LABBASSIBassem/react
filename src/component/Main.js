import React from 'react'; 


const Main = (props) =>{
 const a = 5
  return(
      <>
      <p>{props.name}</p>
    <button>{props.button}</button>
    <p>{a}</p>
      </>
  )

}

export default Main