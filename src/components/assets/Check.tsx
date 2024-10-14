export default function Check({ className = "" }: CheckProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="9.5" stroke="#E2E8F0"/>
      </svg>
      
    </div>
  );
}

interface CheckProps {
  className?: string;
}
