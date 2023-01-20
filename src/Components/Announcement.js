import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
        height: 20px;
        background-color:teal;
        color: white;
        text-align: center;
`;
const Announcement = () => {
  return (
    <Container>
      Free Shipping on orders above 9,999/-
    </Container>
  )
}

export default Announcement