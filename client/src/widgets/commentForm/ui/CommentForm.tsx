import React, { FC } from 'react'
import cl from './CommentForm.module.scss';
import { Button } from '@shared/ui/button';
import { Textarea } from '@shared/ui/textarea';

export const CommentForm: FC = (props) => {
    return (
        <form className='form'>
            <p>Оставить комментарий:</p>
            <Textarea></Textarea>
            <Button onClick={() => console.log()}>Опубликовать</Button>
        </form>
    )
}
