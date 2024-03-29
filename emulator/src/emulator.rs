use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Emulator {}

#[wasm_bindgen]
impl Emulator {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        Self {}
    }

    pub fn greet(&self, name: &str) -> String {
        format!("Hello, {}!", name)
    }
}
