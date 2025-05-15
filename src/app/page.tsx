'use client';

import Image from 'next/image';
import { Bebas_Neue, Assistant } from 'next/font/google';
import styles from '../../styles/Button.module.css';
import { useEffect, useState, ReactNode } from 'react';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

const assistant = Assistant({
  weight: '400',
  subsets: ['latin'],
});

interface FadeInElementProps {
  children: ReactNode;
  delay?: number;
}

function FadeInElement({ children, delay = 0 }: FadeInElementProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-opacity duration-400 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
      {children}
    </div>
  );
}

function Header() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <header className="relative flex flex-col justify-center items-center w-full h-[600px] md:h-[800px]">
      <div className="relative w-[100vw] h-[580px] md:h-[780px] left-[calc(-50vw+50%)] right-[calc(-50vw+50%)]">
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isImageLoaded ? 'opacity-50' : 'opacity-0'
          }`}>
          <Image
            src="/images/banner2.png"
            alt="Banner background"
            fill
            priority
            quality={100}
            className="object-cover object-center"
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
      </div>
      <h1 className="z-10 self-center items-center justify-center flex flex-col relative bottom-84 md:bottom-84">
        <FadeInElement delay={400}>
          <Image
            src="/images/holdings_logo.png"
            alt="logo"
            width={400}
            height={100}
            priority
            quality={100}
            className="w-[250px] sm:w-[400px]"
            style={{ height: 'auto' }}
            unoptimized
          />
        </FadeInElement>
        <FadeInElement delay={800}>
          <p
            className={`${assistant.className} italic z-10 self-center text-center text-white  relative md:w-2/3 px-10 text-lg md:w-full top-10 md:text-xl tracking-wide opacity-95 p-1`}>
            We build B2C and B2B web3 products for the luxury resale market.
          </p>
        </FadeInElement>
      </h1>
    </header>
  );
}

export default function Home() {
  return (
    <div className=" min-h-screen w-full pb-20 bg-fixed bg-gray-950">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start animate-pageLoad">
        <Header />
        <div className="flex flex-col text-center justify-center items-center w-full">
          <em className="block mt-4 opacity-90 uppercase tracking-widest text-fuchsia-300 font-light animate-bounce">
            Now in Beta!{' '}
            {/* <span className="inline-block transform rotate-180 ">⇪</span> */}
          </em>

          <h2
            className={`${bebasNeue.className} text-3xl tracking-wider mt-5 mb-12 `}>
            <span
              style={{
                backgroundImage:
                  'radial-gradient(circle at center, #e4eeff, #a0a8b7)',
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
            <video
              src="/video/retrodemo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-[250px] sm:w-[400px] rounded-md"
              style={{ height: 'auto' }}
            />
          </aside>
          <p
            className={`${assistant.className} text-lg mt-2 text-center tracking-wide opacity-90 w-4/5 md:w-[55%]`}>
            A B2C resale marketplace for pre-authenticated luxury goods, where
            each item has its own PBT (Physically Backed Token). Built on the
            Polygon blockchain network, with built-in lifetime royalties when
            you re-sell your item on the platform in the future. Now in curated
            beta, accepting bags and watches.
          </p>
          <div className="flex gap-x-12">
            <button
              className={`${bebasNeue.className}  hover:cursor-pointer hover:bg-fuchsia-950/50 relative border text-fuchsia-100 border-fuchsia-400 text-xl md:text-2xl flex items-center justify-center tracking-wider bg-black px-4 pt-2 pb-1 rounded-md mt-16 ${styles.glowButton} animate-shadowChange`}>
              <a href="https://retrovrs.com" target="_blank">
                Explore RETRO//VRS
              </a>
              <span className="inline-block transform rotate-90 text-2xl pb-4">
                ⇪
              </span>
            </button>
          </div>

          <section className="grid md:grid-cols-2 mt-36">
            <div className="flex flex-col items-center">
              <div className="h-[400px] flex flex-col items-center">
                <h2
                  className={`${bebasNeue.className} text-3xl tracking-wider mt-5`}>
                  <span
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at center, #e4eeff, #a0a8b7)',
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
              <p
                className={`${assistant.className} text-lg tracking-wide opacity-90 w-4/5 md:w-3/5`}>
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
                        'radial-gradient(circle at center, #e4eeff, #a0a8b7)',
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
              <p
                className={`${assistant.className} text-lg tracking-wide opacity-90 w-4/5 md:w-3/5`}>
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
                  'radial-gradient(circle at center, #e4eeff, #a0a8b7)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'block',
              }}
              className="text-4xl  tracking-wider">
              Our team
            </span>
          </h2>
          <p
            className={`${assistant.className} text-lg tracking-wide opacity-90 w-4/5 md:w-3/5 text-center`}>
            With extensive backgrounds in luxury resale, Web3 technology and
            finance, our team has held key positions at prestigious companies
            such as The RealReal, Vestiaire Collective, Saks Fifth Avenue,
            Neiman Marcus and JP Morgan. We have received training from
            institutions like HEC Paris, ESSEC, and Alyra Blockchain & AI
            School.
          </p>
          <div className="flex gap-x-12">
            <button
              className={`${bebasNeue.className}  hover:cursor-pointer hover:bg-fuchsia-950/50 relative border text-fuchsia-100 border-fuchsia-400 text-xl md:text-2xl flex items-center justify-center tracking-wider bg-black px-4 pt-2 pb-1 rounded-md mt-16 ${styles.glowButton} animate-shadowChange`}>
              <a href="https://company.retrovrs.com/team" target="_blank">
                Meet the team
              </a>
              <span className="inline-block transform rotate-90 text-2xl pb-4">
                ⇪
              </span>
            </button>
          </div>
        </section>
        <section className="flex flex-col items-center justify-center w-full mt-20">
          <h2
            className={`${bebasNeue.className} text-3xl tracking-wider mt-5 mb-12 `}>
            <span
              style={{
                backgroundImage:
                  'radial-gradient(circle at center, #e4eeff, #a0a8b7)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'block',
              }}
              className="text-4xl  tracking-wider">
              Contact us
            </span>
          </h2>
          <p className=" self-center text-indigo-200 tracking-wide opacity-90  text-center flex items-center text-lg gap-2">
            {/* <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 6L12 13L2 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg> */}
            <span
              className={`${assistant.className} text-fuchsia-300 text-xl md:text-2xl mb-5`}>
              info@retrovrs.com
            </span>
          </p>
          <div className=" mt-5 text-fuchsia-300 hover:cursor-pointer hover:text-fuchsia-400 flex gap-10 ">
            <a
              href="https://www.linkedin.com/company/retrovrs-holdings/"
              target="_blank">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/retro_vrs"
              target="_blank"
              className="text-fuchsia-300 hover:text-fuchsia-400 transition-colors">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <footer className="flex flex-col items-center justify-center w-full mt-32">
        <p
          className={`${assistant.className} text-gray-300 tracking-wide opacity-90 text-center`}>
          &copy; 2025 Retrovrs Holdings. All rights reserved.
        </p>
        <p
          className={`${assistant.className} text-gray-300 tracking-wide opacity-90 text-center`}>
          Los Angeles, CA // Paris, France
        </p>
      </footer>
    </div>
  );
}
