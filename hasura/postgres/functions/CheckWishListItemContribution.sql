CREATE OR REPLACE FUNCTION familycloud.check_wish_list_item_contribution_quantity()
    RETURNS trigger AS $$
DECLARE quantity integer;
    DECLARE contributions integer;
BEGIN
    SELECT COUNT(*) INTO contributions FROM familycloud."wish_list_item_contribution" WHERE wish_list_item_contribution.wish_list_item_id = NEW."wish_list_item_id";
    SELECT wish_list_item.quantity INTO quantity FROM familycloud."wish_list_item" WHERE wish_list_item.id = NEW."wish_list_item_id";
    IF quantity <= contributions THEN
        RAISE EXCEPTION 'Max quantity of wish_list_item_contributions have been created for wish_list_item';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
