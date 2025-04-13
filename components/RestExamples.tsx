import React from "react";

interface RestExample {
  operation: string;
  method: string;
  path: string;
  description: string;
  example?: {
    slug: string;
    req?: any;
    res?: any;
    drawerContent?: string;
  };
}

interface RestExamplesProps {
  data: RestExample[];
}

const RestExamples: React.FC<RestExamplesProps> = ({ data }) => {
  return (
    <div className="space-y-4 my-8">
      {data.map((example, index) => (
        <div
          key={index}
          className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-900"
        >
          <div className="font-mono">
            <span className="text-blue-600 dark:text-blue-400">
              {example.method}
            </span>{" "}
            <span className="text-gray-800 dark:text-gray-200">
              {example.path}
            </span>
          </div>
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {example.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestExamples;
