import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Typography from "../../../component/Typography/Typhography";
import Internet from "./INTERNET.png";
import Car from "./CAR.png";
import Edit from "./EDIT.png";
import SuitCase from "./SUITCASE.png";
import Margin from "../../../component/Margin/Margin";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ThemeAllWapper = styled.div`
    width:310px;
    height:auto;
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
    overflow:hidden;
`

//테마별 이미지BOX
const ThemeImgBox = styled.div`
    width: 240px;
    height:240px;
    background-color: #FFFFFF9C;
    border-radius: 100%;
    border: 1px solid #D9D9D9;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    margin-top: 50px;
    display:flex;
    justify-content:center;
    align-items: center;
`


//테마별 내용 설명 위치 조정
const ContentTextWrapper = styled.div`
    width:310px;
    height:auto;
    margin-top:20px;
`

const SliderWrapper = styled.div`
  overflow : hidden;

`

//테마 배열 : 테마 추가시 아래 형태로 추가하면 가능
const themeArr = [{
    img:Internet,
    kind:"테마1",
    des:"엔터테인먼트 PBV는 사용자에게 오락, 방송 등에 적합한 환경을 제공합니다. 훌륭한 사운드와 4K UHD가 마련된 공간을 만나보세요."
},{
    img:Car,
    kind:"테마2",
    des:"엔터테인먼트 PBV는 사용자에게 오락, 방송 등에 적합한 환경을 제공합니다. 훌륭한 사운드와 4K UHD가 마련된 공간을 만나보세요."
},{
    img:Edit,
    kind:"테마3",
    des:"엔터테인먼트 PBV는 사용자에게 오락, 방송 등에 적합한 환경을 제공합니다. 훌륭한 사운드와 4K UHD가 마련된 공간을 만나보세요."
}
,{
    img:SuitCase,
    kind:"테마4",
    des:"엔터테인먼트 PBV는 사용자에게 오락, 방송 등에 적합한 환경을 제공합니다. 훌륭한 사운드와 4K UHD가 마련된 공간을 만나보세요."
}

];

export default class SimpleSlider extends Component {

    

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <SliderWrapper>
        <Slider {...settings}>
        {themeArr.map((album)=>{
            return(
                <div>
                    <ThemeAllWapper>
                        <ThemeImgBox><img src ={album.img}/></ThemeImgBox>
                        <Margin width="390" height="32"/>
                        <Typography mainTitle>{album.kind}</Typography>
                        <ContentTextWrapper><Typography contentText color="darkGray">{album.des}</Typography></ContentTextWrapper>
                    </ThemeAllWapper>
                </div>
            )
        })}
          
        </Slider>

      </SliderWrapper>
      
    );
  }
}