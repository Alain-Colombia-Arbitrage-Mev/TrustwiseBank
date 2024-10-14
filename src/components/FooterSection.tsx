export default function FooterSection({ className = "" }: FooterSectionProps) {
  return (
    <footer
      className={`flex flex-wrap items-center justify-between gap-x-20 gap-y-3 self-stretch bg-white py-10 pl-9 pr-[38px] text-left text-base font-semibold leading-normal text-[slategray] min-[1270px]:flex-nowrap ${className}`}
    >
      <div>Privacy Policy</div>
      <div>Copyright 2024</div>
    </footer>
  );
}

interface FooterSectionProps {
  className?: string;
}
