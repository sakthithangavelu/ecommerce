import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import swal from "sweetalert";

export const showErrorMessage = () => {
  toast.error("Email Already Exists.!", {
    position: toast.POSITION.TOP_CENTER,
  });
};
export const showRegisterSuccess = () => {
  toast.success("Registered successfully", {
    position: toast.POSITION.TOP_CENTER,
  });
};
export const showRegisterFailed = (err) => {
  toast.error("Registration Failed:" + err.message, {
    position: toast.POSITION.TOP_CENTER,
  });
};
export const showEmailError = () => {
  toast.error("Invalid Email!", {
    position: toast.POSITION.TOP_CENTER,
  });
};
export const showAdminSuccess = () => {
  toast.success("Welcome Admin", {
    position: toast.POSITION.TOP_CENTER,
  });
};
export const showPasswordError = () => {
  toast.error("Invalid Password!", {
    position: toast.POSITION.TOP_CENTER,
  });
};
export const showLoginError = (err) => {
  toast.error("Login Failed!" + err.message, {
    position: toast.POSITION.TOP_CENTER,
  });
};
export const showUsernameError = () => {
  toast.error("Invalid Username", {
    position: toast.POSITION.TOP_CENTER,
  });
};
export const showPassError = () => {
  toast.error("Invalid Password", {
    position: toast.POSITION.TOP_CENTER,
  });
};
export const showSignInMessage = () => {
  toast.info("Please Sign In to Proceed", {
    position: toast.POSITION.TOP_CENTER,
  });
};
export const showToastMessage = () => {
  toast.success("Added successfully", {
    position: toast.POSITION.TOP_CENTER,
  });
};
export const showRemoveMessage = () => {
  toast.error("Removed succesfully", {
    position: toast.POSITION.TOP_CENTER,
  });
};
export const showOrderSuccess = () => {
  swal("Order Placed!", "Thank you and Have a nice day", "success");
};
export const showOrderFailed = (err) => {
  toast.error("Order Failed:" + err.message, {
    position: toast.POSITION.TOP_CENTER,
  });
};
export const removeUserAlert = () => {
  swal("Record Deleted Successfully!", "", "success");
};
