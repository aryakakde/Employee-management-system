const employees = [
  {
      "id": 1,
      "firstname": "Rajesh",
      "email": "employee1@example.com",
      "password": "123",
      "taskNumbers": {
          "active": 1,
          "completed": 2,
          "newTask": 1,
          "failed": 0
      },
      "tasks": [
          {
              "title": "Complete project report",
              "description": "Write and submit the project report for Q3.",
              "date": "2024-10-15",
              "category": "Report",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "title": "Team meeting",
              "description": "Attend the weekly team meeting.",
              "date": "2024-10-10",
              "category": "Meeting",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          },
          {
              "title": "Fix critical bug",
              "description": "Resolve the critical bug in the user authentication system.",
              "date": "2024-10-12",
              "category": "Development",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          }
      ]
  },
  {
      "id": 2,
      "firstname": "Priya",
      "email": "employee2@example.com",
      "password": "123",
      "taskNumbers": {
          "active": 2,
          "completed": 0,
          "newTask": 2,
          "failed": 0
      },
      "tasks": [
          {
              "title": "Update website content",
              "description": "Update the homepage with the new product release details.",
              "date": "2024-10-13",
              "category": "Content",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "title": "Prepare presentation",
              "description": "Create a presentation for the monthly performance review.",
              "date": "2024-10-18",
              "category": "Presentation",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          }
      ]
  },
  {
      "id": 3,
      "firstname": "Amit",
      "email": "employee3@example.com",
      "password": "123",
      "taskNumbers": {
          "active": 2,
          "completed": 1,
          "newTask": 1,
          "failed": 1
      },
      "tasks": [
          {
              "title": "Client meeting",
              "description": "Meet with the client to discuss project requirements.",
              "date": "2024-10-14",
              "category": "Meeting",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          },
          {
              "title": "Submit invoice",
              "description": "Submit the invoice for the completed project.",
              "date": "2024-10-11",
              "category": "Finance",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": true
          },
          {
              "title": "Follow-up with vendor",
              "description": "Contact the vendor for the delayed shipment.",
              "date": "2024-10-16",
              "category": "Logistics",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          }
      ]
  },
  {
      "id": 4,
      "firstname": "Neha",
      "email": "employee4@example.com",
      "password": "123",
      "taskNumbers": {
          "active": 2,
          "completed": 1,
          "newTask": 1,
          "failed": 0
      },
      "tasks": [
          {
              "title": "Write blog post",
              "description": "Write a new blog post for the company's tech blog.",
              "date": "2024-10-12",
              "category": "Content",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          },
          {
              "title": "Update client database",
              "description": "Ensure all client information is up-to-date in the database.",
              "date": "2024-10-17",
              "category": "Data Management",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "title": "Fix email issue",
              "description": "Resolve the email server issue causing delayed emails.",
              "date": "2024-10-15",
              "category": "IT Support",
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
          }
      ]
  },
  {
      "id": 5,
      "firstname": "Suresh",
      "email": "employee5@example.com",
      "password": "123",
      "taskNumbers": {
          "active": 2,
          "completed": 0,
          "newTask": 2,
          "failed": 0
      },
      "tasks": [
          {
              "title": "Design new feature UI",
              "description": "Create a design prototype for the upcoming feature release.",
              "date": "2024-10-13",
              "category": "Design",
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "title": "Prepare project roadmap",
              "description": "Plan and document the project roadmap for Q4.",
              "date": "2024-10-19",
              "category": "Planning",
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
          },
          {
              "title": "Fix frontend bugs",
              "description": "Resolve UI issues in the frontend of the web application.",
              "date": "2024-10-17",
              "category": "Development",
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
          }
      ]
  }
];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ]

  export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin",JSON.stringify(admin))
  }
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees, admin}
  }