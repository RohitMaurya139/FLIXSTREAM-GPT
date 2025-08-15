import {IMG_CDN_URL} from "../utils/Constants"
const MovieCard = ({poster}) => {
  return (
      <div>
          <img src={IMG_CDN_URL+poster} alt="moviePoster" />
    </div>
  )
}

export default MovieCard