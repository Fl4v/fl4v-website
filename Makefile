.PHONY: build

build:
	sam build

run:
	sam local start-api
