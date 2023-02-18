import { useState } from "react";
import { Form, Button, Alert, Spinner } from "react-bootstrap";
import { CustomInput } from "../../components/customInput/CustomInput";
import { postAdminUser } from "../../helpers/axiosHelpers";
import AdminLayout from "../layout/AdminLayout";

const RegisterPage = () => {
  const inputs = [
    {
      label: "First Name",
      name: "fName",
      type: "text",
      placeholder: "John",
      required: true,
    },
    {
      label: "Last Name",
      name: "lName",
      type: "text",
      placeholder: "Doe",
      required: true,
    },

    {
      label: "Phone",
      name: "phone",
      type: "number",
      placeholder: "04********",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      placeholder: "4 your street, suburb",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "youremail@email.com",
      required: true,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "*****",
      required: true,
    },
    {
      label: "Confirmed Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "*****",
      required: true,
    },
  ];

  const [form, setForm] = useState({});
  const [res, setRes] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setErr("");
    // let str = "";
    if (name === "password") {
      !/[a-z]/.test(value) && setErr("At least one lower case required");
      !/[A-Z]/.test(value) && setErr("At least one upper case required");
      !/[0-9]/.test(value) && setErr("At least one number required");
      value.length < 6 && setErr("Password must be at least 6 character long.");
    }
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault(e);
    setIsLoading(true);
    const { confirmedPassword, ...rest } = form;
    if (confirmedPassword !== rest.password) {
      return alert("Password do not match");
    }

    const result = await postAdminUser(form);
    console.log(form);
    setRes(result);
    setIsLoading(false);
  };
  // console.log(res);
  return (
    <div>
      <AdminLayout>
        <div className="reg-page">
          <Form
            onSubmit={handleOnSubmit}
            className="border mt-3 mb-2 p-3 rounded shadow-lg py-4"
          >
            <h3 className="mb-3  text-center">New Admin Registration</h3>
            <hr className="mb-5" />

            {isLoading && (
              <Spinner>
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
            {res.message && (
              <Alert variant={res.status === "success" ? "success" : "danger"}>
                {res.message}
              </Alert>
            )}
            {inputs.map((item) => {
              return (
                <CustomInput
                  key={item.name}
                  {...item}
                  onChange={handleOnChange}
                />
              );
            })}
            <Form.Text>
              <div>
                Your password must have at least 6 character long, Upper case,
                lower case and number
              </div>
            </Form.Text>
            {err && <div className="text-danger">{err}</div>}
            <div className="d-grid">
              <Button variant="primary" type="submit" disabled={err}>
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </AdminLayout>
    </div>
  );
};

export default RegisterPage;
