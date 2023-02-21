
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../../firebase";

export default function Message({ user, message }) {
    const [userAuth] = useAuthState(auth);
    const TypeMessage = user === userAuth.uid ? RecieverMessage : SenderMessage;

    return (
        <TypeMessage>
            {message?.message}
            <TimeContainer>
                {new Date(message?.timestamp)?.toLocaleString("en-US", {
                    hour: "numeric",
                    hour12: true,
                    minute: "2-digit"
                })}
            </TimeContainer>
        </TypeMessage>
    );
}

const MessageContein = styled.div`
    width: fit-content;
    padding: 15px;
    border-radius: 8px;
    min-width: 60px;
    position: relative;
    text-align: left;
    margin: 10px;
    display: flex;
    flex-direction: column;
`;

const SenderMessage = styled(MessageContein)`
    background-color: #dcf8c6;
`;

const RecieverMessage = styled(MessageContein)`
    background-color: whitesmoke;
    margin-left: auto;
`;

const TimeContainer = styled.small`
   color: gray;
   font-size: 8px;
   text-align: right;
`;
