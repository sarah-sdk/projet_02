export default function StatCard({
  title,
  stat,
  color,
}: {
  title: string;
  stat: number;
  color: string;
}) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center mb-2">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className={`text-4xl font-bold text-${color}-400`}>{stat}</p>
    </div>
  );
}
