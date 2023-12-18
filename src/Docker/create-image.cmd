docker build --no-cache -f SQL\Dockerfile.PostgreSql -t net/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t net/app ../..
