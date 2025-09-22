
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Content
 * 
 */
export type Content = $Result.DefaultSelection<Prisma.$ContentPayload>
/**
 * Model Playlist
 * 
 */
export type Playlist = $Result.DefaultSelection<Prisma.$PlaylistPayload>
/**
 * Model PlaylistItem
 * 
 */
export type PlaylistItem = $Result.DefaultSelection<Prisma.$PlaylistItemPayload>
/**
 * Model Display
 * 
 */
export type Display = $Result.DefaultSelection<Prisma.$DisplayPayload>
/**
 * Model FileThumbnail
 * 
 */
export type FileThumbnail = $Result.DefaultSelection<Prisma.$FileThumbnailPayload>
/**
 * Model FileVersion
 * 
 */
export type FileVersion = $Result.DefaultSelection<Prisma.$FileVersionPayload>
/**
 * Model ErrorLog
 * 
 */
export type ErrorLog = $Result.DefaultSelection<Prisma.$ErrorLogPayload>
/**
 * Model ViewLog
 * 
 */
export type ViewLog = $Result.DefaultSelection<Prisma.$ViewLogPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Alert
 * 
 */
export type Alert = $Result.DefaultSelection<Prisma.$AlertPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Permission: {
  CONTENT_CREATE: 'CONTENT_CREATE',
  PLAYLIST_ASSIGN: 'PLAYLIST_ASSIGN',
  USER_CONTROL: 'USER_CONTROL',
  CONTENT_DELETE: 'CONTENT_DELETE',
  PLAYLIST_CREATE: 'PLAYLIST_CREATE',
  PLAYLIST_DELETE: 'PLAYLIST_DELETE',
  DISPLAY_CONTROL: 'DISPLAY_CONTROL',
  SYSTEM_SETTINGS: 'SYSTEM_SETTINGS'
};

export type Permission = (typeof Permission)[keyof typeof Permission]


export const ContentType: {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  PDF: 'PDF',
  URL: 'URL',
  YOUTUBE: 'YOUTUBE'
};

export type ContentType = (typeof ContentType)[keyof typeof ContentType]


export const TransitionType: {
  CUT: 'CUT',
  FADE: 'FADE',
  CROSSFADE: 'CROSSFADE',
  DISSOLVE: 'DISSOLVE',
  WIPE: 'WIPE',
  ZOOM: 'ZOOM',
  PUSH: 'PUSH',
  SLIDE_OVER: 'SLIDE_OVER',
  IRIS: 'IRIS',
  MORPH: 'MORPH',
  BURN: 'BURN',
  BARN_DOORS: 'BARN_DOORS',
  PAGE_ROLL: 'PAGE_ROLL',
  PEEL: 'PEEL'
};

export type TransitionType = (typeof TransitionType)[keyof typeof TransitionType]


export const DisplayOrientation: {
  LANDSCAPE: 'LANDSCAPE',
  PORTRAIT: 'PORTRAIT'
};

export type DisplayOrientation = (typeof DisplayOrientation)[keyof typeof DisplayOrientation]


export const ProcessingStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type ProcessingStatus = (typeof ProcessingStatus)[keyof typeof ProcessingStatus]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const AlertType: {
  INFO: 'INFO',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
  CRITICAL: 'CRITICAL'
};

export type AlertType = (typeof AlertType)[keyof typeof AlertType]


export const AlertCategory: {
  DISPLAY: 'DISPLAY',
  CONTENT: 'CONTENT',
  PLAYLIST: 'PLAYLIST',
  SYSTEM: 'SYSTEM',
  USER: 'USER'
};

export type AlertCategory = (typeof AlertCategory)[keyof typeof AlertCategory]

}

export type Permission = $Enums.Permission

export const Permission: typeof $Enums.Permission

export type ContentType = $Enums.ContentType

export const ContentType: typeof $Enums.ContentType

export type TransitionType = $Enums.TransitionType

export const TransitionType: typeof $Enums.TransitionType

export type DisplayOrientation = $Enums.DisplayOrientation

export const DisplayOrientation: typeof $Enums.DisplayOrientation

export type ProcessingStatus = $Enums.ProcessingStatus

export const ProcessingStatus: typeof $Enums.ProcessingStatus

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type AlertType = $Enums.AlertType

export const AlertType: typeof $Enums.AlertType

export type AlertCategory = $Enums.AlertCategory

export const AlertCategory: typeof $Enums.AlertCategory

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.content`: Exposes CRUD operations for the **Content** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contents
    * const contents = await prisma.content.findMany()
    * ```
    */
  get content(): Prisma.ContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **Playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.PlaylistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlistItem`: Exposes CRUD operations for the **PlaylistItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlaylistItems
    * const playlistItems = await prisma.playlistItem.findMany()
    * ```
    */
  get playlistItem(): Prisma.PlaylistItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.display`: Exposes CRUD operations for the **Display** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Displays
    * const displays = await prisma.display.findMany()
    * ```
    */
  get display(): Prisma.DisplayDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fileThumbnail`: Exposes CRUD operations for the **FileThumbnail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileThumbnails
    * const fileThumbnails = await prisma.fileThumbnail.findMany()
    * ```
    */
  get fileThumbnail(): Prisma.FileThumbnailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fileVersion`: Exposes CRUD operations for the **FileVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FileVersions
    * const fileVersions = await prisma.fileVersion.findMany()
    * ```
    */
  get fileVersion(): Prisma.FileVersionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.errorLog`: Exposes CRUD operations for the **ErrorLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ErrorLogs
    * const errorLogs = await prisma.errorLog.findMany()
    * ```
    */
  get errorLog(): Prisma.ErrorLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viewLog`: Exposes CRUD operations for the **ViewLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ViewLogs
    * const viewLogs = await prisma.viewLog.findMany()
    * ```
    */
  get viewLog(): Prisma.ViewLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.AlertDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Content: 'Content',
    Playlist: 'Playlist',
    PlaylistItem: 'PlaylistItem',
    Display: 'Display',
    FileThumbnail: 'FileThumbnail',
    FileVersion: 'FileVersion',
    ErrorLog: 'ErrorLog',
    ViewLog: 'ViewLog',
    Tag: 'Tag',
    Alert: 'Alert'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "content" | "playlist" | "playlistItem" | "display" | "fileThumbnail" | "fileVersion" | "errorLog" | "viewLog" | "tag" | "alert"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Content: {
        payload: Prisma.$ContentPayload<ExtArgs>
        fields: Prisma.ContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findFirst: {
            args: Prisma.ContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findMany: {
            args: Prisma.ContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          create: {
            args: Prisma.ContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          createMany: {
            args: Prisma.ContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          delete: {
            args: Prisma.ContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          update: {
            args: Prisma.ContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          deleteMany: {
            args: Prisma.ContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          upsert: {
            args: Prisma.ContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          aggregate: {
            args: Prisma.ContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContent>
          }
          groupBy: {
            args: Prisma.ContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentCountArgs<ExtArgs>
            result: $Utils.Optional<ContentCountAggregateOutputType> | number
          }
        }
      }
      Playlist: {
        payload: Prisma.$PlaylistPayload<ExtArgs>
        fields: Prisma.PlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findFirst: {
            args: Prisma.PlaylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findMany: {
            args: Prisma.PlaylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          create: {
            args: Prisma.PlaylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          createMany: {
            args: Prisma.PlaylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          delete: {
            args: Prisma.PlaylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          update: {
            args: Prisma.PlaylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaylistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          upsert: {
            args: Prisma.PlaylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.PlaylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      PlaylistItem: {
        payload: Prisma.$PlaylistItemPayload<ExtArgs>
        fields: Prisma.PlaylistItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistItemPayload>
          }
          findFirst: {
            args: Prisma.PlaylistItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistItemPayload>
          }
          findMany: {
            args: Prisma.PlaylistItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistItemPayload>[]
          }
          create: {
            args: Prisma.PlaylistItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistItemPayload>
          }
          createMany: {
            args: Prisma.PlaylistItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistItemPayload>[]
          }
          delete: {
            args: Prisma.PlaylistItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistItemPayload>
          }
          update: {
            args: Prisma.PlaylistItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistItemPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaylistItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistItemPayload>[]
          }
          upsert: {
            args: Prisma.PlaylistItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistItemPayload>
          }
          aggregate: {
            args: Prisma.PlaylistItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylistItem>
          }
          groupBy: {
            args: Prisma.PlaylistItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistItemCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistItemCountAggregateOutputType> | number
          }
        }
      }
      Display: {
        payload: Prisma.$DisplayPayload<ExtArgs>
        fields: Prisma.DisplayFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisplayFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisplayPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisplayFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisplayPayload>
          }
          findFirst: {
            args: Prisma.DisplayFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisplayPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisplayFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisplayPayload>
          }
          findMany: {
            args: Prisma.DisplayFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisplayPayload>[]
          }
          create: {
            args: Prisma.DisplayCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisplayPayload>
          }
          createMany: {
            args: Prisma.DisplayCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisplayCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisplayPayload>[]
          }
          delete: {
            args: Prisma.DisplayDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisplayPayload>
          }
          update: {
            args: Prisma.DisplayUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisplayPayload>
          }
          deleteMany: {
            args: Prisma.DisplayDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisplayUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisplayUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisplayPayload>[]
          }
          upsert: {
            args: Prisma.DisplayUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisplayPayload>
          }
          aggregate: {
            args: Prisma.DisplayAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDisplay>
          }
          groupBy: {
            args: Prisma.DisplayGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisplayGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisplayCountArgs<ExtArgs>
            result: $Utils.Optional<DisplayCountAggregateOutputType> | number
          }
        }
      }
      FileThumbnail: {
        payload: Prisma.$FileThumbnailPayload<ExtArgs>
        fields: Prisma.FileThumbnailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileThumbnailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileThumbnailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileThumbnailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileThumbnailPayload>
          }
          findFirst: {
            args: Prisma.FileThumbnailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileThumbnailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileThumbnailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileThumbnailPayload>
          }
          findMany: {
            args: Prisma.FileThumbnailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileThumbnailPayload>[]
          }
          create: {
            args: Prisma.FileThumbnailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileThumbnailPayload>
          }
          createMany: {
            args: Prisma.FileThumbnailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileThumbnailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileThumbnailPayload>[]
          }
          delete: {
            args: Prisma.FileThumbnailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileThumbnailPayload>
          }
          update: {
            args: Prisma.FileThumbnailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileThumbnailPayload>
          }
          deleteMany: {
            args: Prisma.FileThumbnailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileThumbnailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileThumbnailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileThumbnailPayload>[]
          }
          upsert: {
            args: Prisma.FileThumbnailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileThumbnailPayload>
          }
          aggregate: {
            args: Prisma.FileThumbnailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileThumbnail>
          }
          groupBy: {
            args: Prisma.FileThumbnailGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileThumbnailGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileThumbnailCountArgs<ExtArgs>
            result: $Utils.Optional<FileThumbnailCountAggregateOutputType> | number
          }
        }
      }
      FileVersion: {
        payload: Prisma.$FileVersionPayload<ExtArgs>
        fields: Prisma.FileVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileVersionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileVersionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>
          }
          findFirst: {
            args: Prisma.FileVersionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileVersionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>
          }
          findMany: {
            args: Prisma.FileVersionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>[]
          }
          create: {
            args: Prisma.FileVersionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>
          }
          createMany: {
            args: Prisma.FileVersionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileVersionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>[]
          }
          delete: {
            args: Prisma.FileVersionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>
          }
          update: {
            args: Prisma.FileVersionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>
          }
          deleteMany: {
            args: Prisma.FileVersionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileVersionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileVersionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>[]
          }
          upsert: {
            args: Prisma.FileVersionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FileVersionPayload>
          }
          aggregate: {
            args: Prisma.FileVersionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFileVersion>
          }
          groupBy: {
            args: Prisma.FileVersionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileVersionCountArgs<ExtArgs>
            result: $Utils.Optional<FileVersionCountAggregateOutputType> | number
          }
        }
      }
      ErrorLog: {
        payload: Prisma.$ErrorLogPayload<ExtArgs>
        fields: Prisma.ErrorLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ErrorLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ErrorLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          findFirst: {
            args: Prisma.ErrorLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ErrorLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          findMany: {
            args: Prisma.ErrorLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>[]
          }
          create: {
            args: Prisma.ErrorLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          createMany: {
            args: Prisma.ErrorLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ErrorLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>[]
          }
          delete: {
            args: Prisma.ErrorLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          update: {
            args: Prisma.ErrorLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          deleteMany: {
            args: Prisma.ErrorLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ErrorLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ErrorLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>[]
          }
          upsert: {
            args: Prisma.ErrorLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ErrorLogPayload>
          }
          aggregate: {
            args: Prisma.ErrorLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateErrorLog>
          }
          groupBy: {
            args: Prisma.ErrorLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ErrorLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ErrorLogCountArgs<ExtArgs>
            result: $Utils.Optional<ErrorLogCountAggregateOutputType> | number
          }
        }
      }
      ViewLog: {
        payload: Prisma.$ViewLogPayload<ExtArgs>
        fields: Prisma.ViewLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewLogPayload>
          }
          findFirst: {
            args: Prisma.ViewLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewLogPayload>
          }
          findMany: {
            args: Prisma.ViewLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewLogPayload>[]
          }
          create: {
            args: Prisma.ViewLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewLogPayload>
          }
          createMany: {
            args: Prisma.ViewLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViewLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewLogPayload>[]
          }
          delete: {
            args: Prisma.ViewLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewLogPayload>
          }
          update: {
            args: Prisma.ViewLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewLogPayload>
          }
          deleteMany: {
            args: Prisma.ViewLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViewLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewLogPayload>[]
          }
          upsert: {
            args: Prisma.ViewLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewLogPayload>
          }
          aggregate: {
            args: Prisma.ViewLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViewLog>
          }
          groupBy: {
            args: Prisma.ViewLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewLogCountArgs<ExtArgs>
            result: $Utils.Optional<ViewLogCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Alert: {
        payload: Prisma.$AlertPayload<ExtArgs>
        fields: Prisma.AlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findFirst: {
            args: Prisma.AlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findMany: {
            args: Prisma.AlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          create: {
            args: Prisma.AlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          createMany: {
            args: Prisma.AlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          delete: {
            args: Prisma.AlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          update: {
            args: Prisma.AlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          deleteMany: {
            args: Prisma.AlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          upsert: {
            args: Prisma.AlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.AlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    content?: ContentOmit
    playlist?: PlaylistOmit
    playlistItem?: PlaylistItemOmit
    display?: DisplayOmit
    fileThumbnail?: FileThumbnailOmit
    fileVersion?: FileVersionOmit
    errorLog?: ErrorLogOmit
    viewLog?: ViewLogOmit
    tag?: TagOmit
    alert?: AlertOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    content: number
    fileVersions: number
    playlists: number
    sharedPlaylists: number
    alerts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | UserCountOutputTypeCountContentArgs
    fileVersions?: boolean | UserCountOutputTypeCountFileVersionsArgs
    playlists?: boolean | UserCountOutputTypeCountPlaylistsArgs
    sharedPlaylists?: boolean | UserCountOutputTypeCountSharedPlaylistsArgs
    alerts?: boolean | UserCountOutputTypeCountAlertsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFileVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileVersionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSharedPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }


  /**
   * Count Type ContentCountOutputType
   */

  export type ContentCountOutputType = {
    thumbnails: number
    versions: number
    playlistItems: number
    viewLogs: number
  }

  export type ContentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thumbnails?: boolean | ContentCountOutputTypeCountThumbnailsArgs
    versions?: boolean | ContentCountOutputTypeCountVersionsArgs
    playlistItems?: boolean | ContentCountOutputTypeCountPlaylistItemsArgs
    viewLogs?: boolean | ContentCountOutputTypeCountViewLogsArgs
  }

  // Custom InputTypes
  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentCountOutputType
     */
    select?: ContentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountThumbnailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileThumbnailWhereInput
  }

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileVersionWhereInput
  }

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountPlaylistItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistItemWhereInput
  }

  /**
   * ContentCountOutputType without action
   */
  export type ContentCountOutputTypeCountViewLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewLogWhereInput
  }


  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    displays: number
    items: number
    viewLogs: number
    tags: number
    sharedWith: number
  }

  export type PlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    displays?: boolean | PlaylistCountOutputTypeCountDisplaysArgs
    items?: boolean | PlaylistCountOutputTypeCountItemsArgs
    viewLogs?: boolean | PlaylistCountOutputTypeCountViewLogsArgs
    tags?: boolean | PlaylistCountOutputTypeCountTagsArgs
    sharedWith?: boolean | PlaylistCountOutputTypeCountSharedWithArgs
  }

  // Custom InputTypes
  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountDisplaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisplayWhereInput
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistItemWhereInput
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountViewLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewLogWhereInput
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountSharedWithArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type DisplayCountOutputType
   */

  export type DisplayCountOutputType = {
    errorLogs: number
    viewLogs: number
    alerts: number
  }

  export type DisplayCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    errorLogs?: boolean | DisplayCountOutputTypeCountErrorLogsArgs
    viewLogs?: boolean | DisplayCountOutputTypeCountViewLogsArgs
    alerts?: boolean | DisplayCountOutputTypeCountAlertsArgs
  }

  // Custom InputTypes
  /**
   * DisplayCountOutputType without action
   */
  export type DisplayCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DisplayCountOutputType
     */
    select?: DisplayCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DisplayCountOutputType without action
   */
  export type DisplayCountOutputTypeCountErrorLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ErrorLogWhereInput
  }

  /**
   * DisplayCountOutputType without action
   */
  export type DisplayCountOutputTypeCountViewLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewLogWhereInput
  }

  /**
   * DisplayCountOutputType without action
   */
  export type DisplayCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    playlists: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlists?: boolean | TagCountOutputTypeCountPlaylistsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    firstName: number
    lastName: number
    status: number
    permissions: number
    createdAt: number
    updatedAt: number
    lastLogin: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    status?: true
    permissions?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    firstName: string | null
    lastName: string | null
    status: $Enums.UserStatus
    permissions: $Enums.Permission[]
    createdAt: Date
    updatedAt: Date
    lastLogin: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    status?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    content?: boolean | User$contentArgs<ExtArgs>
    fileVersions?: boolean | User$fileVersionsArgs<ExtArgs>
    playlists?: boolean | User$playlistsArgs<ExtArgs>
    sharedPlaylists?: boolean | User$sharedPlaylistsArgs<ExtArgs>
    alerts?: boolean | User$alertsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    status?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    status?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    status?: boolean
    permissions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "firstName" | "lastName" | "status" | "permissions" | "createdAt" | "updatedAt" | "lastLogin", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | User$contentArgs<ExtArgs>
    fileVersions?: boolean | User$fileVersionsArgs<ExtArgs>
    playlists?: boolean | User$playlistsArgs<ExtArgs>
    sharedPlaylists?: boolean | User$sharedPlaylistsArgs<ExtArgs>
    alerts?: boolean | User$alertsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      content: Prisma.$ContentPayload<ExtArgs>[]
      fileVersions: Prisma.$FileVersionPayload<ExtArgs>[]
      playlists: Prisma.$PlaylistPayload<ExtArgs>[]
      sharedPlaylists: Prisma.$PlaylistPayload<ExtArgs>[]
      alerts: Prisma.$AlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      firstName: string | null
      lastName: string | null
      status: $Enums.UserStatus
      permissions: $Enums.Permission[]
      createdAt: Date
      updatedAt: Date
      lastLogin: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    content<T extends User$contentArgs<ExtArgs> = {}>(args?: Subset<T, User$contentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fileVersions<T extends User$fileVersionsArgs<ExtArgs> = {}>(args?: Subset<T, User$fileVersionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playlists<T extends User$playlistsArgs<ExtArgs> = {}>(args?: Subset<T, User$playlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sharedPlaylists<T extends User$sharedPlaylistsArgs<ExtArgs> = {}>(args?: Subset<T, User$sharedPlaylistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alerts<T extends User$alertsArgs<ExtArgs> = {}>(args?: Subset<T, User$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly permissions: FieldRef<"User", 'Permission[]'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.content
   */
  export type User$contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    cursor?: ContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * User.fileVersions
   */
  export type User$fileVersionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileVersion
     */
    omit?: FileVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    where?: FileVersionWhereInput
    orderBy?: FileVersionOrderByWithRelationInput | FileVersionOrderByWithRelationInput[]
    cursor?: FileVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileVersionScalarFieldEnum | FileVersionScalarFieldEnum[]
  }

  /**
   * User.playlists
   */
  export type User$playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * User.sharedPlaylists
   */
  export type User$sharedPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * User.alerts
   */
  export type User$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Content
   */

  export type AggregateContent = {
    _count: ContentCountAggregateOutputType | null
    _avg: ContentAvgAggregateOutputType | null
    _sum: ContentSumAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  export type ContentAvgAggregateOutputType = {
    fileSize: number | null
    duration: number | null
  }

  export type ContentSumAggregateOutputType = {
    fileSize: bigint | null
    duration: number | null
  }

  export type ContentMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ContentType | null
    filePath: string | null
    backgroundColor: string | null
    fileSize: bigint | null
    mimeType: string | null
    originalName: string | null
    fileHash: string | null
    processingStatus: $Enums.ProcessingStatus | null
    processingError: string | null
    storageLocation: string | null
    uploadedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    createdBy: string | null
    duration: number | null
    fileName: string | null
    description: string | null
  }

  export type ContentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.ContentType | null
    filePath: string | null
    backgroundColor: string | null
    fileSize: bigint | null
    mimeType: string | null
    originalName: string | null
    fileHash: string | null
    processingStatus: $Enums.ProcessingStatus | null
    processingError: string | null
    storageLocation: string | null
    uploadedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    createdBy: string | null
    duration: number | null
    fileName: string | null
    description: string | null
  }

  export type ContentCountAggregateOutputType = {
    id: number
    name: number
    type: number
    filePath: number
    metadata: number
    backgroundColor: number
    cropSettings: number
    fileSize: number
    mimeType: number
    originalName: number
    fileHash: number
    processingStatus: number
    processingError: number
    storageLocation: number
    uploadedBy: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    createdBy: number
    duration: number
    fileName: number
    description: number
    _all: number
  }


  export type ContentAvgAggregateInputType = {
    fileSize?: true
    duration?: true
  }

  export type ContentSumAggregateInputType = {
    fileSize?: true
    duration?: true
  }

  export type ContentMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    filePath?: true
    backgroundColor?: true
    fileSize?: true
    mimeType?: true
    originalName?: true
    fileHash?: true
    processingStatus?: true
    processingError?: true
    storageLocation?: true
    uploadedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    createdBy?: true
    duration?: true
    fileName?: true
    description?: true
  }

  export type ContentMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    filePath?: true
    backgroundColor?: true
    fileSize?: true
    mimeType?: true
    originalName?: true
    fileHash?: true
    processingStatus?: true
    processingError?: true
    storageLocation?: true
    uploadedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    createdBy?: true
    duration?: true
    fileName?: true
    description?: true
  }

  export type ContentCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    filePath?: true
    metadata?: true
    backgroundColor?: true
    cropSettings?: true
    fileSize?: true
    mimeType?: true
    originalName?: true
    fileHash?: true
    processingStatus?: true
    processingError?: true
    storageLocation?: true
    uploadedBy?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    createdBy?: true
    duration?: true
    fileName?: true
    description?: true
    _all?: true
  }

  export type ContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Content to aggregate.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contents
    **/
    _count?: true | ContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentMaxAggregateInputType
  }

  export type GetContentAggregateType<T extends ContentAggregateArgs> = {
        [P in keyof T & keyof AggregateContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContent[P]>
      : GetScalarType<T[P], AggregateContent[P]>
  }




  export type ContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithAggregationInput | ContentOrderByWithAggregationInput[]
    by: ContentScalarFieldEnum[] | ContentScalarFieldEnum
    having?: ContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentCountAggregateInputType | true
    _avg?: ContentAvgAggregateInputType
    _sum?: ContentSumAggregateInputType
    _min?: ContentMinAggregateInputType
    _max?: ContentMaxAggregateInputType
  }

  export type ContentGroupByOutputType = {
    id: string
    name: string
    type: $Enums.ContentType
    filePath: string | null
    metadata: JsonValue | null
    backgroundColor: string | null
    cropSettings: JsonValue | null
    fileSize: bigint | null
    mimeType: string | null
    originalName: string | null
    fileHash: string | null
    processingStatus: $Enums.ProcessingStatus
    processingError: string | null
    storageLocation: string | null
    uploadedBy: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    createdBy: string | null
    duration: number | null
    fileName: string | null
    description: string | null
    _count: ContentCountAggregateOutputType | null
    _avg: ContentAvgAggregateOutputType | null
    _sum: ContentSumAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  type GetContentGroupByPayload<T extends ContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentGroupByOutputType[P]>
            : GetScalarType<T[P], ContentGroupByOutputType[P]>
        }
      >
    >


  export type ContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    filePath?: boolean
    metadata?: boolean
    backgroundColor?: boolean
    cropSettings?: boolean
    fileSize?: boolean
    mimeType?: boolean
    originalName?: boolean
    fileHash?: boolean
    processingStatus?: boolean
    processingError?: boolean
    storageLocation?: boolean
    uploadedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    duration?: boolean
    fileName?: boolean
    description?: boolean
    uploadedByUser?: boolean | UserDefaultArgs<ExtArgs>
    thumbnails?: boolean | Content$thumbnailsArgs<ExtArgs>
    versions?: boolean | Content$versionsArgs<ExtArgs>
    playlistItems?: boolean | Content$playlistItemsArgs<ExtArgs>
    viewLogs?: boolean | Content$viewLogsArgs<ExtArgs>
    _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    filePath?: boolean
    metadata?: boolean
    backgroundColor?: boolean
    cropSettings?: boolean
    fileSize?: boolean
    mimeType?: boolean
    originalName?: boolean
    fileHash?: boolean
    processingStatus?: boolean
    processingError?: boolean
    storageLocation?: boolean
    uploadedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    duration?: boolean
    fileName?: boolean
    description?: boolean
    uploadedByUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    filePath?: boolean
    metadata?: boolean
    backgroundColor?: boolean
    cropSettings?: boolean
    fileSize?: boolean
    mimeType?: boolean
    originalName?: boolean
    fileHash?: boolean
    processingStatus?: boolean
    processingError?: boolean
    storageLocation?: boolean
    uploadedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    duration?: boolean
    fileName?: boolean
    description?: boolean
    uploadedByUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    filePath?: boolean
    metadata?: boolean
    backgroundColor?: boolean
    cropSettings?: boolean
    fileSize?: boolean
    mimeType?: boolean
    originalName?: boolean
    fileHash?: boolean
    processingStatus?: boolean
    processingError?: boolean
    storageLocation?: boolean
    uploadedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    createdBy?: boolean
    duration?: boolean
    fileName?: boolean
    description?: boolean
  }

  export type ContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "filePath" | "metadata" | "backgroundColor" | "cropSettings" | "fileSize" | "mimeType" | "originalName" | "fileHash" | "processingStatus" | "processingError" | "storageLocation" | "uploadedBy" | "createdAt" | "updatedAt" | "deletedAt" | "createdBy" | "duration" | "fileName" | "description", ExtArgs["result"]["content"]>
  export type ContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedByUser?: boolean | UserDefaultArgs<ExtArgs>
    thumbnails?: boolean | Content$thumbnailsArgs<ExtArgs>
    versions?: boolean | Content$versionsArgs<ExtArgs>
    playlistItems?: boolean | Content$playlistItemsArgs<ExtArgs>
    viewLogs?: boolean | Content$viewLogsArgs<ExtArgs>
    _count?: boolean | ContentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedByUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedByUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Content"
    objects: {
      uploadedByUser: Prisma.$UserPayload<ExtArgs>
      thumbnails: Prisma.$FileThumbnailPayload<ExtArgs>[]
      versions: Prisma.$FileVersionPayload<ExtArgs>[]
      playlistItems: Prisma.$PlaylistItemPayload<ExtArgs>[]
      viewLogs: Prisma.$ViewLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.ContentType
      filePath: string | null
      metadata: Prisma.JsonValue | null
      backgroundColor: string | null
      cropSettings: Prisma.JsonValue | null
      fileSize: bigint | null
      mimeType: string | null
      originalName: string | null
      fileHash: string | null
      processingStatus: $Enums.ProcessingStatus
      processingError: string | null
      storageLocation: string | null
      uploadedBy: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      createdBy: string | null
      duration: number | null
      fileName: string | null
      description: string | null
    }, ExtArgs["result"]["content"]>
    composites: {}
  }

  type ContentGetPayload<S extends boolean | null | undefined | ContentDefaultArgs> = $Result.GetResult<Prisma.$ContentPayload, S>

  type ContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentCountAggregateInputType | true
    }

  export interface ContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Content'], meta: { name: 'Content' } }
    /**
     * Find zero or one Content that matches the filter.
     * @param {ContentFindUniqueArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentFindUniqueArgs>(args: SelectSubset<T, ContentFindUniqueArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Content that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentFindUniqueOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentFindFirstArgs>(args?: SelectSubset<T, ContentFindFirstArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contents
     * const contents = await prisma.content.findMany()
     * 
     * // Get first 10 Contents
     * const contents = await prisma.content.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentWithIdOnly = await prisma.content.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentFindManyArgs>(args?: SelectSubset<T, ContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Content.
     * @param {ContentCreateArgs} args - Arguments to create a Content.
     * @example
     * // Create one Content
     * const Content = await prisma.content.create({
     *   data: {
     *     // ... data to create a Content
     *   }
     * })
     * 
     */
    create<T extends ContentCreateArgs>(args: SelectSubset<T, ContentCreateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contents.
     * @param {ContentCreateManyArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentCreateManyArgs>(args?: SelectSubset<T, ContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contents and returns the data saved in the database.
     * @param {ContentCreateManyAndReturnArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contents and only return the `id`
     * const contentWithIdOnly = await prisma.content.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Content.
     * @param {ContentDeleteArgs} args - Arguments to delete one Content.
     * @example
     * // Delete one Content
     * const Content = await prisma.content.delete({
     *   where: {
     *     // ... filter to delete one Content
     *   }
     * })
     * 
     */
    delete<T extends ContentDeleteArgs>(args: SelectSubset<T, ContentDeleteArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Content.
     * @param {ContentUpdateArgs} args - Arguments to update one Content.
     * @example
     * // Update one Content
     * const content = await prisma.content.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentUpdateArgs>(args: SelectSubset<T, ContentUpdateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contents.
     * @param {ContentDeleteManyArgs} args - Arguments to filter Contents to delete.
     * @example
     * // Delete a few Contents
     * const { count } = await prisma.content.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentDeleteManyArgs>(args?: SelectSubset<T, ContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentUpdateManyArgs>(args: SelectSubset<T, ContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents and returns the data updated in the database.
     * @param {ContentUpdateManyAndReturnArgs} args - Arguments to update many Contents.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contents and only return the `id`
     * const contentWithIdOnly = await prisma.content.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContentUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Content.
     * @param {ContentUpsertArgs} args - Arguments to update or create a Content.
     * @example
     * // Update or create a Content
     * const content = await prisma.content.upsert({
     *   create: {
     *     // ... data to create a Content
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Content we want to update
     *   }
     * })
     */
    upsert<T extends ContentUpsertArgs>(args: SelectSubset<T, ContentUpsertArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentCountArgs} args - Arguments to filter Contents to count.
     * @example
     * // Count the number of Contents
     * const count = await prisma.content.count({
     *   where: {
     *     // ... the filter for the Contents we want to count
     *   }
     * })
    **/
    count<T extends ContentCountArgs>(
      args?: Subset<T, ContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContentAggregateArgs>(args: Subset<T, ContentAggregateArgs>): Prisma.PrismaPromise<GetContentAggregateType<T>>

    /**
     * Group by Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentGroupByArgs['orderBy'] }
        : { orderBy?: ContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Content model
   */
  readonly fields: ContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Content.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uploadedByUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    thumbnails<T extends Content$thumbnailsArgs<ExtArgs> = {}>(args?: Subset<T, Content$thumbnailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileThumbnailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    versions<T extends Content$versionsArgs<ExtArgs> = {}>(args?: Subset<T, Content$versionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playlistItems<T extends Content$playlistItemsArgs<ExtArgs> = {}>(args?: Subset<T, Content$playlistItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewLogs<T extends Content$viewLogsArgs<ExtArgs> = {}>(args?: Subset<T, Content$viewLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Content model
   */
  interface ContentFieldRefs {
    readonly id: FieldRef<"Content", 'String'>
    readonly name: FieldRef<"Content", 'String'>
    readonly type: FieldRef<"Content", 'ContentType'>
    readonly filePath: FieldRef<"Content", 'String'>
    readonly metadata: FieldRef<"Content", 'Json'>
    readonly backgroundColor: FieldRef<"Content", 'String'>
    readonly cropSettings: FieldRef<"Content", 'Json'>
    readonly fileSize: FieldRef<"Content", 'BigInt'>
    readonly mimeType: FieldRef<"Content", 'String'>
    readonly originalName: FieldRef<"Content", 'String'>
    readonly fileHash: FieldRef<"Content", 'String'>
    readonly processingStatus: FieldRef<"Content", 'ProcessingStatus'>
    readonly processingError: FieldRef<"Content", 'String'>
    readonly storageLocation: FieldRef<"Content", 'String'>
    readonly uploadedBy: FieldRef<"Content", 'String'>
    readonly createdAt: FieldRef<"Content", 'DateTime'>
    readonly updatedAt: FieldRef<"Content", 'DateTime'>
    readonly deletedAt: FieldRef<"Content", 'DateTime'>
    readonly createdBy: FieldRef<"Content", 'String'>
    readonly duration: FieldRef<"Content", 'Int'>
    readonly fileName: FieldRef<"Content", 'String'>
    readonly description: FieldRef<"Content", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Content findUnique
   */
  export type ContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findUniqueOrThrow
   */
  export type ContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findFirst
   */
  export type ContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findFirstOrThrow
   */
  export type ContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findMany
   */
  export type ContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Contents to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content create
   */
  export type ContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to create a Content.
     */
    data: XOR<ContentCreateInput, ContentUncheckedCreateInput>
  }

  /**
   * Content createMany
   */
  export type ContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contents.
     */
    data: ContentCreateManyInput | ContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Content createManyAndReturn
   */
  export type ContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * The data used to create many Contents.
     */
    data: ContentCreateManyInput | ContentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Content update
   */
  export type ContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to update a Content.
     */
    data: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
    /**
     * Choose, which Content to update.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content updateMany
   */
  export type ContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to update.
     */
    limit?: number
  }

  /**
   * Content updateManyAndReturn
   */
  export type ContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Content upsert
   */
  export type ContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The filter to search for the Content to update in case it exists.
     */
    where: ContentWhereUniqueInput
    /**
     * In case the Content found by the `where` argument doesn't exist, create a new Content with this data.
     */
    create: XOR<ContentCreateInput, ContentUncheckedCreateInput>
    /**
     * In case the Content was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
  }

  /**
   * Content delete
   */
  export type ContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter which Content to delete.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content deleteMany
   */
  export type ContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contents to delete
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to delete.
     */
    limit?: number
  }

  /**
   * Content.thumbnails
   */
  export type Content$thumbnailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileThumbnail
     */
    select?: FileThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileThumbnail
     */
    omit?: FileThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileThumbnailInclude<ExtArgs> | null
    where?: FileThumbnailWhereInput
    orderBy?: FileThumbnailOrderByWithRelationInput | FileThumbnailOrderByWithRelationInput[]
    cursor?: FileThumbnailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileThumbnailScalarFieldEnum | FileThumbnailScalarFieldEnum[]
  }

  /**
   * Content.versions
   */
  export type Content$versionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileVersion
     */
    omit?: FileVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    where?: FileVersionWhereInput
    orderBy?: FileVersionOrderByWithRelationInput | FileVersionOrderByWithRelationInput[]
    cursor?: FileVersionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileVersionScalarFieldEnum | FileVersionScalarFieldEnum[]
  }

  /**
   * Content.playlistItems
   */
  export type Content$playlistItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistItem
     */
    select?: PlaylistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistItem
     */
    omit?: PlaylistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistItemInclude<ExtArgs> | null
    where?: PlaylistItemWhereInput
    orderBy?: PlaylistItemOrderByWithRelationInput | PlaylistItemOrderByWithRelationInput[]
    cursor?: PlaylistItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistItemScalarFieldEnum | PlaylistItemScalarFieldEnum[]
  }

  /**
   * Content.viewLogs
   */
  export type Content$viewLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
    where?: ViewLogWhereInput
    orderBy?: ViewLogOrderByWithRelationInput | ViewLogOrderByWithRelationInput[]
    cursor?: ViewLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewLogScalarFieldEnum | ViewLogScalarFieldEnum[]
  }

  /**
   * Content without action
   */
  export type ContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
  }


  /**
   * Model Playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdBy: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    description: string | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdBy: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    description: string | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    name: number
    createdBy: number
    isActive: number
    createdAt: number
    updatedAt: number
    description: number
    _all: number
  }


  export type PlaylistMinAggregateInputType = {
    id?: true
    name?: true
    createdBy?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    description?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    name?: true
    createdBy?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    description?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    name?: true
    createdBy?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    description?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlist to aggregate.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type PlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithAggregationInput | PlaylistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: PlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    id: string
    name: string
    createdBy: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    description: string | null
    _count: PlaylistCountAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdBy?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    displays?: boolean | Playlist$displaysArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Playlist$itemsArgs<ExtArgs>
    viewLogs?: boolean | Playlist$viewLogsArgs<ExtArgs>
    tags?: boolean | Playlist$tagsArgs<ExtArgs>
    sharedWith?: boolean | Playlist$sharedWithArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdBy?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdBy?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectScalar = {
    id?: boolean
    name?: boolean
    createdBy?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
  }

  export type PlaylistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdBy" | "isActive" | "createdAt" | "updatedAt" | "description", ExtArgs["result"]["playlist"]>
  export type PlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    displays?: boolean | Playlist$displaysArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Playlist$itemsArgs<ExtArgs>
    viewLogs?: boolean | Playlist$viewLogsArgs<ExtArgs>
    tags?: boolean | Playlist$tagsArgs<ExtArgs>
    sharedWith?: boolean | Playlist$sharedWithArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlist"
    objects: {
      displays: Prisma.$DisplayPayload<ExtArgs>[]
      creator: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$PlaylistItemPayload<ExtArgs>[]
      viewLogs: Prisma.$ViewLogPayload<ExtArgs>[]
      tags: Prisma.$TagPayload<ExtArgs>[]
      sharedWith: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdBy: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      description: string | null
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }

  type PlaylistGetPayload<S extends boolean | null | undefined | PlaylistDefaultArgs> = $Result.GetResult<Prisma.$PlaylistPayload, S>

  type PlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface PlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Playlist'], meta: { name: 'Playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {PlaylistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistFindUniqueArgs>(args: SelectSubset<T, PlaylistFindUniqueArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Playlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistFindFirstArgs>(args?: SelectSubset<T, PlaylistFindFirstArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaylistFindManyArgs>(args?: SelectSubset<T, PlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Playlist.
     * @param {PlaylistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
     */
    create<T extends PlaylistCreateArgs>(args: SelectSubset<T, PlaylistCreateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Playlists.
     * @param {PlaylistCreateManyArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistCreateManyArgs>(args?: SelectSubset<T, PlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playlists and returns the data saved in the database.
     * @param {PlaylistCreateManyAndReturnArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Playlist.
     * @param {PlaylistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
     */
    delete<T extends PlaylistDeleteArgs>(args: SelectSubset<T, PlaylistDeleteArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Playlist.
     * @param {PlaylistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistUpdateArgs>(args: SelectSubset<T, PlaylistUpdateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistDeleteManyArgs>(args?: SelectSubset<T, PlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistUpdateManyArgs>(args: SelectSubset<T, PlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists and returns the data updated in the database.
     * @param {PlaylistUpdateManyAndReturnArgs} args - Arguments to update many Playlists.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlaylistUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaylistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Playlist.
     * @param {PlaylistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistUpsertArgs>(args: SelectSubset<T, PlaylistUpsertArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends PlaylistCountArgs>(
      args?: Subset<T, PlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Playlist model
   */
  readonly fields: PlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    displays<T extends Playlist$displaysArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$displaysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisplayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Playlist$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewLogs<T extends Playlist$viewLogsArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$viewLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tags<T extends Playlist$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sharedWith<T extends Playlist$sharedWithArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$sharedWithArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Playlist model
   */
  interface PlaylistFieldRefs {
    readonly id: FieldRef<"Playlist", 'String'>
    readonly name: FieldRef<"Playlist", 'String'>
    readonly createdBy: FieldRef<"Playlist", 'String'>
    readonly isActive: FieldRef<"Playlist", 'Boolean'>
    readonly createdAt: FieldRef<"Playlist", 'DateTime'>
    readonly updatedAt: FieldRef<"Playlist", 'DateTime'>
    readonly description: FieldRef<"Playlist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Playlist findUnique
   */
  export type PlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findUniqueOrThrow
   */
  export type PlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findFirst
   */
  export type PlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findFirstOrThrow
   */
  export type PlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findMany
   */
  export type PlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist create
   */
  export type PlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a Playlist.
     */
    data: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
  }

  /**
   * Playlist createMany
   */
  export type PlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Playlist createManyAndReturn
   */
  export type PlaylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist update
   */
  export type PlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a Playlist.
     */
    data: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
    /**
     * Choose, which Playlist to update.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist updateMany
   */
  export type PlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
  }

  /**
   * Playlist updateManyAndReturn
   */
  export type PlaylistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist upsert
   */
  export type PlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the Playlist to update in case it exists.
     */
    where: PlaylistWhereUniqueInput
    /**
     * In case the Playlist found by the `where` argument doesn't exist, create a new Playlist with this data.
     */
    create: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
    /**
     * In case the Playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
  }

  /**
   * Playlist delete
   */
  export type PlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter which Playlist to delete.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist deleteMany
   */
  export type PlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to delete.
     */
    limit?: number
  }

  /**
   * Playlist.displays
   */
  export type Playlist$displaysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Display
     */
    select?: DisplaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Display
     */
    omit?: DisplayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisplayInclude<ExtArgs> | null
    where?: DisplayWhereInput
    orderBy?: DisplayOrderByWithRelationInput | DisplayOrderByWithRelationInput[]
    cursor?: DisplayWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisplayScalarFieldEnum | DisplayScalarFieldEnum[]
  }

  /**
   * Playlist.items
   */
  export type Playlist$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistItem
     */
    select?: PlaylistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistItem
     */
    omit?: PlaylistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistItemInclude<ExtArgs> | null
    where?: PlaylistItemWhereInput
    orderBy?: PlaylistItemOrderByWithRelationInput | PlaylistItemOrderByWithRelationInput[]
    cursor?: PlaylistItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistItemScalarFieldEnum | PlaylistItemScalarFieldEnum[]
  }

  /**
   * Playlist.viewLogs
   */
  export type Playlist$viewLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
    where?: ViewLogWhereInput
    orderBy?: ViewLogOrderByWithRelationInput | ViewLogOrderByWithRelationInput[]
    cursor?: ViewLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewLogScalarFieldEnum | ViewLogScalarFieldEnum[]
  }

  /**
   * Playlist.tags
   */
  export type Playlist$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Playlist.sharedWith
   */
  export type Playlist$sharedWithArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Playlist without action
   */
  export type PlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
  }


  /**
   * Model PlaylistItem
   */

  export type AggregatePlaylistItem = {
    _count: PlaylistItemCountAggregateOutputType | null
    _avg: PlaylistItemAvgAggregateOutputType | null
    _sum: PlaylistItemSumAggregateOutputType | null
    _min: PlaylistItemMinAggregateOutputType | null
    _max: PlaylistItemMaxAggregateOutputType | null
  }

  export type PlaylistItemAvgAggregateOutputType = {
    duration: number | null
    order: number | null
    transitionDuration: number | null
  }

  export type PlaylistItemSumAggregateOutputType = {
    duration: number | null
    order: number | null
    transitionDuration: number | null
  }

  export type PlaylistItemMinAggregateOutputType = {
    id: string | null
    playlistId: string | null
    contentId: string | null
    duration: number | null
    order: number | null
    transitionType: $Enums.TransitionType | null
    transitionDuration: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistItemMaxAggregateOutputType = {
    id: string | null
    playlistId: string | null
    contentId: string | null
    duration: number | null
    order: number | null
    transitionType: $Enums.TransitionType | null
    transitionDuration: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistItemCountAggregateOutputType = {
    id: number
    playlistId: number
    contentId: number
    duration: number
    order: number
    transitionType: number
    transitionDuration: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlaylistItemAvgAggregateInputType = {
    duration?: true
    order?: true
    transitionDuration?: true
  }

  export type PlaylistItemSumAggregateInputType = {
    duration?: true
    order?: true
    transitionDuration?: true
  }

  export type PlaylistItemMinAggregateInputType = {
    id?: true
    playlistId?: true
    contentId?: true
    duration?: true
    order?: true
    transitionType?: true
    transitionDuration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistItemMaxAggregateInputType = {
    id?: true
    playlistId?: true
    contentId?: true
    duration?: true
    order?: true
    transitionType?: true
    transitionDuration?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistItemCountAggregateInputType = {
    id?: true
    playlistId?: true
    contentId?: true
    duration?: true
    order?: true
    transitionType?: true
    transitionDuration?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlaylistItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistItem to aggregate.
     */
    where?: PlaylistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistItems to fetch.
     */
    orderBy?: PlaylistItemOrderByWithRelationInput | PlaylistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlaylistItems
    **/
    _count?: true | PlaylistItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistItemMaxAggregateInputType
  }

  export type GetPlaylistItemAggregateType<T extends PlaylistItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylistItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylistItem[P]>
      : GetScalarType<T[P], AggregatePlaylistItem[P]>
  }




  export type PlaylistItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistItemWhereInput
    orderBy?: PlaylistItemOrderByWithAggregationInput | PlaylistItemOrderByWithAggregationInput[]
    by: PlaylistItemScalarFieldEnum[] | PlaylistItemScalarFieldEnum
    having?: PlaylistItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistItemCountAggregateInputType | true
    _avg?: PlaylistItemAvgAggregateInputType
    _sum?: PlaylistItemSumAggregateInputType
    _min?: PlaylistItemMinAggregateInputType
    _max?: PlaylistItemMaxAggregateInputType
  }

  export type PlaylistItemGroupByOutputType = {
    id: string
    playlistId: string
    contentId: string
    duration: number
    order: number
    transitionType: $Enums.TransitionType
    transitionDuration: number | null
    createdAt: Date
    updatedAt: Date
    _count: PlaylistItemCountAggregateOutputType | null
    _avg: PlaylistItemAvgAggregateOutputType | null
    _sum: PlaylistItemSumAggregateOutputType | null
    _min: PlaylistItemMinAggregateOutputType | null
    _max: PlaylistItemMaxAggregateOutputType | null
  }

  type GetPlaylistItemGroupByPayload<T extends PlaylistItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistItemGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistItemGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    contentId?: boolean
    duration?: boolean
    order?: boolean
    transitionType?: boolean
    transitionDuration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean | ContentDefaultArgs<ExtArgs>
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistItem"]>

  export type PlaylistItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    contentId?: boolean
    duration?: boolean
    order?: boolean
    transitionType?: boolean
    transitionDuration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean | ContentDefaultArgs<ExtArgs>
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistItem"]>

  export type PlaylistItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    contentId?: boolean
    duration?: boolean
    order?: boolean
    transitionType?: boolean
    transitionDuration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean | ContentDefaultArgs<ExtArgs>
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistItem"]>

  export type PlaylistItemSelectScalar = {
    id?: boolean
    playlistId?: boolean
    contentId?: boolean
    duration?: boolean
    order?: boolean
    transitionType?: boolean
    transitionDuration?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlaylistItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playlistId" | "contentId" | "duration" | "order" | "transitionType" | "transitionDuration" | "createdAt" | "updatedAt", ExtArgs["result"]["playlistItem"]>
  export type PlaylistItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ContentDefaultArgs<ExtArgs>
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }
  export type PlaylistItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ContentDefaultArgs<ExtArgs>
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }
  export type PlaylistItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ContentDefaultArgs<ExtArgs>
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }

  export type $PlaylistItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlaylistItem"
    objects: {
      content: Prisma.$ContentPayload<ExtArgs>
      playlist: Prisma.$PlaylistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playlistId: string
      contentId: string
      duration: number
      order: number
      transitionType: $Enums.TransitionType
      transitionDuration: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["playlistItem"]>
    composites: {}
  }

  type PlaylistItemGetPayload<S extends boolean | null | undefined | PlaylistItemDefaultArgs> = $Result.GetResult<Prisma.$PlaylistItemPayload, S>

  type PlaylistItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistItemCountAggregateInputType | true
    }

  export interface PlaylistItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlaylistItem'], meta: { name: 'PlaylistItem' } }
    /**
     * Find zero or one PlaylistItem that matches the filter.
     * @param {PlaylistItemFindUniqueArgs} args - Arguments to find a PlaylistItem
     * @example
     * // Get one PlaylistItem
     * const playlistItem = await prisma.playlistItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistItemFindUniqueArgs>(args: SelectSubset<T, PlaylistItemFindUniqueArgs<ExtArgs>>): Prisma__PlaylistItemClient<$Result.GetResult<Prisma.$PlaylistItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlaylistItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistItemFindUniqueOrThrowArgs} args - Arguments to find a PlaylistItem
     * @example
     * // Get one PlaylistItem
     * const playlistItem = await prisma.playlistItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistItemClient<$Result.GetResult<Prisma.$PlaylistItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaylistItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistItemFindFirstArgs} args - Arguments to find a PlaylistItem
     * @example
     * // Get one PlaylistItem
     * const playlistItem = await prisma.playlistItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistItemFindFirstArgs>(args?: SelectSubset<T, PlaylistItemFindFirstArgs<ExtArgs>>): Prisma__PlaylistItemClient<$Result.GetResult<Prisma.$PlaylistItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaylistItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistItemFindFirstOrThrowArgs} args - Arguments to find a PlaylistItem
     * @example
     * // Get one PlaylistItem
     * const playlistItem = await prisma.playlistItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistItemClient<$Result.GetResult<Prisma.$PlaylistItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlaylistItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlaylistItems
     * const playlistItems = await prisma.playlistItem.findMany()
     * 
     * // Get first 10 PlaylistItems
     * const playlistItems = await prisma.playlistItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistItemWithIdOnly = await prisma.playlistItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaylistItemFindManyArgs>(args?: SelectSubset<T, PlaylistItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlaylistItem.
     * @param {PlaylistItemCreateArgs} args - Arguments to create a PlaylistItem.
     * @example
     * // Create one PlaylistItem
     * const PlaylistItem = await prisma.playlistItem.create({
     *   data: {
     *     // ... data to create a PlaylistItem
     *   }
     * })
     * 
     */
    create<T extends PlaylistItemCreateArgs>(args: SelectSubset<T, PlaylistItemCreateArgs<ExtArgs>>): Prisma__PlaylistItemClient<$Result.GetResult<Prisma.$PlaylistItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlaylistItems.
     * @param {PlaylistItemCreateManyArgs} args - Arguments to create many PlaylistItems.
     * @example
     * // Create many PlaylistItems
     * const playlistItem = await prisma.playlistItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistItemCreateManyArgs>(args?: SelectSubset<T, PlaylistItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlaylistItems and returns the data saved in the database.
     * @param {PlaylistItemCreateManyAndReturnArgs} args - Arguments to create many PlaylistItems.
     * @example
     * // Create many PlaylistItems
     * const playlistItem = await prisma.playlistItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlaylistItems and only return the `id`
     * const playlistItemWithIdOnly = await prisma.playlistItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlaylistItem.
     * @param {PlaylistItemDeleteArgs} args - Arguments to delete one PlaylistItem.
     * @example
     * // Delete one PlaylistItem
     * const PlaylistItem = await prisma.playlistItem.delete({
     *   where: {
     *     // ... filter to delete one PlaylistItem
     *   }
     * })
     * 
     */
    delete<T extends PlaylistItemDeleteArgs>(args: SelectSubset<T, PlaylistItemDeleteArgs<ExtArgs>>): Prisma__PlaylistItemClient<$Result.GetResult<Prisma.$PlaylistItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlaylistItem.
     * @param {PlaylistItemUpdateArgs} args - Arguments to update one PlaylistItem.
     * @example
     * // Update one PlaylistItem
     * const playlistItem = await prisma.playlistItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistItemUpdateArgs>(args: SelectSubset<T, PlaylistItemUpdateArgs<ExtArgs>>): Prisma__PlaylistItemClient<$Result.GetResult<Prisma.$PlaylistItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlaylistItems.
     * @param {PlaylistItemDeleteManyArgs} args - Arguments to filter PlaylistItems to delete.
     * @example
     * // Delete a few PlaylistItems
     * const { count } = await prisma.playlistItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistItemDeleteManyArgs>(args?: SelectSubset<T, PlaylistItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaylistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlaylistItems
     * const playlistItem = await prisma.playlistItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistItemUpdateManyArgs>(args: SelectSubset<T, PlaylistItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaylistItems and returns the data updated in the database.
     * @param {PlaylistItemUpdateManyAndReturnArgs} args - Arguments to update many PlaylistItems.
     * @example
     * // Update many PlaylistItems
     * const playlistItem = await prisma.playlistItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlaylistItems and only return the `id`
     * const playlistItemWithIdOnly = await prisma.playlistItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlaylistItemUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaylistItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlaylistItem.
     * @param {PlaylistItemUpsertArgs} args - Arguments to update or create a PlaylistItem.
     * @example
     * // Update or create a PlaylistItem
     * const playlistItem = await prisma.playlistItem.upsert({
     *   create: {
     *     // ... data to create a PlaylistItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlaylistItem we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistItemUpsertArgs>(args: SelectSubset<T, PlaylistItemUpsertArgs<ExtArgs>>): Prisma__PlaylistItemClient<$Result.GetResult<Prisma.$PlaylistItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlaylistItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistItemCountArgs} args - Arguments to filter PlaylistItems to count.
     * @example
     * // Count the number of PlaylistItems
     * const count = await prisma.playlistItem.count({
     *   where: {
     *     // ... the filter for the PlaylistItems we want to count
     *   }
     * })
    **/
    count<T extends PlaylistItemCountArgs>(
      args?: Subset<T, PlaylistItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlaylistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistItemAggregateArgs>(args: Subset<T, PlaylistItemAggregateArgs>): Prisma.PrismaPromise<GetPlaylistItemAggregateType<T>>

    /**
     * Group by PlaylistItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaylistItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistItemGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaylistItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlaylistItem model
   */
  readonly fields: PlaylistItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlaylistItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    content<T extends ContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentDefaultArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    playlist<T extends PlaylistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaylistDefaultArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlaylistItem model
   */
  interface PlaylistItemFieldRefs {
    readonly id: FieldRef<"PlaylistItem", 'String'>
    readonly playlistId: FieldRef<"PlaylistItem", 'String'>
    readonly contentId: FieldRef<"PlaylistItem", 'String'>
    readonly duration: FieldRef<"PlaylistItem", 'Int'>
    readonly order: FieldRef<"PlaylistItem", 'Int'>
    readonly transitionType: FieldRef<"PlaylistItem", 'TransitionType'>
    readonly transitionDuration: FieldRef<"PlaylistItem", 'Int'>
    readonly createdAt: FieldRef<"PlaylistItem", 'DateTime'>
    readonly updatedAt: FieldRef<"PlaylistItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlaylistItem findUnique
   */
  export type PlaylistItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistItem
     */
    select?: PlaylistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistItem
     */
    omit?: PlaylistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistItemInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistItem to fetch.
     */
    where: PlaylistItemWhereUniqueInput
  }

  /**
   * PlaylistItem findUniqueOrThrow
   */
  export type PlaylistItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistItem
     */
    select?: PlaylistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistItem
     */
    omit?: PlaylistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistItemInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistItem to fetch.
     */
    where: PlaylistItemWhereUniqueInput
  }

  /**
   * PlaylistItem findFirst
   */
  export type PlaylistItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistItem
     */
    select?: PlaylistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistItem
     */
    omit?: PlaylistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistItemInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistItem to fetch.
     */
    where?: PlaylistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistItems to fetch.
     */
    orderBy?: PlaylistItemOrderByWithRelationInput | PlaylistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistItems.
     */
    cursor?: PlaylistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistItems.
     */
    distinct?: PlaylistItemScalarFieldEnum | PlaylistItemScalarFieldEnum[]
  }

  /**
   * PlaylistItem findFirstOrThrow
   */
  export type PlaylistItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistItem
     */
    select?: PlaylistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistItem
     */
    omit?: PlaylistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistItemInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistItem to fetch.
     */
    where?: PlaylistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistItems to fetch.
     */
    orderBy?: PlaylistItemOrderByWithRelationInput | PlaylistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistItems.
     */
    cursor?: PlaylistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistItems.
     */
    distinct?: PlaylistItemScalarFieldEnum | PlaylistItemScalarFieldEnum[]
  }

  /**
   * PlaylistItem findMany
   */
  export type PlaylistItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistItem
     */
    select?: PlaylistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistItem
     */
    omit?: PlaylistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistItemInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistItems to fetch.
     */
    where?: PlaylistItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistItems to fetch.
     */
    orderBy?: PlaylistItemOrderByWithRelationInput | PlaylistItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlaylistItems.
     */
    cursor?: PlaylistItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistItems.
     */
    skip?: number
    distinct?: PlaylistItemScalarFieldEnum | PlaylistItemScalarFieldEnum[]
  }

  /**
   * PlaylistItem create
   */
  export type PlaylistItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistItem
     */
    select?: PlaylistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistItem
     */
    omit?: PlaylistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PlaylistItem.
     */
    data: XOR<PlaylistItemCreateInput, PlaylistItemUncheckedCreateInput>
  }

  /**
   * PlaylistItem createMany
   */
  export type PlaylistItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlaylistItems.
     */
    data: PlaylistItemCreateManyInput | PlaylistItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlaylistItem createManyAndReturn
   */
  export type PlaylistItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistItem
     */
    select?: PlaylistItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistItem
     */
    omit?: PlaylistItemOmit<ExtArgs> | null
    /**
     * The data used to create many PlaylistItems.
     */
    data: PlaylistItemCreateManyInput | PlaylistItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaylistItem update
   */
  export type PlaylistItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistItem
     */
    select?: PlaylistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistItem
     */
    omit?: PlaylistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PlaylistItem.
     */
    data: XOR<PlaylistItemUpdateInput, PlaylistItemUncheckedUpdateInput>
    /**
     * Choose, which PlaylistItem to update.
     */
    where: PlaylistItemWhereUniqueInput
  }

  /**
   * PlaylistItem updateMany
   */
  export type PlaylistItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlaylistItems.
     */
    data: XOR<PlaylistItemUpdateManyMutationInput, PlaylistItemUncheckedUpdateManyInput>
    /**
     * Filter which PlaylistItems to update
     */
    where?: PlaylistItemWhereInput
    /**
     * Limit how many PlaylistItems to update.
     */
    limit?: number
  }

  /**
   * PlaylistItem updateManyAndReturn
   */
  export type PlaylistItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistItem
     */
    select?: PlaylistItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistItem
     */
    omit?: PlaylistItemOmit<ExtArgs> | null
    /**
     * The data used to update PlaylistItems.
     */
    data: XOR<PlaylistItemUpdateManyMutationInput, PlaylistItemUncheckedUpdateManyInput>
    /**
     * Filter which PlaylistItems to update
     */
    where?: PlaylistItemWhereInput
    /**
     * Limit how many PlaylistItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaylistItem upsert
   */
  export type PlaylistItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistItem
     */
    select?: PlaylistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistItem
     */
    omit?: PlaylistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PlaylistItem to update in case it exists.
     */
    where: PlaylistItemWhereUniqueInput
    /**
     * In case the PlaylistItem found by the `where` argument doesn't exist, create a new PlaylistItem with this data.
     */
    create: XOR<PlaylistItemCreateInput, PlaylistItemUncheckedCreateInput>
    /**
     * In case the PlaylistItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistItemUpdateInput, PlaylistItemUncheckedUpdateInput>
  }

  /**
   * PlaylistItem delete
   */
  export type PlaylistItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistItem
     */
    select?: PlaylistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistItem
     */
    omit?: PlaylistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistItemInclude<ExtArgs> | null
    /**
     * Filter which PlaylistItem to delete.
     */
    where: PlaylistItemWhereUniqueInput
  }

  /**
   * PlaylistItem deleteMany
   */
  export type PlaylistItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistItems to delete
     */
    where?: PlaylistItemWhereInput
    /**
     * Limit how many PlaylistItems to delete.
     */
    limit?: number
  }

  /**
   * PlaylistItem without action
   */
  export type PlaylistItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistItem
     */
    select?: PlaylistItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaylistItem
     */
    omit?: PlaylistItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistItemInclude<ExtArgs> | null
  }


  /**
   * Model Display
   */

  export type AggregateDisplay = {
    _count: DisplayCountAggregateOutputType | null
    _min: DisplayMinAggregateOutputType | null
    _max: DisplayMaxAggregateOutputType | null
  }

  export type DisplayMinAggregateOutputType = {
    id: string | null
    name: string | null
    urlSlug: string | null
    playlistId: string | null
    resolution: string | null
    orientation: $Enums.DisplayOrientation | null
    lastSeen: Date | null
    isOnline: boolean | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisplayMaxAggregateOutputType = {
    id: string | null
    name: string | null
    urlSlug: string | null
    playlistId: string | null
    resolution: string | null
    orientation: $Enums.DisplayOrientation | null
    lastSeen: Date | null
    isOnline: boolean | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisplayCountAggregateOutputType = {
    id: number
    name: number
    urlSlug: number
    playlistId: number
    resolution: number
    orientation: number
    lastSeen: number
    isOnline: number
    location: number
    clockSettings: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DisplayMinAggregateInputType = {
    id?: true
    name?: true
    urlSlug?: true
    playlistId?: true
    resolution?: true
    orientation?: true
    lastSeen?: true
    isOnline?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisplayMaxAggregateInputType = {
    id?: true
    name?: true
    urlSlug?: true
    playlistId?: true
    resolution?: true
    orientation?: true
    lastSeen?: true
    isOnline?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisplayCountAggregateInputType = {
    id?: true
    name?: true
    urlSlug?: true
    playlistId?: true
    resolution?: true
    orientation?: true
    lastSeen?: true
    isOnline?: true
    location?: true
    clockSettings?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DisplayAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Display to aggregate.
     */
    where?: DisplayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Displays to fetch.
     */
    orderBy?: DisplayOrderByWithRelationInput | DisplayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisplayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Displays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Displays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Displays
    **/
    _count?: true | DisplayCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisplayMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisplayMaxAggregateInputType
  }

  export type GetDisplayAggregateType<T extends DisplayAggregateArgs> = {
        [P in keyof T & keyof AggregateDisplay]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisplay[P]>
      : GetScalarType<T[P], AggregateDisplay[P]>
  }




  export type DisplayGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisplayWhereInput
    orderBy?: DisplayOrderByWithAggregationInput | DisplayOrderByWithAggregationInput[]
    by: DisplayScalarFieldEnum[] | DisplayScalarFieldEnum
    having?: DisplayScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisplayCountAggregateInputType | true
    _min?: DisplayMinAggregateInputType
    _max?: DisplayMaxAggregateInputType
  }

  export type DisplayGroupByOutputType = {
    id: string
    name: string
    urlSlug: string
    playlistId: string | null
    resolution: string
    orientation: $Enums.DisplayOrientation
    lastSeen: Date | null
    isOnline: boolean
    location: string | null
    clockSettings: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: DisplayCountAggregateOutputType | null
    _min: DisplayMinAggregateOutputType | null
    _max: DisplayMaxAggregateOutputType | null
  }

  type GetDisplayGroupByPayload<T extends DisplayGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisplayGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisplayGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisplayGroupByOutputType[P]>
            : GetScalarType<T[P], DisplayGroupByOutputType[P]>
        }
      >
    >


  export type DisplaySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    urlSlug?: boolean
    playlistId?: boolean
    resolution?: boolean
    orientation?: boolean
    lastSeen?: boolean
    isOnline?: boolean
    location?: boolean
    clockSettings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | Display$playlistArgs<ExtArgs>
    errorLogs?: boolean | Display$errorLogsArgs<ExtArgs>
    viewLogs?: boolean | Display$viewLogsArgs<ExtArgs>
    alerts?: boolean | Display$alertsArgs<ExtArgs>
    _count?: boolean | DisplayCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["display"]>

  export type DisplaySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    urlSlug?: boolean
    playlistId?: boolean
    resolution?: boolean
    orientation?: boolean
    lastSeen?: boolean
    isOnline?: boolean
    location?: boolean
    clockSettings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | Display$playlistArgs<ExtArgs>
  }, ExtArgs["result"]["display"]>

  export type DisplaySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    urlSlug?: boolean
    playlistId?: boolean
    resolution?: boolean
    orientation?: boolean
    lastSeen?: boolean
    isOnline?: boolean
    location?: boolean
    clockSettings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | Display$playlistArgs<ExtArgs>
  }, ExtArgs["result"]["display"]>

  export type DisplaySelectScalar = {
    id?: boolean
    name?: boolean
    urlSlug?: boolean
    playlistId?: boolean
    resolution?: boolean
    orientation?: boolean
    lastSeen?: boolean
    isOnline?: boolean
    location?: boolean
    clockSettings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DisplayOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "urlSlug" | "playlistId" | "resolution" | "orientation" | "lastSeen" | "isOnline" | "location" | "clockSettings" | "createdAt" | "updatedAt", ExtArgs["result"]["display"]>
  export type DisplayInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | Display$playlistArgs<ExtArgs>
    errorLogs?: boolean | Display$errorLogsArgs<ExtArgs>
    viewLogs?: boolean | Display$viewLogsArgs<ExtArgs>
    alerts?: boolean | Display$alertsArgs<ExtArgs>
    _count?: boolean | DisplayCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DisplayIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | Display$playlistArgs<ExtArgs>
  }
  export type DisplayIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | Display$playlistArgs<ExtArgs>
  }

  export type $DisplayPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Display"
    objects: {
      playlist: Prisma.$PlaylistPayload<ExtArgs> | null
      errorLogs: Prisma.$ErrorLogPayload<ExtArgs>[]
      viewLogs: Prisma.$ViewLogPayload<ExtArgs>[]
      alerts: Prisma.$AlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      urlSlug: string
      playlistId: string | null
      resolution: string
      orientation: $Enums.DisplayOrientation
      lastSeen: Date | null
      isOnline: boolean
      location: string | null
      clockSettings: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["display"]>
    composites: {}
  }

  type DisplayGetPayload<S extends boolean | null | undefined | DisplayDefaultArgs> = $Result.GetResult<Prisma.$DisplayPayload, S>

  type DisplayCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisplayFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisplayCountAggregateInputType | true
    }

  export interface DisplayDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Display'], meta: { name: 'Display' } }
    /**
     * Find zero or one Display that matches the filter.
     * @param {DisplayFindUniqueArgs} args - Arguments to find a Display
     * @example
     * // Get one Display
     * const display = await prisma.display.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisplayFindUniqueArgs>(args: SelectSubset<T, DisplayFindUniqueArgs<ExtArgs>>): Prisma__DisplayClient<$Result.GetResult<Prisma.$DisplayPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Display that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisplayFindUniqueOrThrowArgs} args - Arguments to find a Display
     * @example
     * // Get one Display
     * const display = await prisma.display.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisplayFindUniqueOrThrowArgs>(args: SelectSubset<T, DisplayFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisplayClient<$Result.GetResult<Prisma.$DisplayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Display that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisplayFindFirstArgs} args - Arguments to find a Display
     * @example
     * // Get one Display
     * const display = await prisma.display.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisplayFindFirstArgs>(args?: SelectSubset<T, DisplayFindFirstArgs<ExtArgs>>): Prisma__DisplayClient<$Result.GetResult<Prisma.$DisplayPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Display that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisplayFindFirstOrThrowArgs} args - Arguments to find a Display
     * @example
     * // Get one Display
     * const display = await prisma.display.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisplayFindFirstOrThrowArgs>(args?: SelectSubset<T, DisplayFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisplayClient<$Result.GetResult<Prisma.$DisplayPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Displays that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisplayFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Displays
     * const displays = await prisma.display.findMany()
     * 
     * // Get first 10 Displays
     * const displays = await prisma.display.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const displayWithIdOnly = await prisma.display.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisplayFindManyArgs>(args?: SelectSubset<T, DisplayFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisplayPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Display.
     * @param {DisplayCreateArgs} args - Arguments to create a Display.
     * @example
     * // Create one Display
     * const Display = await prisma.display.create({
     *   data: {
     *     // ... data to create a Display
     *   }
     * })
     * 
     */
    create<T extends DisplayCreateArgs>(args: SelectSubset<T, DisplayCreateArgs<ExtArgs>>): Prisma__DisplayClient<$Result.GetResult<Prisma.$DisplayPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Displays.
     * @param {DisplayCreateManyArgs} args - Arguments to create many Displays.
     * @example
     * // Create many Displays
     * const display = await prisma.display.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisplayCreateManyArgs>(args?: SelectSubset<T, DisplayCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Displays and returns the data saved in the database.
     * @param {DisplayCreateManyAndReturnArgs} args - Arguments to create many Displays.
     * @example
     * // Create many Displays
     * const display = await prisma.display.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Displays and only return the `id`
     * const displayWithIdOnly = await prisma.display.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisplayCreateManyAndReturnArgs>(args?: SelectSubset<T, DisplayCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisplayPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Display.
     * @param {DisplayDeleteArgs} args - Arguments to delete one Display.
     * @example
     * // Delete one Display
     * const Display = await prisma.display.delete({
     *   where: {
     *     // ... filter to delete one Display
     *   }
     * })
     * 
     */
    delete<T extends DisplayDeleteArgs>(args: SelectSubset<T, DisplayDeleteArgs<ExtArgs>>): Prisma__DisplayClient<$Result.GetResult<Prisma.$DisplayPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Display.
     * @param {DisplayUpdateArgs} args - Arguments to update one Display.
     * @example
     * // Update one Display
     * const display = await prisma.display.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisplayUpdateArgs>(args: SelectSubset<T, DisplayUpdateArgs<ExtArgs>>): Prisma__DisplayClient<$Result.GetResult<Prisma.$DisplayPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Displays.
     * @param {DisplayDeleteManyArgs} args - Arguments to filter Displays to delete.
     * @example
     * // Delete a few Displays
     * const { count } = await prisma.display.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisplayDeleteManyArgs>(args?: SelectSubset<T, DisplayDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Displays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisplayUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Displays
     * const display = await prisma.display.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisplayUpdateManyArgs>(args: SelectSubset<T, DisplayUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Displays and returns the data updated in the database.
     * @param {DisplayUpdateManyAndReturnArgs} args - Arguments to update many Displays.
     * @example
     * // Update many Displays
     * const display = await prisma.display.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Displays and only return the `id`
     * const displayWithIdOnly = await prisma.display.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DisplayUpdateManyAndReturnArgs>(args: SelectSubset<T, DisplayUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisplayPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Display.
     * @param {DisplayUpsertArgs} args - Arguments to update or create a Display.
     * @example
     * // Update or create a Display
     * const display = await prisma.display.upsert({
     *   create: {
     *     // ... data to create a Display
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Display we want to update
     *   }
     * })
     */
    upsert<T extends DisplayUpsertArgs>(args: SelectSubset<T, DisplayUpsertArgs<ExtArgs>>): Prisma__DisplayClient<$Result.GetResult<Prisma.$DisplayPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Displays.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisplayCountArgs} args - Arguments to filter Displays to count.
     * @example
     * // Count the number of Displays
     * const count = await prisma.display.count({
     *   where: {
     *     // ... the filter for the Displays we want to count
     *   }
     * })
    **/
    count<T extends DisplayCountArgs>(
      args?: Subset<T, DisplayCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisplayCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Display.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisplayAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DisplayAggregateArgs>(args: Subset<T, DisplayAggregateArgs>): Prisma.PrismaPromise<GetDisplayAggregateType<T>>

    /**
     * Group by Display.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisplayGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DisplayGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisplayGroupByArgs['orderBy'] }
        : { orderBy?: DisplayGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DisplayGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisplayGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Display model
   */
  readonly fields: DisplayFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Display.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisplayClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlist<T extends Display$playlistArgs<ExtArgs> = {}>(args?: Subset<T, Display$playlistArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    errorLogs<T extends Display$errorLogsArgs<ExtArgs> = {}>(args?: Subset<T, Display$errorLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewLogs<T extends Display$viewLogsArgs<ExtArgs> = {}>(args?: Subset<T, Display$viewLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alerts<T extends Display$alertsArgs<ExtArgs> = {}>(args?: Subset<T, Display$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Display model
   */
  interface DisplayFieldRefs {
    readonly id: FieldRef<"Display", 'String'>
    readonly name: FieldRef<"Display", 'String'>
    readonly urlSlug: FieldRef<"Display", 'String'>
    readonly playlistId: FieldRef<"Display", 'String'>
    readonly resolution: FieldRef<"Display", 'String'>
    readonly orientation: FieldRef<"Display", 'DisplayOrientation'>
    readonly lastSeen: FieldRef<"Display", 'DateTime'>
    readonly isOnline: FieldRef<"Display", 'Boolean'>
    readonly location: FieldRef<"Display", 'String'>
    readonly clockSettings: FieldRef<"Display", 'Json'>
    readonly createdAt: FieldRef<"Display", 'DateTime'>
    readonly updatedAt: FieldRef<"Display", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Display findUnique
   */
  export type DisplayFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Display
     */
    select?: DisplaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Display
     */
    omit?: DisplayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisplayInclude<ExtArgs> | null
    /**
     * Filter, which Display to fetch.
     */
    where: DisplayWhereUniqueInput
  }

  /**
   * Display findUniqueOrThrow
   */
  export type DisplayFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Display
     */
    select?: DisplaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Display
     */
    omit?: DisplayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisplayInclude<ExtArgs> | null
    /**
     * Filter, which Display to fetch.
     */
    where: DisplayWhereUniqueInput
  }

  /**
   * Display findFirst
   */
  export type DisplayFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Display
     */
    select?: DisplaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Display
     */
    omit?: DisplayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisplayInclude<ExtArgs> | null
    /**
     * Filter, which Display to fetch.
     */
    where?: DisplayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Displays to fetch.
     */
    orderBy?: DisplayOrderByWithRelationInput | DisplayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Displays.
     */
    cursor?: DisplayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Displays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Displays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Displays.
     */
    distinct?: DisplayScalarFieldEnum | DisplayScalarFieldEnum[]
  }

  /**
   * Display findFirstOrThrow
   */
  export type DisplayFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Display
     */
    select?: DisplaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Display
     */
    omit?: DisplayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisplayInclude<ExtArgs> | null
    /**
     * Filter, which Display to fetch.
     */
    where?: DisplayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Displays to fetch.
     */
    orderBy?: DisplayOrderByWithRelationInput | DisplayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Displays.
     */
    cursor?: DisplayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Displays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Displays.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Displays.
     */
    distinct?: DisplayScalarFieldEnum | DisplayScalarFieldEnum[]
  }

  /**
   * Display findMany
   */
  export type DisplayFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Display
     */
    select?: DisplaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Display
     */
    omit?: DisplayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisplayInclude<ExtArgs> | null
    /**
     * Filter, which Displays to fetch.
     */
    where?: DisplayWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Displays to fetch.
     */
    orderBy?: DisplayOrderByWithRelationInput | DisplayOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Displays.
     */
    cursor?: DisplayWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Displays from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Displays.
     */
    skip?: number
    distinct?: DisplayScalarFieldEnum | DisplayScalarFieldEnum[]
  }

  /**
   * Display create
   */
  export type DisplayCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Display
     */
    select?: DisplaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Display
     */
    omit?: DisplayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisplayInclude<ExtArgs> | null
    /**
     * The data needed to create a Display.
     */
    data: XOR<DisplayCreateInput, DisplayUncheckedCreateInput>
  }

  /**
   * Display createMany
   */
  export type DisplayCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Displays.
     */
    data: DisplayCreateManyInput | DisplayCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Display createManyAndReturn
   */
  export type DisplayCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Display
     */
    select?: DisplaySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Display
     */
    omit?: DisplayOmit<ExtArgs> | null
    /**
     * The data used to create many Displays.
     */
    data: DisplayCreateManyInput | DisplayCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisplayIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Display update
   */
  export type DisplayUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Display
     */
    select?: DisplaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Display
     */
    omit?: DisplayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisplayInclude<ExtArgs> | null
    /**
     * The data needed to update a Display.
     */
    data: XOR<DisplayUpdateInput, DisplayUncheckedUpdateInput>
    /**
     * Choose, which Display to update.
     */
    where: DisplayWhereUniqueInput
  }

  /**
   * Display updateMany
   */
  export type DisplayUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Displays.
     */
    data: XOR<DisplayUpdateManyMutationInput, DisplayUncheckedUpdateManyInput>
    /**
     * Filter which Displays to update
     */
    where?: DisplayWhereInput
    /**
     * Limit how many Displays to update.
     */
    limit?: number
  }

  /**
   * Display updateManyAndReturn
   */
  export type DisplayUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Display
     */
    select?: DisplaySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Display
     */
    omit?: DisplayOmit<ExtArgs> | null
    /**
     * The data used to update Displays.
     */
    data: XOR<DisplayUpdateManyMutationInput, DisplayUncheckedUpdateManyInput>
    /**
     * Filter which Displays to update
     */
    where?: DisplayWhereInput
    /**
     * Limit how many Displays to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisplayIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Display upsert
   */
  export type DisplayUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Display
     */
    select?: DisplaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Display
     */
    omit?: DisplayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisplayInclude<ExtArgs> | null
    /**
     * The filter to search for the Display to update in case it exists.
     */
    where: DisplayWhereUniqueInput
    /**
     * In case the Display found by the `where` argument doesn't exist, create a new Display with this data.
     */
    create: XOR<DisplayCreateInput, DisplayUncheckedCreateInput>
    /**
     * In case the Display was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisplayUpdateInput, DisplayUncheckedUpdateInput>
  }

  /**
   * Display delete
   */
  export type DisplayDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Display
     */
    select?: DisplaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Display
     */
    omit?: DisplayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisplayInclude<ExtArgs> | null
    /**
     * Filter which Display to delete.
     */
    where: DisplayWhereUniqueInput
  }

  /**
   * Display deleteMany
   */
  export type DisplayDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Displays to delete
     */
    where?: DisplayWhereInput
    /**
     * Limit how many Displays to delete.
     */
    limit?: number
  }

  /**
   * Display.playlist
   */
  export type Display$playlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
  }

  /**
   * Display.errorLogs
   */
  export type Display$errorLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogInclude<ExtArgs> | null
    where?: ErrorLogWhereInput
    orderBy?: ErrorLogOrderByWithRelationInput | ErrorLogOrderByWithRelationInput[]
    cursor?: ErrorLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ErrorLogScalarFieldEnum | ErrorLogScalarFieldEnum[]
  }

  /**
   * Display.viewLogs
   */
  export type Display$viewLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
    where?: ViewLogWhereInput
    orderBy?: ViewLogOrderByWithRelationInput | ViewLogOrderByWithRelationInput[]
    cursor?: ViewLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewLogScalarFieldEnum | ViewLogScalarFieldEnum[]
  }

  /**
   * Display.alerts
   */
  export type Display$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Display without action
   */
  export type DisplayDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Display
     */
    select?: DisplaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Display
     */
    omit?: DisplayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisplayInclude<ExtArgs> | null
  }


  /**
   * Model FileThumbnail
   */

  export type AggregateFileThumbnail = {
    _count: FileThumbnailCountAggregateOutputType | null
    _avg: FileThumbnailAvgAggregateOutputType | null
    _sum: FileThumbnailSumAggregateOutputType | null
    _min: FileThumbnailMinAggregateOutputType | null
    _max: FileThumbnailMaxAggregateOutputType | null
  }

  export type FileThumbnailAvgAggregateOutputType = {
    width: number | null
    height: number | null
    fileSize: number | null
  }

  export type FileThumbnailSumAggregateOutputType = {
    width: number | null
    height: number | null
    fileSize: bigint | null
  }

  export type FileThumbnailMinAggregateOutputType = {
    id: string | null
    contentId: string | null
    size: string | null
    width: number | null
    height: number | null
    filePath: string | null
    fileSize: bigint | null
    format: string | null
    createdAt: Date | null
  }

  export type FileThumbnailMaxAggregateOutputType = {
    id: string | null
    contentId: string | null
    size: string | null
    width: number | null
    height: number | null
    filePath: string | null
    fileSize: bigint | null
    format: string | null
    createdAt: Date | null
  }

  export type FileThumbnailCountAggregateOutputType = {
    id: number
    contentId: number
    size: number
    width: number
    height: number
    filePath: number
    fileSize: number
    format: number
    createdAt: number
    _all: number
  }


  export type FileThumbnailAvgAggregateInputType = {
    width?: true
    height?: true
    fileSize?: true
  }

  export type FileThumbnailSumAggregateInputType = {
    width?: true
    height?: true
    fileSize?: true
  }

  export type FileThumbnailMinAggregateInputType = {
    id?: true
    contentId?: true
    size?: true
    width?: true
    height?: true
    filePath?: true
    fileSize?: true
    format?: true
    createdAt?: true
  }

  export type FileThumbnailMaxAggregateInputType = {
    id?: true
    contentId?: true
    size?: true
    width?: true
    height?: true
    filePath?: true
    fileSize?: true
    format?: true
    createdAt?: true
  }

  export type FileThumbnailCountAggregateInputType = {
    id?: true
    contentId?: true
    size?: true
    width?: true
    height?: true
    filePath?: true
    fileSize?: true
    format?: true
    createdAt?: true
    _all?: true
  }

  export type FileThumbnailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileThumbnail to aggregate.
     */
    where?: FileThumbnailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileThumbnails to fetch.
     */
    orderBy?: FileThumbnailOrderByWithRelationInput | FileThumbnailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileThumbnailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileThumbnails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileThumbnails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileThumbnails
    **/
    _count?: true | FileThumbnailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileThumbnailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileThumbnailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileThumbnailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileThumbnailMaxAggregateInputType
  }

  export type GetFileThumbnailAggregateType<T extends FileThumbnailAggregateArgs> = {
        [P in keyof T & keyof AggregateFileThumbnail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileThumbnail[P]>
      : GetScalarType<T[P], AggregateFileThumbnail[P]>
  }




  export type FileThumbnailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileThumbnailWhereInput
    orderBy?: FileThumbnailOrderByWithAggregationInput | FileThumbnailOrderByWithAggregationInput[]
    by: FileThumbnailScalarFieldEnum[] | FileThumbnailScalarFieldEnum
    having?: FileThumbnailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileThumbnailCountAggregateInputType | true
    _avg?: FileThumbnailAvgAggregateInputType
    _sum?: FileThumbnailSumAggregateInputType
    _min?: FileThumbnailMinAggregateInputType
    _max?: FileThumbnailMaxAggregateInputType
  }

  export type FileThumbnailGroupByOutputType = {
    id: string
    contentId: string
    size: string
    width: number
    height: number
    filePath: string
    fileSize: bigint
    format: string
    createdAt: Date
    _count: FileThumbnailCountAggregateOutputType | null
    _avg: FileThumbnailAvgAggregateOutputType | null
    _sum: FileThumbnailSumAggregateOutputType | null
    _min: FileThumbnailMinAggregateOutputType | null
    _max: FileThumbnailMaxAggregateOutputType | null
  }

  type GetFileThumbnailGroupByPayload<T extends FileThumbnailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileThumbnailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileThumbnailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileThumbnailGroupByOutputType[P]>
            : GetScalarType<T[P], FileThumbnailGroupByOutputType[P]>
        }
      >
    >


  export type FileThumbnailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentId?: boolean
    size?: boolean
    width?: boolean
    height?: boolean
    filePath?: boolean
    fileSize?: boolean
    format?: boolean
    createdAt?: boolean
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileThumbnail"]>

  export type FileThumbnailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentId?: boolean
    size?: boolean
    width?: boolean
    height?: boolean
    filePath?: boolean
    fileSize?: boolean
    format?: boolean
    createdAt?: boolean
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileThumbnail"]>

  export type FileThumbnailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentId?: boolean
    size?: boolean
    width?: boolean
    height?: boolean
    filePath?: boolean
    fileSize?: boolean
    format?: boolean
    createdAt?: boolean
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileThumbnail"]>

  export type FileThumbnailSelectScalar = {
    id?: boolean
    contentId?: boolean
    size?: boolean
    width?: boolean
    height?: boolean
    filePath?: boolean
    fileSize?: boolean
    format?: boolean
    createdAt?: boolean
  }

  export type FileThumbnailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contentId" | "size" | "width" | "height" | "filePath" | "fileSize" | "format" | "createdAt", ExtArgs["result"]["fileThumbnail"]>
  export type FileThumbnailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }
  export type FileThumbnailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }
  export type FileThumbnailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ContentDefaultArgs<ExtArgs>
  }

  export type $FileThumbnailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileThumbnail"
    objects: {
      content: Prisma.$ContentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contentId: string
      size: string
      width: number
      height: number
      filePath: string
      fileSize: bigint
      format: string
      createdAt: Date
    }, ExtArgs["result"]["fileThumbnail"]>
    composites: {}
  }

  type FileThumbnailGetPayload<S extends boolean | null | undefined | FileThumbnailDefaultArgs> = $Result.GetResult<Prisma.$FileThumbnailPayload, S>

  type FileThumbnailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileThumbnailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileThumbnailCountAggregateInputType | true
    }

  export interface FileThumbnailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileThumbnail'], meta: { name: 'FileThumbnail' } }
    /**
     * Find zero or one FileThumbnail that matches the filter.
     * @param {FileThumbnailFindUniqueArgs} args - Arguments to find a FileThumbnail
     * @example
     * // Get one FileThumbnail
     * const fileThumbnail = await prisma.fileThumbnail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileThumbnailFindUniqueArgs>(args: SelectSubset<T, FileThumbnailFindUniqueArgs<ExtArgs>>): Prisma__FileThumbnailClient<$Result.GetResult<Prisma.$FileThumbnailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FileThumbnail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileThumbnailFindUniqueOrThrowArgs} args - Arguments to find a FileThumbnail
     * @example
     * // Get one FileThumbnail
     * const fileThumbnail = await prisma.fileThumbnail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileThumbnailFindUniqueOrThrowArgs>(args: SelectSubset<T, FileThumbnailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileThumbnailClient<$Result.GetResult<Prisma.$FileThumbnailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileThumbnail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileThumbnailFindFirstArgs} args - Arguments to find a FileThumbnail
     * @example
     * // Get one FileThumbnail
     * const fileThumbnail = await prisma.fileThumbnail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileThumbnailFindFirstArgs>(args?: SelectSubset<T, FileThumbnailFindFirstArgs<ExtArgs>>): Prisma__FileThumbnailClient<$Result.GetResult<Prisma.$FileThumbnailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileThumbnail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileThumbnailFindFirstOrThrowArgs} args - Arguments to find a FileThumbnail
     * @example
     * // Get one FileThumbnail
     * const fileThumbnail = await prisma.fileThumbnail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileThumbnailFindFirstOrThrowArgs>(args?: SelectSubset<T, FileThumbnailFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileThumbnailClient<$Result.GetResult<Prisma.$FileThumbnailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FileThumbnails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileThumbnailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileThumbnails
     * const fileThumbnails = await prisma.fileThumbnail.findMany()
     * 
     * // Get first 10 FileThumbnails
     * const fileThumbnails = await prisma.fileThumbnail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileThumbnailWithIdOnly = await prisma.fileThumbnail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileThumbnailFindManyArgs>(args?: SelectSubset<T, FileThumbnailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileThumbnailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FileThumbnail.
     * @param {FileThumbnailCreateArgs} args - Arguments to create a FileThumbnail.
     * @example
     * // Create one FileThumbnail
     * const FileThumbnail = await prisma.fileThumbnail.create({
     *   data: {
     *     // ... data to create a FileThumbnail
     *   }
     * })
     * 
     */
    create<T extends FileThumbnailCreateArgs>(args: SelectSubset<T, FileThumbnailCreateArgs<ExtArgs>>): Prisma__FileThumbnailClient<$Result.GetResult<Prisma.$FileThumbnailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FileThumbnails.
     * @param {FileThumbnailCreateManyArgs} args - Arguments to create many FileThumbnails.
     * @example
     * // Create many FileThumbnails
     * const fileThumbnail = await prisma.fileThumbnail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileThumbnailCreateManyArgs>(args?: SelectSubset<T, FileThumbnailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileThumbnails and returns the data saved in the database.
     * @param {FileThumbnailCreateManyAndReturnArgs} args - Arguments to create many FileThumbnails.
     * @example
     * // Create many FileThumbnails
     * const fileThumbnail = await prisma.fileThumbnail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileThumbnails and only return the `id`
     * const fileThumbnailWithIdOnly = await prisma.fileThumbnail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileThumbnailCreateManyAndReturnArgs>(args?: SelectSubset<T, FileThumbnailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileThumbnailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FileThumbnail.
     * @param {FileThumbnailDeleteArgs} args - Arguments to delete one FileThumbnail.
     * @example
     * // Delete one FileThumbnail
     * const FileThumbnail = await prisma.fileThumbnail.delete({
     *   where: {
     *     // ... filter to delete one FileThumbnail
     *   }
     * })
     * 
     */
    delete<T extends FileThumbnailDeleteArgs>(args: SelectSubset<T, FileThumbnailDeleteArgs<ExtArgs>>): Prisma__FileThumbnailClient<$Result.GetResult<Prisma.$FileThumbnailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FileThumbnail.
     * @param {FileThumbnailUpdateArgs} args - Arguments to update one FileThumbnail.
     * @example
     * // Update one FileThumbnail
     * const fileThumbnail = await prisma.fileThumbnail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileThumbnailUpdateArgs>(args: SelectSubset<T, FileThumbnailUpdateArgs<ExtArgs>>): Prisma__FileThumbnailClient<$Result.GetResult<Prisma.$FileThumbnailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FileThumbnails.
     * @param {FileThumbnailDeleteManyArgs} args - Arguments to filter FileThumbnails to delete.
     * @example
     * // Delete a few FileThumbnails
     * const { count } = await prisma.fileThumbnail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileThumbnailDeleteManyArgs>(args?: SelectSubset<T, FileThumbnailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileThumbnails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileThumbnailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileThumbnails
     * const fileThumbnail = await prisma.fileThumbnail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileThumbnailUpdateManyArgs>(args: SelectSubset<T, FileThumbnailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileThumbnails and returns the data updated in the database.
     * @param {FileThumbnailUpdateManyAndReturnArgs} args - Arguments to update many FileThumbnails.
     * @example
     * // Update many FileThumbnails
     * const fileThumbnail = await prisma.fileThumbnail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FileThumbnails and only return the `id`
     * const fileThumbnailWithIdOnly = await prisma.fileThumbnail.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FileThumbnailUpdateManyAndReturnArgs>(args: SelectSubset<T, FileThumbnailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileThumbnailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FileThumbnail.
     * @param {FileThumbnailUpsertArgs} args - Arguments to update or create a FileThumbnail.
     * @example
     * // Update or create a FileThumbnail
     * const fileThumbnail = await prisma.fileThumbnail.upsert({
     *   create: {
     *     // ... data to create a FileThumbnail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileThumbnail we want to update
     *   }
     * })
     */
    upsert<T extends FileThumbnailUpsertArgs>(args: SelectSubset<T, FileThumbnailUpsertArgs<ExtArgs>>): Prisma__FileThumbnailClient<$Result.GetResult<Prisma.$FileThumbnailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FileThumbnails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileThumbnailCountArgs} args - Arguments to filter FileThumbnails to count.
     * @example
     * // Count the number of FileThumbnails
     * const count = await prisma.fileThumbnail.count({
     *   where: {
     *     // ... the filter for the FileThumbnails we want to count
     *   }
     * })
    **/
    count<T extends FileThumbnailCountArgs>(
      args?: Subset<T, FileThumbnailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileThumbnailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileThumbnail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileThumbnailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileThumbnailAggregateArgs>(args: Subset<T, FileThumbnailAggregateArgs>): Prisma.PrismaPromise<GetFileThumbnailAggregateType<T>>

    /**
     * Group by FileThumbnail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileThumbnailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileThumbnailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileThumbnailGroupByArgs['orderBy'] }
        : { orderBy?: FileThumbnailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileThumbnailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileThumbnailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileThumbnail model
   */
  readonly fields: FileThumbnailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileThumbnail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileThumbnailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    content<T extends ContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentDefaultArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FileThumbnail model
   */
  interface FileThumbnailFieldRefs {
    readonly id: FieldRef<"FileThumbnail", 'String'>
    readonly contentId: FieldRef<"FileThumbnail", 'String'>
    readonly size: FieldRef<"FileThumbnail", 'String'>
    readonly width: FieldRef<"FileThumbnail", 'Int'>
    readonly height: FieldRef<"FileThumbnail", 'Int'>
    readonly filePath: FieldRef<"FileThumbnail", 'String'>
    readonly fileSize: FieldRef<"FileThumbnail", 'BigInt'>
    readonly format: FieldRef<"FileThumbnail", 'String'>
    readonly createdAt: FieldRef<"FileThumbnail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FileThumbnail findUnique
   */
  export type FileThumbnailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileThumbnail
     */
    select?: FileThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileThumbnail
     */
    omit?: FileThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileThumbnailInclude<ExtArgs> | null
    /**
     * Filter, which FileThumbnail to fetch.
     */
    where: FileThumbnailWhereUniqueInput
  }

  /**
   * FileThumbnail findUniqueOrThrow
   */
  export type FileThumbnailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileThumbnail
     */
    select?: FileThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileThumbnail
     */
    omit?: FileThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileThumbnailInclude<ExtArgs> | null
    /**
     * Filter, which FileThumbnail to fetch.
     */
    where: FileThumbnailWhereUniqueInput
  }

  /**
   * FileThumbnail findFirst
   */
  export type FileThumbnailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileThumbnail
     */
    select?: FileThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileThumbnail
     */
    omit?: FileThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileThumbnailInclude<ExtArgs> | null
    /**
     * Filter, which FileThumbnail to fetch.
     */
    where?: FileThumbnailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileThumbnails to fetch.
     */
    orderBy?: FileThumbnailOrderByWithRelationInput | FileThumbnailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileThumbnails.
     */
    cursor?: FileThumbnailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileThumbnails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileThumbnails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileThumbnails.
     */
    distinct?: FileThumbnailScalarFieldEnum | FileThumbnailScalarFieldEnum[]
  }

  /**
   * FileThumbnail findFirstOrThrow
   */
  export type FileThumbnailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileThumbnail
     */
    select?: FileThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileThumbnail
     */
    omit?: FileThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileThumbnailInclude<ExtArgs> | null
    /**
     * Filter, which FileThumbnail to fetch.
     */
    where?: FileThumbnailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileThumbnails to fetch.
     */
    orderBy?: FileThumbnailOrderByWithRelationInput | FileThumbnailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileThumbnails.
     */
    cursor?: FileThumbnailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileThumbnails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileThumbnails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileThumbnails.
     */
    distinct?: FileThumbnailScalarFieldEnum | FileThumbnailScalarFieldEnum[]
  }

  /**
   * FileThumbnail findMany
   */
  export type FileThumbnailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileThumbnail
     */
    select?: FileThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileThumbnail
     */
    omit?: FileThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileThumbnailInclude<ExtArgs> | null
    /**
     * Filter, which FileThumbnails to fetch.
     */
    where?: FileThumbnailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileThumbnails to fetch.
     */
    orderBy?: FileThumbnailOrderByWithRelationInput | FileThumbnailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileThumbnails.
     */
    cursor?: FileThumbnailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileThumbnails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileThumbnails.
     */
    skip?: number
    distinct?: FileThumbnailScalarFieldEnum | FileThumbnailScalarFieldEnum[]
  }

  /**
   * FileThumbnail create
   */
  export type FileThumbnailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileThumbnail
     */
    select?: FileThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileThumbnail
     */
    omit?: FileThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileThumbnailInclude<ExtArgs> | null
    /**
     * The data needed to create a FileThumbnail.
     */
    data: XOR<FileThumbnailCreateInput, FileThumbnailUncheckedCreateInput>
  }

  /**
   * FileThumbnail createMany
   */
  export type FileThumbnailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileThumbnails.
     */
    data: FileThumbnailCreateManyInput | FileThumbnailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileThumbnail createManyAndReturn
   */
  export type FileThumbnailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileThumbnail
     */
    select?: FileThumbnailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileThumbnail
     */
    omit?: FileThumbnailOmit<ExtArgs> | null
    /**
     * The data used to create many FileThumbnails.
     */
    data: FileThumbnailCreateManyInput | FileThumbnailCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileThumbnailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileThumbnail update
   */
  export type FileThumbnailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileThumbnail
     */
    select?: FileThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileThumbnail
     */
    omit?: FileThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileThumbnailInclude<ExtArgs> | null
    /**
     * The data needed to update a FileThumbnail.
     */
    data: XOR<FileThumbnailUpdateInput, FileThumbnailUncheckedUpdateInput>
    /**
     * Choose, which FileThumbnail to update.
     */
    where: FileThumbnailWhereUniqueInput
  }

  /**
   * FileThumbnail updateMany
   */
  export type FileThumbnailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileThumbnails.
     */
    data: XOR<FileThumbnailUpdateManyMutationInput, FileThumbnailUncheckedUpdateManyInput>
    /**
     * Filter which FileThumbnails to update
     */
    where?: FileThumbnailWhereInput
    /**
     * Limit how many FileThumbnails to update.
     */
    limit?: number
  }

  /**
   * FileThumbnail updateManyAndReturn
   */
  export type FileThumbnailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileThumbnail
     */
    select?: FileThumbnailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileThumbnail
     */
    omit?: FileThumbnailOmit<ExtArgs> | null
    /**
     * The data used to update FileThumbnails.
     */
    data: XOR<FileThumbnailUpdateManyMutationInput, FileThumbnailUncheckedUpdateManyInput>
    /**
     * Filter which FileThumbnails to update
     */
    where?: FileThumbnailWhereInput
    /**
     * Limit how many FileThumbnails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileThumbnailIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileThumbnail upsert
   */
  export type FileThumbnailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileThumbnail
     */
    select?: FileThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileThumbnail
     */
    omit?: FileThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileThumbnailInclude<ExtArgs> | null
    /**
     * The filter to search for the FileThumbnail to update in case it exists.
     */
    where: FileThumbnailWhereUniqueInput
    /**
     * In case the FileThumbnail found by the `where` argument doesn't exist, create a new FileThumbnail with this data.
     */
    create: XOR<FileThumbnailCreateInput, FileThumbnailUncheckedCreateInput>
    /**
     * In case the FileThumbnail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileThumbnailUpdateInput, FileThumbnailUncheckedUpdateInput>
  }

  /**
   * FileThumbnail delete
   */
  export type FileThumbnailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileThumbnail
     */
    select?: FileThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileThumbnail
     */
    omit?: FileThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileThumbnailInclude<ExtArgs> | null
    /**
     * Filter which FileThumbnail to delete.
     */
    where: FileThumbnailWhereUniqueInput
  }

  /**
   * FileThumbnail deleteMany
   */
  export type FileThumbnailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileThumbnails to delete
     */
    where?: FileThumbnailWhereInput
    /**
     * Limit how many FileThumbnails to delete.
     */
    limit?: number
  }

  /**
   * FileThumbnail without action
   */
  export type FileThumbnailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileThumbnail
     */
    select?: FileThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileThumbnail
     */
    omit?: FileThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileThumbnailInclude<ExtArgs> | null
  }


  /**
   * Model FileVersion
   */

  export type AggregateFileVersion = {
    _count: FileVersionCountAggregateOutputType | null
    _avg: FileVersionAvgAggregateOutputType | null
    _sum: FileVersionSumAggregateOutputType | null
    _min: FileVersionMinAggregateOutputType | null
    _max: FileVersionMaxAggregateOutputType | null
  }

  export type FileVersionAvgAggregateOutputType = {
    version: number | null
    fileSize: number | null
  }

  export type FileVersionSumAggregateOutputType = {
    version: number | null
    fileSize: bigint | null
  }

  export type FileVersionMinAggregateOutputType = {
    id: string | null
    contentId: string | null
    version: number | null
    filePath: string | null
    fileSize: bigint | null
    fileHash: string | null
    changes: string | null
    uploadedById: string | null
    createdAt: Date | null
  }

  export type FileVersionMaxAggregateOutputType = {
    id: string | null
    contentId: string | null
    version: number | null
    filePath: string | null
    fileSize: bigint | null
    fileHash: string | null
    changes: string | null
    uploadedById: string | null
    createdAt: Date | null
  }

  export type FileVersionCountAggregateOutputType = {
    id: number
    contentId: number
    version: number
    filePath: number
    fileSize: number
    fileHash: number
    changes: number
    uploadedById: number
    createdAt: number
    _all: number
  }


  export type FileVersionAvgAggregateInputType = {
    version?: true
    fileSize?: true
  }

  export type FileVersionSumAggregateInputType = {
    version?: true
    fileSize?: true
  }

  export type FileVersionMinAggregateInputType = {
    id?: true
    contentId?: true
    version?: true
    filePath?: true
    fileSize?: true
    fileHash?: true
    changes?: true
    uploadedById?: true
    createdAt?: true
  }

  export type FileVersionMaxAggregateInputType = {
    id?: true
    contentId?: true
    version?: true
    filePath?: true
    fileSize?: true
    fileHash?: true
    changes?: true
    uploadedById?: true
    createdAt?: true
  }

  export type FileVersionCountAggregateInputType = {
    id?: true
    contentId?: true
    version?: true
    filePath?: true
    fileSize?: true
    fileHash?: true
    changes?: true
    uploadedById?: true
    createdAt?: true
    _all?: true
  }

  export type FileVersionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileVersion to aggregate.
     */
    where?: FileVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileVersions to fetch.
     */
    orderBy?: FileVersionOrderByWithRelationInput | FileVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FileVersions
    **/
    _count?: true | FileVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileVersionMaxAggregateInputType
  }

  export type GetFileVersionAggregateType<T extends FileVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateFileVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFileVersion[P]>
      : GetScalarType<T[P], AggregateFileVersion[P]>
  }




  export type FileVersionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileVersionWhereInput
    orderBy?: FileVersionOrderByWithAggregationInput | FileVersionOrderByWithAggregationInput[]
    by: FileVersionScalarFieldEnum[] | FileVersionScalarFieldEnum
    having?: FileVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileVersionCountAggregateInputType | true
    _avg?: FileVersionAvgAggregateInputType
    _sum?: FileVersionSumAggregateInputType
    _min?: FileVersionMinAggregateInputType
    _max?: FileVersionMaxAggregateInputType
  }

  export type FileVersionGroupByOutputType = {
    id: string
    contentId: string
    version: number
    filePath: string
    fileSize: bigint
    fileHash: string
    changes: string | null
    uploadedById: string
    createdAt: Date
    _count: FileVersionCountAggregateOutputType | null
    _avg: FileVersionAvgAggregateOutputType | null
    _sum: FileVersionSumAggregateOutputType | null
    _min: FileVersionMinAggregateOutputType | null
    _max: FileVersionMaxAggregateOutputType | null
  }

  type GetFileVersionGroupByPayload<T extends FileVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileVersionGroupByOutputType[P]>
            : GetScalarType<T[P], FileVersionGroupByOutputType[P]>
        }
      >
    >


  export type FileVersionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentId?: boolean
    version?: boolean
    filePath?: boolean
    fileSize?: boolean
    fileHash?: boolean
    changes?: boolean
    uploadedById?: boolean
    createdAt?: boolean
    content?: boolean | ContentDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileVersion"]>

  export type FileVersionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentId?: boolean
    version?: boolean
    filePath?: boolean
    fileSize?: boolean
    fileHash?: boolean
    changes?: boolean
    uploadedById?: boolean
    createdAt?: boolean
    content?: boolean | ContentDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileVersion"]>

  export type FileVersionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contentId?: boolean
    version?: boolean
    filePath?: boolean
    fileSize?: boolean
    fileHash?: boolean
    changes?: boolean
    uploadedById?: boolean
    createdAt?: boolean
    content?: boolean | ContentDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fileVersion"]>

  export type FileVersionSelectScalar = {
    id?: boolean
    contentId?: boolean
    version?: boolean
    filePath?: boolean
    fileSize?: boolean
    fileHash?: boolean
    changes?: boolean
    uploadedById?: boolean
    createdAt?: boolean
  }

  export type FileVersionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contentId" | "version" | "filePath" | "fileSize" | "fileHash" | "changes" | "uploadedById" | "createdAt", ExtArgs["result"]["fileVersion"]>
  export type FileVersionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ContentDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FileVersionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ContentDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FileVersionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ContentDefaultArgs<ExtArgs>
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FileVersionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FileVersion"
    objects: {
      content: Prisma.$ContentPayload<ExtArgs>
      uploadedBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contentId: string
      version: number
      filePath: string
      fileSize: bigint
      fileHash: string
      changes: string | null
      uploadedById: string
      createdAt: Date
    }, ExtArgs["result"]["fileVersion"]>
    composites: {}
  }

  type FileVersionGetPayload<S extends boolean | null | undefined | FileVersionDefaultArgs> = $Result.GetResult<Prisma.$FileVersionPayload, S>

  type FileVersionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileVersionCountAggregateInputType | true
    }

  export interface FileVersionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FileVersion'], meta: { name: 'FileVersion' } }
    /**
     * Find zero or one FileVersion that matches the filter.
     * @param {FileVersionFindUniqueArgs} args - Arguments to find a FileVersion
     * @example
     * // Get one FileVersion
     * const fileVersion = await prisma.fileVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileVersionFindUniqueArgs>(args: SelectSubset<T, FileVersionFindUniqueArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FileVersion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileVersionFindUniqueOrThrowArgs} args - Arguments to find a FileVersion
     * @example
     * // Get one FileVersion
     * const fileVersion = await prisma.fileVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileVersionFindUniqueOrThrowArgs>(args: SelectSubset<T, FileVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileVersionFindFirstArgs} args - Arguments to find a FileVersion
     * @example
     * // Get one FileVersion
     * const fileVersion = await prisma.fileVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileVersionFindFirstArgs>(args?: SelectSubset<T, FileVersionFindFirstArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FileVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileVersionFindFirstOrThrowArgs} args - Arguments to find a FileVersion
     * @example
     * // Get one FileVersion
     * const fileVersion = await prisma.fileVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileVersionFindFirstOrThrowArgs>(args?: SelectSubset<T, FileVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FileVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileVersionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FileVersions
     * const fileVersions = await prisma.fileVersion.findMany()
     * 
     * // Get first 10 FileVersions
     * const fileVersions = await prisma.fileVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileVersionWithIdOnly = await prisma.fileVersion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FileVersionFindManyArgs>(args?: SelectSubset<T, FileVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FileVersion.
     * @param {FileVersionCreateArgs} args - Arguments to create a FileVersion.
     * @example
     * // Create one FileVersion
     * const FileVersion = await prisma.fileVersion.create({
     *   data: {
     *     // ... data to create a FileVersion
     *   }
     * })
     * 
     */
    create<T extends FileVersionCreateArgs>(args: SelectSubset<T, FileVersionCreateArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FileVersions.
     * @param {FileVersionCreateManyArgs} args - Arguments to create many FileVersions.
     * @example
     * // Create many FileVersions
     * const fileVersion = await prisma.fileVersion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileVersionCreateManyArgs>(args?: SelectSubset<T, FileVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FileVersions and returns the data saved in the database.
     * @param {FileVersionCreateManyAndReturnArgs} args - Arguments to create many FileVersions.
     * @example
     * // Create many FileVersions
     * const fileVersion = await prisma.fileVersion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FileVersions and only return the `id`
     * const fileVersionWithIdOnly = await prisma.fileVersion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileVersionCreateManyAndReturnArgs>(args?: SelectSubset<T, FileVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FileVersion.
     * @param {FileVersionDeleteArgs} args - Arguments to delete one FileVersion.
     * @example
     * // Delete one FileVersion
     * const FileVersion = await prisma.fileVersion.delete({
     *   where: {
     *     // ... filter to delete one FileVersion
     *   }
     * })
     * 
     */
    delete<T extends FileVersionDeleteArgs>(args: SelectSubset<T, FileVersionDeleteArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FileVersion.
     * @param {FileVersionUpdateArgs} args - Arguments to update one FileVersion.
     * @example
     * // Update one FileVersion
     * const fileVersion = await prisma.fileVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileVersionUpdateArgs>(args: SelectSubset<T, FileVersionUpdateArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FileVersions.
     * @param {FileVersionDeleteManyArgs} args - Arguments to filter FileVersions to delete.
     * @example
     * // Delete a few FileVersions
     * const { count } = await prisma.fileVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileVersionDeleteManyArgs>(args?: SelectSubset<T, FileVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FileVersions
     * const fileVersion = await prisma.fileVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileVersionUpdateManyArgs>(args: SelectSubset<T, FileVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FileVersions and returns the data updated in the database.
     * @param {FileVersionUpdateManyAndReturnArgs} args - Arguments to update many FileVersions.
     * @example
     * // Update many FileVersions
     * const fileVersion = await prisma.fileVersion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FileVersions and only return the `id`
     * const fileVersionWithIdOnly = await prisma.fileVersion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FileVersionUpdateManyAndReturnArgs>(args: SelectSubset<T, FileVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FileVersion.
     * @param {FileVersionUpsertArgs} args - Arguments to update or create a FileVersion.
     * @example
     * // Update or create a FileVersion
     * const fileVersion = await prisma.fileVersion.upsert({
     *   create: {
     *     // ... data to create a FileVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FileVersion we want to update
     *   }
     * })
     */
    upsert<T extends FileVersionUpsertArgs>(args: SelectSubset<T, FileVersionUpsertArgs<ExtArgs>>): Prisma__FileVersionClient<$Result.GetResult<Prisma.$FileVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FileVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileVersionCountArgs} args - Arguments to filter FileVersions to count.
     * @example
     * // Count the number of FileVersions
     * const count = await prisma.fileVersion.count({
     *   where: {
     *     // ... the filter for the FileVersions we want to count
     *   }
     * })
    **/
    count<T extends FileVersionCountArgs>(
      args?: Subset<T, FileVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FileVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileVersionAggregateArgs>(args: Subset<T, FileVersionAggregateArgs>): Prisma.PrismaPromise<GetFileVersionAggregateType<T>>

    /**
     * Group by FileVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileVersionGroupByArgs['orderBy'] }
        : { orderBy?: FileVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FileVersion model
   */
  readonly fields: FileVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FileVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileVersionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    content<T extends ContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentDefaultArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    uploadedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FileVersion model
   */
  interface FileVersionFieldRefs {
    readonly id: FieldRef<"FileVersion", 'String'>
    readonly contentId: FieldRef<"FileVersion", 'String'>
    readonly version: FieldRef<"FileVersion", 'Int'>
    readonly filePath: FieldRef<"FileVersion", 'String'>
    readonly fileSize: FieldRef<"FileVersion", 'BigInt'>
    readonly fileHash: FieldRef<"FileVersion", 'String'>
    readonly changes: FieldRef<"FileVersion", 'String'>
    readonly uploadedById: FieldRef<"FileVersion", 'String'>
    readonly createdAt: FieldRef<"FileVersion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FileVersion findUnique
   */
  export type FileVersionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileVersion
     */
    omit?: FileVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * Filter, which FileVersion to fetch.
     */
    where: FileVersionWhereUniqueInput
  }

  /**
   * FileVersion findUniqueOrThrow
   */
  export type FileVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileVersion
     */
    omit?: FileVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * Filter, which FileVersion to fetch.
     */
    where: FileVersionWhereUniqueInput
  }

  /**
   * FileVersion findFirst
   */
  export type FileVersionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileVersion
     */
    omit?: FileVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * Filter, which FileVersion to fetch.
     */
    where?: FileVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileVersions to fetch.
     */
    orderBy?: FileVersionOrderByWithRelationInput | FileVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileVersions.
     */
    cursor?: FileVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileVersions.
     */
    distinct?: FileVersionScalarFieldEnum | FileVersionScalarFieldEnum[]
  }

  /**
   * FileVersion findFirstOrThrow
   */
  export type FileVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileVersion
     */
    omit?: FileVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * Filter, which FileVersion to fetch.
     */
    where?: FileVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileVersions to fetch.
     */
    orderBy?: FileVersionOrderByWithRelationInput | FileVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FileVersions.
     */
    cursor?: FileVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FileVersions.
     */
    distinct?: FileVersionScalarFieldEnum | FileVersionScalarFieldEnum[]
  }

  /**
   * FileVersion findMany
   */
  export type FileVersionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileVersion
     */
    omit?: FileVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * Filter, which FileVersions to fetch.
     */
    where?: FileVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FileVersions to fetch.
     */
    orderBy?: FileVersionOrderByWithRelationInput | FileVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FileVersions.
     */
    cursor?: FileVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FileVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FileVersions.
     */
    skip?: number
    distinct?: FileVersionScalarFieldEnum | FileVersionScalarFieldEnum[]
  }

  /**
   * FileVersion create
   */
  export type FileVersionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileVersion
     */
    omit?: FileVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * The data needed to create a FileVersion.
     */
    data: XOR<FileVersionCreateInput, FileVersionUncheckedCreateInput>
  }

  /**
   * FileVersion createMany
   */
  export type FileVersionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FileVersions.
     */
    data: FileVersionCreateManyInput | FileVersionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FileVersion createManyAndReturn
   */
  export type FileVersionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileVersion
     */
    omit?: FileVersionOmit<ExtArgs> | null
    /**
     * The data used to create many FileVersions.
     */
    data: FileVersionCreateManyInput | FileVersionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileVersion update
   */
  export type FileVersionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileVersion
     */
    omit?: FileVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * The data needed to update a FileVersion.
     */
    data: XOR<FileVersionUpdateInput, FileVersionUncheckedUpdateInput>
    /**
     * Choose, which FileVersion to update.
     */
    where: FileVersionWhereUniqueInput
  }

  /**
   * FileVersion updateMany
   */
  export type FileVersionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FileVersions.
     */
    data: XOR<FileVersionUpdateManyMutationInput, FileVersionUncheckedUpdateManyInput>
    /**
     * Filter which FileVersions to update
     */
    where?: FileVersionWhereInput
    /**
     * Limit how many FileVersions to update.
     */
    limit?: number
  }

  /**
   * FileVersion updateManyAndReturn
   */
  export type FileVersionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FileVersion
     */
    omit?: FileVersionOmit<ExtArgs> | null
    /**
     * The data used to update FileVersions.
     */
    data: XOR<FileVersionUpdateManyMutationInput, FileVersionUncheckedUpdateManyInput>
    /**
     * Filter which FileVersions to update
     */
    where?: FileVersionWhereInput
    /**
     * Limit how many FileVersions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FileVersion upsert
   */
  export type FileVersionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileVersion
     */
    omit?: FileVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * The filter to search for the FileVersion to update in case it exists.
     */
    where: FileVersionWhereUniqueInput
    /**
     * In case the FileVersion found by the `where` argument doesn't exist, create a new FileVersion with this data.
     */
    create: XOR<FileVersionCreateInput, FileVersionUncheckedCreateInput>
    /**
     * In case the FileVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileVersionUpdateInput, FileVersionUncheckedUpdateInput>
  }

  /**
   * FileVersion delete
   */
  export type FileVersionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileVersion
     */
    omit?: FileVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
    /**
     * Filter which FileVersion to delete.
     */
    where: FileVersionWhereUniqueInput
  }

  /**
   * FileVersion deleteMany
   */
  export type FileVersionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FileVersions to delete
     */
    where?: FileVersionWhereInput
    /**
     * Limit how many FileVersions to delete.
     */
    limit?: number
  }

  /**
   * FileVersion without action
   */
  export type FileVersionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileVersion
     */
    select?: FileVersionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FileVersion
     */
    omit?: FileVersionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileVersionInclude<ExtArgs> | null
  }


  /**
   * Model ErrorLog
   */

  export type AggregateErrorLog = {
    _count: ErrorLogCountAggregateOutputType | null
    _min: ErrorLogMinAggregateOutputType | null
    _max: ErrorLogMaxAggregateOutputType | null
  }

  export type ErrorLogMinAggregateOutputType = {
    id: string | null
    displayId: string | null
    errorType: string | null
    message: string | null
    stack: string | null
    metadata: string | null
    userAgent: string | null
    url: string | null
    timestamp: Date | null
    createdAt: Date | null
  }

  export type ErrorLogMaxAggregateOutputType = {
    id: string | null
    displayId: string | null
    errorType: string | null
    message: string | null
    stack: string | null
    metadata: string | null
    userAgent: string | null
    url: string | null
    timestamp: Date | null
    createdAt: Date | null
  }

  export type ErrorLogCountAggregateOutputType = {
    id: number
    displayId: number
    errorType: number
    message: number
    stack: number
    metadata: number
    userAgent: number
    url: number
    timestamp: number
    createdAt: number
    _all: number
  }


  export type ErrorLogMinAggregateInputType = {
    id?: true
    displayId?: true
    errorType?: true
    message?: true
    stack?: true
    metadata?: true
    userAgent?: true
    url?: true
    timestamp?: true
    createdAt?: true
  }

  export type ErrorLogMaxAggregateInputType = {
    id?: true
    displayId?: true
    errorType?: true
    message?: true
    stack?: true
    metadata?: true
    userAgent?: true
    url?: true
    timestamp?: true
    createdAt?: true
  }

  export type ErrorLogCountAggregateInputType = {
    id?: true
    displayId?: true
    errorType?: true
    message?: true
    stack?: true
    metadata?: true
    userAgent?: true
    url?: true
    timestamp?: true
    createdAt?: true
    _all?: true
  }

  export type ErrorLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ErrorLog to aggregate.
     */
    where?: ErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorLogs to fetch.
     */
    orderBy?: ErrorLogOrderByWithRelationInput | ErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ErrorLogs
    **/
    _count?: true | ErrorLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ErrorLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ErrorLogMaxAggregateInputType
  }

  export type GetErrorLogAggregateType<T extends ErrorLogAggregateArgs> = {
        [P in keyof T & keyof AggregateErrorLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateErrorLog[P]>
      : GetScalarType<T[P], AggregateErrorLog[P]>
  }




  export type ErrorLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ErrorLogWhereInput
    orderBy?: ErrorLogOrderByWithAggregationInput | ErrorLogOrderByWithAggregationInput[]
    by: ErrorLogScalarFieldEnum[] | ErrorLogScalarFieldEnum
    having?: ErrorLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ErrorLogCountAggregateInputType | true
    _min?: ErrorLogMinAggregateInputType
    _max?: ErrorLogMaxAggregateInputType
  }

  export type ErrorLogGroupByOutputType = {
    id: string
    displayId: string
    errorType: string
    message: string
    stack: string | null
    metadata: string | null
    userAgent: string | null
    url: string | null
    timestamp: Date
    createdAt: Date
    _count: ErrorLogCountAggregateOutputType | null
    _min: ErrorLogMinAggregateOutputType | null
    _max: ErrorLogMaxAggregateOutputType | null
  }

  type GetErrorLogGroupByPayload<T extends ErrorLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ErrorLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ErrorLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ErrorLogGroupByOutputType[P]>
            : GetScalarType<T[P], ErrorLogGroupByOutputType[P]>
        }
      >
    >


  export type ErrorLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayId?: boolean
    errorType?: boolean
    message?: boolean
    stack?: boolean
    metadata?: boolean
    userAgent?: boolean
    url?: boolean
    timestamp?: boolean
    createdAt?: boolean
    display?: boolean | DisplayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["errorLog"]>

  export type ErrorLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayId?: boolean
    errorType?: boolean
    message?: boolean
    stack?: boolean
    metadata?: boolean
    userAgent?: boolean
    url?: boolean
    timestamp?: boolean
    createdAt?: boolean
    display?: boolean | DisplayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["errorLog"]>

  export type ErrorLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayId?: boolean
    errorType?: boolean
    message?: boolean
    stack?: boolean
    metadata?: boolean
    userAgent?: boolean
    url?: boolean
    timestamp?: boolean
    createdAt?: boolean
    display?: boolean | DisplayDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["errorLog"]>

  export type ErrorLogSelectScalar = {
    id?: boolean
    displayId?: boolean
    errorType?: boolean
    message?: boolean
    stack?: boolean
    metadata?: boolean
    userAgent?: boolean
    url?: boolean
    timestamp?: boolean
    createdAt?: boolean
  }

  export type ErrorLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "displayId" | "errorType" | "message" | "stack" | "metadata" | "userAgent" | "url" | "timestamp" | "createdAt", ExtArgs["result"]["errorLog"]>
  export type ErrorLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    display?: boolean | DisplayDefaultArgs<ExtArgs>
  }
  export type ErrorLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    display?: boolean | DisplayDefaultArgs<ExtArgs>
  }
  export type ErrorLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    display?: boolean | DisplayDefaultArgs<ExtArgs>
  }

  export type $ErrorLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ErrorLog"
    objects: {
      display: Prisma.$DisplayPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      displayId: string
      errorType: string
      message: string
      stack: string | null
      metadata: string | null
      userAgent: string | null
      url: string | null
      timestamp: Date
      createdAt: Date
    }, ExtArgs["result"]["errorLog"]>
    composites: {}
  }

  type ErrorLogGetPayload<S extends boolean | null | undefined | ErrorLogDefaultArgs> = $Result.GetResult<Prisma.$ErrorLogPayload, S>

  type ErrorLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ErrorLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ErrorLogCountAggregateInputType | true
    }

  export interface ErrorLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ErrorLog'], meta: { name: 'ErrorLog' } }
    /**
     * Find zero or one ErrorLog that matches the filter.
     * @param {ErrorLogFindUniqueArgs} args - Arguments to find a ErrorLog
     * @example
     * // Get one ErrorLog
     * const errorLog = await prisma.errorLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ErrorLogFindUniqueArgs>(args: SelectSubset<T, ErrorLogFindUniqueArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ErrorLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ErrorLogFindUniqueOrThrowArgs} args - Arguments to find a ErrorLog
     * @example
     * // Get one ErrorLog
     * const errorLog = await prisma.errorLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ErrorLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ErrorLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ErrorLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogFindFirstArgs} args - Arguments to find a ErrorLog
     * @example
     * // Get one ErrorLog
     * const errorLog = await prisma.errorLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ErrorLogFindFirstArgs>(args?: SelectSubset<T, ErrorLogFindFirstArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ErrorLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogFindFirstOrThrowArgs} args - Arguments to find a ErrorLog
     * @example
     * // Get one ErrorLog
     * const errorLog = await prisma.errorLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ErrorLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ErrorLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ErrorLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ErrorLogs
     * const errorLogs = await prisma.errorLog.findMany()
     * 
     * // Get first 10 ErrorLogs
     * const errorLogs = await prisma.errorLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const errorLogWithIdOnly = await prisma.errorLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ErrorLogFindManyArgs>(args?: SelectSubset<T, ErrorLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ErrorLog.
     * @param {ErrorLogCreateArgs} args - Arguments to create a ErrorLog.
     * @example
     * // Create one ErrorLog
     * const ErrorLog = await prisma.errorLog.create({
     *   data: {
     *     // ... data to create a ErrorLog
     *   }
     * })
     * 
     */
    create<T extends ErrorLogCreateArgs>(args: SelectSubset<T, ErrorLogCreateArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ErrorLogs.
     * @param {ErrorLogCreateManyArgs} args - Arguments to create many ErrorLogs.
     * @example
     * // Create many ErrorLogs
     * const errorLog = await prisma.errorLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ErrorLogCreateManyArgs>(args?: SelectSubset<T, ErrorLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ErrorLogs and returns the data saved in the database.
     * @param {ErrorLogCreateManyAndReturnArgs} args - Arguments to create many ErrorLogs.
     * @example
     * // Create many ErrorLogs
     * const errorLog = await prisma.errorLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ErrorLogs and only return the `id`
     * const errorLogWithIdOnly = await prisma.errorLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ErrorLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ErrorLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ErrorLog.
     * @param {ErrorLogDeleteArgs} args - Arguments to delete one ErrorLog.
     * @example
     * // Delete one ErrorLog
     * const ErrorLog = await prisma.errorLog.delete({
     *   where: {
     *     // ... filter to delete one ErrorLog
     *   }
     * })
     * 
     */
    delete<T extends ErrorLogDeleteArgs>(args: SelectSubset<T, ErrorLogDeleteArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ErrorLog.
     * @param {ErrorLogUpdateArgs} args - Arguments to update one ErrorLog.
     * @example
     * // Update one ErrorLog
     * const errorLog = await prisma.errorLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ErrorLogUpdateArgs>(args: SelectSubset<T, ErrorLogUpdateArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ErrorLogs.
     * @param {ErrorLogDeleteManyArgs} args - Arguments to filter ErrorLogs to delete.
     * @example
     * // Delete a few ErrorLogs
     * const { count } = await prisma.errorLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ErrorLogDeleteManyArgs>(args?: SelectSubset<T, ErrorLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ErrorLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ErrorLogs
     * const errorLog = await prisma.errorLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ErrorLogUpdateManyArgs>(args: SelectSubset<T, ErrorLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ErrorLogs and returns the data updated in the database.
     * @param {ErrorLogUpdateManyAndReturnArgs} args - Arguments to update many ErrorLogs.
     * @example
     * // Update many ErrorLogs
     * const errorLog = await prisma.errorLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ErrorLogs and only return the `id`
     * const errorLogWithIdOnly = await prisma.errorLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ErrorLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ErrorLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ErrorLog.
     * @param {ErrorLogUpsertArgs} args - Arguments to update or create a ErrorLog.
     * @example
     * // Update or create a ErrorLog
     * const errorLog = await prisma.errorLog.upsert({
     *   create: {
     *     // ... data to create a ErrorLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ErrorLog we want to update
     *   }
     * })
     */
    upsert<T extends ErrorLogUpsertArgs>(args: SelectSubset<T, ErrorLogUpsertArgs<ExtArgs>>): Prisma__ErrorLogClient<$Result.GetResult<Prisma.$ErrorLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ErrorLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogCountArgs} args - Arguments to filter ErrorLogs to count.
     * @example
     * // Count the number of ErrorLogs
     * const count = await prisma.errorLog.count({
     *   where: {
     *     // ... the filter for the ErrorLogs we want to count
     *   }
     * })
    **/
    count<T extends ErrorLogCountArgs>(
      args?: Subset<T, ErrorLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ErrorLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ErrorLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ErrorLogAggregateArgs>(args: Subset<T, ErrorLogAggregateArgs>): Prisma.PrismaPromise<GetErrorLogAggregateType<T>>

    /**
     * Group by ErrorLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ErrorLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ErrorLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ErrorLogGroupByArgs['orderBy'] }
        : { orderBy?: ErrorLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ErrorLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetErrorLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ErrorLog model
   */
  readonly fields: ErrorLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ErrorLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ErrorLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    display<T extends DisplayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisplayDefaultArgs<ExtArgs>>): Prisma__DisplayClient<$Result.GetResult<Prisma.$DisplayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ErrorLog model
   */
  interface ErrorLogFieldRefs {
    readonly id: FieldRef<"ErrorLog", 'String'>
    readonly displayId: FieldRef<"ErrorLog", 'String'>
    readonly errorType: FieldRef<"ErrorLog", 'String'>
    readonly message: FieldRef<"ErrorLog", 'String'>
    readonly stack: FieldRef<"ErrorLog", 'String'>
    readonly metadata: FieldRef<"ErrorLog", 'String'>
    readonly userAgent: FieldRef<"ErrorLog", 'String'>
    readonly url: FieldRef<"ErrorLog", 'String'>
    readonly timestamp: FieldRef<"ErrorLog", 'DateTime'>
    readonly createdAt: FieldRef<"ErrorLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ErrorLog findUnique
   */
  export type ErrorLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogInclude<ExtArgs> | null
    /**
     * Filter, which ErrorLog to fetch.
     */
    where: ErrorLogWhereUniqueInput
  }

  /**
   * ErrorLog findUniqueOrThrow
   */
  export type ErrorLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogInclude<ExtArgs> | null
    /**
     * Filter, which ErrorLog to fetch.
     */
    where: ErrorLogWhereUniqueInput
  }

  /**
   * ErrorLog findFirst
   */
  export type ErrorLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogInclude<ExtArgs> | null
    /**
     * Filter, which ErrorLog to fetch.
     */
    where?: ErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorLogs to fetch.
     */
    orderBy?: ErrorLogOrderByWithRelationInput | ErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ErrorLogs.
     */
    cursor?: ErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ErrorLogs.
     */
    distinct?: ErrorLogScalarFieldEnum | ErrorLogScalarFieldEnum[]
  }

  /**
   * ErrorLog findFirstOrThrow
   */
  export type ErrorLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogInclude<ExtArgs> | null
    /**
     * Filter, which ErrorLog to fetch.
     */
    where?: ErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorLogs to fetch.
     */
    orderBy?: ErrorLogOrderByWithRelationInput | ErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ErrorLogs.
     */
    cursor?: ErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ErrorLogs.
     */
    distinct?: ErrorLogScalarFieldEnum | ErrorLogScalarFieldEnum[]
  }

  /**
   * ErrorLog findMany
   */
  export type ErrorLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogInclude<ExtArgs> | null
    /**
     * Filter, which ErrorLogs to fetch.
     */
    where?: ErrorLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ErrorLogs to fetch.
     */
    orderBy?: ErrorLogOrderByWithRelationInput | ErrorLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ErrorLogs.
     */
    cursor?: ErrorLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ErrorLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ErrorLogs.
     */
    skip?: number
    distinct?: ErrorLogScalarFieldEnum | ErrorLogScalarFieldEnum[]
  }

  /**
   * ErrorLog create
   */
  export type ErrorLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ErrorLog.
     */
    data: XOR<ErrorLogCreateInput, ErrorLogUncheckedCreateInput>
  }

  /**
   * ErrorLog createMany
   */
  export type ErrorLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ErrorLogs.
     */
    data: ErrorLogCreateManyInput | ErrorLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ErrorLog createManyAndReturn
   */
  export type ErrorLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * The data used to create many ErrorLogs.
     */
    data: ErrorLogCreateManyInput | ErrorLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ErrorLog update
   */
  export type ErrorLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ErrorLog.
     */
    data: XOR<ErrorLogUpdateInput, ErrorLogUncheckedUpdateInput>
    /**
     * Choose, which ErrorLog to update.
     */
    where: ErrorLogWhereUniqueInput
  }

  /**
   * ErrorLog updateMany
   */
  export type ErrorLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ErrorLogs.
     */
    data: XOR<ErrorLogUpdateManyMutationInput, ErrorLogUncheckedUpdateManyInput>
    /**
     * Filter which ErrorLogs to update
     */
    where?: ErrorLogWhereInput
    /**
     * Limit how many ErrorLogs to update.
     */
    limit?: number
  }

  /**
   * ErrorLog updateManyAndReturn
   */
  export type ErrorLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * The data used to update ErrorLogs.
     */
    data: XOR<ErrorLogUpdateManyMutationInput, ErrorLogUncheckedUpdateManyInput>
    /**
     * Filter which ErrorLogs to update
     */
    where?: ErrorLogWhereInput
    /**
     * Limit how many ErrorLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ErrorLog upsert
   */
  export type ErrorLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ErrorLog to update in case it exists.
     */
    where: ErrorLogWhereUniqueInput
    /**
     * In case the ErrorLog found by the `where` argument doesn't exist, create a new ErrorLog with this data.
     */
    create: XOR<ErrorLogCreateInput, ErrorLogUncheckedCreateInput>
    /**
     * In case the ErrorLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ErrorLogUpdateInput, ErrorLogUncheckedUpdateInput>
  }

  /**
   * ErrorLog delete
   */
  export type ErrorLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogInclude<ExtArgs> | null
    /**
     * Filter which ErrorLog to delete.
     */
    where: ErrorLogWhereUniqueInput
  }

  /**
   * ErrorLog deleteMany
   */
  export type ErrorLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ErrorLogs to delete
     */
    where?: ErrorLogWhereInput
    /**
     * Limit how many ErrorLogs to delete.
     */
    limit?: number
  }

  /**
   * ErrorLog without action
   */
  export type ErrorLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ErrorLog
     */
    select?: ErrorLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ErrorLog
     */
    omit?: ErrorLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ErrorLogInclude<ExtArgs> | null
  }


  /**
   * Model ViewLog
   */

  export type AggregateViewLog = {
    _count: ViewLogCountAggregateOutputType | null
    _avg: ViewLogAvgAggregateOutputType | null
    _sum: ViewLogSumAggregateOutputType | null
    _min: ViewLogMinAggregateOutputType | null
    _max: ViewLogMaxAggregateOutputType | null
  }

  export type ViewLogAvgAggregateOutputType = {
    duration: number | null
    expectedDuration: number | null
  }

  export type ViewLogSumAggregateOutputType = {
    duration: number | null
    expectedDuration: number | null
  }

  export type ViewLogMinAggregateOutputType = {
    id: string | null
    displayId: string | null
    playlistId: string | null
    contentId: string | null
    viewedAt: Date | null
    duration: number | null
    expectedDuration: number | null
    completed: boolean | null
    skipped: boolean | null
  }

  export type ViewLogMaxAggregateOutputType = {
    id: string | null
    displayId: string | null
    playlistId: string | null
    contentId: string | null
    viewedAt: Date | null
    duration: number | null
    expectedDuration: number | null
    completed: boolean | null
    skipped: boolean | null
  }

  export type ViewLogCountAggregateOutputType = {
    id: number
    displayId: number
    playlistId: number
    contentId: number
    viewedAt: number
    duration: number
    expectedDuration: number
    completed: number
    skipped: number
    _all: number
  }


  export type ViewLogAvgAggregateInputType = {
    duration?: true
    expectedDuration?: true
  }

  export type ViewLogSumAggregateInputType = {
    duration?: true
    expectedDuration?: true
  }

  export type ViewLogMinAggregateInputType = {
    id?: true
    displayId?: true
    playlistId?: true
    contentId?: true
    viewedAt?: true
    duration?: true
    expectedDuration?: true
    completed?: true
    skipped?: true
  }

  export type ViewLogMaxAggregateInputType = {
    id?: true
    displayId?: true
    playlistId?: true
    contentId?: true
    viewedAt?: true
    duration?: true
    expectedDuration?: true
    completed?: true
    skipped?: true
  }

  export type ViewLogCountAggregateInputType = {
    id?: true
    displayId?: true
    playlistId?: true
    contentId?: true
    viewedAt?: true
    duration?: true
    expectedDuration?: true
    completed?: true
    skipped?: true
    _all?: true
  }

  export type ViewLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewLog to aggregate.
     */
    where?: ViewLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewLogs to fetch.
     */
    orderBy?: ViewLogOrderByWithRelationInput | ViewLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ViewLogs
    **/
    _count?: true | ViewLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViewLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViewLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewLogMaxAggregateInputType
  }

  export type GetViewLogAggregateType<T extends ViewLogAggregateArgs> = {
        [P in keyof T & keyof AggregateViewLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViewLog[P]>
      : GetScalarType<T[P], AggregateViewLog[P]>
  }




  export type ViewLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewLogWhereInput
    orderBy?: ViewLogOrderByWithAggregationInput | ViewLogOrderByWithAggregationInput[]
    by: ViewLogScalarFieldEnum[] | ViewLogScalarFieldEnum
    having?: ViewLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewLogCountAggregateInputType | true
    _avg?: ViewLogAvgAggregateInputType
    _sum?: ViewLogSumAggregateInputType
    _min?: ViewLogMinAggregateInputType
    _max?: ViewLogMaxAggregateInputType
  }

  export type ViewLogGroupByOutputType = {
    id: string
    displayId: string
    playlistId: string
    contentId: string
    viewedAt: Date
    duration: number
    expectedDuration: number
    completed: boolean
    skipped: boolean
    _count: ViewLogCountAggregateOutputType | null
    _avg: ViewLogAvgAggregateOutputType | null
    _sum: ViewLogSumAggregateOutputType | null
    _min: ViewLogMinAggregateOutputType | null
    _max: ViewLogMaxAggregateOutputType | null
  }

  type GetViewLogGroupByPayload<T extends ViewLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewLogGroupByOutputType[P]>
            : GetScalarType<T[P], ViewLogGroupByOutputType[P]>
        }
      >
    >


  export type ViewLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayId?: boolean
    playlistId?: boolean
    contentId?: boolean
    viewedAt?: boolean
    duration?: boolean
    expectedDuration?: boolean
    completed?: boolean
    skipped?: boolean
    content?: boolean | ContentDefaultArgs<ExtArgs>
    display?: boolean | DisplayDefaultArgs<ExtArgs>
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewLog"]>

  export type ViewLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayId?: boolean
    playlistId?: boolean
    contentId?: boolean
    viewedAt?: boolean
    duration?: boolean
    expectedDuration?: boolean
    completed?: boolean
    skipped?: boolean
    content?: boolean | ContentDefaultArgs<ExtArgs>
    display?: boolean | DisplayDefaultArgs<ExtArgs>
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewLog"]>

  export type ViewLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    displayId?: boolean
    playlistId?: boolean
    contentId?: boolean
    viewedAt?: boolean
    duration?: boolean
    expectedDuration?: boolean
    completed?: boolean
    skipped?: boolean
    content?: boolean | ContentDefaultArgs<ExtArgs>
    display?: boolean | DisplayDefaultArgs<ExtArgs>
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewLog"]>

  export type ViewLogSelectScalar = {
    id?: boolean
    displayId?: boolean
    playlistId?: boolean
    contentId?: boolean
    viewedAt?: boolean
    duration?: boolean
    expectedDuration?: boolean
    completed?: boolean
    skipped?: boolean
  }

  export type ViewLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "displayId" | "playlistId" | "contentId" | "viewedAt" | "duration" | "expectedDuration" | "completed" | "skipped", ExtArgs["result"]["viewLog"]>
  export type ViewLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ContentDefaultArgs<ExtArgs>
    display?: boolean | DisplayDefaultArgs<ExtArgs>
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }
  export type ViewLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ContentDefaultArgs<ExtArgs>
    display?: boolean | DisplayDefaultArgs<ExtArgs>
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }
  export type ViewLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | ContentDefaultArgs<ExtArgs>
    display?: boolean | DisplayDefaultArgs<ExtArgs>
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
  }

  export type $ViewLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ViewLog"
    objects: {
      content: Prisma.$ContentPayload<ExtArgs>
      display: Prisma.$DisplayPayload<ExtArgs>
      playlist: Prisma.$PlaylistPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      displayId: string
      playlistId: string
      contentId: string
      viewedAt: Date
      duration: number
      expectedDuration: number
      completed: boolean
      skipped: boolean
    }, ExtArgs["result"]["viewLog"]>
    composites: {}
  }

  type ViewLogGetPayload<S extends boolean | null | undefined | ViewLogDefaultArgs> = $Result.GetResult<Prisma.$ViewLogPayload, S>

  type ViewLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewLogCountAggregateInputType | true
    }

  export interface ViewLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ViewLog'], meta: { name: 'ViewLog' } }
    /**
     * Find zero or one ViewLog that matches the filter.
     * @param {ViewLogFindUniqueArgs} args - Arguments to find a ViewLog
     * @example
     * // Get one ViewLog
     * const viewLog = await prisma.viewLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewLogFindUniqueArgs>(args: SelectSubset<T, ViewLogFindUniqueArgs<ExtArgs>>): Prisma__ViewLogClient<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ViewLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewLogFindUniqueOrThrowArgs} args - Arguments to find a ViewLog
     * @example
     * // Get one ViewLog
     * const viewLog = await prisma.viewLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewLogClient<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewLogFindFirstArgs} args - Arguments to find a ViewLog
     * @example
     * // Get one ViewLog
     * const viewLog = await prisma.viewLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewLogFindFirstArgs>(args?: SelectSubset<T, ViewLogFindFirstArgs<ExtArgs>>): Prisma__ViewLogClient<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewLogFindFirstOrThrowArgs} args - Arguments to find a ViewLog
     * @example
     * // Get one ViewLog
     * const viewLog = await prisma.viewLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewLogClient<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ViewLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ViewLogs
     * const viewLogs = await prisma.viewLog.findMany()
     * 
     * // Get first 10 ViewLogs
     * const viewLogs = await prisma.viewLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewLogWithIdOnly = await prisma.viewLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewLogFindManyArgs>(args?: SelectSubset<T, ViewLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ViewLog.
     * @param {ViewLogCreateArgs} args - Arguments to create a ViewLog.
     * @example
     * // Create one ViewLog
     * const ViewLog = await prisma.viewLog.create({
     *   data: {
     *     // ... data to create a ViewLog
     *   }
     * })
     * 
     */
    create<T extends ViewLogCreateArgs>(args: SelectSubset<T, ViewLogCreateArgs<ExtArgs>>): Prisma__ViewLogClient<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ViewLogs.
     * @param {ViewLogCreateManyArgs} args - Arguments to create many ViewLogs.
     * @example
     * // Create many ViewLogs
     * const viewLog = await prisma.viewLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewLogCreateManyArgs>(args?: SelectSubset<T, ViewLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ViewLogs and returns the data saved in the database.
     * @param {ViewLogCreateManyAndReturnArgs} args - Arguments to create many ViewLogs.
     * @example
     * // Create many ViewLogs
     * const viewLog = await prisma.viewLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ViewLogs and only return the `id`
     * const viewLogWithIdOnly = await prisma.viewLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViewLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ViewLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ViewLog.
     * @param {ViewLogDeleteArgs} args - Arguments to delete one ViewLog.
     * @example
     * // Delete one ViewLog
     * const ViewLog = await prisma.viewLog.delete({
     *   where: {
     *     // ... filter to delete one ViewLog
     *   }
     * })
     * 
     */
    delete<T extends ViewLogDeleteArgs>(args: SelectSubset<T, ViewLogDeleteArgs<ExtArgs>>): Prisma__ViewLogClient<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ViewLog.
     * @param {ViewLogUpdateArgs} args - Arguments to update one ViewLog.
     * @example
     * // Update one ViewLog
     * const viewLog = await prisma.viewLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewLogUpdateArgs>(args: SelectSubset<T, ViewLogUpdateArgs<ExtArgs>>): Prisma__ViewLogClient<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ViewLogs.
     * @param {ViewLogDeleteManyArgs} args - Arguments to filter ViewLogs to delete.
     * @example
     * // Delete a few ViewLogs
     * const { count } = await prisma.viewLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewLogDeleteManyArgs>(args?: SelectSubset<T, ViewLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ViewLogs
     * const viewLog = await prisma.viewLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewLogUpdateManyArgs>(args: SelectSubset<T, ViewLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewLogs and returns the data updated in the database.
     * @param {ViewLogUpdateManyAndReturnArgs} args - Arguments to update many ViewLogs.
     * @example
     * // Update many ViewLogs
     * const viewLog = await prisma.viewLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ViewLogs and only return the `id`
     * const viewLogWithIdOnly = await prisma.viewLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ViewLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ViewLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ViewLog.
     * @param {ViewLogUpsertArgs} args - Arguments to update or create a ViewLog.
     * @example
     * // Update or create a ViewLog
     * const viewLog = await prisma.viewLog.upsert({
     *   create: {
     *     // ... data to create a ViewLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ViewLog we want to update
     *   }
     * })
     */
    upsert<T extends ViewLogUpsertArgs>(args: SelectSubset<T, ViewLogUpsertArgs<ExtArgs>>): Prisma__ViewLogClient<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ViewLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewLogCountArgs} args - Arguments to filter ViewLogs to count.
     * @example
     * // Count the number of ViewLogs
     * const count = await prisma.viewLog.count({
     *   where: {
     *     // ... the filter for the ViewLogs we want to count
     *   }
     * })
    **/
    count<T extends ViewLogCountArgs>(
      args?: Subset<T, ViewLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ViewLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViewLogAggregateArgs>(args: Subset<T, ViewLogAggregateArgs>): Prisma.PrismaPromise<GetViewLogAggregateType<T>>

    /**
     * Group by ViewLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ViewLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewLogGroupByArgs['orderBy'] }
        : { orderBy?: ViewLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ViewLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ViewLog model
   */
  readonly fields: ViewLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ViewLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    content<T extends ContentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContentDefaultArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    display<T extends DisplayDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DisplayDefaultArgs<ExtArgs>>): Prisma__DisplayClient<$Result.GetResult<Prisma.$DisplayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    playlist<T extends PlaylistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaylistDefaultArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ViewLog model
   */
  interface ViewLogFieldRefs {
    readonly id: FieldRef<"ViewLog", 'String'>
    readonly displayId: FieldRef<"ViewLog", 'String'>
    readonly playlistId: FieldRef<"ViewLog", 'String'>
    readonly contentId: FieldRef<"ViewLog", 'String'>
    readonly viewedAt: FieldRef<"ViewLog", 'DateTime'>
    readonly duration: FieldRef<"ViewLog", 'Int'>
    readonly expectedDuration: FieldRef<"ViewLog", 'Int'>
    readonly completed: FieldRef<"ViewLog", 'Boolean'>
    readonly skipped: FieldRef<"ViewLog", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ViewLog findUnique
   */
  export type ViewLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
    /**
     * Filter, which ViewLog to fetch.
     */
    where: ViewLogWhereUniqueInput
  }

  /**
   * ViewLog findUniqueOrThrow
   */
  export type ViewLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
    /**
     * Filter, which ViewLog to fetch.
     */
    where: ViewLogWhereUniqueInput
  }

  /**
   * ViewLog findFirst
   */
  export type ViewLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
    /**
     * Filter, which ViewLog to fetch.
     */
    where?: ViewLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewLogs to fetch.
     */
    orderBy?: ViewLogOrderByWithRelationInput | ViewLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewLogs.
     */
    cursor?: ViewLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewLogs.
     */
    distinct?: ViewLogScalarFieldEnum | ViewLogScalarFieldEnum[]
  }

  /**
   * ViewLog findFirstOrThrow
   */
  export type ViewLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
    /**
     * Filter, which ViewLog to fetch.
     */
    where?: ViewLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewLogs to fetch.
     */
    orderBy?: ViewLogOrderByWithRelationInput | ViewLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewLogs.
     */
    cursor?: ViewLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewLogs.
     */
    distinct?: ViewLogScalarFieldEnum | ViewLogScalarFieldEnum[]
  }

  /**
   * ViewLog findMany
   */
  export type ViewLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
    /**
     * Filter, which ViewLogs to fetch.
     */
    where?: ViewLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewLogs to fetch.
     */
    orderBy?: ViewLogOrderByWithRelationInput | ViewLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ViewLogs.
     */
    cursor?: ViewLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewLogs.
     */
    skip?: number
    distinct?: ViewLogScalarFieldEnum | ViewLogScalarFieldEnum[]
  }

  /**
   * ViewLog create
   */
  export type ViewLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ViewLog.
     */
    data: XOR<ViewLogCreateInput, ViewLogUncheckedCreateInput>
  }

  /**
   * ViewLog createMany
   */
  export type ViewLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ViewLogs.
     */
    data: ViewLogCreateManyInput | ViewLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ViewLog createManyAndReturn
   */
  export type ViewLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * The data used to create many ViewLogs.
     */
    data: ViewLogCreateManyInput | ViewLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ViewLog update
   */
  export type ViewLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ViewLog.
     */
    data: XOR<ViewLogUpdateInput, ViewLogUncheckedUpdateInput>
    /**
     * Choose, which ViewLog to update.
     */
    where: ViewLogWhereUniqueInput
  }

  /**
   * ViewLog updateMany
   */
  export type ViewLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ViewLogs.
     */
    data: XOR<ViewLogUpdateManyMutationInput, ViewLogUncheckedUpdateManyInput>
    /**
     * Filter which ViewLogs to update
     */
    where?: ViewLogWhereInput
    /**
     * Limit how many ViewLogs to update.
     */
    limit?: number
  }

  /**
   * ViewLog updateManyAndReturn
   */
  export type ViewLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * The data used to update ViewLogs.
     */
    data: XOR<ViewLogUpdateManyMutationInput, ViewLogUncheckedUpdateManyInput>
    /**
     * Filter which ViewLogs to update
     */
    where?: ViewLogWhereInput
    /**
     * Limit how many ViewLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ViewLog upsert
   */
  export type ViewLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ViewLog to update in case it exists.
     */
    where: ViewLogWhereUniqueInput
    /**
     * In case the ViewLog found by the `where` argument doesn't exist, create a new ViewLog with this data.
     */
    create: XOR<ViewLogCreateInput, ViewLogUncheckedCreateInput>
    /**
     * In case the ViewLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewLogUpdateInput, ViewLogUncheckedUpdateInput>
  }

  /**
   * ViewLog delete
   */
  export type ViewLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
    /**
     * Filter which ViewLog to delete.
     */
    where: ViewLogWhereUniqueInput
  }

  /**
   * ViewLog deleteMany
   */
  export type ViewLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewLogs to delete
     */
    where?: ViewLogWhereInput
    /**
     * Limit how many ViewLogs to delete.
     */
    limit?: number
  }

  /**
   * ViewLog without action
   */
  export type ViewLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    playlists?: boolean | Tag$playlistsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlists?: boolean | Tag$playlistsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      playlists: Prisma.$PlaylistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlists<T extends Tag$playlistsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$playlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.playlists
   */
  export type Tag$playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertMinAggregateOutputType = {
    id: string | null
    type: $Enums.AlertType | null
    category: $Enums.AlertCategory | null
    title: string | null
    message: string | null
    displayId: string | null
    userId: string | null
    resolved: boolean | null
    resolvedAt: Date | null
    resolvedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertMaxAggregateOutputType = {
    id: string | null
    type: $Enums.AlertType | null
    category: $Enums.AlertCategory | null
    title: string | null
    message: string | null
    displayId: string | null
    userId: string | null
    resolved: boolean | null
    resolvedAt: Date | null
    resolvedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertCountAggregateOutputType = {
    id: number
    type: number
    category: number
    title: number
    message: number
    metadata: number
    displayId: number
    userId: number
    resolved: number
    resolvedAt: number
    resolvedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlertMinAggregateInputType = {
    id?: true
    type?: true
    category?: true
    title?: true
    message?: true
    displayId?: true
    userId?: true
    resolved?: true
    resolvedAt?: true
    resolvedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertMaxAggregateInputType = {
    id?: true
    type?: true
    category?: true
    title?: true
    message?: true
    displayId?: true
    userId?: true
    resolved?: true
    resolvedAt?: true
    resolvedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertCountAggregateInputType = {
    id?: true
    type?: true
    category?: true
    title?: true
    message?: true
    metadata?: true
    displayId?: true
    userId?: true
    resolved?: true
    resolvedAt?: true
    resolvedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alert to aggregate.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type AlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithAggregationInput | AlertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: AlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    id: string
    type: $Enums.AlertType
    category: $Enums.AlertCategory
    title: string
    message: string
    metadata: JsonValue | null
    displayId: string | null
    userId: string | null
    resolved: boolean
    resolvedAt: Date | null
    resolvedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: AlertCountAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends AlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type AlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    category?: boolean
    title?: boolean
    message?: boolean
    metadata?: boolean
    displayId?: boolean
    userId?: boolean
    resolved?: boolean
    resolvedAt?: boolean
    resolvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    display?: boolean | Alert$displayArgs<ExtArgs>
    user?: boolean | Alert$userArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    category?: boolean
    title?: boolean
    message?: boolean
    metadata?: boolean
    displayId?: boolean
    userId?: boolean
    resolved?: boolean
    resolvedAt?: boolean
    resolvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    display?: boolean | Alert$displayArgs<ExtArgs>
    user?: boolean | Alert$userArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    category?: boolean
    title?: boolean
    message?: boolean
    metadata?: boolean
    displayId?: boolean
    userId?: boolean
    resolved?: boolean
    resolvedAt?: boolean
    resolvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    display?: boolean | Alert$displayArgs<ExtArgs>
    user?: boolean | Alert$userArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectScalar = {
    id?: boolean
    type?: boolean
    category?: boolean
    title?: boolean
    message?: boolean
    metadata?: boolean
    displayId?: boolean
    userId?: boolean
    resolved?: boolean
    resolvedAt?: boolean
    resolvedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "category" | "title" | "message" | "metadata" | "displayId" | "userId" | "resolved" | "resolvedAt" | "resolvedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["alert"]>
  export type AlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    display?: boolean | Alert$displayArgs<ExtArgs>
    user?: boolean | Alert$userArgs<ExtArgs>
  }
  export type AlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    display?: boolean | Alert$displayArgs<ExtArgs>
    user?: boolean | Alert$userArgs<ExtArgs>
  }
  export type AlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    display?: boolean | Alert$displayArgs<ExtArgs>
    user?: boolean | Alert$userArgs<ExtArgs>
  }

  export type $AlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alert"
    objects: {
      display: Prisma.$DisplayPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.AlertType
      category: $Enums.AlertCategory
      title: string
      message: string
      metadata: Prisma.JsonValue | null
      displayId: string | null
      userId: string | null
      resolved: boolean
      resolvedAt: Date | null
      resolvedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type AlertGetPayload<S extends boolean | null | undefined | AlertDefaultArgs> = $Result.GetResult<Prisma.$AlertPayload, S>

  type AlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface AlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alert'], meta: { name: 'Alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {AlertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertFindUniqueArgs>(args: SelectSubset<T, AlertFindUniqueArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertFindFirstArgs>(args?: SelectSubset<T, AlertFindFirstArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertWithIdOnly = await prisma.alert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertFindManyArgs>(args?: SelectSubset<T, AlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alert.
     * @param {AlertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends AlertCreateArgs>(args: SelectSubset<T, AlertCreateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alerts.
     * @param {AlertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertCreateManyArgs>(args?: SelectSubset<T, AlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alerts and returns the data saved in the database.
     * @param {AlertCreateManyAndReturnArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alert.
     * @param {AlertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends AlertDeleteArgs>(args: SelectSubset<T, AlertDeleteArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alert.
     * @param {AlertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertUpdateArgs>(args: SelectSubset<T, AlertUpdateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alerts.
     * @param {AlertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertDeleteManyArgs>(args?: SelectSubset<T, AlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertUpdateManyArgs>(args: SelectSubset<T, AlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts and returns the data updated in the database.
     * @param {AlertUpdateManyAndReturnArgs} args - Arguments to update many Alerts.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlertUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alert.
     * @param {AlertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends AlertUpsertArgs>(args: SelectSubset<T, AlertUpsertArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertCountArgs>(
      args?: Subset<T, AlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertGroupByArgs['orderBy'] }
        : { orderBy?: AlertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alert model
   */
  readonly fields: AlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    display<T extends Alert$displayArgs<ExtArgs> = {}>(args?: Subset<T, Alert$displayArgs<ExtArgs>>): Prisma__DisplayClient<$Result.GetResult<Prisma.$DisplayPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends Alert$userArgs<ExtArgs> = {}>(args?: Subset<T, Alert$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Alert model
   */
  interface AlertFieldRefs {
    readonly id: FieldRef<"Alert", 'String'>
    readonly type: FieldRef<"Alert", 'AlertType'>
    readonly category: FieldRef<"Alert", 'AlertCategory'>
    readonly title: FieldRef<"Alert", 'String'>
    readonly message: FieldRef<"Alert", 'String'>
    readonly metadata: FieldRef<"Alert", 'Json'>
    readonly displayId: FieldRef<"Alert", 'String'>
    readonly userId: FieldRef<"Alert", 'String'>
    readonly resolved: FieldRef<"Alert", 'Boolean'>
    readonly resolvedAt: FieldRef<"Alert", 'DateTime'>
    readonly resolvedBy: FieldRef<"Alert", 'String'>
    readonly createdAt: FieldRef<"Alert", 'DateTime'>
    readonly updatedAt: FieldRef<"Alert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alert findUnique
   */
  export type AlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findUniqueOrThrow
   */
  export type AlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findFirst
   */
  export type AlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findFirstOrThrow
   */
  export type AlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findMany
   */
  export type AlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert create
   */
  export type AlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to create a Alert.
     */
    data: XOR<AlertCreateInput, AlertUncheckedCreateInput>
  }

  /**
   * Alert createMany
   */
  export type AlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alert createManyAndReturn
   */
  export type AlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert update
   */
  export type AlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to update a Alert.
     */
    data: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
    /**
     * Choose, which Alert to update.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert updateMany
   */
  export type AlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
  }

  /**
   * Alert updateManyAndReturn
   */
  export type AlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert upsert
   */
  export type AlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The filter to search for the Alert to update in case it exists.
     */
    where: AlertWhereUniqueInput
    /**
     * In case the Alert found by the `where` argument doesn't exist, create a new Alert with this data.
     */
    create: XOR<AlertCreateInput, AlertUncheckedCreateInput>
    /**
     * In case the Alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
  }

  /**
   * Alert delete
   */
  export type AlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter which Alert to delete.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert deleteMany
   */
  export type AlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to delete.
     */
    limit?: number
  }

  /**
   * Alert.display
   */
  export type Alert$displayArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Display
     */
    select?: DisplaySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Display
     */
    omit?: DisplayOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisplayInclude<ExtArgs> | null
    where?: DisplayWhereInput
  }

  /**
   * Alert.user
   */
  export type Alert$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Alert without action
   */
  export type AlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    status: 'status',
    permissions: 'permissions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLogin: 'lastLogin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ContentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    filePath: 'filePath',
    metadata: 'metadata',
    backgroundColor: 'backgroundColor',
    cropSettings: 'cropSettings',
    fileSize: 'fileSize',
    mimeType: 'mimeType',
    originalName: 'originalName',
    fileHash: 'fileHash',
    processingStatus: 'processingStatus',
    processingError: 'processingError',
    storageLocation: 'storageLocation',
    uploadedBy: 'uploadedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    createdBy: 'createdBy',
    duration: 'duration',
    fileName: 'fileName',
    description: 'description'
  };

  export type ContentScalarFieldEnum = (typeof ContentScalarFieldEnum)[keyof typeof ContentScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdBy: 'createdBy',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    description: 'description'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const PlaylistItemScalarFieldEnum: {
    id: 'id',
    playlistId: 'playlistId',
    contentId: 'contentId',
    duration: 'duration',
    order: 'order',
    transitionType: 'transitionType',
    transitionDuration: 'transitionDuration',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlaylistItemScalarFieldEnum = (typeof PlaylistItemScalarFieldEnum)[keyof typeof PlaylistItemScalarFieldEnum]


  export const DisplayScalarFieldEnum: {
    id: 'id',
    name: 'name',
    urlSlug: 'urlSlug',
    playlistId: 'playlistId',
    resolution: 'resolution',
    orientation: 'orientation',
    lastSeen: 'lastSeen',
    isOnline: 'isOnline',
    location: 'location',
    clockSettings: 'clockSettings',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DisplayScalarFieldEnum = (typeof DisplayScalarFieldEnum)[keyof typeof DisplayScalarFieldEnum]


  export const FileThumbnailScalarFieldEnum: {
    id: 'id',
    contentId: 'contentId',
    size: 'size',
    width: 'width',
    height: 'height',
    filePath: 'filePath',
    fileSize: 'fileSize',
    format: 'format',
    createdAt: 'createdAt'
  };

  export type FileThumbnailScalarFieldEnum = (typeof FileThumbnailScalarFieldEnum)[keyof typeof FileThumbnailScalarFieldEnum]


  export const FileVersionScalarFieldEnum: {
    id: 'id',
    contentId: 'contentId',
    version: 'version',
    filePath: 'filePath',
    fileSize: 'fileSize',
    fileHash: 'fileHash',
    changes: 'changes',
    uploadedById: 'uploadedById',
    createdAt: 'createdAt'
  };

  export type FileVersionScalarFieldEnum = (typeof FileVersionScalarFieldEnum)[keyof typeof FileVersionScalarFieldEnum]


  export const ErrorLogScalarFieldEnum: {
    id: 'id',
    displayId: 'displayId',
    errorType: 'errorType',
    message: 'message',
    stack: 'stack',
    metadata: 'metadata',
    userAgent: 'userAgent',
    url: 'url',
    timestamp: 'timestamp',
    createdAt: 'createdAt'
  };

  export type ErrorLogScalarFieldEnum = (typeof ErrorLogScalarFieldEnum)[keyof typeof ErrorLogScalarFieldEnum]


  export const ViewLogScalarFieldEnum: {
    id: 'id',
    displayId: 'displayId',
    playlistId: 'playlistId',
    contentId: 'contentId',
    viewedAt: 'viewedAt',
    duration: 'duration',
    expectedDuration: 'expectedDuration',
    completed: 'completed',
    skipped: 'skipped'
  };

  export type ViewLogScalarFieldEnum = (typeof ViewLogScalarFieldEnum)[keyof typeof ViewLogScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const AlertScalarFieldEnum: {
    id: 'id',
    type: 'type',
    category: 'category',
    title: 'title',
    message: 'message',
    metadata: 'metadata',
    displayId: 'displayId',
    userId: 'userId',
    resolved: 'resolved',
    resolvedAt: 'resolvedAt',
    resolvedBy: 'resolvedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'Permission[]'
   */
  export type ListEnumPermissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Permission[]'>
    


  /**
   * Reference to a field of type 'Permission'
   */
  export type EnumPermissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Permission'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ContentType'
   */
  export type EnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType'>
    


  /**
   * Reference to a field of type 'ContentType[]'
   */
  export type ListEnumContentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ContentType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'ProcessingStatus'
   */
  export type EnumProcessingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProcessingStatus'>
    


  /**
   * Reference to a field of type 'ProcessingStatus[]'
   */
  export type ListEnumProcessingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProcessingStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TransitionType'
   */
  export type EnumTransitionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransitionType'>
    


  /**
   * Reference to a field of type 'TransitionType[]'
   */
  export type ListEnumTransitionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransitionType[]'>
    


  /**
   * Reference to a field of type 'DisplayOrientation'
   */
  export type EnumDisplayOrientationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisplayOrientation'>
    


  /**
   * Reference to a field of type 'DisplayOrientation[]'
   */
  export type ListEnumDisplayOrientationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisplayOrientation[]'>
    


  /**
   * Reference to a field of type 'AlertType'
   */
  export type EnumAlertTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertType'>
    


  /**
   * Reference to a field of type 'AlertType[]'
   */
  export type ListEnumAlertTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertType[]'>
    


  /**
   * Reference to a field of type 'AlertCategory'
   */
  export type EnumAlertCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertCategory'>
    


  /**
   * Reference to a field of type 'AlertCategory[]'
   */
  export type ListEnumAlertCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertCategory[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    permissions?: EnumPermissionNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    content?: ContentListRelationFilter
    fileVersions?: FileVersionListRelationFilter
    playlists?: PlaylistListRelationFilter
    sharedPlaylists?: PlaylistListRelationFilter
    alerts?: AlertListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    status?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    content?: ContentOrderByRelationAggregateInput
    fileVersions?: FileVersionOrderByRelationAggregateInput
    playlists?: PlaylistOrderByRelationAggregateInput
    sharedPlaylists?: PlaylistOrderByRelationAggregateInput
    alerts?: AlertOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    permissions?: EnumPermissionNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    content?: ContentListRelationFilter
    fileVersions?: FileVersionListRelationFilter
    playlists?: PlaylistListRelationFilter
    sharedPlaylists?: PlaylistListRelationFilter
    alerts?: AlertListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    status?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    permissions?: EnumPermissionNullableListFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type ContentWhereInput = {
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    id?: StringFilter<"Content"> | string
    name?: StringFilter<"Content"> | string
    type?: EnumContentTypeFilter<"Content"> | $Enums.ContentType
    filePath?: StringNullableFilter<"Content"> | string | null
    metadata?: JsonNullableFilter<"Content">
    backgroundColor?: StringNullableFilter<"Content"> | string | null
    cropSettings?: JsonNullableFilter<"Content">
    fileSize?: BigIntNullableFilter<"Content"> | bigint | number | null
    mimeType?: StringNullableFilter<"Content"> | string | null
    originalName?: StringNullableFilter<"Content"> | string | null
    fileHash?: StringNullableFilter<"Content"> | string | null
    processingStatus?: EnumProcessingStatusFilter<"Content"> | $Enums.ProcessingStatus
    processingError?: StringNullableFilter<"Content"> | string | null
    storageLocation?: StringNullableFilter<"Content"> | string | null
    uploadedBy?: StringFilter<"Content"> | string
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Content"> | Date | string | null
    createdBy?: StringNullableFilter<"Content"> | string | null
    duration?: IntNullableFilter<"Content"> | number | null
    fileName?: StringNullableFilter<"Content"> | string | null
    description?: StringNullableFilter<"Content"> | string | null
    uploadedByUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    thumbnails?: FileThumbnailListRelationFilter
    versions?: FileVersionListRelationFilter
    playlistItems?: PlaylistItemListRelationFilter
    viewLogs?: ViewLogListRelationFilter
  }

  export type ContentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    filePath?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    backgroundColor?: SortOrderInput | SortOrder
    cropSettings?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    originalName?: SortOrderInput | SortOrder
    fileHash?: SortOrderInput | SortOrder
    processingStatus?: SortOrder
    processingError?: SortOrderInput | SortOrder
    storageLocation?: SortOrderInput | SortOrder
    uploadedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    fileName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    uploadedByUser?: UserOrderByWithRelationInput
    thumbnails?: FileThumbnailOrderByRelationAggregateInput
    versions?: FileVersionOrderByRelationAggregateInput
    playlistItems?: PlaylistItemOrderByRelationAggregateInput
    viewLogs?: ViewLogOrderByRelationAggregateInput
  }

  export type ContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    name?: StringFilter<"Content"> | string
    type?: EnumContentTypeFilter<"Content"> | $Enums.ContentType
    filePath?: StringNullableFilter<"Content"> | string | null
    metadata?: JsonNullableFilter<"Content">
    backgroundColor?: StringNullableFilter<"Content"> | string | null
    cropSettings?: JsonNullableFilter<"Content">
    fileSize?: BigIntNullableFilter<"Content"> | bigint | number | null
    mimeType?: StringNullableFilter<"Content"> | string | null
    originalName?: StringNullableFilter<"Content"> | string | null
    fileHash?: StringNullableFilter<"Content"> | string | null
    processingStatus?: EnumProcessingStatusFilter<"Content"> | $Enums.ProcessingStatus
    processingError?: StringNullableFilter<"Content"> | string | null
    storageLocation?: StringNullableFilter<"Content"> | string | null
    uploadedBy?: StringFilter<"Content"> | string
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Content"> | Date | string | null
    createdBy?: StringNullableFilter<"Content"> | string | null
    duration?: IntNullableFilter<"Content"> | number | null
    fileName?: StringNullableFilter<"Content"> | string | null
    description?: StringNullableFilter<"Content"> | string | null
    uploadedByUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    thumbnails?: FileThumbnailListRelationFilter
    versions?: FileVersionListRelationFilter
    playlistItems?: PlaylistItemListRelationFilter
    viewLogs?: ViewLogListRelationFilter
  }, "id">

  export type ContentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    filePath?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    backgroundColor?: SortOrderInput | SortOrder
    cropSettings?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    mimeType?: SortOrderInput | SortOrder
    originalName?: SortOrderInput | SortOrder
    fileHash?: SortOrderInput | SortOrder
    processingStatus?: SortOrder
    processingError?: SortOrderInput | SortOrder
    storageLocation?: SortOrderInput | SortOrder
    uploadedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    fileName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: ContentCountOrderByAggregateInput
    _avg?: ContentAvgOrderByAggregateInput
    _max?: ContentMaxOrderByAggregateInput
    _min?: ContentMinOrderByAggregateInput
    _sum?: ContentSumOrderByAggregateInput
  }

  export type ContentScalarWhereWithAggregatesInput = {
    AND?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    OR?: ContentScalarWhereWithAggregatesInput[]
    NOT?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Content"> | string
    name?: StringWithAggregatesFilter<"Content"> | string
    type?: EnumContentTypeWithAggregatesFilter<"Content"> | $Enums.ContentType
    filePath?: StringNullableWithAggregatesFilter<"Content"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Content">
    backgroundColor?: StringNullableWithAggregatesFilter<"Content"> | string | null
    cropSettings?: JsonNullableWithAggregatesFilter<"Content">
    fileSize?: BigIntNullableWithAggregatesFilter<"Content"> | bigint | number | null
    mimeType?: StringNullableWithAggregatesFilter<"Content"> | string | null
    originalName?: StringNullableWithAggregatesFilter<"Content"> | string | null
    fileHash?: StringNullableWithAggregatesFilter<"Content"> | string | null
    processingStatus?: EnumProcessingStatusWithAggregatesFilter<"Content"> | $Enums.ProcessingStatus
    processingError?: StringNullableWithAggregatesFilter<"Content"> | string | null
    storageLocation?: StringNullableWithAggregatesFilter<"Content"> | string | null
    uploadedBy?: StringWithAggregatesFilter<"Content"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Content"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Content"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Content"> | Date | string | null
    createdBy?: StringNullableWithAggregatesFilter<"Content"> | string | null
    duration?: IntNullableWithAggregatesFilter<"Content"> | number | null
    fileName?: StringNullableWithAggregatesFilter<"Content"> | string | null
    description?: StringNullableWithAggregatesFilter<"Content"> | string | null
  }

  export type PlaylistWhereInput = {
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    id?: StringFilter<"Playlist"> | string
    name?: StringFilter<"Playlist"> | string
    createdBy?: StringFilter<"Playlist"> | string
    isActive?: BoolFilter<"Playlist"> | boolean
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    description?: StringNullableFilter<"Playlist"> | string | null
    displays?: DisplayListRelationFilter
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: PlaylistItemListRelationFilter
    viewLogs?: ViewLogListRelationFilter
    tags?: TagListRelationFilter
    sharedWith?: UserListRelationFilter
  }

  export type PlaylistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrderInput | SortOrder
    displays?: DisplayOrderByRelationAggregateInput
    creator?: UserOrderByWithRelationInput
    items?: PlaylistItemOrderByRelationAggregateInput
    viewLogs?: ViewLogOrderByRelationAggregateInput
    tags?: TagOrderByRelationAggregateInput
    sharedWith?: UserOrderByRelationAggregateInput
  }

  export type PlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    name?: StringFilter<"Playlist"> | string
    createdBy?: StringFilter<"Playlist"> | string
    isActive?: BoolFilter<"Playlist"> | boolean
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    description?: StringNullableFilter<"Playlist"> | string | null
    displays?: DisplayListRelationFilter
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: PlaylistItemListRelationFilter
    viewLogs?: ViewLogListRelationFilter
    tags?: TagListRelationFilter
    sharedWith?: UserListRelationFilter
  }, "id">

  export type PlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: PlaylistCountOrderByAggregateInput
    _max?: PlaylistMaxOrderByAggregateInput
    _min?: PlaylistMinOrderByAggregateInput
  }

  export type PlaylistScalarWhereWithAggregatesInput = {
    AND?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    OR?: PlaylistScalarWhereWithAggregatesInput[]
    NOT?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Playlist"> | string
    name?: StringWithAggregatesFilter<"Playlist"> | string
    createdBy?: StringWithAggregatesFilter<"Playlist"> | string
    isActive?: BoolWithAggregatesFilter<"Playlist"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
    description?: StringNullableWithAggregatesFilter<"Playlist"> | string | null
  }

  export type PlaylistItemWhereInput = {
    AND?: PlaylistItemWhereInput | PlaylistItemWhereInput[]
    OR?: PlaylistItemWhereInput[]
    NOT?: PlaylistItemWhereInput | PlaylistItemWhereInput[]
    id?: StringFilter<"PlaylistItem"> | string
    playlistId?: StringFilter<"PlaylistItem"> | string
    contentId?: StringFilter<"PlaylistItem"> | string
    duration?: IntFilter<"PlaylistItem"> | number
    order?: IntFilter<"PlaylistItem"> | number
    transitionType?: EnumTransitionTypeFilter<"PlaylistItem"> | $Enums.TransitionType
    transitionDuration?: IntNullableFilter<"PlaylistItem"> | number | null
    createdAt?: DateTimeFilter<"PlaylistItem"> | Date | string
    updatedAt?: DateTimeFilter<"PlaylistItem"> | Date | string
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
  }

  export type PlaylistItemOrderByWithRelationInput = {
    id?: SortOrder
    playlistId?: SortOrder
    contentId?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    transitionType?: SortOrder
    transitionDuration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: ContentOrderByWithRelationInput
    playlist?: PlaylistOrderByWithRelationInput
  }

  export type PlaylistItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    playlistId_order?: PlaylistItemPlaylistIdOrderCompoundUniqueInput
    AND?: PlaylistItemWhereInput | PlaylistItemWhereInput[]
    OR?: PlaylistItemWhereInput[]
    NOT?: PlaylistItemWhereInput | PlaylistItemWhereInput[]
    playlistId?: StringFilter<"PlaylistItem"> | string
    contentId?: StringFilter<"PlaylistItem"> | string
    duration?: IntFilter<"PlaylistItem"> | number
    order?: IntFilter<"PlaylistItem"> | number
    transitionType?: EnumTransitionTypeFilter<"PlaylistItem"> | $Enums.TransitionType
    transitionDuration?: IntNullableFilter<"PlaylistItem"> | number | null
    createdAt?: DateTimeFilter<"PlaylistItem"> | Date | string
    updatedAt?: DateTimeFilter<"PlaylistItem"> | Date | string
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
  }, "id" | "playlistId_order">

  export type PlaylistItemOrderByWithAggregationInput = {
    id?: SortOrder
    playlistId?: SortOrder
    contentId?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    transitionType?: SortOrder
    transitionDuration?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlaylistItemCountOrderByAggregateInput
    _avg?: PlaylistItemAvgOrderByAggregateInput
    _max?: PlaylistItemMaxOrderByAggregateInput
    _min?: PlaylistItemMinOrderByAggregateInput
    _sum?: PlaylistItemSumOrderByAggregateInput
  }

  export type PlaylistItemScalarWhereWithAggregatesInput = {
    AND?: PlaylistItemScalarWhereWithAggregatesInput | PlaylistItemScalarWhereWithAggregatesInput[]
    OR?: PlaylistItemScalarWhereWithAggregatesInput[]
    NOT?: PlaylistItemScalarWhereWithAggregatesInput | PlaylistItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlaylistItem"> | string
    playlistId?: StringWithAggregatesFilter<"PlaylistItem"> | string
    contentId?: StringWithAggregatesFilter<"PlaylistItem"> | string
    duration?: IntWithAggregatesFilter<"PlaylistItem"> | number
    order?: IntWithAggregatesFilter<"PlaylistItem"> | number
    transitionType?: EnumTransitionTypeWithAggregatesFilter<"PlaylistItem"> | $Enums.TransitionType
    transitionDuration?: IntNullableWithAggregatesFilter<"PlaylistItem"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"PlaylistItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlaylistItem"> | Date | string
  }

  export type DisplayWhereInput = {
    AND?: DisplayWhereInput | DisplayWhereInput[]
    OR?: DisplayWhereInput[]
    NOT?: DisplayWhereInput | DisplayWhereInput[]
    id?: StringFilter<"Display"> | string
    name?: StringFilter<"Display"> | string
    urlSlug?: StringFilter<"Display"> | string
    playlistId?: StringNullableFilter<"Display"> | string | null
    resolution?: StringFilter<"Display"> | string
    orientation?: EnumDisplayOrientationFilter<"Display"> | $Enums.DisplayOrientation
    lastSeen?: DateTimeNullableFilter<"Display"> | Date | string | null
    isOnline?: BoolFilter<"Display"> | boolean
    location?: StringNullableFilter<"Display"> | string | null
    clockSettings?: JsonFilter<"Display">
    createdAt?: DateTimeFilter<"Display"> | Date | string
    updatedAt?: DateTimeFilter<"Display"> | Date | string
    playlist?: XOR<PlaylistNullableScalarRelationFilter, PlaylistWhereInput> | null
    errorLogs?: ErrorLogListRelationFilter
    viewLogs?: ViewLogListRelationFilter
    alerts?: AlertListRelationFilter
  }

  export type DisplayOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    urlSlug?: SortOrder
    playlistId?: SortOrderInput | SortOrder
    resolution?: SortOrder
    orientation?: SortOrder
    lastSeen?: SortOrderInput | SortOrder
    isOnline?: SortOrder
    location?: SortOrderInput | SortOrder
    clockSettings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playlist?: PlaylistOrderByWithRelationInput
    errorLogs?: ErrorLogOrderByRelationAggregateInput
    viewLogs?: ViewLogOrderByRelationAggregateInput
    alerts?: AlertOrderByRelationAggregateInput
  }

  export type DisplayWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    urlSlug?: string
    AND?: DisplayWhereInput | DisplayWhereInput[]
    OR?: DisplayWhereInput[]
    NOT?: DisplayWhereInput | DisplayWhereInput[]
    name?: StringFilter<"Display"> | string
    playlistId?: StringNullableFilter<"Display"> | string | null
    resolution?: StringFilter<"Display"> | string
    orientation?: EnumDisplayOrientationFilter<"Display"> | $Enums.DisplayOrientation
    lastSeen?: DateTimeNullableFilter<"Display"> | Date | string | null
    isOnline?: BoolFilter<"Display"> | boolean
    location?: StringNullableFilter<"Display"> | string | null
    clockSettings?: JsonFilter<"Display">
    createdAt?: DateTimeFilter<"Display"> | Date | string
    updatedAt?: DateTimeFilter<"Display"> | Date | string
    playlist?: XOR<PlaylistNullableScalarRelationFilter, PlaylistWhereInput> | null
    errorLogs?: ErrorLogListRelationFilter
    viewLogs?: ViewLogListRelationFilter
    alerts?: AlertListRelationFilter
  }, "id" | "urlSlug">

  export type DisplayOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    urlSlug?: SortOrder
    playlistId?: SortOrderInput | SortOrder
    resolution?: SortOrder
    orientation?: SortOrder
    lastSeen?: SortOrderInput | SortOrder
    isOnline?: SortOrder
    location?: SortOrderInput | SortOrder
    clockSettings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DisplayCountOrderByAggregateInput
    _max?: DisplayMaxOrderByAggregateInput
    _min?: DisplayMinOrderByAggregateInput
  }

  export type DisplayScalarWhereWithAggregatesInput = {
    AND?: DisplayScalarWhereWithAggregatesInput | DisplayScalarWhereWithAggregatesInput[]
    OR?: DisplayScalarWhereWithAggregatesInput[]
    NOT?: DisplayScalarWhereWithAggregatesInput | DisplayScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Display"> | string
    name?: StringWithAggregatesFilter<"Display"> | string
    urlSlug?: StringWithAggregatesFilter<"Display"> | string
    playlistId?: StringNullableWithAggregatesFilter<"Display"> | string | null
    resolution?: StringWithAggregatesFilter<"Display"> | string
    orientation?: EnumDisplayOrientationWithAggregatesFilter<"Display"> | $Enums.DisplayOrientation
    lastSeen?: DateTimeNullableWithAggregatesFilter<"Display"> | Date | string | null
    isOnline?: BoolWithAggregatesFilter<"Display"> | boolean
    location?: StringNullableWithAggregatesFilter<"Display"> | string | null
    clockSettings?: JsonWithAggregatesFilter<"Display">
    createdAt?: DateTimeWithAggregatesFilter<"Display"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Display"> | Date | string
  }

  export type FileThumbnailWhereInput = {
    AND?: FileThumbnailWhereInput | FileThumbnailWhereInput[]
    OR?: FileThumbnailWhereInput[]
    NOT?: FileThumbnailWhereInput | FileThumbnailWhereInput[]
    id?: StringFilter<"FileThumbnail"> | string
    contentId?: StringFilter<"FileThumbnail"> | string
    size?: StringFilter<"FileThumbnail"> | string
    width?: IntFilter<"FileThumbnail"> | number
    height?: IntFilter<"FileThumbnail"> | number
    filePath?: StringFilter<"FileThumbnail"> | string
    fileSize?: BigIntFilter<"FileThumbnail"> | bigint | number
    format?: StringFilter<"FileThumbnail"> | string
    createdAt?: DateTimeFilter<"FileThumbnail"> | Date | string
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }

  export type FileThumbnailOrderByWithRelationInput = {
    id?: SortOrder
    contentId?: SortOrder
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    format?: SortOrder
    createdAt?: SortOrder
    content?: ContentOrderByWithRelationInput
  }

  export type FileThumbnailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    contentId_size?: FileThumbnailContentIdSizeCompoundUniqueInput
    AND?: FileThumbnailWhereInput | FileThumbnailWhereInput[]
    OR?: FileThumbnailWhereInput[]
    NOT?: FileThumbnailWhereInput | FileThumbnailWhereInput[]
    contentId?: StringFilter<"FileThumbnail"> | string
    size?: StringFilter<"FileThumbnail"> | string
    width?: IntFilter<"FileThumbnail"> | number
    height?: IntFilter<"FileThumbnail"> | number
    filePath?: StringFilter<"FileThumbnail"> | string
    fileSize?: BigIntFilter<"FileThumbnail"> | bigint | number
    format?: StringFilter<"FileThumbnail"> | string
    createdAt?: DateTimeFilter<"FileThumbnail"> | Date | string
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
  }, "id" | "contentId_size">

  export type FileThumbnailOrderByWithAggregationInput = {
    id?: SortOrder
    contentId?: SortOrder
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    format?: SortOrder
    createdAt?: SortOrder
    _count?: FileThumbnailCountOrderByAggregateInput
    _avg?: FileThumbnailAvgOrderByAggregateInput
    _max?: FileThumbnailMaxOrderByAggregateInput
    _min?: FileThumbnailMinOrderByAggregateInput
    _sum?: FileThumbnailSumOrderByAggregateInput
  }

  export type FileThumbnailScalarWhereWithAggregatesInput = {
    AND?: FileThumbnailScalarWhereWithAggregatesInput | FileThumbnailScalarWhereWithAggregatesInput[]
    OR?: FileThumbnailScalarWhereWithAggregatesInput[]
    NOT?: FileThumbnailScalarWhereWithAggregatesInput | FileThumbnailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FileThumbnail"> | string
    contentId?: StringWithAggregatesFilter<"FileThumbnail"> | string
    size?: StringWithAggregatesFilter<"FileThumbnail"> | string
    width?: IntWithAggregatesFilter<"FileThumbnail"> | number
    height?: IntWithAggregatesFilter<"FileThumbnail"> | number
    filePath?: StringWithAggregatesFilter<"FileThumbnail"> | string
    fileSize?: BigIntWithAggregatesFilter<"FileThumbnail"> | bigint | number
    format?: StringWithAggregatesFilter<"FileThumbnail"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FileThumbnail"> | Date | string
  }

  export type FileVersionWhereInput = {
    AND?: FileVersionWhereInput | FileVersionWhereInput[]
    OR?: FileVersionWhereInput[]
    NOT?: FileVersionWhereInput | FileVersionWhereInput[]
    id?: StringFilter<"FileVersion"> | string
    contentId?: StringFilter<"FileVersion"> | string
    version?: IntFilter<"FileVersion"> | number
    filePath?: StringFilter<"FileVersion"> | string
    fileSize?: BigIntFilter<"FileVersion"> | bigint | number
    fileHash?: StringFilter<"FileVersion"> | string
    changes?: StringNullableFilter<"FileVersion"> | string | null
    uploadedById?: StringFilter<"FileVersion"> | string
    createdAt?: DateTimeFilter<"FileVersion"> | Date | string
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
    uploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FileVersionOrderByWithRelationInput = {
    id?: SortOrder
    contentId?: SortOrder
    version?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    fileHash?: SortOrder
    changes?: SortOrderInput | SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
    content?: ContentOrderByWithRelationInput
    uploadedBy?: UserOrderByWithRelationInput
  }

  export type FileVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    contentId_version?: FileVersionContentIdVersionCompoundUniqueInput
    AND?: FileVersionWhereInput | FileVersionWhereInput[]
    OR?: FileVersionWhereInput[]
    NOT?: FileVersionWhereInput | FileVersionWhereInput[]
    contentId?: StringFilter<"FileVersion"> | string
    version?: IntFilter<"FileVersion"> | number
    filePath?: StringFilter<"FileVersion"> | string
    fileSize?: BigIntFilter<"FileVersion"> | bigint | number
    fileHash?: StringFilter<"FileVersion"> | string
    changes?: StringNullableFilter<"FileVersion"> | string | null
    uploadedById?: StringFilter<"FileVersion"> | string
    createdAt?: DateTimeFilter<"FileVersion"> | Date | string
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
    uploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "contentId_version">

  export type FileVersionOrderByWithAggregationInput = {
    id?: SortOrder
    contentId?: SortOrder
    version?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    fileHash?: SortOrder
    changes?: SortOrderInput | SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
    _count?: FileVersionCountOrderByAggregateInput
    _avg?: FileVersionAvgOrderByAggregateInput
    _max?: FileVersionMaxOrderByAggregateInput
    _min?: FileVersionMinOrderByAggregateInput
    _sum?: FileVersionSumOrderByAggregateInput
  }

  export type FileVersionScalarWhereWithAggregatesInput = {
    AND?: FileVersionScalarWhereWithAggregatesInput | FileVersionScalarWhereWithAggregatesInput[]
    OR?: FileVersionScalarWhereWithAggregatesInput[]
    NOT?: FileVersionScalarWhereWithAggregatesInput | FileVersionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FileVersion"> | string
    contentId?: StringWithAggregatesFilter<"FileVersion"> | string
    version?: IntWithAggregatesFilter<"FileVersion"> | number
    filePath?: StringWithAggregatesFilter<"FileVersion"> | string
    fileSize?: BigIntWithAggregatesFilter<"FileVersion"> | bigint | number
    fileHash?: StringWithAggregatesFilter<"FileVersion"> | string
    changes?: StringNullableWithAggregatesFilter<"FileVersion"> | string | null
    uploadedById?: StringWithAggregatesFilter<"FileVersion"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FileVersion"> | Date | string
  }

  export type ErrorLogWhereInput = {
    AND?: ErrorLogWhereInput | ErrorLogWhereInput[]
    OR?: ErrorLogWhereInput[]
    NOT?: ErrorLogWhereInput | ErrorLogWhereInput[]
    id?: StringFilter<"ErrorLog"> | string
    displayId?: StringFilter<"ErrorLog"> | string
    errorType?: StringFilter<"ErrorLog"> | string
    message?: StringFilter<"ErrorLog"> | string
    stack?: StringNullableFilter<"ErrorLog"> | string | null
    metadata?: StringNullableFilter<"ErrorLog"> | string | null
    userAgent?: StringNullableFilter<"ErrorLog"> | string | null
    url?: StringNullableFilter<"ErrorLog"> | string | null
    timestamp?: DateTimeFilter<"ErrorLog"> | Date | string
    createdAt?: DateTimeFilter<"ErrorLog"> | Date | string
    display?: XOR<DisplayScalarRelationFilter, DisplayWhereInput>
  }

  export type ErrorLogOrderByWithRelationInput = {
    id?: SortOrder
    displayId?: SortOrder
    errorType?: SortOrder
    message?: SortOrder
    stack?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    display?: DisplayOrderByWithRelationInput
  }

  export type ErrorLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ErrorLogWhereInput | ErrorLogWhereInput[]
    OR?: ErrorLogWhereInput[]
    NOT?: ErrorLogWhereInput | ErrorLogWhereInput[]
    displayId?: StringFilter<"ErrorLog"> | string
    errorType?: StringFilter<"ErrorLog"> | string
    message?: StringFilter<"ErrorLog"> | string
    stack?: StringNullableFilter<"ErrorLog"> | string | null
    metadata?: StringNullableFilter<"ErrorLog"> | string | null
    userAgent?: StringNullableFilter<"ErrorLog"> | string | null
    url?: StringNullableFilter<"ErrorLog"> | string | null
    timestamp?: DateTimeFilter<"ErrorLog"> | Date | string
    createdAt?: DateTimeFilter<"ErrorLog"> | Date | string
    display?: XOR<DisplayScalarRelationFilter, DisplayWhereInput>
  }, "id">

  export type ErrorLogOrderByWithAggregationInput = {
    id?: SortOrder
    displayId?: SortOrder
    errorType?: SortOrder
    message?: SortOrder
    stack?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    _count?: ErrorLogCountOrderByAggregateInput
    _max?: ErrorLogMaxOrderByAggregateInput
    _min?: ErrorLogMinOrderByAggregateInput
  }

  export type ErrorLogScalarWhereWithAggregatesInput = {
    AND?: ErrorLogScalarWhereWithAggregatesInput | ErrorLogScalarWhereWithAggregatesInput[]
    OR?: ErrorLogScalarWhereWithAggregatesInput[]
    NOT?: ErrorLogScalarWhereWithAggregatesInput | ErrorLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ErrorLog"> | string
    displayId?: StringWithAggregatesFilter<"ErrorLog"> | string
    errorType?: StringWithAggregatesFilter<"ErrorLog"> | string
    message?: StringWithAggregatesFilter<"ErrorLog"> | string
    stack?: StringNullableWithAggregatesFilter<"ErrorLog"> | string | null
    metadata?: StringNullableWithAggregatesFilter<"ErrorLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"ErrorLog"> | string | null
    url?: StringNullableWithAggregatesFilter<"ErrorLog"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"ErrorLog"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ErrorLog"> | Date | string
  }

  export type ViewLogWhereInput = {
    AND?: ViewLogWhereInput | ViewLogWhereInput[]
    OR?: ViewLogWhereInput[]
    NOT?: ViewLogWhereInput | ViewLogWhereInput[]
    id?: StringFilter<"ViewLog"> | string
    displayId?: StringFilter<"ViewLog"> | string
    playlistId?: StringFilter<"ViewLog"> | string
    contentId?: StringFilter<"ViewLog"> | string
    viewedAt?: DateTimeFilter<"ViewLog"> | Date | string
    duration?: IntFilter<"ViewLog"> | number
    expectedDuration?: IntFilter<"ViewLog"> | number
    completed?: BoolFilter<"ViewLog"> | boolean
    skipped?: BoolFilter<"ViewLog"> | boolean
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
    display?: XOR<DisplayScalarRelationFilter, DisplayWhereInput>
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
  }

  export type ViewLogOrderByWithRelationInput = {
    id?: SortOrder
    displayId?: SortOrder
    playlistId?: SortOrder
    contentId?: SortOrder
    viewedAt?: SortOrder
    duration?: SortOrder
    expectedDuration?: SortOrder
    completed?: SortOrder
    skipped?: SortOrder
    content?: ContentOrderByWithRelationInput
    display?: DisplayOrderByWithRelationInput
    playlist?: PlaylistOrderByWithRelationInput
  }

  export type ViewLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ViewLogWhereInput | ViewLogWhereInput[]
    OR?: ViewLogWhereInput[]
    NOT?: ViewLogWhereInput | ViewLogWhereInput[]
    displayId?: StringFilter<"ViewLog"> | string
    playlistId?: StringFilter<"ViewLog"> | string
    contentId?: StringFilter<"ViewLog"> | string
    viewedAt?: DateTimeFilter<"ViewLog"> | Date | string
    duration?: IntFilter<"ViewLog"> | number
    expectedDuration?: IntFilter<"ViewLog"> | number
    completed?: BoolFilter<"ViewLog"> | boolean
    skipped?: BoolFilter<"ViewLog"> | boolean
    content?: XOR<ContentScalarRelationFilter, ContentWhereInput>
    display?: XOR<DisplayScalarRelationFilter, DisplayWhereInput>
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
  }, "id">

  export type ViewLogOrderByWithAggregationInput = {
    id?: SortOrder
    displayId?: SortOrder
    playlistId?: SortOrder
    contentId?: SortOrder
    viewedAt?: SortOrder
    duration?: SortOrder
    expectedDuration?: SortOrder
    completed?: SortOrder
    skipped?: SortOrder
    _count?: ViewLogCountOrderByAggregateInput
    _avg?: ViewLogAvgOrderByAggregateInput
    _max?: ViewLogMaxOrderByAggregateInput
    _min?: ViewLogMinOrderByAggregateInput
    _sum?: ViewLogSumOrderByAggregateInput
  }

  export type ViewLogScalarWhereWithAggregatesInput = {
    AND?: ViewLogScalarWhereWithAggregatesInput | ViewLogScalarWhereWithAggregatesInput[]
    OR?: ViewLogScalarWhereWithAggregatesInput[]
    NOT?: ViewLogScalarWhereWithAggregatesInput | ViewLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ViewLog"> | string
    displayId?: StringWithAggregatesFilter<"ViewLog"> | string
    playlistId?: StringWithAggregatesFilter<"ViewLog"> | string
    contentId?: StringWithAggregatesFilter<"ViewLog"> | string
    viewedAt?: DateTimeWithAggregatesFilter<"ViewLog"> | Date | string
    duration?: IntWithAggregatesFilter<"ViewLog"> | number
    expectedDuration?: IntWithAggregatesFilter<"ViewLog"> | number
    completed?: BoolWithAggregatesFilter<"ViewLog"> | boolean
    skipped?: BoolWithAggregatesFilter<"ViewLog"> | boolean
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    playlists?: PlaylistListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    playlists?: PlaylistOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    playlists?: PlaylistListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type AlertWhereInput = {
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    id?: StringFilter<"Alert"> | string
    type?: EnumAlertTypeFilter<"Alert"> | $Enums.AlertType
    category?: EnumAlertCategoryFilter<"Alert"> | $Enums.AlertCategory
    title?: StringFilter<"Alert"> | string
    message?: StringFilter<"Alert"> | string
    metadata?: JsonNullableFilter<"Alert">
    displayId?: StringNullableFilter<"Alert"> | string | null
    userId?: StringNullableFilter<"Alert"> | string | null
    resolved?: BoolFilter<"Alert"> | boolean
    resolvedAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    resolvedBy?: StringNullableFilter<"Alert"> | string | null
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
    display?: XOR<DisplayNullableScalarRelationFilter, DisplayWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AlertOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    title?: SortOrder
    message?: SortOrder
    metadata?: SortOrderInput | SortOrder
    displayId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    resolved?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    resolvedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    display?: DisplayOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    type?: EnumAlertTypeFilter<"Alert"> | $Enums.AlertType
    category?: EnumAlertCategoryFilter<"Alert"> | $Enums.AlertCategory
    title?: StringFilter<"Alert"> | string
    message?: StringFilter<"Alert"> | string
    metadata?: JsonNullableFilter<"Alert">
    displayId?: StringNullableFilter<"Alert"> | string | null
    userId?: StringNullableFilter<"Alert"> | string | null
    resolved?: BoolFilter<"Alert"> | boolean
    resolvedAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    resolvedBy?: StringNullableFilter<"Alert"> | string | null
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
    display?: XOR<DisplayNullableScalarRelationFilter, DisplayWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AlertOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    title?: SortOrder
    message?: SortOrder
    metadata?: SortOrderInput | SortOrder
    displayId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    resolved?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    resolvedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlertCountOrderByAggregateInput
    _max?: AlertMaxOrderByAggregateInput
    _min?: AlertMinOrderByAggregateInput
  }

  export type AlertScalarWhereWithAggregatesInput = {
    AND?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    OR?: AlertScalarWhereWithAggregatesInput[]
    NOT?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alert"> | string
    type?: EnumAlertTypeWithAggregatesFilter<"Alert"> | $Enums.AlertType
    category?: EnumAlertCategoryWithAggregatesFilter<"Alert"> | $Enums.AlertCategory
    title?: StringWithAggregatesFilter<"Alert"> | string
    message?: StringWithAggregatesFilter<"Alert"> | string
    metadata?: JsonNullableWithAggregatesFilter<"Alert">
    displayId?: StringNullableWithAggregatesFilter<"Alert"> | string | null
    userId?: StringNullableWithAggregatesFilter<"Alert"> | string | null
    resolved?: BoolWithAggregatesFilter<"Alert"> | boolean
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Alert"> | Date | string | null
    resolvedBy?: StringNullableWithAggregatesFilter<"Alert"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    status?: $Enums.UserStatus
    permissions?: UserCreatepermissionsInput | $Enums.Permission[]
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    content?: ContentCreateNestedManyWithoutUploadedByUserInput
    fileVersions?: FileVersionCreateNestedManyWithoutUploadedByInput
    playlists?: PlaylistCreateNestedManyWithoutCreatorInput
    sharedPlaylists?: PlaylistCreateNestedManyWithoutSharedWithInput
    alerts?: AlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    status?: $Enums.UserStatus
    permissions?: UserCreatepermissionsInput | $Enums.Permission[]
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    content?: ContentUncheckedCreateNestedManyWithoutUploadedByUserInput
    fileVersions?: FileVersionUncheckedCreateNestedManyWithoutUploadedByInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutCreatorInput
    sharedPlaylists?: PlaylistUncheckedCreateNestedManyWithoutSharedWithInput
    alerts?: AlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    permissions?: UserUpdatepermissionsInput | $Enums.Permission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: ContentUpdateManyWithoutUploadedByUserNestedInput
    fileVersions?: FileVersionUpdateManyWithoutUploadedByNestedInput
    playlists?: PlaylistUpdateManyWithoutCreatorNestedInput
    sharedPlaylists?: PlaylistUpdateManyWithoutSharedWithNestedInput
    alerts?: AlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    permissions?: UserUpdatepermissionsInput | $Enums.Permission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: ContentUncheckedUpdateManyWithoutUploadedByUserNestedInput
    fileVersions?: FileVersionUncheckedUpdateManyWithoutUploadedByNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutCreatorNestedInput
    sharedPlaylists?: PlaylistUncheckedUpdateManyWithoutSharedWithNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    status?: $Enums.UserStatus
    permissions?: UserCreatepermissionsInput | $Enums.Permission[]
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    permissions?: UserUpdatepermissionsInput | $Enums.Permission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    permissions?: UserUpdatepermissionsInput | $Enums.Permission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContentCreateInput = {
    id?: string
    name: string
    type: $Enums.ContentType
    filePath?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: bigint | number | null
    mimeType?: string | null
    originalName?: string | null
    fileHash?: string | null
    processingStatus?: $Enums.ProcessingStatus
    processingError?: string | null
    storageLocation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: string | null
    duration?: number | null
    fileName?: string | null
    description?: string | null
    uploadedByUser: UserCreateNestedOneWithoutContentInput
    thumbnails?: FileThumbnailCreateNestedManyWithoutContentInput
    versions?: FileVersionCreateNestedManyWithoutContentInput
    playlistItems?: PlaylistItemCreateNestedManyWithoutContentInput
    viewLogs?: ViewLogCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.ContentType
    filePath?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: bigint | number | null
    mimeType?: string | null
    originalName?: string | null
    fileHash?: string | null
    processingStatus?: $Enums.ProcessingStatus
    processingError?: string | null
    storageLocation?: string | null
    uploadedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: string | null
    duration?: number | null
    fileName?: string | null
    description?: string | null
    thumbnails?: FileThumbnailUncheckedCreateNestedManyWithoutContentInput
    versions?: FileVersionUncheckedCreateNestedManyWithoutContentInput
    playlistItems?: PlaylistItemUncheckedCreateNestedManyWithoutContentInput
    viewLogs?: ViewLogUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedByUser?: UserUpdateOneRequiredWithoutContentNestedInput
    thumbnails?: FileThumbnailUpdateManyWithoutContentNestedInput
    versions?: FileVersionUpdateManyWithoutContentNestedInput
    playlistItems?: PlaylistItemUpdateManyWithoutContentNestedInput
    viewLogs?: ViewLogUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnails?: FileThumbnailUncheckedUpdateManyWithoutContentNestedInput
    versions?: FileVersionUncheckedUpdateManyWithoutContentNestedInput
    playlistItems?: PlaylistItemUncheckedUpdateManyWithoutContentNestedInput
    viewLogs?: ViewLogUncheckedUpdateManyWithoutContentNestedInput
  }

  export type ContentCreateManyInput = {
    id?: string
    name: string
    type: $Enums.ContentType
    filePath?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: bigint | number | null
    mimeType?: string | null
    originalName?: string | null
    fileHash?: string | null
    processingStatus?: $Enums.ProcessingStatus
    processingError?: string | null
    storageLocation?: string | null
    uploadedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: string | null
    duration?: number | null
    fileName?: string | null
    description?: string | null
  }

  export type ContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistCreateInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    displays?: DisplayCreateNestedManyWithoutPlaylistInput
    creator: UserCreateNestedOneWithoutPlaylistsInput
    items?: PlaylistItemCreateNestedManyWithoutPlaylistInput
    viewLogs?: ViewLogCreateNestedManyWithoutPlaylistInput
    tags?: TagCreateNestedManyWithoutPlaylistsInput
    sharedWith?: UserCreateNestedManyWithoutSharedPlaylistsInput
  }

  export type PlaylistUncheckedCreateInput = {
    id?: string
    name: string
    createdBy: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    displays?: DisplayUncheckedCreateNestedManyWithoutPlaylistInput
    items?: PlaylistItemUncheckedCreateNestedManyWithoutPlaylistInput
    viewLogs?: ViewLogUncheckedCreateNestedManyWithoutPlaylistInput
    tags?: TagUncheckedCreateNestedManyWithoutPlaylistsInput
    sharedWith?: UserUncheckedCreateNestedManyWithoutSharedPlaylistsInput
  }

  export type PlaylistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displays?: DisplayUpdateManyWithoutPlaylistNestedInput
    creator?: UserUpdateOneRequiredWithoutPlaylistsNestedInput
    items?: PlaylistItemUpdateManyWithoutPlaylistNestedInput
    viewLogs?: ViewLogUpdateManyWithoutPlaylistNestedInput
    tags?: TagUpdateManyWithoutPlaylistsNestedInput
    sharedWith?: UserUpdateManyWithoutSharedPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displays?: DisplayUncheckedUpdateManyWithoutPlaylistNestedInput
    items?: PlaylistItemUncheckedUpdateManyWithoutPlaylistNestedInput
    viewLogs?: ViewLogUncheckedUpdateManyWithoutPlaylistNestedInput
    tags?: TagUncheckedUpdateManyWithoutPlaylistsNestedInput
    sharedWith?: UserUncheckedUpdateManyWithoutSharedPlaylistsNestedInput
  }

  export type PlaylistCreateManyInput = {
    id?: string
    name: string
    createdBy: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
  }

  export type PlaylistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistItemCreateInput = {
    id?: string
    duration: number
    order: number
    transitionType?: $Enums.TransitionType
    transitionDuration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    content: ContentCreateNestedOneWithoutPlaylistItemsInput
    playlist: PlaylistCreateNestedOneWithoutItemsInput
  }

  export type PlaylistItemUncheckedCreateInput = {
    id?: string
    playlistId: string
    contentId: string
    duration: number
    order: number
    transitionType?: $Enums.TransitionType
    transitionDuration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    transitionType?: EnumTransitionTypeFieldUpdateOperationsInput | $Enums.TransitionType
    transitionDuration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneRequiredWithoutPlaylistItemsNestedInput
    playlist?: PlaylistUpdateOneRequiredWithoutItemsNestedInput
  }

  export type PlaylistItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    transitionType?: EnumTransitionTypeFieldUpdateOperationsInput | $Enums.TransitionType
    transitionDuration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistItemCreateManyInput = {
    id?: string
    playlistId: string
    contentId: string
    duration: number
    order: number
    transitionType?: $Enums.TransitionType
    transitionDuration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    transitionType?: EnumTransitionTypeFieldUpdateOperationsInput | $Enums.TransitionType
    transitionDuration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    transitionType?: EnumTransitionTypeFieldUpdateOperationsInput | $Enums.TransitionType
    transitionDuration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisplayCreateInput = {
    id?: string
    name: string
    urlSlug: string
    resolution?: string
    orientation?: $Enums.DisplayOrientation
    lastSeen?: Date | string | null
    isOnline?: boolean
    location?: string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    playlist?: PlaylistCreateNestedOneWithoutDisplaysInput
    errorLogs?: ErrorLogCreateNestedManyWithoutDisplayInput
    viewLogs?: ViewLogCreateNestedManyWithoutDisplayInput
    alerts?: AlertCreateNestedManyWithoutDisplayInput
  }

  export type DisplayUncheckedCreateInput = {
    id?: string
    name: string
    urlSlug: string
    playlistId?: string | null
    resolution?: string
    orientation?: $Enums.DisplayOrientation
    lastSeen?: Date | string | null
    isOnline?: boolean
    location?: string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    errorLogs?: ErrorLogUncheckedCreateNestedManyWithoutDisplayInput
    viewLogs?: ViewLogUncheckedCreateNestedManyWithoutDisplayInput
    alerts?: AlertUncheckedCreateNestedManyWithoutDisplayInput
  }

  export type DisplayUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    urlSlug?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDisplayOrientationFieldUpdateOperationsInput | $Enums.DisplayOrientation
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneWithoutDisplaysNestedInput
    errorLogs?: ErrorLogUpdateManyWithoutDisplayNestedInput
    viewLogs?: ViewLogUpdateManyWithoutDisplayNestedInput
    alerts?: AlertUpdateManyWithoutDisplayNestedInput
  }

  export type DisplayUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    urlSlug?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDisplayOrientationFieldUpdateOperationsInput | $Enums.DisplayOrientation
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    errorLogs?: ErrorLogUncheckedUpdateManyWithoutDisplayNestedInput
    viewLogs?: ViewLogUncheckedUpdateManyWithoutDisplayNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutDisplayNestedInput
  }

  export type DisplayCreateManyInput = {
    id?: string
    name: string
    urlSlug: string
    playlistId?: string | null
    resolution?: string
    orientation?: $Enums.DisplayOrientation
    lastSeen?: Date | string | null
    isOnline?: boolean
    location?: string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisplayUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    urlSlug?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDisplayOrientationFieldUpdateOperationsInput | $Enums.DisplayOrientation
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisplayUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    urlSlug?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDisplayOrientationFieldUpdateOperationsInput | $Enums.DisplayOrientation
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileThumbnailCreateInput = {
    id?: string
    size: string
    width: number
    height: number
    filePath: string
    fileSize: bigint | number
    format: string
    createdAt?: Date | string
    content: ContentCreateNestedOneWithoutThumbnailsInput
  }

  export type FileThumbnailUncheckedCreateInput = {
    id?: string
    contentId: string
    size: string
    width: number
    height: number
    filePath: string
    fileSize: bigint | number
    format: string
    createdAt?: Date | string
  }

  export type FileThumbnailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    format?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneRequiredWithoutThumbnailsNestedInput
  }

  export type FileThumbnailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    format?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileThumbnailCreateManyInput = {
    id?: string
    contentId: string
    size: string
    width: number
    height: number
    filePath: string
    fileSize: bigint | number
    format: string
    createdAt?: Date | string
  }

  export type FileThumbnailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    format?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileThumbnailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    format?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileVersionCreateInput = {
    id?: string
    version: number
    filePath: string
    fileSize: bigint | number
    fileHash: string
    changes?: string | null
    createdAt?: Date | string
    content: ContentCreateNestedOneWithoutVersionsInput
    uploadedBy: UserCreateNestedOneWithoutFileVersionsInput
  }

  export type FileVersionUncheckedCreateInput = {
    id?: string
    contentId: string
    version: number
    filePath: string
    fileSize: bigint | number
    fileHash: string
    changes?: string | null
    uploadedById: string
    createdAt?: Date | string
  }

  export type FileVersionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    fileHash?: StringFieldUpdateOperationsInput | string
    changes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneRequiredWithoutVersionsNestedInput
    uploadedBy?: UserUpdateOneRequiredWithoutFileVersionsNestedInput
  }

  export type FileVersionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    fileHash?: StringFieldUpdateOperationsInput | string
    changes?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileVersionCreateManyInput = {
    id?: string
    contentId: string
    version: number
    filePath: string
    fileSize: bigint | number
    fileHash: string
    changes?: string | null
    uploadedById: string
    createdAt?: Date | string
  }

  export type FileVersionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    fileHash?: StringFieldUpdateOperationsInput | string
    changes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileVersionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    fileHash?: StringFieldUpdateOperationsInput | string
    changes?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErrorLogCreateInput = {
    id?: string
    errorType: string
    message: string
    stack?: string | null
    metadata?: string | null
    userAgent?: string | null
    url?: string | null
    timestamp: Date | string
    createdAt?: Date | string
    display: DisplayCreateNestedOneWithoutErrorLogsInput
  }

  export type ErrorLogUncheckedCreateInput = {
    id?: string
    displayId: string
    errorType: string
    message: string
    stack?: string | null
    metadata?: string | null
    userAgent?: string | null
    url?: string | null
    timestamp: Date | string
    createdAt?: Date | string
  }

  export type ErrorLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    display?: DisplayUpdateOneRequiredWithoutErrorLogsNestedInput
  }

  export type ErrorLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayId?: StringFieldUpdateOperationsInput | string
    errorType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErrorLogCreateManyInput = {
    id?: string
    displayId: string
    errorType: string
    message: string
    stack?: string | null
    metadata?: string | null
    userAgent?: string | null
    url?: string | null
    timestamp: Date | string
    createdAt?: Date | string
  }

  export type ErrorLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErrorLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayId?: StringFieldUpdateOperationsInput | string
    errorType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewLogCreateInput = {
    id?: string
    viewedAt?: Date | string
    duration: number
    expectedDuration: number
    completed: boolean
    skipped?: boolean
    content: ContentCreateNestedOneWithoutViewLogsInput
    display: DisplayCreateNestedOneWithoutViewLogsInput
    playlist: PlaylistCreateNestedOneWithoutViewLogsInput
  }

  export type ViewLogUncheckedCreateInput = {
    id?: string
    displayId: string
    playlistId: string
    contentId: string
    viewedAt?: Date | string
    duration: number
    expectedDuration: number
    completed: boolean
    skipped?: boolean
  }

  export type ViewLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    expectedDuration?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    skipped?: BoolFieldUpdateOperationsInput | boolean
    content?: ContentUpdateOneRequiredWithoutViewLogsNestedInput
    display?: DisplayUpdateOneRequiredWithoutViewLogsNestedInput
    playlist?: PlaylistUpdateOneRequiredWithoutViewLogsNestedInput
  }

  export type ViewLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayId?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    expectedDuration?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    skipped?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ViewLogCreateManyInput = {
    id?: string
    displayId: string
    playlistId: string
    contentId: string
    viewedAt?: Date | string
    duration: number
    expectedDuration: number
    completed: boolean
    skipped?: boolean
  }

  export type ViewLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    expectedDuration?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    skipped?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ViewLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayId?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    expectedDuration?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    skipped?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TagCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    playlists?: PlaylistCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    playlists?: PlaylistUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlists?: PlaylistUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateInput = {
    id?: string
    type: $Enums.AlertType
    category: $Enums.AlertCategory
    title: string
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    display?: DisplayCreateNestedOneWithoutAlertsInput
    user?: UserCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateInput = {
    id?: string
    type: $Enums.AlertType
    category: $Enums.AlertCategory
    title: string
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    displayId?: string | null
    userId?: string | null
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    category?: EnumAlertCategoryFieldUpdateOperationsInput | $Enums.AlertCategory
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    display?: DisplayUpdateOneWithoutAlertsNestedInput
    user?: UserUpdateOneWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    category?: EnumAlertCategoryFieldUpdateOperationsInput | $Enums.AlertCategory
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    displayId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateManyInput = {
    id?: string
    type: $Enums.AlertType
    category: $Enums.AlertCategory
    title: string
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    displayId?: string | null
    userId?: string | null
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    category?: EnumAlertCategoryFieldUpdateOperationsInput | $Enums.AlertCategory
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    category?: EnumAlertCategoryFieldUpdateOperationsInput | $Enums.AlertCategory
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    displayId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type EnumPermissionNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel> | null
    has?: $Enums.Permission | EnumPermissionFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    hasSome?: $Enums.Permission[] | ListEnumPermissionFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ContentListRelationFilter = {
    every?: ContentWhereInput
    some?: ContentWhereInput
    none?: ContentWhereInput
  }

  export type FileVersionListRelationFilter = {
    every?: FileVersionWhereInput
    some?: FileVersionWhereInput
    none?: FileVersionWhereInput
  }

  export type PlaylistListRelationFilter = {
    every?: PlaylistWhereInput
    some?: PlaylistWhereInput
    none?: PlaylistWhereInput
  }

  export type AlertListRelationFilter = {
    every?: AlertWhereInput
    some?: AlertWhereInput
    none?: AlertWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileVersionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    status?: SortOrder
    permissions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type EnumProcessingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessingStatus | EnumProcessingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessingStatusFilter<$PrismaModel> | $Enums.ProcessingStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FileThumbnailListRelationFilter = {
    every?: FileThumbnailWhereInput
    some?: FileThumbnailWhereInput
    none?: FileThumbnailWhereInput
  }

  export type PlaylistItemListRelationFilter = {
    every?: PlaylistItemWhereInput
    some?: PlaylistItemWhereInput
    none?: PlaylistItemWhereInput
  }

  export type ViewLogListRelationFilter = {
    every?: ViewLogWhereInput
    some?: ViewLogWhereInput
    none?: ViewLogWhereInput
  }

  export type FileThumbnailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    filePath?: SortOrder
    metadata?: SortOrder
    backgroundColor?: SortOrder
    cropSettings?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    originalName?: SortOrder
    fileHash?: SortOrder
    processingStatus?: SortOrder
    processingError?: SortOrder
    storageLocation?: SortOrder
    uploadedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    duration?: SortOrder
    fileName?: SortOrder
    description?: SortOrder
  }

  export type ContentAvgOrderByAggregateInput = {
    fileSize?: SortOrder
    duration?: SortOrder
  }

  export type ContentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    filePath?: SortOrder
    backgroundColor?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    originalName?: SortOrder
    fileHash?: SortOrder
    processingStatus?: SortOrder
    processingError?: SortOrder
    storageLocation?: SortOrder
    uploadedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    duration?: SortOrder
    fileName?: SortOrder
    description?: SortOrder
  }

  export type ContentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    filePath?: SortOrder
    backgroundColor?: SortOrder
    fileSize?: SortOrder
    mimeType?: SortOrder
    originalName?: SortOrder
    fileHash?: SortOrder
    processingStatus?: SortOrder
    processingError?: SortOrder
    storageLocation?: SortOrder
    uploadedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    createdBy?: SortOrder
    duration?: SortOrder
    fileName?: SortOrder
    description?: SortOrder
  }

  export type ContentSumOrderByAggregateInput = {
    fileSize?: SortOrder
    duration?: SortOrder
  }

  export type EnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type EnumProcessingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessingStatus | EnumProcessingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProcessingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcessingStatusFilter<$PrismaModel>
    _max?: NestedEnumProcessingStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DisplayListRelationFilter = {
    every?: DisplayWhereInput
    some?: DisplayWhereInput
    none?: DisplayWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type DisplayOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
  }

  export type PlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
  }

  export type PlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumTransitionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransitionType | EnumTransitionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransitionType[] | ListEnumTransitionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransitionType[] | ListEnumTransitionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransitionTypeFilter<$PrismaModel> | $Enums.TransitionType
  }

  export type ContentScalarRelationFilter = {
    is?: ContentWhereInput
    isNot?: ContentWhereInput
  }

  export type PlaylistScalarRelationFilter = {
    is?: PlaylistWhereInput
    isNot?: PlaylistWhereInput
  }

  export type PlaylistItemPlaylistIdOrderCompoundUniqueInput = {
    playlistId: string
    order: number
  }

  export type PlaylistItemCountOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    contentId?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    transitionType?: SortOrder
    transitionDuration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistItemAvgOrderByAggregateInput = {
    duration?: SortOrder
    order?: SortOrder
    transitionDuration?: SortOrder
  }

  export type PlaylistItemMaxOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    contentId?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    transitionType?: SortOrder
    transitionDuration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistItemMinOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    contentId?: SortOrder
    duration?: SortOrder
    order?: SortOrder
    transitionType?: SortOrder
    transitionDuration?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistItemSumOrderByAggregateInput = {
    duration?: SortOrder
    order?: SortOrder
    transitionDuration?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumTransitionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransitionType | EnumTransitionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransitionType[] | ListEnumTransitionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransitionType[] | ListEnumTransitionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransitionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransitionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransitionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransitionTypeFilter<$PrismaModel>
  }

  export type EnumDisplayOrientationFilter<$PrismaModel = never> = {
    equals?: $Enums.DisplayOrientation | EnumDisplayOrientationFieldRefInput<$PrismaModel>
    in?: $Enums.DisplayOrientation[] | ListEnumDisplayOrientationFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisplayOrientation[] | ListEnumDisplayOrientationFieldRefInput<$PrismaModel>
    not?: NestedEnumDisplayOrientationFilter<$PrismaModel> | $Enums.DisplayOrientation
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PlaylistNullableScalarRelationFilter = {
    is?: PlaylistWhereInput | null
    isNot?: PlaylistWhereInput | null
  }

  export type ErrorLogListRelationFilter = {
    every?: ErrorLogWhereInput
    some?: ErrorLogWhereInput
    none?: ErrorLogWhereInput
  }

  export type ErrorLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DisplayCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    urlSlug?: SortOrder
    playlistId?: SortOrder
    resolution?: SortOrder
    orientation?: SortOrder
    lastSeen?: SortOrder
    isOnline?: SortOrder
    location?: SortOrder
    clockSettings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisplayMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    urlSlug?: SortOrder
    playlistId?: SortOrder
    resolution?: SortOrder
    orientation?: SortOrder
    lastSeen?: SortOrder
    isOnline?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisplayMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    urlSlug?: SortOrder
    playlistId?: SortOrder
    resolution?: SortOrder
    orientation?: SortOrder
    lastSeen?: SortOrder
    isOnline?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDisplayOrientationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisplayOrientation | EnumDisplayOrientationFieldRefInput<$PrismaModel>
    in?: $Enums.DisplayOrientation[] | ListEnumDisplayOrientationFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisplayOrientation[] | ListEnumDisplayOrientationFieldRefInput<$PrismaModel>
    not?: NestedEnumDisplayOrientationWithAggregatesFilter<$PrismaModel> | $Enums.DisplayOrientation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisplayOrientationFilter<$PrismaModel>
    _max?: NestedEnumDisplayOrientationFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type FileThumbnailContentIdSizeCompoundUniqueInput = {
    contentId: string
    size: string
  }

  export type FileThumbnailCountOrderByAggregateInput = {
    id?: SortOrder
    contentId?: SortOrder
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    format?: SortOrder
    createdAt?: SortOrder
  }

  export type FileThumbnailAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
    fileSize?: SortOrder
  }

  export type FileThumbnailMaxOrderByAggregateInput = {
    id?: SortOrder
    contentId?: SortOrder
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    format?: SortOrder
    createdAt?: SortOrder
  }

  export type FileThumbnailMinOrderByAggregateInput = {
    id?: SortOrder
    contentId?: SortOrder
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    format?: SortOrder
    createdAt?: SortOrder
  }

  export type FileThumbnailSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
    fileSize?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type FileVersionContentIdVersionCompoundUniqueInput = {
    contentId: string
    version: number
  }

  export type FileVersionCountOrderByAggregateInput = {
    id?: SortOrder
    contentId?: SortOrder
    version?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    fileHash?: SortOrder
    changes?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
  }

  export type FileVersionAvgOrderByAggregateInput = {
    version?: SortOrder
    fileSize?: SortOrder
  }

  export type FileVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    contentId?: SortOrder
    version?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    fileHash?: SortOrder
    changes?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
  }

  export type FileVersionMinOrderByAggregateInput = {
    id?: SortOrder
    contentId?: SortOrder
    version?: SortOrder
    filePath?: SortOrder
    fileSize?: SortOrder
    fileHash?: SortOrder
    changes?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
  }

  export type FileVersionSumOrderByAggregateInput = {
    version?: SortOrder
    fileSize?: SortOrder
  }

  export type DisplayScalarRelationFilter = {
    is?: DisplayWhereInput
    isNot?: DisplayWhereInput
  }

  export type ErrorLogCountOrderByAggregateInput = {
    id?: SortOrder
    displayId?: SortOrder
    errorType?: SortOrder
    message?: SortOrder
    stack?: SortOrder
    metadata?: SortOrder
    userAgent?: SortOrder
    url?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type ErrorLogMaxOrderByAggregateInput = {
    id?: SortOrder
    displayId?: SortOrder
    errorType?: SortOrder
    message?: SortOrder
    stack?: SortOrder
    metadata?: SortOrder
    userAgent?: SortOrder
    url?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type ErrorLogMinOrderByAggregateInput = {
    id?: SortOrder
    displayId?: SortOrder
    errorType?: SortOrder
    message?: SortOrder
    stack?: SortOrder
    metadata?: SortOrder
    userAgent?: SortOrder
    url?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type ViewLogCountOrderByAggregateInput = {
    id?: SortOrder
    displayId?: SortOrder
    playlistId?: SortOrder
    contentId?: SortOrder
    viewedAt?: SortOrder
    duration?: SortOrder
    expectedDuration?: SortOrder
    completed?: SortOrder
    skipped?: SortOrder
  }

  export type ViewLogAvgOrderByAggregateInput = {
    duration?: SortOrder
    expectedDuration?: SortOrder
  }

  export type ViewLogMaxOrderByAggregateInput = {
    id?: SortOrder
    displayId?: SortOrder
    playlistId?: SortOrder
    contentId?: SortOrder
    viewedAt?: SortOrder
    duration?: SortOrder
    expectedDuration?: SortOrder
    completed?: SortOrder
    skipped?: SortOrder
  }

  export type ViewLogMinOrderByAggregateInput = {
    id?: SortOrder
    displayId?: SortOrder
    playlistId?: SortOrder
    contentId?: SortOrder
    viewedAt?: SortOrder
    duration?: SortOrder
    expectedDuration?: SortOrder
    completed?: SortOrder
    skipped?: SortOrder
  }

  export type ViewLogSumOrderByAggregateInput = {
    duration?: SortOrder
    expectedDuration?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAlertTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeFilter<$PrismaModel> | $Enums.AlertType
  }

  export type EnumAlertCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertCategory | EnumAlertCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AlertCategory[] | ListEnumAlertCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertCategory[] | ListEnumAlertCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertCategoryFilter<$PrismaModel> | $Enums.AlertCategory
  }

  export type DisplayNullableScalarRelationFilter = {
    is?: DisplayWhereInput | null
    isNot?: DisplayWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AlertCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    title?: SortOrder
    message?: SortOrder
    metadata?: SortOrder
    displayId?: SortOrder
    userId?: SortOrder
    resolved?: SortOrder
    resolvedAt?: SortOrder
    resolvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    title?: SortOrder
    message?: SortOrder
    displayId?: SortOrder
    userId?: SortOrder
    resolved?: SortOrder
    resolvedAt?: SortOrder
    resolvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    title?: SortOrder
    message?: SortOrder
    displayId?: SortOrder
    userId?: SortOrder
    resolved?: SortOrder
    resolvedAt?: SortOrder
    resolvedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAlertTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlertType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertTypeFilter<$PrismaModel>
    _max?: NestedEnumAlertTypeFilter<$PrismaModel>
  }

  export type EnumAlertCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertCategory | EnumAlertCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AlertCategory[] | ListEnumAlertCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertCategory[] | ListEnumAlertCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertCategoryWithAggregatesFilter<$PrismaModel> | $Enums.AlertCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertCategoryFilter<$PrismaModel>
    _max?: NestedEnumAlertCategoryFilter<$PrismaModel>
  }

  export type UserCreatepermissionsInput = {
    set: $Enums.Permission[]
  }

  export type ContentCreateNestedManyWithoutUploadedByUserInput = {
    create?: XOR<ContentCreateWithoutUploadedByUserInput, ContentUncheckedCreateWithoutUploadedByUserInput> | ContentCreateWithoutUploadedByUserInput[] | ContentUncheckedCreateWithoutUploadedByUserInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutUploadedByUserInput | ContentCreateOrConnectWithoutUploadedByUserInput[]
    createMany?: ContentCreateManyUploadedByUserInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type FileVersionCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<FileVersionCreateWithoutUploadedByInput, FileVersionUncheckedCreateWithoutUploadedByInput> | FileVersionCreateWithoutUploadedByInput[] | FileVersionUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: FileVersionCreateOrConnectWithoutUploadedByInput | FileVersionCreateOrConnectWithoutUploadedByInput[]
    createMany?: FileVersionCreateManyUploadedByInputEnvelope
    connect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
  }

  export type PlaylistCreateNestedManyWithoutCreatorInput = {
    create?: XOR<PlaylistCreateWithoutCreatorInput, PlaylistUncheckedCreateWithoutCreatorInput> | PlaylistCreateWithoutCreatorInput[] | PlaylistUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutCreatorInput | PlaylistCreateOrConnectWithoutCreatorInput[]
    createMany?: PlaylistCreateManyCreatorInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type PlaylistCreateNestedManyWithoutSharedWithInput = {
    create?: XOR<PlaylistCreateWithoutSharedWithInput, PlaylistUncheckedCreateWithoutSharedWithInput> | PlaylistCreateWithoutSharedWithInput[] | PlaylistUncheckedCreateWithoutSharedWithInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutSharedWithInput | PlaylistCreateOrConnectWithoutSharedWithInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type AlertCreateNestedManyWithoutUserInput = {
    create?: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput> | AlertCreateWithoutUserInput[] | AlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutUserInput | AlertCreateOrConnectWithoutUserInput[]
    createMany?: AlertCreateManyUserInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type ContentUncheckedCreateNestedManyWithoutUploadedByUserInput = {
    create?: XOR<ContentCreateWithoutUploadedByUserInput, ContentUncheckedCreateWithoutUploadedByUserInput> | ContentCreateWithoutUploadedByUserInput[] | ContentUncheckedCreateWithoutUploadedByUserInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutUploadedByUserInput | ContentCreateOrConnectWithoutUploadedByUserInput[]
    createMany?: ContentCreateManyUploadedByUserInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type FileVersionUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<FileVersionCreateWithoutUploadedByInput, FileVersionUncheckedCreateWithoutUploadedByInput> | FileVersionCreateWithoutUploadedByInput[] | FileVersionUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: FileVersionCreateOrConnectWithoutUploadedByInput | FileVersionCreateOrConnectWithoutUploadedByInput[]
    createMany?: FileVersionCreateManyUploadedByInputEnvelope
    connect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
  }

  export type PlaylistUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<PlaylistCreateWithoutCreatorInput, PlaylistUncheckedCreateWithoutCreatorInput> | PlaylistCreateWithoutCreatorInput[] | PlaylistUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutCreatorInput | PlaylistCreateOrConnectWithoutCreatorInput[]
    createMany?: PlaylistCreateManyCreatorInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type PlaylistUncheckedCreateNestedManyWithoutSharedWithInput = {
    create?: XOR<PlaylistCreateWithoutSharedWithInput, PlaylistUncheckedCreateWithoutSharedWithInput> | PlaylistCreateWithoutSharedWithInput[] | PlaylistUncheckedCreateWithoutSharedWithInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutSharedWithInput | PlaylistCreateOrConnectWithoutSharedWithInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput> | AlertCreateWithoutUserInput[] | AlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutUserInput | AlertCreateOrConnectWithoutUserInput[]
    createMany?: AlertCreateManyUserInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type UserUpdatepermissionsInput = {
    set?: $Enums.Permission[]
    push?: $Enums.Permission | $Enums.Permission[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ContentUpdateManyWithoutUploadedByUserNestedInput = {
    create?: XOR<ContentCreateWithoutUploadedByUserInput, ContentUncheckedCreateWithoutUploadedByUserInput> | ContentCreateWithoutUploadedByUserInput[] | ContentUncheckedCreateWithoutUploadedByUserInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutUploadedByUserInput | ContentCreateOrConnectWithoutUploadedByUserInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutUploadedByUserInput | ContentUpsertWithWhereUniqueWithoutUploadedByUserInput[]
    createMany?: ContentCreateManyUploadedByUserInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutUploadedByUserInput | ContentUpdateWithWhereUniqueWithoutUploadedByUserInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutUploadedByUserInput | ContentUpdateManyWithWhereWithoutUploadedByUserInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type FileVersionUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<FileVersionCreateWithoutUploadedByInput, FileVersionUncheckedCreateWithoutUploadedByInput> | FileVersionCreateWithoutUploadedByInput[] | FileVersionUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: FileVersionCreateOrConnectWithoutUploadedByInput | FileVersionCreateOrConnectWithoutUploadedByInput[]
    upsert?: FileVersionUpsertWithWhereUniqueWithoutUploadedByInput | FileVersionUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: FileVersionCreateManyUploadedByInputEnvelope
    set?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    disconnect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    delete?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    connect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    update?: FileVersionUpdateWithWhereUniqueWithoutUploadedByInput | FileVersionUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: FileVersionUpdateManyWithWhereWithoutUploadedByInput | FileVersionUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: FileVersionScalarWhereInput | FileVersionScalarWhereInput[]
  }

  export type PlaylistUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<PlaylistCreateWithoutCreatorInput, PlaylistUncheckedCreateWithoutCreatorInput> | PlaylistCreateWithoutCreatorInput[] | PlaylistUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutCreatorInput | PlaylistCreateOrConnectWithoutCreatorInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutCreatorInput | PlaylistUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: PlaylistCreateManyCreatorInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutCreatorInput | PlaylistUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutCreatorInput | PlaylistUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type PlaylistUpdateManyWithoutSharedWithNestedInput = {
    create?: XOR<PlaylistCreateWithoutSharedWithInput, PlaylistUncheckedCreateWithoutSharedWithInput> | PlaylistCreateWithoutSharedWithInput[] | PlaylistUncheckedCreateWithoutSharedWithInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutSharedWithInput | PlaylistCreateOrConnectWithoutSharedWithInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutSharedWithInput | PlaylistUpsertWithWhereUniqueWithoutSharedWithInput[]
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutSharedWithInput | PlaylistUpdateWithWhereUniqueWithoutSharedWithInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutSharedWithInput | PlaylistUpdateManyWithWhereWithoutSharedWithInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type AlertUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput> | AlertCreateWithoutUserInput[] | AlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutUserInput | AlertCreateOrConnectWithoutUserInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutUserInput | AlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlertCreateManyUserInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutUserInput | AlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutUserInput | AlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type ContentUncheckedUpdateManyWithoutUploadedByUserNestedInput = {
    create?: XOR<ContentCreateWithoutUploadedByUserInput, ContentUncheckedCreateWithoutUploadedByUserInput> | ContentCreateWithoutUploadedByUserInput[] | ContentUncheckedCreateWithoutUploadedByUserInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutUploadedByUserInput | ContentCreateOrConnectWithoutUploadedByUserInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutUploadedByUserInput | ContentUpsertWithWhereUniqueWithoutUploadedByUserInput[]
    createMany?: ContentCreateManyUploadedByUserInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutUploadedByUserInput | ContentUpdateWithWhereUniqueWithoutUploadedByUserInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutUploadedByUserInput | ContentUpdateManyWithWhereWithoutUploadedByUserInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type FileVersionUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<FileVersionCreateWithoutUploadedByInput, FileVersionUncheckedCreateWithoutUploadedByInput> | FileVersionCreateWithoutUploadedByInput[] | FileVersionUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: FileVersionCreateOrConnectWithoutUploadedByInput | FileVersionCreateOrConnectWithoutUploadedByInput[]
    upsert?: FileVersionUpsertWithWhereUniqueWithoutUploadedByInput | FileVersionUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: FileVersionCreateManyUploadedByInputEnvelope
    set?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    disconnect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    delete?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    connect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    update?: FileVersionUpdateWithWhereUniqueWithoutUploadedByInput | FileVersionUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: FileVersionUpdateManyWithWhereWithoutUploadedByInput | FileVersionUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: FileVersionScalarWhereInput | FileVersionScalarWhereInput[]
  }

  export type PlaylistUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<PlaylistCreateWithoutCreatorInput, PlaylistUncheckedCreateWithoutCreatorInput> | PlaylistCreateWithoutCreatorInput[] | PlaylistUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutCreatorInput | PlaylistCreateOrConnectWithoutCreatorInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutCreatorInput | PlaylistUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: PlaylistCreateManyCreatorInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutCreatorInput | PlaylistUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutCreatorInput | PlaylistUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type PlaylistUncheckedUpdateManyWithoutSharedWithNestedInput = {
    create?: XOR<PlaylistCreateWithoutSharedWithInput, PlaylistUncheckedCreateWithoutSharedWithInput> | PlaylistCreateWithoutSharedWithInput[] | PlaylistUncheckedCreateWithoutSharedWithInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutSharedWithInput | PlaylistCreateOrConnectWithoutSharedWithInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutSharedWithInput | PlaylistUpsertWithWhereUniqueWithoutSharedWithInput[]
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutSharedWithInput | PlaylistUpdateWithWhereUniqueWithoutSharedWithInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutSharedWithInput | PlaylistUpdateManyWithWhereWithoutSharedWithInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput> | AlertCreateWithoutUserInput[] | AlertUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutUserInput | AlertCreateOrConnectWithoutUserInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutUserInput | AlertUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlertCreateManyUserInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutUserInput | AlertUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutUserInput | AlertUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutContentInput = {
    create?: XOR<UserCreateWithoutContentInput, UserUncheckedCreateWithoutContentInput>
    connectOrCreate?: UserCreateOrConnectWithoutContentInput
    connect?: UserWhereUniqueInput
  }

  export type FileThumbnailCreateNestedManyWithoutContentInput = {
    create?: XOR<FileThumbnailCreateWithoutContentInput, FileThumbnailUncheckedCreateWithoutContentInput> | FileThumbnailCreateWithoutContentInput[] | FileThumbnailUncheckedCreateWithoutContentInput[]
    connectOrCreate?: FileThumbnailCreateOrConnectWithoutContentInput | FileThumbnailCreateOrConnectWithoutContentInput[]
    createMany?: FileThumbnailCreateManyContentInputEnvelope
    connect?: FileThumbnailWhereUniqueInput | FileThumbnailWhereUniqueInput[]
  }

  export type FileVersionCreateNestedManyWithoutContentInput = {
    create?: XOR<FileVersionCreateWithoutContentInput, FileVersionUncheckedCreateWithoutContentInput> | FileVersionCreateWithoutContentInput[] | FileVersionUncheckedCreateWithoutContentInput[]
    connectOrCreate?: FileVersionCreateOrConnectWithoutContentInput | FileVersionCreateOrConnectWithoutContentInput[]
    createMany?: FileVersionCreateManyContentInputEnvelope
    connect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
  }

  export type PlaylistItemCreateNestedManyWithoutContentInput = {
    create?: XOR<PlaylistItemCreateWithoutContentInput, PlaylistItemUncheckedCreateWithoutContentInput> | PlaylistItemCreateWithoutContentInput[] | PlaylistItemUncheckedCreateWithoutContentInput[]
    connectOrCreate?: PlaylistItemCreateOrConnectWithoutContentInput | PlaylistItemCreateOrConnectWithoutContentInput[]
    createMany?: PlaylistItemCreateManyContentInputEnvelope
    connect?: PlaylistItemWhereUniqueInput | PlaylistItemWhereUniqueInput[]
  }

  export type ViewLogCreateNestedManyWithoutContentInput = {
    create?: XOR<ViewLogCreateWithoutContentInput, ViewLogUncheckedCreateWithoutContentInput> | ViewLogCreateWithoutContentInput[] | ViewLogUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ViewLogCreateOrConnectWithoutContentInput | ViewLogCreateOrConnectWithoutContentInput[]
    createMany?: ViewLogCreateManyContentInputEnvelope
    connect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
  }

  export type FileThumbnailUncheckedCreateNestedManyWithoutContentInput = {
    create?: XOR<FileThumbnailCreateWithoutContentInput, FileThumbnailUncheckedCreateWithoutContentInput> | FileThumbnailCreateWithoutContentInput[] | FileThumbnailUncheckedCreateWithoutContentInput[]
    connectOrCreate?: FileThumbnailCreateOrConnectWithoutContentInput | FileThumbnailCreateOrConnectWithoutContentInput[]
    createMany?: FileThumbnailCreateManyContentInputEnvelope
    connect?: FileThumbnailWhereUniqueInput | FileThumbnailWhereUniqueInput[]
  }

  export type FileVersionUncheckedCreateNestedManyWithoutContentInput = {
    create?: XOR<FileVersionCreateWithoutContentInput, FileVersionUncheckedCreateWithoutContentInput> | FileVersionCreateWithoutContentInput[] | FileVersionUncheckedCreateWithoutContentInput[]
    connectOrCreate?: FileVersionCreateOrConnectWithoutContentInput | FileVersionCreateOrConnectWithoutContentInput[]
    createMany?: FileVersionCreateManyContentInputEnvelope
    connect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
  }

  export type PlaylistItemUncheckedCreateNestedManyWithoutContentInput = {
    create?: XOR<PlaylistItemCreateWithoutContentInput, PlaylistItemUncheckedCreateWithoutContentInput> | PlaylistItemCreateWithoutContentInput[] | PlaylistItemUncheckedCreateWithoutContentInput[]
    connectOrCreate?: PlaylistItemCreateOrConnectWithoutContentInput | PlaylistItemCreateOrConnectWithoutContentInput[]
    createMany?: PlaylistItemCreateManyContentInputEnvelope
    connect?: PlaylistItemWhereUniqueInput | PlaylistItemWhereUniqueInput[]
  }

  export type ViewLogUncheckedCreateNestedManyWithoutContentInput = {
    create?: XOR<ViewLogCreateWithoutContentInput, ViewLogUncheckedCreateWithoutContentInput> | ViewLogCreateWithoutContentInput[] | ViewLogUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ViewLogCreateOrConnectWithoutContentInput | ViewLogCreateOrConnectWithoutContentInput[]
    createMany?: ViewLogCreateManyContentInputEnvelope
    connect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
  }

  export type EnumContentTypeFieldUpdateOperationsInput = {
    set?: $Enums.ContentType
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumProcessingStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProcessingStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutContentNestedInput = {
    create?: XOR<UserCreateWithoutContentInput, UserUncheckedCreateWithoutContentInput>
    connectOrCreate?: UserCreateOrConnectWithoutContentInput
    upsert?: UserUpsertWithoutContentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContentInput, UserUpdateWithoutContentInput>, UserUncheckedUpdateWithoutContentInput>
  }

  export type FileThumbnailUpdateManyWithoutContentNestedInput = {
    create?: XOR<FileThumbnailCreateWithoutContentInput, FileThumbnailUncheckedCreateWithoutContentInput> | FileThumbnailCreateWithoutContentInput[] | FileThumbnailUncheckedCreateWithoutContentInput[]
    connectOrCreate?: FileThumbnailCreateOrConnectWithoutContentInput | FileThumbnailCreateOrConnectWithoutContentInput[]
    upsert?: FileThumbnailUpsertWithWhereUniqueWithoutContentInput | FileThumbnailUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: FileThumbnailCreateManyContentInputEnvelope
    set?: FileThumbnailWhereUniqueInput | FileThumbnailWhereUniqueInput[]
    disconnect?: FileThumbnailWhereUniqueInput | FileThumbnailWhereUniqueInput[]
    delete?: FileThumbnailWhereUniqueInput | FileThumbnailWhereUniqueInput[]
    connect?: FileThumbnailWhereUniqueInput | FileThumbnailWhereUniqueInput[]
    update?: FileThumbnailUpdateWithWhereUniqueWithoutContentInput | FileThumbnailUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: FileThumbnailUpdateManyWithWhereWithoutContentInput | FileThumbnailUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: FileThumbnailScalarWhereInput | FileThumbnailScalarWhereInput[]
  }

  export type FileVersionUpdateManyWithoutContentNestedInput = {
    create?: XOR<FileVersionCreateWithoutContentInput, FileVersionUncheckedCreateWithoutContentInput> | FileVersionCreateWithoutContentInput[] | FileVersionUncheckedCreateWithoutContentInput[]
    connectOrCreate?: FileVersionCreateOrConnectWithoutContentInput | FileVersionCreateOrConnectWithoutContentInput[]
    upsert?: FileVersionUpsertWithWhereUniqueWithoutContentInput | FileVersionUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: FileVersionCreateManyContentInputEnvelope
    set?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    disconnect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    delete?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    connect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    update?: FileVersionUpdateWithWhereUniqueWithoutContentInput | FileVersionUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: FileVersionUpdateManyWithWhereWithoutContentInput | FileVersionUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: FileVersionScalarWhereInput | FileVersionScalarWhereInput[]
  }

  export type PlaylistItemUpdateManyWithoutContentNestedInput = {
    create?: XOR<PlaylistItemCreateWithoutContentInput, PlaylistItemUncheckedCreateWithoutContentInput> | PlaylistItemCreateWithoutContentInput[] | PlaylistItemUncheckedCreateWithoutContentInput[]
    connectOrCreate?: PlaylistItemCreateOrConnectWithoutContentInput | PlaylistItemCreateOrConnectWithoutContentInput[]
    upsert?: PlaylistItemUpsertWithWhereUniqueWithoutContentInput | PlaylistItemUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: PlaylistItemCreateManyContentInputEnvelope
    set?: PlaylistItemWhereUniqueInput | PlaylistItemWhereUniqueInput[]
    disconnect?: PlaylistItemWhereUniqueInput | PlaylistItemWhereUniqueInput[]
    delete?: PlaylistItemWhereUniqueInput | PlaylistItemWhereUniqueInput[]
    connect?: PlaylistItemWhereUniqueInput | PlaylistItemWhereUniqueInput[]
    update?: PlaylistItemUpdateWithWhereUniqueWithoutContentInput | PlaylistItemUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: PlaylistItemUpdateManyWithWhereWithoutContentInput | PlaylistItemUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: PlaylistItemScalarWhereInput | PlaylistItemScalarWhereInput[]
  }

  export type ViewLogUpdateManyWithoutContentNestedInput = {
    create?: XOR<ViewLogCreateWithoutContentInput, ViewLogUncheckedCreateWithoutContentInput> | ViewLogCreateWithoutContentInput[] | ViewLogUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ViewLogCreateOrConnectWithoutContentInput | ViewLogCreateOrConnectWithoutContentInput[]
    upsert?: ViewLogUpsertWithWhereUniqueWithoutContentInput | ViewLogUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: ViewLogCreateManyContentInputEnvelope
    set?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    disconnect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    delete?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    connect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    update?: ViewLogUpdateWithWhereUniqueWithoutContentInput | ViewLogUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: ViewLogUpdateManyWithWhereWithoutContentInput | ViewLogUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: ViewLogScalarWhereInput | ViewLogScalarWhereInput[]
  }

  export type FileThumbnailUncheckedUpdateManyWithoutContentNestedInput = {
    create?: XOR<FileThumbnailCreateWithoutContentInput, FileThumbnailUncheckedCreateWithoutContentInput> | FileThumbnailCreateWithoutContentInput[] | FileThumbnailUncheckedCreateWithoutContentInput[]
    connectOrCreate?: FileThumbnailCreateOrConnectWithoutContentInput | FileThumbnailCreateOrConnectWithoutContentInput[]
    upsert?: FileThumbnailUpsertWithWhereUniqueWithoutContentInput | FileThumbnailUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: FileThumbnailCreateManyContentInputEnvelope
    set?: FileThumbnailWhereUniqueInput | FileThumbnailWhereUniqueInput[]
    disconnect?: FileThumbnailWhereUniqueInput | FileThumbnailWhereUniqueInput[]
    delete?: FileThumbnailWhereUniqueInput | FileThumbnailWhereUniqueInput[]
    connect?: FileThumbnailWhereUniqueInput | FileThumbnailWhereUniqueInput[]
    update?: FileThumbnailUpdateWithWhereUniqueWithoutContentInput | FileThumbnailUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: FileThumbnailUpdateManyWithWhereWithoutContentInput | FileThumbnailUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: FileThumbnailScalarWhereInput | FileThumbnailScalarWhereInput[]
  }

  export type FileVersionUncheckedUpdateManyWithoutContentNestedInput = {
    create?: XOR<FileVersionCreateWithoutContentInput, FileVersionUncheckedCreateWithoutContentInput> | FileVersionCreateWithoutContentInput[] | FileVersionUncheckedCreateWithoutContentInput[]
    connectOrCreate?: FileVersionCreateOrConnectWithoutContentInput | FileVersionCreateOrConnectWithoutContentInput[]
    upsert?: FileVersionUpsertWithWhereUniqueWithoutContentInput | FileVersionUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: FileVersionCreateManyContentInputEnvelope
    set?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    disconnect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    delete?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    connect?: FileVersionWhereUniqueInput | FileVersionWhereUniqueInput[]
    update?: FileVersionUpdateWithWhereUniqueWithoutContentInput | FileVersionUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: FileVersionUpdateManyWithWhereWithoutContentInput | FileVersionUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: FileVersionScalarWhereInput | FileVersionScalarWhereInput[]
  }

  export type PlaylistItemUncheckedUpdateManyWithoutContentNestedInput = {
    create?: XOR<PlaylistItemCreateWithoutContentInput, PlaylistItemUncheckedCreateWithoutContentInput> | PlaylistItemCreateWithoutContentInput[] | PlaylistItemUncheckedCreateWithoutContentInput[]
    connectOrCreate?: PlaylistItemCreateOrConnectWithoutContentInput | PlaylistItemCreateOrConnectWithoutContentInput[]
    upsert?: PlaylistItemUpsertWithWhereUniqueWithoutContentInput | PlaylistItemUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: PlaylistItemCreateManyContentInputEnvelope
    set?: PlaylistItemWhereUniqueInput | PlaylistItemWhereUniqueInput[]
    disconnect?: PlaylistItemWhereUniqueInput | PlaylistItemWhereUniqueInput[]
    delete?: PlaylistItemWhereUniqueInput | PlaylistItemWhereUniqueInput[]
    connect?: PlaylistItemWhereUniqueInput | PlaylistItemWhereUniqueInput[]
    update?: PlaylistItemUpdateWithWhereUniqueWithoutContentInput | PlaylistItemUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: PlaylistItemUpdateManyWithWhereWithoutContentInput | PlaylistItemUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: PlaylistItemScalarWhereInput | PlaylistItemScalarWhereInput[]
  }

  export type ViewLogUncheckedUpdateManyWithoutContentNestedInput = {
    create?: XOR<ViewLogCreateWithoutContentInput, ViewLogUncheckedCreateWithoutContentInput> | ViewLogCreateWithoutContentInput[] | ViewLogUncheckedCreateWithoutContentInput[]
    connectOrCreate?: ViewLogCreateOrConnectWithoutContentInput | ViewLogCreateOrConnectWithoutContentInput[]
    upsert?: ViewLogUpsertWithWhereUniqueWithoutContentInput | ViewLogUpsertWithWhereUniqueWithoutContentInput[]
    createMany?: ViewLogCreateManyContentInputEnvelope
    set?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    disconnect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    delete?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    connect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    update?: ViewLogUpdateWithWhereUniqueWithoutContentInput | ViewLogUpdateWithWhereUniqueWithoutContentInput[]
    updateMany?: ViewLogUpdateManyWithWhereWithoutContentInput | ViewLogUpdateManyWithWhereWithoutContentInput[]
    deleteMany?: ViewLogScalarWhereInput | ViewLogScalarWhereInput[]
  }

  export type DisplayCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<DisplayCreateWithoutPlaylistInput, DisplayUncheckedCreateWithoutPlaylistInput> | DisplayCreateWithoutPlaylistInput[] | DisplayUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: DisplayCreateOrConnectWithoutPlaylistInput | DisplayCreateOrConnectWithoutPlaylistInput[]
    createMany?: DisplayCreateManyPlaylistInputEnvelope
    connect?: DisplayWhereUniqueInput | DisplayWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutPlaylistsInput = {
    create?: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput
    connect?: UserWhereUniqueInput
  }

  export type PlaylistItemCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<PlaylistItemCreateWithoutPlaylistInput, PlaylistItemUncheckedCreateWithoutPlaylistInput> | PlaylistItemCreateWithoutPlaylistInput[] | PlaylistItemUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistItemCreateOrConnectWithoutPlaylistInput | PlaylistItemCreateOrConnectWithoutPlaylistInput[]
    createMany?: PlaylistItemCreateManyPlaylistInputEnvelope
    connect?: PlaylistItemWhereUniqueInput | PlaylistItemWhereUniqueInput[]
  }

  export type ViewLogCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<ViewLogCreateWithoutPlaylistInput, ViewLogUncheckedCreateWithoutPlaylistInput> | ViewLogCreateWithoutPlaylistInput[] | ViewLogUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: ViewLogCreateOrConnectWithoutPlaylistInput | ViewLogCreateOrConnectWithoutPlaylistInput[]
    createMany?: ViewLogCreateManyPlaylistInputEnvelope
    connect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
  }

  export type TagCreateNestedManyWithoutPlaylistsInput = {
    create?: XOR<TagCreateWithoutPlaylistsInput, TagUncheckedCreateWithoutPlaylistsInput> | TagCreateWithoutPlaylistsInput[] | TagUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPlaylistsInput | TagCreateOrConnectWithoutPlaylistsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutSharedPlaylistsInput = {
    create?: XOR<UserCreateWithoutSharedPlaylistsInput, UserUncheckedCreateWithoutSharedPlaylistsInput> | UserCreateWithoutSharedPlaylistsInput[] | UserUncheckedCreateWithoutSharedPlaylistsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSharedPlaylistsInput | UserCreateOrConnectWithoutSharedPlaylistsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DisplayUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<DisplayCreateWithoutPlaylistInput, DisplayUncheckedCreateWithoutPlaylistInput> | DisplayCreateWithoutPlaylistInput[] | DisplayUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: DisplayCreateOrConnectWithoutPlaylistInput | DisplayCreateOrConnectWithoutPlaylistInput[]
    createMany?: DisplayCreateManyPlaylistInputEnvelope
    connect?: DisplayWhereUniqueInput | DisplayWhereUniqueInput[]
  }

  export type PlaylistItemUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<PlaylistItemCreateWithoutPlaylistInput, PlaylistItemUncheckedCreateWithoutPlaylistInput> | PlaylistItemCreateWithoutPlaylistInput[] | PlaylistItemUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistItemCreateOrConnectWithoutPlaylistInput | PlaylistItemCreateOrConnectWithoutPlaylistInput[]
    createMany?: PlaylistItemCreateManyPlaylistInputEnvelope
    connect?: PlaylistItemWhereUniqueInput | PlaylistItemWhereUniqueInput[]
  }

  export type ViewLogUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<ViewLogCreateWithoutPlaylistInput, ViewLogUncheckedCreateWithoutPlaylistInput> | ViewLogCreateWithoutPlaylistInput[] | ViewLogUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: ViewLogCreateOrConnectWithoutPlaylistInput | ViewLogCreateOrConnectWithoutPlaylistInput[]
    createMany?: ViewLogCreateManyPlaylistInputEnvelope
    connect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutPlaylistsInput = {
    create?: XOR<TagCreateWithoutPlaylistsInput, TagUncheckedCreateWithoutPlaylistsInput> | TagCreateWithoutPlaylistsInput[] | TagUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPlaylistsInput | TagCreateOrConnectWithoutPlaylistsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutSharedPlaylistsInput = {
    create?: XOR<UserCreateWithoutSharedPlaylistsInput, UserUncheckedCreateWithoutSharedPlaylistsInput> | UserCreateWithoutSharedPlaylistsInput[] | UserUncheckedCreateWithoutSharedPlaylistsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSharedPlaylistsInput | UserCreateOrConnectWithoutSharedPlaylistsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DisplayUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<DisplayCreateWithoutPlaylistInput, DisplayUncheckedCreateWithoutPlaylistInput> | DisplayCreateWithoutPlaylistInput[] | DisplayUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: DisplayCreateOrConnectWithoutPlaylistInput | DisplayCreateOrConnectWithoutPlaylistInput[]
    upsert?: DisplayUpsertWithWhereUniqueWithoutPlaylistInput | DisplayUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: DisplayCreateManyPlaylistInputEnvelope
    set?: DisplayWhereUniqueInput | DisplayWhereUniqueInput[]
    disconnect?: DisplayWhereUniqueInput | DisplayWhereUniqueInput[]
    delete?: DisplayWhereUniqueInput | DisplayWhereUniqueInput[]
    connect?: DisplayWhereUniqueInput | DisplayWhereUniqueInput[]
    update?: DisplayUpdateWithWhereUniqueWithoutPlaylistInput | DisplayUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: DisplayUpdateManyWithWhereWithoutPlaylistInput | DisplayUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: DisplayScalarWhereInput | DisplayScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutPlaylistsNestedInput = {
    create?: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistsInput
    upsert?: UserUpsertWithoutPlaylistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlaylistsInput, UserUpdateWithoutPlaylistsInput>, UserUncheckedUpdateWithoutPlaylistsInput>
  }

  export type PlaylistItemUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<PlaylistItemCreateWithoutPlaylistInput, PlaylistItemUncheckedCreateWithoutPlaylistInput> | PlaylistItemCreateWithoutPlaylistInput[] | PlaylistItemUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistItemCreateOrConnectWithoutPlaylistInput | PlaylistItemCreateOrConnectWithoutPlaylistInput[]
    upsert?: PlaylistItemUpsertWithWhereUniqueWithoutPlaylistInput | PlaylistItemUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: PlaylistItemCreateManyPlaylistInputEnvelope
    set?: PlaylistItemWhereUniqueInput | PlaylistItemWhereUniqueInput[]
    disconnect?: PlaylistItemWhereUniqueInput | PlaylistItemWhereUniqueInput[]
    delete?: PlaylistItemWhereUniqueInput | PlaylistItemWhereUniqueInput[]
    connect?: PlaylistItemWhereUniqueInput | PlaylistItemWhereUniqueInput[]
    update?: PlaylistItemUpdateWithWhereUniqueWithoutPlaylistInput | PlaylistItemUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: PlaylistItemUpdateManyWithWhereWithoutPlaylistInput | PlaylistItemUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: PlaylistItemScalarWhereInput | PlaylistItemScalarWhereInput[]
  }

  export type ViewLogUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<ViewLogCreateWithoutPlaylistInput, ViewLogUncheckedCreateWithoutPlaylistInput> | ViewLogCreateWithoutPlaylistInput[] | ViewLogUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: ViewLogCreateOrConnectWithoutPlaylistInput | ViewLogCreateOrConnectWithoutPlaylistInput[]
    upsert?: ViewLogUpsertWithWhereUniqueWithoutPlaylistInput | ViewLogUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: ViewLogCreateManyPlaylistInputEnvelope
    set?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    disconnect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    delete?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    connect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    update?: ViewLogUpdateWithWhereUniqueWithoutPlaylistInput | ViewLogUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: ViewLogUpdateManyWithWhereWithoutPlaylistInput | ViewLogUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: ViewLogScalarWhereInput | ViewLogScalarWhereInput[]
  }

  export type TagUpdateManyWithoutPlaylistsNestedInput = {
    create?: XOR<TagCreateWithoutPlaylistsInput, TagUncheckedCreateWithoutPlaylistsInput> | TagCreateWithoutPlaylistsInput[] | TagUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPlaylistsInput | TagCreateOrConnectWithoutPlaylistsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutPlaylistsInput | TagUpsertWithWhereUniqueWithoutPlaylistsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutPlaylistsInput | TagUpdateWithWhereUniqueWithoutPlaylistsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutPlaylistsInput | TagUpdateManyWithWhereWithoutPlaylistsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type UserUpdateManyWithoutSharedPlaylistsNestedInput = {
    create?: XOR<UserCreateWithoutSharedPlaylistsInput, UserUncheckedCreateWithoutSharedPlaylistsInput> | UserCreateWithoutSharedPlaylistsInput[] | UserUncheckedCreateWithoutSharedPlaylistsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSharedPlaylistsInput | UserCreateOrConnectWithoutSharedPlaylistsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSharedPlaylistsInput | UserUpsertWithWhereUniqueWithoutSharedPlaylistsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSharedPlaylistsInput | UserUpdateWithWhereUniqueWithoutSharedPlaylistsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSharedPlaylistsInput | UserUpdateManyWithWhereWithoutSharedPlaylistsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DisplayUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<DisplayCreateWithoutPlaylistInput, DisplayUncheckedCreateWithoutPlaylistInput> | DisplayCreateWithoutPlaylistInput[] | DisplayUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: DisplayCreateOrConnectWithoutPlaylistInput | DisplayCreateOrConnectWithoutPlaylistInput[]
    upsert?: DisplayUpsertWithWhereUniqueWithoutPlaylistInput | DisplayUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: DisplayCreateManyPlaylistInputEnvelope
    set?: DisplayWhereUniqueInput | DisplayWhereUniqueInput[]
    disconnect?: DisplayWhereUniqueInput | DisplayWhereUniqueInput[]
    delete?: DisplayWhereUniqueInput | DisplayWhereUniqueInput[]
    connect?: DisplayWhereUniqueInput | DisplayWhereUniqueInput[]
    update?: DisplayUpdateWithWhereUniqueWithoutPlaylistInput | DisplayUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: DisplayUpdateManyWithWhereWithoutPlaylistInput | DisplayUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: DisplayScalarWhereInput | DisplayScalarWhereInput[]
  }

  export type PlaylistItemUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<PlaylistItemCreateWithoutPlaylistInput, PlaylistItemUncheckedCreateWithoutPlaylistInput> | PlaylistItemCreateWithoutPlaylistInput[] | PlaylistItemUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistItemCreateOrConnectWithoutPlaylistInput | PlaylistItemCreateOrConnectWithoutPlaylistInput[]
    upsert?: PlaylistItemUpsertWithWhereUniqueWithoutPlaylistInput | PlaylistItemUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: PlaylistItemCreateManyPlaylistInputEnvelope
    set?: PlaylistItemWhereUniqueInput | PlaylistItemWhereUniqueInput[]
    disconnect?: PlaylistItemWhereUniqueInput | PlaylistItemWhereUniqueInput[]
    delete?: PlaylistItemWhereUniqueInput | PlaylistItemWhereUniqueInput[]
    connect?: PlaylistItemWhereUniqueInput | PlaylistItemWhereUniqueInput[]
    update?: PlaylistItemUpdateWithWhereUniqueWithoutPlaylistInput | PlaylistItemUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: PlaylistItemUpdateManyWithWhereWithoutPlaylistInput | PlaylistItemUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: PlaylistItemScalarWhereInput | PlaylistItemScalarWhereInput[]
  }

  export type ViewLogUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<ViewLogCreateWithoutPlaylistInput, ViewLogUncheckedCreateWithoutPlaylistInput> | ViewLogCreateWithoutPlaylistInput[] | ViewLogUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: ViewLogCreateOrConnectWithoutPlaylistInput | ViewLogCreateOrConnectWithoutPlaylistInput[]
    upsert?: ViewLogUpsertWithWhereUniqueWithoutPlaylistInput | ViewLogUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: ViewLogCreateManyPlaylistInputEnvelope
    set?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    disconnect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    delete?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    connect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    update?: ViewLogUpdateWithWhereUniqueWithoutPlaylistInput | ViewLogUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: ViewLogUpdateManyWithWhereWithoutPlaylistInput | ViewLogUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: ViewLogScalarWhereInput | ViewLogScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutPlaylistsNestedInput = {
    create?: XOR<TagCreateWithoutPlaylistsInput, TagUncheckedCreateWithoutPlaylistsInput> | TagCreateWithoutPlaylistsInput[] | TagUncheckedCreateWithoutPlaylistsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutPlaylistsInput | TagCreateOrConnectWithoutPlaylistsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutPlaylistsInput | TagUpsertWithWhereUniqueWithoutPlaylistsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutPlaylistsInput | TagUpdateWithWhereUniqueWithoutPlaylistsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutPlaylistsInput | TagUpdateManyWithWhereWithoutPlaylistsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutSharedPlaylistsNestedInput = {
    create?: XOR<UserCreateWithoutSharedPlaylistsInput, UserUncheckedCreateWithoutSharedPlaylistsInput> | UserCreateWithoutSharedPlaylistsInput[] | UserUncheckedCreateWithoutSharedPlaylistsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSharedPlaylistsInput | UserCreateOrConnectWithoutSharedPlaylistsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSharedPlaylistsInput | UserUpsertWithWhereUniqueWithoutSharedPlaylistsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSharedPlaylistsInput | UserUpdateWithWhereUniqueWithoutSharedPlaylistsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSharedPlaylistsInput | UserUpdateManyWithWhereWithoutSharedPlaylistsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ContentCreateNestedOneWithoutPlaylistItemsInput = {
    create?: XOR<ContentCreateWithoutPlaylistItemsInput, ContentUncheckedCreateWithoutPlaylistItemsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutPlaylistItemsInput
    connect?: ContentWhereUniqueInput
  }

  export type PlaylistCreateNestedOneWithoutItemsInput = {
    create?: XOR<PlaylistCreateWithoutItemsInput, PlaylistUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutItemsInput
    connect?: PlaylistWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTransitionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransitionType
  }

  export type ContentUpdateOneRequiredWithoutPlaylistItemsNestedInput = {
    create?: XOR<ContentCreateWithoutPlaylistItemsInput, ContentUncheckedCreateWithoutPlaylistItemsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutPlaylistItemsInput
    upsert?: ContentUpsertWithoutPlaylistItemsInput
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutPlaylistItemsInput, ContentUpdateWithoutPlaylistItemsInput>, ContentUncheckedUpdateWithoutPlaylistItemsInput>
  }

  export type PlaylistUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<PlaylistCreateWithoutItemsInput, PlaylistUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutItemsInput
    upsert?: PlaylistUpsertWithoutItemsInput
    connect?: PlaylistWhereUniqueInput
    update?: XOR<XOR<PlaylistUpdateToOneWithWhereWithoutItemsInput, PlaylistUpdateWithoutItemsInput>, PlaylistUncheckedUpdateWithoutItemsInput>
  }

  export type PlaylistCreateNestedOneWithoutDisplaysInput = {
    create?: XOR<PlaylistCreateWithoutDisplaysInput, PlaylistUncheckedCreateWithoutDisplaysInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutDisplaysInput
    connect?: PlaylistWhereUniqueInput
  }

  export type ErrorLogCreateNestedManyWithoutDisplayInput = {
    create?: XOR<ErrorLogCreateWithoutDisplayInput, ErrorLogUncheckedCreateWithoutDisplayInput> | ErrorLogCreateWithoutDisplayInput[] | ErrorLogUncheckedCreateWithoutDisplayInput[]
    connectOrCreate?: ErrorLogCreateOrConnectWithoutDisplayInput | ErrorLogCreateOrConnectWithoutDisplayInput[]
    createMany?: ErrorLogCreateManyDisplayInputEnvelope
    connect?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
  }

  export type ViewLogCreateNestedManyWithoutDisplayInput = {
    create?: XOR<ViewLogCreateWithoutDisplayInput, ViewLogUncheckedCreateWithoutDisplayInput> | ViewLogCreateWithoutDisplayInput[] | ViewLogUncheckedCreateWithoutDisplayInput[]
    connectOrCreate?: ViewLogCreateOrConnectWithoutDisplayInput | ViewLogCreateOrConnectWithoutDisplayInput[]
    createMany?: ViewLogCreateManyDisplayInputEnvelope
    connect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
  }

  export type AlertCreateNestedManyWithoutDisplayInput = {
    create?: XOR<AlertCreateWithoutDisplayInput, AlertUncheckedCreateWithoutDisplayInput> | AlertCreateWithoutDisplayInput[] | AlertUncheckedCreateWithoutDisplayInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutDisplayInput | AlertCreateOrConnectWithoutDisplayInput[]
    createMany?: AlertCreateManyDisplayInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type ErrorLogUncheckedCreateNestedManyWithoutDisplayInput = {
    create?: XOR<ErrorLogCreateWithoutDisplayInput, ErrorLogUncheckedCreateWithoutDisplayInput> | ErrorLogCreateWithoutDisplayInput[] | ErrorLogUncheckedCreateWithoutDisplayInput[]
    connectOrCreate?: ErrorLogCreateOrConnectWithoutDisplayInput | ErrorLogCreateOrConnectWithoutDisplayInput[]
    createMany?: ErrorLogCreateManyDisplayInputEnvelope
    connect?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
  }

  export type ViewLogUncheckedCreateNestedManyWithoutDisplayInput = {
    create?: XOR<ViewLogCreateWithoutDisplayInput, ViewLogUncheckedCreateWithoutDisplayInput> | ViewLogCreateWithoutDisplayInput[] | ViewLogUncheckedCreateWithoutDisplayInput[]
    connectOrCreate?: ViewLogCreateOrConnectWithoutDisplayInput | ViewLogCreateOrConnectWithoutDisplayInput[]
    createMany?: ViewLogCreateManyDisplayInputEnvelope
    connect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutDisplayInput = {
    create?: XOR<AlertCreateWithoutDisplayInput, AlertUncheckedCreateWithoutDisplayInput> | AlertCreateWithoutDisplayInput[] | AlertUncheckedCreateWithoutDisplayInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutDisplayInput | AlertCreateOrConnectWithoutDisplayInput[]
    createMany?: AlertCreateManyDisplayInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type EnumDisplayOrientationFieldUpdateOperationsInput = {
    set?: $Enums.DisplayOrientation
  }

  export type PlaylistUpdateOneWithoutDisplaysNestedInput = {
    create?: XOR<PlaylistCreateWithoutDisplaysInput, PlaylistUncheckedCreateWithoutDisplaysInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutDisplaysInput
    upsert?: PlaylistUpsertWithoutDisplaysInput
    disconnect?: PlaylistWhereInput | boolean
    delete?: PlaylistWhereInput | boolean
    connect?: PlaylistWhereUniqueInput
    update?: XOR<XOR<PlaylistUpdateToOneWithWhereWithoutDisplaysInput, PlaylistUpdateWithoutDisplaysInput>, PlaylistUncheckedUpdateWithoutDisplaysInput>
  }

  export type ErrorLogUpdateManyWithoutDisplayNestedInput = {
    create?: XOR<ErrorLogCreateWithoutDisplayInput, ErrorLogUncheckedCreateWithoutDisplayInput> | ErrorLogCreateWithoutDisplayInput[] | ErrorLogUncheckedCreateWithoutDisplayInput[]
    connectOrCreate?: ErrorLogCreateOrConnectWithoutDisplayInput | ErrorLogCreateOrConnectWithoutDisplayInput[]
    upsert?: ErrorLogUpsertWithWhereUniqueWithoutDisplayInput | ErrorLogUpsertWithWhereUniqueWithoutDisplayInput[]
    createMany?: ErrorLogCreateManyDisplayInputEnvelope
    set?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    disconnect?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    delete?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    connect?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    update?: ErrorLogUpdateWithWhereUniqueWithoutDisplayInput | ErrorLogUpdateWithWhereUniqueWithoutDisplayInput[]
    updateMany?: ErrorLogUpdateManyWithWhereWithoutDisplayInput | ErrorLogUpdateManyWithWhereWithoutDisplayInput[]
    deleteMany?: ErrorLogScalarWhereInput | ErrorLogScalarWhereInput[]
  }

  export type ViewLogUpdateManyWithoutDisplayNestedInput = {
    create?: XOR<ViewLogCreateWithoutDisplayInput, ViewLogUncheckedCreateWithoutDisplayInput> | ViewLogCreateWithoutDisplayInput[] | ViewLogUncheckedCreateWithoutDisplayInput[]
    connectOrCreate?: ViewLogCreateOrConnectWithoutDisplayInput | ViewLogCreateOrConnectWithoutDisplayInput[]
    upsert?: ViewLogUpsertWithWhereUniqueWithoutDisplayInput | ViewLogUpsertWithWhereUniqueWithoutDisplayInput[]
    createMany?: ViewLogCreateManyDisplayInputEnvelope
    set?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    disconnect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    delete?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    connect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    update?: ViewLogUpdateWithWhereUniqueWithoutDisplayInput | ViewLogUpdateWithWhereUniqueWithoutDisplayInput[]
    updateMany?: ViewLogUpdateManyWithWhereWithoutDisplayInput | ViewLogUpdateManyWithWhereWithoutDisplayInput[]
    deleteMany?: ViewLogScalarWhereInput | ViewLogScalarWhereInput[]
  }

  export type AlertUpdateManyWithoutDisplayNestedInput = {
    create?: XOR<AlertCreateWithoutDisplayInput, AlertUncheckedCreateWithoutDisplayInput> | AlertCreateWithoutDisplayInput[] | AlertUncheckedCreateWithoutDisplayInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutDisplayInput | AlertCreateOrConnectWithoutDisplayInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutDisplayInput | AlertUpsertWithWhereUniqueWithoutDisplayInput[]
    createMany?: AlertCreateManyDisplayInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutDisplayInput | AlertUpdateWithWhereUniqueWithoutDisplayInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutDisplayInput | AlertUpdateManyWithWhereWithoutDisplayInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type ErrorLogUncheckedUpdateManyWithoutDisplayNestedInput = {
    create?: XOR<ErrorLogCreateWithoutDisplayInput, ErrorLogUncheckedCreateWithoutDisplayInput> | ErrorLogCreateWithoutDisplayInput[] | ErrorLogUncheckedCreateWithoutDisplayInput[]
    connectOrCreate?: ErrorLogCreateOrConnectWithoutDisplayInput | ErrorLogCreateOrConnectWithoutDisplayInput[]
    upsert?: ErrorLogUpsertWithWhereUniqueWithoutDisplayInput | ErrorLogUpsertWithWhereUniqueWithoutDisplayInput[]
    createMany?: ErrorLogCreateManyDisplayInputEnvelope
    set?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    disconnect?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    delete?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    connect?: ErrorLogWhereUniqueInput | ErrorLogWhereUniqueInput[]
    update?: ErrorLogUpdateWithWhereUniqueWithoutDisplayInput | ErrorLogUpdateWithWhereUniqueWithoutDisplayInput[]
    updateMany?: ErrorLogUpdateManyWithWhereWithoutDisplayInput | ErrorLogUpdateManyWithWhereWithoutDisplayInput[]
    deleteMany?: ErrorLogScalarWhereInput | ErrorLogScalarWhereInput[]
  }

  export type ViewLogUncheckedUpdateManyWithoutDisplayNestedInput = {
    create?: XOR<ViewLogCreateWithoutDisplayInput, ViewLogUncheckedCreateWithoutDisplayInput> | ViewLogCreateWithoutDisplayInput[] | ViewLogUncheckedCreateWithoutDisplayInput[]
    connectOrCreate?: ViewLogCreateOrConnectWithoutDisplayInput | ViewLogCreateOrConnectWithoutDisplayInput[]
    upsert?: ViewLogUpsertWithWhereUniqueWithoutDisplayInput | ViewLogUpsertWithWhereUniqueWithoutDisplayInput[]
    createMany?: ViewLogCreateManyDisplayInputEnvelope
    set?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    disconnect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    delete?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    connect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    update?: ViewLogUpdateWithWhereUniqueWithoutDisplayInput | ViewLogUpdateWithWhereUniqueWithoutDisplayInput[]
    updateMany?: ViewLogUpdateManyWithWhereWithoutDisplayInput | ViewLogUpdateManyWithWhereWithoutDisplayInput[]
    deleteMany?: ViewLogScalarWhereInput | ViewLogScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutDisplayNestedInput = {
    create?: XOR<AlertCreateWithoutDisplayInput, AlertUncheckedCreateWithoutDisplayInput> | AlertCreateWithoutDisplayInput[] | AlertUncheckedCreateWithoutDisplayInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutDisplayInput | AlertCreateOrConnectWithoutDisplayInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutDisplayInput | AlertUpsertWithWhereUniqueWithoutDisplayInput[]
    createMany?: AlertCreateManyDisplayInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutDisplayInput | AlertUpdateWithWhereUniqueWithoutDisplayInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutDisplayInput | AlertUpdateManyWithWhereWithoutDisplayInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type ContentCreateNestedOneWithoutThumbnailsInput = {
    create?: XOR<ContentCreateWithoutThumbnailsInput, ContentUncheckedCreateWithoutThumbnailsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutThumbnailsInput
    connect?: ContentWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ContentUpdateOneRequiredWithoutThumbnailsNestedInput = {
    create?: XOR<ContentCreateWithoutThumbnailsInput, ContentUncheckedCreateWithoutThumbnailsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutThumbnailsInput
    upsert?: ContentUpsertWithoutThumbnailsInput
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutThumbnailsInput, ContentUpdateWithoutThumbnailsInput>, ContentUncheckedUpdateWithoutThumbnailsInput>
  }

  export type ContentCreateNestedOneWithoutVersionsInput = {
    create?: XOR<ContentCreateWithoutVersionsInput, ContentUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutVersionsInput
    connect?: ContentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFileVersionsInput = {
    create?: XOR<UserCreateWithoutFileVersionsInput, UserUncheckedCreateWithoutFileVersionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFileVersionsInput
    connect?: UserWhereUniqueInput
  }

  export type ContentUpdateOneRequiredWithoutVersionsNestedInput = {
    create?: XOR<ContentCreateWithoutVersionsInput, ContentUncheckedCreateWithoutVersionsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutVersionsInput
    upsert?: ContentUpsertWithoutVersionsInput
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutVersionsInput, ContentUpdateWithoutVersionsInput>, ContentUncheckedUpdateWithoutVersionsInput>
  }

  export type UserUpdateOneRequiredWithoutFileVersionsNestedInput = {
    create?: XOR<UserCreateWithoutFileVersionsInput, UserUncheckedCreateWithoutFileVersionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFileVersionsInput
    upsert?: UserUpsertWithoutFileVersionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFileVersionsInput, UserUpdateWithoutFileVersionsInput>, UserUncheckedUpdateWithoutFileVersionsInput>
  }

  export type DisplayCreateNestedOneWithoutErrorLogsInput = {
    create?: XOR<DisplayCreateWithoutErrorLogsInput, DisplayUncheckedCreateWithoutErrorLogsInput>
    connectOrCreate?: DisplayCreateOrConnectWithoutErrorLogsInput
    connect?: DisplayWhereUniqueInput
  }

  export type DisplayUpdateOneRequiredWithoutErrorLogsNestedInput = {
    create?: XOR<DisplayCreateWithoutErrorLogsInput, DisplayUncheckedCreateWithoutErrorLogsInput>
    connectOrCreate?: DisplayCreateOrConnectWithoutErrorLogsInput
    upsert?: DisplayUpsertWithoutErrorLogsInput
    connect?: DisplayWhereUniqueInput
    update?: XOR<XOR<DisplayUpdateToOneWithWhereWithoutErrorLogsInput, DisplayUpdateWithoutErrorLogsInput>, DisplayUncheckedUpdateWithoutErrorLogsInput>
  }

  export type ContentCreateNestedOneWithoutViewLogsInput = {
    create?: XOR<ContentCreateWithoutViewLogsInput, ContentUncheckedCreateWithoutViewLogsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutViewLogsInput
    connect?: ContentWhereUniqueInput
  }

  export type DisplayCreateNestedOneWithoutViewLogsInput = {
    create?: XOR<DisplayCreateWithoutViewLogsInput, DisplayUncheckedCreateWithoutViewLogsInput>
    connectOrCreate?: DisplayCreateOrConnectWithoutViewLogsInput
    connect?: DisplayWhereUniqueInput
  }

  export type PlaylistCreateNestedOneWithoutViewLogsInput = {
    create?: XOR<PlaylistCreateWithoutViewLogsInput, PlaylistUncheckedCreateWithoutViewLogsInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutViewLogsInput
    connect?: PlaylistWhereUniqueInput
  }

  export type ContentUpdateOneRequiredWithoutViewLogsNestedInput = {
    create?: XOR<ContentCreateWithoutViewLogsInput, ContentUncheckedCreateWithoutViewLogsInput>
    connectOrCreate?: ContentCreateOrConnectWithoutViewLogsInput
    upsert?: ContentUpsertWithoutViewLogsInput
    connect?: ContentWhereUniqueInput
    update?: XOR<XOR<ContentUpdateToOneWithWhereWithoutViewLogsInput, ContentUpdateWithoutViewLogsInput>, ContentUncheckedUpdateWithoutViewLogsInput>
  }

  export type DisplayUpdateOneRequiredWithoutViewLogsNestedInput = {
    create?: XOR<DisplayCreateWithoutViewLogsInput, DisplayUncheckedCreateWithoutViewLogsInput>
    connectOrCreate?: DisplayCreateOrConnectWithoutViewLogsInput
    upsert?: DisplayUpsertWithoutViewLogsInput
    connect?: DisplayWhereUniqueInput
    update?: XOR<XOR<DisplayUpdateToOneWithWhereWithoutViewLogsInput, DisplayUpdateWithoutViewLogsInput>, DisplayUncheckedUpdateWithoutViewLogsInput>
  }

  export type PlaylistUpdateOneRequiredWithoutViewLogsNestedInput = {
    create?: XOR<PlaylistCreateWithoutViewLogsInput, PlaylistUncheckedCreateWithoutViewLogsInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutViewLogsInput
    upsert?: PlaylistUpsertWithoutViewLogsInput
    connect?: PlaylistWhereUniqueInput
    update?: XOR<XOR<PlaylistUpdateToOneWithWhereWithoutViewLogsInput, PlaylistUpdateWithoutViewLogsInput>, PlaylistUncheckedUpdateWithoutViewLogsInput>
  }

  export type PlaylistCreateNestedManyWithoutTagsInput = {
    create?: XOR<PlaylistCreateWithoutTagsInput, PlaylistUncheckedCreateWithoutTagsInput> | PlaylistCreateWithoutTagsInput[] | PlaylistUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutTagsInput | PlaylistCreateOrConnectWithoutTagsInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type PlaylistUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<PlaylistCreateWithoutTagsInput, PlaylistUncheckedCreateWithoutTagsInput> | PlaylistCreateWithoutTagsInput[] | PlaylistUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutTagsInput | PlaylistCreateOrConnectWithoutTagsInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type PlaylistUpdateManyWithoutTagsNestedInput = {
    create?: XOR<PlaylistCreateWithoutTagsInput, PlaylistUncheckedCreateWithoutTagsInput> | PlaylistCreateWithoutTagsInput[] | PlaylistUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutTagsInput | PlaylistCreateOrConnectWithoutTagsInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutTagsInput | PlaylistUpsertWithWhereUniqueWithoutTagsInput[]
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutTagsInput | PlaylistUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutTagsInput | PlaylistUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type PlaylistUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<PlaylistCreateWithoutTagsInput, PlaylistUncheckedCreateWithoutTagsInput> | PlaylistCreateWithoutTagsInput[] | PlaylistUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutTagsInput | PlaylistCreateOrConnectWithoutTagsInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutTagsInput | PlaylistUpsertWithWhereUniqueWithoutTagsInput[]
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutTagsInput | PlaylistUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutTagsInput | PlaylistUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type DisplayCreateNestedOneWithoutAlertsInput = {
    create?: XOR<DisplayCreateWithoutAlertsInput, DisplayUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: DisplayCreateOrConnectWithoutAlertsInput
    connect?: DisplayWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAlertsInput = {
    create?: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlertsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAlertTypeFieldUpdateOperationsInput = {
    set?: $Enums.AlertType
  }

  export type EnumAlertCategoryFieldUpdateOperationsInput = {
    set?: $Enums.AlertCategory
  }

  export type DisplayUpdateOneWithoutAlertsNestedInput = {
    create?: XOR<DisplayCreateWithoutAlertsInput, DisplayUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: DisplayCreateOrConnectWithoutAlertsInput
    upsert?: DisplayUpsertWithoutAlertsInput
    disconnect?: DisplayWhereInput | boolean
    delete?: DisplayWhereInput | boolean
    connect?: DisplayWhereUniqueInput
    update?: XOR<XOR<DisplayUpdateToOneWithWhereWithoutAlertsInput, DisplayUpdateWithoutAlertsInput>, DisplayUncheckedUpdateWithoutAlertsInput>
  }

  export type UserUpdateOneWithoutAlertsNestedInput = {
    create?: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlertsInput
    upsert?: UserUpsertWithoutAlertsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAlertsInput, UserUpdateWithoutAlertsInput>, UserUncheckedUpdateWithoutAlertsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumContentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeFilter<$PrismaModel> | $Enums.ContentType
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedEnumProcessingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessingStatus | EnumProcessingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessingStatusFilter<$PrismaModel> | $Enums.ProcessingStatus
  }

  export type NestedEnumContentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ContentType | EnumContentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ContentType[] | ListEnumContentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumContentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ContentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumContentTypeFilter<$PrismaModel>
    _max?: NestedEnumContentTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumProcessingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProcessingStatus | EnumProcessingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProcessingStatus[] | ListEnumProcessingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumProcessingStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProcessingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProcessingStatusFilter<$PrismaModel>
    _max?: NestedEnumProcessingStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTransitionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransitionType | EnumTransitionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransitionType[] | ListEnumTransitionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransitionType[] | ListEnumTransitionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransitionTypeFilter<$PrismaModel> | $Enums.TransitionType
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTransitionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransitionType | EnumTransitionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransitionType[] | ListEnumTransitionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransitionType[] | ListEnumTransitionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransitionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransitionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransitionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransitionTypeFilter<$PrismaModel>
  }

  export type NestedEnumDisplayOrientationFilter<$PrismaModel = never> = {
    equals?: $Enums.DisplayOrientation | EnumDisplayOrientationFieldRefInput<$PrismaModel>
    in?: $Enums.DisplayOrientation[] | ListEnumDisplayOrientationFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisplayOrientation[] | ListEnumDisplayOrientationFieldRefInput<$PrismaModel>
    not?: NestedEnumDisplayOrientationFilter<$PrismaModel> | $Enums.DisplayOrientation
  }

  export type NestedEnumDisplayOrientationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisplayOrientation | EnumDisplayOrientationFieldRefInput<$PrismaModel>
    in?: $Enums.DisplayOrientation[] | ListEnumDisplayOrientationFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisplayOrientation[] | ListEnumDisplayOrientationFieldRefInput<$PrismaModel>
    not?: NestedEnumDisplayOrientationWithAggregatesFilter<$PrismaModel> | $Enums.DisplayOrientation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisplayOrientationFilter<$PrismaModel>
    _max?: NestedEnumDisplayOrientationFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumAlertTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeFilter<$PrismaModel> | $Enums.AlertType
  }

  export type NestedEnumAlertCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertCategory | EnumAlertCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AlertCategory[] | ListEnumAlertCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertCategory[] | ListEnumAlertCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertCategoryFilter<$PrismaModel> | $Enums.AlertCategory
  }

  export type NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlertType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertTypeFilter<$PrismaModel>
    _max?: NestedEnumAlertTypeFilter<$PrismaModel>
  }

  export type NestedEnumAlertCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertCategory | EnumAlertCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AlertCategory[] | ListEnumAlertCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertCategory[] | ListEnumAlertCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertCategoryWithAggregatesFilter<$PrismaModel> | $Enums.AlertCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertCategoryFilter<$PrismaModel>
    _max?: NestedEnumAlertCategoryFilter<$PrismaModel>
  }

  export type ContentCreateWithoutUploadedByUserInput = {
    id?: string
    name: string
    type: $Enums.ContentType
    filePath?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: bigint | number | null
    mimeType?: string | null
    originalName?: string | null
    fileHash?: string | null
    processingStatus?: $Enums.ProcessingStatus
    processingError?: string | null
    storageLocation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: string | null
    duration?: number | null
    fileName?: string | null
    description?: string | null
    thumbnails?: FileThumbnailCreateNestedManyWithoutContentInput
    versions?: FileVersionCreateNestedManyWithoutContentInput
    playlistItems?: PlaylistItemCreateNestedManyWithoutContentInput
    viewLogs?: ViewLogCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutUploadedByUserInput = {
    id?: string
    name: string
    type: $Enums.ContentType
    filePath?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: bigint | number | null
    mimeType?: string | null
    originalName?: string | null
    fileHash?: string | null
    processingStatus?: $Enums.ProcessingStatus
    processingError?: string | null
    storageLocation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: string | null
    duration?: number | null
    fileName?: string | null
    description?: string | null
    thumbnails?: FileThumbnailUncheckedCreateNestedManyWithoutContentInput
    versions?: FileVersionUncheckedCreateNestedManyWithoutContentInput
    playlistItems?: PlaylistItemUncheckedCreateNestedManyWithoutContentInput
    viewLogs?: ViewLogUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutUploadedByUserInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutUploadedByUserInput, ContentUncheckedCreateWithoutUploadedByUserInput>
  }

  export type ContentCreateManyUploadedByUserInputEnvelope = {
    data: ContentCreateManyUploadedByUserInput | ContentCreateManyUploadedByUserInput[]
    skipDuplicates?: boolean
  }

  export type FileVersionCreateWithoutUploadedByInput = {
    id?: string
    version: number
    filePath: string
    fileSize: bigint | number
    fileHash: string
    changes?: string | null
    createdAt?: Date | string
    content: ContentCreateNestedOneWithoutVersionsInput
  }

  export type FileVersionUncheckedCreateWithoutUploadedByInput = {
    id?: string
    contentId: string
    version: number
    filePath: string
    fileSize: bigint | number
    fileHash: string
    changes?: string | null
    createdAt?: Date | string
  }

  export type FileVersionCreateOrConnectWithoutUploadedByInput = {
    where: FileVersionWhereUniqueInput
    create: XOR<FileVersionCreateWithoutUploadedByInput, FileVersionUncheckedCreateWithoutUploadedByInput>
  }

  export type FileVersionCreateManyUploadedByInputEnvelope = {
    data: FileVersionCreateManyUploadedByInput | FileVersionCreateManyUploadedByInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistCreateWithoutCreatorInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    displays?: DisplayCreateNestedManyWithoutPlaylistInput
    items?: PlaylistItemCreateNestedManyWithoutPlaylistInput
    viewLogs?: ViewLogCreateNestedManyWithoutPlaylistInput
    tags?: TagCreateNestedManyWithoutPlaylistsInput
    sharedWith?: UserCreateNestedManyWithoutSharedPlaylistsInput
  }

  export type PlaylistUncheckedCreateWithoutCreatorInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    displays?: DisplayUncheckedCreateNestedManyWithoutPlaylistInput
    items?: PlaylistItemUncheckedCreateNestedManyWithoutPlaylistInput
    viewLogs?: ViewLogUncheckedCreateNestedManyWithoutPlaylistInput
    tags?: TagUncheckedCreateNestedManyWithoutPlaylistsInput
    sharedWith?: UserUncheckedCreateNestedManyWithoutSharedPlaylistsInput
  }

  export type PlaylistCreateOrConnectWithoutCreatorInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutCreatorInput, PlaylistUncheckedCreateWithoutCreatorInput>
  }

  export type PlaylistCreateManyCreatorInputEnvelope = {
    data: PlaylistCreateManyCreatorInput | PlaylistCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistCreateWithoutSharedWithInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    displays?: DisplayCreateNestedManyWithoutPlaylistInput
    creator: UserCreateNestedOneWithoutPlaylistsInput
    items?: PlaylistItemCreateNestedManyWithoutPlaylistInput
    viewLogs?: ViewLogCreateNestedManyWithoutPlaylistInput
    tags?: TagCreateNestedManyWithoutPlaylistsInput
  }

  export type PlaylistUncheckedCreateWithoutSharedWithInput = {
    id?: string
    name: string
    createdBy: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    displays?: DisplayUncheckedCreateNestedManyWithoutPlaylistInput
    items?: PlaylistItemUncheckedCreateNestedManyWithoutPlaylistInput
    viewLogs?: ViewLogUncheckedCreateNestedManyWithoutPlaylistInput
    tags?: TagUncheckedCreateNestedManyWithoutPlaylistsInput
  }

  export type PlaylistCreateOrConnectWithoutSharedWithInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutSharedWithInput, PlaylistUncheckedCreateWithoutSharedWithInput>
  }

  export type AlertCreateWithoutUserInput = {
    id?: string
    type: $Enums.AlertType
    category: $Enums.AlertCategory
    title: string
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    display?: DisplayCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.AlertType
    category: $Enums.AlertCategory
    title: string
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    displayId?: string | null
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertCreateOrConnectWithoutUserInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput>
  }

  export type AlertCreateManyUserInputEnvelope = {
    data: AlertCreateManyUserInput | AlertCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContentUpsertWithWhereUniqueWithoutUploadedByUserInput = {
    where: ContentWhereUniqueInput
    update: XOR<ContentUpdateWithoutUploadedByUserInput, ContentUncheckedUpdateWithoutUploadedByUserInput>
    create: XOR<ContentCreateWithoutUploadedByUserInput, ContentUncheckedCreateWithoutUploadedByUserInput>
  }

  export type ContentUpdateWithWhereUniqueWithoutUploadedByUserInput = {
    where: ContentWhereUniqueInput
    data: XOR<ContentUpdateWithoutUploadedByUserInput, ContentUncheckedUpdateWithoutUploadedByUserInput>
  }

  export type ContentUpdateManyWithWhereWithoutUploadedByUserInput = {
    where: ContentScalarWhereInput
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyWithoutUploadedByUserInput>
  }

  export type ContentScalarWhereInput = {
    AND?: ContentScalarWhereInput | ContentScalarWhereInput[]
    OR?: ContentScalarWhereInput[]
    NOT?: ContentScalarWhereInput | ContentScalarWhereInput[]
    id?: StringFilter<"Content"> | string
    name?: StringFilter<"Content"> | string
    type?: EnumContentTypeFilter<"Content"> | $Enums.ContentType
    filePath?: StringNullableFilter<"Content"> | string | null
    metadata?: JsonNullableFilter<"Content">
    backgroundColor?: StringNullableFilter<"Content"> | string | null
    cropSettings?: JsonNullableFilter<"Content">
    fileSize?: BigIntNullableFilter<"Content"> | bigint | number | null
    mimeType?: StringNullableFilter<"Content"> | string | null
    originalName?: StringNullableFilter<"Content"> | string | null
    fileHash?: StringNullableFilter<"Content"> | string | null
    processingStatus?: EnumProcessingStatusFilter<"Content"> | $Enums.ProcessingStatus
    processingError?: StringNullableFilter<"Content"> | string | null
    storageLocation?: StringNullableFilter<"Content"> | string | null
    uploadedBy?: StringFilter<"Content"> | string
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Content"> | Date | string | null
    createdBy?: StringNullableFilter<"Content"> | string | null
    duration?: IntNullableFilter<"Content"> | number | null
    fileName?: StringNullableFilter<"Content"> | string | null
    description?: StringNullableFilter<"Content"> | string | null
  }

  export type FileVersionUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: FileVersionWhereUniqueInput
    update: XOR<FileVersionUpdateWithoutUploadedByInput, FileVersionUncheckedUpdateWithoutUploadedByInput>
    create: XOR<FileVersionCreateWithoutUploadedByInput, FileVersionUncheckedCreateWithoutUploadedByInput>
  }

  export type FileVersionUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: FileVersionWhereUniqueInput
    data: XOR<FileVersionUpdateWithoutUploadedByInput, FileVersionUncheckedUpdateWithoutUploadedByInput>
  }

  export type FileVersionUpdateManyWithWhereWithoutUploadedByInput = {
    where: FileVersionScalarWhereInput
    data: XOR<FileVersionUpdateManyMutationInput, FileVersionUncheckedUpdateManyWithoutUploadedByInput>
  }

  export type FileVersionScalarWhereInput = {
    AND?: FileVersionScalarWhereInput | FileVersionScalarWhereInput[]
    OR?: FileVersionScalarWhereInput[]
    NOT?: FileVersionScalarWhereInput | FileVersionScalarWhereInput[]
    id?: StringFilter<"FileVersion"> | string
    contentId?: StringFilter<"FileVersion"> | string
    version?: IntFilter<"FileVersion"> | number
    filePath?: StringFilter<"FileVersion"> | string
    fileSize?: BigIntFilter<"FileVersion"> | bigint | number
    fileHash?: StringFilter<"FileVersion"> | string
    changes?: StringNullableFilter<"FileVersion"> | string | null
    uploadedById?: StringFilter<"FileVersion"> | string
    createdAt?: DateTimeFilter<"FileVersion"> | Date | string
  }

  export type PlaylistUpsertWithWhereUniqueWithoutCreatorInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutCreatorInput, PlaylistUncheckedUpdateWithoutCreatorInput>
    create: XOR<PlaylistCreateWithoutCreatorInput, PlaylistUncheckedCreateWithoutCreatorInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutCreatorInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutCreatorInput, PlaylistUncheckedUpdateWithoutCreatorInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutCreatorInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutCreatorInput>
  }

  export type PlaylistScalarWhereInput = {
    AND?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    OR?: PlaylistScalarWhereInput[]
    NOT?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    id?: StringFilter<"Playlist"> | string
    name?: StringFilter<"Playlist"> | string
    createdBy?: StringFilter<"Playlist"> | string
    isActive?: BoolFilter<"Playlist"> | boolean
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    description?: StringNullableFilter<"Playlist"> | string | null
  }

  export type PlaylistUpsertWithWhereUniqueWithoutSharedWithInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutSharedWithInput, PlaylistUncheckedUpdateWithoutSharedWithInput>
    create: XOR<PlaylistCreateWithoutSharedWithInput, PlaylistUncheckedCreateWithoutSharedWithInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutSharedWithInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutSharedWithInput, PlaylistUncheckedUpdateWithoutSharedWithInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutSharedWithInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutSharedWithInput>
  }

  export type AlertUpsertWithWhereUniqueWithoutUserInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutUserInput, AlertUncheckedUpdateWithoutUserInput>
    create: XOR<AlertCreateWithoutUserInput, AlertUncheckedCreateWithoutUserInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutUserInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutUserInput, AlertUncheckedUpdateWithoutUserInput>
  }

  export type AlertUpdateManyWithWhereWithoutUserInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutUserInput>
  }

  export type AlertScalarWhereInput = {
    AND?: AlertScalarWhereInput | AlertScalarWhereInput[]
    OR?: AlertScalarWhereInput[]
    NOT?: AlertScalarWhereInput | AlertScalarWhereInput[]
    id?: StringFilter<"Alert"> | string
    type?: EnumAlertTypeFilter<"Alert"> | $Enums.AlertType
    category?: EnumAlertCategoryFilter<"Alert"> | $Enums.AlertCategory
    title?: StringFilter<"Alert"> | string
    message?: StringFilter<"Alert"> | string
    metadata?: JsonNullableFilter<"Alert">
    displayId?: StringNullableFilter<"Alert"> | string | null
    userId?: StringNullableFilter<"Alert"> | string | null
    resolved?: BoolFilter<"Alert"> | boolean
    resolvedAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    resolvedBy?: StringNullableFilter<"Alert"> | string | null
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
  }

  export type UserCreateWithoutContentInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    status?: $Enums.UserStatus
    permissions?: UserCreatepermissionsInput | $Enums.Permission[]
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    fileVersions?: FileVersionCreateNestedManyWithoutUploadedByInput
    playlists?: PlaylistCreateNestedManyWithoutCreatorInput
    sharedPlaylists?: PlaylistCreateNestedManyWithoutSharedWithInput
    alerts?: AlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContentInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    status?: $Enums.UserStatus
    permissions?: UserCreatepermissionsInput | $Enums.Permission[]
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    fileVersions?: FileVersionUncheckedCreateNestedManyWithoutUploadedByInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutCreatorInput
    sharedPlaylists?: PlaylistUncheckedCreateNestedManyWithoutSharedWithInput
    alerts?: AlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContentInput, UserUncheckedCreateWithoutContentInput>
  }

  export type FileThumbnailCreateWithoutContentInput = {
    id?: string
    size: string
    width: number
    height: number
    filePath: string
    fileSize: bigint | number
    format: string
    createdAt?: Date | string
  }

  export type FileThumbnailUncheckedCreateWithoutContentInput = {
    id?: string
    size: string
    width: number
    height: number
    filePath: string
    fileSize: bigint | number
    format: string
    createdAt?: Date | string
  }

  export type FileThumbnailCreateOrConnectWithoutContentInput = {
    where: FileThumbnailWhereUniqueInput
    create: XOR<FileThumbnailCreateWithoutContentInput, FileThumbnailUncheckedCreateWithoutContentInput>
  }

  export type FileThumbnailCreateManyContentInputEnvelope = {
    data: FileThumbnailCreateManyContentInput | FileThumbnailCreateManyContentInput[]
    skipDuplicates?: boolean
  }

  export type FileVersionCreateWithoutContentInput = {
    id?: string
    version: number
    filePath: string
    fileSize: bigint | number
    fileHash: string
    changes?: string | null
    createdAt?: Date | string
    uploadedBy: UserCreateNestedOneWithoutFileVersionsInput
  }

  export type FileVersionUncheckedCreateWithoutContentInput = {
    id?: string
    version: number
    filePath: string
    fileSize: bigint | number
    fileHash: string
    changes?: string | null
    uploadedById: string
    createdAt?: Date | string
  }

  export type FileVersionCreateOrConnectWithoutContentInput = {
    where: FileVersionWhereUniqueInput
    create: XOR<FileVersionCreateWithoutContentInput, FileVersionUncheckedCreateWithoutContentInput>
  }

  export type FileVersionCreateManyContentInputEnvelope = {
    data: FileVersionCreateManyContentInput | FileVersionCreateManyContentInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistItemCreateWithoutContentInput = {
    id?: string
    duration: number
    order: number
    transitionType?: $Enums.TransitionType
    transitionDuration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    playlist: PlaylistCreateNestedOneWithoutItemsInput
  }

  export type PlaylistItemUncheckedCreateWithoutContentInput = {
    id?: string
    playlistId: string
    duration: number
    order: number
    transitionType?: $Enums.TransitionType
    transitionDuration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistItemCreateOrConnectWithoutContentInput = {
    where: PlaylistItemWhereUniqueInput
    create: XOR<PlaylistItemCreateWithoutContentInput, PlaylistItemUncheckedCreateWithoutContentInput>
  }

  export type PlaylistItemCreateManyContentInputEnvelope = {
    data: PlaylistItemCreateManyContentInput | PlaylistItemCreateManyContentInput[]
    skipDuplicates?: boolean
  }

  export type ViewLogCreateWithoutContentInput = {
    id?: string
    viewedAt?: Date | string
    duration: number
    expectedDuration: number
    completed: boolean
    skipped?: boolean
    display: DisplayCreateNestedOneWithoutViewLogsInput
    playlist: PlaylistCreateNestedOneWithoutViewLogsInput
  }

  export type ViewLogUncheckedCreateWithoutContentInput = {
    id?: string
    displayId: string
    playlistId: string
    viewedAt?: Date | string
    duration: number
    expectedDuration: number
    completed: boolean
    skipped?: boolean
  }

  export type ViewLogCreateOrConnectWithoutContentInput = {
    where: ViewLogWhereUniqueInput
    create: XOR<ViewLogCreateWithoutContentInput, ViewLogUncheckedCreateWithoutContentInput>
  }

  export type ViewLogCreateManyContentInputEnvelope = {
    data: ViewLogCreateManyContentInput | ViewLogCreateManyContentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutContentInput = {
    update: XOR<UserUpdateWithoutContentInput, UserUncheckedUpdateWithoutContentInput>
    create: XOR<UserCreateWithoutContentInput, UserUncheckedCreateWithoutContentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContentInput, UserUncheckedUpdateWithoutContentInput>
  }

  export type UserUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    permissions?: UserUpdatepermissionsInput | $Enums.Permission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileVersions?: FileVersionUpdateManyWithoutUploadedByNestedInput
    playlists?: PlaylistUpdateManyWithoutCreatorNestedInput
    sharedPlaylists?: PlaylistUpdateManyWithoutSharedWithNestedInput
    alerts?: AlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    permissions?: UserUpdatepermissionsInput | $Enums.Permission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fileVersions?: FileVersionUncheckedUpdateManyWithoutUploadedByNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutCreatorNestedInput
    sharedPlaylists?: PlaylistUncheckedUpdateManyWithoutSharedWithNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FileThumbnailUpsertWithWhereUniqueWithoutContentInput = {
    where: FileThumbnailWhereUniqueInput
    update: XOR<FileThumbnailUpdateWithoutContentInput, FileThumbnailUncheckedUpdateWithoutContentInput>
    create: XOR<FileThumbnailCreateWithoutContentInput, FileThumbnailUncheckedCreateWithoutContentInput>
  }

  export type FileThumbnailUpdateWithWhereUniqueWithoutContentInput = {
    where: FileThumbnailWhereUniqueInput
    data: XOR<FileThumbnailUpdateWithoutContentInput, FileThumbnailUncheckedUpdateWithoutContentInput>
  }

  export type FileThumbnailUpdateManyWithWhereWithoutContentInput = {
    where: FileThumbnailScalarWhereInput
    data: XOR<FileThumbnailUpdateManyMutationInput, FileThumbnailUncheckedUpdateManyWithoutContentInput>
  }

  export type FileThumbnailScalarWhereInput = {
    AND?: FileThumbnailScalarWhereInput | FileThumbnailScalarWhereInput[]
    OR?: FileThumbnailScalarWhereInput[]
    NOT?: FileThumbnailScalarWhereInput | FileThumbnailScalarWhereInput[]
    id?: StringFilter<"FileThumbnail"> | string
    contentId?: StringFilter<"FileThumbnail"> | string
    size?: StringFilter<"FileThumbnail"> | string
    width?: IntFilter<"FileThumbnail"> | number
    height?: IntFilter<"FileThumbnail"> | number
    filePath?: StringFilter<"FileThumbnail"> | string
    fileSize?: BigIntFilter<"FileThumbnail"> | bigint | number
    format?: StringFilter<"FileThumbnail"> | string
    createdAt?: DateTimeFilter<"FileThumbnail"> | Date | string
  }

  export type FileVersionUpsertWithWhereUniqueWithoutContentInput = {
    where: FileVersionWhereUniqueInput
    update: XOR<FileVersionUpdateWithoutContentInput, FileVersionUncheckedUpdateWithoutContentInput>
    create: XOR<FileVersionCreateWithoutContentInput, FileVersionUncheckedCreateWithoutContentInput>
  }

  export type FileVersionUpdateWithWhereUniqueWithoutContentInput = {
    where: FileVersionWhereUniqueInput
    data: XOR<FileVersionUpdateWithoutContentInput, FileVersionUncheckedUpdateWithoutContentInput>
  }

  export type FileVersionUpdateManyWithWhereWithoutContentInput = {
    where: FileVersionScalarWhereInput
    data: XOR<FileVersionUpdateManyMutationInput, FileVersionUncheckedUpdateManyWithoutContentInput>
  }

  export type PlaylistItemUpsertWithWhereUniqueWithoutContentInput = {
    where: PlaylistItemWhereUniqueInput
    update: XOR<PlaylistItemUpdateWithoutContentInput, PlaylistItemUncheckedUpdateWithoutContentInput>
    create: XOR<PlaylistItemCreateWithoutContentInput, PlaylistItemUncheckedCreateWithoutContentInput>
  }

  export type PlaylistItemUpdateWithWhereUniqueWithoutContentInput = {
    where: PlaylistItemWhereUniqueInput
    data: XOR<PlaylistItemUpdateWithoutContentInput, PlaylistItemUncheckedUpdateWithoutContentInput>
  }

  export type PlaylistItemUpdateManyWithWhereWithoutContentInput = {
    where: PlaylistItemScalarWhereInput
    data: XOR<PlaylistItemUpdateManyMutationInput, PlaylistItemUncheckedUpdateManyWithoutContentInput>
  }

  export type PlaylistItemScalarWhereInput = {
    AND?: PlaylistItemScalarWhereInput | PlaylistItemScalarWhereInput[]
    OR?: PlaylistItemScalarWhereInput[]
    NOT?: PlaylistItemScalarWhereInput | PlaylistItemScalarWhereInput[]
    id?: StringFilter<"PlaylistItem"> | string
    playlistId?: StringFilter<"PlaylistItem"> | string
    contentId?: StringFilter<"PlaylistItem"> | string
    duration?: IntFilter<"PlaylistItem"> | number
    order?: IntFilter<"PlaylistItem"> | number
    transitionType?: EnumTransitionTypeFilter<"PlaylistItem"> | $Enums.TransitionType
    transitionDuration?: IntNullableFilter<"PlaylistItem"> | number | null
    createdAt?: DateTimeFilter<"PlaylistItem"> | Date | string
    updatedAt?: DateTimeFilter<"PlaylistItem"> | Date | string
  }

  export type ViewLogUpsertWithWhereUniqueWithoutContentInput = {
    where: ViewLogWhereUniqueInput
    update: XOR<ViewLogUpdateWithoutContentInput, ViewLogUncheckedUpdateWithoutContentInput>
    create: XOR<ViewLogCreateWithoutContentInput, ViewLogUncheckedCreateWithoutContentInput>
  }

  export type ViewLogUpdateWithWhereUniqueWithoutContentInput = {
    where: ViewLogWhereUniqueInput
    data: XOR<ViewLogUpdateWithoutContentInput, ViewLogUncheckedUpdateWithoutContentInput>
  }

  export type ViewLogUpdateManyWithWhereWithoutContentInput = {
    where: ViewLogScalarWhereInput
    data: XOR<ViewLogUpdateManyMutationInput, ViewLogUncheckedUpdateManyWithoutContentInput>
  }

  export type ViewLogScalarWhereInput = {
    AND?: ViewLogScalarWhereInput | ViewLogScalarWhereInput[]
    OR?: ViewLogScalarWhereInput[]
    NOT?: ViewLogScalarWhereInput | ViewLogScalarWhereInput[]
    id?: StringFilter<"ViewLog"> | string
    displayId?: StringFilter<"ViewLog"> | string
    playlistId?: StringFilter<"ViewLog"> | string
    contentId?: StringFilter<"ViewLog"> | string
    viewedAt?: DateTimeFilter<"ViewLog"> | Date | string
    duration?: IntFilter<"ViewLog"> | number
    expectedDuration?: IntFilter<"ViewLog"> | number
    completed?: BoolFilter<"ViewLog"> | boolean
    skipped?: BoolFilter<"ViewLog"> | boolean
  }

  export type DisplayCreateWithoutPlaylistInput = {
    id?: string
    name: string
    urlSlug: string
    resolution?: string
    orientation?: $Enums.DisplayOrientation
    lastSeen?: Date | string | null
    isOnline?: boolean
    location?: string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    errorLogs?: ErrorLogCreateNestedManyWithoutDisplayInput
    viewLogs?: ViewLogCreateNestedManyWithoutDisplayInput
    alerts?: AlertCreateNestedManyWithoutDisplayInput
  }

  export type DisplayUncheckedCreateWithoutPlaylistInput = {
    id?: string
    name: string
    urlSlug: string
    resolution?: string
    orientation?: $Enums.DisplayOrientation
    lastSeen?: Date | string | null
    isOnline?: boolean
    location?: string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    errorLogs?: ErrorLogUncheckedCreateNestedManyWithoutDisplayInput
    viewLogs?: ViewLogUncheckedCreateNestedManyWithoutDisplayInput
    alerts?: AlertUncheckedCreateNestedManyWithoutDisplayInput
  }

  export type DisplayCreateOrConnectWithoutPlaylistInput = {
    where: DisplayWhereUniqueInput
    create: XOR<DisplayCreateWithoutPlaylistInput, DisplayUncheckedCreateWithoutPlaylistInput>
  }

  export type DisplayCreateManyPlaylistInputEnvelope = {
    data: DisplayCreateManyPlaylistInput | DisplayCreateManyPlaylistInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPlaylistsInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    status?: $Enums.UserStatus
    permissions?: UserCreatepermissionsInput | $Enums.Permission[]
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    content?: ContentCreateNestedManyWithoutUploadedByUserInput
    fileVersions?: FileVersionCreateNestedManyWithoutUploadedByInput
    sharedPlaylists?: PlaylistCreateNestedManyWithoutSharedWithInput
    alerts?: AlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlaylistsInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    status?: $Enums.UserStatus
    permissions?: UserCreatepermissionsInput | $Enums.Permission[]
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    content?: ContentUncheckedCreateNestedManyWithoutUploadedByUserInput
    fileVersions?: FileVersionUncheckedCreateNestedManyWithoutUploadedByInput
    sharedPlaylists?: PlaylistUncheckedCreateNestedManyWithoutSharedWithInput
    alerts?: AlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlaylistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
  }

  export type PlaylistItemCreateWithoutPlaylistInput = {
    id?: string
    duration: number
    order: number
    transitionType?: $Enums.TransitionType
    transitionDuration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    content: ContentCreateNestedOneWithoutPlaylistItemsInput
  }

  export type PlaylistItemUncheckedCreateWithoutPlaylistInput = {
    id?: string
    contentId: string
    duration: number
    order: number
    transitionType?: $Enums.TransitionType
    transitionDuration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistItemCreateOrConnectWithoutPlaylistInput = {
    where: PlaylistItemWhereUniqueInput
    create: XOR<PlaylistItemCreateWithoutPlaylistInput, PlaylistItemUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistItemCreateManyPlaylistInputEnvelope = {
    data: PlaylistItemCreateManyPlaylistInput | PlaylistItemCreateManyPlaylistInput[]
    skipDuplicates?: boolean
  }

  export type ViewLogCreateWithoutPlaylistInput = {
    id?: string
    viewedAt?: Date | string
    duration: number
    expectedDuration: number
    completed: boolean
    skipped?: boolean
    content: ContentCreateNestedOneWithoutViewLogsInput
    display: DisplayCreateNestedOneWithoutViewLogsInput
  }

  export type ViewLogUncheckedCreateWithoutPlaylistInput = {
    id?: string
    displayId: string
    contentId: string
    viewedAt?: Date | string
    duration: number
    expectedDuration: number
    completed: boolean
    skipped?: boolean
  }

  export type ViewLogCreateOrConnectWithoutPlaylistInput = {
    where: ViewLogWhereUniqueInput
    create: XOR<ViewLogCreateWithoutPlaylistInput, ViewLogUncheckedCreateWithoutPlaylistInput>
  }

  export type ViewLogCreateManyPlaylistInputEnvelope = {
    data: ViewLogCreateManyPlaylistInput | ViewLogCreateManyPlaylistInput[]
    skipDuplicates?: boolean
  }

  export type TagCreateWithoutPlaylistsInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type TagUncheckedCreateWithoutPlaylistsInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type TagCreateOrConnectWithoutPlaylistsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutPlaylistsInput, TagUncheckedCreateWithoutPlaylistsInput>
  }

  export type UserCreateWithoutSharedPlaylistsInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    status?: $Enums.UserStatus
    permissions?: UserCreatepermissionsInput | $Enums.Permission[]
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    content?: ContentCreateNestedManyWithoutUploadedByUserInput
    fileVersions?: FileVersionCreateNestedManyWithoutUploadedByInput
    playlists?: PlaylistCreateNestedManyWithoutCreatorInput
    alerts?: AlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSharedPlaylistsInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    status?: $Enums.UserStatus
    permissions?: UserCreatepermissionsInput | $Enums.Permission[]
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    content?: ContentUncheckedCreateNestedManyWithoutUploadedByUserInput
    fileVersions?: FileVersionUncheckedCreateNestedManyWithoutUploadedByInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutCreatorInput
    alerts?: AlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSharedPlaylistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSharedPlaylistsInput, UserUncheckedCreateWithoutSharedPlaylistsInput>
  }

  export type DisplayUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: DisplayWhereUniqueInput
    update: XOR<DisplayUpdateWithoutPlaylistInput, DisplayUncheckedUpdateWithoutPlaylistInput>
    create: XOR<DisplayCreateWithoutPlaylistInput, DisplayUncheckedCreateWithoutPlaylistInput>
  }

  export type DisplayUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: DisplayWhereUniqueInput
    data: XOR<DisplayUpdateWithoutPlaylistInput, DisplayUncheckedUpdateWithoutPlaylistInput>
  }

  export type DisplayUpdateManyWithWhereWithoutPlaylistInput = {
    where: DisplayScalarWhereInput
    data: XOR<DisplayUpdateManyMutationInput, DisplayUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type DisplayScalarWhereInput = {
    AND?: DisplayScalarWhereInput | DisplayScalarWhereInput[]
    OR?: DisplayScalarWhereInput[]
    NOT?: DisplayScalarWhereInput | DisplayScalarWhereInput[]
    id?: StringFilter<"Display"> | string
    name?: StringFilter<"Display"> | string
    urlSlug?: StringFilter<"Display"> | string
    playlistId?: StringNullableFilter<"Display"> | string | null
    resolution?: StringFilter<"Display"> | string
    orientation?: EnumDisplayOrientationFilter<"Display"> | $Enums.DisplayOrientation
    lastSeen?: DateTimeNullableFilter<"Display"> | Date | string | null
    isOnline?: BoolFilter<"Display"> | boolean
    location?: StringNullableFilter<"Display"> | string | null
    clockSettings?: JsonFilter<"Display">
    createdAt?: DateTimeFilter<"Display"> | Date | string
    updatedAt?: DateTimeFilter<"Display"> | Date | string
  }

  export type UserUpsertWithoutPlaylistsInput = {
    update: XOR<UserUpdateWithoutPlaylistsInput, UserUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<UserCreateWithoutPlaylistsInput, UserUncheckedCreateWithoutPlaylistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlaylistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlaylistsInput, UserUncheckedUpdateWithoutPlaylistsInput>
  }

  export type UserUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    permissions?: UserUpdatepermissionsInput | $Enums.Permission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: ContentUpdateManyWithoutUploadedByUserNestedInput
    fileVersions?: FileVersionUpdateManyWithoutUploadedByNestedInput
    sharedPlaylists?: PlaylistUpdateManyWithoutSharedWithNestedInput
    alerts?: AlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    permissions?: UserUpdatepermissionsInput | $Enums.Permission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: ContentUncheckedUpdateManyWithoutUploadedByUserNestedInput
    fileVersions?: FileVersionUncheckedUpdateManyWithoutUploadedByNestedInput
    sharedPlaylists?: PlaylistUncheckedUpdateManyWithoutSharedWithNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlaylistItemUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: PlaylistItemWhereUniqueInput
    update: XOR<PlaylistItemUpdateWithoutPlaylistInput, PlaylistItemUncheckedUpdateWithoutPlaylistInput>
    create: XOR<PlaylistItemCreateWithoutPlaylistInput, PlaylistItemUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistItemUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: PlaylistItemWhereUniqueInput
    data: XOR<PlaylistItemUpdateWithoutPlaylistInput, PlaylistItemUncheckedUpdateWithoutPlaylistInput>
  }

  export type PlaylistItemUpdateManyWithWhereWithoutPlaylistInput = {
    where: PlaylistItemScalarWhereInput
    data: XOR<PlaylistItemUpdateManyMutationInput, PlaylistItemUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type ViewLogUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: ViewLogWhereUniqueInput
    update: XOR<ViewLogUpdateWithoutPlaylistInput, ViewLogUncheckedUpdateWithoutPlaylistInput>
    create: XOR<ViewLogCreateWithoutPlaylistInput, ViewLogUncheckedCreateWithoutPlaylistInput>
  }

  export type ViewLogUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: ViewLogWhereUniqueInput
    data: XOR<ViewLogUpdateWithoutPlaylistInput, ViewLogUncheckedUpdateWithoutPlaylistInput>
  }

  export type ViewLogUpdateManyWithWhereWithoutPlaylistInput = {
    where: ViewLogScalarWhereInput
    data: XOR<ViewLogUpdateManyMutationInput, ViewLogUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type TagUpsertWithWhereUniqueWithoutPlaylistsInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutPlaylistsInput, TagUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<TagCreateWithoutPlaylistsInput, TagUncheckedCreateWithoutPlaylistsInput>
  }

  export type TagUpdateWithWhereUniqueWithoutPlaylistsInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutPlaylistsInput, TagUncheckedUpdateWithoutPlaylistsInput>
  }

  export type TagUpdateManyWithWhereWithoutPlaylistsInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutPlaylistsInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutSharedPlaylistsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSharedPlaylistsInput, UserUncheckedUpdateWithoutSharedPlaylistsInput>
    create: XOR<UserCreateWithoutSharedPlaylistsInput, UserUncheckedCreateWithoutSharedPlaylistsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSharedPlaylistsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSharedPlaylistsInput, UserUncheckedUpdateWithoutSharedPlaylistsInput>
  }

  export type UserUpdateManyWithWhereWithoutSharedPlaylistsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSharedPlaylistsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    permissions?: EnumPermissionNullableListFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type ContentCreateWithoutPlaylistItemsInput = {
    id?: string
    name: string
    type: $Enums.ContentType
    filePath?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: bigint | number | null
    mimeType?: string | null
    originalName?: string | null
    fileHash?: string | null
    processingStatus?: $Enums.ProcessingStatus
    processingError?: string | null
    storageLocation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: string | null
    duration?: number | null
    fileName?: string | null
    description?: string | null
    uploadedByUser: UserCreateNestedOneWithoutContentInput
    thumbnails?: FileThumbnailCreateNestedManyWithoutContentInput
    versions?: FileVersionCreateNestedManyWithoutContentInput
    viewLogs?: ViewLogCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutPlaylistItemsInput = {
    id?: string
    name: string
    type: $Enums.ContentType
    filePath?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: bigint | number | null
    mimeType?: string | null
    originalName?: string | null
    fileHash?: string | null
    processingStatus?: $Enums.ProcessingStatus
    processingError?: string | null
    storageLocation?: string | null
    uploadedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: string | null
    duration?: number | null
    fileName?: string | null
    description?: string | null
    thumbnails?: FileThumbnailUncheckedCreateNestedManyWithoutContentInput
    versions?: FileVersionUncheckedCreateNestedManyWithoutContentInput
    viewLogs?: ViewLogUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutPlaylistItemsInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutPlaylistItemsInput, ContentUncheckedCreateWithoutPlaylistItemsInput>
  }

  export type PlaylistCreateWithoutItemsInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    displays?: DisplayCreateNestedManyWithoutPlaylistInput
    creator: UserCreateNestedOneWithoutPlaylistsInput
    viewLogs?: ViewLogCreateNestedManyWithoutPlaylistInput
    tags?: TagCreateNestedManyWithoutPlaylistsInput
    sharedWith?: UserCreateNestedManyWithoutSharedPlaylistsInput
  }

  export type PlaylistUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    createdBy: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    displays?: DisplayUncheckedCreateNestedManyWithoutPlaylistInput
    viewLogs?: ViewLogUncheckedCreateNestedManyWithoutPlaylistInput
    tags?: TagUncheckedCreateNestedManyWithoutPlaylistsInput
    sharedWith?: UserUncheckedCreateNestedManyWithoutSharedPlaylistsInput
  }

  export type PlaylistCreateOrConnectWithoutItemsInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutItemsInput, PlaylistUncheckedCreateWithoutItemsInput>
  }

  export type ContentUpsertWithoutPlaylistItemsInput = {
    update: XOR<ContentUpdateWithoutPlaylistItemsInput, ContentUncheckedUpdateWithoutPlaylistItemsInput>
    create: XOR<ContentCreateWithoutPlaylistItemsInput, ContentUncheckedCreateWithoutPlaylistItemsInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutPlaylistItemsInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutPlaylistItemsInput, ContentUncheckedUpdateWithoutPlaylistItemsInput>
  }

  export type ContentUpdateWithoutPlaylistItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedByUser?: UserUpdateOneRequiredWithoutContentNestedInput
    thumbnails?: FileThumbnailUpdateManyWithoutContentNestedInput
    versions?: FileVersionUpdateManyWithoutContentNestedInput
    viewLogs?: ViewLogUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutPlaylistItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnails?: FileThumbnailUncheckedUpdateManyWithoutContentNestedInput
    versions?: FileVersionUncheckedUpdateManyWithoutContentNestedInput
    viewLogs?: ViewLogUncheckedUpdateManyWithoutContentNestedInput
  }

  export type PlaylistUpsertWithoutItemsInput = {
    update: XOR<PlaylistUpdateWithoutItemsInput, PlaylistUncheckedUpdateWithoutItemsInput>
    create: XOR<PlaylistCreateWithoutItemsInput, PlaylistUncheckedCreateWithoutItemsInput>
    where?: PlaylistWhereInput
  }

  export type PlaylistUpdateToOneWithWhereWithoutItemsInput = {
    where?: PlaylistWhereInput
    data: XOR<PlaylistUpdateWithoutItemsInput, PlaylistUncheckedUpdateWithoutItemsInput>
  }

  export type PlaylistUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displays?: DisplayUpdateManyWithoutPlaylistNestedInput
    creator?: UserUpdateOneRequiredWithoutPlaylistsNestedInput
    viewLogs?: ViewLogUpdateManyWithoutPlaylistNestedInput
    tags?: TagUpdateManyWithoutPlaylistsNestedInput
    sharedWith?: UserUpdateManyWithoutSharedPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displays?: DisplayUncheckedUpdateManyWithoutPlaylistNestedInput
    viewLogs?: ViewLogUncheckedUpdateManyWithoutPlaylistNestedInput
    tags?: TagUncheckedUpdateManyWithoutPlaylistsNestedInput
    sharedWith?: UserUncheckedUpdateManyWithoutSharedPlaylistsNestedInput
  }

  export type PlaylistCreateWithoutDisplaysInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    creator: UserCreateNestedOneWithoutPlaylistsInput
    items?: PlaylistItemCreateNestedManyWithoutPlaylistInput
    viewLogs?: ViewLogCreateNestedManyWithoutPlaylistInput
    tags?: TagCreateNestedManyWithoutPlaylistsInput
    sharedWith?: UserCreateNestedManyWithoutSharedPlaylistsInput
  }

  export type PlaylistUncheckedCreateWithoutDisplaysInput = {
    id?: string
    name: string
    createdBy: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    items?: PlaylistItemUncheckedCreateNestedManyWithoutPlaylistInput
    viewLogs?: ViewLogUncheckedCreateNestedManyWithoutPlaylistInput
    tags?: TagUncheckedCreateNestedManyWithoutPlaylistsInput
    sharedWith?: UserUncheckedCreateNestedManyWithoutSharedPlaylistsInput
  }

  export type PlaylistCreateOrConnectWithoutDisplaysInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutDisplaysInput, PlaylistUncheckedCreateWithoutDisplaysInput>
  }

  export type ErrorLogCreateWithoutDisplayInput = {
    id?: string
    errorType: string
    message: string
    stack?: string | null
    metadata?: string | null
    userAgent?: string | null
    url?: string | null
    timestamp: Date | string
    createdAt?: Date | string
  }

  export type ErrorLogUncheckedCreateWithoutDisplayInput = {
    id?: string
    errorType: string
    message: string
    stack?: string | null
    metadata?: string | null
    userAgent?: string | null
    url?: string | null
    timestamp: Date | string
    createdAt?: Date | string
  }

  export type ErrorLogCreateOrConnectWithoutDisplayInput = {
    where: ErrorLogWhereUniqueInput
    create: XOR<ErrorLogCreateWithoutDisplayInput, ErrorLogUncheckedCreateWithoutDisplayInput>
  }

  export type ErrorLogCreateManyDisplayInputEnvelope = {
    data: ErrorLogCreateManyDisplayInput | ErrorLogCreateManyDisplayInput[]
    skipDuplicates?: boolean
  }

  export type ViewLogCreateWithoutDisplayInput = {
    id?: string
    viewedAt?: Date | string
    duration: number
    expectedDuration: number
    completed: boolean
    skipped?: boolean
    content: ContentCreateNestedOneWithoutViewLogsInput
    playlist: PlaylistCreateNestedOneWithoutViewLogsInput
  }

  export type ViewLogUncheckedCreateWithoutDisplayInput = {
    id?: string
    playlistId: string
    contentId: string
    viewedAt?: Date | string
    duration: number
    expectedDuration: number
    completed: boolean
    skipped?: boolean
  }

  export type ViewLogCreateOrConnectWithoutDisplayInput = {
    where: ViewLogWhereUniqueInput
    create: XOR<ViewLogCreateWithoutDisplayInput, ViewLogUncheckedCreateWithoutDisplayInput>
  }

  export type ViewLogCreateManyDisplayInputEnvelope = {
    data: ViewLogCreateManyDisplayInput | ViewLogCreateManyDisplayInput[]
    skipDuplicates?: boolean
  }

  export type AlertCreateWithoutDisplayInput = {
    id?: string
    type: $Enums.AlertType
    category: $Enums.AlertCategory
    title: string
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateWithoutDisplayInput = {
    id?: string
    type: $Enums.AlertType
    category: $Enums.AlertCategory
    title: string
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    userId?: string | null
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertCreateOrConnectWithoutDisplayInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutDisplayInput, AlertUncheckedCreateWithoutDisplayInput>
  }

  export type AlertCreateManyDisplayInputEnvelope = {
    data: AlertCreateManyDisplayInput | AlertCreateManyDisplayInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistUpsertWithoutDisplaysInput = {
    update: XOR<PlaylistUpdateWithoutDisplaysInput, PlaylistUncheckedUpdateWithoutDisplaysInput>
    create: XOR<PlaylistCreateWithoutDisplaysInput, PlaylistUncheckedCreateWithoutDisplaysInput>
    where?: PlaylistWhereInput
  }

  export type PlaylistUpdateToOneWithWhereWithoutDisplaysInput = {
    where?: PlaylistWhereInput
    data: XOR<PlaylistUpdateWithoutDisplaysInput, PlaylistUncheckedUpdateWithoutDisplaysInput>
  }

  export type PlaylistUpdateWithoutDisplaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: UserUpdateOneRequiredWithoutPlaylistsNestedInput
    items?: PlaylistItemUpdateManyWithoutPlaylistNestedInput
    viewLogs?: ViewLogUpdateManyWithoutPlaylistNestedInput
    tags?: TagUpdateManyWithoutPlaylistsNestedInput
    sharedWith?: UserUpdateManyWithoutSharedPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutDisplaysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    items?: PlaylistItemUncheckedUpdateManyWithoutPlaylistNestedInput
    viewLogs?: ViewLogUncheckedUpdateManyWithoutPlaylistNestedInput
    tags?: TagUncheckedUpdateManyWithoutPlaylistsNestedInput
    sharedWith?: UserUncheckedUpdateManyWithoutSharedPlaylistsNestedInput
  }

  export type ErrorLogUpsertWithWhereUniqueWithoutDisplayInput = {
    where: ErrorLogWhereUniqueInput
    update: XOR<ErrorLogUpdateWithoutDisplayInput, ErrorLogUncheckedUpdateWithoutDisplayInput>
    create: XOR<ErrorLogCreateWithoutDisplayInput, ErrorLogUncheckedCreateWithoutDisplayInput>
  }

  export type ErrorLogUpdateWithWhereUniqueWithoutDisplayInput = {
    where: ErrorLogWhereUniqueInput
    data: XOR<ErrorLogUpdateWithoutDisplayInput, ErrorLogUncheckedUpdateWithoutDisplayInput>
  }

  export type ErrorLogUpdateManyWithWhereWithoutDisplayInput = {
    where: ErrorLogScalarWhereInput
    data: XOR<ErrorLogUpdateManyMutationInput, ErrorLogUncheckedUpdateManyWithoutDisplayInput>
  }

  export type ErrorLogScalarWhereInput = {
    AND?: ErrorLogScalarWhereInput | ErrorLogScalarWhereInput[]
    OR?: ErrorLogScalarWhereInput[]
    NOT?: ErrorLogScalarWhereInput | ErrorLogScalarWhereInput[]
    id?: StringFilter<"ErrorLog"> | string
    displayId?: StringFilter<"ErrorLog"> | string
    errorType?: StringFilter<"ErrorLog"> | string
    message?: StringFilter<"ErrorLog"> | string
    stack?: StringNullableFilter<"ErrorLog"> | string | null
    metadata?: StringNullableFilter<"ErrorLog"> | string | null
    userAgent?: StringNullableFilter<"ErrorLog"> | string | null
    url?: StringNullableFilter<"ErrorLog"> | string | null
    timestamp?: DateTimeFilter<"ErrorLog"> | Date | string
    createdAt?: DateTimeFilter<"ErrorLog"> | Date | string
  }

  export type ViewLogUpsertWithWhereUniqueWithoutDisplayInput = {
    where: ViewLogWhereUniqueInput
    update: XOR<ViewLogUpdateWithoutDisplayInput, ViewLogUncheckedUpdateWithoutDisplayInput>
    create: XOR<ViewLogCreateWithoutDisplayInput, ViewLogUncheckedCreateWithoutDisplayInput>
  }

  export type ViewLogUpdateWithWhereUniqueWithoutDisplayInput = {
    where: ViewLogWhereUniqueInput
    data: XOR<ViewLogUpdateWithoutDisplayInput, ViewLogUncheckedUpdateWithoutDisplayInput>
  }

  export type ViewLogUpdateManyWithWhereWithoutDisplayInput = {
    where: ViewLogScalarWhereInput
    data: XOR<ViewLogUpdateManyMutationInput, ViewLogUncheckedUpdateManyWithoutDisplayInput>
  }

  export type AlertUpsertWithWhereUniqueWithoutDisplayInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutDisplayInput, AlertUncheckedUpdateWithoutDisplayInput>
    create: XOR<AlertCreateWithoutDisplayInput, AlertUncheckedCreateWithoutDisplayInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutDisplayInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutDisplayInput, AlertUncheckedUpdateWithoutDisplayInput>
  }

  export type AlertUpdateManyWithWhereWithoutDisplayInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutDisplayInput>
  }

  export type ContentCreateWithoutThumbnailsInput = {
    id?: string
    name: string
    type: $Enums.ContentType
    filePath?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: bigint | number | null
    mimeType?: string | null
    originalName?: string | null
    fileHash?: string | null
    processingStatus?: $Enums.ProcessingStatus
    processingError?: string | null
    storageLocation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: string | null
    duration?: number | null
    fileName?: string | null
    description?: string | null
    uploadedByUser: UserCreateNestedOneWithoutContentInput
    versions?: FileVersionCreateNestedManyWithoutContentInput
    playlistItems?: PlaylistItemCreateNestedManyWithoutContentInput
    viewLogs?: ViewLogCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutThumbnailsInput = {
    id?: string
    name: string
    type: $Enums.ContentType
    filePath?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: bigint | number | null
    mimeType?: string | null
    originalName?: string | null
    fileHash?: string | null
    processingStatus?: $Enums.ProcessingStatus
    processingError?: string | null
    storageLocation?: string | null
    uploadedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: string | null
    duration?: number | null
    fileName?: string | null
    description?: string | null
    versions?: FileVersionUncheckedCreateNestedManyWithoutContentInput
    playlistItems?: PlaylistItemUncheckedCreateNestedManyWithoutContentInput
    viewLogs?: ViewLogUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutThumbnailsInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutThumbnailsInput, ContentUncheckedCreateWithoutThumbnailsInput>
  }

  export type ContentUpsertWithoutThumbnailsInput = {
    update: XOR<ContentUpdateWithoutThumbnailsInput, ContentUncheckedUpdateWithoutThumbnailsInput>
    create: XOR<ContentCreateWithoutThumbnailsInput, ContentUncheckedCreateWithoutThumbnailsInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutThumbnailsInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutThumbnailsInput, ContentUncheckedUpdateWithoutThumbnailsInput>
  }

  export type ContentUpdateWithoutThumbnailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedByUser?: UserUpdateOneRequiredWithoutContentNestedInput
    versions?: FileVersionUpdateManyWithoutContentNestedInput
    playlistItems?: PlaylistItemUpdateManyWithoutContentNestedInput
    viewLogs?: ViewLogUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutThumbnailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    versions?: FileVersionUncheckedUpdateManyWithoutContentNestedInput
    playlistItems?: PlaylistItemUncheckedUpdateManyWithoutContentNestedInput
    viewLogs?: ViewLogUncheckedUpdateManyWithoutContentNestedInput
  }

  export type ContentCreateWithoutVersionsInput = {
    id?: string
    name: string
    type: $Enums.ContentType
    filePath?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: bigint | number | null
    mimeType?: string | null
    originalName?: string | null
    fileHash?: string | null
    processingStatus?: $Enums.ProcessingStatus
    processingError?: string | null
    storageLocation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: string | null
    duration?: number | null
    fileName?: string | null
    description?: string | null
    uploadedByUser: UserCreateNestedOneWithoutContentInput
    thumbnails?: FileThumbnailCreateNestedManyWithoutContentInput
    playlistItems?: PlaylistItemCreateNestedManyWithoutContentInput
    viewLogs?: ViewLogCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutVersionsInput = {
    id?: string
    name: string
    type: $Enums.ContentType
    filePath?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: bigint | number | null
    mimeType?: string | null
    originalName?: string | null
    fileHash?: string | null
    processingStatus?: $Enums.ProcessingStatus
    processingError?: string | null
    storageLocation?: string | null
    uploadedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: string | null
    duration?: number | null
    fileName?: string | null
    description?: string | null
    thumbnails?: FileThumbnailUncheckedCreateNestedManyWithoutContentInput
    playlistItems?: PlaylistItemUncheckedCreateNestedManyWithoutContentInput
    viewLogs?: ViewLogUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutVersionsInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutVersionsInput, ContentUncheckedCreateWithoutVersionsInput>
  }

  export type UserCreateWithoutFileVersionsInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    status?: $Enums.UserStatus
    permissions?: UserCreatepermissionsInput | $Enums.Permission[]
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    content?: ContentCreateNestedManyWithoutUploadedByUserInput
    playlists?: PlaylistCreateNestedManyWithoutCreatorInput
    sharedPlaylists?: PlaylistCreateNestedManyWithoutSharedWithInput
    alerts?: AlertCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFileVersionsInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    status?: $Enums.UserStatus
    permissions?: UserCreatepermissionsInput | $Enums.Permission[]
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    content?: ContentUncheckedCreateNestedManyWithoutUploadedByUserInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutCreatorInput
    sharedPlaylists?: PlaylistUncheckedCreateNestedManyWithoutSharedWithInput
    alerts?: AlertUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFileVersionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFileVersionsInput, UserUncheckedCreateWithoutFileVersionsInput>
  }

  export type ContentUpsertWithoutVersionsInput = {
    update: XOR<ContentUpdateWithoutVersionsInput, ContentUncheckedUpdateWithoutVersionsInput>
    create: XOR<ContentCreateWithoutVersionsInput, ContentUncheckedCreateWithoutVersionsInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutVersionsInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutVersionsInput, ContentUncheckedUpdateWithoutVersionsInput>
  }

  export type ContentUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedByUser?: UserUpdateOneRequiredWithoutContentNestedInput
    thumbnails?: FileThumbnailUpdateManyWithoutContentNestedInput
    playlistItems?: PlaylistItemUpdateManyWithoutContentNestedInput
    viewLogs?: ViewLogUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnails?: FileThumbnailUncheckedUpdateManyWithoutContentNestedInput
    playlistItems?: PlaylistItemUncheckedUpdateManyWithoutContentNestedInput
    viewLogs?: ViewLogUncheckedUpdateManyWithoutContentNestedInput
  }

  export type UserUpsertWithoutFileVersionsInput = {
    update: XOR<UserUpdateWithoutFileVersionsInput, UserUncheckedUpdateWithoutFileVersionsInput>
    create: XOR<UserCreateWithoutFileVersionsInput, UserUncheckedCreateWithoutFileVersionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFileVersionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFileVersionsInput, UserUncheckedUpdateWithoutFileVersionsInput>
  }

  export type UserUpdateWithoutFileVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    permissions?: UserUpdatepermissionsInput | $Enums.Permission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: ContentUpdateManyWithoutUploadedByUserNestedInput
    playlists?: PlaylistUpdateManyWithoutCreatorNestedInput
    sharedPlaylists?: PlaylistUpdateManyWithoutSharedWithNestedInput
    alerts?: AlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFileVersionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    permissions?: UserUpdatepermissionsInput | $Enums.Permission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: ContentUncheckedUpdateManyWithoutUploadedByUserNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutCreatorNestedInput
    sharedPlaylists?: PlaylistUncheckedUpdateManyWithoutSharedWithNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DisplayCreateWithoutErrorLogsInput = {
    id?: string
    name: string
    urlSlug: string
    resolution?: string
    orientation?: $Enums.DisplayOrientation
    lastSeen?: Date | string | null
    isOnline?: boolean
    location?: string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    playlist?: PlaylistCreateNestedOneWithoutDisplaysInput
    viewLogs?: ViewLogCreateNestedManyWithoutDisplayInput
    alerts?: AlertCreateNestedManyWithoutDisplayInput
  }

  export type DisplayUncheckedCreateWithoutErrorLogsInput = {
    id?: string
    name: string
    urlSlug: string
    playlistId?: string | null
    resolution?: string
    orientation?: $Enums.DisplayOrientation
    lastSeen?: Date | string | null
    isOnline?: boolean
    location?: string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    viewLogs?: ViewLogUncheckedCreateNestedManyWithoutDisplayInput
    alerts?: AlertUncheckedCreateNestedManyWithoutDisplayInput
  }

  export type DisplayCreateOrConnectWithoutErrorLogsInput = {
    where: DisplayWhereUniqueInput
    create: XOR<DisplayCreateWithoutErrorLogsInput, DisplayUncheckedCreateWithoutErrorLogsInput>
  }

  export type DisplayUpsertWithoutErrorLogsInput = {
    update: XOR<DisplayUpdateWithoutErrorLogsInput, DisplayUncheckedUpdateWithoutErrorLogsInput>
    create: XOR<DisplayCreateWithoutErrorLogsInput, DisplayUncheckedCreateWithoutErrorLogsInput>
    where?: DisplayWhereInput
  }

  export type DisplayUpdateToOneWithWhereWithoutErrorLogsInput = {
    where?: DisplayWhereInput
    data: XOR<DisplayUpdateWithoutErrorLogsInput, DisplayUncheckedUpdateWithoutErrorLogsInput>
  }

  export type DisplayUpdateWithoutErrorLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    urlSlug?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDisplayOrientationFieldUpdateOperationsInput | $Enums.DisplayOrientation
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneWithoutDisplaysNestedInput
    viewLogs?: ViewLogUpdateManyWithoutDisplayNestedInput
    alerts?: AlertUpdateManyWithoutDisplayNestedInput
  }

  export type DisplayUncheckedUpdateWithoutErrorLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    urlSlug?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDisplayOrientationFieldUpdateOperationsInput | $Enums.DisplayOrientation
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viewLogs?: ViewLogUncheckedUpdateManyWithoutDisplayNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutDisplayNestedInput
  }

  export type ContentCreateWithoutViewLogsInput = {
    id?: string
    name: string
    type: $Enums.ContentType
    filePath?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: bigint | number | null
    mimeType?: string | null
    originalName?: string | null
    fileHash?: string | null
    processingStatus?: $Enums.ProcessingStatus
    processingError?: string | null
    storageLocation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: string | null
    duration?: number | null
    fileName?: string | null
    description?: string | null
    uploadedByUser: UserCreateNestedOneWithoutContentInput
    thumbnails?: FileThumbnailCreateNestedManyWithoutContentInput
    versions?: FileVersionCreateNestedManyWithoutContentInput
    playlistItems?: PlaylistItemCreateNestedManyWithoutContentInput
  }

  export type ContentUncheckedCreateWithoutViewLogsInput = {
    id?: string
    name: string
    type: $Enums.ContentType
    filePath?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: bigint | number | null
    mimeType?: string | null
    originalName?: string | null
    fileHash?: string | null
    processingStatus?: $Enums.ProcessingStatus
    processingError?: string | null
    storageLocation?: string | null
    uploadedBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: string | null
    duration?: number | null
    fileName?: string | null
    description?: string | null
    thumbnails?: FileThumbnailUncheckedCreateNestedManyWithoutContentInput
    versions?: FileVersionUncheckedCreateNestedManyWithoutContentInput
    playlistItems?: PlaylistItemUncheckedCreateNestedManyWithoutContentInput
  }

  export type ContentCreateOrConnectWithoutViewLogsInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutViewLogsInput, ContentUncheckedCreateWithoutViewLogsInput>
  }

  export type DisplayCreateWithoutViewLogsInput = {
    id?: string
    name: string
    urlSlug: string
    resolution?: string
    orientation?: $Enums.DisplayOrientation
    lastSeen?: Date | string | null
    isOnline?: boolean
    location?: string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    playlist?: PlaylistCreateNestedOneWithoutDisplaysInput
    errorLogs?: ErrorLogCreateNestedManyWithoutDisplayInput
    alerts?: AlertCreateNestedManyWithoutDisplayInput
  }

  export type DisplayUncheckedCreateWithoutViewLogsInput = {
    id?: string
    name: string
    urlSlug: string
    playlistId?: string | null
    resolution?: string
    orientation?: $Enums.DisplayOrientation
    lastSeen?: Date | string | null
    isOnline?: boolean
    location?: string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    errorLogs?: ErrorLogUncheckedCreateNestedManyWithoutDisplayInput
    alerts?: AlertUncheckedCreateNestedManyWithoutDisplayInput
  }

  export type DisplayCreateOrConnectWithoutViewLogsInput = {
    where: DisplayWhereUniqueInput
    create: XOR<DisplayCreateWithoutViewLogsInput, DisplayUncheckedCreateWithoutViewLogsInput>
  }

  export type PlaylistCreateWithoutViewLogsInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    displays?: DisplayCreateNestedManyWithoutPlaylistInput
    creator: UserCreateNestedOneWithoutPlaylistsInput
    items?: PlaylistItemCreateNestedManyWithoutPlaylistInput
    tags?: TagCreateNestedManyWithoutPlaylistsInput
    sharedWith?: UserCreateNestedManyWithoutSharedPlaylistsInput
  }

  export type PlaylistUncheckedCreateWithoutViewLogsInput = {
    id?: string
    name: string
    createdBy: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    displays?: DisplayUncheckedCreateNestedManyWithoutPlaylistInput
    items?: PlaylistItemUncheckedCreateNestedManyWithoutPlaylistInput
    tags?: TagUncheckedCreateNestedManyWithoutPlaylistsInput
    sharedWith?: UserUncheckedCreateNestedManyWithoutSharedPlaylistsInput
  }

  export type PlaylistCreateOrConnectWithoutViewLogsInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutViewLogsInput, PlaylistUncheckedCreateWithoutViewLogsInput>
  }

  export type ContentUpsertWithoutViewLogsInput = {
    update: XOR<ContentUpdateWithoutViewLogsInput, ContentUncheckedUpdateWithoutViewLogsInput>
    create: XOR<ContentCreateWithoutViewLogsInput, ContentUncheckedCreateWithoutViewLogsInput>
    where?: ContentWhereInput
  }

  export type ContentUpdateToOneWithWhereWithoutViewLogsInput = {
    where?: ContentWhereInput
    data: XOR<ContentUpdateWithoutViewLogsInput, ContentUncheckedUpdateWithoutViewLogsInput>
  }

  export type ContentUpdateWithoutViewLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedByUser?: UserUpdateOneRequiredWithoutContentNestedInput
    thumbnails?: FileThumbnailUpdateManyWithoutContentNestedInput
    versions?: FileVersionUpdateManyWithoutContentNestedInput
    playlistItems?: PlaylistItemUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutViewLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnails?: FileThumbnailUncheckedUpdateManyWithoutContentNestedInput
    versions?: FileVersionUncheckedUpdateManyWithoutContentNestedInput
    playlistItems?: PlaylistItemUncheckedUpdateManyWithoutContentNestedInput
  }

  export type DisplayUpsertWithoutViewLogsInput = {
    update: XOR<DisplayUpdateWithoutViewLogsInput, DisplayUncheckedUpdateWithoutViewLogsInput>
    create: XOR<DisplayCreateWithoutViewLogsInput, DisplayUncheckedCreateWithoutViewLogsInput>
    where?: DisplayWhereInput
  }

  export type DisplayUpdateToOneWithWhereWithoutViewLogsInput = {
    where?: DisplayWhereInput
    data: XOR<DisplayUpdateWithoutViewLogsInput, DisplayUncheckedUpdateWithoutViewLogsInput>
  }

  export type DisplayUpdateWithoutViewLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    urlSlug?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDisplayOrientationFieldUpdateOperationsInput | $Enums.DisplayOrientation
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneWithoutDisplaysNestedInput
    errorLogs?: ErrorLogUpdateManyWithoutDisplayNestedInput
    alerts?: AlertUpdateManyWithoutDisplayNestedInput
  }

  export type DisplayUncheckedUpdateWithoutViewLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    urlSlug?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDisplayOrientationFieldUpdateOperationsInput | $Enums.DisplayOrientation
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    errorLogs?: ErrorLogUncheckedUpdateManyWithoutDisplayNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutDisplayNestedInput
  }

  export type PlaylistUpsertWithoutViewLogsInput = {
    update: XOR<PlaylistUpdateWithoutViewLogsInput, PlaylistUncheckedUpdateWithoutViewLogsInput>
    create: XOR<PlaylistCreateWithoutViewLogsInput, PlaylistUncheckedCreateWithoutViewLogsInput>
    where?: PlaylistWhereInput
  }

  export type PlaylistUpdateToOneWithWhereWithoutViewLogsInput = {
    where?: PlaylistWhereInput
    data: XOR<PlaylistUpdateWithoutViewLogsInput, PlaylistUncheckedUpdateWithoutViewLogsInput>
  }

  export type PlaylistUpdateWithoutViewLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displays?: DisplayUpdateManyWithoutPlaylistNestedInput
    creator?: UserUpdateOneRequiredWithoutPlaylistsNestedInput
    items?: PlaylistItemUpdateManyWithoutPlaylistNestedInput
    tags?: TagUpdateManyWithoutPlaylistsNestedInput
    sharedWith?: UserUpdateManyWithoutSharedPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutViewLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displays?: DisplayUncheckedUpdateManyWithoutPlaylistNestedInput
    items?: PlaylistItemUncheckedUpdateManyWithoutPlaylistNestedInput
    tags?: TagUncheckedUpdateManyWithoutPlaylistsNestedInput
    sharedWith?: UserUncheckedUpdateManyWithoutSharedPlaylistsNestedInput
  }

  export type PlaylistCreateWithoutTagsInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    displays?: DisplayCreateNestedManyWithoutPlaylistInput
    creator: UserCreateNestedOneWithoutPlaylistsInput
    items?: PlaylistItemCreateNestedManyWithoutPlaylistInput
    viewLogs?: ViewLogCreateNestedManyWithoutPlaylistInput
    sharedWith?: UserCreateNestedManyWithoutSharedPlaylistsInput
  }

  export type PlaylistUncheckedCreateWithoutTagsInput = {
    id?: string
    name: string
    createdBy: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    displays?: DisplayUncheckedCreateNestedManyWithoutPlaylistInput
    items?: PlaylistItemUncheckedCreateNestedManyWithoutPlaylistInput
    viewLogs?: ViewLogUncheckedCreateNestedManyWithoutPlaylistInput
    sharedWith?: UserUncheckedCreateNestedManyWithoutSharedPlaylistsInput
  }

  export type PlaylistCreateOrConnectWithoutTagsInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutTagsInput, PlaylistUncheckedCreateWithoutTagsInput>
  }

  export type PlaylistUpsertWithWhereUniqueWithoutTagsInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutTagsInput, PlaylistUncheckedUpdateWithoutTagsInput>
    create: XOR<PlaylistCreateWithoutTagsInput, PlaylistUncheckedCreateWithoutTagsInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutTagsInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutTagsInput, PlaylistUncheckedUpdateWithoutTagsInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutTagsInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutTagsInput>
  }

  export type DisplayCreateWithoutAlertsInput = {
    id?: string
    name: string
    urlSlug: string
    resolution?: string
    orientation?: $Enums.DisplayOrientation
    lastSeen?: Date | string | null
    isOnline?: boolean
    location?: string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    playlist?: PlaylistCreateNestedOneWithoutDisplaysInput
    errorLogs?: ErrorLogCreateNestedManyWithoutDisplayInput
    viewLogs?: ViewLogCreateNestedManyWithoutDisplayInput
  }

  export type DisplayUncheckedCreateWithoutAlertsInput = {
    id?: string
    name: string
    urlSlug: string
    playlistId?: string | null
    resolution?: string
    orientation?: $Enums.DisplayOrientation
    lastSeen?: Date | string | null
    isOnline?: boolean
    location?: string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    errorLogs?: ErrorLogUncheckedCreateNestedManyWithoutDisplayInput
    viewLogs?: ViewLogUncheckedCreateNestedManyWithoutDisplayInput
  }

  export type DisplayCreateOrConnectWithoutAlertsInput = {
    where: DisplayWhereUniqueInput
    create: XOR<DisplayCreateWithoutAlertsInput, DisplayUncheckedCreateWithoutAlertsInput>
  }

  export type UserCreateWithoutAlertsInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    status?: $Enums.UserStatus
    permissions?: UserCreatepermissionsInput | $Enums.Permission[]
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    content?: ContentCreateNestedManyWithoutUploadedByUserInput
    fileVersions?: FileVersionCreateNestedManyWithoutUploadedByInput
    playlists?: PlaylistCreateNestedManyWithoutCreatorInput
    sharedPlaylists?: PlaylistCreateNestedManyWithoutSharedWithInput
  }

  export type UserUncheckedCreateWithoutAlertsInput = {
    id?: string
    username: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    status?: $Enums.UserStatus
    permissions?: UserCreatepermissionsInput | $Enums.Permission[]
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    content?: ContentUncheckedCreateNestedManyWithoutUploadedByUserInput
    fileVersions?: FileVersionUncheckedCreateNestedManyWithoutUploadedByInput
    playlists?: PlaylistUncheckedCreateNestedManyWithoutCreatorInput
    sharedPlaylists?: PlaylistUncheckedCreateNestedManyWithoutSharedWithInput
  }

  export type UserCreateOrConnectWithoutAlertsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
  }

  export type DisplayUpsertWithoutAlertsInput = {
    update: XOR<DisplayUpdateWithoutAlertsInput, DisplayUncheckedUpdateWithoutAlertsInput>
    create: XOR<DisplayCreateWithoutAlertsInput, DisplayUncheckedCreateWithoutAlertsInput>
    where?: DisplayWhereInput
  }

  export type DisplayUpdateToOneWithWhereWithoutAlertsInput = {
    where?: DisplayWhereInput
    data: XOR<DisplayUpdateWithoutAlertsInput, DisplayUncheckedUpdateWithoutAlertsInput>
  }

  export type DisplayUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    urlSlug?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDisplayOrientationFieldUpdateOperationsInput | $Enums.DisplayOrientation
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneWithoutDisplaysNestedInput
    errorLogs?: ErrorLogUpdateManyWithoutDisplayNestedInput
    viewLogs?: ViewLogUpdateManyWithoutDisplayNestedInput
  }

  export type DisplayUncheckedUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    urlSlug?: StringFieldUpdateOperationsInput | string
    playlistId?: NullableStringFieldUpdateOperationsInput | string | null
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDisplayOrientationFieldUpdateOperationsInput | $Enums.DisplayOrientation
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    errorLogs?: ErrorLogUncheckedUpdateManyWithoutDisplayNestedInput
    viewLogs?: ViewLogUncheckedUpdateManyWithoutDisplayNestedInput
  }

  export type UserUpsertWithoutAlertsInput = {
    update: XOR<UserUpdateWithoutAlertsInput, UserUncheckedUpdateWithoutAlertsInput>
    create: XOR<UserCreateWithoutAlertsInput, UserUncheckedCreateWithoutAlertsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAlertsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAlertsInput, UserUncheckedUpdateWithoutAlertsInput>
  }

  export type UserUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    permissions?: UserUpdatepermissionsInput | $Enums.Permission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: ContentUpdateManyWithoutUploadedByUserNestedInput
    fileVersions?: FileVersionUpdateManyWithoutUploadedByNestedInput
    playlists?: PlaylistUpdateManyWithoutCreatorNestedInput
    sharedPlaylists?: PlaylistUpdateManyWithoutSharedWithNestedInput
  }

  export type UserUncheckedUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    permissions?: UserUpdatepermissionsInput | $Enums.Permission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: ContentUncheckedUpdateManyWithoutUploadedByUserNestedInput
    fileVersions?: FileVersionUncheckedUpdateManyWithoutUploadedByNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutCreatorNestedInput
    sharedPlaylists?: PlaylistUncheckedUpdateManyWithoutSharedWithNestedInput
  }

  export type ContentCreateManyUploadedByUserInput = {
    id?: string
    name: string
    type: $Enums.ContentType
    filePath?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: bigint | number | null
    mimeType?: string | null
    originalName?: string | null
    fileHash?: string | null
    processingStatus?: $Enums.ProcessingStatus
    processingError?: string | null
    storageLocation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    createdBy?: string | null
    duration?: number | null
    fileName?: string | null
    description?: string | null
  }

  export type FileVersionCreateManyUploadedByInput = {
    id?: string
    contentId: string
    version: number
    filePath: string
    fileSize: bigint | number
    fileHash: string
    changes?: string | null
    createdAt?: Date | string
  }

  export type PlaylistCreateManyCreatorInput = {
    id?: string
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
  }

  export type AlertCreateManyUserInput = {
    id?: string
    type: $Enums.AlertType
    category: $Enums.AlertCategory
    title: string
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    displayId?: string | null
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentUpdateWithoutUploadedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnails?: FileThumbnailUpdateManyWithoutContentNestedInput
    versions?: FileVersionUpdateManyWithoutContentNestedInput
    playlistItems?: PlaylistItemUpdateManyWithoutContentNestedInput
    viewLogs?: ViewLogUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateWithoutUploadedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnails?: FileThumbnailUncheckedUpdateManyWithoutContentNestedInput
    versions?: FileVersionUncheckedUpdateManyWithoutContentNestedInput
    playlistItems?: PlaylistItemUncheckedUpdateManyWithoutContentNestedInput
    viewLogs?: ViewLogUncheckedUpdateManyWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateManyWithoutUploadedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumContentTypeFieldUpdateOperationsInput | $Enums.ContentType
    filePath?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    cropSettings?: NullableJsonNullValueInput | InputJsonValue
    fileSize?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    mimeType?: NullableStringFieldUpdateOperationsInput | string | null
    originalName?: NullableStringFieldUpdateOperationsInput | string | null
    fileHash?: NullableStringFieldUpdateOperationsInput | string | null
    processingStatus?: EnumProcessingStatusFieldUpdateOperationsInput | $Enums.ProcessingStatus
    processingError?: NullableStringFieldUpdateOperationsInput | string | null
    storageLocation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FileVersionUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    fileHash?: StringFieldUpdateOperationsInput | string
    changes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneRequiredWithoutVersionsNestedInput
  }

  export type FileVersionUncheckedUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    fileHash?: StringFieldUpdateOperationsInput | string
    changes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileVersionUncheckedUpdateManyWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    fileHash?: StringFieldUpdateOperationsInput | string
    changes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displays?: DisplayUpdateManyWithoutPlaylistNestedInput
    items?: PlaylistItemUpdateManyWithoutPlaylistNestedInput
    viewLogs?: ViewLogUpdateManyWithoutPlaylistNestedInput
    tags?: TagUpdateManyWithoutPlaylistsNestedInput
    sharedWith?: UserUpdateManyWithoutSharedPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displays?: DisplayUncheckedUpdateManyWithoutPlaylistNestedInput
    items?: PlaylistItemUncheckedUpdateManyWithoutPlaylistNestedInput
    viewLogs?: ViewLogUncheckedUpdateManyWithoutPlaylistNestedInput
    tags?: TagUncheckedUpdateManyWithoutPlaylistsNestedInput
    sharedWith?: UserUncheckedUpdateManyWithoutSharedPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistUpdateWithoutSharedWithInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displays?: DisplayUpdateManyWithoutPlaylistNestedInput
    creator?: UserUpdateOneRequiredWithoutPlaylistsNestedInput
    items?: PlaylistItemUpdateManyWithoutPlaylistNestedInput
    viewLogs?: ViewLogUpdateManyWithoutPlaylistNestedInput
    tags?: TagUpdateManyWithoutPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutSharedWithInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displays?: DisplayUncheckedUpdateManyWithoutPlaylistNestedInput
    items?: PlaylistItemUncheckedUpdateManyWithoutPlaylistNestedInput
    viewLogs?: ViewLogUncheckedUpdateManyWithoutPlaylistNestedInput
    tags?: TagUncheckedUpdateManyWithoutPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutSharedWithInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlertUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    category?: EnumAlertCategoryFieldUpdateOperationsInput | $Enums.AlertCategory
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    display?: DisplayUpdateOneWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    category?: EnumAlertCategoryFieldUpdateOperationsInput | $Enums.AlertCategory
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    displayId?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    category?: EnumAlertCategoryFieldUpdateOperationsInput | $Enums.AlertCategory
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    displayId?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileThumbnailCreateManyContentInput = {
    id?: string
    size: string
    width: number
    height: number
    filePath: string
    fileSize: bigint | number
    format: string
    createdAt?: Date | string
  }

  export type FileVersionCreateManyContentInput = {
    id?: string
    version: number
    filePath: string
    fileSize: bigint | number
    fileHash: string
    changes?: string | null
    uploadedById: string
    createdAt?: Date | string
  }

  export type PlaylistItemCreateManyContentInput = {
    id?: string
    playlistId: string
    duration: number
    order: number
    transitionType?: $Enums.TransitionType
    transitionDuration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ViewLogCreateManyContentInput = {
    id?: string
    displayId: string
    playlistId: string
    viewedAt?: Date | string
    duration: number
    expectedDuration: number
    completed: boolean
    skipped?: boolean
  }

  export type FileThumbnailUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    format?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileThumbnailUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    format?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileThumbnailUncheckedUpdateManyWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    format?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileVersionUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    fileHash?: StringFieldUpdateOperationsInput | string
    changes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneRequiredWithoutFileVersionsNestedInput
  }

  export type FileVersionUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    fileHash?: StringFieldUpdateOperationsInput | string
    changes?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileVersionUncheckedUpdateManyWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileSize?: BigIntFieldUpdateOperationsInput | bigint | number
    fileHash?: StringFieldUpdateOperationsInput | string
    changes?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistItemUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    transitionType?: EnumTransitionTypeFieldUpdateOperationsInput | $Enums.TransitionType
    transitionDuration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneRequiredWithoutItemsNestedInput
  }

  export type PlaylistItemUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    transitionType?: EnumTransitionTypeFieldUpdateOperationsInput | $Enums.TransitionType
    transitionDuration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistItemUncheckedUpdateManyWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    transitionType?: EnumTransitionTypeFieldUpdateOperationsInput | $Enums.TransitionType
    transitionDuration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewLogUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    expectedDuration?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    skipped?: BoolFieldUpdateOperationsInput | boolean
    display?: DisplayUpdateOneRequiredWithoutViewLogsNestedInput
    playlist?: PlaylistUpdateOneRequiredWithoutViewLogsNestedInput
  }

  export type ViewLogUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayId?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    expectedDuration?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    skipped?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ViewLogUncheckedUpdateManyWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayId?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    expectedDuration?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    skipped?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DisplayCreateManyPlaylistInput = {
    id?: string
    name: string
    urlSlug: string
    resolution?: string
    orientation?: $Enums.DisplayOrientation
    lastSeen?: Date | string | null
    isOnline?: boolean
    location?: string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistItemCreateManyPlaylistInput = {
    id?: string
    contentId: string
    duration: number
    order: number
    transitionType?: $Enums.TransitionType
    transitionDuration?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ViewLogCreateManyPlaylistInput = {
    id?: string
    displayId: string
    contentId: string
    viewedAt?: Date | string
    duration: number
    expectedDuration: number
    completed: boolean
    skipped?: boolean
  }

  export type DisplayUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    urlSlug?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDisplayOrientationFieldUpdateOperationsInput | $Enums.DisplayOrientation
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    errorLogs?: ErrorLogUpdateManyWithoutDisplayNestedInput
    viewLogs?: ViewLogUpdateManyWithoutDisplayNestedInput
    alerts?: AlertUpdateManyWithoutDisplayNestedInput
  }

  export type DisplayUncheckedUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    urlSlug?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDisplayOrientationFieldUpdateOperationsInput | $Enums.DisplayOrientation
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    errorLogs?: ErrorLogUncheckedUpdateManyWithoutDisplayNestedInput
    viewLogs?: ViewLogUncheckedUpdateManyWithoutDisplayNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutDisplayNestedInput
  }

  export type DisplayUncheckedUpdateManyWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    urlSlug?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    orientation?: EnumDisplayOrientationFieldUpdateOperationsInput | $Enums.DisplayOrientation
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isOnline?: BoolFieldUpdateOperationsInput | boolean
    location?: NullableStringFieldUpdateOperationsInput | string | null
    clockSettings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistItemUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    transitionType?: EnumTransitionTypeFieldUpdateOperationsInput | $Enums.TransitionType
    transitionDuration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateOneRequiredWithoutPlaylistItemsNestedInput
  }

  export type PlaylistItemUncheckedUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    transitionType?: EnumTransitionTypeFieldUpdateOperationsInput | $Enums.TransitionType
    transitionDuration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistItemUncheckedUpdateManyWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    transitionType?: EnumTransitionTypeFieldUpdateOperationsInput | $Enums.TransitionType
    transitionDuration?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewLogUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    expectedDuration?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    skipped?: BoolFieldUpdateOperationsInput | boolean
    content?: ContentUpdateOneRequiredWithoutViewLogsNestedInput
    display?: DisplayUpdateOneRequiredWithoutViewLogsNestedInput
  }

  export type ViewLogUncheckedUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    expectedDuration?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    skipped?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ViewLogUncheckedUpdateManyWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    displayId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    expectedDuration?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    skipped?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TagUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyWithoutPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutSharedPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    permissions?: UserUpdatepermissionsInput | $Enums.Permission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: ContentUpdateManyWithoutUploadedByUserNestedInput
    fileVersions?: FileVersionUpdateManyWithoutUploadedByNestedInput
    playlists?: PlaylistUpdateManyWithoutCreatorNestedInput
    alerts?: AlertUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSharedPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    permissions?: UserUpdatepermissionsInput | $Enums.Permission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: ContentUncheckedUpdateManyWithoutUploadedByUserNestedInput
    fileVersions?: FileVersionUncheckedUpdateManyWithoutUploadedByNestedInput
    playlists?: PlaylistUncheckedUpdateManyWithoutCreatorNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutSharedPlaylistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    permissions?: UserUpdatepermissionsInput | $Enums.Permission[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ErrorLogCreateManyDisplayInput = {
    id?: string
    errorType: string
    message: string
    stack?: string | null
    metadata?: string | null
    userAgent?: string | null
    url?: string | null
    timestamp: Date | string
    createdAt?: Date | string
  }

  export type ViewLogCreateManyDisplayInput = {
    id?: string
    playlistId: string
    contentId: string
    viewedAt?: Date | string
    duration: number
    expectedDuration: number
    completed: boolean
    skipped?: boolean
  }

  export type AlertCreateManyDisplayInput = {
    id?: string
    type: $Enums.AlertType
    category: $Enums.AlertCategory
    title: string
    message: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    userId?: string | null
    resolved?: boolean
    resolvedAt?: Date | string | null
    resolvedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ErrorLogUpdateWithoutDisplayInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErrorLogUncheckedUpdateWithoutDisplayInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ErrorLogUncheckedUpdateManyWithoutDisplayInput = {
    id?: StringFieldUpdateOperationsInput | string
    errorType?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    stack?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewLogUpdateWithoutDisplayInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    expectedDuration?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    skipped?: BoolFieldUpdateOperationsInput | boolean
    content?: ContentUpdateOneRequiredWithoutViewLogsNestedInput
    playlist?: PlaylistUpdateOneRequiredWithoutViewLogsNestedInput
  }

  export type ViewLogUncheckedUpdateWithoutDisplayInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    expectedDuration?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    skipped?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ViewLogUncheckedUpdateManyWithoutDisplayInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
    contentId?: StringFieldUpdateOperationsInput | string
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    expectedDuration?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    skipped?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AlertUpdateWithoutDisplayInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    category?: EnumAlertCategoryFieldUpdateOperationsInput | $Enums.AlertCategory
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateWithoutDisplayInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    category?: EnumAlertCategoryFieldUpdateOperationsInput | $Enums.AlertCategory
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyWithoutDisplayInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    category?: EnumAlertCategoryFieldUpdateOperationsInput | $Enums.AlertCategory
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resolvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displays?: DisplayUpdateManyWithoutPlaylistNestedInput
    creator?: UserUpdateOneRequiredWithoutPlaylistsNestedInput
    items?: PlaylistItemUpdateManyWithoutPlaylistNestedInput
    viewLogs?: ViewLogUpdateManyWithoutPlaylistNestedInput
    sharedWith?: UserUpdateManyWithoutSharedPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    displays?: DisplayUncheckedUpdateManyWithoutPlaylistNestedInput
    items?: PlaylistItemUncheckedUpdateManyWithoutPlaylistNestedInput
    viewLogs?: ViewLogUncheckedUpdateManyWithoutPlaylistNestedInput
    sharedWith?: UserUncheckedUpdateManyWithoutSharedPlaylistsNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}