import React from "react";
import { IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";

import UserContact from "../core/UserContact";
import { Header } from "../sidebar/style-components";

export default function HeaderChat({ contact }) {
  return contact ? (
    <Header>
      <UserContact lastConection name={contact.fullName} />
      <IconActions>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </IconActions>
    </Header>
  ) : null;
}

const IconActions = styled.div`
  display: flex;
  align-items: flex-end;
`;
