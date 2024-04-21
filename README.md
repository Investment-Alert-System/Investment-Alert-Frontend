# Telekom-Project-Launchpad
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
> [!NOTE]
> This project can be used to navigate to other services of Deutsche Telekom. 
> It is a simple project that uses React, TypeScript, Vite, and TailwindCSS.
# Local development
```shell
npm install
npm run dev
```

# Docker
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
[![Build and Push Docker image](https://github.com/Investment-Alert-System/Investment-Alert-Frontend/actions/workflows/build-and-push-docker.yaml/badge.svg?branch=main)](https://github.com/Investment-Alert-System/Investment-Alert-Frontend/actions/workflows/build-and-push-docker.yaml)
```shell
docker build -t investment-alert-frontend .
docker run -p 3000:3000 investment-alert-frontend
```

# Test project
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
[![Continuous Integration](https://github.com/Investment-Alert-System/Investment-Alert-Frontend/actions/workflows/run-jest-tests.yaml/badge.svg?branch=main)](https://github.com/Investment-Alert-System/Investment-Alert-Frontend/actions/workflows/run-jest-tests.yaml)
```shell
npm test
# or
npm run test:watch
```