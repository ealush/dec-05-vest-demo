import React, { useState } from "react";
import Input from "./components/Input";
import Checkbox from "./components/Checkbox";
import Submit from "./components/Submit";

import "./styles.css";
import Button from "./components/Button";

export default function Form() {
  const [formstate, setFormstate] = useState({});
  const [, setUserNameLoading] = useState(false);

  const handleChange = (currentField, value) => {
    const nextState = { ...formstate, [currentField]: value };
    setFormstate(nextState);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input
        name="username"
        onChange={handleChange}
        messages={[""]}
        className=""
        pending={false} // isPending
      />
      <Input name="password" onChange={handleChange} />
      <Input name="confirm" onChange={handleChange} />
      <Checkbox
        onChange={handleChange}
        name="tos"
        label="I have read and agreed to the terms of service"
      />
      <Submit />
    </form>
  );
}
