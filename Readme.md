# API Documentation and Usage Guide

This guide will walk you through how to interact with our API, which is running as a Docker container on our EC2 instance at `43.205.199.90:7000`.

git clone https://github.com/prashant169/interns-certificates-api.git

Navigate to the project folder:

cd interns-certificates-API

Install Docker on your EC2 instance by following the CentOS Docker installation documentation. Use the appropriate commands based on your EC2 instance setup.
Move to the "api" folder inside the cloned repository:
 
cd api
Build the Docker image using the provided Dockerfile:
 
docker build -t interns-certificates-api .

Run the Docker container, exposing port 7000 on the container and mapping it to port 7000 on the host machine:
 
docker run -dp 7000:7000 interns-certificates-api


On the EC2 dashboard, go to "Security Groups" and edit the inbound rules for your EC2 instance to allow traffic on port 7000.

Test the API endpoints by sending requests to the EC2 instance's public IP address or domain name on port 7000.
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

![image](https://github.com/prashant169/interns-certificates-api/assets/78464585/8fd3f1ca-b151-44e7-8781-586c3f52cb49)
![image](https://github.com/prashant169/interns-certificates-api/assets/78464585/ea952343-6f97-4a1c-8987-b9ca40b5c09c)
![image](https://github.com/prashant169/interns-certificates-api/assets/78464585/b20e22d0-a000-44cd-b7c7-51937fc3f672)
![image](https://github.com/prashant169/interns-certificates-api/assets/78464585/6bf436a8-8978-49a8-bf2c-9672e3d9ea69)
![image](https://github.com/prashant169/interns-certificates-api/assets/78464585/42653b84-06f9-4993-ae4e-e1d761d311bc)
![image](https://github.com/prashant169/interns-certificates-api/assets/78464585/ea5034bc-fcb6-4e69-9769-2f9ff0a5347c)
![image](https://github.com/prashant169/interns-certificates-api/assets/78464585/0d528bc6-e800-4717-9f70-415ba6a52524)
![image](https://github.com/prashant169/interns-certificates-api/assets/78464585/3bcc1248-bd3f-4984-8fa0-e20d153cd571)
![image](https://github.com/prashant169/interns-certificates-api/assets/78464585/7deafbd6-0707-4ecc-a228-05fc41eec3d7)
![image](https://github.com/prashant169/interns-certificates-api/assets/78464585/6e4dd5ac-a93e-42f6-b1be-73729f00c452)





