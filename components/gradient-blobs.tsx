export function GradientBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Purple blob - top left */}
      <div
        className="blob absolute w-[600px] h-[600px] -top-[10%] -left-[10%]"
        style={{
          background:
            "radial-gradient(circle, rgba(107, 63, 160, 0.4) 0%, rgba(107, 63, 160, 0.2) 35%, transparent 70%)",
          filter: "blur(60px)",
          animation: "float-one 8s ease-in-out infinite alternate",
        }}
      />

      {/* Blue blob - top right */}
      <div
        className="blob absolute w-[500px] h-[500px] top-[20%] -right-[5%]"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 163, 212, 0.35) 0%, rgba(59, 163, 212, 0.18) 40%, transparent 70%)",
          filter: "blur(70px)",
          animation: "float-two 10s ease-in-out infinite alternate",
        }}
      />

      {/* Magenta blob - bottom left */}
      <div
        className="blob absolute w-[450px] h-[450px] bottom-[10%] left-[15%]"
        style={{
          background:
            "radial-gradient(circle, rgba(214, 77, 142, 0.3) 0%, rgba(214, 77, 142, 0.15) 40%, transparent 70%)",
          filter: "blur(65px)",
          animation: "float-three 9s ease-in-out infinite alternate",
        }}
      />

      {/* Coral blob - center */}
      <div
        className="blob absolute w-[400px] h-[400px] top-1/2 left-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(233, 75, 90, 0.25) 0%, rgba(233, 75, 90, 0.12) 40%, transparent 70%)",
          filter: "blur(80px)",
          animation: "pulse-expand 7s ease-in-out infinite",
        }}
      />
    </div>
  )
}
