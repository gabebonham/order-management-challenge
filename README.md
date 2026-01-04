## STEPS
- cp .env.example .env
- npm i
- docker compose -f docker-compose.dev.yaml up -d
- npm run dev
- npm run test:run

## ENDPOINTS
### Registration
/register
POST
```
{
    "email":"marcelo@gmail.com",
    "password":"Senhasecreta@123"
}
```
### Login
/login
POST
```
{
    "email":"marcelo@gmail.com",
    "password":"Senhasecreta@123"
}
```
### Create Order
/api/orders
POST
Authentication: Bearer <token>
```
{
    "lab": "Lab",
    "patient": "Patient",
    "customer": "Customer",
    "services": [
        {
            "name": "Name",
            "value": 5
        }
    ]
}
```
### Get Orders
/api/orders?state=CREATED&page=1&limit=3
GET
Authentication: Bearer <token>
### Advance Order
/api/orders/:id/advance
PATCH
Authentication: Bearer <token>
