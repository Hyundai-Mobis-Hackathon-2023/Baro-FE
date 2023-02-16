import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MobileLayout from "../../component/MobileLayout/MobileLayout";
import Typography from "../../component/Typography/Typhography";
import theme from "../../assets/theme/Theme";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { create } from "zustand";
import { useState } from "react";
import SelectSize from "../../component/SelectSize/SelectSize";
import Living from "./category/Living";
import Office from "./category/Office";
import Entertainment from "./category/Entertainment";
import Store from "./category/Store";
import Transit from "./category/Transit";
import Medical from "./category/Medical";
import Button from "../../component/Button/Button";

const Title = styled(Typography).attrs({ $mainTitle: "$mainTitle" })`
  width: 100%;
  position: relative;
  top: 80px;
  padding-left: 40px;
  line-height: 1.8;
`;
const SemiTitle = styled(Typography)`
  ${({ theme }) => theme.font.contentText}
  font-size: 14px;
  width: 100%;
  position: relative;
  top: 80px;
  padding-left: 40px;
  line-height: 1.8;
`;

const ModelContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  top: 160px;
`;

const ButtonContainer = styled.div`
  width: 336px;
  display: flex;
  justify-content: space-between;
`;

const useStore = create((set) => ({
  target: null,
  setTarget: (target) => set({ target }),
}));

const Preset = () => {
  const { selectedCategory } = useParams();
  const { category, categoryEng } = theme;
  const [place, setPlace] = useState([null, null]);
  const { target, setTarget } = useStore();
  const navigate = useNavigate();
  const btnStyle = {
    position: "absolute",
    bottom: "72px",
  };

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
          <hemisphereLight name="Default Ambient Light" intensity={0.3} />
          <OrbitControls makeDefault />
          {categoryComponent[selectedCategory]}
        </Canvas>
      </ModelContainer>
      <ButtonContainer style={btnStyle}>
        <Button bgColor="black" middle onClick={() => navigate("/")}>
          다음 단계
        </Button>
        <Button bgColor="mainRed" middle onClick={() => navigate("/custom")}>
          커스텀
        </Button>
      </ButtonContainer>
    </MobileLayout>
  );
};

export default Preset;

const categoryComponent = {
  living: <Living />,
  office: <Office />,
  entertainment: <Entertainment />,
  store: <Store />,
  transit: <Transit />,
  medical: <Medical />,
};
