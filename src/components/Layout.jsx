import { NavLink, Outlet } from "react-router-dom";
import { profile } from "../data/profile";

const NavItem = ({ to, children, className = "" }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-2 py-1 rounded-md transition ${
        isActive ? "text-orange-500 font-semibold" : "hover:text-blue-600"
      } ${className}`
    }
  >
    {children}
  </NavLink>
);

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-blue-600" />
      
      {/* keep navbar above page content */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b">
        <nav className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-4 text-sm">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/skills">Skills</NavItem>
          <NavItem to="/experience">Experience</NavItem>
          <NavItem to="/education">Education</NavItem>
          <NavItem to="/certificates">Certificates</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem
            to="/contact"
            className="ml-auto px-3 py-1.5 bg-blue-600 text-white hover:opacity-90 rounded-md"
          >
            Contact
          </NavItem>
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-blue-600/10">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-blue-600/80">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}