export default function manifest() {
  return {
    name: "Đình Hà Esign",
    short_name: "dinhhavn",
    description: "Esign-Gbox-Scarlet 79k",
    icons: [
      {
        src: "https://res.cloudinary.com/do4zld720/image/upload/v1726413958/favicon_iutkcy.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://res.cloudinary.com/do4zld720/image/upload/v1726413958/favicon_iutkcy.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#1A94FF",
    background_color: "#1A94FF",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    related_applications: [
      {
        platform: "play",
        url: "https://play.google.com/store/apps/details?id=vn.tiki.app.tikiandroid",
        id: "vn.tiki.app.tikiandroid",
      },
      {
        platform: "itunes",
        url: "https://apps.apple.com/vn/app/tiki-shopping-fast-shipping/id958100553",
      },
      {
        platform: "webapp",
        url: "https://tiki.vn/manifest.json",
      },
    ],
    scope: "/",
  };
}
