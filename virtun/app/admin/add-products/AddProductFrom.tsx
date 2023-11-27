"use client";

import Heading from "@/app/components/Heading";
import CategoryInput from "@/app/components/inputs/CategoryInput";
import CustomCheckBox from "@/app/components/inputs/CustomCheckBox";
import Input from "@/app/components/inputs/Input";
import TextArea from "@/app/components/inputs/TextArea";
import { categories } from "@/utils/ategories";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const AddProductFrom = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      brand: "",
      category: "",
      inStock: false,
      images: [],
      price: "",
    },
  });
  const category = watch("category");
  const setConstantValue = (id: string, value: any) => {
    setValue(id, value,{
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    })
  }
  return (
    <>
      <Heading title="Agregar producto" center />
      <Input
        id="name"
        label="Nombre"
        disabled={isLoading}
        register={register}
        errors={errors}
      />
      <Input
        id="price"
        label="Precio"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="number"
        required
      />
      <TextArea
        id="description"
        label="Descripcion"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <CustomCheckBox
        id="inStock"
        register={register}
        label="El producto esta disponible actualmente"
      />
      <div className="w-full font-medium">
        <div className="mb-2 font-semibold">Select Category</div>
        <div className="grid gap-3 gird-cols-2 md:grid-cols-3 max-h[50vh] overflow-y-auto">
          {categories.map((item) => {
            if (item.label === "All") {
              return null;
            }

            return (
              <CategoryInput key={item.label}
                onClick={(category) => setConstantValue("category", category)}
                selected={category === item.label}
                label={item.label}
              />
            );
          })}
        </div>
      </div>
      <div className="w-full flex flex-col flex-wrap gap-4">
        <div className="font-bold">
          Ingresa la imagen de tu plato
        </div>

      </div>
    </>
  );
};

export default AddProductFrom;
