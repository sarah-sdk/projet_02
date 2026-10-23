const colorClasses = {
  blue: "text-blue-400",
  green: "text-green-400",
  yellow: "text-yellow-400",
} as const;

type StatCardColor = keyof typeof colorClasses;

export default function StatCard({
  title,
  stat,
  color,
  textAlign,
}: {
  title: string;
  stat: number;
  color: StatCardColor;
  textAlign: string | null;
}) {
  return (
    <div className={`bg-gray-800 p-6 rounded-lg shadow-lg ${textAlign} mb-2`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className={`text-4xl font-bold ${colorClasses[color]}`}>{stat}</p>
    </div>
  );
}
