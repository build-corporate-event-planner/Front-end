// Models
const Models = {
  // User
  user: {
    "userid": 2,
    "username": "JakeTheDude",
    "email": "JakeTheDude@Email.com",
    "companyname": "DevelopersAnonymous",
    "role": "Backend B.A.",
    "userRoles": [],
    "image": null,
    "authority": []
  }, 
  // Event
  event: {
    "eventid": 9,
    "name": "Teambuilding Trip",
    "description": "Take the IT department on a teambuilding getaway in Hawaii",
    "date": "8-23-2019",
    "budget": "$10,000",
    "companyname": "Company A",
    "tasklist": [
        // tasks ...
    ],
    "userList": [
      // list of objects each with a user object nested inside at key "user"
      {
        "user": {
          // User object
        }
      }
    ]
  }, 
  // Task
  task: {
    "taskid": 17,
    "name": "Reservations",
    "description": "Make Hotel Reservations",
    "assigned": "John",
    "completed": false,
    "duedate": "8-1-2019",
    "category": "Service",
    "purchase": [
      {
        "purchaseid": 27,
        "description": "Reserve Hotel Rooms",
        "vendorname": "Mariott Hotel",
        "pointofcontact": "Judy",
        "email": "judyisawesome@email.com",
        "price": "$3,000",
        "qty": 0
      }
    ]
  }
}

// Endpoints
const UserEndpoints = {
  // Signup
  Signup: {
    Endpoint: '/signup',
    Type: 'POST', 
    Description: 'Sign up a new user',
    ExpectedInput: {
      // username and email must be unique
      "username": "testuser",
      "email": "JohnnyGuitar@Email.com",
      "password": "password",
      "role": "Air Guitar Instructor",
      "companyname": "test company",
    }
  },
  // Login
  Login: {
    Endpoint: '/oauth/token', 
    Type: 'POST', 
    Description: 'Gets authentication token for user with given credentials', 
    ExpectedInput: {
      "username": "SomeUser",
      "password": "TheirPassword"
    }
    sample_request: function() {
      const body = `grant_type=password&username=${username}&password=${password}`;
      
      axios.post(`${BASE_URL}/oauth/token`, body, {
        headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${window.btoa("lambda-client:lambda-secret")}`
        }
      })
    }
  }, 
  // Logout
  Logout: {
    Endpoint: '/oauth/revoke-token', 
    Type: 'GET', 
    Description: 'Back end will kill any active tokens for user'
  }, 
  // Update-User
  UpdateUser: {
    Endpoint: '/user/{id}',
    Type: 'PUT', 
    Description: 'Update user with given id',
    ExpectedInput: {
      "username": "testuser",
      "email": "JohnnyGuitar@Email.com",
      "password": "password",
      "role": "Air Guitar Instructor",
      "companyname": "test company"
    }
  }, 
  // Delete-User
  DeleteUser: {
    Endpoint: '/user/{id}', 
    Type: 'DELETE', 
    Description: 'Delete user with given id',
  }
}
const EventEndpoints = {
  // Get All Events
  GetAll: {
    Endpoint: '/events/all', 
    Type: 'GET', 
    Description: 'Get a list of all event objects'
  },
  // Get Event
  GetEvent: { // will only fetch and event if it belongs to active user
    Endpoint: '/events/{id}', 
    Type: 'PUT', 
    Description: 'Update user with given id'
  },
  // Add Event
  AddEvent: { // keeps giving weird auth errors
    Endpoint: '/events/new', 
    Type: 'POST', 
    Description: 'Update user with given id', 
    ExpectedInput: {
      "name": "Big ole Fun Time",
      "description": "We're gonna have a big ole funt ime",
      "date": "8-23-2019",
      "budget": "$10,000",
      "companyname": "Company A",
      "tasklist": [
        {
          "name": "Reservations",
          "description": "Make Hotel Reservations",
          "assigned": "John",
          "completed": false,
          "duedate": "8-1-2019",
          "category": "Service",
          "purchase": [
            {
              "description": "Reserve Hotel Rooms",
              "vendorname": "Mariott Hotel",
              "pointofcontact": "Judy",
              "email": "judyisawesome@email.com",
              "price": "$3,000",
              "qty": 0
            }
          ]
        },
        {
          "name": "RSVP",
          "description": "Have all employees either RSVP or opt out",
          "assigned": "Michelle",
          "completed": false,
          "duedate": "7-15-2019",
          "category": "Task",
          "purchase": []
        }
      ],
      // This should be empty, currently logged in user will be set added to list
      "userList": []
    }
  }, 
  // Update Event
  UpdateEvent: {
    Endpoint: '/events/edit/{id}', 
    Type: 'PUT', 
    Description: 'Update event with given id. Use this to access and update and sub categories like tasklist or userlist if only given one field ex. "tasklist" it will read the data from that field and try to use it to update object',
    ExpectedInput: {
      "name": "Big ole Fun Time",
      "description": "We're gonna have a big ole funt ime",
      "date": "8-23-2019",
      "budget": "$10,000",
      "companyname": "Company A",
      "tasklist": [
        {
          "name": "Reservations",
          "description": "Make Hotel Reservations",
          "assigned": "John",
          "completed": false,
          "duedate": "8-1-2019",
          "category": "Service",
          "purchase": [
            {
              "description": "Reserve Hotel Rooms",
              "vendorname": "Mariott Hotel",
              "pointofcontact": "Judy",
              "email": "judyisawesome@email.com",
              "price": "$3,000",
              "qty": 0
            }
          ]
        },
        {
          "name": "RSVP",
          "description": "Have all employees either RSVP or opt out",
          "assigned": "Michelle",
          "completed": false,
          "duedate": "7-15-2019",
          "category": "Task",
          "purchase": []
        }
      ],
      "userList": [
        {
          "user" : { // user object
          }
        }
      ]
    }
  }, 
  // Delete Event
  DeleteEvent: { // will only delete an event if it belongs to active user
    Endpoint: '/events/delete/{eventid}', 
    Type: 'DELETE', 
    Description: 'Deletes event with given ID'
  }
}