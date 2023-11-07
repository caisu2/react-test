import { create } from "zustand";
import { useInformationModal } from "../modal/InformationModal";
import { useForm } from "react-hook-form";
import { InformationFormProps, UpdateInformation } from "../../../types";
import InformationMutation from "../../../hooks/mutation/information";
import showToast from "../../../components/showToast";
import { useGetInformationQuery } from "../../../hooks/queries";

interface FormProps {
  id?: number;
  first_name: string;
  last_name: string;
  age: number;
  gender: string;
  address: string;
}

export const useInformationForm = create<InformationFormProps>((set) => ({
  id: 0,
  first_name: "",
  last_name: "",
  age: 0,
  gender: "",
  address: "",
  setUpdate: ({
    id,
    first_name,
    last_name,
    age,
    gender,
    address,
  }: UpdateInformation) => {
    set(() => ({ id, first_name, last_name, age, gender, address }));
  },
}));

const InformationForm = () => {
  const setShow = useInformationModal((state) => state.setShow);
  const id = useInformationForm((state) => state.id);
  const first_name = useInformationForm((state) => state.first_name);
  const last_name = useInformationForm((state) => state.last_name);
  const age = useInformationForm((state) => state.age);
  const address = useInformationForm((state) => state.address);
  const gender = useInformationForm((state) => state.gender);
  const setUpdate = useInformationForm((state) => state.setUpdate);

  const { postAction, updateAction } = InformationMutation();
  const { refetchInformations } = useGetInformationQuery();

  const { register, handleSubmit } = useForm<FormProps>({
    mode: "onChange",
    defaultValues: {
      id,
      first_name,
      last_name,
      age,
      address,
      gender,
    },
  });

  const onSubmit = async (data: FormProps) => {
    if (id) {
      const response = await updateAction(data, id);

      if (response.status === 200) {
        showToast(response.message, "success");
        refetchInformations();
        setUpdate({
          id: 0,
          first_name: "",
          last_name: "",
          age: 0,
          address: "",
          gender: "",
        });
        setShow(false);
      }
    } else {
      const response = await postAction(data);

      if (response.status === 200) {
        showToast(response.data.message, "success");
        refetchInformations();
        setUpdate({
          id: 0,
          first_name: "",
          last_name: "",
          age: 0,
          address: "",
          gender: "",
        });
        setShow(false);
      }
    }
  };

  return (
    <>
      <div className="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
            <div className="p-1 sm:p-7 flex flex-col bg-white dark:bg-slate-900">
              <div className="mt-1">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        {...register("first_name")}
                        id="hs-hero-signup-form-floating-input-first-name"
                        className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                        placeholder="John"
                      />
                      <label
                        htmlFor="hs-hero-signup-form-floating-input-first-name"
                        className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                      >
                        First name
                      </label>
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        {...register("last_name")}
                        id="hs-hero-signup-form-floating-input-last-name"
                        className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                        placeholder="Doe"
                      />
                      <label
                        htmlFor="hs-hero-signup-form-floating-input-last-name"
                        className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                      >
                        Last name
                      </label>
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <input
                        type="number"
                        {...register("age")}
                        id="hs-hero-signup-form-floating-input-email"
                        className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                        placeholder="25"
                      />
                      <label
                        htmlFor="hs-hero-signup-form-floating-input-email"
                        className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                      >
                        Age
                      </label>
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        {...register("gender")}
                        id="hs-hero-signup-form-floating-input-company-name"
                        className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                        placeholder="Preline"
                      />
                      <label
                        htmlFor="hs-hero-signup-form-floating-input-company-name"
                        className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                      >
                        Gender
                      </label>
                    </div>
                  </div>

                  <div className="relative col-span-full">
                    <div className="relative">
                      <input
                        type="text"
                        {...register("address")}
                        id="hs-hero-signup-form-floating-input-new-password"
                        className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                      focus:pt-6
                      focus:pb-2
                      [&:not(:placeholder-shown)]:pt-6
                      [&:not(:placeholder-shown)]:pb-2
                      autofill:pt-6
                      autofill:pb-2"
                        placeholder="********"
                      />
                      <label
                        htmlFor="hs-hero-signup-form-floating-input-new-password"
                        className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:text-xs
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:text-xs
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"
                      >
                        Address
                      </label>
                    </div>

                    <div
                      id="hs-strong-password-popover"
                      className="hidden absolute z-10 w-full bg-blue-50 rounded-lg p-4 dark:bg-blue-950"
                    >
                      <div
                        id="hs-strong-password-in-popover"
                        data-hs-strong-password='{
                          "target": "#hs-hero-signup-form-floating-input-new-password",
                          "hints": "#hs-strong-password-popover",
                          "stripclassNamees": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-blue-500 opacity-50 mx-1",
                          "mode": "popover"
                        }'
                        className="flex mt-2 -mx-1"
                      ></div>

                      <h4 className="mt-3 text-sm font-semibold text-gray-800 dark:text-white">
                        Your password must contain:
                      </h4>

                      <ul className="space-y-1 text-sm text-gray-500">
                        <li
                          data-hs-strong-password-hints-rule-text="min-length"
                          className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                        >
                          <span className="hidden" data-check>
                            <svg
                              className="flex-shrink-0 w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span data-uncheck>
                            <svg
                              className="flex-shrink-0 w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M18 6 6 18" />
                              <path d="m6 6 12 12" />
                            </svg>
                          </span>
                          Minimum number of characters is 6.
                        </li>
                        <li
                          data-hs-strong-password-hints-rule-text="lowercase"
                          className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                        >
                          <span className="hidden" data-check>
                            <svg
                              className="flex-shrink-0 w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span data-uncheck>
                            <svg
                              className="flex-shrink-0 w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M18 6 6 18" />
                              <path d="m6 6 12 12" />
                            </svg>
                          </span>
                          Should contain lowercase.
                        </li>
                        <li
                          data-hs-strong-password-hints-rule-text="uppercase"
                          className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                        >
                          <span className="hidden" data-check>
                            <svg
                              className="flex-shrink-0 w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span data-uncheck>
                            <svg
                              className="flex-shrink-0 w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M18 6 6 18" />
                              <path d="m6 6 12 12" />
                            </svg>
                          </span>
                          Should contain uppercase.
                        </li>
                        <li
                          data-hs-strong-password-hints-rule-text="numbers"
                          className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                        >
                          <span className="hidden" data-check>
                            <svg
                              className="flex-shrink-0 w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span data-uncheck>
                            <svg
                              className="flex-shrink-0 w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M18 6 6 18" />
                              <path d="m6 6 12 12" />
                            </svg>
                          </span>
                          Should contain numbers.
                        </li>
                        <li
                          data-hs-strong-password-hints-rule-text="special-characters"
                          className="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                        >
                          <span className="hidden" data-check>
                            <svg
                              className="flex-shrink-0 w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span data-uncheck>
                            <svg
                              className="flex-shrink-0 w-4 h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M18 6 6 18" />
                              <path d="m6 6 12 12" />
                            </svg>
                          </span>
                          Should contain special characters.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-5 items-right">
                  <button
                    type="submit"
                    className="py-3 px-4 mr-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={() => {
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
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default InformationForm;
