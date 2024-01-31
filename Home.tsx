import React, { useContext } from "react";
import { EmulatorContext } from "./App";

export function Home(): React.JSX.Element {
  const emulator = useContext(EmulatorContext);
  const message = emulator == null ? "Emulator is not ready" : emulator.greet("wasmboy-advance");
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (emulator == null || e.target.files == null) return;
    const file = e.target.files[0];
    const rom = await file.arrayBuffer().then((buf) => new Uint8Array(buf));
    console.log(rom);
    // TODO: start emulation
  };
  return <>
    <div>
      <h1>{message}</h1>
      <input type="file" onChange={handleChange} />
    </div>
    <canvas width={480} height={320} style={{ border: "1px dashed black" }}></canvas>
  </>
}
