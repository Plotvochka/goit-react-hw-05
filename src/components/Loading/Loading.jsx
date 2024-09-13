import { ThreeDots } from "react-loader-spinner";

export default function Loading() {
  const wrapperStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <div>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="threeDots-loading"
        wrapperStyle={wrapperStyle}
        wrapperClass=""
      />
    </div>
  );
}
