# How to rename the default branch on Github

1. Renaming the local `master` branch, based on the process described by *Linuxize (2020)*.

- Checkout master:
```
$git checkout master
```

- Rename master:
```
$git branch -m main
```

- Push the new name, in this case `main`:
```
$git push origin -u main
```

2. Setting the new branch name as the default, you will need permissions:
- For Github:
[Go to Settings, Branches, and change the default branch](https://docs.github.com/en/github/administering-a-repository/setting-the-default-branch).

A warning message will be shown with the legend:
"Changing your default branch can have unintended consequences that can affect new pull requests and clones."
Do the update at your own risk. I did the update:
![GitHub confirming the default branch has switched from master to main](https://raw.githubusercontent.com/rcgonzalezf/rcgonzalezf.github.io/main/blog/assets/GitHub-default-branch.png)


3. Delete the `master` remote branch:

```
$git push origin --delete master
```

Easy right?

## References
- Linuxize. (2020, February 18). *How To Rename a Local and Remote Git Branch*. Retrieved from https://linuxize.com/post/how-to-rename-local-and-remote-git-branch/.
- Wouter, J. (2012, December 26). *Deleting remote master branch, refused due to being current branch, answer*. Retrieved from https://stackoverflow.com/a/14041409/799162. 
