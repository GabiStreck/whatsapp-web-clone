import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";

/* ---------- AVATAR IMAGE ------------- */
export const AvatarStyled = styled(Avatar)`
  animation: grow 0.5s forwards;

  @keyframes grow {
    0% {
      margin-top: 6.25rem;
      width: 0rem;
      height: 0rem;
    }
    100% {
      margin-top: 0;
      width: 12.5rem;
      height: 12.5rem;
    }
  }
`;

export const ContainerAvatarImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const AvatarContainer = styled.div`
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
  border-radius: 50%;
  transform: translateZ(0);
`;

/* ---------- BACKGROUND HOVER AVATAR ------------- */

export const BackgroundHoverText = styled.div`
  text-align: center;
  margin-top: 10px;
  width: 100px;
  overflow-wrap: break-word;
`;

export const BackgroundHoverContainer = styled.div`
  opacity: 0;
  left: 0;
  border-bottom-left-radius: 50%;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  line-height: 1.2;
  top: 0;
  padding-top: 15px;
  height: 100%;
  display: flex;
  font-size: 0.8125rem;
  text-transform: uppercase;
  width: 100%;
  position: absolute;
  color: rgba(255, 255, 255, 0.8);
  align-items: center;
  flex-direction: column;
  z-index: 1000;

  box-sizing: border-box;
  justify-content: center;

  :hover {
    opacity: 1;
    animation: hover 0.3s forwards;
    @keyframes hover {
      0% {
        background-color: rgba(84, 101, 111, 0);
        color: rgba(255, 255, 255, 0);
      }
      100% {
        background-color: rgba(84, 101, 111, 0.8);
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
`;
