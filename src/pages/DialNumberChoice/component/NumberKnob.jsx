import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Margin from "../../../component/Margin/Margin";
import Typography from "../../../component/Typography/Typhography";

const CarouselWrapper = styled.div`
  width: 100%;
  height: 114px;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    width: 266px;
    margin: 0 auto;
  }

  .slick-slide div {
    cursor: pointer;
    ${(props) => props.theme.flex.flexCenterColumn}
  }

  .slick-track {
    overflow-x: hidden;
  }
`;

const CardWrapper = styled.div`
  width: 38px;
  height: 144px;
  margin-top: 40px;
  text-align: center;
`;

const Graduation = styled.div`
  width: 2px;
  height: ${(props) => (props.current ? "42px" : "24px")};
  margin-left: 18px;
  margin-top: ${(props) => (props.current ? "0px" : "9px")};
  margin-bottom: ${(props) => (props.current ? "0px" : "9px")};
  background-color: ${(props) =>
    props.current
      ? props.theme.colors.mainRed
      : props.side
      ? props.theme.colors.gray
      : props.theme.colors.lightGray};
  transition: 0.5s;
`;

const NumberKnob = ({ maxNumber, setMaxNumber }) => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    focusOnSelect: true,
    swipeToSlide: true,
    afterChange: (current) => setMaxNumber((current + 1) % 10),
  };

  return (
    <CarouselWrapper>
      <StyledSlider {...settings}>
        {numbers.map((n) => {
          return (
            <CardWrapper index={n} key={n}>
              <Margin height="23" />
              <Graduation
                current={maxNumber === n}
                side={
                  (maxNumber + 8) % 10 === n ||
                  (maxNumber + 9) % 10 === n ||
                  (maxNumber + 11) % 10 === n ||
                  (maxNumber + 12) % 10 === n
                }
              />
              <Margin height="12" />
              <Typography
                dialText
                color={
                  maxNumber === n
                    ? "mainRed"
                    : (maxNumber + 8) % 10 === n ||
                      (maxNumber + 9) % 10 === n ||
                      (maxNumber + 11) % 10 === n ||
                      (maxNumber + 12) % 10 === n
                    ? "gray"
                    : "lightGray"
                }
              >
                {n === 0 ? "10" : "0" + n}
              </Typography>
            </CardWrapper>
          );
        })}
      </StyledSlider>
    </CarouselWrapper>
  );
};

export default NumberKnob;
