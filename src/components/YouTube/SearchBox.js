import React, {useState} from "react";
const SearchBox = ({searchHandler}) => {
    let [searchValue, setSearchValue] = useState('')
    function onChange(event){
        setSearchValue(event.target.value)
    }

    function onSubmit(event){
        event.preventDefault()
        searchHandler(searchValue)
        setSearchValue('')
    }

    return(
     <form onSubmit={onSubmit} className="search_form">
        <div className="search_block">
            <label htmlFor="search">Поиск...</label>
            <input
                type="search"
                name="search"
                className="form-control mr-sm-2"
                placeholder='Введите название видео'
                aria-label="Search"
                value={searchValue}
                onChange={onChange}/>
        </div>
    </form>)
}


export default SearchBox