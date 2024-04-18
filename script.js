// Initialize Google Sheets API client
gapi.load('client', initClient);

async function initClient() {
  try {
    await gapi.client.init({
      apiKey: 'AIzaSyC050Oxqz9yPTaN03DJsZCx5risTvXtzAY', // Your API key
      discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    });
    console.log('Google Sheets API client initialized successfully.');
    accessSpreadsheet(); // Call your function to access the spreadsheet here
  } catch (error) {
    console.error('Error initializing Google Sheets API client:', error);
  }
}

async function accessSpreadsheet() {
  try {
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

        // Call the Google Sheets API to append data
        const response = await gapi.client.sheets.spreadsheets.values.append({
          spreadsheetId: '1dF7eoub9ZFy43JFeMlV8j2lAvaw-VdI5sUUmbNOL880', // Your Google Sheet ID
          range: 'Sheet1', // Change to your sheet name and range
          valueInputOption: 'USER_ENTERED',
          resource: {
            values: [
              [entries.partName, entries.quantity, dateTime],
            ],
          },
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
