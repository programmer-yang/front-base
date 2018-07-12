## Git

我们的代码托管在`code.aliyun.com`上，它的使用方式基本和`github`一致，所以我们有必要学一下`git`的基础使用。

### 命令行篇

- clone
- add
- commit
- push
- pull

#### clone

```bash
git clone git@code.aliyun.com:xxxx/xxx.git
```

`clone`一个库到本地（通常当给你分派任务后，会告诉你  一个当前项目的 git 地址。所以你做的的第一件事就是把服务器上的代码`clone`到本地）

> 我们将本地 git 环境分为三个部分 ：工作目录、暂存区、本地仓库或者叫 HEAD 区

#### add

```bash
git add *
```

把你的修改内容提交到暂存区，`*` 代表所有的修改，你也可以只  添加某个文件: `git add index.js`

#### commit

```bash
git commit -m "代码提交信息"
```

把你的修改内容提交到本地仓库

#### push

```bash
git push origin master
```

 把本地仓库的内容（就是你 commit 的内容）提交到远程仓库

> master 代表你提交的远程库的分支， 可以修改为任意你需要提交到的分支

> `git remote add origin <server>` 此命令可以修改本地仓库对应的远程仓库地址

#### pull

```bash
git pull origin master
```

拉去  远程库的 master 分支到本地

> 大多数情况下，这你是明天早上上班的时候做的第一件事

#### 其他

还有关于`branch`、`tag`、`log`等技巧，请自己在参考资料中学习

---

### 参考资料

http://www.ruanyifeng.com/blog/2014/06/git_remote.html  
http://www.runoob.com/git/git-tutorial.html
