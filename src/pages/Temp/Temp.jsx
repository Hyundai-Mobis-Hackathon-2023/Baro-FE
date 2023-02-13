// three.js 테스트를 위해 만든 임시 페이지
import { Selection, EffectComposer, Outline } from '@react-three/postprocessing';
import { Environment, OrbitControls, TransformControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';
import { create } from 'zustand';
import { useControls } from 'leva';
import styled from 'styled-components';
import Model from './Model';
import arrayReplace from './ArrayReplace';
import WideBox from './WideBox';
import car from './items/car.png';
import bench from './items/bench.png';
import massage_chair from './items/massage_chair.png';

const useStore = create((set) => ({ target: null, setTarget: (target) => set({ target }) }));

const Temp = () => {
  const [place, setPlace] = useState([null, null]);
  const { target, setTarget } = useStore();

  const placeHandler = (e) => {
    const { id } = e.currentTarget; // 선택된 아이템의 Id
    let isPlaced = false;
    const pointList = itemList[id].point;
    // 1개의 아이템당 2개(임시)의 장착 포인트 존재, 따라서 해당 장착 포인트에 이미 아이템이 있는지 검증 필요
    // 객체의 포인트를 받아와서 순회하며 검사해야한다.

    // 이미 장착된 아이템이라면 제거
    if (place.includes(id)) {
      const item = place.indexOf(id);
      setPlace(arrayReplace(place, item, null));
      return;
    }

    // 장착 포인트를 순회하며, 가능한 곳에 장착
    pointList.forEach((p) => {
      if (!place[p]) {
        setPlace(arrayReplace(place, p, id));
        isPlaced = true;
      }
    });

    // 마지막 포인트라면 반드시 장착해야하므로 원래 해당 위치에 있던 아이템을 무시하고 덮어쓴다.
    if (!isPlaced) {
      const lastPoint = pointList[pointList.length - 1];
      setPlace(arrayReplace(place, lastPoint, id));
    }
  };

  return (
    <div style={{ height: '500px' }}>
      <Canvas onPointerMissed={() => setTarget(null)} height='100%' style={{ backgroundColor: 'black' }}>
        <ambientLight intensity={0.5} color='gold' />
        <pointLight position={[0, 3, 4]} color='blue' />
        <pointLight position={[0, 3, -4]} color='orange' />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Environment preset='sunset' background />
        <OrbitControls makeDefault />

        <Selection>
          <EffectComposer multiSampling={8} autoClear={false}>
            <Outline blur visibleEdgeColor='white' edgeStrength={500} width={1000} />
          </EffectComposer>
          <WideBox position={[0, -0.5, 2.5]} />
          <WideBox position={[0, -0.5, 0]} />
          {place.map((p, i) => p && itemList[p].component(coordinateList[i]))}
          {target && <TransformControls object={target} />}
        </Selection>
      </Canvas>
      {place.map((p) => (p ? ` [${itemList[p].name}] ` : '[empty]'))}
      <Container>
        {itemList.map((item, i) => (
          <button id={item.id} type='button' onClick={placeHandler}>
            <img src={require(`./items/${item.name}.png`)} />
            {item.name}
          </button>
        ))}
      </Container>
    </div>
  );
};

const Container = styled.div`
  height: 150px;
  display: flex;

  button {
    border: 1px solid lightGray;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    background-color: white;
  }

  img {
    width: 100px;
  }
`;

// 아이템의 번호, 컴포넌트, 이름, 가능한 위치 목록을 담은 배열
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

// 가구를 놓을 고정된 위치 좌표
const coordinateList = [
  [0, -0.5, 0],
  [0, -0.5, 2.5],
];

export default Temp;
