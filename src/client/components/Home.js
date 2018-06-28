import React from 'react'

export default () => {
  return (
    <div>
      <h1>Home content</h1>
      <button onClick={ () => {
          console.log('button clicked!!!!!')        
        }
      }>Click</button>
    </div>
  );
}
