import React, { useState, useRef } from "react";

export default function SignIn() {
  const [active, setActive] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
  });
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const nameRef = useRef(null);
  const emailRef = useRef(null);

  function handleClick() {
    // console.log(inputRef);
    // setName(nameRef.current.value);
    // setEmail(emailRef.current.value);
    setInput({
      name: nameRef.current.value,
      email: emailRef.current.value,
    });
  }
  console.log(input);

  const handleChange = () => {
    setActive(!active);
  };
  // const onsubmit = (e) => {
  //   // setName(e.target.value);
  // };

  return (
    <div>
      <div className={active ? "active main-div" : "main-div"}>
        <div>
          <div className="username">
            <label>User Name</label>
            <input type="text" ref={nameRef}></input>
          </div>
          <div className="Email">
            <lable>E-mail</lable>
            <input type="email" ref={emailRef}></input>
          </div>
          <div className="password">
            <lable>Password</lable>
            <input type="password"></input>
          </div>

          <div className="bod">
            <lable>Birth Date</lable>
            <input type="date"></input>
          </div>
          <div className="number">
            <lable>Number</lable>
            <input type="number"></input>
          </div>
          <div className=" btn button">
            <button onClick={handleClick}>Submit</button>
          </div>
        </div>
      </div>
      <div className="Button">
        <button onClick={handleChange}>SignIn</button>
      </div>
      <div>
        hello,{input.name},{input.email}
      </div>
    </div>
  );
}
