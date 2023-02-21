import { Avatar } from "@material-ui/core";
import styled from "styled-components";

export default function UserContact({ name, lastConection }) {
  const dateFormated = new Date(lastConection)?.toLocaleString(
    "en-US",
    { hour: "numeric", hour12: true, minute: "2-digit" }
  );

  return (
    <ContainerContact>
      <Avatar />
      <ContainerItemData>
        <RowItem>
          <span>{name}</span>
        </RowItem>
        {lastConection ? (
          <RowItem>
            <LastConection>
              last time today at {dateFormated}
            </LastConection>
          </RowItem>
        ) : null}
      </ContainerItemData>
    </ContainerContact>
  );
}

const ContainerContact = styled.div`
  display: flex;
  align-items: center;
`;

const LastConection = styled.span`
  font-size: 12px;
  color: gray;
`;
const ContainerItemData = styled.div`
  display: flex;
  flex-basis: auto;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  min-width: 0;
  padding-left: 10px;
`;

const RowItem = styled.div`
  display: flex;
  align-items: center;
  line-height: normal;
  padding: 2px;
`;
