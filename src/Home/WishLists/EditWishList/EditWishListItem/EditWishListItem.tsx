import React, { useContext, useEffect, useState } from 'react';
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

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [disableUpdateButton, setDisableUpdateButton] = useState(false);

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

    // todo: logic for disabling update button isn't right
    useEffect(() => {
        if (title && title !== initialTitle) {
            setDisableUpdateButton(false);
        } else if (description !== initialDescription || url !== initialUrl) {
            setDisableUpdateButton(false);
        }
    }, [description, initialDescription, initialTitle, initialUrl, title, url]);

    return (
        <div
            className={`EditWishListItem`}
            id={`edit-wish-list-item-${itemId}`}
        >
            <div className={`${isNewItem ? 'new-item' : ''}`}>
                <Card>
                    <CardContent>
                        <TextField
                            id={`item-${itemId}-title`}
                            label={'Title'}
                            variant={'standard'}
                            fullWidth={true}
                            size={'small'}
                            value={title || initialTitle}
                            onChange={(event) => setTitle(event.target.value)}
                            required={true}
                        />
                        <TextField
                            id={`item-${itemId}-url`}
                            label={'Url'}
                            variant={'standard'}
                            fullWidth={true}
                            size={'small'}
                            value={url || initialUrl}
                            onChange={(event) => setUrl(event.target.value)}
                        />
                        <TextField
                            id={`item-${itemId}-description`}
                            label={'Description'}
                            fullWidth={true}
                            variant={'standard'}
                            size={'small'}
                            value={description || initialDescription}
                            multiline={true}
                            rows={3}
                            onChange={(event) =>
                                setDescription(event.target.value)
                            }
                        />
                    </CardContent>
                    <CardActions>
                        {isNewItem && (
                            <div>
                                <Button
                                    variant={'contained'}
                                    size={'small'}
                                    disabled={
                                        !title ||
                                        (initialTitle === title &&
                                            initialDescription ===
                                                description &&
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
                                <Button
                                    onClick={() => {
                                        setIsNewItem && setIsNewItem(false);
                                    }}
                                >
                                    Cancel
                                </Button>
                            </div>
                        )}
                        {!isNewItem && (
                            <div>
                                <Button
                                    variant={'contained'}
                                    size={'small'}
                                    disabled={disableUpdateButton}
                                    onClick={() => {
                                        if (itemId) {
                                            updateWishListItem.mutate({
                                                itemId: itemId,
                                                title: title || initialTitle,
                                                description:
                                                    description ||
                                                    initialDescription,
                                                url: url || initialUrl,
                                            });
                                        }
                                    }}
                                >
                                    Update
                                </Button>
                                {(updateWishListItem.isLoading ||
                                    deleteWishListItem.isLoading ||
                                    insertWishListItem.isLoading) && (
                                    <CircularProgress size={'small'} />
                                )}
                            </div>
                        )}
                        {itemId && (
                            <Button
                                className={'delete-wish-list-item-button'}
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
                    </CardActions>
                </Card>
            </div>
        </div>
    );
};
