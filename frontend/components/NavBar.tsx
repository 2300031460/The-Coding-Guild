import Link from "next/link";

const links = [
  { href: "/", label: "Dashboard" },
  { href: "/plans", label: "Plan Selection" },
  { href: "/conditions", label: "Conditions" },
  { href: "/evaluate", label: "Evaluate" },
  { href: "/payments", label: "Payments" },
  { href: "/admin", label: "Admin" },
];

export default function NavBar() {
  return (
    <header className="border-b border-[#1f3f6f] bg-gradient-to-r from-[#061a3a] via-[#0a2a58] to-[#133b72] shadow-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <h1 className="text-lg font-bold text-[#dff1ff]">Sentinel</h1>
        <nav className="flex flex-wrap justify-end gap-2 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-[#2a4f84] bg-[#0f3366]/70 px-3 py-1.5 text-[#e7f5ff] transition hover:-translate-y-0.5 hover:bg-[#1a4a8d]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
