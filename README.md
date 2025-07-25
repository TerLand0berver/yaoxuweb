# 爻序科技官方网站

这是爻序科技的官方网站项目，使用 Next.js 和 Tailwind CSS 构建。

## 功能特性

- 公司服务介绍
- 成功案例展示
- 联系方式与在线咨询入口

## 本地开发

1.  **安装依赖**
    ```bash
    npm install
    ```

2.  **启动开发服务器**
    ```bash
    npm run dev
    ```
    应用将在 `http://localhost:3000` 上运行。

## 使用 Docker 部署

本项目已配置为使用 Docker 和 Docker Compose 进行快速部署。

1.  **构建并启动容器**
    在项目根目录下运行以下命令：
    ```bash
    docker-compose up -d
    ```

2.  **访问应用**
    应用将在主机的 `http://localhost:3000` 上可用。

3.  **停止容器**
    ```bash
    docker-compose down
    ```

## 技术栈

- [Next.js](https://nextjs.org/) - React 框架
- [React](https://reactjs.org/) - UI 库
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架