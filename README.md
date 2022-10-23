# INFS3208 Project - Work Roster App
This is a speedran project for INFS3208. It is a roster / availability sharing application.

# Project Architecture
## Database
MongoDB


## Backend
Nodejs Express Server. Backend is accessed through the reverse proxy set up by the Nginx server on the frontend.

## Frontend
Typescript ReactJS. Frontend container is a multi-stage build which runs an nginx server with the static compiled application files.


# Set Up / Installation
## Docker Swarm Usage
* Set up 3 nodes in a swarm


**Install docker-compose on manager:**
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`
sudo chmod +x /usr/local/bin/docker-compose`
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose`
```

**Create temporary image registery:**
```
docker service create --name registry --publish published=5000,target=5000 registry:2`
```

**Build the custom images:**
```
docker-compose -f docker-compose-swarm.yml build`
```

**Push custom app images to registery:**
```
docker-compose -f docker-compose-swarm.yml push`
```

**Create network:**
```
docker network create --scope=swarm --driver=overlay   --subnet=172.22.0.0/16 --gateway=172.22.0.1 app-network`
```
**Deploy:**
```
docker stack deploy -c docker-compose-swarm.yml workrosterapp
```
