# API Documentation and Usage Guide

Welcome to the API documentation for our service! This guide will walk you through how to interact with our API, which is running as a Docker container on our EC2 instance at `43.205.199.90:7000`.

## API Endpoint

The API endpoint is accessible at:

http://43.205.199.90:7000/generate-document


## API Documentation

We have set up Swagger documentation for our API, making it easy for you to explore the available endpoints and understand their usage. The Swagger documentation can be accessed at:

http://43.205.199.90:7000/api-docs


## Using Postman

To interact with our API using Postman, follow these steps:

1. Install Postman: If you haven't already, download and install [Postman](https://www.postman.com/downloads/) on your machine.

2. Open Postman: Launch Postman and create a new request.

3. Set Request URL: Set the request URL to `http://<YOUR_EC2_PUBLIC_IP>:7000/generate-document`.

4. Set Request Method: Choose `POST` as the request method.

5. Set Headers: Add the following header to the request:

Content-Type: application/json

6. Set Request Body: In the request body, provide the student details in JSON format. For example:

```json
{
  "name": "John Doe",
  "college": "ABC College",
  "course": "Computer Science"
}
```

Send Request: Click the "Send" button to send the request. The API will generate a Word document and provide it as a response.
Using Appsmith UI
To create a user-friendly UI and interact with our API using Appsmith, follow these steps:

Install Appsmith: If you haven't already, sign up and install Appsmith on your machine.

Open Appsmith: Launch Appsmith and create a new project.

Add HTTP(S) Request Widget: Drag and drop the "HTTP(S) Request" widget from the Widget panel to your page.

Configure HTTP(S) Request: In the "Data" section of the widget properties, set the URL to http://<YOUR_EC2_PUBLIC_IP>:7000/generate-document and the method to POST.

Add Form Widgets: Add form widgets (e.g., text input fields) for students to enter their details.

Map Form Data to Request Body: Map the form data to the request body in the "Body" section of the widget properties.

Add a Button: Add a button to trigger the HTTP(S) Request when clicked.

Handle API Response: In the "Actions" section of the widget properties, handle the API response to display the generated Word document or any other relevant information.

Assignment
As part of your assignment, create a user interface using Appsmith to interact with our API and generate Word documents with student details. Follow the steps mentioned above to integrate the HTTP(S) Request widget and handle API responses. Once your UI is ready, you can use it to generate documents and experiment with different student details.

Happy coding and have fun exploring our API!
