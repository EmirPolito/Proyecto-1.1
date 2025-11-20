interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  color?: string;
}

export default function FeatureCard({ title, description, icon, color = "teal" }: FeatureCardProps) {
  return (
    <div className="flex items-start gap-4">
      <span className={`inline-block p-3 text-${color}-400 bg-gray-800/50 rounded-xl`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
        </svg>
      </span>
      <div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
}
