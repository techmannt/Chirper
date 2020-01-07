import React from 'react';

const ChirpCard = (props) => {
  const chirpText = props.chirps.text;  // No object destructuring needed here!
  return (
    <>
      <div className="py-1">
        <div className="card">

          <div className="card-body">
            <h4 className="card-title">{chirpText}</h4>
          </div>

        </div>
      </div>
    </>
  );
};

export default ChirpCard;
