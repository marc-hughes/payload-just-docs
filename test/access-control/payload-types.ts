/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
    'public-users': PublicUserAuthOperations;
  };
  blocks: {};
  collections: {
    users: User;
    'public-users': PublicUser;
    posts: Post;
    unrestricted: Unrestricted;
    'relation-restricted': RelationRestricted;
    'fully-restricted': FullyRestricted;
    'read-only-collection': ReadOnlyCollection;
    'user-restricted-collection': UserRestrictedCollection;
    'create-not-update-collection': CreateNotUpdateCollection;
    'restricted-versions': RestrictedVersion;
    'restricted-versions-admin-panel': RestrictedVersionsAdminPanel;
    'sibling-data': SiblingDatum;
    'rely-on-request-headers': RelyOnRequestHeader;
    'doc-level-access': DocLevelAccess;
    'hidden-fields': HiddenField;
    'hidden-access': HiddenAccess;
    'hidden-access-count': HiddenAccessCount;
    'fields-and-top-access': FieldsAndTopAccess;
    disabled: Disabled;
    'rich-text': RichText;
    regression1: Regression1;
    regression2: Regression2;
    hooks: Hook;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    'public-users': PublicUsersSelect<false> | PublicUsersSelect<true>;
    posts: PostsSelect<false> | PostsSelect<true>;
    unrestricted: UnrestrictedSelect<false> | UnrestrictedSelect<true>;
    'relation-restricted': RelationRestrictedSelect<false> | RelationRestrictedSelect<true>;
    'fully-restricted': FullyRestrictedSelect<false> | FullyRestrictedSelect<true>;
    'read-only-collection': ReadOnlyCollectionSelect<false> | ReadOnlyCollectionSelect<true>;
    'user-restricted-collection': UserRestrictedCollectionSelect<false> | UserRestrictedCollectionSelect<true>;
    'create-not-update-collection': CreateNotUpdateCollectionSelect<false> | CreateNotUpdateCollectionSelect<true>;
    'restricted-versions': RestrictedVersionsSelect<false> | RestrictedVersionsSelect<true>;
    'restricted-versions-admin-panel': RestrictedVersionsAdminPanelSelect<false> | RestrictedVersionsAdminPanelSelect<true>;
    'sibling-data': SiblingDataSelect<false> | SiblingDataSelect<true>;
    'rely-on-request-headers': RelyOnRequestHeadersSelect<false> | RelyOnRequestHeadersSelect<true>;
    'doc-level-access': DocLevelAccessSelect<false> | DocLevelAccessSelect<true>;
    'hidden-fields': HiddenFieldsSelect<false> | HiddenFieldsSelect<true>;
    'hidden-access': HiddenAccessSelect<false> | HiddenAccessSelect<true>;
    'hidden-access-count': HiddenAccessCountSelect<false> | HiddenAccessCountSelect<true>;
    'fields-and-top-access': FieldsAndTopAccessSelect<false> | FieldsAndTopAccessSelect<true>;
    disabled: DisabledSelect<false> | DisabledSelect<true>;
    'rich-text': RichTextSelect<false> | RichTextSelect<true>;
    regression1: Regression1Select<false> | Regression1Select<true>;
    regression2: Regression2Select<false> | Regression2Select<true>;
    hooks: HooksSelect<false> | HooksSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    settings: Setting;
    test: Test;
    'read-only-global': ReadOnlyGlobal;
    'user-restricted-global': UserRestrictedGlobal;
    'read-not-update-global': ReadNotUpdateGlobal;
  };
  globalsSelect: {
    settings: SettingsSelect<false> | SettingsSelect<true>;
    test: TestSelect<false> | TestSelect<true>;
    'read-only-global': ReadOnlyGlobalSelect<false> | ReadOnlyGlobalSelect<true>;
    'user-restricted-global': UserRestrictedGlobalSelect<false> | UserRestrictedGlobalSelect<true>;
    'read-not-update-global': ReadNotUpdateGlobalSelect<false> | ReadNotUpdateGlobalSelect<true>;
  };
  locale: null;
  user:
    | (User & {
        collection: 'users';
      })
    | (PublicUser & {
        collection: 'public-users';
      });
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
export interface PublicUserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  roles?: ('admin' | 'user')[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "public-users".
 */
export interface PublicUser {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: string;
  restrictedField?: string | null;
  group?: {
    restrictedGroupText?: string | null;
  };
  restrictedRowText?: string | null;
  restrictedCollapsibleText?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "unrestricted".
 */
export interface Unrestricted {
  id: string;
  name?: string | null;
  userRestrictedDocs?: (string | UserRestrictedCollection)[] | null;
  createNotUpdateDocs?: (string | CreateNotUpdateCollection)[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "user-restricted-collection".
 */
export interface UserRestrictedCollection {
  id: string;
  name?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "create-not-update-collection".
 */
export interface CreateNotUpdateCollection {
  id: string;
  name?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "relation-restricted".
 */
export interface RelationRestricted {
  id: string;
  name?: string | null;
  post?: (string | null) | Post;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "fully-restricted".
 */
export interface FullyRestricted {
  id: string;
  name?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "read-only-collection".
 */
export interface ReadOnlyCollection {
  id: string;
  name?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "restricted-versions".
 */
export interface RestrictedVersion {
  id: string;
  name?: string | null;
  hidden?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "restricted-versions-admin-panel".
 */
export interface RestrictedVersionsAdminPanel {
  id: string;
  name?: string | null;
  hidden?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sibling-data".
 */
export interface SiblingDatum {
  id: string;
  array?:
    | {
        allowPublicReadability?: boolean | null;
        text?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "rely-on-request-headers".
 */
export interface RelyOnRequestHeader {
  id: string;
  name?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "doc-level-access".
 */
export interface DocLevelAccess {
  id: string;
  approvedForRemoval?: boolean | null;
  approvedTitle?: string | null;
  lockTitle?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hidden-fields".
 */
export interface HiddenField {
  id: string;
  title?: string | null;
  partiallyHiddenGroup?: {
    name?: string | null;
    value?: string | null;
  };
  partiallyHiddenArray?:
    | {
        name?: string | null;
        value?: string | null;
        id?: string | null;
      }[]
    | null;
  hidden?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hidden-access".
 */
export interface HiddenAccess {
  id: string;
  title: string;
  hidden?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hidden-access-count".
 */
export interface HiddenAccessCount {
  id: string;
  title: string;
  hidden?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "fields-and-top-access".
 */
export interface FieldsAndTopAccess {
  id: string;
  secret?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "disabled".
 */
export interface Disabled {
  id: string;
  group?: {
    text?: string | null;
  };
  namedTab?: {
    text?: string | null;
  };
  unnamedTab?: string | null;
  array?:
    | {
        text?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "rich-text".
 */
export interface RichText {
  id: string;
  blocks?:
    | {
        richText?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'richText';
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "regression1".
 */
export interface Regression1 {
  id: string;
  group1?: {
    richText1?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    text?: string | null;
  };
  tab1?: {
    richText2?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    blocks2?:
      | {
          richText3?: {
            root: {
              type: string;
              children: {
                type: string;
                version: number;
                [k: string]: unknown;
              }[];
              direction: ('ltr' | 'rtl') | null;
              format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
              indent: number;
              version: number;
            };
            [k: string]: unknown;
          } | null;
          id?: string | null;
          blockName?: string | null;
          blockType: 'myBlock';
        }[]
      | null;
  };
  richText4?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  blocks3?:
    | {
        richText5?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'myBlock2';
      }[]
    | null;
  array?:
    | {
        art?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        id?: string | null;
      }[]
    | null;
  arrayWithAccessFalse?:
    | {
        richText6?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        id?: string | null;
      }[]
    | null;
  blocks?:
    | {
        richText7?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'myBlock3';
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "regression2".
 */
export interface Regression2 {
  id: string;
  group?: {
    richText1?: {
      root: {
        type: string;
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        version: number;
      };
      [k: string]: unknown;
    } | null;
    text?: string | null;
  };
  array?:
    | {
        richText2?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hooks".
 */
export interface Hook {
  id: string;
  cannotMutateRequired: string;
  cannotMutateNotRequired?: string | null;
  canMutate?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'public-users';
        value: string | PublicUser;
      } | null)
    | ({
        relationTo: 'posts';
        value: string | Post;
      } | null)
    | ({
        relationTo: 'unrestricted';
        value: string | Unrestricted;
      } | null)
    | ({
        relationTo: 'relation-restricted';
        value: string | RelationRestricted;
      } | null)
    | ({
        relationTo: 'fully-restricted';
        value: string | FullyRestricted;
      } | null)
    | ({
        relationTo: 'read-only-collection';
        value: string | ReadOnlyCollection;
      } | null)
    | ({
        relationTo: 'user-restricted-collection';
        value: string | UserRestrictedCollection;
      } | null)
    | ({
        relationTo: 'create-not-update-collection';
        value: string | CreateNotUpdateCollection;
      } | null)
    | ({
        relationTo: 'restricted-versions';
        value: string | RestrictedVersion;
      } | null)
    | ({
        relationTo: 'restricted-versions-admin-panel';
        value: string | RestrictedVersionsAdminPanel;
      } | null)
    | ({
        relationTo: 'sibling-data';
        value: string | SiblingDatum;
      } | null)
    | ({
        relationTo: 'rely-on-request-headers';
        value: string | RelyOnRequestHeader;
      } | null)
    | ({
        relationTo: 'doc-level-access';
        value: string | DocLevelAccess;
      } | null)
    | ({
        relationTo: 'hidden-fields';
        value: string | HiddenField;
      } | null)
    | ({
        relationTo: 'hidden-access';
        value: string | HiddenAccess;
      } | null)
    | ({
        relationTo: 'hidden-access-count';
        value: string | HiddenAccessCount;
      } | null)
    | ({
        relationTo: 'fields-and-top-access';
        value: string | FieldsAndTopAccess;
      } | null)
    | ({
        relationTo: 'disabled';
        value: string | Disabled;
      } | null)
    | ({
        relationTo: 'rich-text';
        value: string | RichText;
      } | null)
    | ({
        relationTo: 'regression1';
        value: string | Regression1;
      } | null)
    | ({
        relationTo: 'regression2';
        value: string | Regression2;
      } | null)
    | ({
        relationTo: 'hooks';
        value: string | Hook;
      } | null);
  globalSlug?: string | null;
  user:
    | {
        relationTo: 'users';
        value: string | User;
      }
    | {
        relationTo: 'public-users';
        value: string | PublicUser;
      };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user:
    | {
        relationTo: 'users';
        value: string | User;
      }
    | {
        relationTo: 'public-users';
        value: string | PublicUser;
      };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  roles?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "public-users_select".
 */
export interface PublicUsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts_select".
 */
export interface PostsSelect<T extends boolean = true> {
  restrictedField?: T;
  group?:
    | T
    | {
        restrictedGroupText?: T;
      };
  restrictedRowText?: T;
  restrictedCollapsibleText?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "unrestricted_select".
 */
export interface UnrestrictedSelect<T extends boolean = true> {
  name?: T;
  userRestrictedDocs?: T;
  createNotUpdateDocs?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "relation-restricted_select".
 */
export interface RelationRestrictedSelect<T extends boolean = true> {
  name?: T;
  post?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "fully-restricted_select".
 */
export interface FullyRestrictedSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "read-only-collection_select".
 */
export interface ReadOnlyCollectionSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "user-restricted-collection_select".
 */
export interface UserRestrictedCollectionSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "create-not-update-collection_select".
 */
export interface CreateNotUpdateCollectionSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "restricted-versions_select".
 */
export interface RestrictedVersionsSelect<T extends boolean = true> {
  name?: T;
  hidden?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "restricted-versions-admin-panel_select".
 */
export interface RestrictedVersionsAdminPanelSelect<T extends boolean = true> {
  name?: T;
  hidden?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sibling-data_select".
 */
export interface SiblingDataSelect<T extends boolean = true> {
  array?:
    | T
    | {
        allowPublicReadability?: T;
        text?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "rely-on-request-headers_select".
 */
export interface RelyOnRequestHeadersSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "doc-level-access_select".
 */
export interface DocLevelAccessSelect<T extends boolean = true> {
  approvedForRemoval?: T;
  approvedTitle?: T;
  lockTitle?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hidden-fields_select".
 */
export interface HiddenFieldsSelect<T extends boolean = true> {
  title?: T;
  partiallyHiddenGroup?:
    | T
    | {
        name?: T;
        value?: T;
      };
  partiallyHiddenArray?:
    | T
    | {
        name?: T;
        value?: T;
        id?: T;
      };
  hidden?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hidden-access_select".
 */
export interface HiddenAccessSelect<T extends boolean = true> {
  title?: T;
  hidden?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hidden-access-count_select".
 */
export interface HiddenAccessCountSelect<T extends boolean = true> {
  title?: T;
  hidden?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "fields-and-top-access_select".
 */
export interface FieldsAndTopAccessSelect<T extends boolean = true> {
  secret?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "disabled_select".
 */
export interface DisabledSelect<T extends boolean = true> {
  group?:
    | T
    | {
        text?: T;
      };
  namedTab?:
    | T
    | {
        text?: T;
      };
  unnamedTab?: T;
  array?:
    | T
    | {
        text?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "rich-text_select".
 */
export interface RichTextSelect<T extends boolean = true> {
  blocks?:
    | T
    | {
        richText?:
          | T
          | {
              richText?: T;
              id?: T;
              blockName?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "regression1_select".
 */
export interface Regression1Select<T extends boolean = true> {
  group1?:
    | T
    | {
        richText1?: T;
        text?: T;
      };
  tab1?:
    | T
    | {
        richText2?: T;
        blocks2?:
          | T
          | {
              myBlock?:
                | T
                | {
                    richText3?: T;
                    id?: T;
                    blockName?: T;
                  };
            };
      };
  richText4?: T;
  blocks3?:
    | T
    | {
        myBlock2?:
          | T
          | {
              richText5?: T;
              id?: T;
              blockName?: T;
            };
      };
  array?:
    | T
    | {
        art?: T;
        id?: T;
      };
  arrayWithAccessFalse?:
    | T
    | {
        richText6?: T;
        id?: T;
      };
  blocks?:
    | T
    | {
        myBlock3?:
          | T
          | {
              richText7?: T;
              id?: T;
              blockName?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "regression2_select".
 */
export interface Regression2Select<T extends boolean = true> {
  group?:
    | T
    | {
        richText1?: T;
        text?: T;
      };
  array?:
    | T
    | {
        richText2?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "hooks_select".
 */
export interface HooksSelect<T extends boolean = true> {
  cannotMutateRequired?: T;
  cannotMutateNotRequired?: T;
  canMutate?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings".
 */
export interface Setting {
  id: string;
  test?: boolean | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "test".
 */
export interface Test {
  id: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "read-only-global".
 */
export interface ReadOnlyGlobal {
  id: string;
  name?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "user-restricted-global".
 */
export interface UserRestrictedGlobal {
  id: string;
  name?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "read-not-update-global".
 */
export interface ReadNotUpdateGlobal {
  id: string;
  name?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings_select".
 */
export interface SettingsSelect<T extends boolean = true> {
  test?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "test_select".
 */
export interface TestSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "read-only-global_select".
 */
export interface ReadOnlyGlobalSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "user-restricted-global_select".
 */
export interface UserRestrictedGlobalSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "read-not-update-global_select".
 */
export interface ReadNotUpdateGlobalSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  // @ts-ignore 
  export interface GeneratedTypes extends Config {}
}