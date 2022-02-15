import { useLocation } from "react-router-dom";

const GooglePage = () => {
  const location = useLocation();
  console.log(location);
  return <div>12121</div>;
};
export default GooglePage;
