"use client";

import { margin_top } from "../components/common/container/container";
import Register from "../components/register/Register";

export default function SignUp() {
  return (
    <div className={`${margin_top} flex justify-center my-10`}>
      <Register />
    </div>
  );
}
