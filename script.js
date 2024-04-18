// Initialize Google Sheets API client
const doc = new GoogleSpreadsheet('1dF7eoub9ZFy43JFeMlV8j2lAvaw-VdI5sUUmbNOL880'); // Google Sheet ID
const apiKey = 'AIzaSyC050Oxqz9yPTaN03DJsZCx5risTvXtzAY'; // Replace 'YOUR_API_KEY' with your actual API key

async function accessSpreadsheet() {
  try {
    // Load Google Sheets API client library with API key
    await doc.useApiKey(apiKey);

    await doc.loadInfo(); // loads document properties and worksheets

    const sheet = doc.sheetsByIndex[0]; // assuming the first sheet is where you want to write data

    const form = document.getElementById('inventoryForm');
    const outputDiv = document.getElementById('output');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      console.log('Form submitted.'); // Check if form submission event is triggered

      try {
        const formData = new FormData(form);
        const entries = Object.fromEntries(formData.entries());

        const date = new Date().toLocaleDateString();
        const time = new Date().toLocaleTimeString();
        const dateTime = `${date} ${time}`;

        await sheet.addRow({
          ...entries,
          'DateTime': dateTime,
        });

        console.log('Inventory entry added successfully.');
        form.reset();

        // Display success message
        displayMessage('Form submitted successfully.');
      } catch (error) {
        console.error('Error adding row to Google Sheet:', error);

        // Display error message
        displayMessage('Error: Failed to submit form data. See console for details.');
      }
    });

    // Function to display messages in the output area
    function displayMessage(message) {
      outputDiv.textContent = message;
    }

  } catch (error) {
    console.error('Error accessing Google Sheets:', error);
  }
}

async function testAPIConnection() {
  try {
    // Load Google Sheets API client library with API key
    await doc.useApiKey(apiKey);

    console.log('Google Sheets API connected successfully.');
  } catch (error) {
    console.error('Error connecting to Google Sheets API:', error);
  }
}

accessSpreadsheet();
testAPIConnection();
