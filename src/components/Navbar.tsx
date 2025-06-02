import { useState } from "react";
import { Menu } from "lucide-react";
import { handleScheduleClick } from "@/lib/utils";
const NAV_ITEMS = [
  { label: "Services", id: "services" },
  { label: "Results", id: "results" },
  { label: "Process", id: "process" },
  { label: "About", id: "about" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -45;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0 z-50 border">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div
          className="text-xl font-bold text-gray-800 hover:cursor-pointer hover:text-primary"
          onClick={scrollToSection("home")}
        >
          LeadScalr
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 font-bold">
          {NAV_ITEMS.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={scrollToSection(id)}
              className="text-gray-600 hover:text-primary"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#"
            onClick={handleScheduleClick}
            className="bg-gradient-to-b from-[#04B1DB] to-[#0464F6] hover:from-green-500 hover:to-green-700 text-white px-4 py-2 rounded-md text-sm font-semibold"
          >
            Schedule a Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center font-bold">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-600 hover:text-primary focus:outline-none"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-in fade-in duration-500">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            {NAV_ITEMS.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={scrollToSection(id)}
                className="block py-2 text-gray-600 hover:text-primary"
              >
                {label}
              </a>
            ))}
            <a
              href="#"
              onClick={handleScheduleClick}
              className="inline-block bg-gradient-to-b from-[#04B1DB] to-[#0464F6] hover:from-green-500 hover:to-green-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
