import React, { FC } from 'react';
import { PostsList } from "@widgets/postsList";
import { SearchBar } from '@features/SearchBar/ui/SearchBar';

export const Main: FC = () => {
    return (
        <>
            <section className="main__section">
                <div className="main__container container">
                    <SearchBar />
                    <PostsList />
                </div>
            </section>
        </>
    )
}
