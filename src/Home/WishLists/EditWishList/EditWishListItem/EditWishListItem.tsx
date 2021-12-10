import React, { useContext, useState } from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material';
import { TokenContext } from '../../../../contexts/TokenContext';
import { useInsertWishListItemMutation } from '../../../../types/hasura';
import { GraphqlClientWithAuth } from '../../../../GraphqlClient';

export type EditWishListItemProps = {
    newItem?: boolean;
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
    newItem,
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
            },
        },
    );

    return (
        <div className={'EditWishListItem'}>
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
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </CardContent>
                <CardActions>
                    {newItem && (
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
                    {!newItem && (
                        <Button
                            size={'small'}
                            disabled={
                                !title ||
                                initialTitle === title ||
                                initialUrl === url ||
                                initialDescription === description
                            }
                        >
                            Update
                        </Button>
                    )}
                </CardActions>
            </Card>
        </div>
    );
};
