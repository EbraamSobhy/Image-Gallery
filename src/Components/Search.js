import React, { useState } from 'react';


const SearchFilter = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    
    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        
        const filtered = data.filter(item =>
            item.toLowerCase().includes(term.toLowerCase())
        );
            
        setFilteredData(filtered);
    };

    return (
        <div>
        
        <center>
        <label class="relative block">
    <span class="sr-only">Search</span>
    <span class="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
    </span>
    <input value={searchTerm} onChange={handleSearch} class="placeholder:italic placeholder:text-black block  bg-sky-600 w-60 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for Pictures..." type="text" name="search"/>
</label>
</center>
            
            <ul>
                {filteredData.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

function Search() {
    const data = [''];

    return (
        <div>
            <h1>Fruit List</h1>
            <SearchFilter data={data} />
            
        </div>
    );
}

export default Search;

