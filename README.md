# To-Do List Application

Author: Kroch Monyvatana (KrochMonyvatana)

GitHub Repository: https://github.com/KrochMonyvatana/my-todolist-app

Live Demo: https://my-todolist-app-sooty.vercel.app/

A professional, feature-rich Task Management application built with React that helps you organize tasks efficiently with groups, priorities, and search functionality.

================================================================================

FEATURES


Core Features:

- Create new tasks with title, description, and priority
- Edit existing tasks
- Delete tasks
- Mark tasks as complete/incomplete
- View all tasks in a clean list layout

Advanced Features:

- Search tasks by title or description
- Create custom groups (Work, Personal, Shopping, etc.)
- Filter tasks by groups from sidebar
- Priority levels (Low, Medium, High)
- Auto-save to local storage (data persists after refresh)
- Clear all completed tasks with one click

================================================================================

TECH STACK

- React 18 - Frontend framework
- Twind CSS - Styling with Tailwind classes
- Vite - Build tool and dev server
- React Icons - Icon library
- UUID - Generate unique IDs
- Local Storage API - Data persistence

================================================================================

PROJECT STRUCTURE

my-todolist-app/
├── src/
│ ├── components/
│ │ ├── Sidebar.jsx # Groups navigation
│ │ ├── TodoList.jsx # Tasks display
│ │ ├── TodoItem.jsx # Individual task
│ │ ├── TodoForm.jsx # Create new task
│ │ └── SearchBar.jsx # Search functionality
│ ├── hooks/
│ │ └── useLocalStorage.js # Custom storage hook
│ ├── utils/
│ │ └── helpers.js # Helper functions
│ ├── styles/
│ │ └── twind.config.js # Twind configuration
│ ├── App.jsx # Main component
│ └── main.jsx # Entry point
├── public/
├── package.json
└── README.md

================================================================================

GETTING STARTED

Prerequisites:

- Node.js (v14 or higher)
- npm or yarn

Installation Steps:

1. Clone the repository
   git clone https://github.com/KrochMonyvatana/my-todolist-app.git
   cd my-todolist-app

2. Install dependencies
   npm install

3. Run development server
   npm run dev

4. Open your browser
   http://localhost:5173

Build for Production:
npm run build

================================================================================

HOW TO USE

Creating a Task:

1. Enter a title (required)
2. Add description (optional)
3. Select priority (Low/Medium/High)
4. Click "Add Task"

Managing Tasks:

- Complete task: Click the checkbox
- Edit task: Click the edit (pencil) icon
- Delete task: Click the delete (trash) icon

Using Groups:

1. Click "New Group" in sidebar
2. Enter group name
3. Click group to see its tasks
4. Delete group (removes all tasks in it)

Searching:

- Type in search bar to filter tasks by title or description

================================================================================

PRIORITY COLORS

- High Priority - Red badge
- Medium Priority - Yellow badge
- Low Priority - Green badge

================================================================================

DATA PERSISTENCE

All tasks and groups are automatically saved to your browser's local storage. Refresh the page and your data stays.

================================================================================

REQUIREMENTS MET

Minimum Requirements:

- Draw the To-Do List Layout - COMPLETE
- Implement function that creates a To-Do - COMPLETE
- Modify contents of created To-Do - COMPLETE
- Delete contents of created To-Do - COMPLETE
- Render created To-Do(s) in form - COMPLETE

Additional Requirements:

- Add search function to search created To-Do(s) - COMPLETE
- Create groups and display in sidebar - COMPLETE
- Show different To-Do List depending on group - COMPLETE

================================================================================

KNOWN ISSUES

None - all features working perfectly.

================================================================================

CONCLUSION

This project successfully implements a complete To-Do List application with all required features including task management, search functionality, and group organization. The application is fully functional, user-friendly, and data persists using local storage.

================================================================================

Made with React + Twind CSS + Vite

June 2026 Kroch Monyvatana - School Project
