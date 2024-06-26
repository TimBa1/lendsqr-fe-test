import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadTable = () => {
	return <Skeleton height={25} count={5} style={{ marginBottom: "8px" }} />;
};

export default LoadTable;
