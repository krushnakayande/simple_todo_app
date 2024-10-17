# simple_todo_app

Here's a detailed step-by-step `README.md` file that outlines how to set up and run the Node.js ToDo app on an AWS EC2 instance, based on your provided history:

```markdown
# Simple ToDo App Setup and Deployment Guide on AWS EC2

This guide will walk you through setting up and deploying the Simple ToDo App on an AWS EC2 instance. The app is hosted on GitHub at [simple_todo_app](https://github.com/krushnakayande/simple_todo_app).

## Prerequisites

- AWS Account
- Basic knowledge of AWS EC2, Node.js, and Git
- SSH Key pair for accessing the EC2 instance

## Step 1: Launch an EC2 Instance

1. Sign in to your [AWS Management Console](https://aws.amazon.com/console/).
2. Navigate to **EC2 Dashboard**.
3. Click on **Launch Instance** and choose **Ubuntu Server 22.04 LTS** (or another version you prefer).
4. Choose **t2.micro** instance type (this is free tier eligible).
5. Configure the security group:
    - Allow **SSH (port 22)** for connecting to your instance.
    - Allow **Custom TCP Rule (port 3000)** for the Node.js app.
6. Click **Launch** and download your key pair (e.g., `my-key.pem`).

## Step 2: Connect to Your EC2 Instance

1. Open your terminal and connect to your instance using the SSH key and the public IP of your instance:
   
   ```bash
   ssh -i "my-key.pem" ubuntu@<your-ec2-public-ip>
   ```

2. Once connected, update the instance packages:

   ```bash
   sudo apt update
   ```

## Step 3: Install Node.js and npm

1. Install Node.js and npm on the EC2 instance:

   ```bash
   sudo apt install nodejs npm -y
   ```

2. Verify the installation:

   ```bash
   node -v
   npm -v
   ```

## Step 4: Clone the Repository

1. Clone the Simple ToDo App from GitHub:

   ```bash
   git clone https://github.com/krushnakayande/simple_todo_app.git
   ```

2. Navigate into the project directory:

   ```bash
   cd simple_todo_app/
   ```

## Step 5: Install Required Dependencies

1. Inside the project directory, initialize npm (if needed):

   ```bash
   npm init -y
   ```

2. Install `express` and any other dependencies by running:

   ```bash
   npm install express
   ```

## Step 6: Modify the Project (Optional)

1. Ensure that your `server.js` file serves your app correctly. Here’s the typical structure for `server.js`:

   ```javascript
   const express = require('express');
   const path = require('path');

   const app = express();
   const port = 3000;

   // Serve static files from the "public" directory
   app.use(express.static(path.join(__dirname, 'public')));

   // Start the server and listen on all network interfaces
   app.listen(port, '0.0.0.0', () => {
       console.log(`Server is running at http://0.0.0.0:${port}`);
   });
   ```

2. If your HTML file in the `public` folder is not named `index.html`, rename it for Express to serve it automatically:

   ```bash
   mv public/simple_Todo_App.html public/index.html
   ```

## Step 7: Start the Node.js Server

1. Run your Node.js app:

   ```bash
   node server.js
   ```

2. You should see output like:

   ```
   Server is running at http://0.0.0.0:3000
   ```

## Step 8: Access the Application

1. Open your browser and navigate to:

   ```
   http://<your-ec2-public-ip>:3000
   ```

2. You should see the ToDo app running.

## Step 9: Keep the Application Running (Optional)

To keep the application running even after closing the terminal, you can use `pm2` or `nohup`.

### Using `pm2`:

1. Install `pm2`:

   ```bash
   sudo npm install pm2 -g
   ```

2. Start the app with `pm2`:

   ```bash
   pm2 start server.js
   ```

### Using `nohup`:

1. Run the app in the background:

   ```bash
   nohup node server.js &
   ```

## Conclusion

You have successfully set up and deployed the Simple ToDo App on an AWS EC2 instance using Node.js and Express. If you encounter any issues, feel free to revisit the steps or check logs for error messages.

```

### Notes:
- This guide assumes that the app is configured to use port 3000. If you're using a different port, make sure to modify the security group settings and the `server.js` file accordingly.
- You can add more detail to each step based on your environment or project needs.
Here's a shortened version of the steps to run your Node.js app on an EC2 instance:

---
```
## Simple ToDo App on AWS EC2 - Quick Setup Guide

## 1. Launch EC2 Instance
- Use **Ubuntu** as the OS.
- Open ports: **22 (SSH)**, **3000 (App)**.
- Download your SSH key pair.

## 2. Connect to EC2
- SSH into your instance:

   ```bash
   ssh -i "my-key.pem" ubuntu@<your-ec2-public-ip>
   ```

## 3. Install Node.js and npm

   ```bash
   sudo apt update
   sudo apt install nodejs npm -y
   ```

## 4. Clone the Repository
- Clone your app:

   ```bash
   git clone https://github.com/krushnakayande/simple_todo_app.git
   cd simple_todo_app/
   ```

## 5. Install Dependencies
- Initialize npm and install `express`:

   ```bash
   npm init -y
   npm install express
   ```
## 6. Start the Server
- Run the app:

   ```bash
   node server.js
   ```

## 7. Access the App
- Visit the app in your browser:

   ```
   http://<your-ec2-public-ip>:3000
   ```

---

This provides a quick rundown of the steps needed to get your ToDo app up and running on EC2.
