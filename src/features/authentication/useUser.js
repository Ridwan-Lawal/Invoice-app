import { useQuery } from "@tanstack/react-query";
import { apiGetCurrentUser } from "../../services/apiAuth";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: apiGetCurrentUser,
  });
  console.log(user);

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
