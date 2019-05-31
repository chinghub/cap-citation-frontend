.DEFAULT_GOAL=build

node_modules: package.json
	npm i


build: node_modules
	npm run build

deploy:
	aws s3 sync build/ s3://cap-citation-app --acl public-read --profile cap

clean:
	rm -rf build

cleanall: clean
	rm -rf node_modules

load:
	open http://cap-citation-app.s3-website-us-west-2.amazonaws.com/
