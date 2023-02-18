import React from "react";
import { Container } from "react-bootstrap";

const GlobalMessage = () => {
  return (
    <div className="bg-dark text-light">
      <Container className="d-flex justify-content-between p-1">
        <div>
          <i class="fa-brands fa-youtube"></i>1300 MYSHOP
        </div>
        <div>
          <i className="fa-solid fa-shop me-2"></i>
          <i className="fa-brands fa-facebook me-2"></i>
          <i className="fa-brands fa-youtube me-2"></i>
        </div>
      </Container>
    </div>
  );
};

export default GlobalMessage;
