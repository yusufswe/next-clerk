import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <main>
      <header className="flex justify-between p-8">
        <h1>Dashboard</h1>
        <UserButton />
      </header>
    </main>
  );
}
