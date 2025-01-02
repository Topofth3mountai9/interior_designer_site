import styled from 'styled-components';

const Container_container = styled.div`
  max-width: ${({ theme }) => theme.containers.max_width};
  margin-inline: auto;
`;

function Container({ children }) {
  return <Container_container>{children}</Container_container>;
}

export default Container;
