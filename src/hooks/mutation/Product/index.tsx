import { usePostQuery } from "../../../queries";

const ProductMutation = () => {
  const [postMutation] = usePostQuery();

  const postAction = async (variables: any) => {
    return postMutation.mutateAsync({
      variables,
      endpoint: "/products/create",
    });
  };

  return { postAction };
};

export default ProductMutation;
