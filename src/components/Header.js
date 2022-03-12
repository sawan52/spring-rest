import React from "react";
import { Card, CardBody } from "reactstrap";

function Header() {
  return (
    <div>
      <Card className="my-2 bg-warning">
        <CardBody>
          <h2 className="text-center my-2">Welcome to Course Application</h2>
        </CardBody>
      </Card>
    </div>
  );
}

export default Header;
