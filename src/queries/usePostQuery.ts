import { useMutation } from "react-query";
import globalApi from "../config/api";

interface QueryValues {
  endpoint: string;
  variables: Record<string, unknown>;
}

interface ApiResponse {
  status: number;
  message: string;
  data: any;
}

const query = async (data: QueryValues): Promise<ApiResponse> => {
  const { variables, endpoint } = data;

  const results: ApiResponse = await globalApi().post(endpoint, variables);

  return results;
};

const usePostQuery = () => {
  const mutation = useMutation((values: QueryValues) => query(values), {
    onError: (error: any) => {
      if (error.type === "VALIDATION_ERROR") {
        alert(error.error[0].message || "Something Went Wrong");
      }
    },
  });

  return [mutation];
};

export default usePostQuery;
