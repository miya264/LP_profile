import React from 'react';
import { Users, Lightbulb, Rocket, Bot } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Users size={24} />,
      title: "ユーザー視点の設計",
      description: "製品開発で培った「使う人の立場で考える」視点を活かし、真に必要とされる機能と使いやすさを実現します"
    },
    {
      icon: <Lightbulb size={24} />,
      title: "伝わる構成力",
      description: "目的やメッセージを明確にし、ユーザーの行動を促す効果的な導線と情報設計を提供します"
    },
    {
      icon: <Bot size={24} />,
      title: "AI活用による効率化",
      description: "最新のAI技術を活用し、開発の効率化と品質の向上を実現。コストと納期の最適化を図ります"
    },
    {
      icon: <Rocket size={24} />,
      title: "柔軟な提案・対応",
      description: "「とりあえず相談したい」「なんとなくのイメージしかない」そんな段階でも、最適な方法を一緒に考えます"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">できること</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          ものづくりの経験とWeb開発のスキルを組み合わせ、<br />
          あなたの「伝えたい」を効果的なカタチにします。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;