"use client";

import { use, useEffect, useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/Button";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";


interface LoginFormProps {
  currentUser: SafeUser | null;
}
const LoginForm:React.FC<LoginFormProps> = ({currentUser}) => {
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

  const router = useRouter();
  useEffect(() => {
    if(currentUser) {
      router.push("/cart");
      router.refresh();
    }});

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        router.push("/cart");
        router.refresh();
        toast.success("Sesión iniciada exitosamente");
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    }).finally(() => setIsLoading(false));
  };

  if(currentUser) {
    return <p className="text-center">Ya estas logueado</p>
  }
  return (
    <>
      <Heading title="Bienvenido a VirtUn" />
      <Button
        outline
        label="Ingresa con Google"
        icon={AiOutlineGoogle}
        onClick={() => {signIn("google")}}
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
      <Button
        label={isLoading ? "Loading..." : "Login"}
        onClick={handleSubmit(onSubmit)}
      />
      <p className="text-sm">
        No tienes una cuenta?{" "}
        <Link className="underline" href="/register">
          Crea una aqui :3
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
