import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, loadUsers } from "../redux/actions";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate } from "react-router-dom";
import AdminNav from "./AdminNav";
import { removeUserAlert } from "../services/Toastify";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const AdminHome = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const { users } = useSelector((state) => state.data); //destructuring the user

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    if (removeUserAlert(dispatch(deleteUser(id)))) {
    }
  };

  return (
    <div>
      <AdminNav />
      <br />
      <h3 style={{ textAlign: "center" }}>ADMIN PAGE</h3>
      <Button
        onClick={() => navigate("/addUser")}
        variant="contained"
        style={{ backgroundColor: "teal", margin:"auto",display:"table" }}
      >
        ADD NEW USER
      </Button>
      <br />
      <br />
      <TableContainer component={Paper} style={{ backgroundColor: "#c6f7ed" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>First Name</StyledTableCell>
              <StyledTableCell align="center">Last Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Password</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((SignIn) => (
                <StyledTableRow key={SignIn.id}>
                  <StyledTableCell component="th" scope="row">
                    {SignIn.fname}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {SignIn.lname}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {SignIn.email}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {SignIn.password}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                    >
                      <Button
                        onClick={() => handleDelete(SignIn.id)}
                        style={{ backgroundColor: "teal" }}
                      >
                        DELETE
                      </Button>
                      <Button
                        onClick={() => navigate(`/EditUser/${SignIn.id}`)}
                        style={{ backgroundColor: "teal" }}
                      >
                        EDIT
                      </Button>
                    </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminHome;
