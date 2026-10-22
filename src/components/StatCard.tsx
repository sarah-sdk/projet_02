export default function StatCard({
  title,
  stat,
  color,
  textAlign,
}: {
  title: string;
  stat: number;
  color: string;
  textAlign: string | null;
}) {
  return (
    <div className={`bg-gray-800 p-6 rounded-lg shadow-lg ${textAlign} mb-2`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className={`text-4xl font-bold text-${color}-400`}>{stat}</p>
    </div>
  );
}
