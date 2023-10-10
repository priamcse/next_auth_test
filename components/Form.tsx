"use client";
import { SignUpSchemaType, signUpSchema } from "@/lib/signupTypes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    // getValues,
    setError,
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpSchemaType) => {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "applicaion.json",
      },
    });
    const responseData = await response.json();
    if (!response.ok) {
      console.log("Something went wrong");
      return;
    }
    if (responseData.errors) {
      const errors = responseData.errors;
      if (errors.email) {
        setError("email", {
          type: "server",
          message: errors.email,
        });
      }
      if (errors.password) {
        setError("password", {
          type: "server",
          message: errors.password,
        });
      }
      if (errors.confirmPassword) {
        setError("confirmPassword", {
          type: "server",
          message: errors.confirmPassword,
        });
      }
    }
    // reset after submission
    // reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-2 text-black"
    >
      <input {...register("email")} type="email" placeholder="Email" />
      {errors.email && (
        <p className="text-red-500">{`${errors.email.message}`}</p>
      )}
      <input {...register("password")} type="password" placeholder="Password" />
      {errors.password && (
        <p className="text-red-500">{`${errors.password.message}`}</p>
      )}
      <input {...register("confirmPassword")} type="password" />
      {errors.confirmPassword && (
        <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-700 disabled:bg-gray-700 text-white rounded-sm py-2 px-10"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
