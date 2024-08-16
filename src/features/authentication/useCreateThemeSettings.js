import { useMutation } from "@tanstack/react-query";
import { apiCreateThemeSettings } from "../../services/apiInvoice";
import { useUser } from "./useUser";

export function useCreateThemeSettings() {
  const { user } = useUser();

  const { mutate: createThemeSettings, isLoading: isCreatingSettings } =
    useMutation({
      mutationFn: (theme) =>
        apiCreateThemeSettings({ user_id: user?.id, ...theme }),
      onSuccess: (data) => console.log(data),
      onError: (err) => console.log(err.message),
    });

  return { createThemeSettings, isCreatingSettings };
}
