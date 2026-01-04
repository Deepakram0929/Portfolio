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
### Step 4: Create a Production Dockerfile (Vite + Node)
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
### Step 5: Run below npm command
```
npm install 
npm install aos
npm run build
```
### Step 6: Build Docker Image
```
docker build -t portfolio-app .
docker images
```
### Step 7: Run Docker Container
```
docker run -d -p 80:80 --name portfolio-container portfolio-app
docker ps
```
### Step 8: Access the Application in browser:
```
http://<your-ubuntu-ip>
```
### Step 9: Allow Firewall (If Using Cloud / EC2)/ on premise
```
sudo ufw allow 80
sudo ufw allow 443
sudo ufw reload
```
### Step 10: Rebuild & redeploy:
```
docker stop portfolio-container
docker rm portfolio-container

docker build -t portfolio-app .
docker run -d -p 80:80 --name portfolio-container portfolio-app
```
### Step 11: Create Docker Hub Repository
```
https://hub.docker.com
create repository eg: deepakram0929/portfolio-app
```
### Step 12: Login to Docker Hub from Server
```
doker login -u <username>
password
```
### Step 13: Once you see Login Succeeded, run below 
```
docker tag portfolio-app deepakram0929/portfolio-app:latest
docker push deepakram0929/portfolio-app:latest
```

