import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  @media (max-width: 480px) {
    padding: 0px;
  }
`

const Panel: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <Container>{children}</Container>
}

export default Panel
