

const SearchBar=({search , setSearch})=>{

    return(
        <input
        type="text"
        placeholder="Search by name or phone"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />
    )
}

export default SearchBar;