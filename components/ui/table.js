export const Table = ({ children, className }) => {
  return (
    <table className={`min-w-full divide-y divide-gray-200 ${className}`}>
      {children}
    </table>
  );
};

export const TableHead = ({ children, className }) => {
  return (
    <th className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`}>
      {children}
    </th>
  );
};

export const TableBody = ({ children, className }) => {
  return (
    <tbody className={`bg-white divide-y divide-gray-200 ${className}`}>
      {children}
    </tbody>
  );
};

export const TableRow = ({ children, className }) => {
  return (
    <tr className={className}>
      {children}
    </tr>
  );
};

export const TableCell = ({ children, className }) => {
  return (
    <td className={`px-6 py-4 whitespace-nowrap ${className}`}>
      {children}
    </td>
  );
};

export const TableHeader = ({ children }) => {
  return <table className="table-class">{children}</table>;
};


// export const Table = ({ children }) => {
//   return <table className="table-class">{children}</table>;
// };
