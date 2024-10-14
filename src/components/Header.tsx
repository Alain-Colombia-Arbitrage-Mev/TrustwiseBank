import LogoIcon from "./assets/LogoIcon";
import LogoTextIcon from "./assets/LogoTextIcon";

export default function Header({ className = "" }: HeaderProps) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-10 gap-y-[15px] self-stretch pl-[22px] pr-7 text-left min-[1270px]:flex-nowrap ${className}`}
    >
      <LogoIcon className="h-8 w-8 flex-shrink-0" />
      <div className="flex flex-grow flex-wrap items-center justify-between gap-x-10 gap-y-[9.5px] leading-normal text-gray-900 min-[1270px]:flex-nowrap" >
        <div className="flex flex-col items-center">
          <LogoTextIcon className="h-[19px] w-36 flex-shrink-0" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-semibold min-[1270px]:flex-nowrap" >
          <div>Personal</div>
          <div>Business</div>
          <div>Help & FAQ</div>
        </div>
        <div className="flex items-center justify-end pl-3">
          <button className="rounded-xl bg-green-300 px-5 py-1.5 font-extrabold" >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

interface HeaderProps {
  className?: string;
}
