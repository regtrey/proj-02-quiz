import styled, { keyframes } from 'styled-components';
import { TbLoader2 } from 'react-icons/tb';

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const MiniSpinner = styled(TbLoader2)`
  width: 2.2rem;
  height: 2.2rem;
  animation: ${rotate} 1.5s infinite linear;
`;

export default MiniSpinner;
