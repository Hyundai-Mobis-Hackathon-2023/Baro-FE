# Baro

본 프로젝트는 2023년 현대 모비스 해커톤 출품작입니다.

## 핵심 포인트
1. 미래 사회 완전 자율 주행 시대에서, 기존 이동 수단의 용도를 초월한 Active Mobility(이동형 공간)으로 재해석하다.
2. 사용자의활용목적에따라필요한가구를직접선택하며,미리볼수있는차량내부의3D배치로 쉽고 빠르게 나만의 차량을 제작할 수 있다.
3. 자유롭게 배치한 가구에 알맞은 인포테인먼트가 제공되고, 사용자는 추가적인 테마별 위젯을 선택하여 PBV에서의 다양한 활용을 누릴 수 있다.

## 프로젝트 기획과 배경 및 목적
현대 모비스에서 얼마 전 선보인 모바일 리빙 서비스와 같이, 미래의 완전 자율 주행 시대에서 차량은 기존 이동 수단의 목적을 초월하여 내부에서도 다양한 형태의 생활을 할 수 있는 Active Mobility(이동형 공간)으로 인식이 변화할 것이다.
이를 반영하여 사용자 공간의 재해석을 통해 고객의 필요에 최적화된 PBV 인테리어, 그리고 내부 요소들과 연속적으로 이어지는 인포테인먼트를 제공하는 PBV 구매 및 대여 플랫폼 개발을 목적으로 한다.

## 프로젝트 단계별 내용
<img width="1025" alt="image" src="https://user-images.githubusercontent.com/64801796/220617601-9c6967c8-8a12-4830-834f-769e49872d44.png">

## 결과(시연) 화면
### 1. PBV 사전 선택
<img width="733" alt="image" src="https://user-images.githubusercontent.com/64801796/220620839-67860d03-72c1-41c8-aef6-3f6365689aa4.png">

### 2. PBV 내부 커스텀과 인포테인먼트 선택
<img width="731" alt="image" src="https://user-images.githubusercontent.com/64801796/220621017-14b6208d-e2f3-4161-8da8-c89907f398bb.png">

### 3. PBV 수령 위치 선택, 구매 
<img width="733" alt="image" src="https://user-images.githubusercontent.com/64801796/220621175-66c48e60-02bf-49e1-8cb4-7645ce9147f9.png">

### 4. PBV 탑승 후 내부 인포테인먼트
<img width="915" alt="image" src="https://user-images.githubusercontent.com/64801796/220622764-b9159237-712b-404e-9dcb-5fccb1514cf9.png">



## 결과
미래의 완전 자율 주행 시대의 Active Mobility (이동형 공간)를 위한 플랫폼 개발 성공

### 1. 자신만의 PBV 만들기
차량 내에서 목적에 따라 여러 가구를 배치하며 자신만의 PBV를 만들 수 있게 하였다. 이때 3D 기술을 접목하여 사용자들이 활용성 있게 만들어낼 수 있도록 하였다. 자신의 사용 목적(테마)을 고르면 거기에 맞는 PBV 프리셋을 제공하거나 가구를 선택하여 직접 만드는 기능까지 구현해냈다. 온라인 서비스에 친숙하지 않은 연령대를 위하여 AI 기술을 접목하여 채팅으로 프리셋을 제공하는 기능을 추가하여 접근성을 높였다.

### 2. 인포테인먼트 제공
커스텀 한 PBV에 알맞은 인포테인먼트를 제공한다. 이는 가구, 테마에 따라 맞춤형으로 설치되며, 필요시 사용자가 직접 인포테인먼트를 커스텀 할 수도 있게 개발했다. 인포테인먼트의 경우 ‘베이직’ 또는 ‘커스텀’으로 구분 지었으며, ‘베이직’의 경우 선택된 가구별로 필요한 인포테인먼트를 분류하여 활용성을 높였으며 ‘커스텀’의 경우 사용자가 추가적으로 요구하는 인포테인먼트를 설치할 수 있도록 하였다.

### 3. Devops&무중단배포아키텍처구현및성능최적화 
Jenkins로 CI/CD 환경을 구축하고, 3개의 Docker 컨테이너를 동시에 배포 자동화하는 것에 성공했다. 각 컨테이너에는 동일한 내용의 애플리케이션이 실행 중이며, 포트 번호를 다른 3개로 구분했다. 또 로드밸런서로 Nginx를 사용해 트래픽을 분산시키고, 워커 프로세스 외에도 스레드 풀로 다량의 요청 내용을 동시간에 처리하도록 튜닝을 진행했다.

## 한계 및 보완점

### 1. 크기 별 차량 제공
현재는 소형만을 서비스로 제공하고 있으며 , 이후에 중형 , 대형까지 더 세부화할 예정이다.

### 2. 다양한 인포테인먼트 제공
이 서비스는 차량을 직접 커스텀하고 인포테인먼트를 직접 연결시켜주는 것에 의의가 있다. 다양한 사용자 경험, 인포테인먼트를 위해 다양한 회사와 협업하여 더 추가할 계획을 가지고 있다.

## Project Stack

**Front-end**

- react
- styled-components
- react-router-dom
- three
- @react-three/fiber
- @react-three/drei
- zustand
- leva
- framer-motion


## Branch Strategy

Github flow 전략을 사용합니다.

## Commit Massage Convention

```
type(file name): commit message
```

모든 `commit message`는 최대한 간략하게 작성합니다. `file name`의 경우, 특정 파일만을 수정한 경우에는 해당 파일 이름을 포함하지만, 여러 파일인 경우에는 미포함하여 작성합니다.

모든 `commit message` 앞에는 다음의 `type`을 작성합니다.

- `feat` : 새로운 기능을 추가한 경우
- `fix` : 버그를 고친 경우
- `design` : CSS 등 사용자 UI 디자인을 변경한 경우
- `refactor` : 프로덕션 코드 리팩토링의 경우 (새로운 기능이나 버그 수정 없이 현재 구현을 개선)
- `docs` : 문서를 수정한 경우
- `comment` : 필요한 주석 추가 및 변경의 경우
- `chore` : 위의 경우에 포함되지 않는 경우

## Contributors
<table>
  <tr>
        <td align="center"><a href="https://github.com/pakxe"><img src="https://avatars.githubusercontent.com/u/64801796?v=4" width="100px;" alt=""/><br /><sub><b>Pakxe<br/>(SeHyun Park - FE)</b></sub></a></td>
      <td align="center"><a href="https://github.com/LellowMellow"><img src="https://avatars.githubusercontent.com/u/79556112?v=4" width="100px;" alt=""/><br /><sub><b>LellowMellow<br/>(DongRyeong Lee - FE)</b></sub></a></td>
      <td align="center"><a href="https://github.com/sean2337"><img src="https://avatars.githubusercontent.com/u/100525337?v=4" width="100px;" alt=""/><br /><sub><b>sean2337<br/>(SiHyeon Joo - FE)</b></sub></a></td>
      <td align="center"><a href="https://github.com/msung99"><img src="https://avatars.githubusercontent.com/u/100525337?v=4" width="100px;" alt=""/><br /><sub><b>sean2337<br/>(SiHyeon Joo - FE)</b></sub></a></td>
  </tr>
</table>
