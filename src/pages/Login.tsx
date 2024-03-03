import { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import { formatAddress, formatBalance, formatChainAsNum } from '../utils';
import { useMetaMask } from '@/hooks/useMetaMask';

function Login() {
  const { wallet } = useMetaMask();

  const postAttendance = () => {
    const params = [
      {
        from: window.ethereum.selectedAddress,
        to: '0x0000000000000000000000000000000000000000',
        // 30400
        gas: '0x76c0',
        // 10000000000000
        gasPrice: '0x9184e72a000',
        // 2441406250
      },
    ];
    window.ethereum
      ?.request({
        method: 'eth_sendTransaction',
        params,
      })
      .then((result: any) => {
        window.alert(result);
        // The result varies by RPC method.
        // For example, this method returns a transaction hash hexadecimal string upon success.
      })
      .catch((error: any) => {
        window.alert(error);
        // If the request fails, the Promise rejects with an error.
      });
  };

  return (
    <div className="bg-bg1 w-screen h-screen text-white">
      <div className="m-auto w-1/3 sm:w-full sm:px-10 h-full text-start font-['Tenada']">
        <div className="h-full flex flex-col place-content-center">
          <div className="text-[15px]">
            나의 주소 : {formatAddress(wallet.accounts[0])}
          </div>
          <div className="text-[15px] my-5">
            Wallet Balance: {wallet.balance}
          </div>
          <button
            className="m-auto w-full my-10 px-10 py-2 text-center h-[50px] rounded-xl text-[#3A1D1D] text-[18px] font-extrabold bg-[#FEE500] + hover:bg[#FFFFFF]"
            onClick={postAttendance}
          >
            출석체크
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
