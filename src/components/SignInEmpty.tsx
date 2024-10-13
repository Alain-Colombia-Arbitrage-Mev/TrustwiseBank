import Capa_x0020_ from "./assets/Capa_x0020_";
import Capa_x0020_1 from "./assets/Capa_x0020_1";
import Google from "./assets/Google";
import Apple from "./assets/Apple";
import EyeOff from "./assets/EyeOff";
import Check from "./assets/Check";
import HugeiconsTwitter from "./assets/HugeiconsTwitter";
import TeenyiconsInstagramOutline from "./assets/TeenyiconsInstagramOutline";
import Ellipse from "./assets/Ellipse";

export default function SignInEmpty({ className = "" }: SignInEmptyProps) {
  return (
    <div className={`flex w-full flex-col bg-white ${className}`}>
      <div className="font-manrope flex flex-grow flex-wrap justify-center leading-normal tracking-[0.2px] min-[1430px]:flex-nowrap" >
        <div className="flex flex-col items-center justify-center gap-y-4 bg-white px-1 pb-7 pt-1 leading-normal" >
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-[15px] pl-[5.6px] min-[1430px]:flex-nowrap" >
            <div className="flex h-8 w-8 flex-shrink-0 flex-col items-center">
              <Capa_x0020_ className="h-8 w-8 flex-shrink-0" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-[9.5px] min-[1430px]:flex-nowrap" >
              <div className="flex flex-col items-center">
                <Capa_x0020_1 className="h-[19px] w-36 flex-shrink-0" />
              </div>
              <div className="flex flex-wrap items-center justify-center min-[1430px]:flex-nowrap" >
                <div className="h-[73px] w-72 flex-shrink-0 bg-white" />
                <div className="h-[73px] w-72 flex-shrink-0 bg-white" />
              </div>
            </div>
          </div>
          <div className="flex items-end justify-center self-stretch pr-px pt-24 [max-width:769px]" >
            <div className="flex-grow text-center text-[32px] font-extrabold leading-tight text-gray-900" >
              Sign in
            </div>
          </div>
          <div className="flex items-center justify-center self-stretch pr-px [max-width:769px]" >
            <div className="flex-grow text-center tracking-[0.3px] text-[slategray]" >
              Send, spend and save smarter
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 pt-14 font-medium text-gray-900 min-[1430px]:flex-nowrap" >
            <div className="flex flex-col items-center justify-center rounded-xl border border-solid border-slate-200 px-[13px] py-[15px]" >
              <div className="flex items-center justify-center gap-x-2">
                <Google className="h-[22px] w-[22px] flex-shrink-0" />
                <div>Sign In with Google</div>
              </div>
            </div>
            <div className="flex items-center justify-center rounded-xl border border-solid border-slate-200 px-5 py-[15px]" >
              <div className="flex items-center justify-center gap-x-2">
                <Apple className="h-[22px] w-5 flex-shrink-0" />
                <div>Sign In with Apple</div>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-center pt-14">
            <div className="flex-grow rounded-xl border border-solid border-slate-200 p-[15px] [max-width:427px]" >
              <div className="tracking-[0.3px] text-slate-400">
                Username or email
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl border border-solid border-slate-200 p-[15px]" >
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 min-[1430px]:flex-nowrap" >
              <div className="w-[359px] flex-shrink-0 tracking-[0.3px] text-slate-400" >
                Password
              </div>
              <EyeOff className="h-6 w-6 flex-shrink-0" />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-36 gap-y-3 pt-2 font-semibold min-[1430px]:flex-nowrap" >
            <div className="flex items-center justify-center gap-x-3">
              <Check className="h-5 w-5 flex-shrink-0" />
              <div className="text-gray-900">Remember me</div>
            </div>
            <div className="text-indigo-600">Forgot Password?</div>
          </div>
          <div className="flex items-end justify-center pt-4">
            <div className="flex items-center pr-[17px]">
              <div className="rounded-xl px-[91px] py-4 text-center font-extrabold text-gray-900 [background-image:linear-gradient(90deg,_#89e1bc_16%,_#74a1df)]" >
                Sign In
              </div>
            </div>
          </div>
          <div className="flex items-end justify-center pt-4">
            <div className="text-center font-medium text-gray-900">
              <span>
                {"Don’t have an account? "}
                <span className="text-center font-extrabold">
                  Sign Up
                </span>
              </span>
            </div>
          </div>
          <div className="flex items-end justify-center pt-9">
            <div className="flex items-center pr-4">
              <div className="flex items-center justify-center gap-x-[11px]">
                <HugeiconsTwitter className="h-7 w-7 flex-shrink-0" />
                <TeenyiconsInstagramOutline className="h-7 w-7 flex-shrink-0" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-[473px] gap-y-3 pt-[70px] font-semibold text-[slategray] min-[1430px]:flex-nowrap" >
            <div>Privacy Policy</div>
            <div>Copyright 2024</div>
          </div>
        </div>
        <div className="bg-background- relative z-0 flex w-[663px] flex-shrink-0 flex-col items-center justify-end gap-y-5 bg-cover bg-center px-20 py-28 text-center text-white" >
          <div className="z-[1] self-stretch text-[40px] font-extrabold leading-[1.1] tracking-[0px]" >
            Get better with money
          </div>
          <div className="z-[2] flex items-center justify-center self-stretch text-sm font-medium leading-normal" >
            <p className="text-center">
              {
                "TrustWise  help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a "
              }
              <span className="font-extrabold text-yellow-400">{"$20 "}</span>
              bonus when you receive qualifying direct deposits
            </p>
          </div>
          <div className="z-[3] flex flex-wrap items-center justify-center gap-x-2 gap-y-[3px] pt-[7px] min-[1430px]:flex-nowrap" >
            <div className="h-1.5 w-6 flex-shrink-0 rounded-full bg-white text-center" />
            <Ellipse className="h-1.5 w-1.5 flex-shrink-0 text-center" />
          </div>
          <div className="bg-t-bg-pattern-modal-send-money-11frame absolute bottom-[13px] left-[11px] right-[17px] top-[19px] z-[4] flex bg-cover bg-center pl-[635px] pt-[993px]" >
            <div className="bg-modal-send-money absolute left-[calc(50%_+_-223.5px_+_38px)] top-[calc(50%_+_-223.5px_+_-110.65px)] z-[2] flex h-[447px] w-96 flex-shrink-0 flex-col items-end rounded-2xl bg-cover bg-center pb-96 pl-64 text-center" >
              <img
                className="h-20 w-32 flex-shrink-0 object-cover object-center drop-shadow-lg"
                src="/assets/balance.png"
                loading="lazy"
               />
            </div>
            <img
              className="absolute left-[71px] top-[calc(50%_+_-35px_+_130px)] z-[3] h-[70px] w-80 flex-shrink-0 rounded-xl object-cover object-center text-center drop-shadow-lg"
              src="/assets/frame-2.png"
              loading="lazy"
             />
          </div>
        </div>
      </div>
    </div>
  );
}

interface SignInEmptyProps {
  className?: string;
}
