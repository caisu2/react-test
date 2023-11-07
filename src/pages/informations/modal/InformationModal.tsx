import React from "react";
import { create } from "zustand";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { InformationForm } from "../forms";
import { useInformationForm } from "../forms/information";

interface InformationProps {
  show: boolean;
  setShow: (value: boolean) => void;
}

export const useInformationModal = create<InformationProps>((set) => ({
  show: false,
  setShow: (show: boolean) => {
    set(() => ({ show }));
  },
}));

const InformationModal = () => {
  const show = useInformationModal((state) => state.show);
  const setShow = useInformationModal((state) => state.setShow);
  const id = useInformationForm((state) => state.id);
  const setUpdate = useInformationForm((state) => state.setUpdate);

  return (
    <Modal
      isOpen={show}
      onClose={() => {
        setShow(false);
        setUpdate({
          id: 0,
          first_name: "",
          last_name: "",
          age: 0,
          address: "",
          gender: "",
        });
      }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{id ? "Edit" : "Add"} Information</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <InformationForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default InformationModal;
