import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import MobileLayout from '../../component/MobileLayout/MobileLayout';
import Typography from '../../component/Typography/Typhography';
import theme from '../../assets/theme/Theme';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Outline, Selection } from '@react-three/postprocessing';
import { create } from 'zustand';
import { useState } from 'react';
import { Suspense } from 'react';
import useSpline from '@splinetool/r3f-spline';
import SelectSize from '../../component/SelectSize/SelectSize';
import Living from './category/Living';
import Office from './category/Office';
import Entertainment from './category/Entertainment';

const Title = styled(Typography).attrs({ mainTitle: 'mainTitle' })`
  width: 100%;
  position: relative;
  top: 80px;
  left: 40px;
  line-height: 1.8;
`;
const SemiTitle = styled(Typography)`
  font-size: 12px;
  width: 100%;
  position: relative;
  top: 80px;
  left: 40px;
  line-height: 1.8;
`;

const ModelContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  top: 160px;
`;

const useStore = create((set) => ({ target: null, setTarget: (target) => set({ target }) }));

const Preset = () => {
  const { selectedCategory } = useParams();
  const { category, categoryEng } = theme;
  const [place, setPlace] = useState([null, null]);
  const { target, setTarget } = useStore();

  return (
    <MobileLayout>
      <Title>
        {category[categoryEng.indexOf(selectedCategory)]}용 테마의 <br />
        프리셋은 다음과 같아요.
      </Title>
      <SemiTitle>마음껏 회전하며 구경할 수 있어요</SemiTitle>
      <SelectSize />
      <ModelContainer>
        <Canvas
          orthographic
          camera={{ position: [-40, 25, 70], zoom: 10 }}
          onPointerMissed={() => setTarget(null)}
          style={{ backgroundColor: theme.colors.background }}
        >
          <Suspense>
            <hemisphereLight name='Default Ambient Light' intensity={0.3} />
            <OrbitControls makeDefault />
            <Selection>{categoryComponent[selectedCategory]}</Selection>
          </Suspense>
        </Canvas>
      </ModelContainer>
    </MobileLayout>
  );
};

export default Preset;

const categoryComponent = {
  living: <Living />,
  office: <Office />,
  entertainment: <Entertainment />,
};