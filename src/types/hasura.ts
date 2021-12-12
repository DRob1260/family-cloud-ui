import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "familycloud.person" */
export type Familycloud_Person = {
  __typename?: 'familycloud_person';
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  nickname: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  wish_list_invites: Array<Familycloud_Wish_List_Invite>;
  /** An aggregate relationship */
  wish_list_invites_aggregate: Familycloud_Wish_List_Invite_Aggregate;
  /** An array relationship */
  wish_lists: Array<Familycloud_Wish_List>;
  /** An aggregate relationship */
  wish_lists_aggregate: Familycloud_Wish_List_Aggregate;
};


/** columns and relationships of "familycloud.person" */
export type Familycloud_PersonWish_List_InvitesArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Wish_List_Invite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Wish_List_Invite_Order_By>>;
  where?: InputMaybe<Familycloud_Wish_List_Invite_Bool_Exp>;
};


/** columns and relationships of "familycloud.person" */
export type Familycloud_PersonWish_List_Invites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Wish_List_Invite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Wish_List_Invite_Order_By>>;
  where?: InputMaybe<Familycloud_Wish_List_Invite_Bool_Exp>;
};


/** columns and relationships of "familycloud.person" */
export type Familycloud_PersonWish_ListsArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Wish_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Wish_List_Order_By>>;
  where?: InputMaybe<Familycloud_Wish_List_Bool_Exp>;
};


/** columns and relationships of "familycloud.person" */
export type Familycloud_PersonWish_Lists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Wish_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Wish_List_Order_By>>;
  where?: InputMaybe<Familycloud_Wish_List_Bool_Exp>;
};

/** aggregated selection of "familycloud.person" */
export type Familycloud_Person_Aggregate = {
  __typename?: 'familycloud_person_aggregate';
  aggregate?: Maybe<Familycloud_Person_Aggregate_Fields>;
  nodes: Array<Familycloud_Person>;
};

/** aggregate fields of "familycloud.person" */
export type Familycloud_Person_Aggregate_Fields = {
  __typename?: 'familycloud_person_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Familycloud_Person_Max_Fields>;
  min?: Maybe<Familycloud_Person_Min_Fields>;
};


/** aggregate fields of "familycloud.person" */
export type Familycloud_Person_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Familycloud_Person_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "familycloud.person". All fields are combined with a logical 'AND'. */
export type Familycloud_Person_Bool_Exp = {
  _and?: InputMaybe<Array<Familycloud_Person_Bool_Exp>>;
  _not?: InputMaybe<Familycloud_Person_Bool_Exp>;
  _or?: InputMaybe<Array<Familycloud_Person_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  wish_list_invites?: InputMaybe<Familycloud_Wish_List_Invite_Bool_Exp>;
  wish_lists?: InputMaybe<Familycloud_Wish_List_Bool_Exp>;
};

/** aggregate max on columns */
export type Familycloud_Person_Max_Fields = {
  __typename?: 'familycloud_person_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Familycloud_Person_Min_Fields = {
  __typename?: 'familycloud_person_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "familycloud.person" */
export type Familycloud_Person_Mutation_Response = {
  __typename?: 'familycloud_person_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Familycloud_Person>;
};

/** Ordering options when selecting data from "familycloud.person". */
export type Familycloud_Person_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  wish_list_invites_aggregate?: InputMaybe<Familycloud_Wish_List_Invite_Aggregate_Order_By>;
  wish_lists_aggregate?: InputMaybe<Familycloud_Wish_List_Aggregate_Order_By>;
};

/** primary key columns input for table: familycloud_person */
export type Familycloud_Person_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "familycloud.person" */
export enum Familycloud_Person_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "familycloud.person" */
export type Familycloud_Person_Set_Input = {
  nickname?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "familycloud.wish_list" */
export type Familycloud_Wish_List = {
  __typename?: 'familycloud_wish_list';
  author_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  person: Familycloud_Person;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  wish_list_invites: Array<Familycloud_Wish_List_Invite>;
  /** An aggregate relationship */
  wish_list_invites_aggregate: Familycloud_Wish_List_Invite_Aggregate;
  /** An array relationship */
  wish_list_items: Array<Familycloud_Wish_List_Item>;
  /** An aggregate relationship */
  wish_list_items_aggregate: Familycloud_Wish_List_Item_Aggregate;
};


/** columns and relationships of "familycloud.wish_list" */
export type Familycloud_Wish_ListWish_List_InvitesArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Wish_List_Invite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Wish_List_Invite_Order_By>>;
  where?: InputMaybe<Familycloud_Wish_List_Invite_Bool_Exp>;
};


/** columns and relationships of "familycloud.wish_list" */
export type Familycloud_Wish_ListWish_List_Invites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Wish_List_Invite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Wish_List_Invite_Order_By>>;
  where?: InputMaybe<Familycloud_Wish_List_Invite_Bool_Exp>;
};


/** columns and relationships of "familycloud.wish_list" */
export type Familycloud_Wish_ListWish_List_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Wish_List_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Wish_List_Item_Order_By>>;
  where?: InputMaybe<Familycloud_Wish_List_Item_Bool_Exp>;
};


/** columns and relationships of "familycloud.wish_list" */
export type Familycloud_Wish_ListWish_List_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Wish_List_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Wish_List_Item_Order_By>>;
  where?: InputMaybe<Familycloud_Wish_List_Item_Bool_Exp>;
};

/** aggregated selection of "familycloud.wish_list" */
export type Familycloud_Wish_List_Aggregate = {
  __typename?: 'familycloud_wish_list_aggregate';
  aggregate?: Maybe<Familycloud_Wish_List_Aggregate_Fields>;
  nodes: Array<Familycloud_Wish_List>;
};

/** aggregate fields of "familycloud.wish_list" */
export type Familycloud_Wish_List_Aggregate_Fields = {
  __typename?: 'familycloud_wish_list_aggregate_fields';
  avg?: Maybe<Familycloud_Wish_List_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Familycloud_Wish_List_Max_Fields>;
  min?: Maybe<Familycloud_Wish_List_Min_Fields>;
  stddev?: Maybe<Familycloud_Wish_List_Stddev_Fields>;
  stddev_pop?: Maybe<Familycloud_Wish_List_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Familycloud_Wish_List_Stddev_Samp_Fields>;
  sum?: Maybe<Familycloud_Wish_List_Sum_Fields>;
  var_pop?: Maybe<Familycloud_Wish_List_Var_Pop_Fields>;
  var_samp?: Maybe<Familycloud_Wish_List_Var_Samp_Fields>;
  variance?: Maybe<Familycloud_Wish_List_Variance_Fields>;
};


/** aggregate fields of "familycloud.wish_list" */
export type Familycloud_Wish_List_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Familycloud_Wish_List_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "familycloud.wish_list" */
export type Familycloud_Wish_List_Aggregate_Order_By = {
  avg?: InputMaybe<Familycloud_Wish_List_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Familycloud_Wish_List_Max_Order_By>;
  min?: InputMaybe<Familycloud_Wish_List_Min_Order_By>;
  stddev?: InputMaybe<Familycloud_Wish_List_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Familycloud_Wish_List_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Familycloud_Wish_List_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Familycloud_Wish_List_Sum_Order_By>;
  var_pop?: InputMaybe<Familycloud_Wish_List_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Familycloud_Wish_List_Var_Samp_Order_By>;
  variance?: InputMaybe<Familycloud_Wish_List_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Familycloud_Wish_List_Avg_Fields = {
  __typename?: 'familycloud_wish_list_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "familycloud.wish_list" */
export type Familycloud_Wish_List_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "familycloud.wish_list". All fields are combined with a logical 'AND'. */
export type Familycloud_Wish_List_Bool_Exp = {
  _and?: InputMaybe<Array<Familycloud_Wish_List_Bool_Exp>>;
  _not?: InputMaybe<Familycloud_Wish_List_Bool_Exp>;
  _or?: InputMaybe<Array<Familycloud_Wish_List_Bool_Exp>>;
  author_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  person?: InputMaybe<Familycloud_Person_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  wish_list_invites?: InputMaybe<Familycloud_Wish_List_Invite_Bool_Exp>;
  wish_list_items?: InputMaybe<Familycloud_Wish_List_Item_Bool_Exp>;
};

/** unique or primary key constraints on table "familycloud.wish_list" */
export enum Familycloud_Wish_List_Constraint {
  /** unique or primary key constraint */
  WishListPkey = 'wish_list_pkey'
}

/** input type for inserting data into table "familycloud.wish_list" */
export type Familycloud_Wish_List_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  wish_list_invites?: InputMaybe<Familycloud_Wish_List_Invite_Arr_Rel_Insert_Input>;
  wish_list_items?: InputMaybe<Familycloud_Wish_List_Item_Arr_Rel_Insert_Input>;
};

/** columns and relationships of "familycloud.wish_list_invite" */
export type Familycloud_Wish_List_Invite = {
  __typename?: 'familycloud_wish_list_invite';
  admin: Scalars['Boolean'];
  id: Scalars['uuid'];
  /** An object relationship */
  person: Familycloud_Person;
  person_id: Scalars['String'];
  status: Scalars['String'];
  /** An object relationship */
  wish_list: Familycloud_Wish_List;
  wish_list_id: Scalars['Int'];
};

/** aggregated selection of "familycloud.wish_list_invite" */
export type Familycloud_Wish_List_Invite_Aggregate = {
  __typename?: 'familycloud_wish_list_invite_aggregate';
  aggregate?: Maybe<Familycloud_Wish_List_Invite_Aggregate_Fields>;
  nodes: Array<Familycloud_Wish_List_Invite>;
};

/** aggregate fields of "familycloud.wish_list_invite" */
export type Familycloud_Wish_List_Invite_Aggregate_Fields = {
  __typename?: 'familycloud_wish_list_invite_aggregate_fields';
  avg?: Maybe<Familycloud_Wish_List_Invite_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Familycloud_Wish_List_Invite_Max_Fields>;
  min?: Maybe<Familycloud_Wish_List_Invite_Min_Fields>;
  stddev?: Maybe<Familycloud_Wish_List_Invite_Stddev_Fields>;
  stddev_pop?: Maybe<Familycloud_Wish_List_Invite_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Familycloud_Wish_List_Invite_Stddev_Samp_Fields>;
  sum?: Maybe<Familycloud_Wish_List_Invite_Sum_Fields>;
  var_pop?: Maybe<Familycloud_Wish_List_Invite_Var_Pop_Fields>;
  var_samp?: Maybe<Familycloud_Wish_List_Invite_Var_Samp_Fields>;
  variance?: Maybe<Familycloud_Wish_List_Invite_Variance_Fields>;
};


/** aggregate fields of "familycloud.wish_list_invite" */
export type Familycloud_Wish_List_Invite_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Familycloud_Wish_List_Invite_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "familycloud.wish_list_invite" */
export type Familycloud_Wish_List_Invite_Aggregate_Order_By = {
  avg?: InputMaybe<Familycloud_Wish_List_Invite_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Familycloud_Wish_List_Invite_Max_Order_By>;
  min?: InputMaybe<Familycloud_Wish_List_Invite_Min_Order_By>;
  stddev?: InputMaybe<Familycloud_Wish_List_Invite_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Familycloud_Wish_List_Invite_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Familycloud_Wish_List_Invite_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Familycloud_Wish_List_Invite_Sum_Order_By>;
  var_pop?: InputMaybe<Familycloud_Wish_List_Invite_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Familycloud_Wish_List_Invite_Var_Samp_Order_By>;
  variance?: InputMaybe<Familycloud_Wish_List_Invite_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "familycloud.wish_list_invite" */
export type Familycloud_Wish_List_Invite_Arr_Rel_Insert_Input = {
  data: Array<Familycloud_Wish_List_Invite_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Familycloud_Wish_List_Invite_On_Conflict>;
};

/** aggregate avg on columns */
export type Familycloud_Wish_List_Invite_Avg_Fields = {
  __typename?: 'familycloud_wish_list_invite_avg_fields';
  wish_list_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "familycloud.wish_list_invite" */
export type Familycloud_Wish_List_Invite_Avg_Order_By = {
  wish_list_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "familycloud.wish_list_invite". All fields are combined with a logical 'AND'. */
export type Familycloud_Wish_List_Invite_Bool_Exp = {
  _and?: InputMaybe<Array<Familycloud_Wish_List_Invite_Bool_Exp>>;
  _not?: InputMaybe<Familycloud_Wish_List_Invite_Bool_Exp>;
  _or?: InputMaybe<Array<Familycloud_Wish_List_Invite_Bool_Exp>>;
  admin?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  person?: InputMaybe<Familycloud_Person_Bool_Exp>;
  person_id?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  wish_list?: InputMaybe<Familycloud_Wish_List_Bool_Exp>;
  wish_list_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "familycloud.wish_list_invite" */
export enum Familycloud_Wish_List_Invite_Constraint {
  /** unique or primary key constraint */
  WishListInviteIdKey = 'wish_list_invite_id_key',
  /** unique or primary key constraint */
  WishListInvitePkey = 'wish_list_invite_pkey'
}

/** input type for inserting data into table "familycloud.wish_list_invite" */
export type Familycloud_Wish_List_Invite_Insert_Input = {
  admin?: InputMaybe<Scalars['Boolean']>;
  person_id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  wish_list?: InputMaybe<Familycloud_Wish_List_Obj_Rel_Insert_Input>;
  wish_list_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Familycloud_Wish_List_Invite_Max_Fields = {
  __typename?: 'familycloud_wish_list_invite_max_fields';
  id?: Maybe<Scalars['uuid']>;
  person_id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  wish_list_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "familycloud.wish_list_invite" */
export type Familycloud_Wish_List_Invite_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  wish_list_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Familycloud_Wish_List_Invite_Min_Fields = {
  __typename?: 'familycloud_wish_list_invite_min_fields';
  id?: Maybe<Scalars['uuid']>;
  person_id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  wish_list_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "familycloud.wish_list_invite" */
export type Familycloud_Wish_List_Invite_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  person_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  wish_list_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "familycloud.wish_list_invite" */
export type Familycloud_Wish_List_Invite_Mutation_Response = {
  __typename?: 'familycloud_wish_list_invite_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Familycloud_Wish_List_Invite>;
};

/** on conflict condition type for table "familycloud.wish_list_invite" */
export type Familycloud_Wish_List_Invite_On_Conflict = {
  constraint: Familycloud_Wish_List_Invite_Constraint;
  update_columns?: Array<Familycloud_Wish_List_Invite_Update_Column>;
  where?: InputMaybe<Familycloud_Wish_List_Invite_Bool_Exp>;
};

/** Ordering options when selecting data from "familycloud.wish_list_invite". */
export type Familycloud_Wish_List_Invite_Order_By = {
  admin?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person?: InputMaybe<Familycloud_Person_Order_By>;
  person_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  wish_list?: InputMaybe<Familycloud_Wish_List_Order_By>;
  wish_list_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: familycloud_wish_list_invite */
export type Familycloud_Wish_List_Invite_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "familycloud.wish_list_invite" */
export enum Familycloud_Wish_List_Invite_Select_Column {
  /** column name */
  Admin = 'admin',
  /** column name */
  Id = 'id',
  /** column name */
  PersonId = 'person_id',
  /** column name */
  Status = 'status',
  /** column name */
  WishListId = 'wish_list_id'
}

/** input type for updating data in table "familycloud.wish_list_invite" */
export type Familycloud_Wish_List_Invite_Set_Input = {
  admin?: InputMaybe<Scalars['Boolean']>;
  status?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Familycloud_Wish_List_Invite_Stddev_Fields = {
  __typename?: 'familycloud_wish_list_invite_stddev_fields';
  wish_list_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "familycloud.wish_list_invite" */
export type Familycloud_Wish_List_Invite_Stddev_Order_By = {
  wish_list_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Familycloud_Wish_List_Invite_Stddev_Pop_Fields = {
  __typename?: 'familycloud_wish_list_invite_stddev_pop_fields';
  wish_list_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "familycloud.wish_list_invite" */
export type Familycloud_Wish_List_Invite_Stddev_Pop_Order_By = {
  wish_list_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Familycloud_Wish_List_Invite_Stddev_Samp_Fields = {
  __typename?: 'familycloud_wish_list_invite_stddev_samp_fields';
  wish_list_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "familycloud.wish_list_invite" */
export type Familycloud_Wish_List_Invite_Stddev_Samp_Order_By = {
  wish_list_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Familycloud_Wish_List_Invite_Sum_Fields = {
  __typename?: 'familycloud_wish_list_invite_sum_fields';
  wish_list_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "familycloud.wish_list_invite" */
export type Familycloud_Wish_List_Invite_Sum_Order_By = {
  wish_list_id?: InputMaybe<Order_By>;
};

/** update columns of table "familycloud.wish_list_invite" */
export enum Familycloud_Wish_List_Invite_Update_Column {
  /** column name */
  Admin = 'admin',
  /** column name */
  Status = 'status'
}

/** aggregate var_pop on columns */
export type Familycloud_Wish_List_Invite_Var_Pop_Fields = {
  __typename?: 'familycloud_wish_list_invite_var_pop_fields';
  wish_list_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "familycloud.wish_list_invite" */
export type Familycloud_Wish_List_Invite_Var_Pop_Order_By = {
  wish_list_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Familycloud_Wish_List_Invite_Var_Samp_Fields = {
  __typename?: 'familycloud_wish_list_invite_var_samp_fields';
  wish_list_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "familycloud.wish_list_invite" */
export type Familycloud_Wish_List_Invite_Var_Samp_Order_By = {
  wish_list_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Familycloud_Wish_List_Invite_Variance_Fields = {
  __typename?: 'familycloud_wish_list_invite_variance_fields';
  wish_list_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "familycloud.wish_list_invite" */
export type Familycloud_Wish_List_Invite_Variance_Order_By = {
  wish_list_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "familycloud.wish_list_item" */
export type Familycloud_Wish_List_Item = {
  __typename?: 'familycloud_wish_list_item';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  url?: Maybe<Scalars['String']>;
  /** An object relationship */
  wish_list: Familycloud_Wish_List;
  wish_list_id: Scalars['Int'];
};

/** aggregated selection of "familycloud.wish_list_item" */
export type Familycloud_Wish_List_Item_Aggregate = {
  __typename?: 'familycloud_wish_list_item_aggregate';
  aggregate?: Maybe<Familycloud_Wish_List_Item_Aggregate_Fields>;
  nodes: Array<Familycloud_Wish_List_Item>;
};

/** aggregate fields of "familycloud.wish_list_item" */
export type Familycloud_Wish_List_Item_Aggregate_Fields = {
  __typename?: 'familycloud_wish_list_item_aggregate_fields';
  avg?: Maybe<Familycloud_Wish_List_Item_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Familycloud_Wish_List_Item_Max_Fields>;
  min?: Maybe<Familycloud_Wish_List_Item_Min_Fields>;
  stddev?: Maybe<Familycloud_Wish_List_Item_Stddev_Fields>;
  stddev_pop?: Maybe<Familycloud_Wish_List_Item_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Familycloud_Wish_List_Item_Stddev_Samp_Fields>;
  sum?: Maybe<Familycloud_Wish_List_Item_Sum_Fields>;
  var_pop?: Maybe<Familycloud_Wish_List_Item_Var_Pop_Fields>;
  var_samp?: Maybe<Familycloud_Wish_List_Item_Var_Samp_Fields>;
  variance?: Maybe<Familycloud_Wish_List_Item_Variance_Fields>;
};


/** aggregate fields of "familycloud.wish_list_item" */
export type Familycloud_Wish_List_Item_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Familycloud_Wish_List_Item_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "familycloud.wish_list_item" */
export type Familycloud_Wish_List_Item_Aggregate_Order_By = {
  avg?: InputMaybe<Familycloud_Wish_List_Item_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Familycloud_Wish_List_Item_Max_Order_By>;
  min?: InputMaybe<Familycloud_Wish_List_Item_Min_Order_By>;
  stddev?: InputMaybe<Familycloud_Wish_List_Item_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Familycloud_Wish_List_Item_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Familycloud_Wish_List_Item_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Familycloud_Wish_List_Item_Sum_Order_By>;
  var_pop?: InputMaybe<Familycloud_Wish_List_Item_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Familycloud_Wish_List_Item_Var_Samp_Order_By>;
  variance?: InputMaybe<Familycloud_Wish_List_Item_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "familycloud.wish_list_item" */
export type Familycloud_Wish_List_Item_Arr_Rel_Insert_Input = {
  data: Array<Familycloud_Wish_List_Item_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Familycloud_Wish_List_Item_On_Conflict>;
};

/** aggregate avg on columns */
export type Familycloud_Wish_List_Item_Avg_Fields = {
  __typename?: 'familycloud_wish_list_item_avg_fields';
  id?: Maybe<Scalars['Float']>;
  wish_list_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "familycloud.wish_list_item" */
export type Familycloud_Wish_List_Item_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  wish_list_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "familycloud.wish_list_item". All fields are combined with a logical 'AND'. */
export type Familycloud_Wish_List_Item_Bool_Exp = {
  _and?: InputMaybe<Array<Familycloud_Wish_List_Item_Bool_Exp>>;
  _not?: InputMaybe<Familycloud_Wish_List_Item_Bool_Exp>;
  _or?: InputMaybe<Array<Familycloud_Wish_List_Item_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  wish_list?: InputMaybe<Familycloud_Wish_List_Bool_Exp>;
  wish_list_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "familycloud.wish_list_item" */
export enum Familycloud_Wish_List_Item_Constraint {
  /** unique or primary key constraint */
  WishListItemIdKey = 'wish_list_item_id_key',
  /** unique or primary key constraint */
  WishListItemPkey = 'wish_list_item_pkey'
}

/** input type for inserting data into table "familycloud.wish_list_item" */
export type Familycloud_Wish_List_Item_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  wish_list?: InputMaybe<Familycloud_Wish_List_Obj_Rel_Insert_Input>;
  wish_list_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Familycloud_Wish_List_Item_Max_Fields = {
  __typename?: 'familycloud_wish_list_item_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  wish_list_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "familycloud.wish_list_item" */
export type Familycloud_Wish_List_Item_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  wish_list_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Familycloud_Wish_List_Item_Min_Fields = {
  __typename?: 'familycloud_wish_list_item_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  wish_list_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "familycloud.wish_list_item" */
export type Familycloud_Wish_List_Item_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  wish_list_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "familycloud.wish_list_item" */
export type Familycloud_Wish_List_Item_Mutation_Response = {
  __typename?: 'familycloud_wish_list_item_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Familycloud_Wish_List_Item>;
};

/** on conflict condition type for table "familycloud.wish_list_item" */
export type Familycloud_Wish_List_Item_On_Conflict = {
  constraint: Familycloud_Wish_List_Item_Constraint;
  update_columns?: Array<Familycloud_Wish_List_Item_Update_Column>;
  where?: InputMaybe<Familycloud_Wish_List_Item_Bool_Exp>;
};

/** Ordering options when selecting data from "familycloud.wish_list_item". */
export type Familycloud_Wish_List_Item_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  wish_list?: InputMaybe<Familycloud_Wish_List_Order_By>;
  wish_list_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: familycloud_wish_list_item */
export type Familycloud_Wish_List_Item_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "familycloud.wish_list_item" */
export enum Familycloud_Wish_List_Item_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
  /** column name */
  WishListId = 'wish_list_id'
}

/** input type for updating data in table "familycloud.wish_list_item" */
export type Familycloud_Wish_List_Item_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Familycloud_Wish_List_Item_Stddev_Fields = {
  __typename?: 'familycloud_wish_list_item_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  wish_list_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "familycloud.wish_list_item" */
export type Familycloud_Wish_List_Item_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  wish_list_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Familycloud_Wish_List_Item_Stddev_Pop_Fields = {
  __typename?: 'familycloud_wish_list_item_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  wish_list_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "familycloud.wish_list_item" */
export type Familycloud_Wish_List_Item_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  wish_list_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Familycloud_Wish_List_Item_Stddev_Samp_Fields = {
  __typename?: 'familycloud_wish_list_item_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  wish_list_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "familycloud.wish_list_item" */
export type Familycloud_Wish_List_Item_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  wish_list_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Familycloud_Wish_List_Item_Sum_Fields = {
  __typename?: 'familycloud_wish_list_item_sum_fields';
  id?: Maybe<Scalars['Int']>;
  wish_list_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "familycloud.wish_list_item" */
export type Familycloud_Wish_List_Item_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  wish_list_id?: InputMaybe<Order_By>;
};

/** update columns of table "familycloud.wish_list_item" */
export enum Familycloud_Wish_List_Item_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Title = 'title',
  /** column name */
  Url = 'url'
}

/** aggregate var_pop on columns */
export type Familycloud_Wish_List_Item_Var_Pop_Fields = {
  __typename?: 'familycloud_wish_list_item_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  wish_list_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "familycloud.wish_list_item" */
export type Familycloud_Wish_List_Item_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  wish_list_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Familycloud_Wish_List_Item_Var_Samp_Fields = {
  __typename?: 'familycloud_wish_list_item_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  wish_list_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "familycloud.wish_list_item" */
export type Familycloud_Wish_List_Item_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  wish_list_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Familycloud_Wish_List_Item_Variance_Fields = {
  __typename?: 'familycloud_wish_list_item_variance_fields';
  id?: Maybe<Scalars['Float']>;
  wish_list_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "familycloud.wish_list_item" */
export type Familycloud_Wish_List_Item_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  wish_list_id?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Familycloud_Wish_List_Max_Fields = {
  __typename?: 'familycloud_wish_list_max_fields';
  author_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "familycloud.wish_list" */
export type Familycloud_Wish_List_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Familycloud_Wish_List_Min_Fields = {
  __typename?: 'familycloud_wish_list_min_fields';
  author_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "familycloud.wish_list" */
export type Familycloud_Wish_List_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "familycloud.wish_list" */
export type Familycloud_Wish_List_Mutation_Response = {
  __typename?: 'familycloud_wish_list_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Familycloud_Wish_List>;
};

/** input type for inserting object relation for remote table "familycloud.wish_list" */
export type Familycloud_Wish_List_Obj_Rel_Insert_Input = {
  data: Familycloud_Wish_List_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Familycloud_Wish_List_On_Conflict>;
};

/** on conflict condition type for table "familycloud.wish_list" */
export type Familycloud_Wish_List_On_Conflict = {
  constraint: Familycloud_Wish_List_Constraint;
  update_columns?: Array<Familycloud_Wish_List_Update_Column>;
  where?: InputMaybe<Familycloud_Wish_List_Bool_Exp>;
};

/** Ordering options when selecting data from "familycloud.wish_list". */
export type Familycloud_Wish_List_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  person?: InputMaybe<Familycloud_Person_Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  wish_list_invites_aggregate?: InputMaybe<Familycloud_Wish_List_Invite_Aggregate_Order_By>;
  wish_list_items_aggregate?: InputMaybe<Familycloud_Wish_List_Item_Aggregate_Order_By>;
};

/** primary key columns input for table: familycloud_wish_list */
export type Familycloud_Wish_List_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "familycloud.wish_list" */
export enum Familycloud_Wish_List_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "familycloud.wish_list" */
export type Familycloud_Wish_List_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Familycloud_Wish_List_Stddev_Fields = {
  __typename?: 'familycloud_wish_list_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "familycloud.wish_list" */
export type Familycloud_Wish_List_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Familycloud_Wish_List_Stddev_Pop_Fields = {
  __typename?: 'familycloud_wish_list_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "familycloud.wish_list" */
export type Familycloud_Wish_List_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Familycloud_Wish_List_Stddev_Samp_Fields = {
  __typename?: 'familycloud_wish_list_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "familycloud.wish_list" */
export type Familycloud_Wish_List_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Familycloud_Wish_List_Sum_Fields = {
  __typename?: 'familycloud_wish_list_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "familycloud.wish_list" */
export type Familycloud_Wish_List_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** update columns of table "familycloud.wish_list" */
export enum Familycloud_Wish_List_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Familycloud_Wish_List_Var_Pop_Fields = {
  __typename?: 'familycloud_wish_list_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "familycloud.wish_list" */
export type Familycloud_Wish_List_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Familycloud_Wish_List_Var_Samp_Fields = {
  __typename?: 'familycloud_wish_list_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "familycloud.wish_list" */
export type Familycloud_Wish_List_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Familycloud_Wish_List_Variance_Fields = {
  __typename?: 'familycloud_wish_list_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "familycloud.wish_list" */
export type Familycloud_Wish_List_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "familycloud.wish_list" */
  delete_familycloud_wish_list?: Maybe<Familycloud_Wish_List_Mutation_Response>;
  /** delete single row from the table: "familycloud.wish_list" */
  delete_familycloud_wish_list_by_pk?: Maybe<Familycloud_Wish_List>;
  /** delete data from the table: "familycloud.wish_list_invite" */
  delete_familycloud_wish_list_invite?: Maybe<Familycloud_Wish_List_Invite_Mutation_Response>;
  /** delete single row from the table: "familycloud.wish_list_invite" */
  delete_familycloud_wish_list_invite_by_pk?: Maybe<Familycloud_Wish_List_Invite>;
  /** delete data from the table: "familycloud.wish_list_item" */
  delete_familycloud_wish_list_item?: Maybe<Familycloud_Wish_List_Item_Mutation_Response>;
  /** delete single row from the table: "familycloud.wish_list_item" */
  delete_familycloud_wish_list_item_by_pk?: Maybe<Familycloud_Wish_List_Item>;
  /** insert data into the table: "familycloud.wish_list" */
  insert_familycloud_wish_list?: Maybe<Familycloud_Wish_List_Mutation_Response>;
  /** insert data into the table: "familycloud.wish_list_invite" */
  insert_familycloud_wish_list_invite?: Maybe<Familycloud_Wish_List_Invite_Mutation_Response>;
  /** insert a single row into the table: "familycloud.wish_list_invite" */
  insert_familycloud_wish_list_invite_one?: Maybe<Familycloud_Wish_List_Invite>;
  /** insert data into the table: "familycloud.wish_list_item" */
  insert_familycloud_wish_list_item?: Maybe<Familycloud_Wish_List_Item_Mutation_Response>;
  /** insert a single row into the table: "familycloud.wish_list_item" */
  insert_familycloud_wish_list_item_one?: Maybe<Familycloud_Wish_List_Item>;
  /** insert a single row into the table: "familycloud.wish_list" */
  insert_familycloud_wish_list_one?: Maybe<Familycloud_Wish_List>;
  /** update data of the table: "familycloud.person" */
  update_familycloud_person?: Maybe<Familycloud_Person_Mutation_Response>;
  /** update single row of the table: "familycloud.person" */
  update_familycloud_person_by_pk?: Maybe<Familycloud_Person>;
  /** update data of the table: "familycloud.wish_list" */
  update_familycloud_wish_list?: Maybe<Familycloud_Wish_List_Mutation_Response>;
  /** update single row of the table: "familycloud.wish_list" */
  update_familycloud_wish_list_by_pk?: Maybe<Familycloud_Wish_List>;
  /** update data of the table: "familycloud.wish_list_invite" */
  update_familycloud_wish_list_invite?: Maybe<Familycloud_Wish_List_Invite_Mutation_Response>;
  /** update single row of the table: "familycloud.wish_list_invite" */
  update_familycloud_wish_list_invite_by_pk?: Maybe<Familycloud_Wish_List_Invite>;
  /** update data of the table: "familycloud.wish_list_item" */
  update_familycloud_wish_list_item?: Maybe<Familycloud_Wish_List_Item_Mutation_Response>;
  /** update single row of the table: "familycloud.wish_list_item" */
  update_familycloud_wish_list_item_by_pk?: Maybe<Familycloud_Wish_List_Item>;
};


/** mutation root */
export type Mutation_RootDelete_Familycloud_Wish_ListArgs = {
  where: Familycloud_Wish_List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Familycloud_Wish_List_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Familycloud_Wish_List_InviteArgs = {
  where: Familycloud_Wish_List_Invite_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Familycloud_Wish_List_Invite_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Familycloud_Wish_List_ItemArgs = {
  where: Familycloud_Wish_List_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Familycloud_Wish_List_Item_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Familycloud_Wish_ListArgs = {
  objects: Array<Familycloud_Wish_List_Insert_Input>;
  on_conflict?: InputMaybe<Familycloud_Wish_List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Familycloud_Wish_List_InviteArgs = {
  objects: Array<Familycloud_Wish_List_Invite_Insert_Input>;
  on_conflict?: InputMaybe<Familycloud_Wish_List_Invite_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Familycloud_Wish_List_Invite_OneArgs = {
  object: Familycloud_Wish_List_Invite_Insert_Input;
  on_conflict?: InputMaybe<Familycloud_Wish_List_Invite_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Familycloud_Wish_List_ItemArgs = {
  objects: Array<Familycloud_Wish_List_Item_Insert_Input>;
  on_conflict?: InputMaybe<Familycloud_Wish_List_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Familycloud_Wish_List_Item_OneArgs = {
  object: Familycloud_Wish_List_Item_Insert_Input;
  on_conflict?: InputMaybe<Familycloud_Wish_List_Item_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Familycloud_Wish_List_OneArgs = {
  object: Familycloud_Wish_List_Insert_Input;
  on_conflict?: InputMaybe<Familycloud_Wish_List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Familycloud_PersonArgs = {
  _set?: InputMaybe<Familycloud_Person_Set_Input>;
  where: Familycloud_Person_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Familycloud_Person_By_PkArgs = {
  _set?: InputMaybe<Familycloud_Person_Set_Input>;
  pk_columns: Familycloud_Person_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Familycloud_Wish_ListArgs = {
  _set?: InputMaybe<Familycloud_Wish_List_Set_Input>;
  where: Familycloud_Wish_List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Familycloud_Wish_List_By_PkArgs = {
  _set?: InputMaybe<Familycloud_Wish_List_Set_Input>;
  pk_columns: Familycloud_Wish_List_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Familycloud_Wish_List_InviteArgs = {
  _set?: InputMaybe<Familycloud_Wish_List_Invite_Set_Input>;
  where: Familycloud_Wish_List_Invite_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Familycloud_Wish_List_Invite_By_PkArgs = {
  _set?: InputMaybe<Familycloud_Wish_List_Invite_Set_Input>;
  pk_columns: Familycloud_Wish_List_Invite_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Familycloud_Wish_List_ItemArgs = {
  _set?: InputMaybe<Familycloud_Wish_List_Item_Set_Input>;
  where: Familycloud_Wish_List_Item_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Familycloud_Wish_List_Item_By_PkArgs = {
  _set?: InputMaybe<Familycloud_Wish_List_Item_Set_Input>;
  pk_columns: Familycloud_Wish_List_Item_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "familycloud.person" */
  familycloud_person: Array<Familycloud_Person>;
  /** fetch aggregated fields from the table: "familycloud.person" */
  familycloud_person_aggregate: Familycloud_Person_Aggregate;
  /** fetch data from the table: "familycloud.person" using primary key columns */
  familycloud_person_by_pk?: Maybe<Familycloud_Person>;
  /** fetch data from the table: "familycloud.wish_list" */
  familycloud_wish_list: Array<Familycloud_Wish_List>;
  /** fetch aggregated fields from the table: "familycloud.wish_list" */
  familycloud_wish_list_aggregate: Familycloud_Wish_List_Aggregate;
  /** fetch data from the table: "familycloud.wish_list" using primary key columns */
  familycloud_wish_list_by_pk?: Maybe<Familycloud_Wish_List>;
  /** fetch data from the table: "familycloud.wish_list_invite" */
  familycloud_wish_list_invite: Array<Familycloud_Wish_List_Invite>;
  /** fetch aggregated fields from the table: "familycloud.wish_list_invite" */
  familycloud_wish_list_invite_aggregate: Familycloud_Wish_List_Invite_Aggregate;
  /** fetch data from the table: "familycloud.wish_list_invite" using primary key columns */
  familycloud_wish_list_invite_by_pk?: Maybe<Familycloud_Wish_List_Invite>;
  /** fetch data from the table: "familycloud.wish_list_item" */
  familycloud_wish_list_item: Array<Familycloud_Wish_List_Item>;
  /** fetch aggregated fields from the table: "familycloud.wish_list_item" */
  familycloud_wish_list_item_aggregate: Familycloud_Wish_List_Item_Aggregate;
  /** fetch data from the table: "familycloud.wish_list_item" using primary key columns */
  familycloud_wish_list_item_by_pk?: Maybe<Familycloud_Wish_List_Item>;
};


export type Query_RootFamilycloud_PersonArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Person_Order_By>>;
  where?: InputMaybe<Familycloud_Person_Bool_Exp>;
};


export type Query_RootFamilycloud_Person_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Person_Order_By>>;
  where?: InputMaybe<Familycloud_Person_Bool_Exp>;
};


export type Query_RootFamilycloud_Person_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootFamilycloud_Wish_ListArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Wish_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Wish_List_Order_By>>;
  where?: InputMaybe<Familycloud_Wish_List_Bool_Exp>;
};


export type Query_RootFamilycloud_Wish_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Wish_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Wish_List_Order_By>>;
  where?: InputMaybe<Familycloud_Wish_List_Bool_Exp>;
};


export type Query_RootFamilycloud_Wish_List_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootFamilycloud_Wish_List_InviteArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Wish_List_Invite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Wish_List_Invite_Order_By>>;
  where?: InputMaybe<Familycloud_Wish_List_Invite_Bool_Exp>;
};


export type Query_RootFamilycloud_Wish_List_Invite_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Wish_List_Invite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Wish_List_Invite_Order_By>>;
  where?: InputMaybe<Familycloud_Wish_List_Invite_Bool_Exp>;
};


export type Query_RootFamilycloud_Wish_List_Invite_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFamilycloud_Wish_List_ItemArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Wish_List_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Wish_List_Item_Order_By>>;
  where?: InputMaybe<Familycloud_Wish_List_Item_Bool_Exp>;
};


export type Query_RootFamilycloud_Wish_List_Item_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Wish_List_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Wish_List_Item_Order_By>>;
  where?: InputMaybe<Familycloud_Wish_List_Item_Bool_Exp>;
};


export type Query_RootFamilycloud_Wish_List_Item_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "familycloud.person" */
  familycloud_person: Array<Familycloud_Person>;
  /** fetch aggregated fields from the table: "familycloud.person" */
  familycloud_person_aggregate: Familycloud_Person_Aggregate;
  /** fetch data from the table: "familycloud.person" using primary key columns */
  familycloud_person_by_pk?: Maybe<Familycloud_Person>;
  /** fetch data from the table: "familycloud.wish_list" */
  familycloud_wish_list: Array<Familycloud_Wish_List>;
  /** fetch aggregated fields from the table: "familycloud.wish_list" */
  familycloud_wish_list_aggregate: Familycloud_Wish_List_Aggregate;
  /** fetch data from the table: "familycloud.wish_list" using primary key columns */
  familycloud_wish_list_by_pk?: Maybe<Familycloud_Wish_List>;
  /** fetch data from the table: "familycloud.wish_list_invite" */
  familycloud_wish_list_invite: Array<Familycloud_Wish_List_Invite>;
  /** fetch aggregated fields from the table: "familycloud.wish_list_invite" */
  familycloud_wish_list_invite_aggregate: Familycloud_Wish_List_Invite_Aggregate;
  /** fetch data from the table: "familycloud.wish_list_invite" using primary key columns */
  familycloud_wish_list_invite_by_pk?: Maybe<Familycloud_Wish_List_Invite>;
  /** fetch data from the table: "familycloud.wish_list_item" */
  familycloud_wish_list_item: Array<Familycloud_Wish_List_Item>;
  /** fetch aggregated fields from the table: "familycloud.wish_list_item" */
  familycloud_wish_list_item_aggregate: Familycloud_Wish_List_Item_Aggregate;
  /** fetch data from the table: "familycloud.wish_list_item" using primary key columns */
  familycloud_wish_list_item_by_pk?: Maybe<Familycloud_Wish_List_Item>;
};


export type Subscription_RootFamilycloud_PersonArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Person_Order_By>>;
  where?: InputMaybe<Familycloud_Person_Bool_Exp>;
};


export type Subscription_RootFamilycloud_Person_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Person_Order_By>>;
  where?: InputMaybe<Familycloud_Person_Bool_Exp>;
};


export type Subscription_RootFamilycloud_Person_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootFamilycloud_Wish_ListArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Wish_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Wish_List_Order_By>>;
  where?: InputMaybe<Familycloud_Wish_List_Bool_Exp>;
};


export type Subscription_RootFamilycloud_Wish_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Wish_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Wish_List_Order_By>>;
  where?: InputMaybe<Familycloud_Wish_List_Bool_Exp>;
};


export type Subscription_RootFamilycloud_Wish_List_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFamilycloud_Wish_List_InviteArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Wish_List_Invite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Wish_List_Invite_Order_By>>;
  where?: InputMaybe<Familycloud_Wish_List_Invite_Bool_Exp>;
};


export type Subscription_RootFamilycloud_Wish_List_Invite_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Wish_List_Invite_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Wish_List_Invite_Order_By>>;
  where?: InputMaybe<Familycloud_Wish_List_Invite_Bool_Exp>;
};


export type Subscription_RootFamilycloud_Wish_List_Invite_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFamilycloud_Wish_List_ItemArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Wish_List_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Wish_List_Item_Order_By>>;
  where?: InputMaybe<Familycloud_Wish_List_Item_Bool_Exp>;
};


export type Subscription_RootFamilycloud_Wish_List_Item_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Familycloud_Wish_List_Item_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Familycloud_Wish_List_Item_Order_By>>;
  where?: InputMaybe<Familycloud_Wish_List_Item_Bool_Exp>;
};


export type Subscription_RootFamilycloud_Wish_List_Item_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type DeleteWishListMutationVariables = Exact<{
  wishListId: Scalars['Int'];
}>;


export type DeleteWishListMutation = { __typename?: 'mutation_root', delete_familycloud_wish_list_by_pk?: { __typename?: 'familycloud_wish_list', id: number } | null | undefined };

export type DeleteWishListItemMutationVariables = Exact<{
  itemId: Scalars['Int'];
}>;


export type DeleteWishListItemMutation = { __typename?: 'mutation_root', delete_familycloud_wish_list_item_by_pk?: { __typename?: 'familycloud_wish_list_item', id: number } | null | undefined };

export type InsertWishListMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
}>;


export type InsertWishListMutation = { __typename?: 'mutation_root', insert_familycloud_wish_list_one?: { __typename?: 'familycloud_wish_list', id: number, description?: string | null | undefined, title: string } | null | undefined };

export type InsertWishListItemMutationVariables = Exact<{
  wishListId: Scalars['Int'];
  title: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
}>;


export type InsertWishListItemMutation = { __typename?: 'mutation_root', insert_familycloud_wish_list_item?: { __typename?: 'familycloud_wish_list_item_mutation_response', returning: Array<{ __typename?: 'familycloud_wish_list_item', id: number }> } | null | undefined };

export type UpdateWishListMutationVariables = Exact<{
  wishListId: Scalars['Int'];
  title: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
}>;


export type UpdateWishListMutation = { __typename?: 'mutation_root', update_familycloud_wish_list_by_pk?: { __typename?: 'familycloud_wish_list', id: number } | null | undefined };

export type UpdateWishListItemMutationVariables = Exact<{
  itemId: Scalars['Int'];
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
}>;


export type UpdateWishListItemMutation = { __typename?: 'mutation_root', update_familycloud_wish_list_item_by_pk?: { __typename?: 'familycloud_wish_list_item', id: number } | null | undefined };

export type GetWishListQueryVariables = Exact<{
  wishListId: Scalars['Int'];
}>;


export type GetWishListQuery = { __typename?: 'query_root', familycloud_wish_list_by_pk?: { __typename?: 'familycloud_wish_list', title: string, description?: string | null | undefined, wish_list_items: Array<{ __typename?: 'familycloud_wish_list_item', description?: string | null | undefined, created_at: any, title: string, id: number, url?: string | null | undefined }> } | null | undefined };

export type WishListsQueryVariables = Exact<{ [key: string]: never; }>;


export type WishListsQuery = { __typename?: 'query_root', familycloud_wish_list: Array<{ __typename?: 'familycloud_wish_list', title: string, description?: string | null | undefined, id: number, created_at: any }> };


export const DeleteWishListDocument = `
    mutation DeleteWishList($wishListId: Int!) {
  delete_familycloud_wish_list_by_pk(id: $wishListId) {
    id
  }
}
    `;
export const useDeleteWishListMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteWishListMutation, TError, DeleteWishListMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteWishListMutation, TError, DeleteWishListMutationVariables, TContext>(
      'DeleteWishList',
      (variables?: DeleteWishListMutationVariables) => fetcher<DeleteWishListMutation, DeleteWishListMutationVariables>(client, DeleteWishListDocument, variables, headers)(),
      options
    );
export const DeleteWishListItemDocument = `
    mutation DeleteWishListItem($itemId: Int!) {
  delete_familycloud_wish_list_item_by_pk(id: $itemId) {
    id
  }
}
    `;
export const useDeleteWishListItemMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<DeleteWishListItemMutation, TError, DeleteWishListItemMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<DeleteWishListItemMutation, TError, DeleteWishListItemMutationVariables, TContext>(
      'DeleteWishListItem',
      (variables?: DeleteWishListItemMutationVariables) => fetcher<DeleteWishListItemMutation, DeleteWishListItemMutationVariables>(client, DeleteWishListItemDocument, variables, headers)(),
      options
    );
export const InsertWishListDocument = `
    mutation InsertWishList($title: String!, $description: String!) {
  insert_familycloud_wish_list_one(
    object: {title: $title, description: $description}
  ) {
    id
    description
    title
  }
}
    `;
export const useInsertWishListMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<InsertWishListMutation, TError, InsertWishListMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<InsertWishListMutation, TError, InsertWishListMutationVariables, TContext>(
      'InsertWishList',
      (variables?: InsertWishListMutationVariables) => fetcher<InsertWishListMutation, InsertWishListMutationVariables>(client, InsertWishListDocument, variables, headers)(),
      options
    );
export const InsertWishListItemDocument = `
    mutation insertWishListItem($wishListId: Int!, $title: String!, $description: String, $url: String) {
  insert_familycloud_wish_list_item(
    objects: {wish_list_id: $wishListId, title: $title, description: $description, url: $url}
  ) {
    returning {
      id
    }
  }
}
    `;
export const useInsertWishListItemMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<InsertWishListItemMutation, TError, InsertWishListItemMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<InsertWishListItemMutation, TError, InsertWishListItemMutationVariables, TContext>(
      'insertWishListItem',
      (variables?: InsertWishListItemMutationVariables) => fetcher<InsertWishListItemMutation, InsertWishListItemMutationVariables>(client, InsertWishListItemDocument, variables, headers)(),
      options
    );
export const UpdateWishListDocument = `
    mutation UpdateWishList($wishListId: Int!, $title: String!, $description: String) {
  update_familycloud_wish_list_by_pk(
    _set: {title: $title, description: $description}
    pk_columns: {id: $wishListId}
  ) {
    id
  }
}
    `;
export const useUpdateWishListMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateWishListMutation, TError, UpdateWishListMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateWishListMutation, TError, UpdateWishListMutationVariables, TContext>(
      'UpdateWishList',
      (variables?: UpdateWishListMutationVariables) => fetcher<UpdateWishListMutation, UpdateWishListMutationVariables>(client, UpdateWishListDocument, variables, headers)(),
      options
    );
export const UpdateWishListItemDocument = `
    mutation updateWishListItem($itemId: Int!, $title: String, $description: String, $url: String) {
  update_familycloud_wish_list_item_by_pk(
    pk_columns: {id: $itemId}
    _set: {description: $description, title: $title, url: $url}
  ) {
    id
  }
}
    `;
export const useUpdateWishListItemMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<UpdateWishListItemMutation, TError, UpdateWishListItemMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<UpdateWishListItemMutation, TError, UpdateWishListItemMutationVariables, TContext>(
      'updateWishListItem',
      (variables?: UpdateWishListItemMutationVariables) => fetcher<UpdateWishListItemMutation, UpdateWishListItemMutationVariables>(client, UpdateWishListItemDocument, variables, headers)(),
      options
    );
export const GetWishListDocument = `
    query GetWishList($wishListId: Int!) {
  familycloud_wish_list_by_pk(id: $wishListId) {
    title
    description
    wish_list_items(order_by: {created_at: asc}) {
      description
      created_at
      title
      id
      url
    }
  }
}
    `;
export const useGetWishListQuery = <
      TData = GetWishListQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetWishListQueryVariables,
      options?: UseQueryOptions<GetWishListQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetWishListQuery, TError, TData>(
      ['GetWishList', variables],
      fetcher<GetWishListQuery, GetWishListQueryVariables>(client, GetWishListDocument, variables, headers),
      options
    );
export const WishListsDocument = `
    query WishLists {
  familycloud_wish_list(order_by: {updated_at: desc}) {
    title
    description
    id
    created_at
  }
}
    `;
export const useWishListsQuery = <
      TData = WishListsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: WishListsQueryVariables,
      options?: UseQueryOptions<WishListsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<WishListsQuery, TError, TData>(
      variables === undefined ? ['WishLists'] : ['WishLists', variables],
      fetcher<WishListsQuery, WishListsQueryVariables>(client, WishListsDocument, variables, headers),
      options
    );