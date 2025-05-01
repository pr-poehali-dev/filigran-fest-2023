import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export function ProgramSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Программа фестиваля</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">
              Мероприятия и активности для всех возрастов и интересов
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/program" className="flex items-center gap-2">
              Полная программа <Icon name="ArrowRight" size={16} />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="aspect-video bg-gray-100 relative overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                  {event.date}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Icon name="Clock" size={14} />
                  <span>{event.time}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span>{event.location}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${event.registration ? 'bg-filigree-orange/10 text-filigree-orange' : 'bg-green-100 text-green-800'}`}>
                    {event.registration ? 'Требуется регистрация' : 'Свободный вход'}
                  </span>
                  <Button variant="ghost" size="sm" className="text-filigree-orange">
                    Подробнее
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const events = [
  {
    title: "Мастер-класс по филиграни",
    description: "Узнайте секреты традиционной казаковской филиграни от опытных мастеров.",
    date: "10 июня",
    time: "12:00-14:00",
    location: "Павильон А",
    image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    registration: true
  },
  {
    title: "Выставка современных художников",
    description: "Экспозиция работ современных художников, вдохновленных традиционными промыслами.",
    date: "10-12 июня",
    time: "10:00-20:00",
    location: "Галерея",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    registration: false
  },
  {
    title: "Цифровое искусство и традиции",
    description: "Лекция о слиянии цифрового искусства и традиционных ремесел в современном мире.",
    date: "11 июня",
    time: "15:00-16:30",
    location: "Лекторий",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    registration: true
  }
];
