# NeuralLink Streaming Platform API Documentation

This document provides a detailed description of the API endpoints for the NeuralLink Streaming Platform.

## Base URL

All URLs referenced in the documentation have the following base:

```
http://localhost:3000/api
```

The base URL represents the domain of the API server. Replace `localhost` and `3000` with your server's domain and port.

## Endpoints

### User

#### Register a new user

- **URL:** `/api/user/register`
- **Method:** `POST`
- **Data Params:** JSON object with user details.
- **Success Response:** 
  - **Code:** `201`
  - **Content:** `{ status: 'success', data: user }`
- **Error Response:** 
  - **Code:** `500`
  - **Content:** `{ status: 'error', message: 'Error message' }`

#### Login a user

- **URL:** `/api/user/login`
- **Method:** `POST`
- **Data Params:** JSON object with user credentials.
- **Success Response:** 
  - **Code:** `200`
  - **Content:** `{ status: 'success', data: user }`
- **Error Response:** 
  - **Code:** `401` or `500`
  - **Content:** `{ status: 'error', message: 'Error message' }`

### Stream

#### Start streaming

- **URL:** `/api/stream/start`
- **Method:** `POST`
- **Data Params:** JSON object with `userId` and `neuralData`.
- **Success Response:** 
  - **Code:** `200`
  - **Content:** `{ status: 'success', message: 'Streaming started successfully', data: result }`
- **Error Response:** 
  - **Code:** `400` or `500`
  - **Content:** `{ status: 'error', message: 'Error message' }`

#### Stop streaming

- **URL:** `/api/stream/stop`
- **Method:** `POST`
- **Data Params:** JSON object with `userId`.
- **Success Response:** 
  - **Code:** `200`
  - **Content:** `{ status: 'success', message: 'Streaming stopped successfully', data: result }`
- **Error Response:** 
  - **Code:** `400` or `500`
  - **Content:** `{ status: 'error', message: 'Error message' }`

## Errors

The API uses conventional HTTP response codes to indicate the success or failure of an API request. Codes in the `2xx` range indicate success. Codes in the `4xx` range indicate an error that failed given the information provided. Codes in the `5xx` range indicate a server error.

## Rate Limiting

The API is designed to allow a certain number of requests per minute. If the limit is exceeded, the API will respond with a HTTP 429 Too Many Requests response status and a body that details the reason for the rate limiter kicking in. Further requests will be denied until the limit resets.

