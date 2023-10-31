import { useState, useEffect } from "react";
import { List } from "./List";

export function Search(){
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const [listTv, setListTv]= useState([])
    
    useEffect(()=>{
    if (searchTerm.trim() !== "") {
      fetch('https://api.tvmaze.com/search/shows?q='+searchTerm)
      .then((response)=>response.json())
      .then((data)=>setListTv(data))
      console.log(listTv)
    }
    },[searchTerm])
    return (
    <>
    <section className="row">
    <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange}/>
    <List listTv={listTv} />
    </section>
    </>
    
    )
}