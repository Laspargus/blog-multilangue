import react from "react";
import about from "./about.json";
import home from "./home.json";
import works from "./works.json";
import sedal from "./sedal.json";
import solan from "./solan.json";
import platon from "./platon.json";

const fr = {
  ...about,
  ...home,
  ...works,
  ...sedal,
  ...solan,
  ...platon, //On concatène tous nos objets JSON en un seul
};

export default fr;
