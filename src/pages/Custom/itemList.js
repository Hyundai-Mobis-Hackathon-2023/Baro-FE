import Box from './items/transit/Box';
import Casher from './items/store/Casher';
import Chair from './items/office/Chair';
import DisplayStand from './items/store/DisplayStand';
import IceBox from './items/transit/IceBox';
import Lamp from './items/living/Lamp';
import MedicalBed from './items/medical/MedicalBed';
import MedicalDisplay from './items/medical/MedicalDisplay';
import MedicalTool from './items/medical/MedicalTool';
import Pc from './items/office/Pc';
import Plant from './items/office/Plant';
import Refrigerator from './items/office/Refrigerator';
import Shelf from './items/transit/Shelf';
import ShopBag from './items/store/ShopBag';
import Sofa from './items/living/Sofa';
import Speaker from './items/entertainment/Speaker';
import Table from './items/living/Table';
import Tv from './items/entertainment/Tv';
import Bed from './items/living/Bed';

const itemList = [
  {
    id: 0,
    component: (position) => <Box position={position} />,
    name: '수납 상자',
    nameEng: 'box',
    category: 'transit',
    point: [0, 1, 2, 3, 4, 5],
  },
  {
    id: 1,
    component: (position) => <Casher position={position} />,
    name: '구매 키오스크',
    nameEng: 'casher',
    category: 'store',
    point: [3, 5],
  },
  {
    id: 2,
    component: (position) => <Chair position={position} />,
    name: '의자',
    nameEng: 'chair',
    category: 'office',
    point: [0, 1, 2],
  },
  {
    id: 3,
    component: (position) => <DisplayStand position={position} />,
    name: '가판대',
    nameEng: 'displayStand',
    category: 'store',
    point: [0, 1, 2],
  },
  {
    id: 4,
    component: (position) => <IceBox position={position} />,
    name: '냉동 창고',
    nameEng: 'iceBox',
    category: 'transit',
    point: [0, 2],
  },
  {
    id: 5,
    component: (position) => <Lamp position={position} />,
    name: '전등',
    nameEng: 'lamp',
    category: 'living',
    point: [0, 1, 2, 3, 4, 5],
  },
  {
    id: 6,
    component: (position) => <MedicalBed position={position} />,
    name: '의료용 침대',
    nameEng: 'medicalBed',
    category: 'medical',
    point: [1, 4],
  },
  {
    id: 7,
    component: (position) => <MedicalDisplay position={position} />,
    name: '의료 디스플레이',
    nameEng: 'medicalDisplay',
    category: 'medical',
    point: [0],
  },
  {
    id: 8,
    component: (position) => <MedicalTool position={position} />,
    name: '의료 장비함',
    nameEng: 'medicalTool',
    category: 'medical',
    point: [2],
  },
  {
    id: 9,
    component: (position) => <Pc position={position} />,
    name: 'PC',
    nameEng: 'pc',
    category: 'office',
    point: [0, 1, 2],
  },
  {
    id: 10,
    component: (position) => <Plant position={position} />,
    name: '화분',
    nameEng: 'plant',
    category: 'office',
    point: [0, 1, 2, 3, 4, 5],
  },
  {
    id: 11,
    component: (position) => <Refrigerator position={position} />,
    name: '냉장고',
    nameEng: 'refrigerator',
    category: 'office',
    point: [0, 1, 2],
  },
  {
    id: 12,
    component: (position) => <Shelf position={position} />,
    name: '선반',
    nameEng: 'shelf',
    category: 'transit',
    point: [0, 1, 2],
  },
  {
    id: 13,
    component: (position) => <ShopBag position={position} />,
    name: '쇼핑백',
    nameEng: 'shopBag',
    category: 'store',
    point: [0, 1, 2, 3, 4, 5],
  },
  {
    id: 14,
    component: (position) => <Sofa position={position} />,
    name: '쇼파',
    nameEng: 'sofa',
    category: 'living',
    point: [0, 1, 2],
  },
  {
    id: 15,
    component: (position) => <Speaker position={position} />,
    name: '스피커',
    nameEng: 'speaker',
    category: 'entertainment',
    point: [0, 1, 2, 3, 4, 5],
  },
  {
    id: 16,
    component: (position) => <Table position={position} />,
    name: '탁자',
    nameEng: 'table',
    category: 'living',
    point: [3, 4, 5],
  },
  {
    id: 17,
    component: (position) => <Tv position={position} />,
    name: 'TV',
    nameEng: 'tv',
    category: 'entertainment',
    point: [0, 1, 2],
  },
  {
    id: 18,
    component: (position) => <Bed position={position} />,
    name: '침대',
    nameEng: 'bed',
    category: 'living',
    point: [0, 3],
  },
];

export default itemList;
