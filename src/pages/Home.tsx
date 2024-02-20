import { walletConnect } from "@/util";

function Home() {

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
                <button className="w-full h-[50px] bg-[#FEE500] rounded-xl text-[#3A1D1D] text-[18px] font-extrabold"
                    onClick={walletConnect}
                    type="button">
                    <div className="flex gap-x-5 my-auto">
                        <img src="/klip.png" className="ml-5 my-auto w-[60px] h-[20px]"></img>
                        <p className="my-auto">Klip 지갑 연결하기</p>
                    </div>
                </button>
            </div>
        </div>
      </div>
    );
  }
  
  export default Home;
  