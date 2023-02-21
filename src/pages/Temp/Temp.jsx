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
import InfotainmentLayout from '../../component/InfotainmentLayout/InfotainmentLayout';

const Temp = () => {
  return <InfotainmentLayout>hi</InfotainmentLayout>;
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
