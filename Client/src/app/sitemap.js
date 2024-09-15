export default function sitemap() {
  const url = process.env.NEXT_PUBLIC_CLIENT_URL;
  return [
    {
      url: `/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
