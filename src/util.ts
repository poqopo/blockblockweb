import { useState } from 'react'
import axios from "axios";
import { prepare, request, getResult, getCardList } from  "klip-sdk";

export const walletConnect = async (setQrvalue) => {
  axios
    .post("https://a2a-api.klipwallet.com/v2/a2a/prepare", {
      bapp: {
        name: "BLOCK BLOCK",
      },
      type: "auth",
    })
    .then((response) => {
      const request_key = response.data.request_key;

      let timerId = setInterval(() => {
        axios
          .get(
            `https://a2a-api.klipwallet.com/v2/a2a/result?request_key=${request_key}`
          )
          .then((res) => {
            if (res.data.result) {
              console.log(`[Result] ${JSON.stringify(res.data.result)}`);
              clearInterval(timerId);
            }
          });
      }, 1000);
    });
  }