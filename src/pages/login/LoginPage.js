import React, { useRef } from "react";
import AdminLayout from "../layout/AdminLayout";
import { Form, Button } from "react-bootstrap";
import { CustomInput } from "../../components/customInput/CustomInput";
import { useDispatch } from "react-redux";
import { loginAdmin } from "../admin-user/AdminUserAction";

export const LoginPage = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  // const inputs = [
  //   {
  //     label: "Email",
  //     name: "email",
  //     type: "email",
  //     placeholder: "youremail@email.com",
  //     required: true,
  //     ref: emailRef,
  //   },
  //   {
  //     label: "Password",
  //     name: "password",
  //     type: "password",
  //     placeholder: "*****",
  //     required: true,
  //     ref: passRef,
  //   },
  // ];

  const dispatch = useDispatch();
  const handleOnSubmit = async (e) => {
    e.preventDefault(e);
    // const email = emailRef.current.value
    // const password = emailRef.current.value

    const obj = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    dispatch(loginAdmin(obj));
  };
  return (
    <div>
      <AdminLayout>
        <div className="reg-page">
          <Form
            onSubmit={handleOnSubmit}
            className="border mt-3 mb-2 p-3 rounded shadow-lg py-4"
          >
            <h3 className="mb-3  text-center">Welcome Back!</h3>
            <hr className="mb-5" />
            {/* 
            {inputs.map((item) => {
              return <CustomInput key={item.name} {...item} />;
            })} */}

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </div>
      </AdminLayout>
    </div>
  );
};
