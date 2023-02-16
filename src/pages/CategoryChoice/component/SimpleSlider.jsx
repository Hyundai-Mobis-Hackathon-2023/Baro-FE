import React, { Component, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Typography from "../../../component/Typography/Typhography";
import Internet from "./INTERNET.png";
import Car from "./CAR.png";
import Edit from "./EDIT.png";
import SuitCase from "./SUITCASE.png";
import Margin from "../../../component/Margin/Margin";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderWrapper = styled.div`
  width: 390px;
`;

const ThemeAllWapper = styled.div`
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
  background: linear-gradient(
    139.44deg,
    rgba(255, 255, 255, 0.61) 14.1%,
    rgba(243, 243, 243, 0.12) 84.31%
  );
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
    img: Internet,
    kind: "테마1",
    des: "엔터테인먼트 PBV는 사용자에게 오락, 방송 등에 적합한 환경을 제공합니다. 훌륭한 사운드와 4K UHD가 마련된 공간을 만나보세요.",
  },
  {
    num: 2,
    img: Car,
    kind: "테마2",
    des: "엔터테인먼트 PBV는 사용자에게 오락, 방송 등에 적합한 환경을 제공합니다. 훌륭한 사운드와 4K UHD가 마련된 공간을 만나보세요.",
  },
  {
    num: 3,
    img: Edit,
    kind: "테마3",
    des: "엔터테인먼트 PBV는 사용자에게 오락, 방송 등에 적합한 환경을 제공합니다. 훌륭한 사운드와 4K UHD가 마련된 공간을 만나보세요.",
  },
  {
    num: 4,
    img: SuitCase,
    kind: "테마4",
    des: "엔터테인먼트 PBV는 사용자에게 오락, 방송 등에 적합한 환경을 제공합니다. 훌륭한 사운드와 4K UHD가 마련된 공간을 만나보세요.",
  },
];

export default function SimpleSlider() {
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
      <Slider {...settings}>
        {themeArr.map((album) => {
          console.log(album);
          return (
            <ThemeAllWapper key={album.num}>
              <ThemeImageWrapper>
                <ThemeImgBox>
                  <img src={album.img} />
                </ThemeImgBox>
              </ThemeImageWrapper>
              <Margin height="32" />
              <TitleText $mainTitle>{album.kind}</TitleText>
              <Margin height="24" />
              <ContentText $contentText color="darkGray">
                {album.des}
              </ContentText>
            </ThemeAllWapper>
          );
        })}
      </Slider>
    </SliderWrapper>
  );
}
