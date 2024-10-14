import Header from "./Header";
import SignInForm from "./SignInForm";

export default function MacBookAir({ className = "" }: MacBookAirProps) {
  return (
    <div
      className={`font-manrope flex w-full flex-col items-center gap-y-[13px] bg-white pb-9 pl-7 pr-[22px] pt-[13px] leading-normal tracking-[0.2px] ${className}`}
    >
      <Header />
      <SignInForm />
      <div className="flex flex-wrap items-center justify-between gap-x-20 gap-y-3 self-stretch px-[38px] pt-9 font-semibold leading-normal text-[slategray] min-[1270px]:flex-nowrap" >
        <div>Privacy Policy</div>
        <div>Copyright 2024</div>
      </div>
    </div>
  );
}

interface MacBookAirProps {
  className?: string;
}
