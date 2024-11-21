interface PageProps {}

export default async function Page({}: Readonly<PageProps>) {
  return (
    <>
      <h3>PPR</h3>
      <code>
        <pre>{JSON.stringify(new Date())}</pre>
      </code>
      {/*<Suspense fallback={"...LOADING SLOW COMP"}>*/}
      {/*  <SlowComp />*/}
      {/*</Suspense>*/}
    </>
  );
}
