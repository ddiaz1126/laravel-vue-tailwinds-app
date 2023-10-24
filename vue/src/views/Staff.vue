<template>
    <div class="min-h-screen flex justify-center pt-8 bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-lg w-4/5">
        <div class="flex items-center mb-8">
          <div class="flex flex-wrap space-x-6 justify-end w-full">
            <select>
              <option>Active</option>
              <option>Any</option>
              <option>Inactive</option>
            </select>
            <select>
              <option>Unaccessible</option>
              <option>Any</option>
              <option>Accessible</option>
            </select>
          </div>
          <input type="text" placeholder="Search..." class="search-box rounded p-2" />
          <div class="absolute right-2 top-1/2 transform -translate-y-1/2">
            <i class="fa fa-search text-gray-400"></i>
        </div>
        </div>
        
        <!-- List with columns -->
        <table class="list">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone/s</th>
              <th>Started</th>
              <th>Last Login</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <!-- List items go here -->
            <tr>
              <td>John Doe</td>
              <td>(555) 555-5555</td>
              <td>2022-01-01</td>
              <td>2022-10-10</td>
              <td>Active</td>
            </tr>
            <!-- Add more rows as needed -->
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <style scoped>
    .sheet-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60vh; /* Adjust the height as needed */
      background-color: #f0f0f0; /* Gray background color */
    }
  
    .container {
      width: 80%; /* Adjust the width as needed */
      padding: 10px;
      border-radius: 50px;
    }  
    .list {
    width: 80%; /* Make sure the table takes full width */
    border-collapse: separate;
    border-spacing: 60px; /* Adjust the spacing as needed */
  }

  .column-cell {
    padding: 10px; /* Add padding to each cell */
    text-align: center;
  }
  </style>
  