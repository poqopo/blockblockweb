import axios from 'axios';

export const COUNT_CONTRACT = '0xA914d3Eb961E209906dc76AF341141Bba712b7f9';

const A2P_API_PREPARE_URL = 'https://a2a-api.klipwallet.com/v2/a2a/prepare';
const APP_NAME = 'Block Block';
const DEFAULT_QR_CODE = 'Default';
// export const setCount = (count, setQrCodeValue) => {

//   axios
//     .post(A2P_API_PREPARE_URL, {
//       bapp: {
//         name: APP_NAME,
//       },
//       type: "execute_contract",
//       transaction: {
//         to: COUNT_CONTRACT,
//         abi: '{ "constant": false, "inputs": [{ "name": "_count", "type": "uint256" }], "name": "setCount", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }',
//         value: "0",
//         params: `[\"${count}\"]`, // count값을 뭘로 변경할건지 (파라미터값)
//       },
//     })
//     .then((res) => {
//       const requestKey = res.data.request_key;
//       const qrcode = `https://klipwallet.com/?target=/a2a?request_key=${requestKey}`;
//       setQrCodeValue(qrcode);
//       let timeId = setInterval(() => {
//         axios
//           .get(
//             `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${requestKey}`
//           )
//           .then((res2) => {
//             if (res2.data.result) {
//               console.log(`[Result] ${JSON.stringify(res2.data.result)}`);
//               clearInterval(timeId);
//             }
//           });
//       }, 1000);
//     });
// };

export const getPCAddress = (
  setQrCodeValue: React.Dispatch<React.SetStateAction<string>>,
  setUser: React.Dispatch<React.SetStateAction<string>>,
) => {
  axios
    .post(A2P_API_PREPARE_URL, {
      bapp: {
        name: APP_NAME,
      },
      type: 'auth',
    })
    .then((res) => {
      const requestKey = res.data.request_key;
      const qrcode = `https://klipwallet.com/?target=/a2a?request_key=${requestKey}`;
      setQrCodeValue(qrcode);

      const timeId = setInterval(() => {
        axios
          .get(
            `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${requestKey}`,
          )
          .then((res2) => {
            if (res2.data.result) {
              clearInterval(timeId);
              setUser(res2.data.result.klaytn_address);
            }
          });
      }, 1000);
    });
};
export const getMobileAddress = (
  setQrCodeValue: React.Dispatch<React.SetStateAction<string>>,
  setUser: React.Dispatch<React.SetStateAction<string>>,
) => {
  axios
    .post(A2P_API_PREPARE_URL, {
      bapp: {
        name: APP_NAME,
      },
      type: 'auth',
    })
    .then((res) => {
      const requestKey = res.data.request_key;
      const timeId = setInterval(() => {
        axios
          .get(
            `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${requestKey}`,
          )
          .then((res2) => {
            if (res2.data.result) {
              clearInterval(timeId);
              setUser(res2.data.result.klaytn_address);
            }
          });
      }, 1000);
    });
};
