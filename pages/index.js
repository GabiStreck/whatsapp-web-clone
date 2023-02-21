import Image from "next/image";
import styled from "styled-components";

import myImage from "../assets/images/ws_home.png";
import Scaffold from "../components/scaffold/Scaffold";

export default function Home() {
  return (
    <Scaffold>
      <TextContainer>
        <Image src={myImage} />
        <span>
          WhatsApp Web
          <small>Clone</small>
        </span>
      </TextContainer>
    </Scaffold>
  );
}

const TextContainer = styled.div`
    margin: auto;
    height: -webkit-fill-available;  
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;

    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  
    font-size: 2rem;
    font-weight: 600;
    text-align: center;

    color: #3d3d3d;

    > span > small {
      font-size: 0.7rem;
      padding: 5px;
    }
`;
