import React from "react";
import { Button } from "./ui/button";
import { handleScheduleClick } from "@/lib/utils";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LeadScalr</h3>
            <p className="text-gray-400">
              We help SaaS and service businesses build profitable lead
              machines.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-gray-400 hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-400 mb-4">
              Ready to flood your pipeline with qualified leads?
            </p>
            <Button
              onClick={handleScheduleClick}
              className="h-5 w-15 bg-gradient-to-b from-[#04B1DB] to-[#0464F6] hover:from-green-500 hover:to-green-700 text-white px-4 py-2 rounded-md text-sm font-semibold"
            >
              Schedule a Free Call
            </Button>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} LeadScalr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
