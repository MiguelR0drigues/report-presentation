import Link from "next/link";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <img
                src="https://svgshare.com/i/vLB.svg"
                width={100}
                style={{
                  backgroundColor: "rgba(93, 93, 255, 0.1)",
                  borderRadius: "50%",
                  marginTop: "30px",
                }}
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="/Relatorio_Estagio_Miguel_Rodrigues.pdf"
                  className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3"
                  download
                >
                  Download Relatório
                </a>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
