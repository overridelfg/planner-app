import { Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

import Button from "@/ui/Button";
import { IRegisterForm } from "@/types/auth.types";
interface RegisterStepTwoProps {
  handleNextStep: (data: {
    [key in keyof IRegisterForm]?: string;
  }) => void;
}

const RegisterStepTwo: React.FC<RegisterStepTwoProps> = ({
  handleNextStep,
}) => {
  const registerSecondStepValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Min 4 letters")
      .required("This field is required."),
    password: Yup.string()
      .min(4, "Min 4 letters")
      .required("This field is required."),
  });

  return (
    <Formik
      initialValues={{ name: "", password: "" }}
      onSubmit={(values) => {
        handleNextStep({
          password: values.password,
          name: values.name,
        });
      }}
      validateOnChange={false}
      validationSchema={registerSecondStepValidationSchema}
    >
      {({ errors }) => (
        <Form className="flex flex-col w-full gap-5">
          <div className={`flex-col gap-1 flex`}>
            <label className="text-xs" htmlFor="username">
              Username
            </label>
            <Field
              className="p-2 text-bg rounded-sm"
              id="namr"
              name="name"
              type="text"
              placeholder="Enter your username..."
            />
            {errors.name ? (
              <label className="text-xs text-error">{errors.name}</label>
            ) : null}
          </div>
          <div className={`flex-col gap-1 flex`}>
            <label className="text-xs" htmlFor="password">
              Password
            </label>
            <Field
              className="p-2 text-bg rounded-sm"
              id="password"
              name="password"
              type="password"
              placeholder="Create password"
            />
            {errors.password ? (
              <label className="text-xs text-error">{errors.password}</label>
            ) : null}
          </div>
          <Button type="submit">Sign up</Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterStepTwo;
