import React, { useEffect, useRef, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import AdminLayout from "../layout/AdminLayout";
import { useSearchParams } from "react-router-dom";
import { verifyAdminUser } from "../../helpers/axiosHelpers";

const EmailVerify = () => {
  //get the verification code and email from the query parameters
  //call api to verify
  //display success or error message

  const isExeref = useRef(true);

  const [response, setResponse] = useState({});
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const dt = {
      verificationCode: searchParams.get("c"),
      email: searchParams.get("email"),
    };
    verifyUserLink(dt);
    isExeref.current = false;
  }, []);

  //call api here
  const verifyUserLink = async (dt) => {
    if (!isExeref.current) {
      return console.log("API already called");
    }
    const data = await verifyAdminUser(dt);
    setResponse(data);
  };
  return (
    <AdminLayout>
      <div className="verify-page">
        {response.message ? (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response.message}
          </Alert>
        ) : (
          <Spinner variant="primary" animation="border" />
        )}
      </div>
    </AdminLayout>
  );
};

export default EmailVerify;
