#!/bin/bash

# Function to generate conventional commit message
generate_commit_message() {
    local file="$1"
    local type=""
    local message=""

    case "$file" in
        app/lib/actions.ts)
            type="feat"
            message="update actions in lib"
            ;;
        app/page.tsx)
            type="feat"
            message="update main page component"
            ;;
        app/ui/invoices/buttons.tsx)
            type="feat"
            message="update invoice buttons component"
            ;;
        package.json|pnpm-lock.yaml)
            type="chore(deps)"
            message="update project dependencies"
            ;;
        app/ui/invoices/[id]/*)
            type="feat"
            message="add new invoice ID component"
            ;;
        commit.sh)
            type="chore"
            message="add commit script"
            ;;
        *)
            type="chore"
            message="update ${file##*/}"
            ;;
    esac

    echo "${type}: ${message}"
}

# Function to check if git repository
check_git_repo() {
    if ! git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
        echo "Error: Not a git repository. Please initialize git first."
        exit 1
    fi
}

# Function to commit and push changes
commit_and_push_changes() {
    check_git_repo

    # Modified files
    modified_files=(
        "app/lib/actions.ts"
        "app/page.tsx"
        "app/ui/invoices/buttons.tsx"
        "package.json"
        "pnpm-lock.yaml"
    )

    # Untracked files
    untracked_files=(
        "app/ui/invoices/[id]"
        "commit.sh"
    )

    # Process modified files
    for file in "${modified_files[@]}"; do
        if [ -f "$file" ] || [ -d "$file" ]; then
            commit_message=$(generate_commit_message "$file")
            git add "$file"
            git commit -m "$commit_message"
            echo "Committed modified file: $file with message - $commit_message"
        fi
    done

    # Process untracked files
    for file in "${untracked_files[@]}"; do
        if [ -f "$file" ] || [ -d "$file" ]; then
            commit_message=$(generate_commit_message "$file")
            git add "$file"
            git commit -m "$commit_message"
            echo "Committed new file: $file with message - $commit_message"
        else
            echo "Warning: Untracked file $file does not exist"
        fi
    done

    # Push all changes
    git push origin main
    echo "All changes have been committed and pushed successfully!"
}

# Run the function
commit_and_push_changes