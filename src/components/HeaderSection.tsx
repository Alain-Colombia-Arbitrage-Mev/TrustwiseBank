import GoogleIcon from "./assets/GoogleIcon";
import AppleIcon from "./assets/AppleIcon";

export default function HeaderSection({ className = "" }: HeaderSectionProps) {
  return (
    <header
      className={`flex flex-wrap items-center justify-center gap-x-10 gap-y-[15px] self-stretch px-[22px] text-left min-[1270px]:flex-nowrap ${className}`}
    >
      <div className="flex h-8 w-8 flex-shrink-0 flex-col items-center">
        <GoogleIcon className="h-8 w-8 flex-shrink-0" />
      </div>
      <div className="flex flex-grow flex-wrap items-center justify-between gap-x-10 gap-y-[9.5px] leading-normal text-gray-900 min-[1270px]:flex-nowrap" >
        <div className="flex flex-col items-center">
          <AppleIcon className="h-[19px] w-36 flex-shrink-0" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-semibold min-[1270px]:flex-nowrap" >
          <div>Personal</div>
          <div>Business</div>
          <div>Help & FAQ</div>
        </div>
        <div className="flex items-center justify-end pl-3">
          <button className="rounded-xl bg-green-300 px-12 py-4 font-extrabold" >
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}

interface HeaderSectionProps {
  className?: string;
}
