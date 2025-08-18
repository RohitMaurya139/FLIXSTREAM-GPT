
const IMG_CDN_URL =
  "https://image.tmdb.org/t/p/w500";

const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"

 
    


// Replace with your actual Bearer token
 const bearerToken ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMWMxZjE4Zjc0ZmQzMTdhZDc3NTEwMzE2YjA0YTA3MyIsIm5iZiI6MTc1NTE0NTAyMC42ODQsInN1YiI6IjY4OWQ2MzNjNjhjMzc2MTVjM2M3MDdjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rtElZbzj0VY4hX8_pEnMXGUACGUwlnUTUQtzjNHNgyw";
 const API_OPTION= {
         method: "GET",
         headers: {
           Authorization: `Bearer ${bearerToken}`,
           accept: "application/json",
         },
       }
const SUPPORTED_LANGUAGES = [
  { identifier: "english", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

const OPEN_AI_API =
  "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";
export { BG_IMG, API_OPTION,IMG_CDN_URL,SUPPORTED_LANGUAGES,OPEN_AI_API };