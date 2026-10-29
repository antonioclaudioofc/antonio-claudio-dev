const base = {
  viewBox: "0 0 24 24",
  "aria-hidden": true,
} as const;

export function LogoMark({ size = 30 }: { size?: number }) {
  return (
    <svg className="logo" {...base} width={size} height={size}>
      <path
        className="lc"
        d="M8 7 3 12l5 5M16 7l5 5-5 5"
        fill="none"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="la"
        d="M13.5 4.5 10.5 19.5"
        fill="none"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FlagBR() {
  return (
    <svg className="fl" viewBox="0 0 24 16" width="24" height="16" aria-hidden="true">
      <rect width="24" height="16" fill="#009C3B" />
      <path d="M12 2 21.6 8 12 14 2.4 8z" fill="#FFDF00" />
      <circle cx="12" cy="8" r="3.3" fill="#002776" />
    </svg>
  );
}

export function FlagUS() {
  return (
    <svg className="fl" viewBox="0 0 24 16" width="24" height="16" aria-hidden="true">
      <rect width="24" height="16" fill="#fff" />
      {[0, 2.46, 4.92, 7.38, 9.85, 12.31, 14.77].map((y) => (
        <rect key={y} y={y} width="24" height="1.23" fill="#B22234" />
      ))}
      <rect width="10.4" height="8.62" fill="#3C3B6E" />
    </svg>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function IconSun() {
  return (
    <svg {...base} width="20" height="20" {...stroke}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
    </svg>
  );
}

export function IconMoon() {
  return (
    <svg {...base} width="20" height="20" {...stroke}>
      <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" />
    </svg>
  );
}

export function IconMenu({ open }: { open: boolean }) {
  return (
    <svg {...base} width="22" height="22" {...stroke}>
      <path d={open ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"} />
    </svg>
  );
}

export function IconMail() {
  return (
    <svg className="ic" {...base} width="20" height="20" {...stroke}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6.5L20.5 7" />
    </svg>
  );
}

export function IconLinkedin() {
  return (
    <svg className="ic" {...base} width="20" height="20" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  );
}

export function IconGithub() {
  return (
    <svg className="ic" {...base} width="20" height="20" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function IconWhatsapp() {
  return (
    <svg className="ic" {...base} width="20" height="20" {...stroke}>
      <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.6-5.4A8.4 8.4 0 1 1 21 11.5z" />
      <path d="M9 8.8c.3 2.6 2.4 4.9 5.2 5.9l1.3-1.2-1.7-1-.9.6c-.7-.3-1.6-1.2-1.9-1.9l.6-.9-1-1.7z" />
    </svg>
  );
}
