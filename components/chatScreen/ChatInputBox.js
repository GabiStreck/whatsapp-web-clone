import { useState } from "react";
import { IconButton } from "@material-ui/core";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons//EmojiEmotionsOutlined";
import MicOutlinedIcon from "@material-ui/icons//MicOutlined";
import {
  Container,
  Box,
  IconButtonStyled,
  ContainerIcon,
  AttachFileIconStyled,
  ContainerMessage,
  InputBaseStyled,
  EmojiButton,
  InputContainer,
  InputContainers,
  SendIconStyled
} from './style-component'

export default function ChatInputBox({ sendMensage }) {
  const [query, setQuery] = useState("");

  async function handleSendMessage() {
    const resp = await sendMensage(query);
    if (resp) setQuery("");
  }

  return (
    <Container>
      <Box>
        <ContainerIcon>
          <EmojiButton>
            <EmojiEmotionsOutlinedIcon />
          </EmojiButton>
          <IconButtonStyled size="small">
            <AttachFileIconStyled />
          </IconButtonStyled>
        </ContainerIcon>
        <ContainerMessage>
          <InputContainer>
            <InputContainers>
              <InputBaseStyled
                onChange={({ target }) => setQuery(target.value)}
                onKeyPress={(event) => event.key === "Enter" && handleSendMessage()}
                placeholder="Write a message here"
                value={query}
              />
            </InputContainers>
          </InputContainer>

          {query.length > 0 ? (
            <SendIconStyled onClick={() => handleSendMessage()} />
          ) : (
            <IconButton >
              <MicOutlinedIcon />
            </IconButton>
          )}
        </ContainerMessage>
      </Box>
    </Container>
  );
}
