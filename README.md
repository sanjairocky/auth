# Simple SSO Authentication

[![build](https://github.com/sanjairocky/auth/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/sanjairocky/auth/actions/workflows/pages/pages-build-deployment)
[![License](https://img.shields.io/github/license/sanjairocky/auth)](LICENSE)

This repository provides a authentication solution that can be easily integrated into your pet projects. It enables user authentication and authorization, allowing you to secure your applications and services quickly and efficiently.

Single Sign-On is a user authentication and access control mechanism that simplifies the login process for users. With SSO, users can log in once and access multiple services or applications without the need for separate credentials for each one. This not only enhances user experience but also improves security and centralizes user management.

## Features

- **Enhanced User Experience**: Users can access multiple services with a single login, reducing the need to remember multiple usernames and passwords.

- **Improved Security**: Centralized authentication and access control help maintain consistent security policies and reduce the risk of unauthorized access.

- **Streamlined User Management**: Simplify user provisioning, de-provisioning, and access control, making it easier to manage user accounts.

- **Easy Integration**: Integrate authentication into your pet projects with minimal effort.

- **Secure**: Utilizes industry-standard authentication protocols and best practices to ensure the security of your applications.

- **Customizable**: Customize the authentication flow, user interfaces, and user management to suit your project's specific requirements.

- **Scalable**: Designed to scale as your pet projects grow, accommodating increasing user loads and application complexity.

## Usage

Follow these steps to integrate the Simple SSO Authentication into your application:

1. Clone this repository to your project directory:

   ```bash
   git clone https://github.com/sanjairocky/auth.git
   ```

2. Install the required dependencies:

   ```bash
   yarn
   ```

3. Start the authentication service:

   ```bash
   yarn dev
   ```

4. Integrate the authentication service into your application by following the provided documentation and code examples.

5. Customize the user interface and user management to align with your project's branding and functionality.

6. Enjoy a secure and user-friendly authentication experience for your pet projects!

## API Documentation

This API provides an Client sso authentication endpoint that allows users to initiate the authentication process and receive an ID token in response. After successful login, the client will be redirected to the provided `redirect_uri` with the `id_token` as a query parameter.

### Endpoint

- **URL**: `https://sanjairocky.github.io/auth`

### HTTP Method

- **Method**: `GET`

### Request Parameters

All parameters listed below are required for a successful authentication request:

1. **client_id** (String):

   - **Description**: Your client ID.
   - **Example**: `myClientId`

2. **redirect_uri** (String):

   - **Description**: The URI to which the response should be redirected after authentication.
   - **Example**: `http://localhost:3030/client/app`

3. **response_type** (String):

   - **Description**: The type of response expected. For authentication, it should be set to `id_token`.
   - **Example**: `id_token`

4. **scope** (String):

   - **Description**: The scope of the authentication request, specifying the level of access being requested.
   - **Example**: `read`

5. **state** (String):
   - **Description**: An arbitrary string that can be used to maintain state during the authentication flow.
   - **Example**: `myState`

### Redirect Flow

After initiating the authentication request, the client will be redirected to the login page. Once the user successfully logs in, they will be redirected back to the provided `redirect_uri` with the `id_token` as a query parameter.

### Response

Upon a successful authentication and login, the client will be redirected to the specified `redirect_uri` with the `id_token` as a query parameter.

### Example CLient redirection url

```bash
http://localhost:3030/client/app?id_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

## Usage

To initiate the authentication process, make a `GET` request to the `/auth` endpoint with the required query parameters. Ensure that all parameters are correctly formatted and provided in the request.

### Example Redirect URL

```bash
https://sanjairocky.github.io/auth?client_id=myClientId&redirect_uri=http://localhost:3030/client/app&response_type=id_token&scope=read&state=myState
```

### Redirect Flow

1. The client initiates the authentication request by making a `GET` request to `/auth` with the required parameters.

2. The user is redirected to the login page, where they provide their credentials.

3. After successful login, the user is redirected back to the specified `redirect_uri` with the `id_token` as a query parameter.

4. The client can then extract the `id_token` from the query parameter and use it for authentication and authorization purposes.

## Error Handling

If any of the required parameters are missing or invalid, the API will respond with a `400 Bad Request` status code and an error message specifying the issue. Ensure that all required parameters are included and correctly formatted in your request.

## Demo

You can experience the Common Authentication for Pet Projects in action by visiting the [Demo](https://sanjairocky.github.io/auth/) page.

## Contributing

We welcome contributions to enhance and improve this authentication solution. To contribute:

1. Fork the repository to your own GitHub account.

2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Description of your changes"
   ```

4. Push your changes to your GitHub repository:

   ```bash
   git push origin feature-name
   ```

5. Create a pull request from your branch to the main repository.

6. Our team will review your changes, and upon approval, your pull request will be merged.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or need further assistance, please feel free to contact the project maintainer:

- Sanjai Rocky

Thank you for choosing Common Authentication for Pet Projects to secure your applications!
