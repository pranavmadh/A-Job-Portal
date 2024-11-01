const Search = () => {
    return(
        <div className="w-full flex justify-center">
            <input type="text" className="w-[50%] h-12 pl-3 border-2 bg-slate-50 rounded-3xl rounded-r-none" placeholder="Search" />
            <input type="text" placeholder="Location" className="bg-slate-50 rounded-3xl rounded-l-none border-2" />
        </div>
    )
}

export default Search