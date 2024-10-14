export default function GoogleIcon({ className = "" }: GoogleIconProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 30.54 30.54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.8915 29.8916C23.1159 29.8916 29.7831 23.2244 29.7831 15C29.7831 6.77568 23.1159 0.108521 14.8915 0.108521C6.66716 0.108521 0 6.77568 0 15C0 23.2244 6.66716 29.8916 14.8915 29.8916Z" fill="#050505" stroke="black" stroke-width="0.755906" stroke-miterlimit="22.9256" stroke-linecap="round" stroke-linejoin="round"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.09436 10.2771H13.1466V13.4519H10.1554V19.7229H6.84942V13.4519H4.09436V10.2771Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0038 19.7229H14.9972H13.6715L11.5924 10.2771H15.0943L15.9647 15.0021L16.0005 15.1646L17.0763 10.2771H18.6405H20.2048L21.2806 15.1646L21.3163 15.0021L22.1868 10.2771H25.6887L23.6095 19.7229H22.2839H20.2772H19.7125L18.6405 14.8526L17.5685 19.7229H17.0038Z" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6715 19.7229L11.5924 10.2771H15.4894L17.5685 19.7229H13.6715Z" fill="url(#paint0_linear_97_8263)"/>
      <defs>
      <linearGradient id="paint0_linear_97_8263" x1="21.2511" y1="21.6156" x2="9.80474" y2="14.9256" gradientUnits="userSpaceOnUse">
      <stop stop-color="#A658D7"/>
      <stop offset="0.219608" stop-color="#5E6FF7"/>
      <stop offset="1" stop-color="#67E4B9"/>
      </linearGradient>
      </defs>
      </svg>
      
    </div>
  );
}

interface GoogleIconProps {
  className?: string;
}
