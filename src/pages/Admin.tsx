import { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import { formatAddress, formatBalance, formatChainAsNum } from '../utils';
import { useMetaMask } from '@/hooks/useMetaMask';
import Web3 from 'web3';
import abi from '../utils/attend_abi.json';

const contractAddr = '0x7aB8afeAAE5eB08ca118562080c048e41272a585';
const web3 = new Web3(window.ethereum);
let myContract = new web3.eth.Contract(abi, contractAddr);

function Admin() {
  const { wallet } = useMetaMask();
  const [inputval, setInputVal] = useState('');

  const onInputChange = (e: any) => {
    setInputVal(e.target.value);
  };

  const postSetManager = async () => {
    const web3 = new Web3(window.ethereum);
    let myContract = new web3.eth.Contract(abi, contractAddr);
    let response = await myContract.methods.setManager(inputval).send({
      from: wallet.accounts[0],
      to: contractAddr,
    });
    console.log('response: ', response);
  };

  const postStartAttend = async () => {
    const web3 = new Web3(window.ethereum);
    let myContract = new web3.eth.Contract(abi, contractAddr);
    let response = await myContract.methods.startAttendance().send({
      from: wallet.accounts[0],
      to: contractAddr,
    });
    console.log('response: ', response);
  };
  const postStopAttend = async () => {
    const web3 = new Web3(window.ethereum);
    let myContract = new web3.eth.Contract(abi, contractAddr);
    let response = await myContract.methods.stopAttendance().send({
      from: wallet.accounts[0],
      to: contractAddr,
    });
    console.log('response: ', response);
  };

  return (
    <div className="bg-bg1 w-screen h-screen text-white">
      <div className="m-auto w-1/3 sm:w-full sm:px-10 h-full text-start font-['Tenada']">
        <div className="h-full flex flex-col place-content-center">
          <div className="text-[15px]">매니저 변경</div>
          <div className="flex place-content-between gap-x-5">
            <input
              className="m-auto w-1/2 text-[15px] h-[50px] rounded-lg border-transparent border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400"
              type="text"
              name="st_name"
              onChange={onInputChange}
            />
            <button
              className="m-auto w-1/4 my-10 px-10 py-2 text-center h-[50px] rounded-xl text-[#3A1D1D] text-[18px] font-extrabold bg-[#FEE500] hover:bg-[#FFFFFF]"
              onClick={postSetManager}
            >
              변경
            </button>
          </div>
          <button
            className="m-auto w-1/3 my-10 px-10 py-2 text-center h-[50px] rounded-xl text-[#3A1D1D] text-[18px] font-extrabold bg-[#FEE500] hover:bg-[#FFFFFF]"
            onClick={postStartAttend}
          >
            출석 시작
          </button>
          <button
            className="m-auto w-1/3 my-10 px-10 py-2 text-center h-[50px] rounded-xl text-[#3A1D1D] text-[18px] font-extrabold bg-[#FFFFFF] hover:bg-[#FEE500]"
            onClick={postStopAttend}
          >
            출석 종료
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
