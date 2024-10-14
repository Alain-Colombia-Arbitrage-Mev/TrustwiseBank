import { useState } from "react";
import GoogleLogo from "./assets/GoogleLogo";
import AppleLogo from "./assets/AppleLogo";
import EyeOffIcon from "./assets/EyeOffIcon";
import CheckboxIcon from "./assets/CheckboxIcon";
import TwitterIcon from "./assets/TwitterIcon";
import InstagramIcon from "./assets/InstagramIcon";
import MarketingSection from "./MarketingSection";

export default function SignInForm({ className = "" }: SignInFormProps) {
  const [password, setPassword] = useState("");
  const [usernameOrEmail, setUsernameOrEmail] = useState("");

  return (
    <section
      className={`flex flex-grow flex-wrap items-center justify-center self-stretch pr-0.5 pt-[13px] text-center min-[1270px]:flex-nowrap ${className}`}
    >
      <div className="flex flex-col items-center justify-center gap-y-4 self-stretch bg-white px-36 pb-11 pt-[34px] leading-normal" >
        <div className="w-96 text-center text-[32px] font-extrabold leading-tight text-gray-900" >
          Sign in
        </div>
        <div className="w-72 text-center tracking-[0.3px] text-[slategray]">
          Send, spend and save smarter
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 pt-[13px] font-medium text-gray-900 min-[1270px]:flex-nowrap" >
          <div className="flex flex-col items-center justify-center rounded-xl border border-solid border-slate-200 px-[13px] py-[15px]" >
            <div className="flex items-center justify-center gap-x-2">
              <GoogleLogo className="h-[22px] w-[22px] flex-shrink-0" />
              <div>Sign In with Google</div>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-xl border border-solid border-slate-200 px-5 py-[15px]" >
            <div className="flex items-center justify-center gap-x-2">
              <AppleLogo className="h-[22px] w-5 flex-shrink-0" />
              <div>Sign In with Apple</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end pt-[13px] text-center" >
          <div className="w-[427px] rounded-xl border border-solid border-slate-200 p-[15px] focus-within:[box-shadow:0_0_4px_#1e40af]" >
            <input
              className="flex w-full min-w-0 tracking-[0.3px] text-slate-400 [outline:none] placeholder:text-[#a0aec0]"
              placeholder="Username or email"
              id="username-or-email"
              type="text"
              value={usernameOrEmail}
              onChange={(e) => {
                setUsernameOrEmail(e.target.value);
              }}
             />
          </div>
        </div>
        <div className="flex w-[427px] flex-col items-center justify-center rounded-xl border border-solid border-slate-200 p-[15px] text-center focus-within:[box-shadow:0_0_4px_#1e40af]" >
          <div className="flex flex-wrap items-center justify-center min-[1270px]:flex-nowrap" >
            <input
              className="flex w-[359px] min-w-0 flex-shrink-0 flex-grow tracking-[0.3px] text-slate-400 [outline:none] placeholder:text-[#a0aec0]"
              placeholder="Password"
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
             />
            <EyeOffIcon className="h-6 w-6 flex-shrink-0 text-center" />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-36 gap-y-3 pt-[13px] font-semibold min-[1270px]:flex-nowrap" >
          <div className="flex items-center justify-center gap-x-3">
            <CheckboxIcon className="h-5 w-5 flex-shrink-0" />
            <div className="text-gray-900">Remember me</div>
          </div>
          <div className="text-indigo-600">Forgot Password?</div>
        </div>
        <div className="flex items-end justify-center pt-[13px] text-center">
          <button className="rounded-xl px-[91px] py-4 font-extrabold text-gray-900 [background-image:linear-gradient(90deg,_#89e1bc_16%,_#74a1df)]" >
            Sign In
          </button>
        </div>
        <div className="flex flex-col justify-center self-stretch pt-[13px] text-center [max-width:427px]" >
          <div className="font-medium text-gray-900">
            <span className="text-center">
              {"Don’t have an account? "}
              <span className="font-extrabold">Sign Up</span>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-[11px] gap-y-[11px] pt-[13px] text-center min-[1270px]:flex-nowrap" >
          <TwitterIcon className="h-7 w-7 flex-shrink-0" />
          <InstagramIcon className="h-7 w-7 flex-shrink-0" />
        </div>
      </div>
      <MarketingSection className="w-[560px]" />
    </section>
  );
}

interface SignInFormProps {
  className?: string;
}
