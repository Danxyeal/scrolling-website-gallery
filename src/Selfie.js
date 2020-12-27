import React from 'react';
import { Image, Transformation } from 'cloudinary-react';

const Selfie = props => {
  const frame = props.color === 'red' ? 'frame-demo1' : 'frame-demo1';
  return (
    <Image className={props.padRight ? 'right-pad' : 'left-pad'} publicId={props.url} type="fetch" fetchFormat="png" loading="lazy">
        <Transformation height="500" quality="auto:eco" width="500" crop="fill" />
        <Transformation height="500" overlay={`Overlays:${frame}`} width="500" crop="limit" />
        <Transformation width="200" crop="scale" />
        <Transformation angle={Math.round((Math.round(Math.random()) * 2 - 1)*(Math.random()*2))}/>
    </Image>
  )
};

export default Selfie;
