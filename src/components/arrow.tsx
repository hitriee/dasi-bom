const Arrow = ({ light = false }: { light?: boolean }) => (
  <span
    className={`text-[13px] ${light ? "text-white" : "text-[#2c241f]"}`}
    aria-hidden="true"
  >
    →
  </span>
);

export default Arrow;
