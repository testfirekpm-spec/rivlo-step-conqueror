const APP_STORE_URL = "https://apps.apple.com/app/rivlo-steps-runs-hikes/id6756506796";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.rivlo.app";

export function getStoreUrl(): string {
  const ua = navigator.userAgent || "";
  if (/android/i.test(ua)) return PLAY_STORE_URL;
  if (/iPad|iPhone|iPod|Macintosh/.test(ua)) return APP_STORE_URL;
  // Default to App Store for unknown
  return APP_STORE_URL;
}

export function redirectToStore(): void {
  window.open(getStoreUrl(), "_blank", "noopener");
}

export { APP_STORE_URL, PLAY_STORE_URL };
