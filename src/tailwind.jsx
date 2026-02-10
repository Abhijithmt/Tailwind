import photo from './assets/my-photo.jpg'
function Tailwind(){
    return (
        <>
        <h1 className="text-6xl text-yellow-300 bg-black py-5 px-3 textal text-center font-bold font-mono font ">Tailwind studying Day1</h1>
         <div className="flex flex-row items-center justify-center mt-3 gap-10">
        <button className="px-8 py-5 bg-red-600 text-white rounded-[10px] hover:bg-black">Explore More</button>
        </div>
        <div className='px-2.5 py-2.5 border max-w-2xs shadow-2xl ml-5 flex flex-col items-center'>
            <img className='rounded-[10px] h-24 px-6 ' src={photo} alt="myphoto" />
            <h2 className='text-center'>ABHIJITH</h2>
            <p className='text-gray-500 font-mono text-xs'>fullstack developer</p>

        </div>
        </>
    )
}
export default Tailwind