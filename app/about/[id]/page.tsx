const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return <h1>About {id}</h1>;
};

export default Page;
