import Link from 'next/link';
import IconComponent from '@/components/icons/IconComponent';

const Footer = () => {
  const socialLinks = [
    { icon: 'facebook', link: 'https://www.facebook.com/profile.php?id=100084336513986' },
    { icon: 'twitter', link: 'https://twitter.com/MzesID' },
    { icon: 'instagram', link: 'https://www.instagram.com/reliv.ee/' },
    { icon: 'github', link: 'https://github.com/rel1vee' },
    { icon: 'linkedin', link: 'https://www.linkedin.com/in/muh-zaki-erbai-syas/' },
  ];

  return (
    <footer className="bg-emerald-950 py-8">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        <div className="text-white text-center md:text-left mb-4 md:mb-0">
          &copy; 2024 Mzes. All rights reserved.
        </div>
        <div className="flex justify-center">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-emerald-300 mx-2 transition-colors duration-300"
            >
              <IconComponent name={link.icon} className="w-6 h-6" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;