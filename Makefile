.PHONY: all
all: check

.PHONY: lint
lint: lint-makefile lint-markdown lint-prose lint-workflows

.PHONY: lint-makefile
lint-makefile:
	checkmake Makefile

.PHONY: lint-markdown
lint-markdown:
	markdownlint-cli2

.PHONY: lint-prose
lint-prose:
	vale README.md

.PHONY: lint-workflows
lint-workflows:
	actionlint
	zizmor --offline .github/workflows

.PHONY: links
links:
	lychee README.md

.PHONY: test
test: links

.PHONY: check
check: lint

.PHONY: ci
ci: check

.PHONY: clean
clean:
	rm -rf .lycheecache
