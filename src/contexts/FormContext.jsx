/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useMemo } from "react";
import { useFieldArray, useForm, useWatch } from "react-hook-form";

const FormContext = createContext();

function FormContextProvider({ children }) {
  // register, handlesubmit, formstate, reset
  const {
    register,
    handleSubmit,
    unregister,
    watch,
    control,
    formState,
    reset,
    getValues,
    setValue,
    clearErrors,
  } = useForm({
    defaultValues: {
      items: [{ name: "", quantity: "", price: "", total: "" }],
    },
  });

  /* for adding new item inputs to the items Array
    - we set the name:'items' i.e the array of the items in react form, so the 'fields' properties will now be the 'items' array in the react form, we loop the 'fields' prop and render sets of input field for each 'item' in the fields prop. 
    - 'remove' is used to delete an input item from the 'items' array
    - 'append' is used to add an input item to the 'items' array 
    */
  const { fields, remove, append } = useFieldArray({
    control,
    name: "items",
  });

  /* for watching the input field for any change in the input value - needed to calculate the price of each item as form is being field */
  const itemsWatch = useWatch({
    control,
    name: "items",
  });

  useEffect(
    function () {
      unregister([
        "street",
        "city",
        "postCode",
        "country",
        "clientCity",
        "clientCountry",
        "clientPostCode",
        "sendCountry",
        "invoice-date",
        "payment-terms",
        "project-description",
      ]);
    },
    [unregister]
  );

  const context = useMemo(() => {
    return {
      register,
      handleSubmit,
      watch,
      control,
      formState,
      fields,
      append,
      remove,
      itemsWatch,
      reset,
      getValues,
      setValue,
      clearErrors,
    };
  }, [
    register,
    handleSubmit,
    watch,
    control,
    formState,
    fields,
    append,
    remove,
    itemsWatch,
    reset,
    getValues,
    setValue,
    clearErrors,
  ]);

  return (
    <FormContext.Provider value={context}>{children}</FormContext.Provider>
  );
}

export function useInvoiceContext() {
  const context = useContext(FormContext);
  return context;
}

export default FormContextProvider;
