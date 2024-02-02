import styled from 'styled-components';

import { Logo, Span } from '../ui/Header';
import Form from '../ui/Form';

const StyledHome = styled.div`
  height: 100dvh;
  padding: 15rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    padding: 8rem 0;
    justify-content: center;
  }
`;

const HomeLogo = styled(Logo)`
  font-size: 15rem;
  cursor: default;

  @media screen and (max-width: 768px) {
    font-size: 10rem;
  }
`;

const Subtitle = styled.p`
  font-size: 2.5rem;
  margin-bottom: 6rem;

  @media screen and (max-width: 768px) {
    width: 70vw;
    font-size: 2rem;
    margin-bottom: 3.5rem;
    text-align: center;
  }
`;

function Home() {
  return (
    <StyledHome>
      <HomeLogo>
        test<Span>IT</Span>
      </HomeLogo>
      <Subtitle>Test your knowledge about Web Development 🧑‍💻</Subtitle>
      <Form />
    </StyledHome>
  );
}

export default Home;
