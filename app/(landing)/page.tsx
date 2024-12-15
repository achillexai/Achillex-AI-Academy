import LandingLayout from "./landing-layout";
import LandingPage from "../components/LandingPage";
import "./landing-page.css";

export default function Page() {
  return (
    <LandingLayout>
      <LandingPage />
    </LandingLayout>
  );
}
