import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {

  return (
    <div className="VideoFooter">
      <div className="VideoFooter_text">
        <h3>@{name}</h3>
        <p>{description}</p>

        <div className="VideoFooter_music">
          <MusicNoteIcon/>
          
          <div className="VideoFooter_musictext">
            <p>{music}</p>
          </div>
        </div>
      </div>
      
      <img
        className="VideoFooter_record"
        alt="Record" 
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
      
    </div>
  );
}

export default VideoFooter;
