import { useEffect, useState } from 'react';
import { connect, getAccount } from 'toppin';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import { pageChange } from 'src/redux/Slices/page';
import { getSDK } from '@/redux/Slices/sdk';
import { getAddress } from '@/redux/Slices/user';

function Home() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.3,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    if (inView) {
      dispatch(pageChange({ curPage: 'HOME' }));
    }
  }, [inView]);

  const sdk = useSelector((state: any) => state.sdk.sdk);
  const account = useSelector((state: any) => state.user.address);

  const handleLogin = async () => {
    const updateState = (value: any) => {
      dispatch(getAddress({ address: value }));
    };
    dispatch(getSDK(sdk));

    if (sdk) {
      // sdk가 정의되었는지 확인
      const address = await getAccount(sdk);
      updateState(address);
    } else {
      console.warn('SDK is not initialized yet.');
    }
  };

  return (
    <div
      ref={ref}
      id="HOME"
      className="w-screen h-screen text-white font-extrabold flex items-center"
    >
      <div className="text-center m-auto">
        <h1 className="text-[48px] font-['Tenada'] leading-tight ">TOPPIN</h1>
        <div className="text-white text-center text-lg">
          Where We Make History
        </div>
        <button
          className="mx-auto w-full my-10 px-10 py-2 text-center h-[50px] bg-[#FEE500] rounded-xl text-[#3A1D1D] text-[18px] font-extrabold"
          onClick={handleLogin}
          type="button"
        >
          <p className="m-auto"> Connect Wallet</p>
        </button>
        <p>{account}</p>
      </div>
    </div>
  );
}

export default Home;
