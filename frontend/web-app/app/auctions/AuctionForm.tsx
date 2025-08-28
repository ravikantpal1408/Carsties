"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, HelperText, Spinner, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";

export default function AuctionForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { isSubmitting, isValid, isDirty, errors },
  } = useForm();

  function onSubmit(data: FieldValues) {
    console.log(data);
  }

  return (
    <form className="flex flex-col mt-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 block">
        <TextInput
          {...register("make", { required: "Make is required" })}
          placeholder="Make"
          color={errors?.make && "failure"}
        />
        <HelperText color="failure">
          {errors.make?.message as string}
        </HelperText>
      </div>
      <div className="mb-3 block">
        <TextInput
          {...register("model", { required: "Model is required" })}
          placeholder="Model"
          color={errors?.model && "failure"}
        />
        <HelperText color="failure">
          {errors.make?.message as string}
        </HelperText>
      </div>

      <div className="flex justify-between">
        <Button outline onClick={() => router.push("/")}>
          Cancel
        </Button>
        <Button
          outline
          color="green"
          type="submit"
          disabled={!isDirty || !isValid}
        >
          {isSubmitting && <Spinner size="sm" />}
          Submit
        </Button>
      </div>
    </form>
  );
}
