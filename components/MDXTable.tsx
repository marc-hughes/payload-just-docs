import React from "react";

export const Table: React.FC<React.HTMLProps<HTMLTableElement>> = (props) => (
  <div className="overflow-x-auto my-8">
    <table {...props} className="min-w-full divide-y divide-gray-200" />
  </div>
);

export const Th: React.FC<React.HTMLProps<HTMLTableCellElement>> = (props) => (
  <th
    {...props}
    className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
  />
);

export const Td: React.FC<React.HTMLProps<HTMLTableCellElement>> = (props) => (
  <td
    {...props}
    className="px-6 py-4 whitespace-normal text-sm text-gray-500"
  />
);

export const Tr: React.FC<React.HTMLProps<HTMLTableRowElement>> = (props) => (
  <tr {...props} className="even:bg-gray-50" />
);

export const THead: React.FC<React.HTMLProps<HTMLTableSectionElement>> = (
  props
) => <thead {...props} className="bg-gray-50" />;

export const TBody: React.FC<React.HTMLProps<HTMLTableSectionElement>> = (
  props
) => <tbody {...props} className="bg-white divide-y divide-gray-200" />;

const MDXTable = {
  table: Table,
  th: Th,
  td: Td,
  tr: Tr,
  thead: THead,
  tbody: TBody,
};

export default MDXTable;
