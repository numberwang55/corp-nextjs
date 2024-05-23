import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="grid">
        <Link href="/performance">Performance</Link>
        <Link href="/reliability">reliability</Link>
        <Link href="/scale">scale</Link>
      </div>
      Home Page
    </div>
  );
}
