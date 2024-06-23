import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";
import TwitterIcon from "@/components/twitter";
import VerifiedIcon from "@/components/verified";
import GithubIcon from "@/components/github";
import { TOTAL } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Feed - @byt3h3ad",
  description: "X Highlights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`mx-auto flex max-w-full flex-col py-2 md:w-1/2 ${inter.className}`}
      >
        <div className="px-8 pb-2">
          <a
            href=""
            className="text-xl font-semibold underline-offset-2 hover:underline"
          >
            highlights
          </a>
          <p className="text-sm font-light">{TOTAL} tweets</p>
        </div>
        <Image
          src="/background-large.jpg"
          alt="background image"
          className="aspect-[3/1] w-full object-cover"
          width={500}
          height={500}
        />
        <section className="grid w-full -translate-y-1/4 gap-y-1 px-4 md:px-8">
          <div className="flex w-full items-end justify-between py-2">
            <div className="w-24 md:w-28">
              <Image
                src="https://unavatar.io/x/byt3h3ad"
                alt="avatar"
                className="aspect-square rounded-full border-4 object-cover"
                width={400}
                height={400}
                priority={true}
              />
            </div>
            <a
              href="https://twitter.com/intent/follow?screen_name=byt3h3ad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-x-1 rounded-full border-2 border-transparent bg-[#187fc5] px-3 py-1 text-sm text-white outline-transparent hover:border-slate-50 hover:no-underline focus:border-slate-50 focus-visible:border-slate-50"
            >
              <span className="font-bold">Follow</span>
              <TwitterIcon />
            </a>
          </div>
          <h1 className="flex items-center gap-x-2 text-2xl">
            adhiraj
            <VerifiedIcon />
          </h1>
          <a
            href="https://x.com/byt3h3ad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-extralight text-[#8b98a5] underline-offset-2 hover:underline"
          >
            @byt3h3ad
          </a>
          <p className="py-2 font-light">nerd. i like building stuff.</p>
          <ul className="flex flex-wrap justify-around gap-x-2 font-extralight text-[#8b98a5]">
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M11.948 1.25h.104c.899 0 1.648 0 2.242.08c.628.084 1.195.27 1.65.725c.456.456.642 1.023.726 1.65c.06.44.075.964.079 1.57c.648.021 1.226.06 1.74.128c1.172.158 2.121.49 2.87 1.238c.748.749 1.08 1.698 1.238 2.87c.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433c-.158 1.172-.49 2.121-1.238 2.87c-.749.748-1.698 1.08-2.87 1.238c-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153c-1.172-.158-2.121-.49-2.87-1.238c-.748-.749-1.08-1.698-1.238-2.87c-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433c.158-1.172.49-2.121 1.238-2.87c.749-.748 1.698-1.08 2.87-1.238a17.54 17.54 0 0 1 1.74-.128c.004-.606.02-1.13.079-1.57c.084-.627.27-1.194.725-1.65c.456-.455 1.023-.64 1.65-.725c.595-.08 1.345-.08 2.243-.08M8.752 5.252c.378-.002.775-.002 1.192-.002h4.112c.417 0 .814 0 1.192.002c-.004-.57-.018-1-.064-1.347c-.063-.461-.17-.659-.3-.789c-.13-.13-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3c-.13.13-.237.327-.3.788c-.046.346-.06.776-.064 1.347M5.71 6.89c-1.006.135-1.586.389-2.01.812c-.422.423-.676 1.003-.811 2.009c-.138 1.027-.14 2.382-.14 4.289c0 1.907.002 3.262.14 4.29c.135 1.005.389 1.585.812 2.008c.423.423 1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14c1.005-.135 1.585-.389 2.008-.812c.423-.423.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289c0-1.907-.002-3.261-.14-4.29c-.135-1.005-.389-1.585-.812-2.008c-.423-.423-1.003-.677-2.009-.812c-1.027-.138-2.382-.14-4.289-.14h-4c-1.907 0-3.261.002-4.29.14"
                  clip-rule="evenodd"
                />
                <path
                  fill="currentColor"
                  d="M17 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0M9 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                />
              </svg>
              <p>Available</p>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M256 48c-79.5 0-144 61.39-144 137c0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137"
                />
                <circle
                  cx="256"
                  cy="192"
                  r="48"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
              <p>Assam, India</p>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M238 88.18a52.42 52.42 0 0 1-15.4 35.66l-34.75 34.75A52.28 52.28 0 0 1 150.62 174h-.05A52.63 52.63 0 0 1 98 119.9a6 6 0 0 1 6-5.84h.17a6 6 0 0 1 5.83 6.16A40.62 40.62 0 0 0 150.58 162a40.4 40.4 0 0 0 28.73-11.9l34.75-34.74a40.63 40.63 0 0 0-57.43-57.46l-11 11a6 6 0 0 1-8.49-8.49l11-11a52.62 52.62 0 0 1 74.43 0A52.83 52.83 0 0 1 238 88.18m-127.62 98.9l-11 11A40.36 40.36 0 0 1 70.6 210a40.63 40.63 0 0 1-28.7-69.36l34.72-34.74A40.63 40.63 0 0 1 146 135.77a6 6 0 0 0 5.83 6.16h.17a6 6 0 0 0 6-5.84a52.63 52.63 0 0 0-89.86-38.67l-34.76 34.74A52.63 52.63 0 0 0 70.56 222a52.26 52.26 0 0 0 37.22-15.42l11-11a6 6 0 1 0-8.49-8.48Z"
                />
              </svg>
              <a
                href="https://adhiraj.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1d9bf0] underline-offset-2 hover:underline"
              >
                adhiraj.me
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M208 36h-28V24a4 4 0 0 0-8 0v12H84V24a4 4 0 0 0-8 0v12H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h28v12a4 4 0 0 0 8 0V44h88v12a4 4 0 0 0 8 0V44h28a4 4 0 0 1 4 4v36H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4V92h168v116a4 4 0 0 1-4 4m-72-80a8 8 0 1 1-8-8a8 8 0 0 1 8 8m44 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-88 40a8 8 0 1 1-8-8a8 8 0 0 1 8 8m44 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8m44 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8"
                />
              </svg>
              <p>Joined June 2024</p>
            </li>
          </ul>
        </section>
        <section className="px-2 md:px-0">{children}</section>
        <footer className="flex justify-center pb-6">
          <a
            href="https://git.new/highlights"
            target="_blank"
            className="group flex items-center gap-x-2 text-2xl"
          >
            <GithubIcon />
            <span className="text-sm underline-offset-1 group-hover:underline">
              byt3h3ad
            </span>
          </a>
        </footer>
      </body>
    </html>
  );
}
