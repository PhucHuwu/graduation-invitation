"use client";

import { useEffect, useState } from "react";
// Reuse the exact vector data exported from the Figma import (do not redraw).
import svgPaths from "../../imports/Html→Body/svg-gzp71303h0";

// Liberation Serif and Tinos are both metric-compatible with Times New Roman,
// so Tinos is used as the loadable stand-in for the import's "Liberation Serif".
const COLDWELL = "'FC-Coldwell-Bridges', sans-serif";
const SERIF = "'Tinos', 'Liberation Serif', serif";
const SANS = "'Manrope', sans-serif";
const SCRIPT = "'Great Vibes', cursive";

// Target date for the live countdown (9:30 AM Hanoi time = 02:30 UTC).
const EVENT_DATE = new Date("2026-06-29T02:30:00Z");

type Remaining = { days: number; hours: number; minutes: number; seconds: number };

function getRemaining(): Remaining {
  const diff = Math.max(0, EVENT_DATE.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function MortarboardIcon() {
  return (
    <div className="h-[60px] w-[80px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 60">
        <g opacity="0.8">
          <path d={svgPaths.p7e67f00} fill="#4A4A4A" />
          <path d={svgPaths.p215aadf0} stroke="#4A4A4A" strokeWidth="1.6" />
          <path d="M68 30V42" stroke="#4A4A4A" strokeWidth="1.6" />
          <path d={svgPaths.p2327a180} fill="#4A4A4A" />
        </g>
      </svg>
    </div>
  );
}

function DateNumberIcon() {
  return (
    <div className="h-[32.391px] w-[43.875px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.875 32.3906">
        <path d={svgPaths.pce9da40} fill="#4A4A4A" />
      </svg>
    </div>
  );
}

function Divider({ width }: { width: number }) {
  return <div className="bg-[#e2e2e2] h-px my-[24px]" style={{ width }} />;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[70px] md:min-w-[100px] transition-all">
      <p
        className="text-[#4a4a4a] text-[32px] md:text-[48px] text-center tracking-[1.6px] tabular-nums transition-all"
        style={{ fontFamily: SERIF, lineHeight: "1.2" }}
      >
        {String(value).padStart(2, "0")}
      </p>
      <p
        className="text-[#666] text-[10px] md:text-[13px] text-center tracking-[1px] uppercase pt-[8px] transition-all"
        style={{ fontFamily: SANS, lineHeight: "15px" }}
      >
        {label}
      </p>
    </div>
  );
}

// Decorative confetti dots scattered along the footer (from the import).
const CONFETTI = [
  { left: "8%", color: "#b3b3b3", size: 3.13 },
  { left: "16%", color: "#a89045", size: 5.52 },
  { left: "24%", color: "#e2e2e2", size: 4.39 },
  { left: "37%", color: "#e2e2e2", size: 4.56 },
  { left: "44%", color: "#a89045", size: 4.08 },
  { left: "51%", color: "#e2e2e2", size: 3.13 },
  { left: "58%", color: "#b3b3b3", size: 5.83 },
  { left: "66%", color: "#d9dadb", size: 5.23 },
  { left: "73%", color: "#b3b3b3", size: 3.42 },
  { left: "80%", color: "#d9dadb", size: 5.7 },
  { left: "88%", color: "#b3b3b3", size: 3.06 },
  { left: "94%", color: "#d9dadb", size: 4.08 },
];

export function GraduationInvitation() {
  const [time, setTime] = useState<Remaining>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  const [showCalendarMenu, setShowCalendarMenu] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setTime(getRemaining());
    const id = setInterval(() => setTime(getRemaining()), 1000);

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (showCalendarMenu && !target.closest(".calendar-dropdown-container")) {
        setShowCalendarMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      clearInterval(id);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCalendarMenu]);

  const handleDownloadIcs = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Hoang Thu Thuy//Graduation Invitation//EN",
      "BEGIN:VEVENT",
      "UID:graduation-hoang-thu-thuy-2026",
      "DTSTAMP:20260614T000000Z",
      "DTSTART:20260629T023000Z", // 9:30 AM Hanoi time (UTC+7 -> 02:30 AM UTC)
      "DTEND:20260629T050000Z",
      "SUMMARY:Lễ tốt nghiệp Hoàng Thu Thủy",
      "DESCRIPTION:Trân trọng kính mời bạn đến tham dự buổi lễ tốt nghiệp của Hoàng Thu Thủy.",
      "LOCATION:Đại học Sư phạm Hà Nội\\, 136 Xuân Thủy\\, Cầu Giấy\\, Hà Nội",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "le-tot-nghiep-hoang-thu-thuy.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setShowCalendarMenu(false);
  };

  const handleGoogleCalendar = () => {
    window.open(
      "https://calendar.google.com/calendar/render?action=TEMPLATE&text=L%E1%BB%85+t%E1%BB%91t+nghi%E1%BB%87p+Ho%C3%A0ng+Thu+Th%E1%BB%A7y&dates=20260629T023000Z/20260629T050000Z&details=Tr%C3%A2n+tr%E1%BB%8Dng+k%C3%ADnh+m%E1%BB%9Di+b%E1%BA%A1n+%C4%91%E1%BA%BFn+tham+d%E1%BB%B1+bu%E1%BB%95i+l%E1%BB%85+t%E1%BB%91t+nghi%E1%BB%87p+c%E1%BB%A7a+Ho%C3%A0ng+Thu+Th%E1%BB%A7y&location=%C4%90%E1%BA%A1i+H%E1%BB%8Dc+S%C6%B0+Ph%E1%BA%A1m+H%C3%A0+N%E1%BB%99i%2C+136+Xu%C3%A2n+Th%E1%BB%A7y%2C+C%E1%BA%A7u+Gi%E1%BA%A5y%2C+H%C3%A0+N%E1%BB%99i",
      "_blank"
    );
    setShowCalendarMenu(false);
  };

  return (
    <div
      className="relative w-full min-h-screen flex flex-col justify-between"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "100% auto",
        backgroundRepeat: "repeat-y",
        backgroundPosition: "top center",
        backgroundAttachment: "scroll",
      }}
      data-name="Html → Body"
    >
      {/* Main content */}
      <main className="flex flex-col items-center justify-center px-[24px] py-[60px] sm:py-[120px]">
        <div className="flex flex-col items-center w-full max-w-[672px]">
          {/* Header */}
          <div className="relative pt-[32px] pb-[12px]">
            <img
              src="/butterfly.png"
              alt="Butterflies"
              className="absolute left-[-65px] md:left-[-100px] top-[-26px] md:top-[-53px] h-[75px] md:h-[110px] w-auto object-contain opacity-70 pointer-events-none transition-all"
            />
            <h1
              className="text-[#4a4a4a] text-center [word-break:break-word]"
              style={{
                fontFamily: COLDWELL,
                fontSize: "clamp(28px, 7vw, 64px)",
                letterSpacing: "8.4px",
                lineHeight: "1.2",
                fontWeight: 400,
              }}
            >
              Thiệp Mời
            </h1>
          </div>

          {/* Graduation cap image */}
          <div className="pt-[20px] flex justify-center w-full">
            <img
              src="/graduation-cap.png"
              alt="Graduation Cap"
              className="h-[120px] md:h-[180px] w-auto object-contain opacity-80 transition-all"
            />
          </div>

          {/* Invitation message */}
          <div className="pt-[20px] flex flex-col items-center gap-[24px] w-full max-w-[576px]">
            <div className="relative">
              {/* Sparkle effects at the top-right of the invitation text */}
              <div className="absolute right-[-45px] top-[-10px] w-[60px] h-[60px] pointer-events-none select-none">
                <img
                  src="/sparkle.png"
                  alt="sparkle"
                  className="absolute w-[25px] h-auto top-0 right-0 opacity-80 animate-pulse animate-float-gentle"
                />
                <img
                  src="/sparkle.png"
                  alt="sparkle"
                  className="absolute w-[15px] h-auto top-[20px] right-[25px] opacity-60 animate-pulse animate-float-gentle-reverse [animation-delay:0.3s]"
                />
                <img
                  src="/sparkle.png"
                  alt="sparkle"
                  className="absolute w-[18px] h-auto top-[-8px] right-[18px] opacity-70 animate-pulse animate-float-gentle [animation-delay:0.6s]"
                />
              </div>
              <p
                className="text-[#666] text-center"
                style={{
                  fontFamily: SANS,
                  fontWeight: 300,
                  fontSize: "clamp(15px, 2.5vw, 19px)",
                  letterSpacing: "1.5px",
                  lineHeight: "clamp(27px, 4vw, 34px)",
                }}
              >
                Trân trọng kính mời bạn đến tham dự
                <br />
                buổi lễ tốt nghiệp của
              </p>
            </div>
            <h2
              className="text-[#4a4a4a] text-center py-[12px]"
              style={{ fontFamily: SCRIPT, fontSize: "clamp(48px, 14vw, 84px)", lineHeight: "1.05", fontWeight: 400 }}
            >
              Hoàng Thu Thủy
            </h2>
            <p
              className="text-[#666] text-center uppercase"
              style={{
                fontFamily: SANS,
                fontWeight: 300,
                fontSize: "clamp(15px, 2.5vw, 19px)",
                letterSpacing: "1.5px",
                lineHeight: "clamp(27px, 4vw, 34px)",
              }}
            >
              CLASS OF 2026
            </p>
          </div>

          <Divider width={96} />

          {/* Event details */}
          <div className="pt-[48px] flex flex-col items-center w-full">
            {/* Date & time */}
            <div className="flex flex-col items-center px-[24px] pt-[15px] pb-[16px]">
              <p
                className="text-[#4a4a4a] text-center uppercase"
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(22px, 3.5vw, 28px)",
                  letterSpacing: "2.2px",
                  lineHeight: "28.6px",
                }}
              >
                THÁNG 6
              </p>
              <div className="py-[8px] md:scale-125 transition-transform">
                <DateNumberIcon />
              </div>
              <p
                className="text-[#666] text-center uppercase pt-[4px]"
                style={{
                  fontFamily: SANS,
                  fontWeight: 400,
                  fontSize: "clamp(11px, 2vw, 15px)",
                  letterSpacing: "1.1px",
                  lineHeight: "13.2px",
                }}
              >
                9:30 SÁNG
              </p>
            </div>

            <Divider width={64} />

            {/* Location */}
            <div className="flex flex-col items-center px-[24px] py-[16px]">
              <p
                className="text-[#4a4a4a] text-center uppercase pb-[8px]"
                style={{
                  fontFamily: SANS,
                  fontWeight: 400,
                  fontSize: "clamp(11px, 2vw, 15px)",
                  letterSpacing: "1.1px",
                  lineHeight: "13.2px",
                }}
              >
                ĐẠI HỌC SƯ PHẠM HÀ NỘI
              </p>
              <p
                className="text-[#666] text-center uppercase pb-[16px]"
                style={{
                  fontFamily: SANS,
                  fontWeight: 400,
                  fontSize: "clamp(11px, 2vw, 15px)",
                  letterSpacing: "1.1px",
                  lineHeight: "1.5",
                }}
              >
                136 XUÂN THỦY, CẦU GIẤY, HÀ NỘI
              </p>
              <div className="flex gap-[16px] md:gap-[24px]">
                <div className="relative calendar-dropdown-container">
                  <button
                    onClick={() => setShowCalendarMenu(!showCalendarMenu)}
                    className="border border-[#b3b3b3] px-[17px] md:px-[24px] pt-[8.5px] md:pt-[12px] pb-[9.5px] md:pb-[14px] text-[#666] uppercase hover:bg-[#f5f5f5] transition-colors md:text-[14px] cursor-pointer"
                    style={{
                      fontFamily: SANS,
                      fontWeight: 400,
                      fontSize: "12px",
                      letterSpacing: "0.6px",
                      lineHeight: "16px",
                    }}
                  >
                    THÊM VÀO LỊCH
                  </button>
                  {showCalendarMenu && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-[#e2e2e2] rounded shadow-lg z-50 py-1 transition-all">
                      <button
                        onClick={handleGoogleCalendar}
                        className="w-full text-left px-4 py-2 text-sm text-[#4a4a4a] hover:bg-[#f5f5f5] font-normal cursor-pointer"
                        style={{ fontFamily: SANS }}
                      >
                        Android / PC (Google)
                      </button>
                      <button
                        onClick={handleDownloadIcs}
                        className="w-full text-left px-4 py-2 text-sm text-[#4a4a4a] hover:bg-[#f5f5f5] font-normal cursor-pointer"
                        style={{ fontFamily: SANS }}
                      >
                        iPhone (Apple)
                      </button>
                    </div>
                  )}
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+H%E1%BB%8Dc+S%C6%B0+Ph%E1%BA%A1m+H%C3%A0+N%E1%BB%99i"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#b3b3b3] px-[17px] md:px-[24px] pt-[8.5px] md:pt-[12px] pb-[9.5px] md:pb-[14px] text-[#666] uppercase hover:bg-[#f5f5f5] transition-colors md:text-[14px]"
                  style={{
                    fontFamily: SANS,
                    fontWeight: 400,
                    fontSize: "12px",
                    letterSpacing: "0.6px",
                    lineHeight: "16px",
                  }}
                >
                  XEM BẢN ĐỒ
                </a>
              </div>
            </div>
          </div>

          <Divider width={96} />

          {/* Countdown timer */}
          <div className="pt-[48px] flex gap-[24px] items-start justify-center w-full max-w-[576px]">
            <CountdownUnit value={isMounted ? time.days : 0} label="NGÀY" />
            <CountdownUnit value={isMounted ? time.hours : 0} label="GIỜ" />
            <CountdownUnit value={isMounted ? time.minutes : 0} label="PHÚT" />
            <CountdownUnit value={isMounted ? time.seconds : 0} label="GIÂY" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative py-[48px] flex flex-col items-center px-[24px]">
        {/* Confetti */}
        <div className="absolute inset-x-0 top-0 h-0 pointer-events-none">
          {CONFETTI.map((d) => (
            <span
              key={d.left}
              className="absolute rounded-[1px] opacity-60"
              style={{ left: d.left, top: 0, width: d.size, height: d.size, backgroundColor: d.color }}
            />
          ))}
        </div>
        <p
          className="text-[#666] text-center"
          style={{
            fontFamily: COLDWELL,
            fontWeight: 400,
            fontSize: "clamp(17px, 3vw, 24px)",
            letterSpacing: "1.4px",
            lineHeight: "clamp(24px, 4vw, 32px)",
          }}
        >
          Sự hiện diện của bạn là niềm vui to lớn đối với mình
        </p>
      </footer>
    </div>
  );
}
