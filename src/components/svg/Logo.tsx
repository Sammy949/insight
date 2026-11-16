import type { SVGProps } from 'react';

// Insight mark. Amber by default; pass `fill` to recolour (e.g. currentColor).
const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="#f59e0b"
    viewBox="0 0 32 48"
    {...props}
  >
    <path d="m21.3333 18.6667v-10.6667h-21.3333v10.6667z" />
    <path d="m21.3329 29.3332c-5.891 0-10.6667 4.7757-10.6667 10.6667l-10.66489681.0004v-.2753c.14659281-11.6097 9.56705681-20.9847 21.19429681-21.058l10.8044.0005v21.3333h-10.6667z" />
  </svg>
);
export default SvgLogo;
