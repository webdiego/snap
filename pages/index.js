import Head from 'next/head';
import Image from 'next/future/image';
import Button from '@components/Button';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Snapchat events</title>
        <meta name="description" content="Snapchat events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" bg-secondary-100">
        <div
          className="
flex flex-col justify-center items-center md:flex-row-reverse md:justify-between max-w-5xl px-10 mx-auto min-h-screen py-24"
        >
          <div className="flex-col justify-center items-center text-center md:text-right">
            <div className="text-[36px] md:text-[64px] font-bold leading-[36px] md:leading-[64px] text-primary-400">
              <p className="">Image if</p>
              <p className="title-linear-gradient">Snapchat </p>
              <p className="">had events.</p>
            </div>

            <div className="text-[16px] leading-[18.4px] font-light text-neutral-600 mt-4">
              <p>Easily host and share events with your friends</p>
              <p>across any social media.</p>
            </div>

            <div className="hidden md:block mt-10">
              <Button href={'/event'} />
            </div>
          </div>

          <img
            src="/img/Landing page image.svg"
            alt="Movie-night"
            className="drop-shadow-xl rounded-xl w-1/3 h-full mt-10"
          />

          <div className="mt-10 md:hidden">
            <Button href={'/event'} />
          </div>
        </div>
      </div>
    </div>
  );
}
