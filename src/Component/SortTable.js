import { useState, useMemo } from "react";

const SortTable = (items) => {
  const [sortConfig, setSortConfig] = useState(null);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      const compareFunction = (a, b) => {
        if (sortConfig.key === "priority") {
          const orders = { Low: 0, Medium: 1, High: 2 };
          return (
            (orders[a[sortConfig.key]] - orders[b[sortConfig.key]]) *
            sortConfig.direction
          );
        }
        return (
          a[sortConfig.key].localeCompare(b[sortConfig.key]) *
          sortConfig.direction
        );
      };
      sortableItems.sort(compareFunction);
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 1;
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 1) {
      direction = -1;
    }
    setSortConfig({ key, direction });
  };
  return { items: sortedItems, requestSort };
};

export default SortTable;
