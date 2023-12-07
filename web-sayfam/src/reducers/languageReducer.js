import { TR } from "../actions/languageAction";
import { EN } from "../actions/languageAction";
import { TRAboutData } from "../mocks/TRAboutData";
import { TRProfileData } from "../mocks/TRProfileData";
import { TRProductCardData } from "../mocks/TRProductCardData";
import { AboutData } from "../mocks/AboutData";
import { ProfileData } from "../mocks/ProfileData";
import { ProductCardData } from "../mocks/ProductCardData";

const stateInitial = {
  aboutData: AboutData,
  profileData: ProfileData,
  projectData: ProductCardData,
};

const languageReducer = (state = stateInitial, action) => {
  const { type } = action;
  switch (type) {
    case TR:
      return {
        ...state,
        aboutData: TRAboutData,
        profileData: TRProfileData,
        projectData: TRProductCardData,
      };
      case EN:
      return {
        ...state,
        aboutData: AboutData,
        profileData: ProfileData,
        projectData: ProductCardData,
      };
    default:
      return state;
  }
};
export default languageReducer;
