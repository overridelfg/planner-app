"use client";
import AuthService from "@/services/auth.service";
import Button from "@/ui/Button";
import { Field, Form, Formik } from "formik";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { useActions } from "@/hooks/useActions";
import { useAuthSelector } from "@/hooks/useAuth";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "@/store/store";
import Loader from '@/assets/loader.svg'
import Image from "next/image";

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const route = useRouter();
  const { login } = useActions();
  const { user, isLoading, isError, isSuccess, message } = useAuthSelector();

  if (isSuccess) {
    route.replace("/home");
  }

  const loginReq = (email: string, password: string) => {
    login({ email, password });
    // return diAuthService.login({email, password}).then((user) => {
    //     route.replace('/home')
    // }).catch((error) => {
    //     console.log(error);
    // });
  };

  const registerSecondStepValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("This field is required."),
    password: Yup.string()
      .min(4, "Min 4 letters")
      .required("This field is required."),
  });

  return (
    <div className="bg-sidebar flex flex-col justify-center items-center w-[500px] p-10 rounded-xl gap-7">
      <h1 className="text-2xl">Log in</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          loginReq(values.email, values.password);
        }}
        validationSchema={registerSecondStepValidationSchema}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ errors }) => (
          <Form className="flex flex-col w-full gap-5">
            <div className={`flex-col gap-1 flex`}>
              <label className="text-xs" htmlFor="email">
                Email
              </label>
              <Field
                className="p-2 text-bg rounded-sm"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address..."
              />
              {errors.email ? (
                <label className="text-xs text-error">{errors.email}</label>
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
                placeholder="Enter your password..."
              />
              {errors.password ? (
                <label className="text-xs text-error">{errors.password}</label>
              ) : null}
            </div>
            <Button
            type="submit"
             className={"flex w-full h-10 justify-center gap-2"}
             disabled = {isLoading} >
                {isLoading ? (
                    <Image
                    priority
                    src={Loader}
                    width={24}
                    height={24}
                    alt="Loading"
                    />
                ) : null}
                <h2>Log in</h2>
            </Button>
            <label className="text-error">{isError && message}</label>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
