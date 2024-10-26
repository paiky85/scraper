import { saveAs } from 'file-saver';
const SaveCSV = ({ data, fName }) => {
  const fileName = fName.split(' ').join('_');

  // Define column headers for CSV
  const fileHeaders = ['title', 'link', 'snippet', 'displayedLink'];

  // Convert JSON to CSV string
  function convertJSONToCSV(jsonData, columnHeaders) {
    // Check if JSON data is empty
    if (jsonData.length === 0) {
      return '';
    }

    // Create headers string
    const headers = columnHeaders.join(',') + '\n';

    // Map JSON data to CSV rows
    const rows = jsonData
      .map(row => {
        // Map each row to CSV format
        return columnHeaders.map(field => row[field] || '').join(',');
      })
      .join('\n');

    // Combine headers and rows
    return headers + rows;
  }

  const handleSave = (jsonData, headers) => {
    const csvData = convertJSONToCSV(jsonData, headers);

    const blob = new Blob([csvData], {
      type: 'text/csv;charset=utf-8;',
    });
    saveAs(blob, `${fileName}.csv`);
  };

  // Render the button for CSV export
  return (
    <button
      onClick={() => {
        handleSave(data, fileHeaders);
      }}
    >
      Save as CSV
    </button>
  );
};
export default SaveCSV;
