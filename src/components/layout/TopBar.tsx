import { Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const TopBar = () => (
  <div className="bg-dark text-primary-foreground text-sm py-2 px-6 hidden md:block">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center gap-6">
        <a href="tel:7373076234" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
          <Phone size={14} /> +1 (737) 307-6234
        </a>
        <a href="mailto:info@optimumsolution.com" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
          <Mail size={14} /> info@optimumsolution.com
        </a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://x.com/optimumglo36418?s=11&t=lN5VxP8-HiWW452lvAvbSw" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
          <Twitter size={13} />
        </a>
        <a href="https://www.linkedin.com/company/optimum-global-solutions-llc/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
          <Linkedin size={13} />
        </a>
        <a href="https://www.instagram.com/optimumglobalsolutions?igsh=MWRidTZqb2d2cTN5Yg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full border border-primary-foreground/30 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all">
          <Instagram size={13} />
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
