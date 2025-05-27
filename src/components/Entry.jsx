export default function Entry(props) {
    return (
        <>
            <div className='w-full bg-[#161E29] rounded-xl p-6 flex gap-6 items-center'>
                <div className='min-w-32 w-32 h-60 rounded-xl overflow-hidden flex-shrink-0'>
                    <img
                        src={props.img.src}
                        alt={props.img.alt}
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='h-full flex flex-col gap-4 justify-center'>

                    <div className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-[#4493FF]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <p className='text-white uppercase font-light'>{props.country}</p>

                        <a href={props.googleMapsLink} className='text-xs uppercase text-white px-3 py-1 bg-[#4493FF] rounded-2xl'>view on Google Maps</a>
                    </div>

                    <h1 className='font-semibold text-white text-2xl'>{props.title}</h1>
                    <p className='font-semibold text-[#89909A] text-base'>{props.dates}</p>
                    <p className='text-[#89909A] text-base leading-relaxed  xl:w-1/2'>{props.text}</p>
                </div>
            </div>
        </>
    )
}