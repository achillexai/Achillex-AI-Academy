import Image from "next/image";

const Logo = () => {
  return (
    <div>
      <Image
        src="/logo.svg"
        height={50}
        width={50}
        alt="logo"
        loading="eager"
      />
    </div>
  );
};

export default Logo;
