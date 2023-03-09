import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import Home from "./Home";
export default function SignIn() {
  const [value, setValue] = useState("");
  const handelClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.User.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  return (
    <div>
      {value ? (
        <Home />
      ) : (
        <button onClick={handelClick}>Sign In with Google</button>
      )}
    </div>
  );
}
