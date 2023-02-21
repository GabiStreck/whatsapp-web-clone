import Head from "next/head";

import SideBar from "../sidebar/";

import { ChatContainer,
    ContainerMain,
    ContainerRoot } from "./Containers";

export default function Scaffold({ children }) {
    return (
        <ContainerRoot>
            <ContainerMain>
                <Head>
                    <title>WhatsApp Web Clone</title>
                </Head>
                <SideBar />
                <ChatContainer>
                    {children}
                </ChatContainer>
            </ContainerMain>
        </ContainerRoot>
    );
}
