# TECHNICAL TEST NODE AND REACT

This project consists of a frontend and backend. Follow the instructions below to set up and run both parts of the application.

## SETUP

## Backend

1. Navigate to the `backend` directory:
    ```
    cd backend
    ```

2. Install the dependencies:
    ```
    npm install
    ```

3. Create a `.env` file in the backend directory with the following variable:
    ```
    MONGO_URI=mongodb+srv://[USER]:[PASSWORD]@[SERVICE_NAME].mongodb.net/[DB_NAME]
    ```

4. Run the data loading script:
    ```
    node src/scripts/loadData.js
    ```

If it was done correctly, the following information should appear in the console:<br>
<br>
    ![image](https://github.com/user-attachments/assets/6df7e82c-044f-4b9e-afae-f1904790b5e0)


5. Start the backend server:
    ```
    npm start
    ```

You should see the following message in the console:<br>
<br>
    ![image](https://github.com/user-attachments/assets/b20d4c2d-7233-4aa6-81b1-09bc9a7f4005)

### Frontend

1. Open a new terminal and navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm run dev
    ```

4. Open the indicated route in your browser to see the application:

    ![image](https://github.com/user-attachments/assets/b8aedd1a-d934-44da-9937-ab6d59cae80b)

