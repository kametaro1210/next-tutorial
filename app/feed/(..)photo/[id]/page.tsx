export default async function IntercptedPhotoPage({
  params,
} :{
  params:Promise<{ id : string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1>Intercepted Photo Page: {id}</h1>
      <p>インターセプトされた画面</p>
    </div>
  )

}