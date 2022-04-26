import React from 'react'
import { OptionsField } from '../../components';
import { CLEAR_HISTORY } from '../../constants/history-constants';
import { useAuth } from '../../context/auth-context';
import { useHistory } from '../../context/history-context';
import { getService } from '../../services/combinedService';
import "./history.css"

export const History = () => {
  const {historyState:{history},historyDipatcher} = useHistory();
  const {
    user: { tokenVal },
  } = useAuth();
 const all = {_id:"all"}
  const clearAllHistoryHandler = async()  =>
  {
    const data = await getService("history", "delete", tokenVal, all);
    historyDipatcher({ type: CLEAR_HISTORY, payload: data.history });
  }

  return (
    <div className="flex-row display-details-container">
    {history.length === 0 ? (
      <h1>No history Found</h1>
    ) : (
      <>
        <div className="display-details">
          <img
            src={`https://img.youtube.com/vi/${
              history[history.length - 1]?._id
            }/maxresdefault.jpg`}
            alt=""
          />
          <div className="display-title">HISTORY</div>
        </div>
        <div className="flex-col gap-btwn listing-wrap">
        
          {history.map((video) => {
            return (
              <div className="flex-row playlist-vid" key={video._id}>
                <img
                  src={`https://img.youtube.com/vi/${video._id}/maxresdefault.jpg`}
                  alt=""
                />
                <div className="flex-col vid-details">
                  <div className="flex-row spc-btwn title-optionicon-wrap">
                    <h3>{video.title} </h3>
                  </div>
                  <span>⚫ {video.creator} ✔ </span>
                </div>
                <OptionsField vid={video} />
              </div>
            );
          })}
          <button onClick={clearAllHistoryHandler} className="clear-btn" >CLEAR HISTORY</button>
        </div>
      </>
    )}
 
  </div>
  )
}
