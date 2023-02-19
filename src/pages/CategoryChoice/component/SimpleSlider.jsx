import React, { Component, useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Typography from '../../../component/Typography/Typhography';
import Internet from './INTERNET.png';
import Car from './CAR.png';
import Edit from './EDIT.png';
import Health from "./Health.png"
import Living from "./Living.png"
import Store from "./Store.png"
import Margin from '../../../component/Margin/Margin';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderWrapper = styled.div`
  width: 390px;
`;

const ThemeAllWrapper = styled.div`
  width: 100%;
  height: auto;
  flex-direction: column;
  flex-wrap: wrap;
`;

const ThemeImageWrapper = styled.div`
  width: 390px;
  ${(props) => props.theme.flex.flexCenter}
`;

//테마별 이미지BOX
const ThemeImgBox = styled.div`
  width: 240px;
  height: 240px;
  background: linear-gradient(139.44deg, rgba(255, 255, 255, 0.61) 14.1%, rgba(243, 243, 243, 0.12) 84.31%);
  border-radius: 100%;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 테마 타이틀
const TitleText = styled(Typography)`
  width: 390px;
  height: auto;
  text-align: center;
`;

//테마별 내용 설명 위치 조정
const ContentText = styled(Typography)`
  width: 390px;
  height: auto;
  padding-left: 40px;
  padding-right: 40px;
`;

//테마 배열 : 테마 추가시 아래 형태로 추가하면 가능
const themeArr = [
  {
    num: 1,
    img: Edit,
    kind: '오피스',
    des: '오피스 PBV는 사용자의 빠른 일처리를 도와줄 환경을 제공합니다. 당신을 도와주기 위해 준비된 다양한 오피스형 가구를 통해 편안한 일처리를 해보세요.',
  },
  {
    num: 2,
    img: Living,
    kind: '주거용',
    des: '주거용 PBV는 차량이 기존의 주거 공간의 연장선이 될 수 있도록 합니다. 원하는 가구들로 공간을 재해석해 새로운 공간으로 꾸며보세요.',
  },
  {
    num: 3,
    img: Internet,
    kind: '엔터테인먼트',
    des: '엔터테인먼트 PBV는 사용자에게 오락, 방송 등에 적합한 환경을 제공합니다. 훌륭한 사운드와 4K UHD가 마련된 공간을 만나보세요.',
  },
  {
    num: 4,
    img: Store,
    kind: '스토어',
    des: '스토어 PBV는 기존의 고객이 찾아가는 방식에서 고객에게 직접 찾아갈 수 있도록 솔루션을 제공해요. 다양한 상품을 진열하고 판매할 수 있는 이동형 스토어를 마련해보세요.',
  },
  {
    num: 5,
    img: Health,
    kind: '의료용',
    des: '의료용 PBV는 사용자가 다양한 의료용 센서를 통해 환자의 상태를 파악하고 응급상황에 맞는 적절한 조치를 취할 수 있도록 보조합니다.',
  },
  {
    num: 6,
    img: Car,
    kind: '운송',
    des: '운송 PBV는 다양한 물품을 수납하고 운송할 수 있는 환경을 제공합니다. 냉동 창고와 선반으로 물품을 신선하고 안전하게 이동해보세요.',
  }
];

export default function SimpleSlider({ currentSlide, setCurrentSlide }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <SliderWrapper>
      <Slider {...settings} initialSlide={0} beforeChange={(slide, newSlide) => setCurrentSlide(newSlide+1)} >
        {themeArr.map((album) => {
          return (
            <ThemeAllWrapper id={album.num} key={album.num}>
              <ThemeImageWrapper>
                <ThemeImgBox>
                  <img src={album.img} />
                </ThemeImgBox>
              </ThemeImageWrapper>
              <Margin height='32' />
              <TitleText mainTitle>{album.kind}</TitleText>
              <Margin height='24' />
              <ContentText contentText color='darkGray'>
                {album.des}
              </ContentText>
            </ThemeAllWrapper>
          );
        })}
      </Slider>
    </SliderWrapper>
  );
}
