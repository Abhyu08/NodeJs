#### NodeJs
NodeJs features with practical codes 

#### GitHub:
###### How to create a new branch on GitHub // Commit & Push : https://www.youtube.com/watch?v=Lf3DYRvCPFo
###### note: add (.gitignore) file to avoid cp of dependencies to repository

```
git init //to create git environment for that folder
git branch -c share_npm	//create new share_npm branch
git branch  //show branches with active status
git checkout share_npm //swithch to share_npm from main
git push origin head //head points to current pointing branch

//To get from Repository
git clone "https://github.com/Abhyu08/NodeJs/" //will get the master branch of that repository

git remote -v
git remote add origin "https://github.com/Abhyu08/NodeJs/" //if no remote's present for the same
git clone --branch share-npm "https://github.com/Abhyu08/NodeJs/" //git clone branch repo instead of master repo

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
