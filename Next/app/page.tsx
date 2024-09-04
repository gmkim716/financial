import Button from "@/components/ui/basic/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center p-12 gap-12">
      <h1>Traindg View</h1>
      <Link href="/tradingView-collections">
        <Button>그래프 보기</Button>
      </Link>
    </main>
  );
}
