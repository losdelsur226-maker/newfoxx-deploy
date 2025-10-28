export interface Template {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface ChatMessage {
  id: string;
  role: 'bot' | 'user';
  content: string;
  timestamp: number;
}

export interface WebsiteData {
  templateId: string;
  businessName?: string;
  colors?: string;
  features?: string;
  logo?: string;
  additionalInfo?: string;
}
