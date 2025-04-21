import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';
import styles from '../../styles/Button.module.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className=" min-h-screen w-full pb-20 bg-fixed">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <header className="relative flex flex-col justify-center items-center w-full h-[550px]">
          <div className="absolute inset-0 bg-[url('/images/banner2.png')] bg-contain bg-center bg-no-repeat opacity-50 z-0"></div>
          <h1 className="z-10 self-center relative bottom-16 ">
            <Image
              src="/images/holdings_logo.png"
              alt="logo"
              width={400}
              height={100}
            />
          </h1>
          <p className="italic z-10 self-center relative  text-lg tracking-wide opacity-95 font-semibold p-1">
            We build B2C and B2B web3 products for the luxury resale market.
          </p>
        </header>

        <div className="flex flex-col text-center justify-center items-center w-full">
          <em className="block mt-4 opacity-90 uppercase tracking-widest font-light animate-bounce">
            Now in Beta{' '}
            <span className="inline-block transform rotate-180 ">⇪</span>
          </em>

          <h2
            className={`${bebasNeue.className} text-3xl tracking-wider mt-5 mb-12 `}>
            <span
              style={{
                backgroundImage:
                  'radial-gradient(circle at center, #6597f6, #c587ff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'block',
              }}
              className="text-4xl font-bold tracking-widest">
              RETRO//VRS marketplace
            </span>
          </h2>
          <aside className="flex gap-4 items-center justify-center w-full mb-8">
            <Image
              src="/images/retrovrs.png"
              className="self-center rounded-md"
              alt="logo"
              width={500}
              height={100}
            />
          </aside>
          <p className="text-md mt-2 tracking-wide opacity-90 w-[60%]">
            A B2C resale marketplace for luxury goods, where each item is
            authenticated before posting and has its own PBT (Physically Backed
            Token). Built on the Polygon blockchain network, with built-in
            lifetime royalties when you re-sell your item on the platform in the
            future. Now in curated beta, accepting bags and watches.
          </p>
          <button
            className={`${bebasNeue.className}  hover:cursor-pointer relative border text-indigo-200 border-indigo-400 text-2xl flex items-center justify-center tracking-wider bg-black px-4 pt-2 pb-1 rounded-md mt-16 ${styles.glowButton}`}>
            <a href="https://retrovrs.com" target="_blank">
              Explore the marketplace
            </a>
            <span className="inline-block transform rotate-90 text-2xl pb-4">
              ⇪
            </span>
          </button>

          <section className="grid grid-cols-2 items-between mt-36 ">
            <div className="flex flex-col gap-4 items-center justify-center">
              <h2
                className={`${bebasNeue.className} text-3xl tracking-wider mt-5 mb-5 `}>
                <span
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at center, #6597f6, #c587ff)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'block',
                  }}
                  className="text-4xl font-bold tracking-widest mb-5">
                  LUXE\\LINKS
                </span>
                <Image
                  src="/images/luxe-links.png"
                  alt="retrovrs logo"
                  width={200}
                  height={200}
                />
              </h2>
              <p className="text-md tracking-wide opacity-90 w-3/5">
                A B2B SaaS creating Digital Provenance Passports (DPvP) with
                built in royalty attribution for existing marketplaces, brands,
                and boutiques that sell pre-owned luxury assets. Each asset is
                tokenized using our native LUXE\\LINKS token.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
              <h2
                className={`${bebasNeue.className} text-3xl tracking-wider mt-5 mb-5 `}>
                <span
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at center, #6597f6, #c587ff)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    display: 'block',
                  }}
                  className="text-4xl font-bold tracking-widest mb-5">
                  RETRO//VAULT
                </span>
                <Image
                  src="/images/retrovault.png"
                  alt="retrovrs logo"
                  width={200}
                  height={200}
                />
              </h2>
              <p className="text-md tracking-wide opacity-90 w-3/5">
                A B2C and B2B authentication service utilizing computer vision
                AI, machine learning, deep learning, and blockchain to verify,
                twin, and tokenize luxury assets, offering Digital Provenance
                Passports (DPvP) and secure smart contracts for enhanced trust
                and transparency.
              </p>
            </div>

            {/* <div className="flex flex-col items-center">
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
            </div> */}
          </section>
        </div>
      </main>
    </div>
  );
}
