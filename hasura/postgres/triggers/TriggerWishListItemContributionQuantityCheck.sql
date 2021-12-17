CREATE TRIGGER trigger_wish_list_item_contribution_quantity_check
    BEFORE INSERT ON familycloud.wish_list_item_contribution
    FOR EACH ROW
EXECUTE PROCEDURE familycloud.check_wish_list_item_contribution_quantity();