export default function HugeiconsTwitter({
  className = "",
}: HugeiconsTwitterProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.33334 21.5833C4.39251 22.7745 6.78301 23.3333 9.33334 23.3333C16.8933 23.3333 23.0557 17.3402 23.324 9.84432L25.6667 5.24999L21.7537 5.83332C20.9011 5.08143 19.8034 4.66659 18.6667 4.66666C15.666 4.66666 13.4167 7.60316 14.14 10.4767C9.99601 10.745 6.24051 8.19116 4.06818 4.78916C2.62618 9.68566 3.96318 15.582 7.58334 19.2162C7.58334 20.5882 4.08334 21.4072 2.33334 21.5833Z" stroke="#8AE2BD" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
    </div>
  );
}

interface HugeiconsTwitterProps {
  className?: string;
}
