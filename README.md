# Git and GitHub Notes — FullStack Project

## 1. Project Folder Structure

My project contains separate Frontend and Backend folders inside one FullStack folder.

```text
FullStack/
├── .gitignore
├── Frontend/
│   ├── .gitignore
│   ├── node_modules/
│   ├── package.json
│   └── src/
└── Backend/
    ├── .gitignore
    ├── node_modules/
    ├── dist/
    ├── package.json
    └── server.js
```

## 2. Initialize Git

Run these commands from the FullStack folder.

```bash
git init
```

**Purpose:** Initializes a Git repository in the current folder.

```bash
git add .
```

**Purpose:** Stages new and modified files so they can be included in the next commit. Files ignored by `.gitignore` are normally excluded unless Git is already tracking them.

```bash
git status --short
```

**Purpose:** Displays a short summary of file changes and their Git status.

Common status codes:

- `A` — Added or staged as a new file.
- `M` — Modified file.
- `??` — Untracked file.
- `AD` — Added to the staging area, then deleted from the working directory.
- `AM` — Added to the staging area, then modified in the working directory.

## 3. Configure `.gitignore`

A `.gitignore` file tells Git which files and folders should not be tracked.

In the root `FullStack/.gitignore`, use:

```gitignore
**/node_modules/
```

**Purpose:** Ignores `node_modules` directories throughout the project, including those inside Frontend and Backend.

In `Backend/.gitignore`, use:

```gitignore
node_modules/
```

**Purpose:** Ignores the Backend's local dependencies.

The Frontend already has its own `.gitignore`, which contains:

```gitignore
node_modules
dist
dist-ssr
```

This excludes its dependencies and build output from Git.

## 4. Problem: Backend/node_modules Was Being Staged

### Why did this happen?

I ran `git add .` before correctly excluding Backend's `node_modules` directory. As a result, its files were staged.

Adding a rule to `.gitignore` does not automatically remove files that have already been staged or tracked.

### Step 1: Remove Backend/node_modules from Git's index

```bash
git rm -r --cached -- Backend/node_modules/
```

**Purpose:** Removes the specified directory from Git's index without deleting the actual files from my computer.

### Step 2: Stage the project again

```bash
git add .
```

**Purpose:** Stages the project files again, now applying the `.gitignore` rules.

### Step 3: Verify the result

```bash
git status --short
```

**Purpose:** Checks which files are staged or untracked.

Expected result: Backend/node_modules files should no longer appear in the output.

## 5. Useful Debugging Commands

### Check which ignore rule applies

```bash
git check-ignore -v Backend/node_modules/some-file.js
```

**Purpose:** Shows the `.gitignore` rule that excludes the specified file. Replace `some-file.js` with an actual file inside `node_modules`.

If the command returns no output, the file may not be ignored by the current rules, or the path may be incorrect.

### Display the root `.gitignore`

```bash
cat .gitignore
```

**Purpose:** Displays the contents of the root ignore file in Git Bash.

### Display Backend's `.gitignore`

```bash
cat Backend/.gitignore
```

**Purpose:** Displays the contents of Backend's ignore file.

### List tracked files inside node_modules

```bash
git ls-files | grep node_modules | head -5
```

**Purpose:** Displays up to five tracked file paths containing `node_modules`.

### Check tracked files without showing untracked files

```bash
git status --short --untracked-files=no
```

**Purpose:** Displays staged and tracked-file changes without listing untracked files.

## 6. Commit the Project

After checking that `node_modules` is excluded:

```bash
git commit -m "Initial commit"
```

**Purpose:** Saves the staged changes as a commit in the local Git repository.

A commit does not upload files to GitHub.

## 7. Push the Project to GitHub

First, create a new repository on GitHub.

Then connect the local repository to the remote repository:

```bash
git remote add origin YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with the actual repository URL.

Check the configured remote:

```bash
git remote -v
```

Push the local `master` branch:

```bash
git push -u origin master
```

**Purpose:** Uploads the committed project to GitHub and sets the upstream branch for future pushes.

If the local branch is named `main` instead of `master`, use `main` in the push command.

## 8. Important Git Rules to Remember

1. `git add .` stages files; it does not upload them to GitHub.
2. `git commit` saves staged changes locally.
3. `git push` uploads commits to the remote repository.
4. `.gitignore` does not automatically untrack files already staged or tracked.
5. Never upload `node_modules`; dependencies can be restored using `npm install`.
6. Keep `package.json` and `package-lock.json` in the repository.
7. Never commit passwords, API keys, or private credentials.
8. Keep the `dist` folder only when the deployment workflow requires the built frontend files to be committed.
