import { request } from "../../utils/request";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/slices/userSlice";
import { useEffect } from "react";

const useGetUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await request.get("/auth/getuser");
        dispatch(userActions.getUser(data));
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [dispatch]);
};

export default useGetUser;
