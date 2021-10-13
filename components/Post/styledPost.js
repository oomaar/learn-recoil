import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h3`
  font-size: 1.3rem;
  margin: 1rem 0;
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const Date = styled.p`
  margin: 0.5rem 0;
  color: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.colors.textColor};
`;

export const SubTitle = styled.p`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.titleColor};

  ::before {
    content: "";
    width: 4px;
    height: 30px;
    background: ${({ theme }) => theme.colors.titleColor};
  }
`;

export const Description = styled.p`
  margin: 1.5rem 0;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const PostFooter = styled.div`
  display: flex;
  border-top: 3px solid ${({ theme }) => theme.colors.titleColor};
  border-bottom: 3px solid ${({ theme }) => theme.colors.titleColor};
  padding: 0.5rem 0;
  color: ${({ theme }) => theme.colors.textColor};
`;