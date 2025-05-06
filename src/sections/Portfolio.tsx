import React from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "木漏れ日サプリ",
      description: "忙しい30代男性の心と体を、自然の力でそっと整える\"植物由来\"の習慣サプリ。自然の恵みと科学の安心感を、「木のぬくもり」「朝の光」「森の静けさ」などのビジュアルで表現したナチュラルテイストのLP。",
      image: "/images/komorepill.png",
      link: "https://komorepill.netlify.app/",
      concept: "健康食品にありがちなゴリ押し感ではなく、やさしい・丁寧・継続をイメージする言葉選びとトーン&マナーで制作。"
    },
    {
      title: "Pet Portraits",
      description: "うちの子の\"今\"を、やさしく美しく残す。ペットフォト撮影サービス。忙しい毎日の中でも、ふと癒される\"うちの子\"の仕草や表情を、自然体で心に残る形に。",
      image: "/images/petportraits.png",
      link: "https://petportraits.netlify.app/",
      concept: "プロカメラマンがご自宅やお好きな場所に出張し、家族の一員であるペットとの\"かけがえのない今\"を写真で記録するサービスのプロモーションサイト。"
    },
    {
      title: "InsightSync",
      description: "人とAIの共創で、ビジネスの意思決定を進化させる。組織内の会議・チャット・議事録などを自動で要約・可視化し、チームの「判断材料」をリアルタイムで整理するAIツール。",
      image: "/images/insightsync.png",
      link: "https://insightsync.netlify.app/",
      concept: "SaaS系企業の信頼性・革新性・BtoBらしい堅実さを表現しつつ、未来感あるビジュアルとわかりやすい構成で設計。"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">制作実績</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            実践的なスキルと可能性を示すために制作したポートフォリオ作品です。
            それぞれのプロジェクトで、目的に応じた最適な表現方法を追求しています。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">コンセプト:</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {project.concept}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  サイトを見る
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;