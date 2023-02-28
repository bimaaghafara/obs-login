import { Title } from "components";

export function HomePage() {
  const userId = localStorage.getItem("userId");
  return (
    <div>
      <Title size="text-xl" />
      <div className="mt-4 flex gap-4">
        <div>
          <button className="bg-blue-500 text-white rounded-md px-4 py-1">
            Home
          </button>
        </div>
        <div className="text-blue-600 text-6xl">Welcome {userId}</div>
      </div>
    </div>
  );
}
