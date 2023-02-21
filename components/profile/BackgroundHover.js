import CameraAltIcon from "@material-ui/icons/CameraAlt";
import {
  BackgroundHoverContainer,
  BackgroundHoverText
} from "./style-components";

function BackgroundHover() {
  return <span>
    <BackgroundHoverContainer>
      <CameraAltIcon />
      <BackgroundHoverText>
        change profile picture
      </BackgroundHoverText>
    </BackgroundHoverContainer>
  </span>;
}

export default BackgroundHover;
