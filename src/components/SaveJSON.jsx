import { saveAs } from 'file-saver';

const SaveJSON = ({ data, fName }) => {
  const fileName = fName.split(' ').join('_');

  const handleSave = data => {
    const blob = new Blob([JSON.stringify(data)], {
      type: 'text/plain;charset=utf-8',
    });
    saveAs(blob, `${fileName}.json`);
  };

  return <button onClick={() => handleSave(data)}>Save as JSON</button>;
};

export default SaveJSON;
