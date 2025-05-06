export interface Skill {
  category: string;
  items: string[];
}

const skillsData: Skill[] = [
  {
    category: "フロントエンド",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    category: "バックエンド",
    items: ["Node.js", "Express", "Firebase", "Supabase"]
  },
  {
    category: "デザイン",
    items: ["Figma", "Adobe XD", "Photoshop", "UI/UXデザイン"]
  },
  {
    category: "AI活用",
    items: ["要件定義支援", "プロトタイプ作成", "コード生成・最適化", "コンテンツ作成"]
  }
];

export default skillsData;