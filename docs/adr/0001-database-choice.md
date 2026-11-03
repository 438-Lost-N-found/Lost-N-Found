# ADR-0001: Database Choice for Campus Lost & Found

**Status:** Accepted

**Date:** 2026-11-02

**Deciders:** Team 438-Lost-N-found

**Supersedes:** None

**Related PR(s):** None yet

## Context

Campus Lost & Found needs a database to store users, lost and found listings, and claims. We considered Supabase, Neon, and Amazon DynamoDB. We wanted a solution that would support our application's data relationships while keeping backend setup manageable for the team.

## Options Considered

| Option | Advantages | Disadvantages |
|---|---|---|
| Supabase | Uses PostgreSQL and provides authentication, file storage, and automatically generated APIs. | The team will need to learn the platform and work within its free-tier limits. |
| Neon | Uses PostgreSQL and supports database branching. Some team members have experience with it. | Additional services, such as authentication and file storage, may need to be configured separately. |
| Amazon DynamoDB | Managed NoSQL database with automatic scaling and AWS integration. | Its different data model may make relationships between users, listings, and claims less straightforward. |

## Decision

We will use Supabase as the database platform for Campus Lost & Found. Supabase provides PostgreSQL along with additional backend services, including authentication, file storage, and automatically generated APIs. Compared to Neon, Supabase provides more built-in backend functionality in one platform, reducing the need to configure and manage additional services separately.

## Consequences

**Good:**
- The team will use PostgreSQL to manage users, listings, and claims.
- Supabase provides additional backend tools in one platform.
- The database supports relationships between the application's main resources.

**Bad:**
- The team will need to learn Supabase and work within its free-tier limits.
- The team may need to adjust its implementation to fit Supabase's platform.

**Follow-up:**
- Create a Supabase project.
- Configure the backend to connect to the Supabase database.
- Create the necessary tables and relationships for users, listings, and claims.

