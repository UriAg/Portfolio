const Soon = () => {
  return (
      <div className='z-10 w-2/3 h-full flex justify-center items-center flex-col'>
        <h1 className='text-2xl'>No deberías estar acá</h1>
        <Image
          src="./images/comiste.png"
          width={300}
          height={300}
          priority={true}
          alt="Comiste como loco"
        />
        <h2 className='text-2xl'>Tomá por curios@</h2>
      </div>
  )
}

export default Soon