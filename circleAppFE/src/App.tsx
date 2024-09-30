import { useEffect } from "react";
import { useAppDispatch } from "./hooks/use-store";
import { AppRouter } from "./pages/Router";
import { setUser } from "./store/auth-slice";
import { apiBaseURL } from "./libs/api";
import { UserStoreDTO } from "./features/auth/types/dto";
import Cookies from "js-cookie";

function App() {
  const dispatch = useAppDispatch();

  async function checkAuthentication() {
    const { data } = await apiBaseURL.get<null, { data: UserStoreDTO }>(
      "/auth/check",
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );

    dispatch(setUser(data));
  }

  useEffect(() => {
    checkAuthentication();
  }, []);

  return <AppRouter />;
}
export default App;
