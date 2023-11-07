import React from "react";
import InforamtionTable from "./table";
import { InformationModal } from "./modal";
import { InformationDialog } from "./dialogs";
import { useGetInformationQuery } from "../../hooks/queries";

const Container = () => {
  const { dataInformations, loadingInformations } = useGetInformationQuery();

  return (
    <>
      <InforamtionTable loading={loadingInformations} data={dataInformations} />
      <InformationModal />
      <InformationDialog />
    </>
  );
};

export default Container;
