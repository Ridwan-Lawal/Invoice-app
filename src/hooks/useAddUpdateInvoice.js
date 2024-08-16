import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  getInvoiceFormReducer,
  openingForm,
} from "../features/invoice-form/invoiceFormSlice";
import { apiAddInvoice, apiUpdateInvoice } from "../services/apiInvoice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../features/authentication/useUser";

export function useAddUpdateInvoice(isDraft) {
  const dispatch = useDispatch();
  const { isFormOpen, formType } = useSelector(getInvoiceFormReducer);
  const queryClient = useQueryClient();
  const { user } = useUser();

  const { isLoading: isAddingUpdatingInvoice, mutate: mutateToAddUpdate } =
    useMutation({
      mutationFn: (newInvoice) =>
        formType === "Create"
          ? apiAddInvoice({ ...newInvoice, user_id: user?.id })
          : apiUpdateInvoice({ ...newInvoice, user_id: user?.id }),
      onSuccess: () => {
        toast.success(
          `Invoice successfully ${
            isDraft ? "drafted!" : formType === "Create" ? "added!" : "updated!"
          } `
        );
        queryClient.invalidateQueries({ queryKey: ["invoices"] });
        dispatch(openingForm());
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });

  return { isAddingUpdatingInvoice, mutateToAddUpdate, isFormOpen, formType };
}
