import React from 'react';
import { Image, Transformation } from 'cloudinary-react';

const Selfie = props => {
  const frame = props.color === 'red' ? 'frame-demo1' : 'frame-demo2';
  return (
    <Image className={props.padRight ? 'right-pad' : 'left-pad'} publicId={props.url} type="fetch" fetchFormat="png" loading="lazy">
        <Transformation effects="dropshadow" height="500" quality="auto:eco" width="500" crop="fill" />
        <Transformation effects="dropshadow" height="500" overlay={`Overlays:${frame}`} width="500" crop="limit" />
        <Transformation width="250" crop="scale" />
        <Transformation angle={Math.round((Math.round(Math.random()) * 2 - 1)*(Math.random()*2))}/>
    </Image>
  )
};

export default Selfie;
