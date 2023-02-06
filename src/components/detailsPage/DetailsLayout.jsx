import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h2`
  text-align: center;
`;

const DetailsLayout = () => {
  return (
    <>
      <Title>Products Details</Title>
      <Outlet />
    </>
  );
};
export default DetailsLayout;
