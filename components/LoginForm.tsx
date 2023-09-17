"use client";

import { signIn } from "next-auth/react";

const LoginForm = () => {
  return (
    <div className="flex flex-col space-y-5">
      <button
        onClick={() => signIn("github")}
        className="bg-white text-black p-2 rounded-md"
      >
        Sign in with Github
      </button>

      <button
        onClick={() => signIn("google")}
        className="bg-red-400 text-black p-2 rounded-md"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginForm;
