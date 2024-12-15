import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import "./landing-page.css";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NextTopLoader color="#29a8bf" height={5} showSpinner={false} />
      {children}

      {/* jQuery must load first */}
      <Script
        src="/assets/js/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />

      <Script src="/assets/js/bootstrap.min.js" strategy="beforeInteractive" />

      {/* Scripts that depend on jQuery */}
      <Script src="/assets/js/video_link.js" strategy="afterInteractive" />
      <Script src="/assets/js/video.js" strategy="afterInteractive" />
      <Script src="/assets/js/counter.js" strategy="afterInteractive" />
      <Script src="/assets/js/custom.js" strategy="afterInteractive" />
      <Script src="/assets/js/animation_links.js" strategy="afterInteractive" />
      <Script src="/assets/js/animation.js" strategy="afterInteractive" />
    </>
  );
}
