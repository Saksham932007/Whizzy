export interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

export interface ExamplePrompt {
  id: string;
  text: string;
  category: "general" | "technical" | "creative";
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}
