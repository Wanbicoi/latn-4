# Role-Based Access Control (RBAC) Schema

This document outlines the database schema for managing roles and permissions within the application. Storing this configuration in the database allows for dynamic and scalable access control.

## 1. Core Tables

We will introduce three new tables to manage RBAC:

-   `_roles`: Stores the distinct roles available in the system (e.g., `admin`, `reviewer`, `annotator`).
-   `_features`: Stores the granular permissions or features that can be controlled (e.g., `can_create_project`, `can_review_task`).
-   `_role_features`: A many-to-many join table that maps features to roles, defining what each role is permitted to do.

## 2. Table Definitions

### `_roles`

This table contains a list of all user roles.

| Column Name  | Data Type      | Constraints                                | Description                           |
| :----------- | :------------- | :----------------------------------------- | :------------------------------------ |
| `id`         | `UUID`         | `Primary Key`, `Default gen_random_uuid()` | Unique identifier for the role.       |
| `name`       | `VARCHAR(255)` | `Not Null`, `Unique`                       | The name of the role (e.g., "admin"). |
| `created_at` | `TIMESTAMP`    | `Not Null`, `Default NOW()`                | Timestamp of creation.                |

### `_features`

This table contains a list of all distinct, controllable features in the application.

| Column Name   | Data Type      | Constraints                                | Description                                           |
| :------------ | :------------- | :----------------------------------------- | :---------------------------------------------------- |
| `id`          | `UUID`         | `Primary Key`, `Default gen_random_uuid()` | Unique identifier for the feature.                    |
| `name`        | `VARCHAR(255)` | `Not Null`, `Unique`                       | The name of the feature (e.g., "can_create_project"). |
| `description` | `TEXT`         |                                            | A brief description of what the feature allows.       |
| `created_at`  | `TIMESTAMP`    | `Not Null`, `Default NOW()`                | Timestamp of creation.                                |

### `_role_features`

This join table links roles to their permitted features.

| Column Name  | Data Type | Constraints                                 | Description                                 |
| :----------- | :-------- | :------------------------------------------ | :------------------------------------------ |
| `role_id`    | `UUID`    | `Primary Key`, `Foreign Key (_roles.id)`    | The ID of the role being granted a feature. |
| `feature_id` | `UUID`    | `Primary Key`, `Foreign Key (_features.id)` | The ID of the feature being granted.        |

## 3. Views

To simplify querying, we will create a view named `role_permissions` that joins these tables to provide a clear overview of which roles have which permissions.

### `role_features_view`

```sql
CREATE OR REPLACE VIEW public.role_features_view AS
SELECT
  r.name AS role,
  f.name AS feature
FROM
  public._roles r
JOIN
  public._role_features rf ON r.id = rf.role_id
JOIN
  public._features f ON f.id = rf.feature_id;
```

This view will allow the frontend to easily fetch all permissions for a given role with a single query.