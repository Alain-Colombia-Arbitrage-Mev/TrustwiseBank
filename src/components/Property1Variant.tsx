import HeaderSection from "./HeaderSection";
import SignInForm from "./SignInForm";
import FooterSection from "./FooterSection";

export default function Property1Variant({
  className = "",
}: Property1VariantProps) {
  return (
    <div className={`flex w-full items-start ${className}`}>
      <main className="font-manrope flex h-full w-full flex-shrink-0 flex-col items-center overflow-clip bg-white pt-[13px] leading-normal tracking-[0.2px]" >
        <HeaderSection />
        <SignInForm />
        <FooterSection />
      </main>
    </div>
  );
}

interface Property1VariantProps {
  className?: string;
}
