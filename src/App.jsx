export function H1() {
    const handleClick = () => {
      alert("hello");
    };
  return (
    <>
      <header className="bg-white text-black flex text-xl font-sans shadow-2xl fixed w-dvw max-[700px]:text-[15px]">
        <h1 className="flex-1 mx-4 my-4 font-bold ">My project</h1>
        <ul className="justify-between flex justify-around mx-4 my-4">
          <li className="mx-4 mx-[600px]: text-[15px]">
            <a href="">Proyects</a>
          </li>
          <li className="mx-4 mx-[600px]: text-[15px]">
            <a href="">Information</a>
          </li>
          <li className="mx-4 mx-[600px]: text-[15px]">
            <a href="">Contact us</a>
          </li>
          <li className="mx-4 mx-[600px]: text-[15px]">
            <a href="">Jobs</a>
          </li>
        </ul>
        <button
          onClick={handleClick}
          className="mx-8 my-3 p-1 bg-black text-white rounded h-10 font-bold mx-[600px]: text-[15px]"
        >
          Click me
        </button>
      </header>
    </>
  );
}
