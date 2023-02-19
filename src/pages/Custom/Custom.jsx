import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import MobileLayout from '../../component/MobileLayout/MobileLayout';
import Typography from '../../component/Typography/Typhography';
import theme from '../../assets/theme/Theme';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { create } from 'zustand';
import { useState } from 'react';
import SelectSize from '../../component/SelectSize/SelectSize';
import CustomCar from './items/CustomCar';
import itemList from './itemList';
import arrayReplace from '../Temp/ArrayReplace';
import Item from './components/Item';
import Items from './components/Items';
import CategoryTag from './components/CategoryTag';
import Header from './components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ModelContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 150px;
`;

const useStore = create((set) => ({ target: null, setTarget: (target) => set({ target }) }));

const Custom = () => {
  const { category, categoryEng } = theme;
  const [place, setPlace] = useState(new Array(6).fill(null));
  const { target, setTarget } = useStore();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const tags = ['전체', ...category];
  const tagsEng = ['all', ...categoryEng];
  const navigate = useNavigate();

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

  const postPlace = () => {
    axios
      .post(
        `${process.env.REACT_APP_API}/custom/setCustomList`,
        {
          customNumberList: place,
        },
        {
          headers: {
            Authorization: `${localStorage.getItem('accessToken')}`,
          },
        }
      )
      .then((r) => {
        console.log(r.data);
        localStorage.setItem('customRecord', r.data.result.customRecord);
        navigate('/make-start');
      });
  };

  return (
    <MobileLayout>
      <Header onClick={postPlace} />
      <SelectSize />
      <ModelContainer>
        <Canvas
          orthographic
          camera={{ position: [-40, 25, 70], zoom: 10 }}
          onPointerMissed={() => setTarget(null)}
          style={{ backgroundColor: theme.colors.background }}
        >
          <directionalLight
            name='Directional Light'
            castShadow
            intensity={0.62}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-40}
            shadow-camera-right={40}
            shadow-camera-top={40}
            shadow-camera-bottom={-500}
            position={[-1091.88, 300, 300]}
          />
          <hemisphereLight name='Default Ambient Light' intensity={0.3} />
          <OrbitControls makeDefault />
          {place.map((itemSocket, i) => itemSocket && itemList[itemSocket].component(coordinateList[i]))}
          <CustomCar />
        </Canvas>
        {/* {tags.map((name, i) => (
          <button value={selectedCategory} onClick={() => setSelectedCategory(tagsEng[i])}>
            {name}
          </button>
        ))} */}
        <Items
          tags={tags}
          tagsEng={tagsEng}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        >
          {selectedCategory === 'all'
            ? itemList.map((item) => <Item name={item.name} photo={item.nameEng} id={item.id} onClick={placeHandler} />)
            : itemList
                .filter((item) => item.category === selectedCategory)
                .map((item) => <Item name={item.name} photo={item.nameEng} id={item.id} onClick={placeHandler} />)}
        </Items>
      </ModelContainer>
    </MobileLayout>
  );
};

// 가구를 놓을 고정된 위치 좌표
const coordinateList = [
  [1, 0, -3.7],
  [1, 0, 5],
  [1, 0, 13.7],
  [-8, 0, -3.7],
  [-8, 0, 5],
  [-8, 0, 13.7],
];

export default Custom;
