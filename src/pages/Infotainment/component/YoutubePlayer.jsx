import axios from 'axios';
import { useState, useEffect } from 'react';
import { NotionRenderer } from 'react-notion';
import 'react-notion/src/styles.css';
import styled from 'styled-components';
import InfotainmentLayout from '../../../component/InfotainmentLayout/InfotainmentLayout';
import YouTube from 'react-youtube';

const Notion = () => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    const NOTION_PAGE_ID = '7258456b68cd4b049aaf80415d2e158a';
    axios.get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`).then(({ data }) => {
      setResponse(data);
    });
  }, []);

  return Object.keys(response).length && <NotionRenderer blockMap={response} fullPage={true} />;
};

const YoutubeWrapper = styled.div`
  width: 1720px;
  height: 598px;
  border-radius: 20px;
  background-color: white;
  filter: drop-shadow(0px 11px 13px rgba(0, 0, 0, 0.25));

  overflow: auto;
  -ms-overflow-style: none;
`;

const YoutubePlayer = () => {
  return (
    <InfotainmentLayout>
      <YoutubeWrapper>
        <YouTube
          //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
          videoId='HYGhruNONH8'
          //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
          //밑에서 더 설명하겠습니다.
          opts={{
            width: '1720',
            height: '598',
            playerVars: {
              autoplay: 1, //자동재생 O
              rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
              modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
            },
          }}
          //이벤트 리스너
          onEnd={(e) => {
            e.target.stopVideo(0);
          }}
        />
      </YoutubeWrapper>
    </InfotainmentLayout>
  );
};

export default YoutubePlayer;
// https://www.youtube.com/watch?v=bl0QaVhsrbw
