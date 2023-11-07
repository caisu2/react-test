import { useDestroyQuery, usePostQuery, usePutQuery } from "../../../queries";

const InformationMutation = () => {
  const [postMutation] = usePostQuery();
  const [destroy] = useDestroyQuery();
  const [put] = usePutQuery();

  const postAction = async (variables: any) => {
    return postMutation.mutateAsync({
      variables,
      endpoint: "/informations/store",
    });
  };

  const updateAction = async (variables: any, id: number) => {
    return put.mutateAsync({
      variables,
      endpoint: `/informations/update/${id}`,
    });
  };

  const deleteAction = async (id: number) => {
    return destroy.mutateAsync({
      endpoint: `/informations/destroy/${id}`,
    });
  };

  return { postAction, deleteAction, updateAction };
};

export default InformationMutation;
