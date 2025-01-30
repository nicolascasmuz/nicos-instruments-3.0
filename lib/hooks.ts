import useSWR from "swr";
import useSWRImmutable from "swr";
import { fetchAPI } from "./api";

export function useMe() {
  const { data, error } = useSWR("/me", fetchAPI);

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

/* export function useMeAddress() {
  const { data, error } = useSWR("/me/address", fetchAPI);

  if (error) {
    console.error(error);
    return null;
  }

  return data;
} */

export function useProduct(productID: string) {
  const { data, error } = useSWRImmutable(`/products/${productID}`, fetchAPI);

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}

export function useOrder(productID: string) {
  console.log("data hooks: ", `/order?productID=${productID}`);
  const { data, error } = useSWRImmutable(
    `/order?productID=${productID}`,
    fetchAPI
  );

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}
