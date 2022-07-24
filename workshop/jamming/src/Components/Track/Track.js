import './Track.css';
import React from 'react';
const Track=(props)=> {
    const renderAction=()=>{
        // if(isRemoval){
        //     <button className="Track-action">-</button>
        // }
        // else{
        //     <button className="Track-action">+</button>
        // }
    }
  return (
    <div className="Track">
  <div className="Track-information">
    {/* <!-- track name will go here --> */}
    {/* <h3>{track.name}</h3> */}
    {/* <!-- track artist will go here--> | <!-- track album will go here --> */}
    {/* <p>{track.artist}|{track.album}</p>  */}
  </div>
  {/* <!-- + or - will go here --> */}
  {renderAction()};
</div>
  );
}

export default Track;