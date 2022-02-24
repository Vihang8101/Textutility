import React ,{useRef} from 'react';

export default function Selectall()
 {
    const refName = useRef(null);

  const selectAllText = (e) => {
    refName.current.select();
  }

  return(
      <>
    <div>
      <textarea ref={refName} onClick={selectAllText}>
        Text goes here
      </textarea>
    </div>
    </>
  )}
