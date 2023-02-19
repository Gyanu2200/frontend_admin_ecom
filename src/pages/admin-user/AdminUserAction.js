import { fetchAdminLogin } from "../../helpers/axiosHelpers";
import { setUser, unSetUser } from "./adminUserSlice";

export const loginAdmin = (frmDt) => async (dispatch) => {
  // call axios to check if login is success
  const { status, message, admin } = await fetchAdminLogin(frmDt);
  Toast.promise(resultPromise, {
    pending: "Please wait...",
  });

  // show react toastify
  //   toast[status](message);
  // if login successful then we would receive user data which we need to send to state by using dispatch
  admin?._id && dispatch(setUser(admin));
};
