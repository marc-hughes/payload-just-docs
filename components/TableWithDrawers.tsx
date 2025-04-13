import React, { useState } from "react";

interface DrawerContent {
  value: string;
  drawerTitle?: string;
  drawerDescription?: string;
  drawerSlug?: string;
  drawerContent?: string;
}

interface TableWithDrawersProps {
  columns: string[];
  rows: DrawerContent[][];
}

const TableWithDrawers: React.FC<TableWithDrawersProps> = ({
  columns,
  rows,
}) => {
  const [openDrawer, setOpenDrawer] = useState<string | null>(null);

  return (
    <div className="my-8">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              {columns.map((column, i) => (
                <th
                  key={i}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
            {rows.map((row, rowIndex) => {
              const hasDrawer = row.some(
                (cell) => cell.drawerContent && cell.drawerSlug
              );
              const drawerCell = row.find(
                (cell) => cell.drawerContent && cell.drawerSlug
              );
              const isOpen = openDrawer === drawerCell?.drawerSlug;

              return (
                <React.Fragment key={rowIndex}>
                  <tr
                    className={`${
                      hasDrawer
                        ? "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                        : ""
                    }`}
                    onClick={() => {
                      if (hasDrawer && drawerCell?.drawerSlug) {
                        setOpenDrawer(isOpen ? null : drawerCell.drawerSlug);
                      }
                    }}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className="px-6 py-4 whitespace-pre-wrap text-sm text-gray-900 dark:text-gray-100"
                        dangerouslySetInnerHTML={{ __html: cell.value }}
                      />
                    ))}
                  </tr>
                  {hasDrawer && drawerCell && isOpen && (
                    <tr>
                      <td colSpan={columns.length} className="px-6 py-4">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                          {drawerCell.drawerTitle && (
                            <h3 className="text-lg font-semibold mb-2">
                              {drawerCell.drawerTitle}
                            </h3>
                          )}
                          {drawerCell.drawerDescription && (
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                              {drawerCell.drawerDescription}
                            </p>
                          )}
                          <div
                            className="prose dark:prose-invert max-w-none"
                            dangerouslySetInnerHTML={{
                              __html: drawerCell.drawerContent || "",
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableWithDrawers;
