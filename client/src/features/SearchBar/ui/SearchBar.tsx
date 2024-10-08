import React, { FC, useState } from 'react'
import cl from './SearchBar.module.scss';
import { Input } from '@shared/ui/input';
import { Button } from '@shared/ui/button';

export const SearchBar: FC = (props) => {
    const [searchReq, setSearchReq] = useState<string>('')

    return (
        <div className={cl["search-bar"]}>
            <input
                type="text"
                placeholder="Search for posts..."
                id="search-input"
                name='search'
                required
                onChange={e => setSearchReq(e.target.value)}
                value={searchReq}
                className={cl['search-input']}
            >
            </input>
            <button type="button" className={cl["search-button"]}>Поиск</button>
        </div>
    )
}
