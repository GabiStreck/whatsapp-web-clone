import styled from "styled-components";

const Container = styled.div`
  min-width: 330px;
  width: 100%;
  flex: 40%;
  background-color: white;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: #f0f2f5;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 3.5rem;
  border-bottom: 1px solid whitesmoke;
`;

const HeaderGreen = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: ${(props) => props?.color};
  font-size: large;
  z-index: 1;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px;
  padding-bottom: 10px;
  height: 108px;
  border-bottom: 1px solid whitesmoke;
`;

const IconsContainer = styled.div``;

const SearchConteiner = styled.div`
  display: flex;
  align-items: center;

  padding: 8px;
`;

const Search = styled.div`
  padding: 6px 20px;
  border-radius: 7px;
  width: 100%;
  justify-content: center;
  display: flex;
  background-color: rgb(240, 242, 245);
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
  margin: 0 20px 0 20px;
  background-color: rgb(240, 242, 245);
`;

const ConteinerButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  color: #fff;
  padding-bottom: 0;
`;

export {
  Container,
  ConteinerButtons,
  Header,
  HeaderGreen,
  IconsContainer,
  Search,
  SearchConteiner,
  SearchInput
};
