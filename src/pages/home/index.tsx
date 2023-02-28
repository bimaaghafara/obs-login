import { AuthGuard } from "components";

export function HomePage() {
  return (
    <AuthGuard>
      <div>HomePage</div>
    </AuthGuard>
  );
}
