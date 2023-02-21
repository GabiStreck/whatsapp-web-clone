import BackgroundHover from "./BackgroundHover";
import {
  AvatarContainer,
  AvatarStyled,
  ContainerAvatarImage
} from "./style-components";

export default function AvatarImage({ img, onChange }) {
  return (
    <ContainerAvatarImage>
      <input
        accept="image/*"
        id="contained-button-file"
        style={{ display: "none" }}
        type="file"
        onChange={onChange}
      />
      <label htmlFor="contained-button-file">
        <AvatarContainer>
          <AvatarStyled
            src={img ? img : "/background_contact_image.jpg"}
          />
          <BackgroundHover />
        </AvatarContainer>
      </label>
    </ContainerAvatarImage>
  );
}
