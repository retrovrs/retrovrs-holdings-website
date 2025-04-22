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
        <header className="relative flex flex-col justify-center items-center w-full h-[600px]">
          <div className="relative w-[100vw] h-[580px] left-[calc(-50vw+50%)] right-[calc(-50vw+50%)]">
            <div className="absolute inset-0 bg-[url('/images/banner2.png')] bg-cover bg-center bg-no-repeat opacity-50 z-0"></div>
          </div>{' '}
          <h1 className="z-10 self-center relative bottom-36 md:bottom-56 ">
            <Image
              src="/images/holdings_logo.png"
              alt="logo"
              width={0}
              height={100}
              className="w-[250px] sm:w-[400px]"
              style={{ height: 'auto' }}
            />
          </h1>
          <p className="italic z-10 self-center text-center relative w-2/3 md:w-full  text-lg tracking-wide opacity-95 md:font-semibold p-1">
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
              className="text-3xl md:text-4xl  tracking-wider">
              RETRO//VRS marketplace
            </span>
          </h2>
          <aside className="flex gap-4 items-center justify-center w-full mb-8">
            <Image
              src="/images/retrovrs2.png"
              alt="logo"
              width={0}
              height={100}
              className="w-[250px] sm:w-[400px] rounded-md"
              style={{ height: 'auto' }}
            />
          </aside>
          <p className="text-md mt-2 text-center tracking-wide opacity-90 w-4/5 md:w-[55%]">
            A B2C resale marketplace for luxury goods, where each item is
            authenticated before posting and has its own PBT (Physically Backed
            Token). Built on the Polygon blockchain network, with built-in
            lifetime royalties when you re-sell your item on the platform in the
            future. Now in curated beta, accepting bags and watches.
          </p>
          <button
            className={`${bebasNeue.className}  hover:cursor-pointer hover:bg-indigo-950/50 relative border text-indigo-200 border-indigo-400 text-xl md:text-2xl flex items-center justify-center tracking-wider bg-black px-4 pt-2 pb-1 rounded-md mt-16 ${styles.glowButton}`}>
            <a href="https://retrovrs.com" target="_blank">
              Explore the marketplace
            </a>
            <span className="inline-block transform rotate-90 text-2xl pb-4">
              ⇪
            </span>
          </button>

          <section className="grid md:grid-cols-2 mt-36">
            <div className="flex flex-col items-center">
              <div className="h-[400px] flex flex-col items-center">
                <h2
                  className={`${bebasNeue.className} text-3xl tracking-wider mt-5`}>
                  <span
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at center, #6597f6, #c587ff)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                      display: 'block',
                    }}
                    className="t tracking-widest mb-5">
                    LUXE\\LINKS
                  </span>
                </h2>
                <Image
                  src="/images/luxe-links.png"
                  alt="retrovrs logo"
                  width={200}
                  height={200}
                />
              </div>
              <p className="text-md tracking-wide opacity-90 w-4/5 md:w-3/5">
                A B2B SaaS creating Digital Provenance Passports (DPvP) with
                built in royalty attribution for existing marketplaces, brands,
                and boutiques that sell pre-owned luxury assets. Each asset is
                tokenized using our native LUXE\\LINKS token.
              </p>
            </div>
            <div className="flex flex-col items-center mt-20 md:mt-0">
              <div className="h-[400px] flex flex-col items-center">
                <h2
                  className={`${bebasNeue.className} text-3xl tracking-wider mt-5`}>
                  <span
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at center, #6597f6, #c587ff)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                      display: 'block',
                    }}
                    className="text-4xl  tracking-widest mb-5">
                    RETRO//VAULT
                  </span>
                </h2>
                <Image
                  src="/images/retrovault.png"
                  alt="retrovrs logo"
                  width={170}
                  height={200}
                />
              </div>
              <p className="text-md tracking-wide opacity-90 w-4/5 md:w-3/5">
                A B2C and B2B authentication service utilizing computer vision
                AI, machine learning, deep learning, and blockchain to verify,
                twin, and tokenize luxury assets, offering Digital Provenance
                Passports (DPvP) and secure smart contracts for enhanced trust
                and transparency.
              </p>
            </div>
          </section>
        </div>
        <div className="relative w-[100vw] h-[550px] left-[calc(-50vw+50%)] right-[calc(-50vw+50%)]">
          <div className="absolute inset-0 bg-[url('/images/banner2.png')] bg-cover bg-center bg-no-repeat opacity-50 z-0"></div>
        </div>
        <section className="flex flex-col items-center justify-center w-full mt-20">
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
              className="text-4xl  tracking-wider">
              Our team
            </span>
          </h2>
          <p className="text-md tracking-wide opacity-90 w-4/5 md:w-3/5 text-center">
            With extensive backgrounds in luxury resale, Web3 technology and
            finance, our team has held key positions at prestigious companies
            such as The RealReal, Vestiaire Collective, Saks Fifth Avenue,
            Neiman Marcus and JP Morgan. We have received training from
            institutions like HEC Paris, ESSEC, and Alyra Blockchain & AI
            School.
          </p>
        </section>
        <section className="flex flex-col items-center justify-center w-full mt-20">
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
              className="text-4xl  tracking-wider">
              Contact us
            </span>
          </h2>
          <p className="text-md tracking-wide opacity-90 w-4/5 md:w-3/5 text-center">
            By email:{' '}
            <strong className="text-indigo-200">info@retrovrs.com</strong>
          </p>
        </section>
      </main>
    </div>
  );
}
