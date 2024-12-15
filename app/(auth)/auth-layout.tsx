import NextTopLoader from "nextjs-toploader";
import "./globals.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <NextTopLoader color="#f10353" height={5} showSpinner={false} />
        {children}
      </div>
    </>
  );
}
