# what

Lerna 是一个管理工具，用于管理包含多个软件包（package）的 JavaScript 项目。

## why

我的玩具项目[wiichat](https://github.com/ShoneSingLone/wiichat-repo)想import自己随时可以修改的ui库

## how

[How to Use Lerna](https://www.youtube.com/watch?v=p6qoJ4apCjA)
[Commitizen](https://www.jianshu.com/p/d264f88d13a4)
[用Lerna管理多包JS项目](https://zhuanlan.zhihu.com/p/33858131)
[Lerna —— Monorepo 的最佳实践](https://cloud.tencent.com/developer/article/1467217)

## [入门](https://lernajs.bootcss.com/#getting-started)

```js
//将 Lerna 安装到全局环境中
npm install --global lerna
//创建一个新的 git 代码仓库：
git init lerna-repo && cd lerna-repo
//将上述仓库转变为一个 Lerna 仓库：
lerna init
```

- `lerna run`类似`npm run`针对package.json里的script。如果同名就会调用执行。
- `script`中使用`--scope=@ventose/demo`可以只针对`scope`设定的lib。`--scope={@ventose/demo,@ventose/wiichat}`支持多个lib
![image.png](https://upload-images.jianshu.io/upload_images/2333173-12ccd42262faab5e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- `npmClient`指定npm，国内可能比较有用，网络问题嘛......
- `lerna version`发版本打标签直接送上remote/origin
- `init -y init`注意`main`对应的文件
- `lerna add @ventose/ui --scope=@ventose/wiichat` 类似 `yarn add`动态链接lib，不走仓库
- `lerna bootstrap`类似 `npm i`

```js
export const routes: Array<RouteRecordRaw> = [
      ...
  {
    path: '/ui',
    name: 'ui',
    component: () => import(/* webpackChunkName: "wiichatui" */ "@ventose/ui")
  }
]
```
