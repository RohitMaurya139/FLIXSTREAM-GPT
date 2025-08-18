import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef, useState } from "react";
import useSearchResultMovies from "../hook/useSearchResultMovie"
import { addSearchQuery } from "../utils/movieSlice";
const GtpSearchBar = () => {
  const language = useSelector(store => store.config.lang);
  const searchText = useRef(null)
   const [query, setQuery] = useState("");
  const dispatch = useDispatch();
   // Always safe to use hook here:
   useSearchResultMovies(query);
  const HandelGtpSearchButton =() => {
    console.log(searchText.current.value)
    // const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query" + searchText.current.value+". only give me names of 5 movies, comma separated like the example result gives ahead. Example result: Gadar,Sholay,Don,Golmaal,Metro ";
    // const gptResult = await openAi.chat.completions.create({
    //   model: "gpt-4o-mini",
    //   messages: [
    //     { role: "developer", content: "Talk like a pirate." },
    //     { role: "user", content: gptQuery },
    //   ],
    // });

    // console.log(gptResult.choices[0].message.content);
 setQuery(searchText.current.value);
  dispatch(addSearchQuery(searchText.current.value));
}
  return (
    <div className="flex items-center justify-center w-full pt-20 pb-4 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800">
      <form
        className="flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-xl shadow-md w-full max-w-xl"
        onSubmit={e => e.preventDefault()}>
        <input
          type="text" 
          ref={searchText}
          placeholder={lang[language].placeHolder}
          className="flex-1 p-3 rounded-lg border border-slate-300 focus:border-red-500 focus:ring-2 focus:ring-red-300 transition outline-none text-lg shadow-sm"
        />
        <button
          type="submit"
          className="px-8 py-3 bg-red-500 text-white font-bold text-lg rounded-lg shadow hover:bg-red-600 hover:scale-105 transition duration-200 cursor-pointer" onClick={HandelGtpSearchButton}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GtpSearchBar;

// https://api.themoviedb.org/3/search/movie?query=Don%20&include_adult=false&language=en-US&page=1'