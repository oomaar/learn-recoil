import styled from 'styled-components';

export const HeaderTag = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 4px solid #333;

  @media screen and (max-width: 400px) {
    justify-content: space-between;
    padding: 1rem 0.5rem;
  }
`;

export const Logo = styled.div`
  background: transparent;
  border: 5px solid #000;
  height: 50px;
  width: 50px;
  transform: rotate(-45deg);
  position: relative;
`;

export const LogoLine = styled.div`
  width: 40px;
  height: 5px;
  background-color: #000;
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
`;

export const TitleContainer = styled.div`
  padding: 0 0.4rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 0;

  @media screen and (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

export const DarkButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const DarkButton = styled.button`
  background: transparent;
  border: 0;
  outline: 0;
  color: #000;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;