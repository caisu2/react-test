import { useQuery } from "react-query";

interface DataProps {
  id: number;
  title: string;
  price: number;
  description: string;
  created_at: Date;
  updated_at: Date;
}

const fetchUserData = async () => {
  const url = process.env.REACT_APP_API_URL;
  const response = await fetch(`${url}/products`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const Products = () => {
  const { data, error, isLoading } = useQuery([], () => fetchUserData());

  console.log(data, isLoading, error);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {!isLoading && data.length > 0 ? (
        <>
          <div className="bg-white py-10 sm:py-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {data.map((item: DataProps) => (
                  <article
                    key={item.id}
                    className="flex max-w-xl flex-col items-start justify-between"
                  >
                    <div className="group relative text-left">
                      <div className="flex space-x-4">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <a href="#">
                            <span className="absolute inset-0" />
                            {item.title}
                          </a>
                        </h3>
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <a href="#">
                            <span className="absolute inset-0" />${item.price}
                          </a>
                        </h3>
                      </div>

                      <p className="mt-5 line-clamp-2 text-sm leading-6 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-10">
          <h3>No Product Found.</h3>
        </div>
      )}
    </>
  );
};

export default Products;
