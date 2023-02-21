import { Drawer, IconButton } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import ArrowBack from "@material-ui/icons/ArrowBack";
import styled from "styled-components";

import {
  Container,
  ConteinerButtons,
  HeaderGreen
} from "../sidebar/style-components";

export default function DrawerActions({
  children,
  toggleDrawer,
  open,
  moreActions,
  title
}) {
  const theme = useTheme();

  return (
    <Drawer
      anchor="left"
      disableBackdropTransition
      hideBackdrop
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      open={open}
    >
      <ContentDrawer>
        <HeaderGreen color={theme.palette.primary.dark}>
          <ConteinerButtons>
            <div>
              <IconButton
                onClick={() => toggleDrawer()}
                style={{ color: "white", marginRight: 12 }}
              >
                <ArrowBack />
              </IconButton>
              {title}
            </div>
            {moreActions}
          </ConteinerButtons>
        </HeaderGreen>
        {children}
      </ContentDrawer>
    </Drawer>
  );
}

export const ContentDrawer = styled(Container)`
  min-width: 375px;
  background-color: #f7f8fa;
`;

