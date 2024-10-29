// not-found를 사용하기 위해서 반드시 root layout을 만들어야 합니다.
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
