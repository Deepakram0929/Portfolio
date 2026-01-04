### Step 1: Tech Stack
```
Frontend: HTML, CSS, JavaScript
Build Tool: Vite
Web Server: Nginx
Containerization: Docker
OS: Ubuntu Linux
Cloud (Optional): AWS EC2
```

### Step 2: Project Structure
```
Portfolio/
├── Dockerfile
├── index.html
├── vite.config.js
├── package.json
├── package-lock.json
├── public/
├── css/
├── js/
├── dist/                # Production build output
└── README.md
```
### Step 3: launch Ec2 instance: & Install below 
```
sudo apt update
sudo apt install nodejs npm -y
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker

sudo usermod -aG docker $USER
newgrp docker
```
### Step 4: 
```
git clone https://github.com/Deepakram0929/Portfolio.git
cd Portfolio

//Create a Production Dockerfile (Vite + Node)

nano Dockerfile

# Step 1: Build stage
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# Step 2: Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

Save & exit (CTRL + O, ENTER, CTRL + X).

```


