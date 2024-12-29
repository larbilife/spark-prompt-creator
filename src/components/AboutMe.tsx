import { Button } from "@/components/ui/button";
import { 
  Github, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  CreditCard
} from "lucide-react";

export const AboutMe = () => {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5 text-white" />,
      href: "https://github.com/larbilife",
      label: "GitHub",
    },
    {
      icon: <Facebook className="h-5 w-5 text-white" />,
      href: "https://www.facebook.com/larbiaboudi/",
      label: "Facebook",
    },
    {
      icon: <Twitter className="h-5 w-5 text-white" />,
      href: "https://x.com/larbi_aboudi",
      label: "Twitter",
    },
    {
      icon: <Linkedin className="h-5 w-5 text-white" />,
      href: "https://www.linkedin.com/in/larbiaboudi/",
      label: "LinkedIn",
    },
    {
      icon: <Instagram className="h-5 w-5 text-white" />,
      href: "https://www.instagram.com/aboudi_larbi/",
      label: "Instagram",
    },
    {
      icon: <Youtube className="h-5 w-5 text-white" />,
      href: "https://www.youtube.com/@larbi_aboudi",
      label: "YouTube",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 text-white">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-white">About Me</h2>
        <p className="text-lg text-white/80">
          Hi, I'm Larbi Aboudi, a passionate developer and creator of this AI Prompt Generator. 
          I specialize in building tools that help people leverage AI technology effectively.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            {link.icon}
          </a>
        ))}
      </div>

      <div className="text-center space-y-4">
        <h3 className="text-2xl font-semibold text-white">Support This Project</h3>
        <p className="text-white/80">
          If you find this tool helpful, consider supporting its development.
        </p>
        <Button 
          className="bg-[#0070BA] hover:bg-[#003087] transition-colors text-white"
          onClick={() => window.open('https://www.paypal.com/paypalme/apktec', '_blank')}
        >
          <CreditCard className="mr-2 h-4 w-4 text-white" />
          Support via PayPal
        </Button>
      </div>
    </div>
  );
};