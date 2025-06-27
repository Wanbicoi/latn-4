# Technical Specifications

This document outlines the technical details, dependencies, and constraints for the data annotation platform.

## 1. Technologies Used

- **Backend**:
    - **Database**: PostgreSQL (hosted on Supabase)
    - **Platform**: Supabase (for Auth, and real-time database capabilities)
- **Frontend**:
    - **Framework**: React
    - **UI Framework**: [refine.dev](https://refine.dev/) with Ant Design
- **Tooling**:
    - **Package Manager**: npm or yarn
    - **Bundler**: Vite

## 2. Development Setup

### Backend Setup (Supabase)

1.  **Create Supabase Project**:
    - Set up a new project on the Supabase dashboard.
    - Enable PostgreSQL and store the connection details securely.
2.  **Database Migrations**:
    - Define the initial schema in `supabase/tables.sql`.
    - Apply migrations using the Supabase MCP
3.  **SQL Functions & Triggers**:
    - Implement all atomic state transition logic as SQL functions in `supabase/functions/`.
    - Set up database triggers to invoke the Workflow Engine logic when `task_assignments` change.

### Frontend Setup (React)

1.  **Scaffold Application**:
    - Create a new React application using Vite and the Refine template.
2.  **Install Dependencies**:
    - Install `antd`, `@refinedev/antd`, `@refinedev/supabase`, and other required packages.
3.  **Configure Supabase Client**:
    - Initialize the Supabase client in `src/utils/supabase-client.js` with the project URL and anon key.
4.  **Routing & Authentication**:
    - Set up application routing.
    - Implement authentication and Role-Based Access Control (RBAC) using Refine's Supabase adapter.
5.  **Notifications**:
    - Configure real-time notifications by setting up a websocket or using polling mechanisms that listen to the `notifications` table.

## 3. Technical Constraints & Conventions

- **File Naming**: All files and directories **MUST** use **kebab-case**.
- **Transactional Integrity**: All database state transitions that involve multiple steps (e.g., updating a task and creating new assignments) **MUST** be wrapped in atomic SQL functions to ensure data consistency.
- **Business Logic Isolation**:
    - Core backend logic (Workflow Engine) resides entirely within PostgreSQL functions and triggers.
    - Frontend business logic for workflow evaluation and routing is isolated in the `/core` folder of the React application.
- **Database Schema**:
    - All core tables should be prefixed with an underscore (e.g., `_projects`).
    - Business logic should interact with Postgres `views` (e.g., `projects`), which can join multiple core tables as needed.
- **API Communication**: Direct communication with external services (e.g., for MITL) should be handled with care, including implementing retry mechanisms and fallback stages.

## 4. Dependencies

### Backend (Supabase/PostgreSQL)

- No external package dependencies. All logic is self-contained in SQL.

### Frontend (React)

- `@refinedev/core`
- `@refinedev/cli`
- `@refinedev/react`
- `@refinedev/antd`
- `@refinedev/supabase`
- `react`
- `react-dom`
- `antd`
- `react-router-dom`
- A library for creating the graph-based workflow builder (e.g., `react-flow-renderer` or a similar tool).
