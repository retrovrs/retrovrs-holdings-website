import Image from 'next/image';

export default function Home() {
  return (
    <div className=" min-h-screen w-full pb-20 bg-fixed">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <header className="bg-[url('/images/banner.png')] bg-contain  bg-center bg-no-repeat w-full h-[550px] "></header>

        <h1 className="">
          <Image
            src="/images/holdings_logo.png"
            alt="logo"
            width={400}
            height={100}
          />
        </h1>
      </main>
    </div>
  );
}
