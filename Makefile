dev:
	docker-compose up -d node
	docker-compose ps
	docker-compose logs -f node

build:
	docker-compose build

sh:
	docker-compose run node sh

down:
	docker-compose down

restart: down dev
