function NotFound() {
  return (
    <section className="flex items-center h-screen p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">페이지를 찾을 수 없습니다.</p>
          <p className="mt-4 mb-8 dark:text-gray-400">잘못된 주소를 입력했거나, 잘못된 요청을 보낸 것일 수 있습니다.</p>
          <a rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
            홈으로 돌아가기
          </a>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
