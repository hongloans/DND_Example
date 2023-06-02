import { useNavigate } from "react-router-dom";
import TextButton from "../../components/common/TextButton";

function NotFound() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
      <div className="max-w-md text-center">
        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
          <span className="sr-only">Error</span>404
        </h2>
        <p className="text-2xl font-semibold md:text-3xl">페이지를 찾을 수 없습니다.</p>
        <p className="mt-4 mb-8 dark:text-gray-400">잘못된 주소를 입력했거나, 잘못된 요청을 보낸 것일 수 있습니다.</p>
        <TextButton title={"홈으로 돌아가기"} theme="error" onClick={handleClick} />
      </div>
    </div>
  );
}

export default NotFound;
