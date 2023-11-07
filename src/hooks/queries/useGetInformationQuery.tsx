import { useGetQuery } from "../../queries";
import { InformationResponse } from "../../types";

const useGetInformationQuery = () => {
  const { data, isLoading, refetch, isFetching, isError } = useGetQuery({
    key: "get_informations",
    endpoint: `/informations`,
  });

  return {
    dataInformations: (data as InformationResponse[]) || [],
    loadingInformations: isLoading,
    refetchInformations: refetch,
    isFetchingInformations: isFetching,
    isErrorInformations: isError,
  };
};

export default useGetInformationQuery;
