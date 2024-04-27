// src/components/WebsiteDescription.tsx
// src/app/ui/WebsiteDescription.tsx
import { useSession } from "next-auth/react";

export default function WebsiteDescription() {
    const { data: session } = useSession();

  const userInfo = session?.user ?? { name: "Guest" };

  return (
    <>
          <div className="bg-gray-100 py-12">

      <h1 className="text-3xl font-bold text-gray-900">
        Welcome{" "}
        <span className="italic text-blue-600">
          {userInfo.name !== "Guest" ? userInfo.name : "Guest"}
        </span>
        ,
      </h1>
     
        <p className="mt-4 text-lg text-gray-600">
          Snatch is a platform where you can order a wide range of products
          conveniently from the comfort of your home. We provide a seamless
          shopping experience and ensure timely delivery of your orders.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Easy Ordering
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Order your favorite products with just a few clicks. Our
                intuitive interface makes shopping a breeze.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Fast Delivery
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                We prioritize quick and efficient delivery so that you receive
                your orders in a timely manner.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Quality Products
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Explore a curated selection of high-quality products from
                trusted brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>   );
};

