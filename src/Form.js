import React, { useState } from "react";
import Input from "./components/Input";
import Checkbox from "./components/Checkbox";
import Submit from "./components/Submit";

import classnames from "vest/classnames";
import suite from "./suite";
import "./styles.css";

export default function Form() {
  const [formstate, setFormstate] = useState({});
  const [, setUserNameLoading] = useState(false);

  const handleChange = (currentField, value) => {
    const nextState = { ...formstate, [currentField]: value };
    const result = suite(nextState, currentField);
    setFormstate(nextState);

    if (currentField === "username") {
      setUserNameLoading(true);
    }

    result.done(() => {
      setUserNameLoading(false);
    });
  };

  const cn = classnames(suite.get(), {
    invalid: "error",
    valid: "success",
    warning: "warning"
  });

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input
        name="username"
        onChange={handleChange}
        messages={suite.getErrors("username")}
        className={cn("username")}
        pending={suite.isPending("username")}
      />
      <Input
        name="password"
        onChange={handleChange}
        messages={suite
          .getErrors("password")
          .concat(suite.getWarnings("password"))}
        className={cn("password")}
      />
      <Input
        name="confirm"
        onChange={handleChange}
        messages={suite.getErrors("confirm")}
        className={cn("confirm")}
      />
      <Checkbox
        onChange={handleChange}
        name="tos"
        label="I have read and agreed to the terms of service"
        className={cn("tos")}
      />
      <Submit disabled={!suite.isValid()} />
    </form>
  );
}
