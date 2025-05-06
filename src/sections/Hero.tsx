import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';
import Button from '../components/Button';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ものづくりの現場から、<br />
            <span className="text-blue-600">伝わる</span>Webへ。
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            メーカーで製品・サービスの企画～開発に携わりながら、<br className="hidden md:block" />
            Tech0 Bootcampで培ったWeb開発スキルを活かし、<br className="hidden md:block" />
            LP・HP・Webアプリの開発を行っています。
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                企画者として培った「ユーザー視点」「構成力」「目的を伝える言葉選び」を活かし、Webでも"伝わる設計"を大切にしています。
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                AIを活用した高速かつ柔軟な開発を強みとしており、納期やコストに配慮した提案・制作を心がけています。
              </p>

            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="プロフィール写真"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;