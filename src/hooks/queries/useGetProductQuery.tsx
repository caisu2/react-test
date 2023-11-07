import { useGetQuery } from "../../queries";

const useGetProductQuery = () => {
  const { data, isLoading, refetch, isFetching, isError } = useGetQuery({
    key: "get_products",
    endpoint: `/products`,
  });

  return {
    dataProducts: (data as any) || [],
    loadingProducts: isLoading,
    refetchProducts: refetch,
    isFetchingProducts: isFetching,
    isErrorProducts: isError,
  };
};

export default useGetProductQuery;
