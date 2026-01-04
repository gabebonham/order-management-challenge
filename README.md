## STEPS
- cp .env.example .env
- npm i
- docker compose -f docker-compose.dev.yaml up -d
- npm run dev
- npm run test:run

## ENDPOINTS
### Registration
/register<br>
POST<br>
```
{
    "email":"marcelo@gmail.com",
    "password":"Senhasecreta@123"
}
```
### Login
/login<br>
POST<br>
```
{
    "email":"marcelo@gmail.com",
    "password":"Senhasecreta@123"
}
```
### Create Order
/api/orders<br>
POST<br>
Authentication: Bearer token
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
/api/orders?state=CREATED&page=1&limit=3<br>
GET<br>
Authentication: Bearer token
### Advance Order
/api/orders/:id/advance<br>
PATCH<br>
Authentication: Bearer token
