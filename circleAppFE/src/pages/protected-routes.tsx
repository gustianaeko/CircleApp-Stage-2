import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/use-store";
import { apiBaseURL } from "../libs/api";
import { UserStoreDTO } from "../features/auth/types/dto";
import Cookies from "js-cookie";
import { setUser } from "../store/auth-slice";
import { useQuery, useQueryClient } from "@tanstack/react-query";


export function ProtectedRoutes() {
  const auth = useAppSelector((state) => state.auth);
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  async function getCurrentUser() {
    const response = await apiBaseURL.get<null, {data: UserStoreDTO}>(
      "auth/check", {headers: {
        Authorization : `Bearer ${Cookies.get("token")}`
      }}
    )

    dispatch(setUser(response.data))

    return response.data
  }

  const queryClient = useQueryClient();
  const query = queryClient.getQueryData(["currentUser"]);
  console.log("data query", query)

  const {isLoading } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser
  })

  if (isLoading) return null

  if (auth.id && auth.role === "MEMBER") return <Outlet/>
  
  navigate("/auth/login")

}

