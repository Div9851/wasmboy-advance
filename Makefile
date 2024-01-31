.PHONY: build watch

BUILD=wasm-pack build emulator --target web

build:
	$(BUILD)

watch:
	find emulator/src/ | entr -r $(BUILD)
