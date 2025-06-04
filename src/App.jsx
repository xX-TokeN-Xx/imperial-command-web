import './index.css';

export default function App() {
  return (
    <main className="min-h-screen bg-empireBlack text-empireRed p-8 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-display drop-shadow-empireGlow mb-4 text-center tracking-widest">
        IMPERIUM RESURGIT
      </h1>
      <h2 className="text-2xl font-empire text-empireGlow uppercase tracking-wide">
        REVENANT.re:DUX // Command Interface
      </h2>

      <div className="mt-12 p-6 border border-empireGray rounded-2xl shadow-empireGlow bg-empireGray w-full max-w-xl">
        <p className="text-lg font-empire text-white">
          [SYSTEM UPLINK ESTABLISHED]  
          <br />
          Bitty Online. All nodes reporting green.
        </p>
      </div>
    </main>
  );
}
