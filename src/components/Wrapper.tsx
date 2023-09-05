<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components';
// import palette from '../../lib/styles/palette'

const WrapperBlock = styled.div`
    width: 1280px;
    margin : 0 auto;
    @media(max-width: 1024px){
        width : 768px;
    }
    @media(max-width: 768px){
        width: 100%;
    }
`;

const Wrapper = ({children, ...rest}: any) => {
    return (
        <WrapperBlock {...rest}>{children}</WrapperBlock>
    )
}

export default Wrapper;
=======
import React from "react";
import styled from "styled-components";
// import palette from '../../lib/styles/palette'

const WrapperBlock = styled.div`
  width: 1280px;
  margin: 0 auto;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Wrapper = ({ children, ...rest }: any) => {
  return <WrapperBlock {...rest}>{children}</WrapperBlock>;
};

export default Wrapper;
>>>>>>> 9c4948f0166c239a3c40e11c529dec491ba41cfe
