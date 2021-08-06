import React from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../redux/actions/authAction";
import Typical from "react-typical";
import Cookies from "js-cookie";
import axios from "axios";
const HomePage = () => {
  const dispatch = useDispatch();
  const getProfile = async () => {
    let access_token = Cookies.get("access_token");
    if (access_token) {
      const urlProfile = "https://center-coreapi.herokuapp.com/users/profile";
      const respProfile = await axios.get(urlProfile, {
        headers: {
          Authorization: "Bearer " + access_token,
        },
      });
      localStorage.setItem("profile", JSON.stringify(respProfile.data.user));
      const profileValue = JSON.parse(localStorage.getItem("profile"));
      dispatch(updateProfile(profileValue));
    }
  };
  React.useEffect(() => {
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="text-center">
        <h1 class="display-4">
          {" "}
          <Typical
            steps={["Hello", 1000, "Hello world!", 500]}
            loop={Infinity}
            wrapper="p"
          />
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
