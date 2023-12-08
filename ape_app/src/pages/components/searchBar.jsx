import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";

const SearchBar = () => {
    const router = useRouter()
    const [query, setQuery] = useState('')

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            router.push(`/eventos/search/${encodeURIComponent(query)}`)
        }
    }

    return (
        <input
            className="m-3"
            type="text"
            placeholder="Buscar eventos por nombre"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress}
        />
    )
}

export default SearchBar;