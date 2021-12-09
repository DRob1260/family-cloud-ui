import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch("https://liked-malamute-74.hasura.app/v1/graphql", {
    method: "POST",
    ...({"headers":{"Content-Type":"application/json"}}),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
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

/** columns and relationships of "family" */
export type Family = {
  __typename?: 'family';
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  family_members: Array<Family_Member>;
  /** An aggregate relationship */
  family_members_aggregate: Family_Member_Aggregate;
  id: Scalars['uuid'];
  surname: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "family" */
export type FamilyFamily_MembersArgs = {
  distinct_on?: InputMaybe<Array<Family_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Family_Member_Order_By>>;
  where?: InputMaybe<Family_Member_Bool_Exp>;
};


/** columns and relationships of "family" */
export type FamilyFamily_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Family_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Family_Member_Order_By>>;
  where?: InputMaybe<Family_Member_Bool_Exp>;
};

/** aggregated selection of "family" */
export type Family_Aggregate = {
  __typename?: 'family_aggregate';
  aggregate?: Maybe<Family_Aggregate_Fields>;
  nodes: Array<Family>;
};

/** aggregate fields of "family" */
export type Family_Aggregate_Fields = {
  __typename?: 'family_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Family_Max_Fields>;
  min?: Maybe<Family_Min_Fields>;
};


/** aggregate fields of "family" */
export type Family_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Family_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "family". All fields are combined with a logical 'AND'. */
export type Family_Bool_Exp = {
  _and?: InputMaybe<Array<Family_Bool_Exp>>;
  _not?: InputMaybe<Family_Bool_Exp>;
  _or?: InputMaybe<Array<Family_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  family_members?: InputMaybe<Family_Member_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  surname?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "family" */
export enum Family_Constraint {
  /** unique or primary key constraint */
  FamilyPkey = 'family_pkey'
}

/** input type for inserting data into table "family" */
export type Family_Insert_Input = {
  family_members?: InputMaybe<Family_Member_Arr_Rel_Insert_Input>;
  surname?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Family_Max_Fields = {
  __typename?: 'family_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  surname?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "family_member" */
export type Family_Member = {
  __typename?: 'family_member';
  admin: Scalars['Boolean'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  family: Family;
  family_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "family_member" */
export type Family_Member_Aggregate = {
  __typename?: 'family_member_aggregate';
  aggregate?: Maybe<Family_Member_Aggregate_Fields>;
  nodes: Array<Family_Member>;
};

/** aggregate fields of "family_member" */
export type Family_Member_Aggregate_Fields = {
  __typename?: 'family_member_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Family_Member_Max_Fields>;
  min?: Maybe<Family_Member_Min_Fields>;
};


/** aggregate fields of "family_member" */
export type Family_Member_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Family_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "family_member" */
export type Family_Member_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Family_Member_Max_Order_By>;
  min?: InputMaybe<Family_Member_Min_Order_By>;
};

/** input type for inserting array relation for remote table "family_member" */
export type Family_Member_Arr_Rel_Insert_Input = {
  data: Array<Family_Member_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Family_Member_On_Conflict>;
};

/** Boolean expression to filter rows from the table "family_member". All fields are combined with a logical 'AND'. */
export type Family_Member_Bool_Exp = {
  _and?: InputMaybe<Array<Family_Member_Bool_Exp>>;
  _not?: InputMaybe<Family_Member_Bool_Exp>;
  _or?: InputMaybe<Array<Family_Member_Bool_Exp>>;
  admin?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  family?: InputMaybe<Family_Bool_Exp>;
  family_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "family_member" */
export enum Family_Member_Constraint {
  /** unique or primary key constraint */
  FamilyMemberPkey = 'family_member_pkey'
}

/** input type for inserting data into table "family_member" */
export type Family_Member_Insert_Input = {
  admin?: InputMaybe<Scalars['Boolean']>;
  family?: InputMaybe<Family_Obj_Rel_Insert_Input>;
  family_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Family_Member_Max_Fields = {
  __typename?: 'family_member_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  family_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "family_member" */
export type Family_Member_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  family_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Family_Member_Min_Fields = {
  __typename?: 'family_member_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  family_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "family_member" */
export type Family_Member_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  family_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "family_member" */
export type Family_Member_Mutation_Response = {
  __typename?: 'family_member_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Family_Member>;
};

/** on conflict condition type for table "family_member" */
export type Family_Member_On_Conflict = {
  constraint: Family_Member_Constraint;
  update_columns?: Array<Family_Member_Update_Column>;
  where?: InputMaybe<Family_Member_Bool_Exp>;
};

/** Ordering options when selecting data from "family_member". */
export type Family_Member_Order_By = {
  admin?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  family?: InputMaybe<Family_Order_By>;
  family_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: family_member */
export type Family_Member_Pk_Columns_Input = {
  family_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** select columns of table "family_member" */
export enum Family_Member_Select_Column {
  /** column name */
  Admin = 'admin',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FamilyId = 'family_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "family_member" */
export type Family_Member_Set_Input = {
  admin?: InputMaybe<Scalars['Boolean']>;
};

/** update columns of table "family_member" */
export enum Family_Member_Update_Column {
  /** column name */
  Admin = 'admin'
}

/** aggregate min on columns */
export type Family_Min_Fields = {
  __typename?: 'family_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  surname?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "family" */
export type Family_Mutation_Response = {
  __typename?: 'family_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Family>;
};

/** input type for inserting object relation for remote table "family" */
export type Family_Obj_Rel_Insert_Input = {
  data: Family_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Family_On_Conflict>;
};

/** on conflict condition type for table "family" */
export type Family_On_Conflict = {
  constraint: Family_Constraint;
  update_columns?: Array<Family_Update_Column>;
  where?: InputMaybe<Family_Bool_Exp>;
};

/** Ordering options when selecting data from "family". */
export type Family_Order_By = {
  created_at?: InputMaybe<Order_By>;
  family_members_aggregate?: InputMaybe<Family_Member_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  surname?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: family */
export type Family_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "family" */
export enum Family_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Surname = 'surname',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "family" */
export type Family_Set_Input = {
  surname?: InputMaybe<Scalars['String']>;
};

/** update columns of table "family" */
export enum Family_Update_Column {
  /** column name */
  Surname = 'surname'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "family_member" */
  delete_family_member?: Maybe<Family_Member_Mutation_Response>;
  /** delete single row from the table: "family_member" */
  delete_family_member_by_pk?: Maybe<Family_Member>;
  /** delete data from the table: "wift" */
  delete_wift?: Maybe<Wift_Mutation_Response>;
  /** delete single row from the table: "wift" */
  delete_wift_by_pk?: Maybe<Wift>;
  /** delete data from the table: "wift_list" */
  delete_wift_list?: Maybe<Wift_List_Mutation_Response>;
  /** delete single row from the table: "wift_list" */
  delete_wift_list_by_pk?: Maybe<Wift_List>;
  /** delete data from the table: "wift_list_member" */
  delete_wift_list_member?: Maybe<Wift_List_Member_Mutation_Response>;
  /** delete single row from the table: "wift_list_member" */
  delete_wift_list_member_by_pk?: Maybe<Wift_List_Member>;
  /** insert data into the table: "family" */
  insert_family?: Maybe<Family_Mutation_Response>;
  /** insert data into the table: "family_member" */
  insert_family_member?: Maybe<Family_Member_Mutation_Response>;
  /** insert a single row into the table: "family_member" */
  insert_family_member_one?: Maybe<Family_Member>;
  /** insert a single row into the table: "family" */
  insert_family_one?: Maybe<Family>;
  /** insert data into the table: "wift" */
  insert_wift?: Maybe<Wift_Mutation_Response>;
  /** insert data into the table: "wift_list" */
  insert_wift_list?: Maybe<Wift_List_Mutation_Response>;
  /** insert data into the table: "wift_list_member" */
  insert_wift_list_member?: Maybe<Wift_List_Member_Mutation_Response>;
  /** insert a single row into the table: "wift_list_member" */
  insert_wift_list_member_one?: Maybe<Wift_List_Member>;
  /** insert a single row into the table: "wift_list" */
  insert_wift_list_one?: Maybe<Wift_List>;
  /** insert a single row into the table: "wift" */
  insert_wift_one?: Maybe<Wift>;
  /** update data of the table: "family" */
  update_family?: Maybe<Family_Mutation_Response>;
  /** update single row of the table: "family" */
  update_family_by_pk?: Maybe<Family>;
  /** update data of the table: "family_member" */
  update_family_member?: Maybe<Family_Member_Mutation_Response>;
  /** update single row of the table: "family_member" */
  update_family_member_by_pk?: Maybe<Family_Member>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "wift" */
  update_wift?: Maybe<Wift_Mutation_Response>;
  /** update single row of the table: "wift" */
  update_wift_by_pk?: Maybe<Wift>;
  /** update data of the table: "wift_list" */
  update_wift_list?: Maybe<Wift_List_Mutation_Response>;
  /** update single row of the table: "wift_list" */
  update_wift_list_by_pk?: Maybe<Wift_List>;
};


/** mutation root */
export type Mutation_RootDelete_Family_MemberArgs = {
  where: Family_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Family_Member_By_PkArgs = {
  family_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_WiftArgs = {
  where: Wift_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Wift_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Wift_ListArgs = {
  where: Wift_List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Wift_List_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Wift_List_MemberArgs = {
  where: Wift_List_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Wift_List_Member_By_PkArgs = {
  user_id: Scalars['uuid'];
  wift_list_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_FamilyArgs = {
  objects: Array<Family_Insert_Input>;
  on_conflict?: InputMaybe<Family_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Family_MemberArgs = {
  objects: Array<Family_Member_Insert_Input>;
  on_conflict?: InputMaybe<Family_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Family_Member_OneArgs = {
  object: Family_Member_Insert_Input;
  on_conflict?: InputMaybe<Family_Member_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Family_OneArgs = {
  object: Family_Insert_Input;
  on_conflict?: InputMaybe<Family_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WiftArgs = {
  objects: Array<Wift_Insert_Input>;
  on_conflict?: InputMaybe<Wift_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Wift_ListArgs = {
  objects: Array<Wift_List_Insert_Input>;
  on_conflict?: InputMaybe<Wift_List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Wift_List_MemberArgs = {
  objects: Array<Wift_List_Member_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Wift_List_Member_OneArgs = {
  object: Wift_List_Member_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Wift_List_OneArgs = {
  object: Wift_List_Insert_Input;
  on_conflict?: InputMaybe<Wift_List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Wift_OneArgs = {
  object: Wift_Insert_Input;
  on_conflict?: InputMaybe<Wift_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_FamilyArgs = {
  _set?: InputMaybe<Family_Set_Input>;
  where: Family_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Family_By_PkArgs = {
  _set?: InputMaybe<Family_Set_Input>;
  pk_columns: Family_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Family_MemberArgs = {
  _set?: InputMaybe<Family_Member_Set_Input>;
  where: Family_Member_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Family_Member_By_PkArgs = {
  _set?: InputMaybe<Family_Member_Set_Input>;
  pk_columns: Family_Member_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_WiftArgs = {
  _set?: InputMaybe<Wift_Set_Input>;
  where: Wift_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Wift_By_PkArgs = {
  _set?: InputMaybe<Wift_Set_Input>;
  pk_columns: Wift_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Wift_ListArgs = {
  _set?: InputMaybe<Wift_List_Set_Input>;
  where: Wift_List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Wift_List_By_PkArgs = {
  _set?: InputMaybe<Wift_List_Set_Input>;
  pk_columns: Wift_List_Pk_Columns_Input;
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
  /** fetch data from the table: "family" */
  family: Array<Family>;
  /** fetch aggregated fields from the table: "family" */
  family_aggregate: Family_Aggregate;
  /** fetch data from the table: "family" using primary key columns */
  family_by_pk?: Maybe<Family>;
  /** fetch data from the table: "family_member" */
  family_member: Array<Family_Member>;
  /** fetch aggregated fields from the table: "family_member" */
  family_member_aggregate: Family_Member_Aggregate;
  /** fetch data from the table: "family_member" using primary key columns */
  family_member_by_pk?: Maybe<Family_Member>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "wift" */
  wift: Array<Wift>;
  /** fetch aggregated fields from the table: "wift" */
  wift_aggregate: Wift_Aggregate;
  /** fetch data from the table: "wift" using primary key columns */
  wift_by_pk?: Maybe<Wift>;
  /** fetch data from the table: "wift_list" */
  wift_list: Array<Wift_List>;
  /** fetch aggregated fields from the table: "wift_list" */
  wift_list_aggregate: Wift_List_Aggregate;
  /** fetch data from the table: "wift_list" using primary key columns */
  wift_list_by_pk?: Maybe<Wift_List>;
  /** fetch data from the table: "wift_list_member" */
  wift_list_member: Array<Wift_List_Member>;
  /** fetch aggregated fields from the table: "wift_list_member" */
  wift_list_member_aggregate: Wift_List_Member_Aggregate;
  /** fetch data from the table: "wift_list_member" using primary key columns */
  wift_list_member_by_pk?: Maybe<Wift_List_Member>;
};


export type Query_RootFamilyArgs = {
  distinct_on?: InputMaybe<Array<Family_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Family_Order_By>>;
  where?: InputMaybe<Family_Bool_Exp>;
};


export type Query_RootFamily_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Family_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Family_Order_By>>;
  where?: InputMaybe<Family_Bool_Exp>;
};


export type Query_RootFamily_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFamily_MemberArgs = {
  distinct_on?: InputMaybe<Array<Family_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Family_Member_Order_By>>;
  where?: InputMaybe<Family_Member_Bool_Exp>;
};


export type Query_RootFamily_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Family_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Family_Member_Order_By>>;
  where?: InputMaybe<Family_Member_Bool_Exp>;
};


export type Query_RootFamily_Member_By_PkArgs = {
  family_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWiftArgs = {
  distinct_on?: InputMaybe<Array<Wift_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wift_Order_By>>;
  where?: InputMaybe<Wift_Bool_Exp>;
};


export type Query_RootWift_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wift_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wift_Order_By>>;
  where?: InputMaybe<Wift_Bool_Exp>;
};


export type Query_RootWift_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWift_ListArgs = {
  distinct_on?: InputMaybe<Array<Wift_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wift_List_Order_By>>;
  where?: InputMaybe<Wift_List_Bool_Exp>;
};


export type Query_RootWift_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wift_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wift_List_Order_By>>;
  where?: InputMaybe<Wift_List_Bool_Exp>;
};


export type Query_RootWift_List_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootWift_List_MemberArgs = {
  distinct_on?: InputMaybe<Array<Wift_List_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wift_List_Member_Order_By>>;
  where?: InputMaybe<Wift_List_Member_Bool_Exp>;
};


export type Query_RootWift_List_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wift_List_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wift_List_Member_Order_By>>;
  where?: InputMaybe<Wift_List_Member_Bool_Exp>;
};


export type Query_RootWift_List_Member_By_PkArgs = {
  user_id: Scalars['uuid'];
  wift_list_id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "family" */
  family: Array<Family>;
  /** fetch aggregated fields from the table: "family" */
  family_aggregate: Family_Aggregate;
  /** fetch data from the table: "family" using primary key columns */
  family_by_pk?: Maybe<Family>;
  /** fetch data from the table: "family_member" */
  family_member: Array<Family_Member>;
  /** fetch aggregated fields from the table: "family_member" */
  family_member_aggregate: Family_Member_Aggregate;
  /** fetch data from the table: "family_member" using primary key columns */
  family_member_by_pk?: Maybe<Family_Member>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "wift" */
  wift: Array<Wift>;
  /** fetch aggregated fields from the table: "wift" */
  wift_aggregate: Wift_Aggregate;
  /** fetch data from the table: "wift" using primary key columns */
  wift_by_pk?: Maybe<Wift>;
  /** fetch data from the table: "wift_list" */
  wift_list: Array<Wift_List>;
  /** fetch aggregated fields from the table: "wift_list" */
  wift_list_aggregate: Wift_List_Aggregate;
  /** fetch data from the table: "wift_list" using primary key columns */
  wift_list_by_pk?: Maybe<Wift_List>;
  /** fetch data from the table: "wift_list_member" */
  wift_list_member: Array<Wift_List_Member>;
  /** fetch aggregated fields from the table: "wift_list_member" */
  wift_list_member_aggregate: Wift_List_Member_Aggregate;
  /** fetch data from the table: "wift_list_member" using primary key columns */
  wift_list_member_by_pk?: Maybe<Wift_List_Member>;
};


export type Subscription_RootFamilyArgs = {
  distinct_on?: InputMaybe<Array<Family_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Family_Order_By>>;
  where?: InputMaybe<Family_Bool_Exp>;
};


export type Subscription_RootFamily_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Family_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Family_Order_By>>;
  where?: InputMaybe<Family_Bool_Exp>;
};


export type Subscription_RootFamily_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFamily_MemberArgs = {
  distinct_on?: InputMaybe<Array<Family_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Family_Member_Order_By>>;
  where?: InputMaybe<Family_Member_Bool_Exp>;
};


export type Subscription_RootFamily_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Family_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Family_Member_Order_By>>;
  where?: InputMaybe<Family_Member_Bool_Exp>;
};


export type Subscription_RootFamily_Member_By_PkArgs = {
  family_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWiftArgs = {
  distinct_on?: InputMaybe<Array<Wift_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wift_Order_By>>;
  where?: InputMaybe<Wift_Bool_Exp>;
};


export type Subscription_RootWift_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wift_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wift_Order_By>>;
  where?: InputMaybe<Wift_Bool_Exp>;
};


export type Subscription_RootWift_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWift_ListArgs = {
  distinct_on?: InputMaybe<Array<Wift_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wift_List_Order_By>>;
  where?: InputMaybe<Wift_List_Bool_Exp>;
};


export type Subscription_RootWift_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wift_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wift_List_Order_By>>;
  where?: InputMaybe<Wift_List_Bool_Exp>;
};


export type Subscription_RootWift_List_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootWift_List_MemberArgs = {
  distinct_on?: InputMaybe<Array<Wift_List_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wift_List_Member_Order_By>>;
  where?: InputMaybe<Wift_List_Member_Bool_Exp>;
};


export type Subscription_RootWift_List_Member_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wift_List_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wift_List_Member_Order_By>>;
  where?: InputMaybe<Wift_List_Member_Bool_Exp>;
};


export type Subscription_RootWift_List_Member_By_PkArgs = {
  user_id: Scalars['uuid'];
  wift_list_id: Scalars['uuid'];
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

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  /** An array relationship */
  family_members: Array<Family_Member>;
  /** An aggregate relationship */
  family_members_aggregate: Family_Member_Aggregate;
  first_name: Scalars['String'];
  id: Scalars['uuid'];
  last_name?: Maybe<Scalars['String']>;
  /** An array relationship */
  wift_lists: Array<Wift_List>;
  /** An aggregate relationship */
  wift_lists_aggregate: Wift_List_Aggregate;
};


/** columns and relationships of "user" */
export type UserFamily_MembersArgs = {
  distinct_on?: InputMaybe<Array<Family_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Family_Member_Order_By>>;
  where?: InputMaybe<Family_Member_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserFamily_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Family_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Family_Member_Order_By>>;
  where?: InputMaybe<Family_Member_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserWift_ListsArgs = {
  distinct_on?: InputMaybe<Array<Wift_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wift_List_Order_By>>;
  where?: InputMaybe<Wift_List_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserWift_Lists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wift_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wift_List_Order_By>>;
  where?: InputMaybe<Wift_List_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  family_members?: InputMaybe<Family_Member_Bool_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  wift_lists?: InputMaybe<Wift_List_Bool_Exp>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  family_members_aggregate?: InputMaybe<Family_Member_Aggregate_Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  wift_lists_aggregate?: InputMaybe<Wift_List_Aggregate_Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
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

/** columns and relationships of "wift" */
export type Wift = {
  __typename?: 'wift';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  url?: Maybe<Scalars['String']>;
  /** An object relationship */
  wift_list: Wift_List;
  wift_list_id: Scalars['uuid'];
};

/** aggregated selection of "wift" */
export type Wift_Aggregate = {
  __typename?: 'wift_aggregate';
  aggregate?: Maybe<Wift_Aggregate_Fields>;
  nodes: Array<Wift>;
};

/** aggregate fields of "wift" */
export type Wift_Aggregate_Fields = {
  __typename?: 'wift_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Wift_Max_Fields>;
  min?: Maybe<Wift_Min_Fields>;
};


/** aggregate fields of "wift" */
export type Wift_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Wift_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "wift" */
export type Wift_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Wift_Max_Order_By>;
  min?: InputMaybe<Wift_Min_Order_By>;
};

/** input type for inserting array relation for remote table "wift" */
export type Wift_Arr_Rel_Insert_Input = {
  data: Array<Wift_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Wift_On_Conflict>;
};

/** Boolean expression to filter rows from the table "wift". All fields are combined with a logical 'AND'. */
export type Wift_Bool_Exp = {
  _and?: InputMaybe<Array<Wift_Bool_Exp>>;
  _not?: InputMaybe<Wift_Bool_Exp>;
  _or?: InputMaybe<Array<Wift_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
  wift_list?: InputMaybe<Wift_List_Bool_Exp>;
  wift_list_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "wift" */
export enum Wift_Constraint {
  /** unique or primary key constraint */
  WiftPkey = 'wift_pkey'
}

/** input type for inserting data into table "wift" */
export type Wift_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  wift_list?: InputMaybe<Wift_List_Obj_Rel_Insert_Input>;
  wift_list_id?: InputMaybe<Scalars['uuid']>;
};

/** columns and relationships of "wift_list" */
export type Wift_List = {
  __typename?: 'wift_list';
  author_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  /** An array relationship */
  wift_list_members: Array<Wift_List_Member>;
  /** An aggregate relationship */
  wift_list_members_aggregate: Wift_List_Member_Aggregate;
  /** An array relationship */
  wifts: Array<Wift>;
  /** An aggregate relationship */
  wifts_aggregate: Wift_Aggregate;
};


/** columns and relationships of "wift_list" */
export type Wift_ListWift_List_MembersArgs = {
  distinct_on?: InputMaybe<Array<Wift_List_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wift_List_Member_Order_By>>;
  where?: InputMaybe<Wift_List_Member_Bool_Exp>;
};


/** columns and relationships of "wift_list" */
export type Wift_ListWift_List_Members_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wift_List_Member_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wift_List_Member_Order_By>>;
  where?: InputMaybe<Wift_List_Member_Bool_Exp>;
};


/** columns and relationships of "wift_list" */
export type Wift_ListWiftsArgs = {
  distinct_on?: InputMaybe<Array<Wift_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wift_Order_By>>;
  where?: InputMaybe<Wift_Bool_Exp>;
};


/** columns and relationships of "wift_list" */
export type Wift_ListWifts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Wift_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Wift_Order_By>>;
  where?: InputMaybe<Wift_Bool_Exp>;
};

/** aggregated selection of "wift_list" */
export type Wift_List_Aggregate = {
  __typename?: 'wift_list_aggregate';
  aggregate?: Maybe<Wift_List_Aggregate_Fields>;
  nodes: Array<Wift_List>;
};

/** aggregate fields of "wift_list" */
export type Wift_List_Aggregate_Fields = {
  __typename?: 'wift_list_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Wift_List_Max_Fields>;
  min?: Maybe<Wift_List_Min_Fields>;
};


/** aggregate fields of "wift_list" */
export type Wift_List_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Wift_List_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "wift_list" */
export type Wift_List_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Wift_List_Max_Order_By>;
  min?: InputMaybe<Wift_List_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "wift_list". All fields are combined with a logical 'AND'. */
export type Wift_List_Bool_Exp = {
  _and?: InputMaybe<Array<Wift_List_Bool_Exp>>;
  _not?: InputMaybe<Wift_List_Bool_Exp>;
  _or?: InputMaybe<Array<Wift_List_Bool_Exp>>;
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  wift_list_members?: InputMaybe<Wift_List_Member_Bool_Exp>;
  wifts?: InputMaybe<Wift_Bool_Exp>;
};

/** unique or primary key constraints on table "wift_list" */
export enum Wift_List_Constraint {
  /** unique or primary key constraint */
  WiftListPkey = 'wift_list_pkey'
}

/** input type for inserting data into table "wift_list" */
export type Wift_List_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  wift_list_members?: InputMaybe<Wift_List_Member_Arr_Rel_Insert_Input>;
  wifts?: InputMaybe<Wift_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Wift_List_Max_Fields = {
  __typename?: 'wift_list_max_fields';
  author_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "wift_list" */
export type Wift_List_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** columns and relationships of "wift_list_member" */
export type Wift_List_Member = {
  __typename?: 'wift_list_member';
  created_at: Scalars['timestamptz'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid'];
  /** An object relationship */
  wift_list: Wift_List;
  wift_list_id: Scalars['uuid'];
};

/** aggregated selection of "wift_list_member" */
export type Wift_List_Member_Aggregate = {
  __typename?: 'wift_list_member_aggregate';
  aggregate?: Maybe<Wift_List_Member_Aggregate_Fields>;
  nodes: Array<Wift_List_Member>;
};

/** aggregate fields of "wift_list_member" */
export type Wift_List_Member_Aggregate_Fields = {
  __typename?: 'wift_list_member_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Wift_List_Member_Max_Fields>;
  min?: Maybe<Wift_List_Member_Min_Fields>;
};


/** aggregate fields of "wift_list_member" */
export type Wift_List_Member_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Wift_List_Member_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "wift_list_member" */
export type Wift_List_Member_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Wift_List_Member_Max_Order_By>;
  min?: InputMaybe<Wift_List_Member_Min_Order_By>;
};

/** input type for inserting array relation for remote table "wift_list_member" */
export type Wift_List_Member_Arr_Rel_Insert_Input = {
  data: Array<Wift_List_Member_Insert_Input>;
};

/** Boolean expression to filter rows from the table "wift_list_member". All fields are combined with a logical 'AND'. */
export type Wift_List_Member_Bool_Exp = {
  _and?: InputMaybe<Array<Wift_List_Member_Bool_Exp>>;
  _not?: InputMaybe<Wift_List_Member_Bool_Exp>;
  _or?: InputMaybe<Array<Wift_List_Member_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  wift_list?: InputMaybe<Wift_List_Bool_Exp>;
  wift_list_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** input type for inserting data into table "wift_list_member" */
export type Wift_List_Member_Insert_Input = {
  user_id?: InputMaybe<Scalars['uuid']>;
  wift_list?: InputMaybe<Wift_List_Obj_Rel_Insert_Input>;
  wift_list_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Wift_List_Member_Max_Fields = {
  __typename?: 'wift_list_member_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  wift_list_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "wift_list_member" */
export type Wift_List_Member_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  wift_list_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Wift_List_Member_Min_Fields = {
  __typename?: 'wift_list_member_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  wift_list_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "wift_list_member" */
export type Wift_List_Member_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  wift_list_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "wift_list_member" */
export type Wift_List_Member_Mutation_Response = {
  __typename?: 'wift_list_member_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Wift_List_Member>;
};

/** Ordering options when selecting data from "wift_list_member". */
export type Wift_List_Member_Order_By = {
  created_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
  wift_list?: InputMaybe<Wift_List_Order_By>;
  wift_list_id?: InputMaybe<Order_By>;
};

/** select columns of table "wift_list_member" */
export enum Wift_List_Member_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
  /** column name */
  WiftListId = 'wift_list_id'
}

/** aggregate min on columns */
export type Wift_List_Min_Fields = {
  __typename?: 'wift_list_min_fields';
  author_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "wift_list" */
export type Wift_List_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "wift_list" */
export type Wift_List_Mutation_Response = {
  __typename?: 'wift_list_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Wift_List>;
};

/** input type for inserting object relation for remote table "wift_list" */
export type Wift_List_Obj_Rel_Insert_Input = {
  data: Wift_List_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Wift_List_On_Conflict>;
};

/** on conflict condition type for table "wift_list" */
export type Wift_List_On_Conflict = {
  constraint: Wift_List_Constraint;
  update_columns?: Array<Wift_List_Update_Column>;
  where?: InputMaybe<Wift_List_Bool_Exp>;
};

/** Ordering options when selecting data from "wift_list". */
export type Wift_List_Order_By = {
  author_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  wift_list_members_aggregate?: InputMaybe<Wift_List_Member_Aggregate_Order_By>;
  wifts_aggregate?: InputMaybe<Wift_Aggregate_Order_By>;
};

/** primary key columns input for table: wift_list */
export type Wift_List_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "wift_list" */
export enum Wift_List_Select_Column {
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

/** input type for updating data in table "wift_list" */
export type Wift_List_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** update columns of table "wift_list" */
export enum Wift_List_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Title = 'title'
}

/** aggregate max on columns */
export type Wift_Max_Fields = {
  __typename?: 'wift_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  wift_list_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "wift" */
export type Wift_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  wift_list_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Wift_Min_Fields = {
  __typename?: 'wift_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
  wift_list_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "wift" */
export type Wift_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  wift_list_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "wift" */
export type Wift_Mutation_Response = {
  __typename?: 'wift_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Wift>;
};

/** on conflict condition type for table "wift" */
export type Wift_On_Conflict = {
  constraint: Wift_Constraint;
  update_columns?: Array<Wift_Update_Column>;
  where?: InputMaybe<Wift_Bool_Exp>;
};

/** Ordering options when selecting data from "wift". */
export type Wift_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
  wift_list?: InputMaybe<Wift_List_Order_By>;
  wift_list_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: wift */
export type Wift_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "wift" */
export enum Wift_Select_Column {
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
  WiftListId = 'wift_list_id'
}

/** input type for updating data in table "wift" */
export type Wift_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "wift" */
export enum Wift_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Title = 'title',
  /** column name */
  Url = 'url'
}

export type FamiliesQueryVariables = Exact<{ [key: string]: never; }>;


export type FamiliesQuery = { __typename?: 'query_root', family: Array<{ __typename?: 'family', surname: string, id: any }> };


export const FamiliesDocument = `
    query Families {
  family {
    surname
    id
  }
}
    `;
export const useFamiliesQuery = <
      TData = FamiliesQuery,
      TError = unknown
    >(
      variables?: FamiliesQueryVariables,
      options?: UseQueryOptions<FamiliesQuery, TError, TData>
    ) =>
    useQuery<FamiliesQuery, TError, TData>(
      variables === undefined ? ['Families'] : ['Families', variables],
      fetcher<FamiliesQuery, FamiliesQueryVariables>(FamiliesDocument, variables),
      options
    );