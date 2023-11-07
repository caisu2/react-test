import { create } from "zustand";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import InformationMutation from "../../../hooks/mutation/information";
import { useGetInformationQuery } from "../../../hooks/queries";
import showToast from "../../../components/showToast";

interface InformationDialogProps {
  show: boolean;
  id: number;
  setShow: (value: boolean) => void;
  setId: (value: number) => void;
}

export const useInformationDialog = create<InformationDialogProps>((set) => ({
  show: false,
  id: 0,
  setShow: (show: boolean) => {
    set(() => ({ show }));
  },
  setId: (id: number) => {
    set(() => ({ id }));
  },
}));

const InformationDialog = () => {
  const cancelRef = useRef<HTMLButtonElement>(null);
  const show = useInformationDialog((state) => state.show);
  const id = useInformationDialog((state) => state.id);
  const setShow = useInformationDialog((state) => state.setShow);
  const setId = useInformationDialog((state) => state.setId);

  const { deleteAction } = InformationMutation();
  const { refetchInformations } = useGetInformationQuery();

  const onDelete = async () => {
    const response = await deleteAction(id);

    console.log(response);

    if (response.status === 200) {
      showToast(response.message, "success");
      setId(0);
      setShow(false);
      refetchInformations();
    }
  };

  return (
    <AlertDialog
      isOpen={show}
      onClose={() => setShow(false)}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Information
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={() => setShow(false)}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={() => onDelete()} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default InformationDialog;
