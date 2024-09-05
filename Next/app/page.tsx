// import Box from "@/components/ui/Box";
import Link from "next/link";

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
      <BoxUI boxShadow="type1">
        <div className="flex flex-col w-[320px] gap-[8px] pt-[20px] pb-[23px] px-[20px]">
          <div className="w-[57px]">
            <BoxUI colorTheme="dark">
              <div className="px-[13px] py-[5px]">LV.0</div>
            </BoxUI>
          </div>
          <div className="text-left text-2xl font-semibold">
            레벨을 높여
            <br /> 내 집을 만들어요!
          </div>
        </div>
      </BoxUI>

      <div className="relative">
        <div className="relative top-[0px]">
          <BoxUI boxShadow="type2">
            <div className="flex flex-col w-[320px] gap-[8px] py-[28px] pb-[57px] px-[32px] text-left">
              <div className="font-semibold text-2xl">저축</div>
              <div className="text-md">씨드 확보의 기초</div>
            </div>
          </BoxUI>
        </div>
        <div className="relative top-[-35px]">
          <BoxUI boxShadow="type2">
            <div className="flex flex-col w-[320px] gap-[8px] py-[28px] pb-[57px] px-[32px] text-left">
              <div className="font-semibold text-2xl">저축</div>
              <div className="text-md">씨드 확보의 기초</div>
            </div>
          </BoxUI>
        </div>
        <div className="relative top-[-70px]">
          <BoxUI boxShadow="type2">
            <div className="flex flex-col w-[320px] gap-[8px] py-[28px] pb-[57px] px-[32px] text-left">
              <div className="font-semibold text-2xl">저축</div>
              <div className="text-md">씨드 확보의 기초</div>
            </div>
          </BoxUI>
        </div>
      </div>
      <BoxUI colorTheme="dark">
        <div className="w-[320px] px-[72px] py-[26px] text-xl">
          더 많은 학습 하러 가기
        </div>
      </BoxUI>
    </main>
  );
}
