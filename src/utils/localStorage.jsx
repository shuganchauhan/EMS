
// const employees = [
//   {
//     id: 1,
//     firstName: "Arjun",
//     email: "employee1@example.com",
//     password: "123",
//     taskCounts: { active: 2, newTask: 1, completed: 1, failed: 1 },
//     tasks: [
//       {
//         taskTitle: "UI Design Enhancement",
//         taskDescription: "Enhance the dashboard user interface by improving spacing, typography, and overall visual hierarchy using Tailwind CSS. Ensure the layout remains fully responsive across all screen sizes.",
//         taskDate: "2026-01-20",
//         category: "Design",
//         active: true, newTask: false, completed: false, failed: false
//       },
//       {
//         taskTitle: "Navigation Bar Improvements",
//         taskDescription: "Fix alignment issues in the navigation bar, improve hover interactions, and ensure smooth dropdown behavior across desktop and mobile devices.",
//         taskDate: "2026-01-21",
//         category: "UI",
//         active: true, newTask: false, completed: false, failed: false
//       },
//       {
//         taskTitle: "Feature Planning",
//         taskDescription: "Analyze requirements for an upcoming feature, document expected behavior, and prepare a clear development roadmap before implementation.",
//         taskDate: "2026-01-22",
//         category: "Feature",
//         active: false, newTask: true, completed: false, failed: false
//       },
//       {
//         taskTitle: "Login Bug Fix",
//         taskDescription: "Debug and resolve a login issue caused by incorrect state handling in form inputs. Validate the fix with multiple test scenarios.",
//         taskDate: "2026-01-18",
//         category: "Bug",
//         active: false, newTask: false, completed: true, failed: false
//       },
//       {
//         taskTitle: "Deployment Failure Analysis",
//         taskDescription: "Investigate deployment errors by reviewing build logs and environment variables. Apply fixes and document the root cause for future prevention.",
//         taskDate: "2026-01-15",
//         category: "DevOps",
//         active: false, newTask: false, completed: false, failed: true
//       }
//     ]
//   },

//   {
//     id: 2,
//     firstName: "Rohit",
//     email: "employee2@example.com",
//     password: "123",
//     taskCounts: { active: 1, newTask: 2, completed: 2, failed: 0 },
//     tasks: [
//       {
//         taskTitle: "Codebase Refactoring",
//         taskDescription: "Refactor existing components to remove unused logic, improve readability, and follow best practices for maintainable code.",
//         taskDate: "2026-01-21",
//         category: "Refactor",
//         active: true, newTask: false, completed: false, failed: false
//       },
//       {
//         taskTitle: "New Module Development",
//         taskDescription: "Start development of a new module by setting up folder structure and defining reusable components for future expansion.",
//         taskDate: "2026-01-22",
//         category: "Feature",
//         active: false, newTask: true, completed: false, failed: false
//       },
//       {
//         taskTitle: "Documentation Update",
//         taskDescription: "Update project documentation to reflect recent changes, making onboarding easier for new developers.",
//         taskDate: "2026-01-23",
//         category: "Documentation",
//         active: false, newTask: true, completed: false, failed: false
//       },
//       {
//         taskTitle: "Image Optimization",
//         taskDescription: "Optimize website images by compressing assets and implementing lazy loading to improve page performance.",
//         taskDate: "2026-01-17",
//         category: "Performance",
//         active: false, newTask: false, completed: true, failed: false
//       },
//       {
//         taskTitle: "SEO Improvements",
//         taskDescription: "Improve website SEO by fixing meta tags, headings, and improving semantic HTML structure.",
//         taskDate: "2026-01-18",
//         category: "SEO",
//         active: false, newTask: false, completed: true, failed: false
//       }
//     ]
//   },

//   {
//     id: 3,
//     firstName: "Priya",
//     email: "employee3@example.com",
//     password: "123",
//     taskCounts: { active: 3, newTask: 0, completed: 1, failed: 1 },
//     tasks: [
//       {
//         taskTitle: "Search Feature Implementation",
//         taskDescription: "Develop a task search feature allowing users to quickly filter and locate tasks using keywords.",
//         taskDate: "2026-01-23",
//         category: "Feature",
//         active: true, newTask: false, completed: false, failed: false
//       },
//       {
//         taskTitle: "Advanced Task Filters",
//         taskDescription: "Implement advanced filters to allow sorting tasks based on category, status, and date.",
//         taskDate: "2026-01-24",
//         category: "UI",
//         active: true, newTask: false, completed: false, failed: false
//       },
//       {
//         taskTitle: "Notification System",
//         taskDescription: "Build a notification system to alert users about task updates and status changes in real time.",
//         taskDate: "2026-01-25",
//         category: "Feature",
//         active: true, newTask: false, completed: false, failed: false
//       },
//       {
//         taskTitle: "Database Backup",
//         taskDescription: "Create and verify weekly database backups to ensure data safety and recovery readiness.",
//         taskDate: "2026-01-16",
//         category: "Database",
//         active: false, newTask: false, completed: true, failed: false
//       },
//       {
//         taskTitle: "Deployment Issue",
//         taskDescription: "Resolve deployment failures caused by misconfigured environment settings during production builds.",
//         taskDate: "2026-01-15",
//         category: "DevOps",
//         active: false, newTask: false, completed: false, failed: true
//       }
//     ]
//   },

//   {
//     id: 4,
//     firstName: "Aman",
//     email: "employee4@example.com",
//     password: "123",
//     taskCounts: { active: 1, newTask: 1, completed: 1, failed: 1 },
//     tasks: [
//       {
//         taskTitle: "Critical Bug Fix",
//         taskDescription: "Identify and fix a high-priority bug affecting core application functionality.",
//         taskDate: "2026-01-20",
//         category: "Bug",
//         active: true, newTask: false, completed: false, failed: false
//       },
//       {
//         taskTitle: "UI Component Design",
//         taskDescription: "Design a reusable UI component to maintain consistency across multiple screens.",
//         taskDate: "2026-01-21",
//         category: "UI",
//         active: false, newTask: true, completed: false, failed: false
//       },
//       {
//         taskTitle: "Test Case Execution",
//         taskDescription: "Execute manual and automated test cases to validate new changes before release.",
//         taskDate: "2026-01-19",
//         category: "Testing",
//         active: false, newTask: false, completed: true, failed: false
//       },
//       {
//         taskTitle: "Crash Analysis",
//         taskDescription: "Analyze application crash reports and identify stability issues causing unexpected failures.",
//         taskDate: "2026-01-18",
//         category: "Stability",
//         active: false, newTask: false, completed: false, failed: true
//       }
//     ]
//   },

//   {
//     id: 5,
//     firstName: "Neha",
//     email: "employee5@example.com",
//     password: "123",
//     taskCounts: { active: 2, newTask: 2, completed: 0, failed: 1 },
//     tasks: [
//       {
//         taskTitle: "Profile Page UI",
//         taskDescription: "Design and implement the user profile page with clean layout and editable fields.",
//         taskDate: "2026-01-22",
//         category: "UI",
//         active: true, newTask: false, completed: false, failed: false
//       },
//       {
//         taskTitle: "Settings Logic",
//         taskDescription: "Implement application settings logic including toggles, preferences, and validations.",
//         taskDate: "2026-01-23",
//         category: "Logic",
//         active: true, newTask: false, completed: false, failed: false
//       },
//       {
//         taskTitle: "API Integration",
//         taskDescription: "Integrate backend APIs with frontend components and handle loading and error states.",
//         taskDate: "2026-01-24",
//         category: "API",
//         active: false, newTask: true, completed: false, failed: false
//       },
//       {
//         taskTitle: "Documentation Draft",
//         taskDescription: "Prepare initial documentation for new features and workflows for team reference.",
//         taskDate: "2026-01-25",
//         category: "Documentation",
//         active: false, newTask: true, completed: false, failed: false
//       },
//       {
//         taskTitle: "Build Failure",
//         taskDescription: "Investigate build failures caused by dependency mismatches and incorrect configuration.",
//         taskDate: "2026-01-18",
//         category: "Build",
//         active: false, newTask: false, completed: false, failed: true
//       }
//     ]
//   }
// ];
// const admin = [
//   {
//     id: 1,
//     firstName: "Shagun",
//     email: "admin@example.com",
//     password: "123"
//   }
// ];
// export const setLocalStorage = () => {
//     localStorage.setItem("employees", JSON.stringify(employees));
//     localStorage.setItem("admin", JSON.stringify(admin));
// }
// export const getLocalStorage = () => {
//     const employees = JSON.parse(localStorage.getItem("employees"));
//     const admin = JSON.parse(localStorage.getItem("admin"));
//     console.log({employees, admin});
//     return {employees, admin};
// }

const employees = [
    {
        "id": 1,
        "firstName": "Arjun",
        "email": "e@e.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Update website",
                "taskDescription": "Revamp the homepage design",
                "taskDate": "2024-10-12",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client meeting",
                "taskDescription": "Discuss project requirements",
                "taskDate": "2024-10-10",
                "category": "Meeting"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix bugs",
                "taskDescription": "Resolve bugs reported in issue tracker",
                "taskDate": "2024-10-14",
                "category": "Development"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Sneha",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Database optimization",
                "taskDescription": "Optimize queries for better performance",
                "taskDate": "2024-10-11",
                "category": "Database"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Design new feature",
                "taskDescription": "Create mockups for the new feature",
                "taskDate": "2024-10-09",
                "category": "Design"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Ravi",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare presentation",
                "taskDescription": "Prepare slides for upcoming client presentation",
                "taskDate": "2024-10-13",
                "category": "Presentation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Code review",
                "taskDescription": "Review the codebase for optimization",
                "taskDate": "2024-10-12",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Testing",
                "taskDescription": "Test the latest build for bugs",
                "taskDate": "2024-10-08",
                "category": "QA"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Priya",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Write documentation",
                "taskDescription": "Update the project documentation",
                "taskDate": "2024-10-13",
                "category": "Documentation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Set up CI/CD",
                "taskDescription": "Implement continuous integration pipeline",
                "taskDate": "2024-10-11",
                "category": "DevOps"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Karan",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "UI redesign",
                "taskDescription": "Redesign the user interface for better UX",
                "taskDate": "2024-10-14",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Deploy new build",
                "taskDescription": "Deploy the latest build to production",
                "taskDate": "2024-10-09",
                "category": "DevOps"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Client feedback",
                "taskDescription": "Gather feedback from clients after product launch",
                "taskDate": "2024-10-12",
                "category": "Support"
            }
        ]
    }
];


const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin }
}