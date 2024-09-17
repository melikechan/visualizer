import NavigationButton from "../components/NavigationButton";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-3xl lg:text-4xl">visualizer</h1>
      <h2 className="text-2xl lg:text-3xl">visualize data structures and algorithms</h2>
      <p className="text-xl">by melikechan</p>

      <NavigationButton href="/algorithms">Get Started</NavigationButton>
    </main>
  );
}
