import { ReactElement } from "react";

interface PostProps {
  id: string | number | boolean;
  title: string | number | boolean;
  content: any;
  authorName: string | number | boolean;
}

export default function Post({
  id,
  title,
  content,
  authorName,
}: PostProps): ReactElement {
  return (
    <div className="flex flex-wrap w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="bg-white border border-gray-300 rounded-md shadow-md p-4 m-4 w-full">
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-blue-500">
            {authorName}
          </h3>
          <p className="text-sm text-gray-900">{title}</p>
        </div>
        <p className="text-sm text-gray-800 mb-4 whitespace-normal">
          {content}
        </p>
        <p className="text-sm text-gray-500 mb-0">Order ID: {id}</p>
      </div>
    </div>
  );
}
