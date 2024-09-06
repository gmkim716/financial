import RoundedBoxUI from "@/components/ui/common/RoundedBoxUI";

export default function LearningPage() {
  return (
    <main className="flex flex-col min-h-screen items-center p-12 gap-12">
      <RoundedBoxUI boxShadow="type1">
        <div className="flex flex-col w-[320px] gap-[8px] pt-[20px] pb-[20px] px-[20px]">
          <div className="w-[57px] rounded-lg">
            <RoundedBoxUI colorTheme="dark" round={32}>
              <div className="px-[13px] py-[5px]">LV.0</div>
            </RoundedBoxUI>
          </div>
          <div className="text-left text-2xl font-semibold">
            레벨을 높여
            <br /> 내 집을 만들어요!
          </div>
        </div>
      </RoundedBoxUI>

      <div className="relative">
        <div className="relative top-[0px]">
          <RoundedBoxUI boxShadow="type2">
            <div className="flex flex-col w-[320px] gap-[8px] py-[28px] pb-[57px] px-[32px] text-left">
              <div className="font-semibold text-2xl">저축</div>
              <div className="text-md">씨드 확보의 기초</div>
            </div>
          </RoundedBoxUI>
        </div>
        <div className="relative top-[-35px]">
          <RoundedBoxUI boxShadow="type2">
            <div className="flex flex-col w-[320px] gap-[8px] py-[28px] pb-[57px] px-[32px] text-left">
              <div className="font-semibold text-2xl">저축</div>
              <div className="text-md">씨드 확보의 기초</div>
            </div>
          </RoundedBoxUI>
        </div>
        <div className="relative top-[-70px]">
          <RoundedBoxUI boxShadow="type2">
            <div className="flex flex-col w-[320px] gap-[8px] py-[28px] pb-[57px] px-[32px] text-left">
              <div className="font-semibold text-2xl">저축</div>
              <div className="text-md">씨드 확보의 기초</div>
            </div>
          </RoundedBoxUI>
        </div>
      </div>
      <RoundedBoxUI colorTheme="dark">
        <div className="w-[320px] px-[72px] py-[26px] text-xl">
          더 많은 학습 하러 가기
        </div>
      </RoundedBoxUI>
    </main>
  );
}
