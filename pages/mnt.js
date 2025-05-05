import dynamic from 'next/dynamic';
import WalletProvider from '../assets/WalletProvider';
import TopMenu from '../assets/TopMenu';
import MantleAsset from '../assets/MantleAsset';
import Sidebar from '../assets/Sidebar';
import Head from 'next/head';

const MantleAssetWithNoSSR = dynamic(() => import('../assets/MantleAsset'), {
  ssr: false,
});

export default function Mnt() {
  return (
    <div className="min-h-screen bg-white-100">
      <WalletProvider>
        {({ provider, account, connectWallet, disconnectWallet }) => (
          <>
            <TopMenu account={account} connectWallet={connectWallet} disconnectWallet={disconnectWallet} />
            
            <Head>
              <title>Mantle Token Creation Tool</title>
              <meta name="description" content="Create and launch your own meme token on Mantle" />
              <meta property="og:title" content="Launch Your Meme Coin on Mantle" />
              <meta property="og:description" content="Build and deploy a meme coin instantly on Mantle. Fast, secure, and 100% code-free." />
              <meta property="og:type" content="website" />
              <meta property="og:url" content="/mnt" />
            </Head>

            <div className="container mx-auto p-4 max-w-7xl flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <MantleAssetWithNoSSR provider={provider} account={account} connectWallet={connectWallet} />
              </div>
              <div className="md:w-[300px] flex-shrink-0">
                <Sidebar />
              </div>
            </div>
          </>
        )}
      </WalletProvider>
    </div>
  );
}
