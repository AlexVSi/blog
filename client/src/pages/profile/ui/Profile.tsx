import { useContext, useState } from 'react';
import cl from './Profile.module.scss';
import { Context } from 'main';
import { observer } from 'mobx-react-lite';
import { PostsList } from '@widgets/postsList';
import { Button } from '@shared/ui/button';
import { Modal } from '@features/modal';
import { PostForm } from '@widgets/postForm';
import { ButtonVariant } from '@shared/ui/button/Button';

export const Profile = observer(() => {
    const [newPostModal, setNewPostModal] = useState<boolean>(false)
    const [postCreatedModal, setPostCreatedModal] = useState<boolean>(false)
    const { authStore } = useContext(Context)
    if (authStore.isLoading) {
        return <h2>Загрузка...</h2>
    }
    if (!authStore.isAuth) {
        return <h1>Авторизуйтесь</h1>
    }

    function createPost() {
        setNewPostModal(!newPostModal)
        setPostCreatedModal(!postCreatedModal)
    }

    function cancle() {
        setNewPostModal(false)
    }

    return (
        <>
            <div className="profile__section">
                <div className="profile__container container">
                    <h1>Личный кабинет</h1>
                    <h2>Добро пожаловать, {authStore.user.firstname}!</h2>
                    <Button onClick={() => setNewPostModal(true)}>Новый пост</Button>
                    <Modal visible={newPostModal} setVisible={setNewPostModal}>
                        <PostForm createHandler={createPost} cancleHendler={cancle} />
                    </Modal>
                    <Modal visible={postCreatedModal} setVisible={setPostCreatedModal}>
                        <div className={cl['modal__new-post-send']}>
                            <h2>Пост создан!</h2>
                            <Button onClick={() => createPost()}>Новый пост</Button>
                            <Button style={ButtonVariant.Secondary} onClick={() => setPostCreatedModal(false)}>Вернуться в профиль</Button>
                        </div>
                    </Modal>
                    <PostsList email={authStore.user.email} />
                </div>
            </div>
        </>
    )
})
