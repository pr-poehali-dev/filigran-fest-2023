import { Link } from "react-router-dom";
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import Icon from "./icon";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Главная", href: "/" },
  { label: "Программа фестиваля", href: "/program" },
  { label: "О фестивале", href: "/about" },
  { label: "Контакты", href: "/contacts" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center font-bold text-xl">
            <span className="bg-gradient-to-r from-filigree-yellow via-filigree-orange to-filigree-lime text-transparent bg-clip-text">
              Филигрань
            </span>
            <span className="ml-1 text-black font-light">fest</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium transition-colors hover:text-filigree-orange"
            >
              {item.label}
            </Link>
          ))}

          <Button className="bg-gradient-to-r from-filigree-yellow to-filigree-orange hover:opacity-90 text-black">
            Регистрация
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Открыть меню"
            >
              <Icon name="Menu" className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-lg font-medium transition-colors hover:text-filigree-orange"
                >
                  {item.label}
                </Link>
              ))}
              
              <Button className="mt-4 bg-gradient-to-r from-filigree-yellow to-filigree-orange hover:opacity-90 text-black">
                Регистрация
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
