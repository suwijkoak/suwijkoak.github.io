import './TrackList.css';
import Track from '../Track/Track';
function TrackList() {
  return (
    <div className="TrackList">
    {/* <!-- You will add a map method that renders a set of Track components  --> */}
    {props.tracks.map(track => {
        return <Track track={track} key={track.id} onAdd={props.onAdd} isRemoval={props.isRemoval} onRemove={props.onRemove} />;
      })}
</div>
  );
}

export default TrackList;