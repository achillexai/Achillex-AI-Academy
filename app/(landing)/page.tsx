import LandingLayout from "./landing-layout";
import LandingPage from "../components/LandingPage";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import "./landing-page.css";

export default async function Page() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <LandingLayout>
      <LandingPage />
    </LandingLayout>
  );
}
