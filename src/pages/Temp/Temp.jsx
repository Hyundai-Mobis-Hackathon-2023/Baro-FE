// three.js 테스트를 위해 만든 임시 페이지

import { Selection, Select, EffectComposer, Outline, Bloom } from '@react-three/postprocessing';
import { Environment, OrbitControls, PerspectiveCamera, Stars, TransformControls, useCursor } from '@react-three/drei';
import { Canvas, Camera, useLoader, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { create } from 'zustand';
import { useControls } from 'leva';
import styled from 'styled-components';

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
        onClick={(e) => {
          setTarget(e.eventObject);
          console.log(e);
        }}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        onPointerMove={(e) => console.log(e.eventObject.position)}
      >
        <primitive object={gltf.scene} scale={0.4} />
      </mesh>
    </Select>
  );
};

function Box(props) {
  const ref = useRef();
  const [hovered, hover] = useState(null);
  const setTarget = useStore((state) => state.setTarget);
  useCursor(hovered);
  // useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta));
  return (
    <Select enabled={hovered}>
      <mesh
        ref={ref}
        {...props}
        onClick={(e) => setTarget(e.object)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        onPointerMove={(e) => console.log(e.eventObject.position)}
      >
        <boxGeometry />
        <meshStandardMaterial color='orange' />
      </mesh>
    </Select>
  );
}

function WideBox(props) {
  const ref = useRef();
  const [hovered, hover] = useState(null);
  // useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta));
  return (
    <Select enabled={hovered}>
      <mesh ref={ref} {...props} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
        <boxGeometry args={[2, 0.1, 2]} />
        <meshStandardMaterial color='lightgray' />
      </mesh>
    </Select>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`;

const itemList = [
  {
    id: 0,
    component: (position) => <Model position={position} location='models/old_mg_car/scene.gltf' />,
    name: 'car',
    point: [0, 1],
  },
  {
    id: 1,
    component: (position) => <Model position={position} location='models/future_bench/scene.gltf' />,
    name: 'bench',
    point: [0],
  },
  {
    id: 2,
    component: (position) => <Model position={position} location='models/nirvana_massage_chair/scene.gltf' />,
    name: 'massage_chair',
    point: [1],
  },
];

const coordinateList = [
  [0, -0.5, 0],
  [0, -0.5, 2.5],
];

const Temp = () => {
  const [place, setPlace] = useState([null, null]);
  const { target, setTarget } = useStore();
  const { mode } = useControls({
    mode: { value: 'translate', options: ['translate', 'rotate', 'scale'] },
  });

  // 역할 분리 필요
  const placeHandler = (e) => {
    const { id } = e.target; // 선택된 아이템의 Id
    console.log(id);
    // 1개의 아이템당 2개의 장착 포인트 존재, 따라서 해당 장착포인트에 이미 아이템이 있는지 검증 필요
    // 객체의 포인트를 받아와서 순회하며 검사해야한다.
    const isPlaced = false;
    const pointList = itemList[id].point;

    // 이미 장착된 아이템이라면 제거
    if (place.includes(id)) {
      const coordinate = place.indexOf(id);
      const copy = [...place];
      copy[coordinate] = null;
      setPlace(copy);
      return;
    }

    // 장착 포인트를 순회하며, 가능한 곳에 장착
    pointList.forEach((p) => {
      if (!place[p]) {
        const copy = [...place];
        copy[p] = id;
        setPlace(copy);
        isPlaced = true;
      }
    });

    // 마지막 포인트라면 반드시 장착해야하므로(덮어쓰더라도)
    if (!isPlaced) {
      const copy = [...place];
      copy[pointList[pointList.length - 1]] = id;
      setPlace(copy);
    }
  };

  return (
    <div style={{ height: '500px' }}>
      <Canvas onPointerMissed={() => setTarget(null)} height='100%' style={{ backgroundColor: 'black' }}>
        {/* <ambientLight intensity={1} color='#ffd400' /> */}
        <ambientLight intensity={0.5} />
        {/* <directionalLight position={[0, 10, 0]} intensity={1} color='red' /> */}
        {/* <pointLight position={[10, 10, 10]} /> */}
        {/* <ambientLight intensity={0.5} /> */}
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Environment preset='sunset' background />
        <OrbitControls makeDefault />

        <Selection>
          <EffectComposer multiSampling={8} autoClear={false}>
            <Outline blur visibleEdgeColor='white' edgeStrength={500} width={1000} />
          </EffectComposer>
          <WideBox position={[0, -0.5, 2.5]} />
          <WideBox position={[0, -0.5, 0]} />
          {/* <Model position={[0, -0.5, 0]} location='models/old_mg_car/scene.gltf' />
          <Model position={[0, -0.5, 2.5]} location='models/future_bench/scene.gltf' /> */}
          {/* <Model position={[0, 0, 1]} location='models/nirvana_massage_chair/scene.gltf' /> */}
          {place.map((p, i) => p && itemList[p].component(coordinateList[i]))}

          {target && <TransformControls object={target} mode={mode} />}
        </Selection>
      </Canvas>
      {place.map((p) => (p ? p : '빔'))}
      <Container>
        {itemList.map((item, i) => (
          <button id={item.id} type='button' onClick={placeHandler}>
            {item.name}
          </button>
        ))}
      </Container>
    </div>
  );
};

export default Temp;
