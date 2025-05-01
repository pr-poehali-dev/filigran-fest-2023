export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">О фестивале</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            «Филигрань fest» – это не просто фестиваль, это лаборатория, где традиции встречаются с будущим, 
            создавая уникальный культурный код Вачского края.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border bg-gradient-to-br from-white to-gray-50 hover:shadow-md transition duration-300"
            >
              <div className={`w-12 h-12 mb-4 rounded-full flex items-center justify-center ${feature.bgColor}`}>
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg max-w-2xl mx-auto">
            Приготовьтесь увидеть, как старинное ремесло становится частью креативной экономики, 
            вдохновляет модных дизайнеров и захватывает digital-художников.
          </p>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Новый взгляд на традиции",
    description: "Казаковская филигрань встречается с современным дизайном, уличным искусством и digital-технологиями.",
    icon: "🔄",
    bgColor: "bg-filigree-yellow/20",
  },
  {
    title: "Коллаборации",
    description: "Здесь рождаются новые формы, когда мастера традиционных ремесел работают с современными художниками.",
    icon: "🤝",
    bgColor: "bg-filigree-orange/20",
  },
  {
    title: "Культурное переосмысление",
    description: "Переосмысление наследия через призму современных трендов в искусстве, дизайне и культуре.",
    icon: "💡",
    bgColor: "bg-filigree-lime/20",
  },
];
