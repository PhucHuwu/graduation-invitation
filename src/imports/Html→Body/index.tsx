import svgPaths from "./svg-gzp71303h0";

function Image() {
  return (
    <div className="relative shrink-0 size-[100px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g clipPath="url(#clip0_1_121)" id="image">
          <path d="M0 0H100V100H0V0V0" fill="var(--fill-0, black)" id="Vector" opacity="0.03" />
        </g>
        <defs>
          <clipPath id="clip0_1_121">
            <rect fill="white" height="100" width="100" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ImageClip() {
  return (
    <div
      className="absolute content-stretch flex flex-col inset-0 items-start overflow-clip pb-[1503px] pr-[290px]"
      data-name="image clip"
    >
      <Image />
    </div>
  );
}

function HeaderSectionHeading() {
  return (
    <div
      className="content-stretch flex flex-col items-center relative shrink-0"
      data-name="Header Section → Heading 1"
    >
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[42px] text-center tracking-[8.4px] uppercase whitespace-nowrap">
        <p className="leading-[50.4px]">THIỆP MỜI</p>
      </div>
    </div>
  );
}

function HeaderSectionMargin() {
  return (
    <div
      className="content-stretch flex flex-col items-start pb-[12px] pt-[32px] relative shrink-0"
      data-name="Header Section:margin"
    >
      <HeaderSectionHeading />
    </div>
  );
}

function Svg() {
  return (
    <div className="h-[60px] relative shrink-0 w-[80px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 60">
        <g id="SVG" opacity="0.8">
          <path d={svgPaths.p7e67f00} fill="var(--fill-0, #4A4A4A)" id="Vector" />
          <path d={svgPaths.p215aadf0} id="Vector_2" stroke="var(--stroke-0, #4A4A4A)" strokeWidth="1.6" />
          <path d="M68 30V42" id="Vector_3" stroke="var(--stroke-0, #4A4A4A)" strokeWidth="1.6" />
          <path d={svgPaths.p2327a180} fill="var(--fill-0, #4A4A4A)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function SimpleMortarboardIcon() {
  return (
    <div
      className="content-stretch flex items-start justify-center relative shrink-0 w-full"
      data-name="Simple Mortarboard Icon"
    >
      <Svg />
    </div>
  );
}

function SimpleMortarboardIconMargin() {
  return (
    <div
      className="content-stretch flex flex-col items-start pt-[48px] relative shrink-0 w-full"
      data-name="Simple Mortarboard Icon:margin"
    >
      <SimpleMortarboardIcon />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#666] text-[15px] text-center tracking-[1.5px] uppercase whitespace-nowrap">
        <p className="leading-[27px] mb-0">TRÂN TRỌNG KÍNH MỜI BẠN ĐẾN THAM DỰ</p>
        <p className="leading-[27px]">BUỔI LỄ TỐT NGHIỆP CỦA</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div
      className="content-stretch flex flex-col items-center py-[24px] relative shrink-0 w-full"
      data-name="Heading 2"
    >
      <div className="[word-break:break-word] flex flex-col font-['Great_Vibes:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[64px] text-center whitespace-nowrap">
        <p className="leading-[64px] mb-0">Hoàn Thu</p>
        <p className="leading-[64px]">Thủy</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Light',sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#666] text-[15px] text-center tracking-[1.5px] uppercase whitespace-nowrap">
        <p className="leading-[27px]">CLASS OF 2026</p>
      </div>
    </div>
  );
}

function InvitationMessage() {
  return (
    <div
      className="content-stretch flex flex-col gap-[24px] items-start max-w-[576px] relative shrink-0 w-[337.32px]"
      data-name="Invitation Message"
    >
      <Container1 />
      <Heading />
      <Container2 />
    </div>
  );
}

function InvitationMessageMargin() {
  return (
    <div
      className="content-stretch flex flex-col items-start max-w-[576px] pt-[48px] relative shrink-0"
      data-name="Invitation Message:margin"
    >
      <InvitationMessage />
    </div>
  );
}

function Margin() {
  return (
    <div
      className="content-stretch flex flex-col h-[49px] items-start pt-[48px] relative shrink-0 w-[96px]"
      data-name="Margin"
    >
      <div className="bg-[#e2e2e2] h-px relative shrink-0 w-[96px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[32.391px] relative shrink-0 w-[43.875px]" data-name="Container">
      <svg
        className="absolute block inset-0 size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 43.875 32.3906"
      >
        <g id="Container">
          <path d={svgPaths.pce9da40} fill="var(--fill-0, #4A4A4A)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start py-[8px] relative shrink-0" data-name="Margin">
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[11px] text-center tracking-[1.1px] uppercase whitespace-nowrap">
        <p className="leading-[13.2px]">10:30 SÁNG</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0" data-name="Margin">
      <Container4 />
    </div>
  );
}

function DateTime() {
  return (
    <div
      className="content-stretch flex flex-col items-center pb-[16px] pt-[15px] px-[24px] relative shrink-0"
      data-name="Date & Time"
    >
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4a4a] text-[22px] text-center tracking-[2.2px] uppercase whitespace-nowrap">
        <p className="leading-[28.6px]">THÁNG 6</p>
      </div>
      <Margin1 />
      <Margin2 />
    </div>
  );
}

function Margin3() {
  return (
    <div
      className="content-stretch flex flex-col h-[49px] items-start py-[24px] relative shrink-0 w-[64px]"
      data-name="Margin"
    >
      <div className="bg-[#e2e2e2] h-px relative shrink-0 w-[64px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4a4a4a] text-[11px] text-center tracking-[1.1px] uppercase whitespace-nowrap">
        <p className="leading-[13.2px]">ĐẠI HỌC SƯ PHẠM HÀ NỘI</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Heading 3:margin">
      <Heading1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[11px] text-center tracking-[1.1px] uppercase whitespace-nowrap">
        <p className="leading-[13.2px] mb-0">136 XUÂN THỦY, CẦU GIẤY</p>
        <p className="leading-[13.2px]">HÀ NỘI</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0" data-name="Margin">
      <Container5 />
    </div>
  );
}

function Link() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#b3b3b3] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[9.5px] pt-[8.5px] px-[17px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">THÊM VÀO LỊCH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#b3b3b3] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[9.5px] pt-[8.5px] px-[17px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[12px] text-center tracking-[0.6px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">XEM BẢN ĐỒ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[15.99px] h-[34px] items-start relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Location() {
  return (
    <div
      className="content-stretch flex flex-col items-center px-[24px] py-[16px] relative shrink-0"
      data-name="Location"
    >
      <Heading3Margin />
      <Margin4 />
      <Container6 />
    </div>
  );
}

function EventDetailsMinimalistStyle() {
  return (
    <div
      className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full"
      data-name="Event Details (Minimalist Style)"
    >
      <DateTime />
      <Margin3 />
      <Location />
    </div>
  );
}

function EventDetailsMinimalistStyleMargin() {
  return (
    <div
      className="content-stretch flex flex-col items-start pt-[48px] relative shrink-0 w-full"
      data-name="Event Details (Minimalist Style):margin"
    >
      <EventDetailsMinimalistStyle />
    </div>
  );
}

function Margin5() {
  return (
    <div
      className="content-stretch flex flex-col h-[49px] items-start pt-[48px] relative shrink-0 w-[96px]"
      data-name="Margin"
    >
      <div className="bg-[#e2e2e2] h-px relative shrink-0 w-[96px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">NGÀY</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <Container8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] mb-[-0.11px] not-italic relative shrink-0 text-[#4a4a4a] text-[32px] text-center tracking-[1.6px] whitespace-nowrap">
        <p className="leading-[38.4px]">16</p>
      </div>
      <Margin6 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">GIỜ</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <Container10 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] mb-[-0.11px] not-italic relative shrink-0 text-[#4a4a4a] text-[32px] text-center tracking-[1.6px] whitespace-nowrap">
        <p className="leading-[38.4px]">15</p>
      </div>
      <Margin7 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">PHÚT</p>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <Container12 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] mb-[-0.11px] not-italic relative shrink-0 text-[#4a4a4a] text-[32px] text-center tracking-[1.6px] whitespace-nowrap">
        <p className="leading-[38.4px]">43</p>
      </div>
      <Margin8 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">GIÂY</p>
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[8px] relative shrink-0" data-name="Margin">
      <Container14 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-center relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Liberation_Serif:Regular',sans-serif] justify-center leading-[0] mb-[-0.11px] not-italic relative shrink-0 text-[#4a4a4a] text-[32px] text-center tracking-[1.6px] whitespace-nowrap">
        <p className="leading-[38.4px]">51</p>
      </div>
      <Margin9 />
    </div>
  );
}

function CountdownTimer() {
  return (
    <div
      className="content-stretch flex gap-[24px] h-[61.89px] items-start justify-center relative shrink-0 w-full"
      data-name="Countdown Timer"
    >
      <Container7 />
      <Container9 />
      <Container11 />
      <Container13 />
    </div>
  );
}

function CountdownTimerMargin() {
  return (
    <div
      className="content-stretch flex flex-col items-start max-w-[576px] pt-[48px] relative shrink-0 w-full"
      data-name="Countdown Timer:margin"
    >
      <CountdownTimer />
    </div>
  );
}

function Container() {
  return (
    <div
      className="content-stretch flex flex-col items-center max-w-[672px] relative shrink-0 w-full"
      data-name="Container"
    >
      <HeaderSectionMargin />
      <SimpleMortarboardIconMargin />
      <InvitationMessageMargin />
      <Margin />
      <EventDetailsMinimalistStyleMargin />
      <Margin5 />
      <CountdownTimerMargin />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="min-h-[1447px] relative shrink-0 w-full" data-name="Main Content Canvas">
      <div className="flex flex-col items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center min-h-[inherit] pb-[157.93px] pt-[157.94px] px-[24px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#666] text-[14px] text-center tracking-[1.4px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">Sự hiện diện của bạn là niềm vui to lớn đối với mình</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b3b3b3] text-[12px] text-center tracking-[0.6px] whitespace-nowrap">
        <p className="leading-[16px]">© 2026. All rights reserved.</p>
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0" data-name="Margin">
      <Container17 />
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[24px] relative size-full">
          <Container16 />
          <Margin10 />
        </div>
      </div>
    </div>
  );
}

function FooterFromJson() {
  return (
    <div
      className="content-stretch flex flex-col items-start py-[48px] relative shrink-0 w-full"
      data-name="Footer (From JSON)"
    >
      <Container15 />
    </div>
  );
}

export default function HtmlBody() {
  return (
    <div
      className="content-stretch flex flex-col items-start justify-between relative size-full"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgb(252, 252, 252) 0%, rgb(252, 252, 252) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
      }}
      data-name="Html → Body"
    >
      <ImageClip />
      <MainContentCanvas />
      <FooterFromJson />
      <div
        className="absolute bg-[#d9dadb] left-[275.11px] opacity-60 size-[5.7px] top-[1603px]"
        data-name="Background"
      />
      <div
        className="absolute bg-[#e2e2e2] left-[74.39px] opacity-60 size-[5.34px] top-[1603px]"
        data-name="Background"
      />
      <div
        className="absolute bg-[#b3b3b3] left-[67.72px] opacity-60 size-[4.7px] top-[1603px]"
        data-name="Background"
      />
      <div
        className="absolute bg-[#e2e2e2] left-[98.11px] opacity-60 size-[3.97px] top-[1603px]"
        data-name="Background"
      />
      <div
        className="absolute bg-[#e2e2e2] left-[163.14px] opacity-60 size-[4.39px] top-[1603px]"
        data-name="Background"
      />
      <div
        className="absolute bg-[#d9dadb] left-[325.19px] opacity-60 size-[4.45px] top-[1603px]"
        data-name="Background"
      />
      <div
        className="absolute bg-[#e2e2e2] left-[155.16px] opacity-60 size-[4.56px] top-[1603px]"
        data-name="Background"
      />
      <div
        className="absolute bg-[#d9dadb] left-[256.88px] opacity-60 size-[5.23px] top-[1603px]"
        data-name="Background"
      />
      <div
        className="absolute bg-[#b3b3b3] left-[217.53px] opacity-60 size-[4.17px] top-[1603px]"
        data-name="Background"
      />
      <div
        className="absolute bg-[#e2e2e2] left-[211.47px] opacity-60 size-[3.13px] top-[1603px]"
        data-name="Background"
      />
      <div
        className="absolute bg-[#d9dadb] left-[339.59px] opacity-60 size-[4.08px] top-[1603px]"
        data-name="Background"
      />
      <div
        className="absolute bg-[#b3b3b3] left-[287.36px] opacity-60 size-[3.06px] top-[1603px]"
        data-name="Background"
      />
      <div
        className="absolute bg-[#b3b3b3] left-[280.13px] opacity-60 size-[3.42px] top-[1603px]"
        data-name="Background"
      />
      <div
        className="absolute bg-[#a89045] left-[182.06px] opacity-60 size-[4.08px] top-[1603px]"
        data-name="Background"
      />
      <div
        className="absolute bg-[#e2e2e2] left-[389.52px] opacity-60 size-[4.77px] top-[1603px]"
        data-name="Background"
      />
      <div
        className="absolute bg-[#e2e2e2] left-[297.61px] opacity-60 size-[4.27px] top-[1603px]"
        data-name="Background"
      />
      <div
        className="absolute bg-[#a89045] left-[34.86px] opacity-60 size-[3.33px] top-[1603px]"
        data-name="Background"
      />
      <div
        className="absolute bg-[#b3b3b3] left-[11.25px] opacity-60 size-[3.13px] top-[1603px]"
        data-name="Background"
      />
      <div
        className="absolute bg-[#a89045] left-[114.14px] opacity-60 size-[5.52px] top-[1603px]"
        data-name="Background"
      />
      <div
        className="absolute bg-[#b3b3b3] left-[208.3px] opacity-60 size-[5.83px] top-[1603px]"
        data-name="Background"
      />
    </div>
  );
}
