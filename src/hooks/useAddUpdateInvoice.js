import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  getInvoiceFormReducer,
  openingForm,
} from "../features/invoice-form/invoiceFormSlice";
import { apiAddInvoice, apiUpdateInvoice } from "../services/apiInvoice";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddUpdateInvoice(isDraft) {
  const dispatch = useDispatch();
  const { isFormOpen, formType } = useSelector(getInvoiceFormReducer);
  const queryClient = useQueryClient();

  const { isLoading: isAddingUpdatingInvoice, mutate: mutateToAddUpdate } =
    useMutation({
      mutationFn: formType === "Create" ? apiAddInvoice : apiUpdateInvoice,
      onSuccess: () => {
        toast.success(
          `Invoice successfully ${
            isDraft ? "drafted!" : formType === "Create" ? "added!" : "updated!"
          } `
        );
        queryClient.invalidateQueries("invoices");
        dispatch(openingForm());
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });

  return { isAddingUpdatingInvoice, mutateToAddUpdate, isFormOpen, formType };
}
