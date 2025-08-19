const IMG_CDN_URL = import.meta.env.VITE_IMG_CDN_URL;
const BG_IMG = import.meta.env.VITE_BG_IMG;
const bearerToken = import.meta.env.VITE_BEARER_TOKEN;
const API_OPTION = {
  method: "GET",
  headers: {
    Authorization: `Bearer ${bearerToken}`,
    accept: "application/json",
  },
};
const SUPPORTED_LANGUAGES = [
  { identifier: "english", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];


export { BG_IMG, API_OPTION, IMG_CDN_URL, SUPPORTED_LANGUAGES};
