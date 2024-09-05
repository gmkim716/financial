// import Box from "@/components/ui/Box";
import Link from "next/link";

import { Box } from "@mui/material";
import Button from "@/components/ui/common/ButtonUI";
import BoxUI from "@/components/ui/common/BoxUI";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center p-12 gap-12">
      <h1>Traindg View</h1>
      <Link href="/tradingView-collections">
        <Button>그래프 보기</Button>
      </Link>
      {/* 테스트 진행 중인 컴포넌트 */}
      <BoxUI colorTheme="light">
        <BoxUI colorTheme="dark">마루새싹</BoxUI>
        <BoxUI colorTheme="dark">마루새싹</BoxUI>
      </BoxUI>
      <BoxUI colorTheme="dark">
        <h1>더 많은 학습 하러 가기</h1>
      </BoxUI>

      <Box>djdjdddjdj</Box>
    </main>
  );
}
