# NewsMania

Welcome to **NewsMania**, a web application designed to keep you updated with the top business news headlines fetched from sources like Times of India and others using the https://newsapi.org. This project utilizes a combination of backend middleware and direct API calls. The middleware, built with Express.js, handles some API requests, while others are fetched directly from the frontend via the github API to fetch the admin information directly from Github account. The application also integrates Google authentication for seamless login and logout, and leverages Web3 forms to trigger emails to the admin.

## Features

- **Business News Headlines**: Fetches top business Headlines from sources like Times of India and others via NEWSAPI.
- **Google Authentication**: Integrates Google login/logout for user authentication.
- **Github API**: Fetches user data from Github.
- **Web Forms Integration**: Sends emails to the admin using Web forms.

## Middleware Explanation

NEWSAPI allows fetching data from their API on localhost only. However, CORS (Cross-Origin Resource Sharing) are blocked for any other production deployment. To bypass these CORS restrictions, a middleware is created using Express.js. This middleware resolves the CORS issues by fetching the data at the backend and displaying it on the frontend.

## Live Demo

You can see the live demo of the project [here](https://hunar-taupe.vercel.app).

## Technologies Used

- **Frontend**:
  - React + Vite
  - Tailwind CSS
  - React Router DOM
  - GSAP(GreenSock Animation Platform)

- **Backend**:
  - Express.js (as middleware/proxy server)
  - Firebase (for authentication)
  - Railway.app (for hosting backend)

- **APIs**:
  - NEWSAPI (for fetching news)
  - Github API (for fetching user data)
  - Google Authentication (for user login/logout)
  - Web3Forms (for handling web forms and email triggers)

- **Deployment**:
  - Vercel (for deploying frontend)
  - Railway.app (for deploying backend)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js installed on your machine
- A NEWSAPI key
- A Github API key
- TailwindCSS & React + Vite Builder Pack Installed
- Firebase project set up for Google authentication
- Web3Forms account for handling form submissions

### Installation

1. **Clone the repository**:

    ```sh
    git clone https://github.com/happyrao78/Hunar.git
    ```

2. **Navigate to the project directory**:

    ```sh
    cd newsfetch
    ```

3. **Install dependencies for the frontend and backend**:

    ```sh
    cd newsfetch (Frontend)
    npm install
    cd server (Backend)
    npm install
    ```

4. **Set up environment variables**:

    Create a `.env` file in the server directory and add your NEWSAPI key, and PORT for local host.

    ```env
    NEWS_API_KEY=your_newsapi_key
    PORT=your desired PORT
    ```

5. **Set up Firebase**:

    - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
    - Enable Google authentication in the Firebase Authentication section.
    - Obtain the Firebase configuration settings (API key, Auth domain, Project ID, etc.) and add them to /newsfetch/src/components/Header/FireBaseConfig.js file.

6. **Run the backend server**:

    ```sh
    cd server
    node server.js
    ```

7. **Run the frontend server**:

    Open a new terminal window and run:

    ```sh
    cd newsfetch
    npm run dev
    ```

### Deployment

1. **Set up Railway.app**:

    - Create a project in [Railway.app](https://railway.app/).
    - Add your environment variables in the Railway platform. Railway.app uses dynamic allocation for environment variables, so the `.env` file is essential. Ensure all variables from the `.env` file are added to the Railway environment configuration.

2. **Deploy Backend**:

    - Deploy the backend server on Railway.app by following their documentation and connecting your repository.

3. **Deploy Frontend**:

    - Deploy the frontend on Vercel by connecting your repository and following their deployment steps.

## Usage

1. Open the application in your browser at `http://localhost:3000`.
2. Log in using your Google account.
3. Browse through the top business news headlines.
4. Fetch your Github user data.
5. Use the contact form to send an email to the admin.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## MIT License

Distributed under the MIT License.


Copyright (c) [2024] [NewsMania]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this project and associated documentation files, to deal
in the project without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the project, and to permit persons to whom the project is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the project.

THE PROJECT IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE PROJECT OR THE USE OR OTHER DEALINGS IN THE
PROJECT.


## Contact

Your Name - [happyrao7091@gmail.com](mailto:happyrao7091@gmail.com)

Owner's Website: [https://www.happyrao.tech](https://www.happyrao.tech)

Project Link: [https://github.com/happyrao78/Hunar](https://github.com/happyrao78/Hunar)

---

Thank you for checking out NewsMania! Enjoy staying updated with the latest business news.