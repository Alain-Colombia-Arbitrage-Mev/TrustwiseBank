export default function MarketingSection({
  className = "",
}: MarketingSectionProps) {
  return (
    <aside
      className={`bg-background flex flex-col items-center gap-y-2.5 self-stretch bg-cover bg-center px-[30px] py-14 text-center text-white ${className}`}
    >
      <div className="bg-frame h-96 w-96 flex-shrink-0 bg-contain bg-center bg-no-repeat" />
      <div className="self-stretch text-4xl font-extrabold leading-[1.1] tracking-[0px]" >
        Get better with money
      </div>
      <div className="flex flex-col justify-center self-stretch pt-2.5 [max-width:500px]" >
        <div className="flex items-center justify-center text-center text-sm font-medium leading-normal" >
          <p>
            {
              "TrustWise  help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a "
            }
            <span className="text-center font-extrabold text-yellow-400">
              {"$20 "}
            </span>
            bonus when you receive qualifying direct deposits
          </p>
        </div>
      </div>
    </aside>
  );
}

interface MarketingSectionProps {
  className?: string;
}
