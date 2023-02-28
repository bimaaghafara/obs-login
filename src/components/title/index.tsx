type TTitleProps = {
  size?: string;
};
export function Title({ size }: TTitleProps) {
  return (
    <div className={`w-max leading-none font-semibold	${size ?? "text-4xl"}`}>
      <div className="text-transparent bg-clip-text bg-gradient-to-t from-blue-200 to-blue-800">
        OBS REACTJS TEST
      </div>
      <div
        className="text-blue-200"
        style={{
          transform: "rotateX(180deg)",
          maskImage: "linear-gradient(transparent 55%, white 90%)",
          WebkitMaskImage: "linear-gradient(transparent 55%, white 90%)",
        }}
      >
        OBS REACTJS TEST
      </div>
    </div>
  );
}
