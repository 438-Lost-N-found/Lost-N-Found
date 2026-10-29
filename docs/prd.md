# Product Requirements Document (PRD): Campus Lost & Found
Team: 438-Lost-N-found · Repo: https://github.com/438-Lost-N-found/Lost-N-Found · Last updated: 2026-10-29
# 1. Users
- Primary user: A CSUMB student who has misplaced a personal item on campus and wants to find out whether someone has reported finding it.
- Secondary user (optional): A campus student who finds an item and wants to help return it.
# 2. Problem
A student who loses something on campus may not know where to check or whether someone has found it. Existing options, such as scattered social media posts and asking around, make it difficult to search a single up to date list of lost and found items.
# 3. Success measures

| # | Measure | Target | How we check it |
|---|---|---|---|
| S1 | A signed-in student creates a lost-item listing | Within 2 minutes | Time an end-to-end usability test |
| S2 | A student finds a seeded listing using search | Within 30 seconds | Time a search task with 10 sample listings |
| S3 | A listing owner completes a claim and return workflow | Within 3 minutes | Run an end-to-end test with two test accounts |



# 4. Scope: MVP, vertical slice, and not building

| Category | Description |
|---|---|
| MVP stories | PRD-1 through PRD-6, including the account baseline: GitHub and Google sign-in, profile update, and account deletion. |
| Vertical slice | PRD-2: A signed-in student posts a lost-item listing and can view it in the listings feed and details page. Test the full workflow with Playwright. |
| Core resources | Users, Listings, and Claims. A user can create multiple lost or found listings. A found listing can receive multiple claims, and each claim belongs to the student who submitted it. The listing owner can review claims and mark an item as returned. |
| Not building (this term) | Real-time messaging, GPS tracking, AI image matching, payment/reward processing, or push notifications. |

# 5. User stories and acceptance criteria

| ID | Story | Acceptance criteria |
|---|---|---|
| PRD-1 | As a student, I want to sign in with GitHub or Google, update my profile, and delete my account so that I can manage access to the app. | Given I am signed out, when I choose either supported provider and authorize access, then I am signed in. Given I am signed in, when I update my display name or delete my account, then the saved profile changes or my account is removed. |
| PRD-2 | As a student who lost an item, I want to create a lost-item listing so that others can help locate it. | Given I am signed in, when I submit an item name, description, category, and last-seen location, then a new lost listing appears in the feed and has a details page. |
| PRD-3 | As a student who found an item, I want to post a found-item listing so that its owner can locate it. | Given I am signed in, when I submit the required found-item details, then a found listing appears in the feed. |
| PRD-4 | As a student searching for an item, I want to browse and filter listings so that I can find likely matches. | Given listings exist, when I search by keyword or filter by lost/found status, then the feed shows matching listings. |
| PRD-5 | As a student who recognizes my property, I want to submit a claim on a found listing so that the finder can review it. | Given I am signed in and viewing another student's found listing, when I submit a claim with a short identifying description, then the claim is saved and visible to that listing's owner. |
| PRD-6 | As a listing owner, I want to review claims and mark an item returned so that its status stays accurate. | Given I own a found listing with a pending claim, when I approve the claim and mark the item returned, then the listing displays a returned status. |


# Change log

| Date | PR | What changed and why |
|---|---|---|
| 2026-10-29 | Initial commit | Initial PRD for team review before proposal presentation. |
