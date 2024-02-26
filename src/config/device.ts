const isMobile = !!navigator.userAgent.match(/iPhone|Android/);
const isIPhone = !!navigator.userAgent.match(/iPhone/);
const isPc = !isMobile;
export { isMobile, isPc, isIPhone };
