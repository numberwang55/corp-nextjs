import Link from "next/link";

export default function Header() {
  return <div className="grid">
    <Link href="/">Home</Link>
    <Link href="/performance">Performance</Link>
    <Link href="/reliability">reliability</Link>
    <Link href="/scale">scale</Link>
  </div>;
}
