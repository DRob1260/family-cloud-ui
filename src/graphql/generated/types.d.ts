export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: any;
};

export type CreateManyFamilyEventInput = {
  familyId?: Maybe<Scalars['String']>;
  dateStart?: Maybe<Scalars['Date']>;
  dateEnd?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  postFeedIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type CreateManyFamilyEventPayload = {
  __typename?: 'CreateManyFamilyEventPayload';
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<FamilyEvent>>;
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateManyFamilyInput = {
  surname?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type CreateManyFamilyMembershipInput = {
  familyId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  admin?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type CreateManyFamilyMembershipPayload = {
  __typename?: 'CreateManyFamilyMembershipPayload';
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<FamilyMembership>>;
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateManyFamilyPayload = {
  __typename?: 'CreateManyFamilyPayload';
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<Family>>;
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateManyPostFeedInput = {
  active?: Maybe<Scalars['Boolean']>;
  adminUserIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type CreateManyPostFeedPayload = {
  __typename?: 'CreateManyPostFeedPayload';
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<PostFeed>>;
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateManyPostModelInput = {
  postFeedId?: Maybe<Scalars['String']>;
  authorUserId?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<PostModelImagesInput>>>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type CreateManyPostModelPayload = {
  __typename?: 'CreateManyPostModelPayload';
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<PostModel>>;
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateManyUserInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type CreateManyUserPayload = {
  __typename?: 'CreateManyUserPayload';
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<User>>;
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateOneFamilyEventInput = {
  familyId?: Maybe<Scalars['String']>;
  dateStart?: Maybe<Scalars['Date']>;
  dateEnd?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  postFeedIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type CreateOneFamilyEventPayload = {
  __typename?: 'CreateOneFamilyEventPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<FamilyEvent>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateOneFamilyInput = {
  surname?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type CreateOneFamilyMembershipInput = {
  familyId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  admin?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type CreateOneFamilyMembershipPayload = {
  __typename?: 'CreateOneFamilyMembershipPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<FamilyMembership>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateOneFamilyPayload = {
  __typename?: 'CreateOneFamilyPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<Family>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateOnePostFeedInput = {
  active?: Maybe<Scalars['Boolean']>;
  adminUserIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type CreateOnePostFeedPayload = {
  __typename?: 'CreateOnePostFeedPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<PostFeed>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateOnePostModelInput = {
  postFeedId?: Maybe<Scalars['String']>;
  authorUserId?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<PostModelImagesInput>>>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type CreateOnePostModelPayload = {
  __typename?: 'CreateOnePostModelPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<PostModel>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateOneUserInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type CreateOneUserPayload = {
  __typename?: 'CreateOneUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<User>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};


export type ErrorInterface = {
  /** Generic error message */
  message?: Maybe<Scalars['String']>;
};

export type Family = {
  __typename?: 'Family';
  surname?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  _id: Scalars['MongoID'];
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  familyMembershipConnections: Array<FamilyMembership>;
  familyEventConnections: Array<FamilyEvent>;
};


export type FamilyFamilyMembershipConnectionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyFamilyMembershipInput>;
};


export type FamilyFamilyEventConnectionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyFamilyEventInput>;
};

/** A connection to a list of items. */
export type FamilyConnection = {
  __typename?: 'FamilyConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<FamilyEdge>;
};

/** An edge in a connection. */
export type FamilyEdge = {
  __typename?: 'FamilyEdge';
  /** The item at the end of the edge */
  node: Family;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type FamilyEvent = {
  __typename?: 'FamilyEvent';
  familyId?: Maybe<Scalars['String']>;
  dateStart?: Maybe<Scalars['Date']>;
  dateEnd?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  postFeedIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id: Scalars['MongoID'];
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  familyConnection?: Maybe<Family>;
  postFeedConnections: Array<Maybe<PostFeed>>;
};

/** A connection to a list of items. */
export type FamilyEventConnection = {
  __typename?: 'FamilyEventConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<FamilyEventEdge>;
};

/** An edge in a connection. */
export type FamilyEventEdge = {
  __typename?: 'FamilyEventEdge';
  /** The item at the end of the edge */
  node: FamilyEvent;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** List of items with pagination. */
export type FamilyEventPagination = {
  __typename?: 'FamilyEventPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<FamilyEvent>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type FamilyInput = {
  surname?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type FamilyMembership = {
  __typename?: 'FamilyMembership';
  familyId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  admin?: Maybe<Scalars['Boolean']>;
  _id: Scalars['MongoID'];
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  family?: Maybe<Family>;
  user?: Maybe<User>;
};

/** List of items with pagination. */
export type FamilyMembershipPagination = {
  __typename?: 'FamilyMembershipPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<FamilyMembership>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

/** List of items with pagination. */
export type FamilyPagination = {
  __typename?: 'FamilyPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Family>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type FilterCountFamilyEventInput = {
  familyId?: Maybe<Scalars['String']>;
  dateStart?: Maybe<Scalars['Date']>;
  dateEnd?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  postFeedIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountFamilyEventOperatorsInput>;
  OR?: Maybe<Array<FilterCountFamilyEventInput>>;
  AND?: Maybe<Array<FilterCountFamilyEventInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountFamilyEventOperatorsInput = {
  _id?: Maybe<FilterCountFamilyEvent_IdOperatorsInput>;
};

export type FilterCountFamilyEvent_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountFamilyInput = {
  surname?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountFamilyOperatorsInput>;
  OR?: Maybe<Array<FilterCountFamilyInput>>;
  AND?: Maybe<Array<FilterCountFamilyInput>>;
};

export type FilterCountFamilyMembershipInput = {
  familyId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  admin?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountFamilyMembershipOperatorsInput>;
  OR?: Maybe<Array<FilterCountFamilyMembershipInput>>;
  AND?: Maybe<Array<FilterCountFamilyMembershipInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountFamilyMembershipOperatorsInput = {
  _id?: Maybe<FilterCountFamilyMembership_IdOperatorsInput>;
};

export type FilterCountFamilyMembership_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountFamilyOperatorsInput = {
  _id?: Maybe<FilterCountFamily_IdOperatorsInput>;
};

export type FilterCountFamily_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountPostFeedInput = {
  active?: Maybe<Scalars['Boolean']>;
  adminUserIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountPostFeedOperatorsInput>;
  OR?: Maybe<Array<FilterCountPostFeedInput>>;
  AND?: Maybe<Array<FilterCountPostFeedInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountPostFeedOperatorsInput = {
  _id?: Maybe<FilterCountPostFeed_IdOperatorsInput>;
};

export type FilterCountPostFeed_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountPostModelImagesInput = {
  url?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterCountPostModelInput = {
  postFeedId?: Maybe<Scalars['String']>;
  authorUserId?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<FilterCountPostModelImagesInput>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountPostModelOperatorsInput>;
  OR?: Maybe<Array<FilterCountPostModelInput>>;
  AND?: Maybe<Array<FilterCountPostModelInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountPostModelOperatorsInput = {
  _id?: Maybe<FilterCountPostModel_IdOperatorsInput>;
};

export type FilterCountPostModel_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountUserInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountUserOperatorsInput>;
  OR?: Maybe<Array<FilterCountUserInput>>;
  AND?: Maybe<Array<FilterCountUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountUserOperatorsInput = {
  _id?: Maybe<FilterCountUser_IdOperatorsInput>;
};

export type FilterCountUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyFamilyEventInput = {
  familyId?: Maybe<Scalars['String']>;
  dateStart?: Maybe<Scalars['Date']>;
  dateEnd?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  postFeedIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyFamilyEventOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyFamilyEventInput>>;
  AND?: Maybe<Array<FilterFindManyFamilyEventInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyFamilyEventOperatorsInput = {
  _id?: Maybe<FilterFindManyFamilyEvent_IdOperatorsInput>;
};

export type FilterFindManyFamilyEvent_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyFamilyInput = {
  surname?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyFamilyOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyFamilyInput>>;
  AND?: Maybe<Array<FilterFindManyFamilyInput>>;
};

export type FilterFindManyFamilyMembershipInput = {
  familyId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  admin?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyFamilyMembershipOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyFamilyMembershipInput>>;
  AND?: Maybe<Array<FilterFindManyFamilyMembershipInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyFamilyMembershipOperatorsInput = {
  _id?: Maybe<FilterFindManyFamilyMembership_IdOperatorsInput>;
};

export type FilterFindManyFamilyMembership_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyFamilyOperatorsInput = {
  _id?: Maybe<FilterFindManyFamily_IdOperatorsInput>;
};

export type FilterFindManyFamily_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyPostFeedInput = {
  active?: Maybe<Scalars['Boolean']>;
  adminUserIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyPostFeedOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyPostFeedInput>>;
  AND?: Maybe<Array<FilterFindManyPostFeedInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyPostFeedOperatorsInput = {
  _id?: Maybe<FilterFindManyPostFeed_IdOperatorsInput>;
};

export type FilterFindManyPostFeed_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyPostModelImagesInput = {
  url?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindManyPostModelInput = {
  postFeedId?: Maybe<Scalars['String']>;
  authorUserId?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<FilterFindManyPostModelImagesInput>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyPostModelOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyPostModelInput>>;
  AND?: Maybe<Array<FilterFindManyPostModelInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyPostModelOperatorsInput = {
  _id?: Maybe<FilterFindManyPostModel_IdOperatorsInput>;
};

export type FilterFindManyPostModel_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyUserInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyUserOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyUserInput>>;
  AND?: Maybe<Array<FilterFindManyUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyUserOperatorsInput = {
  _id?: Maybe<FilterFindManyUser_IdOperatorsInput>;
};

export type FilterFindManyUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneFamilyEventInput = {
  familyId?: Maybe<Scalars['String']>;
  dateStart?: Maybe<Scalars['Date']>;
  dateEnd?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  postFeedIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneFamilyEventOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneFamilyEventInput>>;
  AND?: Maybe<Array<FilterFindOneFamilyEventInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneFamilyEventOperatorsInput = {
  _id?: Maybe<FilterFindOneFamilyEvent_IdOperatorsInput>;
};

export type FilterFindOneFamilyEvent_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneFamilyInput = {
  surname?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneFamilyOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneFamilyInput>>;
  AND?: Maybe<Array<FilterFindOneFamilyInput>>;
};

export type FilterFindOneFamilyMembershipInput = {
  familyId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  admin?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneFamilyMembershipOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneFamilyMembershipInput>>;
  AND?: Maybe<Array<FilterFindOneFamilyMembershipInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneFamilyMembershipOperatorsInput = {
  _id?: Maybe<FilterFindOneFamilyMembership_IdOperatorsInput>;
};

export type FilterFindOneFamilyMembership_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneFamilyOperatorsInput = {
  _id?: Maybe<FilterFindOneFamily_IdOperatorsInput>;
};

export type FilterFindOneFamily_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOnePostFeedInput = {
  active?: Maybe<Scalars['Boolean']>;
  adminUserIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOnePostFeedOperatorsInput>;
  OR?: Maybe<Array<FilterFindOnePostFeedInput>>;
  AND?: Maybe<Array<FilterFindOnePostFeedInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOnePostFeedOperatorsInput = {
  _id?: Maybe<FilterFindOnePostFeed_IdOperatorsInput>;
};

export type FilterFindOnePostFeed_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOnePostModelImagesInput = {
  url?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterFindOnePostModelInput = {
  postFeedId?: Maybe<Scalars['String']>;
  authorUserId?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<FilterFindOnePostModelImagesInput>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOnePostModelOperatorsInput>;
  OR?: Maybe<Array<FilterFindOnePostModelInput>>;
  AND?: Maybe<Array<FilterFindOnePostModelInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOnePostModelOperatorsInput = {
  _id?: Maybe<FilterFindOnePostModel_IdOperatorsInput>;
};

export type FilterFindOnePostModel_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneUserInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneUserOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneUserInput>>;
  AND?: Maybe<Array<FilterFindOneUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneUserOperatorsInput = {
  _id?: Maybe<FilterFindOneUser_IdOperatorsInput>;
};

export type FilterFindOneUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyFamilyEventInput = {
  familyId?: Maybe<Scalars['String']>;
  dateStart?: Maybe<Scalars['Date']>;
  dateEnd?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  postFeedIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyFamilyEventOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyFamilyEventInput>>;
  AND?: Maybe<Array<FilterRemoveManyFamilyEventInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyFamilyEventOperatorsInput = {
  _id?: Maybe<FilterRemoveManyFamilyEvent_IdOperatorsInput>;
};

export type FilterRemoveManyFamilyEvent_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyFamilyInput = {
  surname?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyFamilyOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyFamilyInput>>;
  AND?: Maybe<Array<FilterRemoveManyFamilyInput>>;
};

export type FilterRemoveManyFamilyMembershipInput = {
  familyId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  admin?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyFamilyMembershipOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyFamilyMembershipInput>>;
  AND?: Maybe<Array<FilterRemoveManyFamilyMembershipInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyFamilyMembershipOperatorsInput = {
  _id?: Maybe<FilterRemoveManyFamilyMembership_IdOperatorsInput>;
};

export type FilterRemoveManyFamilyMembership_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyFamilyOperatorsInput = {
  _id?: Maybe<FilterRemoveManyFamily_IdOperatorsInput>;
};

export type FilterRemoveManyFamily_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyPostFeedInput = {
  active?: Maybe<Scalars['Boolean']>;
  adminUserIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyPostFeedOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyPostFeedInput>>;
  AND?: Maybe<Array<FilterRemoveManyPostFeedInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyPostFeedOperatorsInput = {
  _id?: Maybe<FilterRemoveManyPostFeed_IdOperatorsInput>;
};

export type FilterRemoveManyPostFeed_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyPostModelImagesInput = {
  url?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterRemoveManyPostModelInput = {
  postFeedId?: Maybe<Scalars['String']>;
  authorUserId?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<FilterRemoveManyPostModelImagesInput>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyPostModelOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyPostModelInput>>;
  AND?: Maybe<Array<FilterRemoveManyPostModelInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyPostModelOperatorsInput = {
  _id?: Maybe<FilterRemoveManyPostModel_IdOperatorsInput>;
};

export type FilterRemoveManyPostModel_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyUserInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyUserOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyUserInput>>;
  AND?: Maybe<Array<FilterRemoveManyUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyUserOperatorsInput = {
  _id?: Maybe<FilterRemoveManyUser_IdOperatorsInput>;
};

export type FilterRemoveManyUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyFamilyEventInput = {
  familyId?: Maybe<Scalars['String']>;
  dateStart?: Maybe<Scalars['Date']>;
  dateEnd?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  postFeedIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyFamilyEventOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyFamilyEventInput>>;
  AND?: Maybe<Array<FilterUpdateManyFamilyEventInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyFamilyEventOperatorsInput = {
  _id?: Maybe<FilterUpdateManyFamilyEvent_IdOperatorsInput>;
};

export type FilterUpdateManyFamilyEvent_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyFamilyInput = {
  surname?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyFamilyOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyFamilyInput>>;
  AND?: Maybe<Array<FilterUpdateManyFamilyInput>>;
};

export type FilterUpdateManyFamilyMembershipInput = {
  familyId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  admin?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyFamilyMembershipOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyFamilyMembershipInput>>;
  AND?: Maybe<Array<FilterUpdateManyFamilyMembershipInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyFamilyMembershipOperatorsInput = {
  _id?: Maybe<FilterUpdateManyFamilyMembership_IdOperatorsInput>;
};

export type FilterUpdateManyFamilyMembership_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyFamilyOperatorsInput = {
  _id?: Maybe<FilterUpdateManyFamily_IdOperatorsInput>;
};

export type FilterUpdateManyFamily_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyPostFeedInput = {
  active?: Maybe<Scalars['Boolean']>;
  adminUserIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyPostFeedOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyPostFeedInput>>;
  AND?: Maybe<Array<FilterUpdateManyPostFeedInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyPostFeedOperatorsInput = {
  _id?: Maybe<FilterUpdateManyPostFeed_IdOperatorsInput>;
};

export type FilterUpdateManyPostFeed_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyPostModelImagesInput = {
  url?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterUpdateManyPostModelInput = {
  postFeedId?: Maybe<Scalars['String']>;
  authorUserId?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<FilterUpdateManyPostModelImagesInput>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyPostModelOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyPostModelInput>>;
  AND?: Maybe<Array<FilterUpdateManyPostModelInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyPostModelOperatorsInput = {
  _id?: Maybe<FilterUpdateManyPostModel_IdOperatorsInput>;
};

export type FilterUpdateManyPostModel_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyUserInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyUserOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyUserInput>>;
  AND?: Maybe<Array<FilterUpdateManyUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyUserOperatorsInput = {
  _id?: Maybe<FilterUpdateManyUser_IdOperatorsInput>;
};

export type FilterUpdateManyUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateOneFamilyEventInput = {
  familyId?: Maybe<Scalars['String']>;
  dateStart?: Maybe<Scalars['Date']>;
  dateEnd?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  postFeedIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneFamilyEventOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneFamilyEventInput>>;
  AND?: Maybe<Array<FilterUpdateOneFamilyEventInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneFamilyEventOperatorsInput = {
  _id?: Maybe<FilterUpdateOneFamilyEvent_IdOperatorsInput>;
};

export type FilterUpdateOneFamilyEvent_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateOneFamilyInput = {
  surname?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneFamilyOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneFamilyInput>>;
  AND?: Maybe<Array<FilterUpdateOneFamilyInput>>;
};

export type FilterUpdateOneFamilyMembershipInput = {
  familyId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  admin?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneFamilyMembershipOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneFamilyMembershipInput>>;
  AND?: Maybe<Array<FilterUpdateOneFamilyMembershipInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneFamilyMembershipOperatorsInput = {
  _id?: Maybe<FilterUpdateOneFamilyMembership_IdOperatorsInput>;
};

export type FilterUpdateOneFamilyMembership_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneFamilyOperatorsInput = {
  _id?: Maybe<FilterUpdateOneFamily_IdOperatorsInput>;
};

export type FilterUpdateOneFamily_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateOnePostModelImagesInput = {
  url?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type FilterUpdateOnePostModelInput = {
  postFeedId?: Maybe<Scalars['String']>;
  authorUserId?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<FilterUpdateOnePostModelImagesInput>>>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOnePostModelOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOnePostModelInput>>;
  AND?: Maybe<Array<FilterUpdateOnePostModelInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOnePostModelOperatorsInput = {
  _id?: Maybe<FilterUpdateOnePostModel_IdOperatorsInput>;
};

export type FilterUpdateOnePostModel_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateOneUserInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneUserOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneUserInput>>;
  AND?: Maybe<Array<FilterUpdateOneUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneUserOperatorsInput = {
  _id?: Maybe<FilterUpdateOneUser_IdOperatorsInput>;
};

export type FilterUpdateOneUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};


export type Mutation = {
  __typename?: 'Mutation';
  /** Create one document with mongoose defaults, setters, hooks and validation */
  userCreateOne?: Maybe<CreateOneUserPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  userCreateMany?: Maybe<CreateManyUserPayload>;
  userCreateRandom?: Maybe<User>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  userUpdateById?: Maybe<UpdateByIdUserPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  userUpdateOne?: Maybe<UpdateOneUserPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  userUpdateMany?: Maybe<UpdateManyUserPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  userRemoveById?: Maybe<RemoveByIdUserPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  userRemoveMany?: Maybe<RemoveManyUserPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  familyCreateOne?: Maybe<CreateOneFamilyPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  familyCreateMany?: Maybe<CreateManyFamilyPayload>;
  familyCreateRandom?: Maybe<Family>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  familyUpdateById?: Maybe<UpdateByIdFamilyPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  familyUpdateOne?: Maybe<UpdateOneFamilyPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  familyUpdateMany?: Maybe<UpdateManyFamilyPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  familyRemoveById?: Maybe<RemoveByIdFamilyPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  familyRemoveMany?: Maybe<RemoveManyFamilyPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  familyMembershipCreateOne?: Maybe<CreateOneFamilyMembershipPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  familyMembershipCreateMany?: Maybe<CreateManyFamilyMembershipPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  familyMembershipUpdateById?: Maybe<UpdateByIdFamilyMembershipPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  familyMembershipUpdateOne?: Maybe<UpdateOneFamilyMembershipPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  familyMembershipUpdateMany?: Maybe<UpdateManyFamilyMembershipPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  familyMembershipRemoveById?: Maybe<RemoveByIdFamilyMembershipPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  familyMembershipRemoveMany?: Maybe<RemoveManyFamilyMembershipPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  familyEventCreateOne?: Maybe<CreateOneFamilyEventPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  familyEventCreateMany?: Maybe<CreateManyFamilyEventPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  familyEventUpdateById?: Maybe<UpdateByIdFamilyEventPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  familyEventUpdateOne?: Maybe<UpdateOneFamilyEventPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  familyEventUpdateMany?: Maybe<UpdateManyFamilyEventPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  familyEventRemoveById?: Maybe<RemoveByIdFamilyEventPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  familyEventRemoveMany?: Maybe<RemoveManyFamilyEventPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  postFeedCreateOne?: Maybe<CreateOnePostFeedPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  postFeedCreateMany?: Maybe<CreateManyPostFeedPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  postFeedUpdateById?: Maybe<UpdateByIdPostFeedPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  postFeedUpdateMany?: Maybe<UpdateManyPostFeedPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  postFeedRemoveById?: Maybe<RemoveByIdPostFeedPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  postFeedRemoveMany?: Maybe<RemoveManyPostFeedPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  postCreateOne?: Maybe<CreateOnePostModelPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  postCreateMany?: Maybe<CreateManyPostModelPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  postUpdateById?: Maybe<UpdateByIdPostModelPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  postUpdateOne?: Maybe<UpdateOnePostModelPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  postUpdateMany?: Maybe<UpdateManyPostModelPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  postRemoveById?: Maybe<RemoveByIdPostModelPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  postRemoveMany?: Maybe<RemoveManyPostModelPayload>;
};


export type MutationUserCreateOneArgs = {
  record: CreateOneUserInput;
};


export type MutationUserCreateManyArgs = {
  records: Array<CreateManyUserInput>;
};


export type MutationUserCreateRandomArgs = {
  record?: Maybe<UserInput>;
};


export type MutationUserUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdUserInput;
};


export type MutationUserUpdateOneArgs = {
  record: UpdateOneUserInput;
  filter?: Maybe<FilterUpdateOneUserInput>;
  sort?: Maybe<SortUpdateOneUserInput>;
  skip?: Maybe<Scalars['Int']>;
};


export type MutationUserUpdateManyArgs = {
  record: UpdateManyUserInput;
  filter?: Maybe<FilterUpdateManyUserInput>;
  sort?: Maybe<SortUpdateManyUserInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationUserRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationUserRemoveManyArgs = {
  filter: FilterRemoveManyUserInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationFamilyCreateOneArgs = {
  record: CreateOneFamilyInput;
};


export type MutationFamilyCreateManyArgs = {
  records: Array<CreateManyFamilyInput>;
};


export type MutationFamilyCreateRandomArgs = {
  record?: Maybe<FamilyInput>;
};


export type MutationFamilyUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdFamilyInput;
};


export type MutationFamilyUpdateOneArgs = {
  record: UpdateOneFamilyInput;
  filter?: Maybe<FilterUpdateOneFamilyInput>;
  sort?: Maybe<SortUpdateOneFamilyInput>;
  skip?: Maybe<Scalars['Int']>;
};


export type MutationFamilyUpdateManyArgs = {
  record: UpdateManyFamilyInput;
  filter?: Maybe<FilterUpdateManyFamilyInput>;
  sort?: Maybe<SortUpdateManyFamilyInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationFamilyRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationFamilyRemoveManyArgs = {
  filter: FilterRemoveManyFamilyInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationFamilyMembershipCreateOneArgs = {
  record: CreateOneFamilyMembershipInput;
};


export type MutationFamilyMembershipCreateManyArgs = {
  records: Array<CreateManyFamilyMembershipInput>;
};


export type MutationFamilyMembershipUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdFamilyMembershipInput;
};


export type MutationFamilyMembershipUpdateOneArgs = {
  record: UpdateOneFamilyMembershipInput;
  filter?: Maybe<FilterUpdateOneFamilyMembershipInput>;
  sort?: Maybe<SortUpdateOneFamilyMembershipInput>;
  skip?: Maybe<Scalars['Int']>;
};


export type MutationFamilyMembershipUpdateManyArgs = {
  record: UpdateManyFamilyMembershipInput;
  filter?: Maybe<FilterUpdateManyFamilyMembershipInput>;
  sort?: Maybe<SortUpdateManyFamilyMembershipInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationFamilyMembershipRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationFamilyMembershipRemoveManyArgs = {
  filter: FilterRemoveManyFamilyMembershipInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationFamilyEventCreateOneArgs = {
  record: CreateOneFamilyEventInput;
};


export type MutationFamilyEventCreateManyArgs = {
  records: Array<CreateManyFamilyEventInput>;
};


export type MutationFamilyEventUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdFamilyEventInput;
};


export type MutationFamilyEventUpdateOneArgs = {
  record: UpdateOneFamilyEventInput;
  filter?: Maybe<FilterUpdateOneFamilyEventInput>;
  sort?: Maybe<SortUpdateOneFamilyEventInput>;
  skip?: Maybe<Scalars['Int']>;
};


export type MutationFamilyEventUpdateManyArgs = {
  record: UpdateManyFamilyEventInput;
  filter?: Maybe<FilterUpdateManyFamilyEventInput>;
  sort?: Maybe<SortUpdateManyFamilyEventInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationFamilyEventRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationFamilyEventRemoveManyArgs = {
  filter: FilterRemoveManyFamilyEventInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationPostFeedCreateOneArgs = {
  record: CreateOnePostFeedInput;
};


export type MutationPostFeedCreateManyArgs = {
  records: Array<CreateManyPostFeedInput>;
};


export type MutationPostFeedUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdPostFeedInput;
};


export type MutationPostFeedUpdateManyArgs = {
  record: UpdateManyPostFeedInput;
  filter?: Maybe<FilterUpdateManyPostFeedInput>;
  sort?: Maybe<SortUpdateManyPostFeedInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationPostFeedRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationPostFeedRemoveManyArgs = {
  filter: FilterRemoveManyPostFeedInput;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationPostCreateOneArgs = {
  record: CreateOnePostModelInput;
};


export type MutationPostCreateManyArgs = {
  records: Array<CreateManyPostModelInput>;
};


export type MutationPostUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdPostModelInput;
};


export type MutationPostUpdateOneArgs = {
  record: UpdateOnePostModelInput;
  filter?: Maybe<FilterUpdateOnePostModelInput>;
  sort?: Maybe<SortUpdateOnePostModelInput>;
  skip?: Maybe<Scalars['Int']>;
};


export type MutationPostUpdateManyArgs = {
  record: UpdateManyPostModelInput;
  filter?: Maybe<FilterUpdateManyPostModelInput>;
  sort?: Maybe<SortUpdateManyPostModelInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationPostRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationPostRemoveManyArgs = {
  filter: FilterRemoveManyPostModelInput;
  limit?: Maybe<Scalars['Int']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  currentPage: Scalars['Int'];
  perPage: Scalars['Int'];
  pageCount?: Maybe<Scalars['Int']>;
  itemCount?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type PostFeed = {
  __typename?: 'PostFeed';
  active?: Maybe<Scalars['Boolean']>;
  adminUserIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id: Scalars['MongoID'];
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  adminUserConnections: Array<Maybe<User>>;
  postConnections: Array<PostModel>;
};


export type PostFeedPostConnectionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyPostModelInput>;
};

/** A connection to a list of items. */
export type PostFeedConnection = {
  __typename?: 'PostFeedConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<PostFeedEdge>;
};

/** An edge in a connection. */
export type PostFeedEdge = {
  __typename?: 'PostFeedEdge';
  /** The item at the end of the edge */
  node: PostFeed;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** List of items with pagination. */
export type PostFeedPagination = {
  __typename?: 'PostFeedPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<PostFeed>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type PostModel = {
  __typename?: 'PostModel';
  postFeedId?: Maybe<Scalars['String']>;
  authorUserId?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<PostModelImages>>>;
  _id: Scalars['MongoID'];
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  postFeedConnection?: Maybe<PostFeed>;
  authorUserConnection?: Maybe<User>;
};

/** A connection to a list of items. */
export type PostModelConnection = {
  __typename?: 'PostModelConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<PostModelEdge>;
};

/** An edge in a connection. */
export type PostModelEdge = {
  __typename?: 'PostModelEdge';
  /** The item at the end of the edge */
  node: PostModel;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PostModelImages = {
  __typename?: 'PostModelImages';
  url?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type PostModelImagesInput = {
  url?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

/** List of items with pagination. */
export type PostModelPagination = {
  __typename?: 'PostModelPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<PostModel>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type Query = {
  __typename?: 'Query';
  userById?: Maybe<User>;
  userByIds: Array<User>;
  userOne?: Maybe<User>;
  userMany: Array<User>;
  userCount?: Maybe<Scalars['Int']>;
  userConnection?: Maybe<UserConnection>;
  userPagination?: Maybe<UserPagination>;
  familyById?: Maybe<Family>;
  familyByIds: Array<Family>;
  familyOne?: Maybe<Family>;
  familyMany: Array<Family>;
  familyCount?: Maybe<Scalars['Int']>;
  familyConnection?: Maybe<FamilyConnection>;
  familyPagination?: Maybe<FamilyPagination>;
  familyMembershipById?: Maybe<FamilyMembership>;
  familyMembershipByIds: Array<FamilyMembership>;
  familyMembershipOne?: Maybe<FamilyMembership>;
  familyMembershipMany: Array<FamilyMembership>;
  familyMembershipCount?: Maybe<Scalars['Int']>;
  familyMembershipPagination?: Maybe<FamilyMembershipPagination>;
  familyEventById?: Maybe<FamilyEvent>;
  familyEventByIds: Array<FamilyEvent>;
  familyEventOne?: Maybe<FamilyEvent>;
  familyEventMany: Array<FamilyEvent>;
  familyEventCount?: Maybe<Scalars['Int']>;
  familyEventConnection?: Maybe<FamilyEventConnection>;
  familyEventPagination?: Maybe<FamilyEventPagination>;
  postFeedById?: Maybe<PostFeed>;
  postFeedByIds: Array<PostFeed>;
  postFeedOne?: Maybe<PostFeed>;
  postFeedMany: Array<PostFeed>;
  postFeedCount?: Maybe<Scalars['Int']>;
  postFeedConnection?: Maybe<PostFeedConnection>;
  postFeedPagination?: Maybe<PostFeedPagination>;
  postById?: Maybe<PostModel>;
  postByIds: Array<PostModel>;
  postOne?: Maybe<PostModel>;
  postMany: Array<PostModel>;
  postCount?: Maybe<Scalars['Int']>;
  postConnection?: Maybe<PostModelConnection>;
  postPagination?: Maybe<PostModelPagination>;
};


export type QueryUserByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryUserByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsUserInput>;
};


export type QueryUserOneArgs = {
  filter?: Maybe<FilterFindOneUserInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneUserInput>;
};


export type QueryUserManyArgs = {
  filter?: Maybe<FilterFindManyUserInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyUserInput>;
};


export type QueryUserCountArgs = {
  filter?: Maybe<FilterCountUserInput>;
};


export type QueryUserConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyUserInput>;
  sort?: Maybe<SortConnectionUserEnum>;
};


export type QueryUserPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyUserInput>;
  sort?: Maybe<SortFindManyUserInput>;
};


export type QueryFamilyByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryFamilyByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsFamilyInput>;
};


export type QueryFamilyOneArgs = {
  filter?: Maybe<FilterFindOneFamilyInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneFamilyInput>;
};


export type QueryFamilyManyArgs = {
  filter?: Maybe<FilterFindManyFamilyInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyFamilyInput>;
};


export type QueryFamilyCountArgs = {
  filter?: Maybe<FilterCountFamilyInput>;
};


export type QueryFamilyConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyFamilyInput>;
  sort?: Maybe<SortConnectionFamilyEnum>;
};


export type QueryFamilyPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyFamilyInput>;
  sort?: Maybe<SortFindManyFamilyInput>;
};


export type QueryFamilyMembershipByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryFamilyMembershipByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsFamilyMembershipInput>;
};


export type QueryFamilyMembershipOneArgs = {
  filter?: Maybe<FilterFindOneFamilyMembershipInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneFamilyMembershipInput>;
};


export type QueryFamilyMembershipManyArgs = {
  filter?: Maybe<FilterFindManyFamilyMembershipInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyFamilyMembershipInput>;
};


export type QueryFamilyMembershipCountArgs = {
  filter?: Maybe<FilterCountFamilyMembershipInput>;
};


export type QueryFamilyMembershipPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyFamilyMembershipInput>;
  sort?: Maybe<SortFindManyFamilyMembershipInput>;
};


export type QueryFamilyEventByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryFamilyEventByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsFamilyEventInput>;
};


export type QueryFamilyEventOneArgs = {
  filter?: Maybe<FilterFindOneFamilyEventInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneFamilyEventInput>;
};


export type QueryFamilyEventManyArgs = {
  filter?: Maybe<FilterFindManyFamilyEventInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyFamilyEventInput>;
};


export type QueryFamilyEventCountArgs = {
  filter?: Maybe<FilterCountFamilyEventInput>;
};


export type QueryFamilyEventConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyFamilyEventInput>;
  sort?: Maybe<SortConnectionFamilyEventEnum>;
};


export type QueryFamilyEventPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyFamilyEventInput>;
  sort?: Maybe<SortFindManyFamilyEventInput>;
};


export type QueryPostFeedByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryPostFeedByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsPostFeedInput>;
};


export type QueryPostFeedOneArgs = {
  filter?: Maybe<FilterFindOnePostFeedInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOnePostFeedInput>;
};


export type QueryPostFeedManyArgs = {
  filter?: Maybe<FilterFindManyPostFeedInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyPostFeedInput>;
};


export type QueryPostFeedCountArgs = {
  filter?: Maybe<FilterCountPostFeedInput>;
};


export type QueryPostFeedConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyPostFeedInput>;
  sort?: Maybe<SortConnectionPostFeedEnum>;
};


export type QueryPostFeedPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyPostFeedInput>;
  sort?: Maybe<SortFindManyPostFeedInput>;
};


export type QueryPostByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryPostByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsPostModelInput>;
};


export type QueryPostOneArgs = {
  filter?: Maybe<FilterFindOnePostModelInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOnePostModelInput>;
};


export type QueryPostManyArgs = {
  filter?: Maybe<FilterFindManyPostModelInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyPostModelInput>;
};


export type QueryPostCountArgs = {
  filter?: Maybe<FilterCountPostModelInput>;
};


export type QueryPostConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyPostModelInput>;
  sort?: Maybe<SortConnectionPostModelEnum>;
};


export type QueryPostPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyPostModelInput>;
  sort?: Maybe<SortFindManyPostModelInput>;
};

export type RemoveByIdFamilyEventPayload = {
  __typename?: 'RemoveByIdFamilyEventPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<FamilyEvent>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveByIdFamilyMembershipPayload = {
  __typename?: 'RemoveByIdFamilyMembershipPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<FamilyMembership>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveByIdFamilyPayload = {
  __typename?: 'RemoveByIdFamilyPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Family>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveByIdPostFeedPayload = {
  __typename?: 'RemoveByIdPostFeedPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<PostFeed>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveByIdPostModelPayload = {
  __typename?: 'RemoveByIdPostModelPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<PostModel>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveByIdUserPayload = {
  __typename?: 'RemoveByIdUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<User>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveManyFamilyEventPayload = {
  __typename?: 'RemoveManyFamilyEventPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveManyFamilyMembershipPayload = {
  __typename?: 'RemoveManyFamilyMembershipPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveManyFamilyPayload = {
  __typename?: 'RemoveManyFamilyPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveManyPostFeedPayload = {
  __typename?: 'RemoveManyPostFeedPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveManyPostModelPayload = {
  __typename?: 'RemoveManyPostModelPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveManyUserPayload = {
  __typename?: 'RemoveManyUserPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export enum SortConnectionFamilyEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC'
}

export enum SortConnectionFamilyEventEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC'
}

export enum SortConnectionPostFeedEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC'
}

export enum SortConnectionPostModelEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC'
}

export enum SortConnectionUserEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC'
}

export enum SortFindByIdsFamilyEventInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsFamilyInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsFamilyMembershipInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsPostFeedInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsPostModelInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyFamilyEventInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyFamilyInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyFamilyMembershipInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyPostFeedInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyPostModelInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneFamilyEventInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneFamilyInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneFamilyMembershipInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOnePostFeedInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOnePostModelInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateManyFamilyEventInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateManyFamilyInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateManyFamilyMembershipInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateManyPostFeedInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateManyPostModelInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateManyUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneFamilyEventInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneFamilyInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneFamilyMembershipInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOnePostModelInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type UpdateByIdFamilyEventInput = {
  familyId?: Maybe<Scalars['String']>;
  dateStart?: Maybe<Scalars['Date']>;
  dateEnd?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  postFeedIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type UpdateByIdFamilyEventPayload = {
  __typename?: 'UpdateByIdFamilyEventPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<FamilyEvent>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateByIdFamilyInput = {
  surname?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type UpdateByIdFamilyMembershipInput = {
  familyId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  admin?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type UpdateByIdFamilyMembershipPayload = {
  __typename?: 'UpdateByIdFamilyMembershipPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<FamilyMembership>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateByIdFamilyPayload = {
  __typename?: 'UpdateByIdFamilyPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Family>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateByIdPostFeedInput = {
  active?: Maybe<Scalars['Boolean']>;
  adminUserIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type UpdateByIdPostFeedPayload = {
  __typename?: 'UpdateByIdPostFeedPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<PostFeed>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateByIdPostModelImagesInput = {
  url?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type UpdateByIdPostModelInput = {
  postFeedId?: Maybe<Scalars['String']>;
  authorUserId?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<UpdateByIdPostModelImagesInput>>>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type UpdateByIdPostModelPayload = {
  __typename?: 'UpdateByIdPostModelPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<PostModel>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateByIdUserInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type UpdateByIdUserPayload = {
  __typename?: 'UpdateByIdUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<User>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateManyFamilyEventInput = {
  familyId?: Maybe<Scalars['String']>;
  dateStart?: Maybe<Scalars['Date']>;
  dateEnd?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  postFeedIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type UpdateManyFamilyEventPayload = {
  __typename?: 'UpdateManyFamilyEventPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateManyFamilyInput = {
  surname?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type UpdateManyFamilyMembershipInput = {
  familyId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  admin?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type UpdateManyFamilyMembershipPayload = {
  __typename?: 'UpdateManyFamilyMembershipPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateManyFamilyPayload = {
  __typename?: 'UpdateManyFamilyPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateManyPostFeedInput = {
  active?: Maybe<Scalars['Boolean']>;
  adminUserIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type UpdateManyPostFeedPayload = {
  __typename?: 'UpdateManyPostFeedPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateManyPostModelImagesInput = {
  url?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type UpdateManyPostModelInput = {
  postFeedId?: Maybe<Scalars['String']>;
  authorUserId?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<UpdateManyPostModelImagesInput>>>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type UpdateManyPostModelPayload = {
  __typename?: 'UpdateManyPostModelPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateManyUserInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type UpdateManyUserPayload = {
  __typename?: 'UpdateManyUserPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateOneFamilyEventInput = {
  familyId?: Maybe<Scalars['String']>;
  dateStart?: Maybe<Scalars['Date']>;
  dateEnd?: Maybe<Scalars['Date']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  postFeedIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type UpdateOneFamilyEventPayload = {
  __typename?: 'UpdateOneFamilyEventPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<FamilyEvent>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateOneFamilyInput = {
  surname?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type UpdateOneFamilyMembershipInput = {
  familyId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  admin?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type UpdateOneFamilyMembershipPayload = {
  __typename?: 'UpdateOneFamilyMembershipPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<FamilyMembership>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateOneFamilyPayload = {
  __typename?: 'UpdateOneFamilyPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Family>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateOnePostModelImagesInput = {
  url?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
};

export type UpdateOnePostModelInput = {
  postFeedId?: Maybe<Scalars['String']>;
  authorUserId?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<UpdateOnePostModelImagesInput>>>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type UpdateOnePostModelPayload = {
  __typename?: 'UpdateOnePostModelPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<PostModel>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateOneUserInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

export type UpdateOneUserPayload = {
  __typename?: 'UpdateOneUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<User>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type User = {
  __typename?: 'User';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  _id: Scalars['MongoID'];
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  familyMembershipConnections: Array<FamilyMembership>;
};


export type UserFamilyMembershipConnectionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyFamilyMembershipInput>;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<UserEdge>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** The item at the end of the edge */
  node: User;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type UserInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  updated_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
};

/** List of items with pagination. */
export type UserPagination = {
  __typename?: 'UserPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<User>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};
