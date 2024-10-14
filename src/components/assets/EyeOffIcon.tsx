export default function EyeOffIcon({ className = "" }: EyeOffIconProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3L21 21" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.584 10.587C10.2087 10.9621 9.99781 11.4708 9.99762 12.0013C9.99743 12.5319 10.208 13.0408 10.583 13.416C10.958 13.7913 11.4668 14.0023 11.9973 14.0024C12.5279 14.0026 13.0367 13.7921 13.412 13.417" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9.363 5.36506C10.2204 5.11978 11.1082 4.9969 12 5.00006C16 5.00006 19.333 7.33306 22 12.0001C21.222 13.3611 20.388 14.5241 19.497 15.4881M17.357 17.3491C15.726 18.4491 13.942 19.0001 12 19.0001C8 19.0001 4.667 16.6671 2 12.0001C3.369 9.60506 4.913 7.82506 6.632 6.65906" stroke="#718096" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
    </div>
  );
}

interface EyeOffIconProps {
  className?: string;
}
