# Super Fantastic Dashboard
Super Fantastic Dashboard is a side project to learn [Vue](http://vuejs.org/)
and other JS best practices between @jacobarriola, @moltenkaizen and
@angelocordon.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Contribution / Git Workflow

When working on a task, create a submodule by checking out a new branch from the `master` branch.

``` bash
git checkout -b submodule/task-description-here master
```

There are four submodules we should be using: `feature`, `chore`, `hotfix` or
`spike`.

A `feature` submodule is a branch that incorporates a new feature into the
application - basically any new capabilities that the `master` branch isn't
currently doing. A `chore` submodule typically entails configurations, set ups
or clean ups. `hotfix`es and `spike`s are usually used less. A `hotfix` branch
is most frequently for small patches and a `spike` branch is for
experimentations.

Example:
``` bash
git checkout -b feature/add-task-model master

git checkout -b chore/setup-babel master
```

When working on a task, try to to only work on things related to that task. This
helps with keeping commit messages and histories clean. When a task is ready for
review, submit a Pull Request and notify others for critiques. After the code
review and when there is a team buy in, we may merge the Pull Request to the
main branch.