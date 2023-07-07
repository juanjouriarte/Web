import React, { useState } from 'react';

const FrameImage = () => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  const handleChangeWidth = (e) => {
    setWidth(e.target.value);
  };

  const handleChangeHeight = (e) => {
    setHeight(e.target.value);
  };

  const imageStyle = {
    width: `${width}px`,
    height: `${height}px`,
    border: 'solid 10px #000',
    boxSizing: 'border-box',
    padding: '10px',
  };

  return (
    <div>
      <div style={imageStyle}>
        <img src="https://via.placeholder.com/200x200" alt="Placeholder" />
      </div>
      <div>
        <label htmlFor="width">Ancho:</label>
        <input type="number" id="width" value={width} onChange={handleChangeWidth} />
      </div>
      <div>
        <label htmlFor="height">Alto:</label>
        <input type="number" id="height" value={height} onChange={handleChangeHeight} />
      </div>
    </div>
  );
};

export default FrameImage;