"use client";

import { useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    console.log(data);
    setIsLoading(false);
  }
  return (
    <>
      <Heading title="Bienvenido a VirtUn" />
      <Button
      outline
      label="Ingresa con Google"
      icon={AiOutlineGoogle}
      onClick={() => console.log("google")}
      />
      <hr className="bg-slate-300 w-full h-px" />
      <Input
        id="email"
        label="Correo"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Contraseña"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <Button label = {isLoading ? "Loading..." : "Login"} onClick={handleSubmit(onSubmit)} />
      <p className="text-sm">
        No tienes una cuenta? <Link className="underline" href="/register">Crea una aqui :3</Link>
      </p>
    </>
  );
};

export default LoginForm;
