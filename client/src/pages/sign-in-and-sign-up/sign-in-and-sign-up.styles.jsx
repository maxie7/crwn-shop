import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  width: 850px;
  
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;
