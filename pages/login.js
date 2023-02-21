import React from "react";
import Head from "next/head";
import styled from "styled-components";

import { Button } from "../components/core/Button";
import {
  ContainerMain,
  ContainerRoot
} from "../components/scaffold/Containers";
import { auth, firebaseProvider } from "../firebase";
import Image from "next/image";
import Logo from "../assets/images/logo-ws.png";
export default function login() {
  const signIn = () => {
    auth.signInWithPopup(firebaseProvider).catch(alert);
  };

  return (
    <ContainerRoot>
      <ContainerMain>
        <Head>
          <title>WhatsApp Web Clone - SignIn</title>
        </Head>
        <ContainerLogo>
          <div>
            <Image src={Logo} />
          </div>
          <span>WhatsApp Web <small>Clone</small></span>
          <Button onClick={signIn}>Sign In</Button>
        </ContainerLogo>
      </ContainerMain>
    </ContainerRoot>
  );
}

const ContainerLogo = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  font-size: 1.875rem;
  font-weight: 700;
  color: #575757;
  > span > small {
    font-size: 0.85rem;
  }
`;
