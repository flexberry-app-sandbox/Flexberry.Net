docker build --no-cache -f SQL\Dockerfile.PostgreSql -t net-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t net-java/app ../../..
