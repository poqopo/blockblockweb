import QRCode from 'qrcode.react';
import { useState } from 'react';
import { getMobileAddress } from '@/util';

function Home() {
  const DEFAULT_QR_CODE = 'DEFAULT';
  const [qrvalue, setQrvalue] = useState<string>(DEFAULT_QR_CODE);
  const [user, setUser] = useState('');

  const onGetAddress = () => {
    getMobileAddress(setQrvalue, setUser);
  };

  return (
    <div className="w-full h-full">
      <div className="relative inset-x-auto top-1/3 text-white font-extrabold">
        <div className="text-center font-['Tenada'] leading-tight">
          <h1 className="mr-[45px] text-[48px]">Block</h1>
          <h1 className="ml-[45px] text-[48px]">Block</h1>
        </div>
        <div className="mx-auto my-[20px] text-white text-center">
          Where We Make History
        </div>

        <div className="w-full px-10">
          <button
            className="w-full h-[50px] bg-[#FEE500] rounded-xl text-[#3A1D1D] text-[18px] font-extrabold"
            onClick={onGetAddress}
            type="button"
          >
            <div className="flex gap-x-5 my-auto">
              <img
                src="/klip.png"
                className="ml-5 my-auto w-[60px] h-[20px]"
                alt="Loading..."
              />
              <p className="my-auto">Klip 지갑 연결하기</p>
            </div>
          </button>
        </div>
        {qrvalue !== DEFAULT_QR_CODE ? (
          <div className="fixed top-1/3 left-0 right-0 p-10 bg-[#141717] shadow-2xl	flex flex-col place-content-center text-center">
            <h1 className="text-[20px] font-extrabold my-5">
              QR 코드를 찍어 로그인하세요!
            </h1>
            <QRCode className="mx-auto" value={qrvalue} />
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

export default Home;
