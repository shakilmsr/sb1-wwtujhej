export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  imageUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: string;
  imageUrl: string;
}