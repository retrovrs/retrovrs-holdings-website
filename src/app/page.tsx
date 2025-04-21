import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className=" min-h-screen w-full pb-20 bg-fixed">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <header className="bg-[url('/images/banner.png')] bg-contain flex flex-col justify-center items-center bg-center bg-no-repeat w-full h-[550px] ">
          <h1 className="z-10 self-center relative bottom-16 opacity-80">
            <Image
              src="/images/holdings_logo.png"
              alt="logo"
              width={400}
              height={100}
            />
          </h1>
        </header>
        <p className="z-10 self-center relative bottom-16 text-xl">
          We build B2C and B2B web3 products for the luxury resale market.
        </p>
        <div className="flex flex-col text-center justify-center items-center w-full">
          <h2
            className={`${bebasNeue.className} text-3xl tracking-wider mb-10 text-indigo-300 `}>
            In development
          </h2>
          <section className="grid grid-cols-2 gap-32 items-between ">
            <div className="relative w-[300px] h-[200px]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-lg shadow-lg">
                <source src="/video/retrovrs-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p
                className={`${bebasNeue.className} text-xl tracking-wider mt-6 `}>
                RETRO//VRS MARKETPLACE
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/luxe-links.png"
                alt="retrovrs logo"
                width={200}
                height={200}
              />
              <p
                className={`${bebasNeue.className} text-xl tracking-wider mt-6 `}>
                LUXE\\LINKS
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
