const IMG_CDN_URL = import.meta.env.VITE_IMG_CDN_URL;
const BG_IMG = import.meta.env.VITE_BG_IMG;
const bearerToken = import.meta.env.VITE_bearerToken;
const API_OPTION = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${bearerToken}`,
    accept: "application/json",
  },
};
const SUPPORTED_LANGUAGES = [
  { identifier: "english", name: "ENGLISH",display:"EN" },
  { identifier: "hindi", name: "HINDI" ,display:"HI"},
  { identifier: "spanish", name: "SPANISH" ,display:"SP" },
];


export { BG_IMG, API_OPTION, IMG_CDN_URL, SUPPORTED_LANGUAGES};
