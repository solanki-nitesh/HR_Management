# pratical-task-edexa

## Getting Started

### Minimum Requirements

```bash
node -v
# v10.15.0
npm -v
# 6.4.0
```

### Start Development

```bash
git clone https:
cd pratical-task-edexa
npm i 
npm start
```

Project started with [express-generator](https://expressjs.com/en/starter/generator.html)

Database [MongoDB Atlas](https://cloud.mongodb.com/)


### Main Task:
- Create an API for the user authentication system

### Use Cases:
- Users with 4 roles: HR, Manager, team lead, employees
- HR can Remove of the 3 users( Manager, team lead, employee).
- HR can assign different actions to Manager and team lead i.e. Manager can only create or get or update or delete the employees. (multiple actions can be there)
- If any user doesn't have access to a particular action then he should not be able to perform that action.