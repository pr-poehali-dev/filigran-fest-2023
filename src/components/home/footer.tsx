import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center mb-4">
              <span className="bg-gradient-to-r from-filigree-yellow via-filigree-orange to-filigree-lime text-transparent bg-clip-text font-bold text-xl">
                Филигрань
              </span>
              <span className="ml-1 text-black font-light text-xl">fest</span>
            </Link>
            <p className="text-gray-600 max-w-md">
              «Филигрань fest» – ремикс традиций и инноваций! Фестиваль народных художественных промыслов и современных тенденций в искусстве, дизайне и культуре.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-filigree-orange transition-colors">
                <Icon name="Instagram" />
              </a>
              <a href="#" className="text-gray-500 hover:text-filigree-orange transition-colors">
                <Icon name="Facebook" />
              </a>
              <a href="#" className="text-gray-500 hover:text-filigree-orange transition-colors">
                <Icon name="Twitter" />
              </a>
              <a href="#" className="text-gray-500 hover:text-filigree-orange transition-colors">
                <Icon name="Telegram" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-filigree-orange transition-colors">Главная</Link></li>
              <li><Link to="/program" className="text-gray-600 hover:text-filigree-orange transition-colors">Программа фестиваля</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-filigree-orange transition-colors">О фестивале</Link></li>
              <li><Link to="/contacts" className="text-gray-600 hover:text-filigree-orange transition-colors">Контакты</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>г. Вача, Нижегородская область</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:info@filigran-fest.ru" className="hover:text-filigree-orange transition-colors">info@filigran-fest.ru</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+78001234567" className="hover:text-filigree-orange transition-colors">8 (800) 123-45-67</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-12 pt-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Филигрань fest. Все права защищены.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link to="/privacy" className="hover:text-filigree-orange transition-colors">Политика конфиденциальности</Link>
            <Link to="/terms" className="hover:text-filigree-orange transition-colors">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
