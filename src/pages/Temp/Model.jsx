import { useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { create } from 'zustand';
import { useCursor } from '@react-three/drei';
import { Select } from '@react-three/postprocessing';

const useStore = create((set) => ({ target: null, setTarget: (target) => set({ target }) }));

const Model = (props) => {
  const gltf = useLoader(GLTFLoader, props.location); // pwd : public 폴더. 얘를 기준으로 위치 기입
  const ref = useRef();
  const [hovered, hover] = useState(null);
  const setTarget = useStore((state) => state.setTarget);
  useCursor(hovered);

  return (
    <Select enabled={hovered}>
      <mesh
        ref={ref}
        {...props}
        onClick={(e) => setTarget(e.eventObject)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        onPointerMove={(e) => console.log(e.eventObject.position)}
      >
        <primitive object={gltf.scene} scale={0.4} />
      </mesh>
    </Select>
  );
};

export default Model;
