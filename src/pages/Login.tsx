import { useState, useEffect } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import { formatAddress, formatBalance, formatChainAsNum } from '../utils';
import { useMetaMask } from '@/hooks/useMetaMask';
import Web3 from 'web3';
import abi from '../utils/attend_abi.json';

const contractAddr = '0x7aB8afeAAE5eB08ca118562080c048e41272a585';
const web3 = new Web3(window.ethereum);
let myContract = new web3.eth.Contract(abi, contractAddr);

function Login() {
  const { wallet } = useMetaMask();
  const [name, setName] = useState('');
  const [score, setScore] = useState<number | undefined>(undefined);
  const [inputval, setInputVal] = useState('');
  const [viewscore, setViewScore] = useState(true);

  const changeNetwork = async () => {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [
        {
          chainId: '0x5',
        },
      ],
    });
  };

  useEffect(() => {
    viewName();
    changeNetwork();
  }, []);

  const postAttendance = async () => {
    let response = await myContract.methods.attend().send({
      from: wallet.accounts[0],
      // to: contractAddr,
    });
    console.log('response: ', response);
  };

  const onInputChange = (e: any) => {
    setInputVal(e.target.value);
  };

  const postName = async () => {
    let response = await myContract.methods.attend(inputval).send({
      from: wallet.accounts[0],
      // to: contractAddr,
    });
    console.log('response: ', response);
  };

  const viewAttendScore = () => {
    myContract.methods
      .viewAttendScore(wallet.accounts[0])
      .call()
      .then((res: any) => {
        setViewScore(true);
        setScore(Number(res));
      });
  };

  const viewName = () => {
    myContract.methods
      .viewName(wallet.accounts[0])
      .call()
      .then((res: any) => {
        setName(res);
      });
  };

  return (
    <div className="bg-bg1 w-screen h-screen text-white">
      <div className="m-auto w-1/3 sm:w-full sm:px-10 h-full text-start font-['Tenada']">
        <div className="h-full flex flex-col place-content-center">
          {name != '' ? (
            <div className="text-[15px]">내 이름 : {name}</div>
          ) : (
            <div>
              <div className="text-[15px]">
                이름이 없어요 이름을 설정해주세요!
              </div>
              <div className="flex place-content-between gap-x-5">
                <input
                  className="m-auto w-1/2 text-[15px] h-[50px] rounded-lg border-transparent border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400"
                  type="text"
                  name="st_name"
                  onChange={onInputChange}
                />
                <button
                  className="m-auto w-1/4 my-10 px-5 sm:px-2 py-2 text-center h-[50px] rounded-xl text-[#3A1D1D] text-[18px] font-extrabold bg-[#FEE500] hover:bg-[#FFFFFF]"
                  onClick={postName}
                >
                  제출
                </button>
              </div>
            </div>
          )}
          <div className="text-[15px]">
            나의 주소 : {formatAddress(wallet.accounts[0])}
          </div>
          <div className="text-[15px] my-5">
            Wallet Balance: {wallet.balance}
          </div>
          <button
            className="m-auto w-full my-10 px-10 py-2 text-center h-[50px] rounded-xl text-[#3A1D1D] text-[18px] font-extrabold bg-[#FEE500] hover:bg-white"
            onClick={postAttendance}
          >
            출석체크
          </button>

          <button
            className="m-auto w-full my-10 px-10 py-2 text-center h-[50px] rounded-xl text-[#3A1D1D] text-[18px] font-extrabold bg-[#FEE500] hover:bg-white "
            onClick={viewAttendScore}
          >
            출석 점수 확인
          </button>
          {viewscore ? (
            <div className="text-[15px] my-5 text-center">
              내 출석 점수: {score}
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
