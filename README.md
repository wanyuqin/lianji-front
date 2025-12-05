# lianji-front

这是一个基于 Taro 框架开发的微信小程序项目前端。

## 技术栈

- **框架**: Taro 4.1.9
- **UI 框架**: React 18
- **语言**: TypeScript
- **样式**: Sass
- **构建工具**: Webpack 5
- **包管理器**: npm

## 目录结构

```
├── src/                    # 源代码目录
│   ├── pages/             # 页面文件
│   ├── app.ts             # 应用入口文件
│   ├── app.config.ts      # 应用配置
│   └── app.scss           # 全局样式
├── config/                # 编译配置
│   ├── index.ts           # 默认配置
│   ├── dev.ts             # 开发环境配置
│   └── prod.ts            # 生产环境配置
├── types/                 # TypeScript 类型定义
├── .husky/                # Git hooks
└── package.json           # 项目依赖配置
```

## 开始使用

### 安装依赖

```bash
npm install
```

### 开发模式

微信小程序开发模式：

```bash
npm run dev:weapp
```

其他平台开发模式：

- 支付宝小程序: `npm run dev:alipay`
- 百度小程序: `npm run dev:swan`
- 字节跳动小程序: `npm run dev:tt`
- QQ 小程序: `npm run dev:qq`
- 京东小程序: `npm run dev:jd`
- H5: `npm run dev:h5`

### 生产构建

微信小程序生产构建：

```bash
npm run build:weapp
```

其他平台构建命令：

- 支付宝小程序: `npm run build:alipay`
- 百度小程序: `npm run build:swan`
- 字节跳动小程序: `npm run build:tt`
- QQ 小程序: `npm run build:qq`
- 京东小程序: `npm run build:jd`
- H5: `npm run build:h5`

## 开发指南

### 创建新页面

使用 Taro CLI 创建新页面：

```bash
npm run new
```

### 代码规范

项目已配置：

- ESLint - JavaScript/TypeScript 代码检查
- Stylelint - 样式代码检查
- Commitlint - Git 提交信息规范
- Husky - Git hooks 自动化

## 微信开发者工具配置

1. 下载并安装[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. 打开微信开发者工具，导入项目
3. 项目目录选择：`dist` 文件夹（需要先运行 `npm run dev:weapp` 或 `npm run build:weapp`）
4. AppID：使用测试号或者自己的小程序 AppID

## 更多信息

- [Taro 官方文档](https://taro-docs.jd.com/)
- [微信小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)