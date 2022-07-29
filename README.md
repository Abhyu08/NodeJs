
#### NodeJs
NodeJs features with practical codes 

#### GitHub:
###### How to create a new branch on GitHub // Commit & Push : https://www.youtube.com/watch?v=Lf3DYRvCPFo
###### note: add (.gitignore) file to avoid cp of dependencies to repository

```
###### Login in ur acc in GITBASH
git config --global user.name "Abhyu08"
git config --global user.email "emailD@gmail.com"
git config --global user.password "password"
git config --global credential.helper store
git config --list --show-origin

git init //to create git environment for that folder
git branch -c share_npm	//create new share_npm branch
git branch  //show branches with active status
git checkout share_npm //swithch to share_npm from main
git push origin head //head points to current pointing branch

//To get from Repository
git clone "https://github.com/Abhyu08/NodeJs" //will get the master branch of that repository

git remote -v
git remote add origin "https://github.com/Abhyu08/NodeJs" //if no remote's present for the same
git remote set-url origin "https://github.com/Abhyu08/NodeJs"  //if we want to change origin remote url
git clone --branch share-npm "https://github.com/Abhyu08/NodeJs" //git clone branch repo instead of master repo

```
Top Git Commands : 
```
1. Git clone : git clone <https://name-of-the-repository-link>
```

2.Git branch : 
```
git branch <branch-name> : This command will create a branch locally. 

To push the new branch into the remote repository:
git push -u <remote> <branch-name>

To View branch: 
git branch or git branch --list

delete :
git branch -d <branch-name>
```

3. Git checkout
```
git checkout for switching from one branch to another : 
cmd : git checkout <name-of-your-branch>

shortcut command that allows you to create and switch to a branch at the same time:
git checkout -b <name-of-your-branch>

```

4. Git status
```
git status : gives us all the necessary information about the current branch

```

5. Git add
```
git add command to include the changes of a file(s) into our next commit.
git add <file_name>/*(for all)
```

6. Git commit
```
Git commit is like setting a checkpoint in the development process 
you can go back to later if needed.

git commit -m "commit message"
```

7. Git push
```
send your changes to the remote server/repository

git push <remote> <branch-name>

if your branch is newly created, then you also need to upload to the branch with the following command:
git push --set-upstream <remote> <name-of-your-branch>
or
git push -u origin <branch_name>

```

8. Git pull
```
The git pull command is used to get updates from the remote repo
This command is a combination of git fetch and git merge.
means that : when we use git pull, it gets the updates from remote repository (git fetch) 
and immediately applies the latest changes in your local (git merge).

git pull <remote>
```

9. Git revert
```
Sometimes we need to undo the changes that we've made.
A safer way that we can undo our commits is by using git revert. 
To see our commit history, first we need to use 

git log -- oneline  --> hashcode(3321844) visible of our commit
git revert 3321844

you will see a screen - just press shift + q to exit.
The Git revert command will undo the given commit, 
but will create a new commit without deleting the older one.
The advantage of using git revert is that it doesn't touch the commit history.

```

10. Git merge
```
When you've completed development in your branch and everything works fine,
the final step is merging the branch with the parent branch (dev or master).
This is done with the git merge command.


First you should switch to the dev/main branch:
git checkout dev/main

Before merging, you should update your local dev/main branch:
git fetch

Finally, you can merge your feature branch into dev/main:
git merge <branch-name>

Hint: Make sure your dev branch has the latest version before you merge your branches,
otherwise you may face conflicts or other unwanted problems.

```

```
  These are common Git commands used in various situations:
  
  start a working area (see also: git help tutorial)
     clone             Clone a repository into a new directory
     init              Create an empty Git repository or reinitialize an existing one
  
  work on the current change (see also: git help everyday)
     add               Add file contents to the index
     mv                Move or rename a file, a directory, or a symlink
     restore           Restore working tree files
     rm                Remove files from the working tree and from the index
     sparse-checkout   Initialize and modify the sparse-checkout
  
  examine the history and state (see also: git help revisions)
     bisect            Use binary search to find the commit that introduced a bug    
     diff              Show changes between commits, commit and working tree, etc    
     grep              Print lines matching a pattern
     log               Show commit logs
     show              Show various types of objects
     status            Show the working tree status
  
  grow, mark and tweak your common history
     branch            List, create, or delete branches
     commit            Record changes to the repository
     merge             Join two or more development histories together
     rebase            Reapply commits on top of another base tip
     reset             Reset current HEAD to the specified state
     switch            Switch branches
     tag               Create, list, delete or verify a tag object signed with GPG
  
  collaborate (see also: git help workflows)
     fetch             Download objects and refs from another repository
     pull              Fetch from and integrate with another repository or a local branch
     push              Update remote refs along with associated objects
     
```
