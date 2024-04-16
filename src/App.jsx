import "./App.css";
import Scene from "./Scene";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";

function Title3D() {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen">
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          preserveDrawingBuffer: true,
        }}
        camera={{
          fov: 55,
          near: 0.1,
          far: 200,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

function HeaderComponent() {
  return (
 <>
 </>
  );
}

function Credits() {
  return (
 <>
 </>
  );
}

function Aside() {
  return (
    <div className="absolute top-1/2 right-16 text-lg">
      <p className="mb-4 opacity-50">i'aM</p>
      <p>
        sTiLL <br />
        working on your project
      </p>
      <p className="mt-40 opacity-50">LAUNCH IN 2024</p>
      <p className="mt-40 opacity-50">5:26 pm
</p>
      <p className="mt-40 opacity-50">Wednesday, 17 April 2024 (GMT+10)
</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Leva
        collapsed={false}
        flat={true}
        hidden
        theme={{
          sizes: {
            titleBarHeight: "28px",
          },
          fontSizes: {
            root: "10px",
          },
        }}
      />
      <main className="font-sans">
        <HeaderComponent />
        <Title3D />
        <Aside />
        <Credits />
      </main>
    </>
  );
}

export default App;
