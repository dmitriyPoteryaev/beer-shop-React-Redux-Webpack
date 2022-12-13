import { setDataBeer } from "../reducers/BeerReducer";
import { setErrorBeer } from "../reducers/BeerReducer";
import { setisLoadingBeer } from "../reducers/BeerReducer";
import { getAnswer } from "../../customHooks/getAnswer";

export const fetchBeer = (currentPage) => {
  return async function (dispatch) {
    try {
      let data = await getAnswer(
        "https://raw.githubusercontent.com/DHDHFFHDHDHFVHvhb/dbForBeer/main/dbBeer.json"
      );

      dispatch(setDataBeer(data.allbeer[0][`beer_${currentPage}_limit_25`]));
    } catch (err) {
      dispatch(setErrorBeer(`Your url have status is ${err}`));
    } finally {
      dispatch(setisLoadingBeer(false));
    }
  };
};
