Install dependencies
npm i

Initialize database and seed
npx prisma migrate dev --name init

Login Credential
username = rhon
password = 0000

Login Profile
POST	http://localhost:3000/api/login
application/json
AUTHORIZATION BEARER
{
    username: string,
    password: string
} 

Add Profile
POST	http://localhost:3000/api/addProfile
application/json
AUTHORIZATION BEARER
{
    "firstName": string,
    "address": string,
    "email": string,
    "lastName": string,
    "password": string,
    "phoneNumber": string,
    "postCode": string,
    "userName": string
} 

Update Profile
PUT	http://localhost:3000/api/editProfile/{id}
application/json
AUTHORIZATION BEARER
{
    "firstName": string,
    "address": string,
    "email": string,
    "lastName": string,
    "password": string,
    "phoneNumber": string,
    "postCode": string,
    "userName": string
}  

Get Profiles
GET	http://localhost:3000/api/getProfiles
AUTHORIZATION BEARER

Get Profile by Id
GET	http://localhost:3000/api/getProfile/{id}
AUTHORIZATION BEARER

Remove Profile by Id
DELETE	http://localhost:3000/api/removeProfile/{id}
AUTHORIZATION BEARER