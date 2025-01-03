export function createSvg(title: string) {
  return `<svg width="100%" height="auto" preserveAspectRatio="none"
            viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%"  fill="#cccccc" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#000" font-family="Arial" font-size="36">
   PLACHOLDER for ${title}
  </text>
</svg>`;
}
