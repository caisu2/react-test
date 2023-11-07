import { useQuery } from "react-query";
import globalApi from "../config/api";
import { useMemo } from "react";

type Props = {
  key: string;
  endpoint: string;
  params?: any;
  enabled?: boolean;
};

export async function fetchQuery({ queryKey }: any) {
  const [, { endpoint, params }] = queryKey;

  const response = await globalApi().get(`${endpoint}${params}`);

  return response.data;
}

const useGetAllQuery = (props: Props) => {
  const { key, endpoint, params = {}, enabled = true } = props;

  const getParams = useMemo(
    () =>
      Object.entries(params).map(
        ([key, value], idx) => `${idx === 0 ? "?" : "&"}${key}=${value}`
      ),
    [params]
  ).join("");

  return useQuery(
    [key, { endpoint, params: getParams ? `${getParams}` : "" }],
    fetchQuery,
    {
      enabled,
      cacheTime: 1000,
    }
  );
};

export default useGetAllQuery;
