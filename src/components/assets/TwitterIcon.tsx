export default function TwitterIcon({ className = "" }: TwitterIconProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.33337 21.5834C4.39254 22.7746 6.78304 23.3334 9.33337 23.3334C16.8934 23.3334 23.0557 17.3402 23.324 9.84441L25.6667 5.25008L21.7537 5.83341C20.9011 5.08153 19.8035 4.66668 18.6667 4.66675C15.666 4.66675 13.4167 7.60325 14.14 10.4767C9.99604 10.7451 6.24054 8.19125 4.06821 4.78925C2.62621 9.68575 3.96321 15.5821 7.58337 19.2162C7.58337 20.5882 4.08337 21.4072 2.33337 21.5834Z" stroke="#8AE2BD" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
    </div>
  );
}

interface TwitterIconProps {
  className?: string;
}
