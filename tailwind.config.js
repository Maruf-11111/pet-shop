module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div>
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div>
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div>
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":${counter}}}></span>
    </span>
    sec
  </div>
</div>