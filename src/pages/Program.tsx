import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/home/footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Program = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredEvents = filter === "all" 
    ? events 
    : events.filter(event => event.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-filigree-yellow/20 via-filigree-orange/10 to-filigree-lime/20 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Программа фестиваля</h1>
            <p className="text-xl max-w-2xl text-gray-700">
              Вход на фестиваль бесплатный, однако на некоторые мероприятия требуется предварительная регистрация.
            </p>
          </div>
        </section>

        <section className="container py-12">
          <div className="mb-8">
            <Tabs defaultValue="day1" className="w-full">
              <div className="flex items-center justify-between mb-8 flex-col sm:flex-row gap-4">
                <TabsList className="bg-gray-100/80">
                  <TabsTrigger value="day1">10 июня</TabsTrigger>
                  <TabsTrigger value="day2">11 июня</TabsTrigger>
                  <TabsTrigger value="day3">12 июня</TabsTrigger>
                </TabsList>
                
                <div className="flex gap-2">
                  <Button 
                    variant={filter === "all" ? "default" : "outline"} 
                    onClick={() => setFilter("all")}
                    size="sm"
                  >
                    Все
                  </Button>
                  <Button 
                    variant={filter === "workshop" ? "default" : "outline"} 
                    onClick={() => setFilter("workshop")}
                    size="sm"
                  >
                    Мастер-классы
                  </Button>
                  <Button 
                    variant={filter === "lecture" ? "default" : "outline"} 
                    onClick={() => setFilter("lecture")}
                    size="sm"
                  >
                    Лекции
                  </Button>
                  <Button 
                    variant={filter === "exhibition" ? "default" : "outline"} 
                    onClick={() => setFilter("exhibition")}
                    size="sm"
                  >
                    Выставки
                  </Button>
                </div>
              </div>

              <TabsContent value="day1">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredEvents
                    .filter(event => event.day === "day1")
                    .map((event, index) => (
                      <EventCard key={index} event={event} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="day2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredEvents
                    .filter(event => event.day === "day2")
                    .map((event, index) => (
                      <EventCard key={index} event={event} />
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="day3">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredEvents
                    .filter(event => event.day === "day3")
                    .map((event, index) => (
                      <EventCard key={index} event={event} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

interface EventProps {
  event: {
    title: string;
    description: string;
    time: string;
    location: string;
    speaker?: string;
    image: string;
    registration: boolean;
    category: string;
    day: string;
  };
}

const EventCard = ({ event }: EventProps) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden border hover:shadow-md transition-shadow">
      <div className="md:w-1/3 aspect-video md:aspect-auto relative">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 text-xs font-medium rounded-full px-2 py-1 bg-white/90">
          {getCategoryLabel(event.category)}
        </div>
      </div>
      <div className="p-5 md:w-2/3 flex flex-col">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <Icon name="Clock" size={14} />
          <span>{event.time}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <span>{event.location}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{event.description}</p>
        
        {event.speaker && (
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <Icon name="User" size={16} />
            </div>
            <span className="text-sm font-medium">{event.speaker}</span>
          </div>
        )}
        
        <div className="flex items-center justify-between mt-auto">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${event.registration ? 'bg-filigree-orange/10 text-filigree-orange' : 'bg-green-100 text-green-800'}`}>
            {event.registration ? 'Требуется регистрация' : 'Свободный вход'}
          </span>
          
          {event.registration && (
            <Button size="sm" className="bg-gradient-to-r from-filigree-yellow to-filigree-orange hover:opacity-90 text-black">
              Зарегистрироваться
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

function getCategoryLabel(category: string) {
  switch (category) {
    case "workshop": return "Мастер-класс";
    case "lecture": return "Лекция";
    case "exhibition": return "Выставка";
    default: return category;
  }
}

const events = [
  {
    title: "Мастер-класс по филиграни",
    description: "Узнайте секреты традиционной казаковской филиграни от опытных мастеров. Участники смогут создать свое первое изделие под руководством опытных наставников.",
    time: "12:00-14:00",
    location: "Павильон А",
    speaker: "Мария Иванова, мастер филиграни",
    image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    registration: true,
    category: "workshop",
    day: "day1"
  },
  {
    title: "История казаковской филиграни",
    description: "Лекция об истории и развитии казаковской филиграни, ее уникальных особенностях и месте в современном мире.",
    time: "15:00-16:30",
    location: "Лекторий",
    speaker: "Алексей Петров, историк искусства",
    image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    registration: false,
    category: "lecture",
    day: "day1"
  },
  {
    title: "Выставка современных художников",
    description: "Экспозиция работ современных художников, вдохновленных традиционными промыслами. Представлены работы известных мастеров и молодых талантов.",
    time: "10:00-20:00",
    location: "Галерея",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    registration: false,
    category: "exhibition",
    day: "day1"
  },
  {
    title: "Цифровое искусство и традиции",
    description: "Лекция о слиянии цифрового искусства и традиционных ремесел в современном мире. Обсуждение новых технологий и их влияния на традиционные ремесла.",
    time: "15:00-16:30",
    location: "Лекторий",
    speaker: "Дмитрий Соколов, digital-художник",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    registration: true,
    category: "lecture",
    day: "day2"
  },
  {
    title: "Коллаборация: ювелиры и дизайнеры",
    description: "Мастер-класс по созданию современных украшений с использованием традиционных техник филиграни в коллаборации с модными дизайнерами.",
    time: "13:00-15:00",
    location: "Павильон Б",
    speaker: "Екатерина Смирнова и Олег Волков",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    registration: true,
    category: "workshop",
    day: "day2"
  },
  {
    title: "Фильм о мастерах филиграни",
    description: "Показ документального фильма о жизни и творчестве мастеров казаковской филиграни, их историях и наследии.",
    time: "18:00-19:30",
    location: "Кинозал",
    image: "https://images.unsplash.com/photo-1609234656388-0ff363383899?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    registration: false,
    category: "exhibition",
    day: "day2"
  },
  {
    title: "Мастер-класс для детей",
    description: "Специальный мастер-класс по работе с проволокой и созданию простых украшений для детей от 7 до 12 лет.",
    time: "11:00-12:30",
    location: "Детская зона",
    speaker: "Анна Кузнецова, педагог",
    image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    registration: true,
    category: "workshop",
    day: "day3"
  },
  {
    title: "Ярмарка изделий ручной работы",
    description: "Возможность приобрести уникальные изделия ручной работы от мастеров филиграни и других традиционных ремесел.",
    time: "10:00-19:00",
    location: "Площадь фестиваля",
    image: "https://images.unsplash.com/photo-1607344645866-009c320b63e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    registration: false,
    category: "exhibition",
    day: "day3"
  }
];

export default Program;
