import React, { useState } from "react";

function MusicPlayer() {
  const handlePlay = (): void => {
    console.log("handle play");
    // Todo: hanlde play
  };

  const changeVolume = (e: any): void => {
    console.log(`updating volume to ${e.target.value}`);
    // Todo: adjust volume
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-3 col-md-4" />
          <div className="col-xs-6 col-md-4">
            ...
            <div className="col-xs-12 text-center">
              <div className="btn-group btn-group-lg">
                <button type="button" className="btn btn-primary mr-2" onClick={handlePlay}>
                  Play/Pause
                </button>
                <input type="range" id="volume" name="volume" className="
                      control-volume" min="0" max="2" defaultValue="1" list="gain-vals" step="0.01"
                  onChange={changeVolume}/>
              </div>
            </div>
          </div>
        <div className="col-xs-3 col-md-4" />
      </div>
</div>
  )
}

export default MusicPlayer;
