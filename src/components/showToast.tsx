import { createStandaloneToast, Text, UseToastOptions } from "@chakra-ui/react";

const toast = createStandaloneToast().toast;

const showToast = (
  description: string,
  status: UseToastOptions["status"],
  duration = 5000
) => {
  toast.closeAll();

  toast({
    description: (
      <Text
        fontFamily="Inter"
        fontStyle="normal"
        fontWeight="semibold"
        fontSize="16px"
      >
        {description}
      </Text>
    ),
    status,
    position: "top",
    duration,
    isClosable: true,
  });
};

export default showToast;
