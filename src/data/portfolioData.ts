export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  targetAudience: string;
  goal: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "青空クリニック",
    category: "医療",
    image: "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "地域に根ざした小児科クリニックのWebサイト。予約システムと診療情報を分かりやすく提供。",
    technologies: ["Next.js", "Tailwind CSS", "Supabase"],
    targetAudience: "地域の子育て世帯",
    goal: "オンライン予約の促進と診療情報の明確な提供による患者満足度の向上"
  },
  {
    id: 2,
    title: "SAKURA美容室",
    category: "美容",
    image: "https://images.pexels.com/photos/3992861/pexels-photo-3992861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "トレンドを取り入れた美容室のブランドサイト。予約機能とスタイリスト紹介が特徴。",
    technologies: ["React", "Styled Components", "Firebase"],
    targetAudience: "20代〜40代の女性",
    goal: "ブランドイメージの向上と新規顧客獲得"
  },
  {
    id: 3,
    title: "山田農園オンラインショップ",
    category: "EC",
    image: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "有機野菜を販売する農園のECサイト。サブスクリプションモデルを導入。",
    technologies: ["Shopify", "Liquid", "JavaScript"],
    targetAudience: "健康志向の30代〜50代",
    goal: "有機野菜の定期購入者獲得とブランド認知度向上"
  },
  {
    id: 4,
    title: "テックイノベーション株式会社",
    category: "企業",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "ITコンサルティング企業のコーポレートサイト。事業内容と実績を分かりやすく紹介。",
    technologies: ["WordPress", "Custom Theme", "jQuery"],
    targetAudience: "企業経営者・IT部門責任者",
    goal: "企業ブランディングの強化と問い合わせ数の増加"
  },
  {
    id: 5,
    title: "グリーンエナジー採用サイト",
    category: "採用",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "再生可能エネルギー企業の採用特設サイト。企業理念や働き方を詳細に紹介。",
    technologies: ["Vue.js", "Nuxt.js", "GSAP"],
    targetAudience: "第二新卒・キャリア採用候補者",
    goal: "企業文化の発信と質の高い応募者の獲得"
  },
  {
    id: 6,
    title: "海の家リゾートLP",
    category: "LP",
    image: "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "南国リゾートホテルの夏季キャンペーン用ランディングページ。",
    technologies: ["HTML", "SCSS", "JavaScript"],
    targetAudience: "20代〜40代のカップル・家族",
    goal: "夏季予約の促進とSNS拡散"
  }
];

export default portfolioData;