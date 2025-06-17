docker container prune -f
docker image prune -a -f
docker volume prune -f
docker network prune -f
docker system prune -a -f --volumes


docker compose up -d 
docker compose down -v


docker compose build <service-name>
