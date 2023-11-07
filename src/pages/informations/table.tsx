import { FC } from "react";
import { useInformationModal } from "./modal/InformationModal";
import { useInformationDialog } from "./dialogs/InformationDialog";
import { InformationResponse } from "../../types";
import { useInformationForm } from "./forms/information";

interface TableProps {
  loading: boolean;
  data: InformationResponse[];
}

const InforamtionTable: FC<TableProps> = (props) => {
  const { loading, data } = props;
  const setShow = useInformationModal((state) => state.setShow);
  const showDialog = useInformationDialog((state) => state.setShow);
  const setId = useInformationDialog((state) => state.setId);
  const setUpdate = useInformationForm((state) => state.setUpdate);

  return (
    <div className="container mx-auto p-10 mt-5">
      <div className="flex flex-col">
        <div className="grid grid-cols-5 gap-4">
          <button
            type="button"
            className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-grau-200 text-gray-500 hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            onClick={() => setShow(true)}
          >
            Add Information
          </button>
        </div>
        {!loading && (
          <div className="-m-1.5 overflow-x-auto mt-4 ">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                      >
                        Full Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                      >
                        Age
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className=" py-3 text-end text-xs font-medium text-gray-500 uppercase"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {data.map((item: InformationResponse, idx: number) => (
                      <tr key={idx}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                          {item.first_name} {item.last_name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {item.age}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                          {item.address}
                        </td>
                        <td className="whitespace-nowrap p-0 text-end text-sm font-medium">
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            onClick={() => {
                              setShow(true);
                              setUpdate({
                                id: item.id,
                                first_name: item.first_name,
                                last_name: item.last_name,
                                address: item.address,
                                age: item.age,
                                gender: item.gender,
                              });
                            }}
                          >
                            Update
                          </button>
                        </td>
                        <td className=" whitespace-nowrap text-end text-sm font-medium">
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            onClick={() => {
                              showDialog(true);
                              setId(item.id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InforamtionTable;
