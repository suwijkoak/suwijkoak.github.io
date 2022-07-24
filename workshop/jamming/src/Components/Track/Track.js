import './Track.css';

function Track() {
    renderAction=()=>{
        if(isRemoval){
            <button className="Track-action">-</button>
        }
        else{
            <button className="Track-action">+</button>
        }
    }
  return (
    <div className="Track">
  <div className="Track-information">
    {/* <!-- track name will go here --> */}
    <h3></h3>
    {/* <!-- track artist will go here--> | <!-- track album will go here --> */}
    <p></p> 
  </div>
  {/* <!-- + or - will go here --> */}
  {renderAction()};
</div>
  );
}

export default Track;