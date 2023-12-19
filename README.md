# Gurucool Assignment - URL Shortener

This URL shortener service allows users to register, login, shorten URLs, and redirect to the original URLs. Below are the details for using the API:

## 1. Register User

- **Endpoint:** `POST` https://gurucool-assignment.onrender.com/user/register

### Request Body:

```json
{
  "username": "your_username",
  "password": "your_password"
}
```

## 2. Login User

- **Endpoint:** `POST` https://gurucool-assignment.onrender.com/user/login

### Request Body:

```json
{
  "username": "your_username",
  "password": "your_password"
}
```

### Response:

```json
{
  "msg": "Login Successfully",
  "token": "your_token"
}
```
Add the token to the header for authentication using the format: Authorization: Bearer your_token.

## 3. Shortening URL:

- **Endpoint:** `POST` https://gurucool-assignment.onrender.com/url/shortURL

### Request Body:

```json
{
  "originalUrl": "your_longURL"
}
```
### Response:

You will receive the shortened URL along with the original URL in the response.

## 4. Redirect to original URL:

- **Endpoint:** `GET` https://gurucool-assignment.onrender.com/url/redirect/6hfe7j

Replace {6hfe7j} with the unique ID (length 6) present in shortUrl, representing the shortened URL.

You will be redirected to the original URL.
