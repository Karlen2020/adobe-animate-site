const size = 26;
const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };

export function GameIcon() {
  return (
    <svg {...common}>
      <rect x="2.5" y="8" width="19" height="10" rx="4" />
      <path d="M7 12h.01M7 12H7m2-2v4M16 13h.01M18 11h.01" />
    </svg>
  );
}

export function ExamIcon() {
  return (
    <svg {...common}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  );
}

export function MonitorIcon() {
  return (
    <svg {...common}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4M7 8l3 3 2-2 3 3" />
    </svg>
  );
}

export function CodeIcon() {
  return (
    <svg {...common}>
      <path d="M9 8l-4 4 4 4M15 8l4 4-4 4" />
    </svg>
  );
}

export function ClickIcon() {
  return (
    <svg {...common}>
      <path d="M9 3v3M4.5 6.5l2 2M3 12h3M15 3v3M19.5 6.5l-2 2M13 4.5 15 12l3-1.5 3.5 6-2 1-3.5-6L14 13z" />
    </svg>
  );
}

export function GlobeIcon() {
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.8 5.6 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.6-3.8-9s1.3-6.5 3.8-9z" />
    </svg>
  );
}

export function BookIcon() {
  return (
    <svg {...common}>
      <path d="M4 5c2-1 5-1 7 0v14c-2-1-5-1-7 0V5zM18 5c-2-1-5-1-7 0" />
      <path d="M18 5v14c-2-1-5-1-7 0" />
    </svg>
  );
}

export function DownloadDocIcon() {
  return (
    <svg {...common}>
      <path d="M6 3h9l3 3v15H6z" />
      <path d="M15 3v3h3M9 13l3 3 3-3M12 8v8" />
    </svg>
  );
}

export function ChatIcon() {
  return (
    <svg {...common}>
      <path d="M4 5h16v11H9l-5 4z" />
    </svg>
  );
}
