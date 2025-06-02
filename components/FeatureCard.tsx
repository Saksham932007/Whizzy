import React from "react";
import {
  BrainCircuit,
  MessagesSquare,
  LineChart,
  FileText,
  Shield,
  Zap,
  Globe,
  Code,
} from "lucide-react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  const iconMap: Record<string, React.ReactNode> = {
    brain: <BrainCircuit className="h-6 w-6 text-indigo-400" />,
    messages: <MessagesSquare className="h-6 w-6 text-indigo-400" />,
    chart: <LineChart className="h-6 w-6 text-indigo-400" />,
    document: <FileText className="h-6 w-6 text-indigo-400" />,
    security: <Shield className="h-6 w-6 text-indigo-400" />,
    performance: <Zap className="h-6 w-6 text-indigo-400" />,
    globe: <Globe className="h-6 w-6 text-indigo-400" />,
    code: <Code className="h-6 w-6 text-indigo-400" />,
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
      <div className="relative bg-slate-900 p-6 rounded-xl border border-indigo-500/20">
        <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors border border-indigo-500/20">
          {iconMap[icon] || (
            <BrainCircuit className="h-6 w-6 text-indigo-400" />
          )}
        </div>
        <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-indigo-200">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
