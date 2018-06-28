import React from 'react'

export default (props) => {
  return (
    <div>
     <h1>{props.title? props.title : "The server"}</h1> 
      <button onClick={ () => {
          console.log('button clicked!!!!!')        
        }
      }>Click</button>
    </div>
  );
};
