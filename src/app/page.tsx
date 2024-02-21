import LoginForm from "@/components/Auth/LoginForm/LoginForm";
import DashboardLayout from "@/components/Dashboard/dashboard-layout";
import { getAccessToken, getUserFromStorage } from "@/services/auth.helper";
import { IUser } from "@/types/auth.types";
import Button from "@/ui/Button";
import { GetServerSideProps } from "next";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

const Main: React.FC = async () => {
  return <div>hi</div>;
};

export default Main;
