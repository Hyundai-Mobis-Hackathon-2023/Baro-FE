import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import styled from "styled-components";
import React, { Component } from 'react';
import {FaLocationArrow} from 'react-icons/fa'
import {SlDrop} from 'react-icons/sl'
import Margin from "../../../component/Margin/Margin";
import {BsFillBrightnessHighFill} from 'react-icons/bs'

const Wrapper =styled.div`
    width: 568px;
    height: 516px;
    background: rgba(0, 0, 0, 0.6);
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`
const BackgroundImg = styled.div`
    width: 568px;
    height: 516px;
    border-radius: 20px;
    background-image: url("https://i.ibb.co/BKTmcQV/Rectangle-89.png");
    background-size: cover;
`
const Title = styled.div`
    font-family: 'Pretendard Variable';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    color: #FFFFFF;
`
const WeatherText = styled.div`
    font-family: 'Pretendard Variable';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    color: #FFFFFF;
`
const TemperText = styled.div`
    font-family: 'Pretendard Variable';
    font-size: 90px;
    font-weight: 600;
    color: #FFFFFF;
    margin-left: 49px;
`

const TitleWrapper = styled.div`
    width: auto;
    height: auto;
    padding-top: 45px;
    margin-left: 50px;
`
const WeatherImg = styled.img`
    width: 100px;
    height: 100px;

`
const ImgFlex = styled.div`
    width: 100%;
    height: auto;
    display:flex;
    justify-content: right;
`
const WeatherWrapper = styled.div`
    width: auto;
    height: auto;
    margin-top: 46px;
    margin-right: 41px;
`
const SpaceAround = styled.div`
    width: 100%;
    height: auto;
    display:flex;
    justify-content: space-between;
`
const MaxMin = styled.div`
    font-family: 'Pretendard Variable';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #BEBEBE;
    margin-left: 50px;
    margin-top: 25x;
`
const HumidityText = styled.div`
    font-family: 'Pretendard Variable';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    color: #FFFFFF;
    margin-right: 52px;
    display:flex;
`
const NextWeatherBox = styled.div`
    width: 485px;
    height: 186px;
    background: rgba(125, 134, 155, 0.6);
    border-radius: 20px;
    margin-left: 41px;
    margin-top: 29px;
    display: flex;
    justify-content: center; 

`
const Section = styled.div`
    width: 160px;
    height: 100%;
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const DayText = styled.div`
    font-family: 'Pretendard Variable';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: #FFFFFF;
    text-align: center;
`
const Bar = styled.div`
    width: 0px;
    height: 105.02px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    margin-top: 44px;
`

class Weather extends Component {
    // 상태 변수 정의
    constructor(props) {
        super(props);
        this.state = { temp: 0, temp_max:0, temp_min:0,  humidity:0 ,desc: '', icon: '', loading: true }
    }
    // 컴포넌트 생성 후 날씨 정보 조회
    componentDidMount() {
        const cityName = 'Seoul';
        const apiKey = process.env.REACT_APP_WEATHER_KEY;
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

        axios.get(url)
            .then(responseData => {
                console.log(responseData);
                const data = responseData.data;
                this.setState({
                    temp: data.main.temp,
                    temp_max : data.main.temp_max,
                    temp_min : data.main.temp_min,
                    humidity: data.main.humidity,
                    desc: data.weather[0].description,
                    icon: data.weather[0].icon,
                    loading: false
                });
            })
            .catch(error => console.log(error));

    }
    // 날씨 정보 출력
    render() {
        const imgSrc = `http://openweathermap.com/img/w/${this.state.icon}.png`;
        if (this.state.loading) {
            return <p>Loading</p>;
        } else {
            return (
                <BackgroundImg>
                                    
                    <Wrapper>
                        <SpaceAround>
                            <div>
                                <TitleWrapper><Title>서울특별시{"  "}<FaLocationArrow size="18"/></Title></TitleWrapper> 
                                <Margin width="50" height="38"/>
                                <TemperText>{(this.state.temp-273.15).toFixed(0)}°</TemperText>
                            </div>
                            <WeatherWrapper>
                                <ImgFlex><WeatherImg src={imgSrc}/> </ImgFlex>
                                <WeatherText>{this.state.desc}</WeatherText>
                            </WeatherWrapper>
                        </SpaceAround>

                        <SpaceAround>
                            <MaxMin>최고: {(this.state.temp_max-273.15).toFixed(0)}° 최저: {(this.state.temp_min-273.15).toFixed(0)}°</MaxMin>
                            <HumidityText><SlDrop size="22" style={{marginTop:"7px",marginRight:"8px"}}/>{this.state.humidity}<div style={{fontSize:"24px" ,marginTop:"10px", marginLeft:"2px"}}>%</div></HumidityText>
                        </SpaceAround>

                        <NextWeatherBox>    
                        <Section>
                        <Margin width="160" height="20" />
                                <DayText>월</DayText>
                                <Margin width="160" height="10" />
                                <BsFillBrightnessHighFill size="50" color="FBC02D"/>
                                <Margin width="160" height="18" />
                                <DayText  style={{fontWeight:"400"}}>10°&nbsp;&nbsp;&nbsp;0°</DayText>
                            </Section>
                            <Bar/>
                            <Section>
                            <Margin width="160" height="20" />
                                <DayText>화</DayText>
                                <Margin width="160" height="10" />
                                <BsFillBrightnessHighFill size="50" color="FBC02D"/>
                                <Margin width="160" height="18" />
                                <DayText  style={{fontWeight:"400"}}>10°&nbsp;&nbsp;&nbsp;1°</DayText>
                            </Section>
                            <Bar/>
                            <Section>
                                <Margin width="160" height="20" />
                                <DayText>수</DayText>
                                <Margin width="160" height="10" />
                                <BsFillBrightnessHighFill size="50" color="FBC02D"/>
                                <Margin width="160" height="18" />
                                <DayText  style={{fontWeight:"400"}}>10°&nbsp;&nbsp;&nbsp;1°</DayText>
                            </Section>
                        </NextWeatherBox>

                        

                    </Wrapper>
                </BackgroundImg>

            );
        }
    }
}

export default Weather;