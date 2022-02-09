import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import { Home } from "../components/Home";
import { generateSessionToken } from "../components/api";
import { Questions } from "../components/Questions";
import { setToken } from "../redux/questions/actions";

export const AppRoutes = () => {
  const dispatch = useDispatch();
  const handleGenerateToken = useCallback(async () => {
    try {
      const resp = await generateSessionToken();
      const { token } = resp.data;
      dispatch(setToken(token));
    } catch (error: any) {
      console.log(error.message);
    }
  }, [dispatch]);

  useEffect(() => {
    handleGenerateToken();
  }, [handleGenerateToken]);

  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/questions" component={Questions} />
    </>
  );
};
