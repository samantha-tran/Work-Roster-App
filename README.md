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


**SSH into manager node and install docker-compose on manager:**
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

**Create temporary image registery:**
```
docker service create --name registry --publish published=5000,target=5000 registry:2
```

**Build the custom images:**
```
docker-compose -f docker-compose-swarm.yml build
```

**Push custom app images to registery:**
```
docker-compose -f docker-compose-swarm.yml push
```

**Create network:**
```
docker network create --scope=swarm --driver=overlay   --subnet=172.22.0.0/16 --gateway=172.22.0.1 app-network
```
**Deploy:**
```
docker stack deploy --compose-file docker-compose-swarm.yml workrosterapp
```

## Initalising swarm
On manager node: `docker swarm init --advertise-addr $(hostname -i)`
On worker nodes: 
`docker swarm join --token [token from above command] [external IP]:2377`
`docker swarm join --token SWMTKN-1-63pgr6yunrqs0l3gfjkgfscpckwtwncildnp7q1tz4pt8j043e-cn9tq6n4fdd5ukavixdcpxpk1 34.172.177.87:2377`


## Exiting swarm
`docker stack rm workrosterapp`
`docker service rm registry`
`docker network rm app-network`
`docker swarm leave --force` 

## Demo
1. Start instances
2. SSH into manager node
3. cd into directory with docker-compose-swarm.yml file and deploy stack `docker stack deploy --compose-file docker-compose-swarm.yml workrosterapp`
4. view services `docker stack ps workrosterapp -f desired-state=Running`. The three services are evenly distributed amongst the 3 nodes. 
5. `docker service ls` Currently there should only be 1 replica of each service.
5. connect to any node to access the website
6. Scale services `docker service scale workrosterapp_client=3` `docker stack ps workrosterapp -f desired-state=Running`
7. Make node only available as manager and not for assigment `docker node update --availability drain manager`
