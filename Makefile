dev:
	docker-compose up -d node
	docker-compose ps
	docker-compose logs -f node

sh:
	docker-compose run node sh

down:
	docker-compose down
