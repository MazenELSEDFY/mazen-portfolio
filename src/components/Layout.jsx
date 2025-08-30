import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { profile } from "../data/profile";

const NavItem = ({ to, children, className = "", onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md transition ${
        isActive ? "text-orange-500 font-semibold" : "hover:text-blue-600"
      } ${className}`
    }
  >
    {children}
  </NavLink>
);

export default function Layout() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top color accent */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-blue-600" />

      {/* Sticky, responsive navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
        <nav className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="h-14 flex items-center justify-between gap-3">
            {/* Brand / Name */}
            <NavLink to="/" className="text-base sm:text-lg font-extrabold tracking-tight text-blue-600">
              {profile.name?.split(" ")[0]+"'s Profile"|| "Mazen's Profile"}
            </NavLink>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-2 lg:gap-4 text-sm">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/about">About</NavItem>
              <NavItem to="/skills">Skills</NavItem>
              <NavItem to="/experience">Experience</NavItem>
              <NavItem to="/education">Education</NavItem>
              <NavItem to="/certificates">Certificates</NavItem>
              <NavItem to="/projects">Projects</NavItem>

              {/* CTA aligned right */}
              <NavItem
                to="/contact"
                className="ml-2 sm:ml-4 text-white bg-blue-600 hover:opacity-90 shadow-sm"
              >
                Contact
              </NavItem>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 ring-1 ring-blue-600/20 text-blue-600 hover:bg-blue-50"
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label="Toggle navigation"
            >
              {/* Icon: hamburger / close */}
              <svg
                className={`${open ? "hidden" : "block"} h-6 w-6`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${open ? "block" : "hidden"} h-6 w-6`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile menu panel */}
          <div
            id="mobile-menu"
            className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
              open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-2 grid gap-1 text-sm">
              <NavItem to="/" onClick={closeMenu} className="block">
                Home
              </NavItem>
              <NavItem to="/about" onClick={closeMenu} className="block">
                About
              </NavItem>
              <NavItem to="/skills" onClick={closeMenu} className="block">
                Skills
              </NavItem>
              <NavItem to="/experience" onClick={closeMenu} className="block">
                Experience
              </NavItem>
              <NavItem to="/education" onClick={closeMenu} className="block">
                Education
              </NavItem>
              <NavItem to="/certificates" onClick={closeMenu} className="block">
                Certificates
              </NavItem>
              <NavItem to="/projects" onClick={closeMenu} className="block">
                Projects
              </NavItem>
              <NavItem
                to="/contact"
                onClick={closeMenu}
                className="block text-white bg-blue-600 hover:opacity-90 text-center mt-1 shadow-sm"
              >
                Contact
              </NavItem>
            </div>
          </div>
        </nav>
      </header>

      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Global footer (responsive, centered) */}
      <footer className="border-t border-blue-600/10">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-center text-xs sm:text-sm text-blue-600/80">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
