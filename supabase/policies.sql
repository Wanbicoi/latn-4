-- Enable Row Level Security and add basic policies for main tables
-- 1. _users
ALTER TABLE public._users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users: Authenticated select" ON public._users FOR
SELECT
    TO authenticated;

CREATE POLICY "Users: Authenticated insert" ON public._users FOR INSERT TO authenticated;

CREATE POLICY "Users: Authenticated update" ON public._users
FOR UPDATE
    TO authenticated;

CREATE POLICY "Users: Authenticated delete" ON public._users FOR DELETE TO authenticated;

-- 2. _roles
ALTER TABLE public._roles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Roles: Authenticated select" ON public._roles FOR
SELECT
    TO authenticated;

CREATE POLICY "Roles: Authenticated insert" ON public._roles FOR INSERT TO authenticated;

CREATE POLICY "Roles: Authenticated update" ON public._roles
FOR UPDATE
    TO authenticated;

CREATE POLICY "Roles: Authenticated delete" ON public._roles FOR DELETE TO authenticated;

-- 3. _projects
ALTER TABLE public._projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Projects: Authenticated select" ON public._projects FOR
SELECT
    TO authenticated;

CREATE POLICY "Projects: Authenticated insert" ON public._projects FOR INSERT TO authenticated;

CREATE POLICY "Projects: Authenticated update" ON public._projects
FOR UPDATE
    TO authenticated;

CREATE POLICY "Projects: Authenticated delete" ON public._projects FOR DELETE TO authenticated;

-- 4. _project_members
ALTER TABLE public._project_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Project Members: Authenticated select" ON public._project_members FOR
SELECT
    TO authenticated;

CREATE POLICY "Project Members: Authenticated insert" ON public._project_members FOR INSERT TO authenticated;

CREATE POLICY "Project Members: Authenticated update" ON public._project_members
FOR UPDATE
    TO authenticated;

CREATE POLICY "Project Members: Authenticated delete" ON public._project_members FOR DELETE TO authenticated;

-- 5. _project_tags
ALTER TABLE public._project_tags ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Project Tags: Authenticated select" ON public._project_tags FOR
SELECT
    TO authenticated;

CREATE POLICY "Project Tags: Authenticated insert" ON public._project_tags FOR INSERT TO authenticated;

CREATE POLICY "Project Tags: Authenticated update" ON public._project_tags
FOR UPDATE
    TO authenticated;

CREATE POLICY "Project Tags: Authenticated delete" ON public._project_tags FOR DELETE TO authenticated;

-- 6. _project_to_tags
ALTER TABLE public._project_to_tags ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Project to Tags: Authenticated select" ON public._project_to_tags FOR
SELECT
    TO authenticated;

CREATE POLICY "Project to Tags: Authenticated insert" ON public._project_to_tags FOR INSERT TO authenticated;

CREATE POLICY "Project to Tags: Authenticated update" ON public._project_to_tags
FOR UPDATE
    TO authenticated;

CREATE POLICY "Project to Tags: Authenticated delete" ON public._project_to_tags FOR DELETE TO authenticated;

-- 7. _data_items
ALTER TABLE public._data_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Data Items: Authenticated select" ON public._data_items FOR
SELECT
    TO authenticated;

CREATE POLICY "Data Items: Authenticated insert" ON public._data_items FOR INSERT TO authenticated;

CREATE POLICY "Data Items: Authenticated update" ON public._data_items
FOR UPDATE
    TO authenticated;

CREATE POLICY "Data Items: Authenticated delete" ON public._data_items FOR DELETE TO authenticated;

-- 8. _models
ALTER TABLE public._models ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Models: Authenticated select" ON public._models FOR
SELECT
    TO authenticated;

CREATE POLICY "Models: Authenticated insert" ON public._models FOR INSERT TO authenticated;

CREATE POLICY "Models: Authenticated update" ON public._models
FOR UPDATE
    TO authenticated;

CREATE POLICY "Models: Authenticated delete" ON public._models FOR DELETE TO authenticated;

-- 9. _workflows
ALTER TABLE public._workflows ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Workflows: Authenticated select" ON public._workflows FOR
SELECT
    TO authenticated;

CREATE POLICY "Workflows: Authenticated insert" ON public._workflows FOR INSERT TO authenticated;

CREATE POLICY "Workflows: Authenticated update" ON public._workflows
FOR UPDATE
    TO authenticated;

CREATE POLICY "Workflows: Authenticated delete" ON public._workflows FOR DELETE TO authenticated;

-- 10. _workflow_stages
ALTER TABLE public._workflow_stages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Workflow Stages: Authenticated select" ON public._workflow_stages FOR
SELECT
    TO authenticated;

CREATE POLICY "Workflow Stages: Authenticated insert" ON public._workflow_stages FOR INSERT TO authenticated;

CREATE POLICY "Workflow Stages: Authenticated update" ON public._workflow_stages
FOR UPDATE
    TO authenticated;

CREATE POLICY "Workflow Stages: Authenticated delete" ON public._workflow_stages FOR DELETE TO authenticated;

-- 11. _tasks
ALTER TABLE public._tasks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tasks: Authenticated select" ON public._tasks FOR
SELECT
    TO authenticated;

CREATE POLICY "Tasks: Authenticated insert" ON public._tasks FOR INSERT TO authenticated;

CREATE POLICY "Tasks: Authenticated update" ON public._tasks
FOR UPDATE
    TO authenticated;

CREATE POLICY "Tasks: Authenticated delete" ON public._tasks FOR DELETE TO authenticated;

-- 12. _task_assignments
ALTER TABLE public._task_assignments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Task Assignments: Authenticated select" ON public._task_assignments FOR
SELECT
    TO authenticated;

CREATE POLICY "Task Assignments: Authenticated insert" ON public._task_assignments FOR INSERT TO authenticated;

CREATE POLICY "Task Assignments: Authenticated update" ON public._task_assignments
FOR UPDATE
    TO authenticated;

CREATE POLICY "Task Assignments: Authenticated delete" ON public._task_assignments FOR DELETE TO authenticated;

-- 13. _notifications
ALTER TABLE public._notifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Notifications: Authenticated select" ON public._notifications FOR
SELECT
    TO authenticated;

CREATE POLICY "Notifications: Authenticated insert" ON public._notifications FOR INSERT TO authenticated;

CREATE POLICY "Notifications: Authenticated update" ON public._notifications
FOR UPDATE
    TO authenticated;

CREATE POLICY "Notifications: Authenticated delete" ON public._notifications FOR DELETE TO authenticated;

-- 14. _datasource_integrations
ALTER TABLE public._datasource_integrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Datasource Integrations: Authenticated select" ON public._datasource_integrations FOR
SELECT
    TO authenticated;

CREATE POLICY "Datasource Integrations: Authenticated insert" ON public._datasource_integrations FOR INSERT TO authenticated;

CREATE POLICY "Datasource Integrations: Authenticated update" ON public._datasource_integrations
FOR UPDATE
    TO authenticated;

CREATE POLICY "Datasource Integrations: Authenticated delete" ON public._datasource_integrations FOR DELETE TO authenticated;