import ButtonUI from "@/components/ui/common/ButtonUI";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center p-12 gap-12">
      <h1>Traindg View</h1>
      <Link href="/examples">
        <ButtonUI>
          <div className="p-2 rounded-[16px]">그래프 보기</div>
        </ButtonUI>
      </Link>
    </main>
  );
}
