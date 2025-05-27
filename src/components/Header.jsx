export default function Header() {
    return (
        <header className='w-full h-24 bg-[#161E29] flex justify-center items-center mb-10 p-4 xl:p-0'>
            <div className='w-full max-w-7xl p-4 flex items-center justify-between'>

                {/* logo icon */}
                <div className='logo flex justify-center items-center gap-1 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        className="size-6 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                    </svg>

                    <h2 className='text-white font-bold text-xl'>Journal<span className='font-normal'>Travel</span></h2>
                </div>

                <ul className='flex gap-4'>
                    <li><a href="" className='font-semibold text-white'>Home</a></li>
                    <li><a href="" className='font-semibold text-white'>Journal</a></li>
                    <li><a href="" className='font-semibold text-white'>Contact</a></li>

                    {/* call to action button */}
                    <li><a href="" className='p-3 px-10 bg-[#4493FF] rounded-2xl font-semibold text-white'>Contact</a></li>
                </ul>
            </div>
        </header>
    )
}