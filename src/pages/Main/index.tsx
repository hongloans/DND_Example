import { useNavigate } from "react-router-dom";
import TextButton from "../../components/common/TextButton";

function Main() {
  const navigate = useNavigate();
  const handleListClick = () => {
    navigate("/list");
  };
  const handleGridClick = () => {
    navigate("/grid");
  };
  return (
    <div className="w-full container flex flex-col items-center justify-center gap-10">
      <TextButton title="DND LIST" onClick={handleListClick} />
      <TextButton title="DND GRID" onClick={handleGridClick} />
    </div>
  );
}

export default Main;
