import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h3`
  font-size: 1.3rem;
  margin: 1rem 0;
`;

export const Date = styled.p`
  margin: 0.5rem 0;
  color: rgba(0, 0, 0, 0.5);
`;

export const SubTitle = styled.p`
  display: flex;
  align-items: center;
  gap: 1rem;

  ::before {
    content: "";
    width: 4px;
    height: 30px;
    background: rgb(0, 0, 0);
  }
`;

export const Description = styled.p`
  margin: 1.5rem 0;
`;

export const PostFooter = styled.div`
  display: flex;
  border-top: 3px solid rgba(0, 0, 0, 1);
  border-bottom: 3px solid rgba(0, 0, 0, 1);
  padding: 0.5rem 0;
`;