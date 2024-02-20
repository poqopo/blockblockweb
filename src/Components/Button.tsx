interface Submit {
  onClick(): void;
}

function Submit({ onClick }: Submit) {
  return (
    <button
      className="w-full h-[63px] bg-[#13BD7E] rounded-xl text-white text-[22px]"
      onClick={onClick}
      type="button"
    >
      
    </button>
  );
}

export default Submit;