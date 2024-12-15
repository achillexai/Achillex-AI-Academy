import { SignUp } from "@clerk/nextjs";
import { House } from "lucide-react";
import Link from "next/link";
import AuthLayout from "../../auth-layout";

export default function Page() {
  return (
    <AuthLayout>
      <div className="relative h-screen flex items-center justify-center">
        <Link href="/" passHref>
          <div
            className="absolute top-4 left-4 flex items-center space-x-2 border
            border-gray-300 rounded-full shadow-lg p-3 transition-all"
            style={{
              backgroundColor: "#920c35",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <House size={24} />
          </div>
        </Link>
        <SignUp />
      </div>
    </AuthLayout>
  );
}
