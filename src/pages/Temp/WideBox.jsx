import { useRef, useState } from 'react';
import { Select } from '@react-three/postprocessing';

const WideBox = (props) => {
  const ref = useRef();
  const [hovered, hover] = useState(null);

  return (
    <Select enabled={hovered}>
      <mesh ref={ref} {...props} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
        <boxGeometry args={[2, 0.1, 2]} />
        <meshStandardMaterial color='lightgray' />
      </mesh>
    </Select>
  );
};

export default WideBox;
