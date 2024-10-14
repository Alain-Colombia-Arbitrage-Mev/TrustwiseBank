export default function TwitterIcon({ className = "" }: TwitterIconProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.33331 21.5834C4.39248 22.7745 6.78298 23.3334 9.33331 23.3334C16.8933 23.3334 23.0556 17.3402 23.324 9.84435L25.6666 5.25002L21.7536 5.83335C20.9011 5.08146 19.8034 4.66662 18.6666 4.66669C15.666 4.66669 13.4166 7.60319 14.14 10.4767C9.99598 10.745 6.24048 8.19119 4.06815 4.78919C2.62615 9.68569 3.96315 15.582 7.58331 19.2162C7.58331 20.5882 4.08331 21.4072 2.33331 21.5834Z" stroke="#8AE2BD" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
    </div>
  );
}

interface TwitterIconProps {
  className?: string;
}
