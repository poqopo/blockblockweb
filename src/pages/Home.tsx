import { useMetaMask } from '@/hooks/useMetaMask';
import Login from '@/pages/Login';
import { formatChainAsNum } from '@/utils';
import { useEffect } from 'react';

export function Home() {
  const { wallet, connectMetaMask } = useMetaMask();

  return (
    <div>
      {wallet.accounts.length > 0 ? (
        <Login />
      ) : (
        <div className="w-screen h-screen bg-bg1 text-white font-extrabold flex items-center">
          <div className="text-center m-auto">
            <h1 className="text-[48px] font-['Tenada'] leading-tight mr-[30px] ">
              BLOCK
            </h1>
            <h1 className="text-[48px] font-['Tenada'] leading-tight ml-[30px] ">
              BLOCK
            </h1>
            <div className="text-white text-center text-lg">
              Where We Make History
            </div>
            <button
              className="mx-auto w-full my-10 px-10 py-2 text-center h-[50px] rounded-xl text-[#3A1D1D] text-[18px] font-extrabold bg-[#FEE500] + hover:bg[#FFFFFF]"
              onClick={connectMetaMask}
            >
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
