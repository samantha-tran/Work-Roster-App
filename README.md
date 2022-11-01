# INFS3208 Project - Work Roster App
This is a speedran project for INFS3208. It is a roster / availability sharing application.

### Login
<img src="https://github.com/samantha-tran/Work-Roster-App/blob/main/readme-assets/login.png"></img>
### Register
<img src="https://github.com/samantha-tran/Work-Roster-App/blob/main/readme-assets/register.png"></img>
### Create a shift
<img src="https://github.com/samantha-tran/Work-Roster-App/blob/main/readme-assets/create.png"></img>
### Day View
<img src="https://github.com/samantha-tran/Work-Roster-App/blob/main/readme-assets/day.png"></img>
### Week View
<img src="https://github.com/samantha-tran/Work-Roster-App/blob/main/readme-assets/week.png"></img>
### Month View
<img src="https://github.com/samantha-tran/Work-Roster-App/blob/main/readme-assets/month.png"></img>
### Agenda View
<img src="https://github.com/samantha-tran/Work-Roster-App/blob/main/readme-assets/agenda.png"></img>


## Project Architecture
* Database: MongoDB 
* Backend: Nodejs Express Server. Backend is accessed through the reverse proxy set up by the Nginx server on the frontend.
* Frontend: Typescript ReactJS. Frontend container is a multi-stage build which runs an nginx server with the static compiled application files.


## Set Up / Installation

### Docker Swarm Usage
Set up 3 nodes in a swarm


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

**Initalising swarm**
On manager node:\
`docker swarm init --advertise-addr $(hostname -i)`\
On worker nodes: \
`docker swarm join --token [token from above command] [external IP]:2377`

**Exiting swarm**
```
docker stack rm workrosterapp
docker service rm registry
docker network rm app-network
docker swarm leave --force
```

### Docker-compose Usage
**Building images**
```
cd Work-Roster-App
docker-compose build
```

**Starting containers**
```
docker-compose up
```

**Stoping containers**
```
docker-compose down -v
```
