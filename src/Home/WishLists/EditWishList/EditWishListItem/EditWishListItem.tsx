import React, { useContext, useState } from 'react';
import './EditWishListItem.scss';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CircularProgress,
    TextField,
} from '@mui/material';
import { TokenContext } from '../../../../contexts/TokenContext';
import {
    useDeleteWishListItemMutation,
    useInsertWishListItemMutation,
    useUpdateWishListItemMutation,
} from '../../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../../GraphqlClient';

export type EditWishListItemProps = {
    isNewItem?: boolean;
    setIsNewItem?: (isNewItem: boolean) => void;
    itemId?: number;
    wishListId: number;
    initialTitle: string;
    initialDescription: string | null | undefined;
    initialUrl: string | null | undefined;
    refetchWishListItems: () => void;
};

export const EditWishListItem: React.FunctionComponent<
    EditWishListItemProps
> = ({
    isNewItem,
    setIsNewItem,
    itemId,
    wishListId,
    initialTitle,
    initialDescription,
    initialUrl,
    refetchWishListItems,
}) => {
    const { token } = useContext(TokenContext);

    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState(initialDescription);
    const [url, setUrl] = useState(initialUrl);

    const insertWishListItem = useInsertWishListItemMutation(
        GraphqlClientWithAuth(token),
        {
            onSuccess: () => {
                refetchWishListItems();
                setTitle('');
                setDescription('');
                setUrl('');
                if (setIsNewItem) setIsNewItem(false);
            },
        },
    );

    const updateWishListItem = useUpdateWishListItemMutation(
        GraphqlClientWithAuth(token),
        {
            onSuccess: () => {
                refetchWishListItems();
            },
        },
    );

    const deleteWishListItem = useDeleteWishListItemMutation(
        GraphqlClientWithAuth(token),
        {
            onSuccess: () => {
                refetchWishListItems();
            },
        },
    );

    return (
        <div className={`EditWishListItem`}>
            <div className={`${isNewItem ? 'new-item' : ''}`}>
                <Card>
                    <CardContent>
                        <TextField
                            id={`item-${itemId}-title`}
                            label={'Title'}
                            variant={'standard'}
                            fullWidth={true}
                            size={'small'}
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            required={true}
                        />
                        <TextField
                            id={`item-${itemId}-url`}
                            label={'Url'}
                            variant={'standard'}
                            fullWidth={true}
                            size={'small'}
                            value={url}
                            onChange={(event) => setUrl(event.target.value)}
                        />
                        <TextField
                            id={`item-${itemId}-description`}
                            label={'Description'}
                            fullWidth={true}
                            variant={'standard'}
                            size={'small'}
                            value={description}
                            multiline={true}
                            rows={3}
                            onChange={(event) =>
                                setDescription(event.target.value)
                            }
                        />
                    </CardContent>
                    <CardActions>
                        {isNewItem && (
                            <Button
                                size={'small'}
                                disabled={
                                    !title ||
                                    (initialTitle === title &&
                                        initialDescription === description &&
                                        initialUrl === url)
                                }
                                onClick={() => {
                                    insertWishListItem.mutate({
                                        wishListId: wishListId,
                                        title: title,
                                        description: description,
                                        url: url,
                                    });
                                }}
                            >
                                Save
                            </Button>
                        )}
                        {!isNewItem && (
                            <div>
                                <Button
                                    size={'small'}
                                    disabled={
                                        !title ||
                                        (initialTitle === title &&
                                            initialUrl === url &&
                                            initialDescription === description)
                                    }
                                    onClick={() => {
                                        if (itemId) {
                                            updateWishListItem.mutate({
                                                itemId: itemId,
                                                title: title,
                                                description: description,
                                                url: url,
                                            });
                                        }
                                    }}
                                >
                                    Update
                                </Button>
                                {itemId && (
                                    <Button
                                        className={
                                            'delete-wish-list-item-button'
                                        }
                                        size={'small'}
                                        onClick={() => {
                                            deleteWishListItem.mutate({
                                                itemId,
                                            });
                                        }}
                                    >
                                        Delete
                                    </Button>
                                )}
                                {(updateWishListItem.isLoading ||
                                    deleteWishListItem.isLoading ||
                                    insertWishListItem.isLoading) && (
                                    <CircularProgress size={'small'} />
                                )}
                            </div>
                        )}
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};
