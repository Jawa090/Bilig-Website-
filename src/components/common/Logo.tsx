import { Link } from "react-router-dom";

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo = ({ className = "", light = false }: LogoProps) => {
  return (
    <Link to="/" className={`flex items-center gap-2 group ${className}`}>
      {/* Icon portion of 1.png (Cropped to only show the circular mark) */}
      <div className="relative h-10 w-10 overflow-hidden shrink-0">
        <img 
          src="/1.png" 
          alt="Optimum Logo" 
          className={`absolute left-0 h-full max-w-none object-contain transition-transform duration-500 group-hover:scale-110 ${light ? 'brightness-0 invert' : ''}`}
          style={{ width: 'auto' }} // Keep original aspect ratio to allow cropping
        />
      </div>
      
      {/* Text portion recreated with HTML/CSS for clarity and same style */}
      <div className="flex flex-col leading-none ml-1">
        <span className={`text-xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-[#0d6e7e]'}`}>
          OPTIMUM
        </span>
        <span className={`text-[9px] font-bold tracking-[0.35em] mt-0.5 ${light ? 'text-white/70' : 'text-[#4e7d8d]'}`}>
          GLOBAL SOLUTIONS
        </span>
      </div>
    </Link>
  );
};

export default Logo;
