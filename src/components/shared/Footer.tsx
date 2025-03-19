import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className=" mx-6 md:mx-12 lg:mx-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
             <div className="flex items-center gap-2">
                     
                      <span className="text-3xl font-bold">Subir Das</span>
                      </div>
            <p className="text-gray-300 text-sm leading-relaxed">
            I’m a passionate web developer with a knack for solving complex user experience problems. My mission is to create seamless, integrity-focused solutions that connect billions of people worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}

            
            
            <div className="space-y-4">
              <h3 className="font-semibold uppercase text-sm tracking-wider">Quick Link</h3>
              <ul className="space-y-2 text-gray-300">
              <li><Link href="#" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
                <li><Link href="/all-projects" className="hover:text-white transition">Projects</Link></li>
                <li><Link href="/all-blogs" className="hover:text-white transition">Blogs</Link></li>
              </ul>
            </div>
       

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold uppercase text-sm tracking-wider">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Akbarshah, Pahartali, Chattogram</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+8801689586905</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>subirdas1045@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

    

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Subir Das. All rights reserved. 
            <span className="mx-2">|</span>
           
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;