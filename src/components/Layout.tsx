import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Toaster } from "react-hot-toast";
import Logo from "../../public/logo.jpg";

export const Layout = ({
  children,
  formatRpc,
}: {
  children: React.ReactNode;
  formatRpc: string;
}) => (
  <div className="flex flex-col h-screen">
    <div className="flex items-center border-b-2 border-gray-100 py-2 px-10 sm:justify-between sm:space-x-10">
      <div className="flex flex-row items-center">
        <Link href="/" passHref>
          <a>
            <Image
              src={Logo}
              layout="fixed"
              alt="Company Logo"
              width="72"
              height="72"
            />
          </a>
        </Link>
        <div className="font-mono text-xs text-gray-600 px-3">
          NFT trade has never been so easy
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="font-mono text-base text-gray-600 px-3">
          {formatRpc}
        </div>
        <WalletMultiButton />
      </div>
    </div>
    <div className="w-fullscreen flex-grow">{children}</div>

    <footer className="flex items-center boarder-t-2 boarder-gray-100 bg-pink-300 py-2 px-10 sm:justify-between sm:space-x-10 bottom-0">
      <div className="font-mono text-xs text-gray-600">
        2021 Kalzom All rights reserved
      </div>
      <div className="flex gap-3 h-5">
        <a
          href={`https://github.com/tomoima525/Kalzom/blob/main/FAQ.md`}
          target="_blank"
          rel="noreferrer"
          className=" self-center font-mono text-xs text-gray-600"
        >
          {`FAQ & ToC`}
        </a>
        <a
          href={`https://github.com/tomoima525/Kalzom`}
          target="_blank"
          rel="noreferrer"
        >
          <Image alt="github" src="/github-brands.svg" height={20} width={20} />
        </a>
        <a
          href={`https://twitter.com/sol_hayama`}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            alt="twitter"
            src="/twitter-brands.svg"
            height={20}
            width={20}
          />
        </a>
      </div>
    </footer>
    <Toaster />
  </div>
);
