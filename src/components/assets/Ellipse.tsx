export default function Ellipse({ className = "" }: EllipseProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.5" cx="3.01877" cy="3.164" r="3" fill="white"/>
      </svg>
      
    </div>
  );
}

interface EllipseProps {
  className?: string;
}
