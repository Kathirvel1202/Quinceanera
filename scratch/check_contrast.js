function sRGBtoLin(colorVal) {
  colorVal = colorVal / 255;
  return colorVal <= 0.04045 ? colorVal / 12.92 : Math.pow((colorVal + 0.055) / 1.055, 2.4);
}

function getLuminance(r, g, b) {
  return 0.2126 * sRGBtoLin(r) + 0.7152 * sRGBtoLin(g) + 0.0722 * sRGBtoLin(b);
}

function getContrast(rgb1, rgb2) {
  const lum1 = getLuminance(...rgb1);
  const lum2 = getLuminance(...rgb2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

const tests = [
  { name: 'Light Mode H1 (#141210 on #ffffff)', fg: [20, 18, 16], bg: [255, 255, 255] },
  { name: 'Light Mode P (#241e18 on #ffffff)', fg: [36, 30, 24], bg: [255, 255, 255] },
  { name: 'Light Mode Eyebrow (#8c3e00 on #ffffff)', fg: [140, 62, 0], bg: [255, 255, 255] },
  { name: 'Light Mode Button (#ffffff on #b35500)', fg: [255, 255, 255], bg: [179, 85, 0] },
  { name: 'Light Mode Outline Button (#8c3e00 on #ffffff)', fg: [140, 62, 0], bg: [255, 255, 255] },
  { name: 'Dark Mode H1 (#ffffff on #141210)', fg: [255, 255, 255], bg: [20, 18, 16] },
  { name: 'Dark Mode P (#f6efe6 on #141210)', fg: [246, 239, 230], bg: [20, 18, 16] },
  { name: 'Dark Mode Eyebrow (#ffd28b on #141210)', fg: [255, 210, 139], bg: [20, 18, 16] },
  { name: 'Dark Mode Outline Button (#ffd28b on #26201b)', fg: [255, 210, 139], bg: [38, 32, 27] }
];

tests.forEach(t => {
  const c = getContrast(t.fg, t.bg);
  console.log(`${t.name}: ${c.toFixed(2)}:1 ${c >= 7 ? '(AAA)' : c >= 4.5 ? '(AA)' : c >= 3 ? '(AA Large)' : '(FAIL)'}`);
});

