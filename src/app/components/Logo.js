function Logo({size="normal", tooltip=true, tooltipText="", transition=true, icon=""}) {
  return (
    <div className={`${size === "normal" ? "w-28 h-28" : size === "small" ? "w-8 h-8" : "w-14 h-14"} group relative flex flex-col justify-center items-center bg-slate-300/[.10] ${transition && "hover:bg-slate-400/[.05] transition-colors"} rounded-lg`}>
        <span className={`${icon} ${size === "normal" ? "w-12 h-12" : size === "small" ? "w-5 h-5" : "w-9 h-9"} `} role="img" aria-hidden="true"></span>
        {
            tooltip &&
            <p className='opacity-0 bottom-0 absolute group-hover:opacity-100 text-xs transition-all'>{tooltipText}</p>
        }
    </div> 
  )
}

export default Logo