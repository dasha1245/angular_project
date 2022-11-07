import {environment} from "../../environments/environment";

const {API} = environment;

const urls = {
  episodes: `${API}/episode`,
  characters: `${API}/character`
}

export {
  urls
}
