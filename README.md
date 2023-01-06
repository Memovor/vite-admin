# Vue 3 + TypeScript + Vite

## 规范目录结构

```text
vite-admin
├─ .vscode                # vscode推荐配置
├─ public                 # 静态资源文件（忽略打包）
├─ src
│  ├─ api                 # API 接口管理
│  ├─ assets              # 静态资源文件
│  ├─ common              # 通用类库目录
│  ├─ components          # 全局组件
│  ├─ layouts             # 框架布局
│  ├─ router              # 路由管理
│  ├─ store               # pinia store
│  ├─ style               # 全局样式
│  ├─ utils               # 工具库
│  ├─ views               # 项目所有页面
│  ├─ App.vue             # 入口页面
│  ├─ main.ts             # 入口文件
│  └─ env.d.ts            # vite 声明文件
├─ .env                   # vite 常用配置
├─ .env.development       # 开发环境配置
├─ .env.production        # 生产环境配置
├─ .env.test              # 测试环境配置
├─ .gitignore             # git 提交忽略
├─ commitlint.config.js   # git 提交规范配置
├─ index.html             # 入口 html
├─ package-lock.json      # 依赖包包版本锁
├─ package.json           # 依赖包管理
├─ README.md              # README 介绍
├─ tsconfig.json          # typescript 全局配置
└─ vite.config.ts         # vite 配置
```
