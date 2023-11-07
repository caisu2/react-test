import { useMutation } from "react-query";
import globalApi from "../config/api";
import showToast from "../components/showToast";

const query = async (data: any) => {
  const { endpoint, variables } = data;

  return await (
    await globalApi().put(endpoint, variables)
  ).data;
};

const usePutQuery = () => {
  const mutation = useMutation((values: any) => query(values), {
    onSuccess: (data) => {
      if (data.code === 400) {
        return showToast(data.message, "warning");
      }
      return data;
    },
    onError: (error: any) => {
      showToast(
        error.response.data.message || "Something Went Wrong",
        "warning"
      );
    },
  });

  return [mutation];
};

export default usePutQuery;
