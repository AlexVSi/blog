import React, { FC } from 'react'
import cl from './CommentForm.module.scss';
import { Button } from '@shared/ui/button';

export const CommentForm: FC = (props) => {
    return (
        <form className='form'>
            <p>Оставить комментарий:</p>
            <textarea>

            </textarea>
            <Button onClick={() => console.log()}>Опубликовать</Button>
        </form>
    )
}
