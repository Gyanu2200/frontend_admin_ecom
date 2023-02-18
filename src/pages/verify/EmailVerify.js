import React from "react";
import { Alert } from "react-bootstrap";
import AdminLayout from "../layout/AdminLayout";

const EmailVerify = () => {
  //get the verification code and email from the query parameters
  //call api to verify
  //display success or error
  return (
    <AdminLayout>
      <div className="verify-page">
        <Alert variant="success">Your account is verified</Alert>
      </div>
    </AdminLayout>
  );
};

export default EmailVerify;
