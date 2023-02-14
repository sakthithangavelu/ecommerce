import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";

const AddUser = () => {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { fname, lname, email, password } = state;
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fname || !lname || !email || !password) {
      setError("*Please fill all the input fields*");
    } else {
      dispatch(addUser(state));
      Navigate("/AdminHome");
      setError("");
    }
  };

  return (
    <div style={{ marginTop: "100" ,textAlign:"center"}}>
      <h2>Add New User</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "50ch" } }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <br />
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          name="fname"
          value={fname}
          data-testid="fname-test"
          onChange={handleInputChange}
          type="text"
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          name="lname"
          value={lname}
          data-testid="lname-test"
          onChange={handleInputChange}
          type="text"
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          value={email}
          data-testid="admin-email-test"
          onChange={handleInputChange}
          type="email"
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          value={password}
          data-testid="admin-password-test"
          onChange={handleInputChange}
          type="password"
        />
        <br />
        <Button
          variant="contained"
          style={{ backgroundColor: "teal" }}
          type="submit"
          data-testid="submit-button-test"
          onChange={handleInputChange}
        >
          SUBMIT
        </Button>
        <br />
        <Button
          variant="contained"
          style={{ backgroundColor: "teal" }}
          data-testid="back-button-test"
          onClick={() => Navigate("/AdminHome")}
        >
          BACK
        </Button>
      </Box>
    </div>
  );
};

export default AddUser;
