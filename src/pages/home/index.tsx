export function HomePage() {
  const userId = localStorage.getItem("userId");
  return <div>Wellcome {userId}</div>;
}
