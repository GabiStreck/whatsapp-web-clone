import React, { useEffect, useRef, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { useTheme } from "@material-ui/core/styles";
import { Check as CheckIcon, Edit as EditIcon } from "@material-ui/icons";
import dynamic from "next/dynamic";
import styled from "styled-components";

const EmojiMenu = dynamic(() => import("./EmojiMenu"), {
  ssr: false
});

export default function TextFieldForm({
  label,
  value,
  name,
  onChange,
  countMax,
  required,
  hideEmoji,
  errorMessage
}) {
  const [count, setCount] = useState(25 - (value?.length ?? 0));
  const [edit, setEdit] = useState(false);
  const [addEvent, setAddEvent] = useState(false);
  const inputRef = useRef();
  const theme = useTheme();

  const onEmojiClick = (event, emojiObject) => {
    if (count > 0) {
      const val = inputRef.current.textContent + emojiObject.emoji;

      inputRef.current.textContent = val;
    }
  };

  useEffect(() => {
    if (count == 0 && !addEvent) {
      inputRef.current.addEventListener(
        "keypress",
        function(e) {
          if (this.innerHTML.length >= (countMax ?? 25)) {
            e.preventDefault();

            return false;
          }
        },
        false
      );
      setAddEvent(true);
    }
  }, [inputRef?.current, count]);

  const onSaveText = () => {
    setEdit(!edit);
    onChange({
      payload: {
        name: name ?? "",
        value: inputRef.current.textContent
      }
    });
  };

  return (
    <Container>
      <Label color={theme.palette.primary.main}>{label}</Label>
      <ContainerTextField color={theme.palette.primary.main} edit={edit}>
        <TextContainer
          contentEditable={edit}
          onInput={(e) => setCount((countMax ?? 25) - e.currentTarget.textContent.length)}
          placeholder="ingrese email"
          ref={inputRef}
          required={required}
          spellCheck={false}
          suppressContentEditableWarning
        >
          {value}
        </TextContainer>

        <ContainerActions>
          {edit ? (
            <>
              <CountField>{count}</CountField>
              {!hideEmoji && (<EmojiMenu onEmojiClick={onEmojiClick} />)}
              <CheckIconStyled fontSize="small" onClick={() => onSaveText()} />
            </>
          ) : (
            <EditIconStyled fontSize="small" onClick={() => setEdit(!edit)} />
          )}
        </ContainerActions>
      </ContainerTextField>
      <ContainerError>
        {errorMessage}
      </ContainerError>
    </Container>
  );
}

const Label = styled.label`
  color: ${(props) => (props?.color ? props.color : "#000")};
`;

const CountField = styled.span`
  color: silver;
`;

const Container = styled(Paper)`
  padding: 14px 30px 10px 30px;
  margin-bottom: 10px;
`;

const ContainerTextField = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 8px 0px 0px;
  margin-bottom: 16px;
  border-bottom: ${(props) => (props.edit ? `2px solid ${props.color ?? "red"}` : "none")};
`;

const ContainerActions = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
`;

const TextContainer = styled.div`
  width: 100%;
  position: relative;
  width: 100%;
  min-height: 20px;
  font-size: 17px;
  line-height: 20px;
  color: #6e6f70;
  word-wrap: break-word;
  white-space: pre-wrap;
`;

const ContainerError = styled.small`
  color: red;
`;


const CheckIconStyled = styled(CheckIcon)`
  cursor: pointer;
  color: #6e6f70;
`;

const EditIconStyled = styled(EditIcon)`
  cursor: pointer;
  color: #6e6f70;
`;

