/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LegacyServiceUserConfig extends cdktn.TerraformMetaArguments {
  /**
  * Specifies the action that Snowflake performs for in-progress queries if connectivity is lost due to abrupt termination of a session (e.g. network outage, browser termination, service interruption). For more information, check [ABORT_DETACHED_QUERY docs](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#abort_detached_query LegacyServiceUser#abort_detached_query}
  */
  readonly abortDetachedQuery?: boolean | cdktn.IResolvable;
  /**
  * Specifies whether autocommit is enabled for the session. Autocommit determines whether a DML statement, when executed without an active transaction, is automatically committed after the statement successfully completes. For more information, see [Transactions](https://docs.snowflake.com/en/sql-reference/transactions). For more information, check [AUTOCOMMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#autocommit).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#autocommit LegacyServiceUser#autocommit}
  */
  readonly autocommit?: boolean | cdktn.IResolvable;
  /**
  * The format of VARCHAR values passed as input to VARCHAR-to-BINARY conversion functions. For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). For more information, check [BINARY_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-input-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#binary_input_format LegacyServiceUser#binary_input_format}
  */
  readonly binaryInputFormat?: string;
  /**
  * The format for VARCHAR values returned as output by BINARY-to-VARCHAR conversion functions. For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). For more information, check [BINARY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#binary_output_format LegacyServiceUser#binary_output_format}
  */
  readonly binaryOutputFormat?: string;
  /**
  * Parameter that specifies the maximum amount of memory the JDBC driver or ODBC driver should use for the result set from queries (in MB). For more information, check [CLIENT_MEMORY_LIMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#client-memory-limit).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#client_memory_limit LegacyServiceUser#client_memory_limit}
  */
  readonly clientMemoryLimit?: number;
  /**
  * For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases/schemas to the current database/schema. The narrower search typically returns fewer rows and executes more quickly. For more information, check [CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX docs](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-request-use-connection-ctx).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#client_metadata_request_use_connection_ctx LegacyServiceUser#client_metadata_request_use_connection_ctx}
  */
  readonly clientMetadataRequestUseConnectionCtx?: boolean | cdktn.IResolvable;
  /**
  * Parameter that specifies the number of threads used by the client to pre-fetch large result sets. The driver will attempt to honor the parameter value, but defines the minimum and maximum values (depending on your system’s resources) to improve performance. For more information, check [CLIENT_PREFETCH_THREADS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-prefetch-threads).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#client_prefetch_threads LegacyServiceUser#client_prefetch_threads}
  */
  readonly clientPrefetchThreads?: number;
  /**
  * Parameter that specifies the maximum size of each set (or chunk) of query results to download (in MB). The JDBC driver downloads query results in chunks. For more information, check [CLIENT_RESULT_CHUNK_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-chunk-size).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#client_result_chunk_size LegacyServiceUser#client_result_chunk_size}
  */
  readonly clientResultChunkSize?: number;
  /**
  * Parameter that indicates whether to match column name case-insensitively in ResultSet.get* methods in JDBC. For more information, check [CLIENT_RESULT_COLUMN_CASE_INSENSITIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-column-case-insensitive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#client_result_column_case_insensitive LegacyServiceUser#client_result_column_case_insensitive}
  */
  readonly clientResultColumnCaseInsensitive?: boolean | cdktn.IResolvable;
  /**
  * Parameter that indicates whether to force a user to log in again after a period of inactivity in the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#client_session_keep_alive LegacyServiceUser#client_session_keep_alive}
  */
  readonly clientSessionKeepAlive?: boolean | cdktn.IResolvable;
  /**
  * Number of seconds in-between client attempts to update the token for the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive-heartbeat-frequency).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#client_session_keep_alive_heartbeat_frequency LegacyServiceUser#client_session_keep_alive_heartbeat_frequency}
  */
  readonly clientSessionKeepAliveHeartbeatFrequency?: number;
  /**
  * Specifies the [TIMESTAMP_* variation](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#label-datatypes-timestamp-variations) to use when binding timestamp variables for JDBC or ODBC applications that use the bind API to load data. For more information, check [CLIENT_TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#client-timestamp-type-mapping).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#client_timestamp_type_mapping LegacyServiceUser#client_timestamp_type_mapping}
  */
  readonly clientTimestampTypeMapping?: string;
  /**
  * Specifies a comment for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#comment LegacyServiceUser#comment}
  */
  readonly comment?: string;
  /**
  * Specifies the input format for the DATE data type. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-input-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#date_input_format LegacyServiceUser#date_input_format}
  */
  readonly dateInputFormat?: string;
  /**
  * Specifies the display format for the DATE data type. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#date_output_format LegacyServiceUser#date_output_format}
  */
  readonly dateOutputFormat?: string;
  /**
  * Specifies the number of days after which the user status is set to `Expired` and the user is no longer allowed to log in. This is useful for defining temporary users (i.e. users who should only have access to Snowflake for a limited time period). In general, you should not set this property for [account administrators](https://docs.snowflake.com/en/user-guide/security-access-control-considerations.html#label-accountadmin-users) (i.e. users with the `ACCOUNTADMIN` role) because Snowflake locks them out when they become `Expired`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#days_to_expiry LegacyServiceUser#days_to_expiry}
  */
  readonly daysToExpiry?: number;
  /**
  * Specifies the namespace (database only or database and schema) that is active by default for the user’s session upon login. Note that the CREATE USER operation does not verify that the namespace exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#default_namespace LegacyServiceUser#default_namespace}
  */
  readonly defaultNamespace?: string;
  /**
  * Specifies the role that is active by default for the user’s session upon login. Note that specifying a default role for a user does **not** grant the role to the user. The role must be granted explicitly to the user using the [GRANT ROLE](https://docs.snowflake.com/en/sql-reference/sql/grant-role) command. In addition, the CREATE USER operation does not verify that the role exists. For more information about this resource, see [docs](./account_role).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#default_role LegacyServiceUser#default_role}
  */
  readonly defaultRole?: string;
  /**
  * (Default: `DEFAULT`) Specifies the secondary roles that are active for the user’s session upon login. Valid values are (case-insensitive): `DEFAULT` | `NONE` | `ALL`. More information can be found in [doc](https://docs.snowflake.com/en/sql-reference/sql/create-user#optional-object-properties-objectproperties).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#default_secondary_roles_option LegacyServiceUser#default_secondary_roles_option}
  */
  readonly defaultSecondaryRolesOption?: string;
  /**
  * Specifies the virtual warehouse that is active by default for the user’s session upon login. Note that the CREATE USER operation does not verify that the warehouse exists. For more information about this resource, see [docs](./warehouse).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#default_warehouse LegacyServiceUser#default_warehouse}
  */
  readonly defaultWarehouse?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the user is disabled, which prevents logging in and aborts all the currently-running queries for the user. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#disabled LegacyServiceUser#disabled}
  */
  readonly disabled?: string;
  /**
  * Name displayed for the user in the Snowflake web interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#display_name LegacyServiceUser#display_name}
  */
  readonly displayName?: string;
  /**
  * Email address for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#email LegacyServiceUser#email}
  */
  readonly email?: string;
  /**
  * Specifies whether to set the schema for unloaded Parquet files based on the logical column data types (i.e. the types in the unload SQL query or source table) or on the unloaded column values (i.e. the smallest data types and precision that support the values in the output columns of the unload SQL statement or source table). For more information, check [ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unload-physical-type-optimization).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#enable_unload_physical_type_optimization LegacyServiceUser#enable_unload_physical_type_optimization}
  */
  readonly enableUnloadPhysicalTypeOptimization?: boolean | cdktn.IResolvable;
  /**
  * Controls whether query text is redacted if a SQL query fails due to a syntax or parsing error. If `FALSE`, the content of a failed query is redacted in the views, pages, and functions that provide a query history. Only users with a role that is granted or inherits the AUDIT privilege can set the ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR parameter. When using the ALTER USER command to set the parameter to `TRUE` for a particular user, modify the user that you want to see the query text, not the user who executed the query (if those are different users). For more information, check [ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unredacted-query-syntax-error).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#enable_unredacted_query_syntax_error LegacyServiceUser#enable_unredacted_query_syntax_error}
  */
  readonly enableUnredactedQuerySyntaxError?: boolean | cdktn.IResolvable;
  /**
  * Specifies whether to return an error when the [MERGE](https://docs.snowflake.com/en/sql-reference/sql/merge) command is used to update or delete a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_MERGE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-merge).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#error_on_nondeterministic_merge LegacyServiceUser#error_on_nondeterministic_merge}
  */
  readonly errorOnNondeterministicMerge?: boolean | cdktn.IResolvable;
  /**
  * Specifies whether to return an error when the [UPDATE](https://docs.snowflake.com/en/sql-reference/sql/update) command is used to update a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_UPDATE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-update).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#error_on_nondeterministic_update LegacyServiceUser#error_on_nondeterministic_update}
  */
  readonly errorOnNondeterministicUpdate?: boolean | cdktn.IResolvable;
  /**
  * Display format for [GEOGRAPHY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geography). For more information, check [GEOGRAPHY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geography-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#geography_output_format LegacyServiceUser#geography_output_format}
  */
  readonly geographyOutputFormat?: string;
  /**
  * Display format for [GEOMETRY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geometry). For more information, check [GEOMETRY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geometry-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#geometry_output_format LegacyServiceUser#geometry_output_format}
  */
  readonly geometryOutputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#id LegacyServiceUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies how JDBC processes columns that have a scale of zero (0). For more information, check [JDBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-decimal-as-int).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#jdbc_treat_decimal_as_int LegacyServiceUser#jdbc_treat_decimal_as_int}
  */
  readonly jdbcTreatDecimalAsInt?: boolean | cdktn.IResolvable;
  /**
  * Specifies how JDBC processes TIMESTAMP_NTZ values. For more information, check [JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#jdbc_treat_timestamp_ntz_as_utc LegacyServiceUser#jdbc_treat_timestamp_ntz_as_utc}
  */
  readonly jdbcTreatTimestampNtzAsUtc?: boolean | cdktn.IResolvable;
  /**
  * Specifies whether the JDBC Driver uses the time zone of the JVM or the time zone of the session (specified by the [TIMEZONE](https://docs.snowflake.com/en/sql-reference/parameters#label-timezone) parameter) for the getDate(), getTime(), and getTimestamp() methods of the ResultSet class. For more information, check [JDBC_USE_SESSION_TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-use-session-timezone).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#jdbc_use_session_timezone LegacyServiceUser#jdbc_use_session_timezone}
  */
  readonly jdbcUseSessionTimezone?: boolean | cdktn.IResolvable;
  /**
  * Specifies the number of blank spaces to indent each new element in JSON output in the session. Also specifies whether to insert newline characters after each element. For more information, check [JSON_INDENT docs](https://docs.snowflake.com/en/sql-reference/parameters#json-indent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#json_indent LegacyServiceUser#json_indent}
  */
  readonly jsonIndent?: number;
  /**
  * Number of seconds to wait while trying to lock a resource, before timing out and aborting the statement. For more information, check [LOCK_TIMEOUT docs](https://docs.snowflake.com/en/sql-reference/parameters#lock-timeout).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#lock_timeout LegacyServiceUser#lock_timeout}
  */
  readonly lockTimeout?: number;
  /**
  * Specifies the severity level of messages that should be ingested and made available in the active event table. Messages at the specified level (and at more severe levels) are ingested. For more information about log levels, see [Setting log level](https://docs.snowflake.com/en/developer-guide/logging-tracing/logging-log-level). For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#log_level LegacyServiceUser#log_level}
  */
  readonly logLevel?: string;
  /**
  * The name users use to log in. If not supplied, snowflake will use name instead. Login names are always case-insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#login_name LegacyServiceUser#login_name}
  */
  readonly loginName?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of minutes until the temporary lock on the user login is cleared. To protect against unauthorized user login, Snowflake places a temporary lock on a user after five consecutive unsuccessful login attempts. When creating a user, this property can be set to prevent them from logging in until the specified amount of time passes. To remove a lock immediately for a user, specify a value of 0 for this parameter. **Note** because this value changes continuously after setting it, the provider is currently NOT handling the external changes to it. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#mins_to_unlock LegacyServiceUser#mins_to_unlock}
  */
  readonly minsToUnlock?: number;
  /**
  * Number of statements to execute when using the multi-statement capability. For more information, check [MULTI_STATEMENT_COUNT docs](https://docs.snowflake.com/en/sql-reference/parameters#multi-statement-count).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#multi_statement_count LegacyServiceUser#multi_statement_count}
  */
  readonly multiStatementCount?: number;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the user is forced to change their password on next login (including their first/initial login) into the system. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#must_change_password LegacyServiceUser#must_change_password}
  */
  readonly mustChangePassword?: string;
  /**
  * Name of the user. Note that if you do not supply login_name this will be used as login_name. Check the [docs](https://docs.snowflake.net/manuals/sql-reference/sql/create-user.html#required-parameters). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#name LegacyServiceUser#name}
  */
  readonly name: string;
  /**
  * Specifies the network policy to enforce for your account. Network policies enable restricting access to your account based on users’ IP address. For more details, see [Controlling network traffic with network policies](https://docs.snowflake.com/en/user-guide/network-policies). Any existing network policy (created using [CREATE NETWORK POLICY](https://docs.snowflake.com/en/sql-reference/sql/create-network-policy)). For more information, check [NETWORK_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#network-policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#network_policy LegacyServiceUser#network_policy}
  */
  readonly networkPolicy?: string;
  /**
  * Specifies whether the ORDER or NOORDER property is set by default when you create a new sequence or add a new table column. The ORDER and NOORDER properties determine whether or not the values are generated for the sequence or auto-incremented column in [increasing or decreasing order](https://docs.snowflake.com/en/user-guide/querying-sequences.html#label-querying-sequences-increasing-values). For more information, check [NOORDER_SEQUENCE_AS_DEFAULT docs](https://docs.snowflake.com/en/sql-reference/parameters#noorder-sequence-as-default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#noorder_sequence_as_default LegacyServiceUser#noorder_sequence_as_default}
  */
  readonly noorderSequenceAsDefault?: boolean | cdktn.IResolvable;
  /**
  * Specifies how ODBC processes columns that have a scale of zero (0). For more information, check [ODBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#odbc-treat-decimal-as-int).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#odbc_treat_decimal_as_int LegacyServiceUser#odbc_treat_decimal_as_int}
  */
  readonly odbcTreatDecimalAsInt?: boolean | cdktn.IResolvable;
  /**
  * Password for the user. **WARNING:** this will put the password in the terraform state file. Use carefully. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#password LegacyServiceUser#password}
  */
  readonly password?: string;
  /**
  * Specifies whether to prevent data unload operations to internal (Snowflake) stages using [COPY INTO <location>](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements. For more information, check [PREVENT_UNLOAD_TO_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-internal-stages).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#prevent_unload_to_internal_stages LegacyServiceUser#prevent_unload_to_internal_stages}
  */
  readonly preventUnloadToInternalStages?: boolean | cdktn.IResolvable;
  /**
  * Optional string that can be used to tag queries and other SQL statements executed within a session. The tags are displayed in the output of the [QUERY_HISTORY, QUERY_HISTORY_BY_*](https://docs.snowflake.com/en/sql-reference/functions/query_history) functions. For more information, check [QUERY_TAG docs](https://docs.snowflake.com/en/sql-reference/parameters#query-tag).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#query_tag LegacyServiceUser#query_tag}
  */
  readonly queryTag?: string;
  /**
  * Specifies whether letters in double-quoted object identifiers are stored and resolved as uppercase letters. By default, Snowflake preserves the case of alphabetic characters when storing and resolving double-quoted identifiers (see [Identifier resolution](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing)). You can use this parameter in situations in which [third-party applications always use double quotes around identifiers](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing-parameter). For more information, check [QUOTED_IDENTIFIERS_IGNORE_CASE docs](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#quoted_identifiers_ignore_case LegacyServiceUser#quoted_identifiers_ignore_case}
  */
  readonly quotedIdentifiersIgnoreCase?: boolean | cdktn.IResolvable;
  /**
  * Specifies the maximum number of rows returned in a result set. A value of 0 specifies no maximum. For more information, check [ROWS_PER_RESULTSET docs](https://docs.snowflake.com/en/sql-reference/parameters#rows-per-resultset).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#rows_per_resultset LegacyServiceUser#rows_per_resultset}
  */
  readonly rowsPerResultset?: number;
  /**
  * Specifies the user’s RSA public key; used for key-pair authentication. Must be on 1 line without header and trailer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#rsa_public_key LegacyServiceUser#rsa_public_key}
  */
  readonly rsaPublicKey?: string;
  /**
  * Specifies the user’s second RSA public key; used to rotate the public and private keys for key-pair authentication based on an expiration schedule set by your organization. Must be on 1 line without header and trailer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#rsa_public_key_2 LegacyServiceUser#rsa_public_key_2}
  */
  readonly rsaPublicKey2?: string;
  /**
  * Specifies the DNS name of an Amazon S3 interface endpoint. Requests sent to the internal stage of an account via [AWS PrivateLink for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html) use this endpoint to connect. For more information, see [Accessing Internal stages with dedicated interface endpoints](https://docs.snowflake.com/en/user-guide/private-internal-stages-aws.html#label-aws-privatelink-internal-stage-network-isolation). For more information, check [S3_STAGE_VPCE_DNS_NAME docs](https://docs.snowflake.com/en/sql-reference/parameters#s3-stage-vpce-dns-name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#s3_stage_vpce_dns_name LegacyServiceUser#s3_stage_vpce_dns_name}
  */
  readonly s3StageVpceDnsName?: string;
  /**
  * Specifies the path to search to resolve unqualified object names in queries. For more information, see [Name resolution in queries](https://docs.snowflake.com/en/sql-reference/name-resolution.html#label-object-name-resolution-search-path). Comma-separated list of identifiers. An identifier can be a fully or partially qualified schema name. For more information, check [SEARCH_PATH docs](https://docs.snowflake.com/en/sql-reference/parameters#search-path).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#search_path LegacyServiceUser#search_path}
  */
  readonly searchPath?: string;
  /**
  * Specifies the name of a consumer account to simulate for testing/validating shared data, particularly shared secure views. When this parameter is set in a session, shared views return rows as if executed in the specified consumer account rather than the provider account. For more information, see [Introduction to Secure Data Sharing](https://docs.snowflake.com/en/user-guide/data-sharing-intro) and [Working with shares](https://docs.snowflake.com/en/user-guide/data-sharing-provider). For more information, check [SIMULATED_DATA_SHARING_CONSUMER docs](https://docs.snowflake.com/en/sql-reference/parameters#simulated-data-sharing-consumer).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#simulated_data_sharing_consumer LegacyServiceUser#simulated_data_sharing_consumer}
  */
  readonly simulatedDataSharingConsumer?: string;
  /**
  * Amount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a warehouse before it is canceled by the system. This parameter can be used in conjunction with the [MAX_CONCURRENCY_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters#label-max-concurrency-level) parameter to ensure a warehouse is never backlogged. For more information, check [STATEMENT_QUEUED_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-queued-timeout-in-seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#statement_queued_timeout_in_seconds LegacyServiceUser#statement_queued_timeout_in_seconds}
  */
  readonly statementQueuedTimeoutInSeconds?: number;
  /**
  * Amount of time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. For more information, check [STATEMENT_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-timeout-in-seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#statement_timeout_in_seconds LegacyServiceUser#statement_timeout_in_seconds}
  */
  readonly statementTimeoutInSeconds?: number;
  /**
  * This parameter specifies whether JSON output in a session is compatible with the general standard (as described by [http://json.org](http://json.org)). By design, Snowflake allows JSON input that contains non-standard values; however, these non-standard values might result in Snowflake outputting JSON that is incompatible with other platforms and languages. This parameter, when enabled, ensures that Snowflake outputs valid/compatible JSON. For more information, check [STRICT_JSON_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#strict-json-output).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#strict_json_output LegacyServiceUser#strict_json_output}
  */
  readonly strictJsonOutput?: boolean | cdktn.IResolvable;
  /**
  * Specifies the input format for the TIME data type. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported time format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of times stored in the system during the session). For more information, check [TIME_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-input-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#time_input_format LegacyServiceUser#time_input_format}
  */
  readonly timeInputFormat?: string;
  /**
  * Specifies the display format for the TIME data type. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIME_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#time_output_format LegacyServiceUser#time_output_format}
  */
  readonly timeOutputFormat?: string;
  /**
  * Specifies whether the [DATEADD](https://docs.snowflake.com/en/sql-reference/functions/dateadd) function (and its aliases) always consider a day to be exactly 24 hours for expressions that span multiple days. For more information, check [TIMESTAMP_DAY_IS_ALWAYS_24H docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-day-is-always-24h).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#timestamp_day_is_always_24h LegacyServiceUser#timestamp_day_is_always_24h}
  */
  readonly timestampDayIsAlways24H?: boolean | cdktn.IResolvable;
  /**
  * Specifies the input format for the TIMESTAMP data type alias. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported timestamp format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of timestamps stored in the system during the session). For more information, check [TIMESTAMP_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-input-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#timestamp_input_format LegacyServiceUser#timestamp_input_format}
  */
  readonly timestampInputFormat?: string;
  /**
  * Specifies the display format for the TIMESTAMP_LTZ data type. If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_LTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ltz-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#timestamp_ltz_output_format LegacyServiceUser#timestamp_ltz_output_format}
  */
  readonly timestampLtzOutputFormat?: string;
  /**
  * Specifies the display format for the TIMESTAMP_NTZ data type. For more information, check [TIMESTAMP_NTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ntz-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#timestamp_ntz_output_format LegacyServiceUser#timestamp_ntz_output_format}
  */
  readonly timestampNtzOutputFormat?: string;
  /**
  * Specifies the display format for the TIMESTAMP data type alias. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#timestamp_output_format LegacyServiceUser#timestamp_output_format}
  */
  readonly timestampOutputFormat?: string;
  /**
  * Specifies the TIMESTAMP_* variation that the TIMESTAMP data type alias maps to. For more information, check [TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-type-mapping).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#timestamp_type_mapping LegacyServiceUser#timestamp_type_mapping}
  */
  readonly timestampTypeMapping?: string;
  /**
  * Specifies the display format for the TIMESTAMP_TZ data type. If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_TZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-tz-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#timestamp_tz_output_format LegacyServiceUser#timestamp_tz_output_format}
  */
  readonly timestampTzOutputFormat?: string;
  /**
  * Specifies the time zone for the session. You can specify a [time zone name](https://data.iana.org/time-zones/tzdb-2021a/zone1970.tab) or a [link name](https://data.iana.org/time-zones/tzdb-2021a/backward) from release 2021a of the [IANA Time Zone Database](https://www.iana.org/time-zones) (e.g. America/Los_Angeles, Europe/London, UTC, Etc/GMT, etc.). For more information, check [TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#timezone).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#timezone LegacyServiceUser#timezone}
  */
  readonly timezone?: string;
  /**
  * Controls how trace events are ingested into the event table. For more information about trace levels, see [Setting trace level](https://docs.snowflake.com/en/developer-guide/logging-tracing/tracing-trace-level). For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#trace_level LegacyServiceUser#trace_level}
  */
  readonly traceLevel?: string;
  /**
  * Specifies the action to perform when a statement issued within a non-autocommit transaction returns with an error. For more information, check [TRANSACTION_ABORT_ON_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-abort-on-error).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#transaction_abort_on_error LegacyServiceUser#transaction_abort_on_error}
  */
  readonly transactionAbortOnError?: boolean | cdktn.IResolvable;
  /**
  * Specifies the isolation level for transactions in the user session. For more information, check [TRANSACTION_DEFAULT_ISOLATION_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-default-isolation-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#transaction_default_isolation_level LegacyServiceUser#transaction_default_isolation_level}
  */
  readonly transactionDefaultIsolationLevel?: string;
  /**
  * Specifies the “century start” year for 2-digit years (i.e. the earliest year such dates can represent). This parameter prevents ambiguous dates when importing or converting data with the `YY` date format component (i.e. years represented as 2 digits). For more information, check [TWO_DIGIT_CENTURY_START docs](https://docs.snowflake.com/en/sql-reference/parameters#two-digit-century-start).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#two_digit_century_start LegacyServiceUser#two_digit_century_start}
  */
  readonly twoDigitCenturyStart?: number;
  /**
  * Determines if an unsupported (i.e. non-default) value specified for a constraint property returns an error. For more information, check [UNSUPPORTED_DDL_ACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#unsupported-ddl-action).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#unsupported_ddl_action LegacyServiceUser#unsupported_ddl_action}
  */
  readonly unsupportedDdlAction?: string;
  /**
  * Specifies whether to reuse persisted query results, if available, when a matching query is submitted. For more information, check [USE_CACHED_RESULT docs](https://docs.snowflake.com/en/sql-reference/parameters#use-cached-result).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#use_cached_result LegacyServiceUser#use_cached_result}
  */
  readonly useCachedResult?: boolean | cdktn.IResolvable;
  /**
  * Specifies how the weeks in a given year are computed. `0`: The semantics used are equivalent to the ISO semantics, in which a week belongs to a given year if at least 4 days of that week are in that year. `1`: January 1 is included in the first week of the year and December 31 is included in the last week of the year. For more information, check [WEEK_OF_YEAR_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#week-of-year-policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#week_of_year_policy LegacyServiceUser#week_of_year_policy}
  */
  readonly weekOfYearPolicy?: number;
  /**
  * Specifies the first day of the week (used by week-related date functions). `0`: Legacy Snowflake behavior is used (i.e. ISO-like semantics). `1` (Monday) to `7` (Sunday): All the week-related functions use weeks that start on the specified day of the week. For more information, check [WEEK_START docs](https://docs.snowflake.com/en/sql-reference/parameters#week-start).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#week_start LegacyServiceUser#week_start}
  */
  readonly weekStart?: number;
  /**
  * default_workload_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#default_workload_identity LegacyServiceUser#default_workload_identity}
  */
  readonly defaultWorkloadIdentity?: LegacyServiceUserDefaultWorkloadIdentity;
}
export interface LegacyServiceUserParametersAbortDetachedQuery {
}

export function legacyServiceUserParametersAbortDetachedQueryToTerraform(struct?: LegacyServiceUserParametersAbortDetachedQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersAbortDetachedQueryToHclTerraform(struct?: LegacyServiceUserParametersAbortDetachedQuery): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersAbortDetachedQueryOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersAbortDetachedQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersAbortDetachedQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersAbortDetachedQueryList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersAbortDetachedQueryOutputReference {
    return new LegacyServiceUserParametersAbortDetachedQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersAutocommit {
}

export function legacyServiceUserParametersAutocommitToTerraform(struct?: LegacyServiceUserParametersAutocommit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersAutocommitToHclTerraform(struct?: LegacyServiceUserParametersAutocommit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersAutocommitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersAutocommit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersAutocommit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersAutocommitList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersAutocommitOutputReference {
    return new LegacyServiceUserParametersAutocommitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersBinaryInputFormat {
}

export function legacyServiceUserParametersBinaryInputFormatToTerraform(struct?: LegacyServiceUserParametersBinaryInputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersBinaryInputFormatToHclTerraform(struct?: LegacyServiceUserParametersBinaryInputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersBinaryInputFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersBinaryInputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersBinaryInputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersBinaryInputFormatList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersBinaryInputFormatOutputReference {
    return new LegacyServiceUserParametersBinaryInputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersBinaryOutputFormat {
}

export function legacyServiceUserParametersBinaryOutputFormatToTerraform(struct?: LegacyServiceUserParametersBinaryOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersBinaryOutputFormatToHclTerraform(struct?: LegacyServiceUserParametersBinaryOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersBinaryOutputFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersBinaryOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersBinaryOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersBinaryOutputFormatList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersBinaryOutputFormatOutputReference {
    return new LegacyServiceUserParametersBinaryOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersClientMemoryLimit {
}

export function legacyServiceUserParametersClientMemoryLimitToTerraform(struct?: LegacyServiceUserParametersClientMemoryLimit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersClientMemoryLimitToHclTerraform(struct?: LegacyServiceUserParametersClientMemoryLimit): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersClientMemoryLimitOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersClientMemoryLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersClientMemoryLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersClientMemoryLimitList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersClientMemoryLimitOutputReference {
    return new LegacyServiceUserParametersClientMemoryLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersClientMetadataRequestUseConnectionCtx {
}

export function legacyServiceUserParametersClientMetadataRequestUseConnectionCtxToTerraform(struct?: LegacyServiceUserParametersClientMetadataRequestUseConnectionCtx): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersClientMetadataRequestUseConnectionCtxToHclTerraform(struct?: LegacyServiceUserParametersClientMetadataRequestUseConnectionCtx): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersClientMetadataRequestUseConnectionCtxOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersClientMetadataRequestUseConnectionCtx | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersClientMetadataRequestUseConnectionCtx | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersClientMetadataRequestUseConnectionCtxList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersClientMetadataRequestUseConnectionCtxOutputReference {
    return new LegacyServiceUserParametersClientMetadataRequestUseConnectionCtxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersClientPrefetchThreads {
}

export function legacyServiceUserParametersClientPrefetchThreadsToTerraform(struct?: LegacyServiceUserParametersClientPrefetchThreads): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersClientPrefetchThreadsToHclTerraform(struct?: LegacyServiceUserParametersClientPrefetchThreads): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersClientPrefetchThreadsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersClientPrefetchThreads | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersClientPrefetchThreads | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersClientPrefetchThreadsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersClientPrefetchThreadsOutputReference {
    return new LegacyServiceUserParametersClientPrefetchThreadsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersClientResultChunkSize {
}

export function legacyServiceUserParametersClientResultChunkSizeToTerraform(struct?: LegacyServiceUserParametersClientResultChunkSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersClientResultChunkSizeToHclTerraform(struct?: LegacyServiceUserParametersClientResultChunkSize): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersClientResultChunkSizeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersClientResultChunkSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersClientResultChunkSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersClientResultChunkSizeList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersClientResultChunkSizeOutputReference {
    return new LegacyServiceUserParametersClientResultChunkSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersClientResultColumnCaseInsensitive {
}

export function legacyServiceUserParametersClientResultColumnCaseInsensitiveToTerraform(struct?: LegacyServiceUserParametersClientResultColumnCaseInsensitive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersClientResultColumnCaseInsensitiveToHclTerraform(struct?: LegacyServiceUserParametersClientResultColumnCaseInsensitive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersClientResultColumnCaseInsensitiveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersClientResultColumnCaseInsensitive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersClientResultColumnCaseInsensitive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersClientResultColumnCaseInsensitiveList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersClientResultColumnCaseInsensitiveOutputReference {
    return new LegacyServiceUserParametersClientResultColumnCaseInsensitiveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersClientSessionKeepAlive {
}

export function legacyServiceUserParametersClientSessionKeepAliveToTerraform(struct?: LegacyServiceUserParametersClientSessionKeepAlive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersClientSessionKeepAliveToHclTerraform(struct?: LegacyServiceUserParametersClientSessionKeepAlive): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersClientSessionKeepAliveOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersClientSessionKeepAlive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersClientSessionKeepAlive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersClientSessionKeepAliveList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersClientSessionKeepAliveOutputReference {
    return new LegacyServiceUserParametersClientSessionKeepAliveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersClientSessionKeepAliveHeartbeatFrequency {
}

export function legacyServiceUserParametersClientSessionKeepAliveHeartbeatFrequencyToTerraform(struct?: LegacyServiceUserParametersClientSessionKeepAliveHeartbeatFrequency): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersClientSessionKeepAliveHeartbeatFrequencyToHclTerraform(struct?: LegacyServiceUserParametersClientSessionKeepAliveHeartbeatFrequency): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersClientSessionKeepAliveHeartbeatFrequencyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersClientSessionKeepAliveHeartbeatFrequency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersClientSessionKeepAliveHeartbeatFrequency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersClientSessionKeepAliveHeartbeatFrequencyList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersClientSessionKeepAliveHeartbeatFrequencyOutputReference {
    return new LegacyServiceUserParametersClientSessionKeepAliveHeartbeatFrequencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersClientTimestampTypeMapping {
}

export function legacyServiceUserParametersClientTimestampTypeMappingToTerraform(struct?: LegacyServiceUserParametersClientTimestampTypeMapping): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersClientTimestampTypeMappingToHclTerraform(struct?: LegacyServiceUserParametersClientTimestampTypeMapping): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersClientTimestampTypeMappingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersClientTimestampTypeMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersClientTimestampTypeMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersClientTimestampTypeMappingList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersClientTimestampTypeMappingOutputReference {
    return new LegacyServiceUserParametersClientTimestampTypeMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersDateInputFormat {
}

export function legacyServiceUserParametersDateInputFormatToTerraform(struct?: LegacyServiceUserParametersDateInputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersDateInputFormatToHclTerraform(struct?: LegacyServiceUserParametersDateInputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersDateInputFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersDateInputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersDateInputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersDateInputFormatList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersDateInputFormatOutputReference {
    return new LegacyServiceUserParametersDateInputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersDateOutputFormat {
}

export function legacyServiceUserParametersDateOutputFormatToTerraform(struct?: LegacyServiceUserParametersDateOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersDateOutputFormatToHclTerraform(struct?: LegacyServiceUserParametersDateOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersDateOutputFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersDateOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersDateOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersDateOutputFormatList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersDateOutputFormatOutputReference {
    return new LegacyServiceUserParametersDateOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersEnableUnloadPhysicalTypeOptimization {
}

export function legacyServiceUserParametersEnableUnloadPhysicalTypeOptimizationToTerraform(struct?: LegacyServiceUserParametersEnableUnloadPhysicalTypeOptimization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersEnableUnloadPhysicalTypeOptimizationToHclTerraform(struct?: LegacyServiceUserParametersEnableUnloadPhysicalTypeOptimization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersEnableUnloadPhysicalTypeOptimizationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersEnableUnloadPhysicalTypeOptimization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersEnableUnloadPhysicalTypeOptimization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersEnableUnloadPhysicalTypeOptimizationList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersEnableUnloadPhysicalTypeOptimizationOutputReference {
    return new LegacyServiceUserParametersEnableUnloadPhysicalTypeOptimizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersEnableUnredactedQuerySyntaxError {
}

export function legacyServiceUserParametersEnableUnredactedQuerySyntaxErrorToTerraform(struct?: LegacyServiceUserParametersEnableUnredactedQuerySyntaxError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersEnableUnredactedQuerySyntaxErrorToHclTerraform(struct?: LegacyServiceUserParametersEnableUnredactedQuerySyntaxError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersEnableUnredactedQuerySyntaxErrorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersEnableUnredactedQuerySyntaxError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersEnableUnredactedQuerySyntaxError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersEnableUnredactedQuerySyntaxErrorList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersEnableUnredactedQuerySyntaxErrorOutputReference {
    return new LegacyServiceUserParametersEnableUnredactedQuerySyntaxErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersErrorOnNondeterministicMerge {
}

export function legacyServiceUserParametersErrorOnNondeterministicMergeToTerraform(struct?: LegacyServiceUserParametersErrorOnNondeterministicMerge): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersErrorOnNondeterministicMergeToHclTerraform(struct?: LegacyServiceUserParametersErrorOnNondeterministicMerge): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersErrorOnNondeterministicMergeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersErrorOnNondeterministicMerge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersErrorOnNondeterministicMerge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersErrorOnNondeterministicMergeList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersErrorOnNondeterministicMergeOutputReference {
    return new LegacyServiceUserParametersErrorOnNondeterministicMergeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersErrorOnNondeterministicUpdate {
}

export function legacyServiceUserParametersErrorOnNondeterministicUpdateToTerraform(struct?: LegacyServiceUserParametersErrorOnNondeterministicUpdate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersErrorOnNondeterministicUpdateToHclTerraform(struct?: LegacyServiceUserParametersErrorOnNondeterministicUpdate): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersErrorOnNondeterministicUpdateOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersErrorOnNondeterministicUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersErrorOnNondeterministicUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersErrorOnNondeterministicUpdateList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersErrorOnNondeterministicUpdateOutputReference {
    return new LegacyServiceUserParametersErrorOnNondeterministicUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersGeographyOutputFormat {
}

export function legacyServiceUserParametersGeographyOutputFormatToTerraform(struct?: LegacyServiceUserParametersGeographyOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersGeographyOutputFormatToHclTerraform(struct?: LegacyServiceUserParametersGeographyOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersGeographyOutputFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersGeographyOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersGeographyOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersGeographyOutputFormatList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersGeographyOutputFormatOutputReference {
    return new LegacyServiceUserParametersGeographyOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersGeometryOutputFormat {
}

export function legacyServiceUserParametersGeometryOutputFormatToTerraform(struct?: LegacyServiceUserParametersGeometryOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersGeometryOutputFormatToHclTerraform(struct?: LegacyServiceUserParametersGeometryOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersGeometryOutputFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersGeometryOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersGeometryOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersGeometryOutputFormatList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersGeometryOutputFormatOutputReference {
    return new LegacyServiceUserParametersGeometryOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersJdbcTreatDecimalAsInt {
}

export function legacyServiceUserParametersJdbcTreatDecimalAsIntToTerraform(struct?: LegacyServiceUserParametersJdbcTreatDecimalAsInt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersJdbcTreatDecimalAsIntToHclTerraform(struct?: LegacyServiceUserParametersJdbcTreatDecimalAsInt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersJdbcTreatDecimalAsIntOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersJdbcTreatDecimalAsInt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersJdbcTreatDecimalAsInt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersJdbcTreatDecimalAsIntList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersJdbcTreatDecimalAsIntOutputReference {
    return new LegacyServiceUserParametersJdbcTreatDecimalAsIntOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersJdbcTreatTimestampNtzAsUtc {
}

export function legacyServiceUserParametersJdbcTreatTimestampNtzAsUtcToTerraform(struct?: LegacyServiceUserParametersJdbcTreatTimestampNtzAsUtc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersJdbcTreatTimestampNtzAsUtcToHclTerraform(struct?: LegacyServiceUserParametersJdbcTreatTimestampNtzAsUtc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersJdbcTreatTimestampNtzAsUtcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersJdbcTreatTimestampNtzAsUtc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersJdbcTreatTimestampNtzAsUtc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersJdbcTreatTimestampNtzAsUtcList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersJdbcTreatTimestampNtzAsUtcOutputReference {
    return new LegacyServiceUserParametersJdbcTreatTimestampNtzAsUtcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersJdbcUseSessionTimezone {
}

export function legacyServiceUserParametersJdbcUseSessionTimezoneToTerraform(struct?: LegacyServiceUserParametersJdbcUseSessionTimezone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersJdbcUseSessionTimezoneToHclTerraform(struct?: LegacyServiceUserParametersJdbcUseSessionTimezone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersJdbcUseSessionTimezoneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersJdbcUseSessionTimezone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersJdbcUseSessionTimezone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersJdbcUseSessionTimezoneList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersJdbcUseSessionTimezoneOutputReference {
    return new LegacyServiceUserParametersJdbcUseSessionTimezoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersJsonIndent {
}

export function legacyServiceUserParametersJsonIndentToTerraform(struct?: LegacyServiceUserParametersJsonIndent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersJsonIndentToHclTerraform(struct?: LegacyServiceUserParametersJsonIndent): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersJsonIndentOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersJsonIndent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersJsonIndent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersJsonIndentList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersJsonIndentOutputReference {
    return new LegacyServiceUserParametersJsonIndentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersLockTimeout {
}

export function legacyServiceUserParametersLockTimeoutToTerraform(struct?: LegacyServiceUserParametersLockTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersLockTimeoutToHclTerraform(struct?: LegacyServiceUserParametersLockTimeout): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersLockTimeoutOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersLockTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersLockTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersLockTimeoutList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersLockTimeoutOutputReference {
    return new LegacyServiceUserParametersLockTimeoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersLogLevel {
}

export function legacyServiceUserParametersLogLevelToTerraform(struct?: LegacyServiceUserParametersLogLevel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersLogLevelToHclTerraform(struct?: LegacyServiceUserParametersLogLevel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersLogLevelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersLogLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersLogLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersLogLevelList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersLogLevelOutputReference {
    return new LegacyServiceUserParametersLogLevelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersMultiStatementCount {
}

export function legacyServiceUserParametersMultiStatementCountToTerraform(struct?: LegacyServiceUserParametersMultiStatementCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersMultiStatementCountToHclTerraform(struct?: LegacyServiceUserParametersMultiStatementCount): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersMultiStatementCountOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersMultiStatementCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersMultiStatementCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersMultiStatementCountList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersMultiStatementCountOutputReference {
    return new LegacyServiceUserParametersMultiStatementCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersNetworkPolicy {
}

export function legacyServiceUserParametersNetworkPolicyToTerraform(struct?: LegacyServiceUserParametersNetworkPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersNetworkPolicyToHclTerraform(struct?: LegacyServiceUserParametersNetworkPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersNetworkPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersNetworkPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersNetworkPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersNetworkPolicyList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersNetworkPolicyOutputReference {
    return new LegacyServiceUserParametersNetworkPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersNoorderSequenceAsDefault {
}

export function legacyServiceUserParametersNoorderSequenceAsDefaultToTerraform(struct?: LegacyServiceUserParametersNoorderSequenceAsDefault): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersNoorderSequenceAsDefaultToHclTerraform(struct?: LegacyServiceUserParametersNoorderSequenceAsDefault): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersNoorderSequenceAsDefaultOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersNoorderSequenceAsDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersNoorderSequenceAsDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersNoorderSequenceAsDefaultList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersNoorderSequenceAsDefaultOutputReference {
    return new LegacyServiceUserParametersNoorderSequenceAsDefaultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersOdbcTreatDecimalAsInt {
}

export function legacyServiceUserParametersOdbcTreatDecimalAsIntToTerraform(struct?: LegacyServiceUserParametersOdbcTreatDecimalAsInt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersOdbcTreatDecimalAsIntToHclTerraform(struct?: LegacyServiceUserParametersOdbcTreatDecimalAsInt): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersOdbcTreatDecimalAsIntOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersOdbcTreatDecimalAsInt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersOdbcTreatDecimalAsInt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersOdbcTreatDecimalAsIntList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersOdbcTreatDecimalAsIntOutputReference {
    return new LegacyServiceUserParametersOdbcTreatDecimalAsIntOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersPreventUnloadToInternalStages {
}

export function legacyServiceUserParametersPreventUnloadToInternalStagesToTerraform(struct?: LegacyServiceUserParametersPreventUnloadToInternalStages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersPreventUnloadToInternalStagesToHclTerraform(struct?: LegacyServiceUserParametersPreventUnloadToInternalStages): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersPreventUnloadToInternalStagesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersPreventUnloadToInternalStages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersPreventUnloadToInternalStages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersPreventUnloadToInternalStagesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersPreventUnloadToInternalStagesOutputReference {
    return new LegacyServiceUserParametersPreventUnloadToInternalStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersQueryTag {
}

export function legacyServiceUserParametersQueryTagToTerraform(struct?: LegacyServiceUserParametersQueryTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersQueryTagToHclTerraform(struct?: LegacyServiceUserParametersQueryTag): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersQueryTagOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersQueryTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersQueryTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersQueryTagList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersQueryTagOutputReference {
    return new LegacyServiceUserParametersQueryTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersQuotedIdentifiersIgnoreCase {
}

export function legacyServiceUserParametersQuotedIdentifiersIgnoreCaseToTerraform(struct?: LegacyServiceUserParametersQuotedIdentifiersIgnoreCase): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersQuotedIdentifiersIgnoreCaseToHclTerraform(struct?: LegacyServiceUserParametersQuotedIdentifiersIgnoreCase): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersQuotedIdentifiersIgnoreCaseOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersQuotedIdentifiersIgnoreCase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersQuotedIdentifiersIgnoreCase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersQuotedIdentifiersIgnoreCaseList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersQuotedIdentifiersIgnoreCaseOutputReference {
    return new LegacyServiceUserParametersQuotedIdentifiersIgnoreCaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersRowsPerResultset {
}

export function legacyServiceUserParametersRowsPerResultsetToTerraform(struct?: LegacyServiceUserParametersRowsPerResultset): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersRowsPerResultsetToHclTerraform(struct?: LegacyServiceUserParametersRowsPerResultset): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersRowsPerResultsetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersRowsPerResultset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersRowsPerResultset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersRowsPerResultsetList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersRowsPerResultsetOutputReference {
    return new LegacyServiceUserParametersRowsPerResultsetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersS3StageVpceDnsName {
}

export function legacyServiceUserParametersS3StageVpceDnsNameToTerraform(struct?: LegacyServiceUserParametersS3StageVpceDnsName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersS3StageVpceDnsNameToHclTerraform(struct?: LegacyServiceUserParametersS3StageVpceDnsName): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersS3StageVpceDnsNameOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersS3StageVpceDnsName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersS3StageVpceDnsName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersS3StageVpceDnsNameList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersS3StageVpceDnsNameOutputReference {
    return new LegacyServiceUserParametersS3StageVpceDnsNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersSearchPath {
}

export function legacyServiceUserParametersSearchPathToTerraform(struct?: LegacyServiceUserParametersSearchPath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersSearchPathToHclTerraform(struct?: LegacyServiceUserParametersSearchPath): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersSearchPathOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersSearchPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersSearchPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersSearchPathList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersSearchPathOutputReference {
    return new LegacyServiceUserParametersSearchPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersSimulatedDataSharingConsumer {
}

export function legacyServiceUserParametersSimulatedDataSharingConsumerToTerraform(struct?: LegacyServiceUserParametersSimulatedDataSharingConsumer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersSimulatedDataSharingConsumerToHclTerraform(struct?: LegacyServiceUserParametersSimulatedDataSharingConsumer): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersSimulatedDataSharingConsumerOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersSimulatedDataSharingConsumer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersSimulatedDataSharingConsumer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersSimulatedDataSharingConsumerList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersSimulatedDataSharingConsumerOutputReference {
    return new LegacyServiceUserParametersSimulatedDataSharingConsumerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersStatementQueuedTimeoutInSeconds {
}

export function legacyServiceUserParametersStatementQueuedTimeoutInSecondsToTerraform(struct?: LegacyServiceUserParametersStatementQueuedTimeoutInSeconds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersStatementQueuedTimeoutInSecondsToHclTerraform(struct?: LegacyServiceUserParametersStatementQueuedTimeoutInSeconds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersStatementQueuedTimeoutInSecondsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersStatementQueuedTimeoutInSeconds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersStatementQueuedTimeoutInSeconds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersStatementQueuedTimeoutInSecondsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersStatementQueuedTimeoutInSecondsOutputReference {
    return new LegacyServiceUserParametersStatementQueuedTimeoutInSecondsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersStatementTimeoutInSeconds {
}

export function legacyServiceUserParametersStatementTimeoutInSecondsToTerraform(struct?: LegacyServiceUserParametersStatementTimeoutInSeconds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersStatementTimeoutInSecondsToHclTerraform(struct?: LegacyServiceUserParametersStatementTimeoutInSeconds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersStatementTimeoutInSecondsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersStatementTimeoutInSeconds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersStatementTimeoutInSeconds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersStatementTimeoutInSecondsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersStatementTimeoutInSecondsOutputReference {
    return new LegacyServiceUserParametersStatementTimeoutInSecondsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersStrictJsonOutput {
}

export function legacyServiceUserParametersStrictJsonOutputToTerraform(struct?: LegacyServiceUserParametersStrictJsonOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersStrictJsonOutputToHclTerraform(struct?: LegacyServiceUserParametersStrictJsonOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersStrictJsonOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersStrictJsonOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersStrictJsonOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersStrictJsonOutputList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersStrictJsonOutputOutputReference {
    return new LegacyServiceUserParametersStrictJsonOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersTimeInputFormat {
}

export function legacyServiceUserParametersTimeInputFormatToTerraform(struct?: LegacyServiceUserParametersTimeInputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersTimeInputFormatToHclTerraform(struct?: LegacyServiceUserParametersTimeInputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersTimeInputFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersTimeInputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersTimeInputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersTimeInputFormatList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersTimeInputFormatOutputReference {
    return new LegacyServiceUserParametersTimeInputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersTimeOutputFormat {
}

export function legacyServiceUserParametersTimeOutputFormatToTerraform(struct?: LegacyServiceUserParametersTimeOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersTimeOutputFormatToHclTerraform(struct?: LegacyServiceUserParametersTimeOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersTimeOutputFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersTimeOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersTimeOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersTimeOutputFormatList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersTimeOutputFormatOutputReference {
    return new LegacyServiceUserParametersTimeOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersTimestampDayIsAlways24H {
}

export function legacyServiceUserParametersTimestampDayIsAlways24HToTerraform(struct?: LegacyServiceUserParametersTimestampDayIsAlways24H): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersTimestampDayIsAlways24HToHclTerraform(struct?: LegacyServiceUserParametersTimestampDayIsAlways24H): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersTimestampDayIsAlways24HOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersTimestampDayIsAlways24H | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersTimestampDayIsAlways24H | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersTimestampDayIsAlways24HList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersTimestampDayIsAlways24HOutputReference {
    return new LegacyServiceUserParametersTimestampDayIsAlways24HOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersTimestampInputFormat {
}

export function legacyServiceUserParametersTimestampInputFormatToTerraform(struct?: LegacyServiceUserParametersTimestampInputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersTimestampInputFormatToHclTerraform(struct?: LegacyServiceUserParametersTimestampInputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersTimestampInputFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersTimestampInputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersTimestampInputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersTimestampInputFormatList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersTimestampInputFormatOutputReference {
    return new LegacyServiceUserParametersTimestampInputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersTimestampLtzOutputFormat {
}

export function legacyServiceUserParametersTimestampLtzOutputFormatToTerraform(struct?: LegacyServiceUserParametersTimestampLtzOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersTimestampLtzOutputFormatToHclTerraform(struct?: LegacyServiceUserParametersTimestampLtzOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersTimestampLtzOutputFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersTimestampLtzOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersTimestampLtzOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersTimestampLtzOutputFormatList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersTimestampLtzOutputFormatOutputReference {
    return new LegacyServiceUserParametersTimestampLtzOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersTimestampNtzOutputFormat {
}

export function legacyServiceUserParametersTimestampNtzOutputFormatToTerraform(struct?: LegacyServiceUserParametersTimestampNtzOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersTimestampNtzOutputFormatToHclTerraform(struct?: LegacyServiceUserParametersTimestampNtzOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersTimestampNtzOutputFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersTimestampNtzOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersTimestampNtzOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersTimestampNtzOutputFormatList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersTimestampNtzOutputFormatOutputReference {
    return new LegacyServiceUserParametersTimestampNtzOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersTimestampOutputFormat {
}

export function legacyServiceUserParametersTimestampOutputFormatToTerraform(struct?: LegacyServiceUserParametersTimestampOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersTimestampOutputFormatToHclTerraform(struct?: LegacyServiceUserParametersTimestampOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersTimestampOutputFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersTimestampOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersTimestampOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersTimestampOutputFormatList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersTimestampOutputFormatOutputReference {
    return new LegacyServiceUserParametersTimestampOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersTimestampTypeMapping {
}

export function legacyServiceUserParametersTimestampTypeMappingToTerraform(struct?: LegacyServiceUserParametersTimestampTypeMapping): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersTimestampTypeMappingToHclTerraform(struct?: LegacyServiceUserParametersTimestampTypeMapping): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersTimestampTypeMappingOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersTimestampTypeMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersTimestampTypeMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersTimestampTypeMappingList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersTimestampTypeMappingOutputReference {
    return new LegacyServiceUserParametersTimestampTypeMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersTimestampTzOutputFormat {
}

export function legacyServiceUserParametersTimestampTzOutputFormatToTerraform(struct?: LegacyServiceUserParametersTimestampTzOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersTimestampTzOutputFormatToHclTerraform(struct?: LegacyServiceUserParametersTimestampTzOutputFormat): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersTimestampTzOutputFormatOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersTimestampTzOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersTimestampTzOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersTimestampTzOutputFormatList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersTimestampTzOutputFormatOutputReference {
    return new LegacyServiceUserParametersTimestampTzOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersTimezone {
}

export function legacyServiceUserParametersTimezoneToTerraform(struct?: LegacyServiceUserParametersTimezone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersTimezoneToHclTerraform(struct?: LegacyServiceUserParametersTimezone): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersTimezoneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersTimezone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersTimezone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersTimezoneList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersTimezoneOutputReference {
    return new LegacyServiceUserParametersTimezoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersTraceLevel {
}

export function legacyServiceUserParametersTraceLevelToTerraform(struct?: LegacyServiceUserParametersTraceLevel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersTraceLevelToHclTerraform(struct?: LegacyServiceUserParametersTraceLevel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersTraceLevelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersTraceLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersTraceLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersTraceLevelList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersTraceLevelOutputReference {
    return new LegacyServiceUserParametersTraceLevelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersTransactionAbortOnError {
}

export function legacyServiceUserParametersTransactionAbortOnErrorToTerraform(struct?: LegacyServiceUserParametersTransactionAbortOnError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersTransactionAbortOnErrorToHclTerraform(struct?: LegacyServiceUserParametersTransactionAbortOnError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersTransactionAbortOnErrorOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersTransactionAbortOnError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersTransactionAbortOnError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersTransactionAbortOnErrorList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersTransactionAbortOnErrorOutputReference {
    return new LegacyServiceUserParametersTransactionAbortOnErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersTransactionDefaultIsolationLevel {
}

export function legacyServiceUserParametersTransactionDefaultIsolationLevelToTerraform(struct?: LegacyServiceUserParametersTransactionDefaultIsolationLevel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersTransactionDefaultIsolationLevelToHclTerraform(struct?: LegacyServiceUserParametersTransactionDefaultIsolationLevel): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersTransactionDefaultIsolationLevelOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersTransactionDefaultIsolationLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersTransactionDefaultIsolationLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersTransactionDefaultIsolationLevelList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersTransactionDefaultIsolationLevelOutputReference {
    return new LegacyServiceUserParametersTransactionDefaultIsolationLevelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersTwoDigitCenturyStart {
}

export function legacyServiceUserParametersTwoDigitCenturyStartToTerraform(struct?: LegacyServiceUserParametersTwoDigitCenturyStart): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersTwoDigitCenturyStartToHclTerraform(struct?: LegacyServiceUserParametersTwoDigitCenturyStart): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersTwoDigitCenturyStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersTwoDigitCenturyStart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersTwoDigitCenturyStart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersTwoDigitCenturyStartList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersTwoDigitCenturyStartOutputReference {
    return new LegacyServiceUserParametersTwoDigitCenturyStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersUnsupportedDdlAction {
}

export function legacyServiceUserParametersUnsupportedDdlActionToTerraform(struct?: LegacyServiceUserParametersUnsupportedDdlAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersUnsupportedDdlActionToHclTerraform(struct?: LegacyServiceUserParametersUnsupportedDdlAction): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersUnsupportedDdlActionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersUnsupportedDdlAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersUnsupportedDdlAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersUnsupportedDdlActionList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersUnsupportedDdlActionOutputReference {
    return new LegacyServiceUserParametersUnsupportedDdlActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersUseCachedResult {
}

export function legacyServiceUserParametersUseCachedResultToTerraform(struct?: LegacyServiceUserParametersUseCachedResult): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersUseCachedResultToHclTerraform(struct?: LegacyServiceUserParametersUseCachedResult): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersUseCachedResultOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersUseCachedResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersUseCachedResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersUseCachedResultList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersUseCachedResultOutputReference {
    return new LegacyServiceUserParametersUseCachedResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersWeekOfYearPolicy {
}

export function legacyServiceUserParametersWeekOfYearPolicyToTerraform(struct?: LegacyServiceUserParametersWeekOfYearPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersWeekOfYearPolicyToHclTerraform(struct?: LegacyServiceUserParametersWeekOfYearPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersWeekOfYearPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersWeekOfYearPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersWeekOfYearPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersWeekOfYearPolicyList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersWeekOfYearPolicyOutputReference {
    return new LegacyServiceUserParametersWeekOfYearPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParametersWeekStart {
}

export function legacyServiceUserParametersWeekStartToTerraform(struct?: LegacyServiceUserParametersWeekStart): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersWeekStartToHclTerraform(struct?: LegacyServiceUserParametersWeekStart): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersWeekStartOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParametersWeekStart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParametersWeekStart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class LegacyServiceUserParametersWeekStartList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersWeekStartOutputReference {
    return new LegacyServiceUserParametersWeekStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserParameters {
}

export function legacyServiceUserParametersToTerraform(struct?: LegacyServiceUserParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserParametersToHclTerraform(struct?: LegacyServiceUserParameters): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserParametersOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abort_detached_query - computed: true, optional: false, required: false
  private _abortDetachedQuery = new LegacyServiceUserParametersAbortDetachedQueryList(this, "abort_detached_query", false);
  public get abortDetachedQuery() {
    return this._abortDetachedQuery;
  }

  // autocommit - computed: true, optional: false, required: false
  private _autocommit = new LegacyServiceUserParametersAutocommitList(this, "autocommit", false);
  public get autocommit() {
    return this._autocommit;
  }

  // binary_input_format - computed: true, optional: false, required: false
  private _binaryInputFormat = new LegacyServiceUserParametersBinaryInputFormatList(this, "binary_input_format", false);
  public get binaryInputFormat() {
    return this._binaryInputFormat;
  }

  // binary_output_format - computed: true, optional: false, required: false
  private _binaryOutputFormat = new LegacyServiceUserParametersBinaryOutputFormatList(this, "binary_output_format", false);
  public get binaryOutputFormat() {
    return this._binaryOutputFormat;
  }

  // client_memory_limit - computed: true, optional: false, required: false
  private _clientMemoryLimit = new LegacyServiceUserParametersClientMemoryLimitList(this, "client_memory_limit", false);
  public get clientMemoryLimit() {
    return this._clientMemoryLimit;
  }

  // client_metadata_request_use_connection_ctx - computed: true, optional: false, required: false
  private _clientMetadataRequestUseConnectionCtx = new LegacyServiceUserParametersClientMetadataRequestUseConnectionCtxList(this, "client_metadata_request_use_connection_ctx", false);
  public get clientMetadataRequestUseConnectionCtx() {
    return this._clientMetadataRequestUseConnectionCtx;
  }

  // client_prefetch_threads - computed: true, optional: false, required: false
  private _clientPrefetchThreads = new LegacyServiceUserParametersClientPrefetchThreadsList(this, "client_prefetch_threads", false);
  public get clientPrefetchThreads() {
    return this._clientPrefetchThreads;
  }

  // client_result_chunk_size - computed: true, optional: false, required: false
  private _clientResultChunkSize = new LegacyServiceUserParametersClientResultChunkSizeList(this, "client_result_chunk_size", false);
  public get clientResultChunkSize() {
    return this._clientResultChunkSize;
  }

  // client_result_column_case_insensitive - computed: true, optional: false, required: false
  private _clientResultColumnCaseInsensitive = new LegacyServiceUserParametersClientResultColumnCaseInsensitiveList(this, "client_result_column_case_insensitive", false);
  public get clientResultColumnCaseInsensitive() {
    return this._clientResultColumnCaseInsensitive;
  }

  // client_session_keep_alive - computed: true, optional: false, required: false
  private _clientSessionKeepAlive = new LegacyServiceUserParametersClientSessionKeepAliveList(this, "client_session_keep_alive", false);
  public get clientSessionKeepAlive() {
    return this._clientSessionKeepAlive;
  }

  // client_session_keep_alive_heartbeat_frequency - computed: true, optional: false, required: false
  private _clientSessionKeepAliveHeartbeatFrequency = new LegacyServiceUserParametersClientSessionKeepAliveHeartbeatFrequencyList(this, "client_session_keep_alive_heartbeat_frequency", false);
  public get clientSessionKeepAliveHeartbeatFrequency() {
    return this._clientSessionKeepAliveHeartbeatFrequency;
  }

  // client_timestamp_type_mapping - computed: true, optional: false, required: false
  private _clientTimestampTypeMapping = new LegacyServiceUserParametersClientTimestampTypeMappingList(this, "client_timestamp_type_mapping", false);
  public get clientTimestampTypeMapping() {
    return this._clientTimestampTypeMapping;
  }

  // date_input_format - computed: true, optional: false, required: false
  private _dateInputFormat = new LegacyServiceUserParametersDateInputFormatList(this, "date_input_format", false);
  public get dateInputFormat() {
    return this._dateInputFormat;
  }

  // date_output_format - computed: true, optional: false, required: false
  private _dateOutputFormat = new LegacyServiceUserParametersDateOutputFormatList(this, "date_output_format", false);
  public get dateOutputFormat() {
    return this._dateOutputFormat;
  }

  // enable_unload_physical_type_optimization - computed: true, optional: false, required: false
  private _enableUnloadPhysicalTypeOptimization = new LegacyServiceUserParametersEnableUnloadPhysicalTypeOptimizationList(this, "enable_unload_physical_type_optimization", false);
  public get enableUnloadPhysicalTypeOptimization() {
    return this._enableUnloadPhysicalTypeOptimization;
  }

  // enable_unredacted_query_syntax_error - computed: true, optional: false, required: false
  private _enableUnredactedQuerySyntaxError = new LegacyServiceUserParametersEnableUnredactedQuerySyntaxErrorList(this, "enable_unredacted_query_syntax_error", false);
  public get enableUnredactedQuerySyntaxError() {
    return this._enableUnredactedQuerySyntaxError;
  }

  // error_on_nondeterministic_merge - computed: true, optional: false, required: false
  private _errorOnNondeterministicMerge = new LegacyServiceUserParametersErrorOnNondeterministicMergeList(this, "error_on_nondeterministic_merge", false);
  public get errorOnNondeterministicMerge() {
    return this._errorOnNondeterministicMerge;
  }

  // error_on_nondeterministic_update - computed: true, optional: false, required: false
  private _errorOnNondeterministicUpdate = new LegacyServiceUserParametersErrorOnNondeterministicUpdateList(this, "error_on_nondeterministic_update", false);
  public get errorOnNondeterministicUpdate() {
    return this._errorOnNondeterministicUpdate;
  }

  // geography_output_format - computed: true, optional: false, required: false
  private _geographyOutputFormat = new LegacyServiceUserParametersGeographyOutputFormatList(this, "geography_output_format", false);
  public get geographyOutputFormat() {
    return this._geographyOutputFormat;
  }

  // geometry_output_format - computed: true, optional: false, required: false
  private _geometryOutputFormat = new LegacyServiceUserParametersGeometryOutputFormatList(this, "geometry_output_format", false);
  public get geometryOutputFormat() {
    return this._geometryOutputFormat;
  }

  // jdbc_treat_decimal_as_int - computed: true, optional: false, required: false
  private _jdbcTreatDecimalAsInt = new LegacyServiceUserParametersJdbcTreatDecimalAsIntList(this, "jdbc_treat_decimal_as_int", false);
  public get jdbcTreatDecimalAsInt() {
    return this._jdbcTreatDecimalAsInt;
  }

  // jdbc_treat_timestamp_ntz_as_utc - computed: true, optional: false, required: false
  private _jdbcTreatTimestampNtzAsUtc = new LegacyServiceUserParametersJdbcTreatTimestampNtzAsUtcList(this, "jdbc_treat_timestamp_ntz_as_utc", false);
  public get jdbcTreatTimestampNtzAsUtc() {
    return this._jdbcTreatTimestampNtzAsUtc;
  }

  // jdbc_use_session_timezone - computed: true, optional: false, required: false
  private _jdbcUseSessionTimezone = new LegacyServiceUserParametersJdbcUseSessionTimezoneList(this, "jdbc_use_session_timezone", false);
  public get jdbcUseSessionTimezone() {
    return this._jdbcUseSessionTimezone;
  }

  // json_indent - computed: true, optional: false, required: false
  private _jsonIndent = new LegacyServiceUserParametersJsonIndentList(this, "json_indent", false);
  public get jsonIndent() {
    return this._jsonIndent;
  }

  // lock_timeout - computed: true, optional: false, required: false
  private _lockTimeout = new LegacyServiceUserParametersLockTimeoutList(this, "lock_timeout", false);
  public get lockTimeout() {
    return this._lockTimeout;
  }

  // log_level - computed: true, optional: false, required: false
  private _logLevel = new LegacyServiceUserParametersLogLevelList(this, "log_level", false);
  public get logLevel() {
    return this._logLevel;
  }

  // multi_statement_count - computed: true, optional: false, required: false
  private _multiStatementCount = new LegacyServiceUserParametersMultiStatementCountList(this, "multi_statement_count", false);
  public get multiStatementCount() {
    return this._multiStatementCount;
  }

  // network_policy - computed: true, optional: false, required: false
  private _networkPolicy = new LegacyServiceUserParametersNetworkPolicyList(this, "network_policy", false);
  public get networkPolicy() {
    return this._networkPolicy;
  }

  // noorder_sequence_as_default - computed: true, optional: false, required: false
  private _noorderSequenceAsDefault = new LegacyServiceUserParametersNoorderSequenceAsDefaultList(this, "noorder_sequence_as_default", false);
  public get noorderSequenceAsDefault() {
    return this._noorderSequenceAsDefault;
  }

  // odbc_treat_decimal_as_int - computed: true, optional: false, required: false
  private _odbcTreatDecimalAsInt = new LegacyServiceUserParametersOdbcTreatDecimalAsIntList(this, "odbc_treat_decimal_as_int", false);
  public get odbcTreatDecimalAsInt() {
    return this._odbcTreatDecimalAsInt;
  }

  // prevent_unload_to_internal_stages - computed: true, optional: false, required: false
  private _preventUnloadToInternalStages = new LegacyServiceUserParametersPreventUnloadToInternalStagesList(this, "prevent_unload_to_internal_stages", false);
  public get preventUnloadToInternalStages() {
    return this._preventUnloadToInternalStages;
  }

  // query_tag - computed: true, optional: false, required: false
  private _queryTag = new LegacyServiceUserParametersQueryTagList(this, "query_tag", false);
  public get queryTag() {
    return this._queryTag;
  }

  // quoted_identifiers_ignore_case - computed: true, optional: false, required: false
  private _quotedIdentifiersIgnoreCase = new LegacyServiceUserParametersQuotedIdentifiersIgnoreCaseList(this, "quoted_identifiers_ignore_case", false);
  public get quotedIdentifiersIgnoreCase() {
    return this._quotedIdentifiersIgnoreCase;
  }

  // rows_per_resultset - computed: true, optional: false, required: false
  private _rowsPerResultset = new LegacyServiceUserParametersRowsPerResultsetList(this, "rows_per_resultset", false);
  public get rowsPerResultset() {
    return this._rowsPerResultset;
  }

  // s3_stage_vpce_dns_name - computed: true, optional: false, required: false
  private _s3StageVpceDnsName = new LegacyServiceUserParametersS3StageVpceDnsNameList(this, "s3_stage_vpce_dns_name", false);
  public get s3StageVpceDnsName() {
    return this._s3StageVpceDnsName;
  }

  // search_path - computed: true, optional: false, required: false
  private _searchPath = new LegacyServiceUserParametersSearchPathList(this, "search_path", false);
  public get searchPath() {
    return this._searchPath;
  }

  // simulated_data_sharing_consumer - computed: true, optional: false, required: false
  private _simulatedDataSharingConsumer = new LegacyServiceUserParametersSimulatedDataSharingConsumerList(this, "simulated_data_sharing_consumer", false);
  public get simulatedDataSharingConsumer() {
    return this._simulatedDataSharingConsumer;
  }

  // statement_queued_timeout_in_seconds - computed: true, optional: false, required: false
  private _statementQueuedTimeoutInSeconds = new LegacyServiceUserParametersStatementQueuedTimeoutInSecondsList(this, "statement_queued_timeout_in_seconds", false);
  public get statementQueuedTimeoutInSeconds() {
    return this._statementQueuedTimeoutInSeconds;
  }

  // statement_timeout_in_seconds - computed: true, optional: false, required: false
  private _statementTimeoutInSeconds = new LegacyServiceUserParametersStatementTimeoutInSecondsList(this, "statement_timeout_in_seconds", false);
  public get statementTimeoutInSeconds() {
    return this._statementTimeoutInSeconds;
  }

  // strict_json_output - computed: true, optional: false, required: false
  private _strictJsonOutput = new LegacyServiceUserParametersStrictJsonOutputList(this, "strict_json_output", false);
  public get strictJsonOutput() {
    return this._strictJsonOutput;
  }

  // time_input_format - computed: true, optional: false, required: false
  private _timeInputFormat = new LegacyServiceUserParametersTimeInputFormatList(this, "time_input_format", false);
  public get timeInputFormat() {
    return this._timeInputFormat;
  }

  // time_output_format - computed: true, optional: false, required: false
  private _timeOutputFormat = new LegacyServiceUserParametersTimeOutputFormatList(this, "time_output_format", false);
  public get timeOutputFormat() {
    return this._timeOutputFormat;
  }

  // timestamp_day_is_always_24h - computed: true, optional: false, required: false
  private _timestampDayIsAlways24H = new LegacyServiceUserParametersTimestampDayIsAlways24HList(this, "timestamp_day_is_always_24h", false);
  public get timestampDayIsAlways24H() {
    return this._timestampDayIsAlways24H;
  }

  // timestamp_input_format - computed: true, optional: false, required: false
  private _timestampInputFormat = new LegacyServiceUserParametersTimestampInputFormatList(this, "timestamp_input_format", false);
  public get timestampInputFormat() {
    return this._timestampInputFormat;
  }

  // timestamp_ltz_output_format - computed: true, optional: false, required: false
  private _timestampLtzOutputFormat = new LegacyServiceUserParametersTimestampLtzOutputFormatList(this, "timestamp_ltz_output_format", false);
  public get timestampLtzOutputFormat() {
    return this._timestampLtzOutputFormat;
  }

  // timestamp_ntz_output_format - computed: true, optional: false, required: false
  private _timestampNtzOutputFormat = new LegacyServiceUserParametersTimestampNtzOutputFormatList(this, "timestamp_ntz_output_format", false);
  public get timestampNtzOutputFormat() {
    return this._timestampNtzOutputFormat;
  }

  // timestamp_output_format - computed: true, optional: false, required: false
  private _timestampOutputFormat = new LegacyServiceUserParametersTimestampOutputFormatList(this, "timestamp_output_format", false);
  public get timestampOutputFormat() {
    return this._timestampOutputFormat;
  }

  // timestamp_type_mapping - computed: true, optional: false, required: false
  private _timestampTypeMapping = new LegacyServiceUserParametersTimestampTypeMappingList(this, "timestamp_type_mapping", false);
  public get timestampTypeMapping() {
    return this._timestampTypeMapping;
  }

  // timestamp_tz_output_format - computed: true, optional: false, required: false
  private _timestampTzOutputFormat = new LegacyServiceUserParametersTimestampTzOutputFormatList(this, "timestamp_tz_output_format", false);
  public get timestampTzOutputFormat() {
    return this._timestampTzOutputFormat;
  }

  // timezone - computed: true, optional: false, required: false
  private _timezone = new LegacyServiceUserParametersTimezoneList(this, "timezone", false);
  public get timezone() {
    return this._timezone;
  }

  // trace_level - computed: true, optional: false, required: false
  private _traceLevel = new LegacyServiceUserParametersTraceLevelList(this, "trace_level", false);
  public get traceLevel() {
    return this._traceLevel;
  }

  // transaction_abort_on_error - computed: true, optional: false, required: false
  private _transactionAbortOnError = new LegacyServiceUserParametersTransactionAbortOnErrorList(this, "transaction_abort_on_error", false);
  public get transactionAbortOnError() {
    return this._transactionAbortOnError;
  }

  // transaction_default_isolation_level - computed: true, optional: false, required: false
  private _transactionDefaultIsolationLevel = new LegacyServiceUserParametersTransactionDefaultIsolationLevelList(this, "transaction_default_isolation_level", false);
  public get transactionDefaultIsolationLevel() {
    return this._transactionDefaultIsolationLevel;
  }

  // two_digit_century_start - computed: true, optional: false, required: false
  private _twoDigitCenturyStart = new LegacyServiceUserParametersTwoDigitCenturyStartList(this, "two_digit_century_start", false);
  public get twoDigitCenturyStart() {
    return this._twoDigitCenturyStart;
  }

  // unsupported_ddl_action - computed: true, optional: false, required: false
  private _unsupportedDdlAction = new LegacyServiceUserParametersUnsupportedDdlActionList(this, "unsupported_ddl_action", false);
  public get unsupportedDdlAction() {
    return this._unsupportedDdlAction;
  }

  // use_cached_result - computed: true, optional: false, required: false
  private _useCachedResult = new LegacyServiceUserParametersUseCachedResultList(this, "use_cached_result", false);
  public get useCachedResult() {
    return this._useCachedResult;
  }

  // week_of_year_policy - computed: true, optional: false, required: false
  private _weekOfYearPolicy = new LegacyServiceUserParametersWeekOfYearPolicyList(this, "week_of_year_policy", false);
  public get weekOfYearPolicy() {
    return this._weekOfYearPolicy;
  }

  // week_start - computed: true, optional: false, required: false
  private _weekStart = new LegacyServiceUserParametersWeekStartList(this, "week_start", false);
  public get weekStart() {
    return this._weekStart;
  }
}

export class LegacyServiceUserParametersList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserParametersOutputReference {
    return new LegacyServiceUserParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserShowOutput {
}

export function legacyServiceUserShowOutputToTerraform(struct?: LegacyServiceUserShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function legacyServiceUserShowOutputToHclTerraform(struct?: LegacyServiceUserShowOutput): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LegacyServiceUserShowOutputOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LegacyServiceUserShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // days_to_expiry - computed: true, optional: false, required: false
  public get daysToExpiry() {
    return this.getStringAttribute('days_to_expiry');
  }

  // default_namespace - computed: true, optional: false, required: false
  public get defaultNamespace() {
    return this.getStringAttribute('default_namespace');
  }

  // default_role - computed: true, optional: false, required: false
  public get defaultRole() {
    return this.getStringAttribute('default_role');
  }

  // default_secondary_roles - computed: true, optional: false, required: false
  public get defaultSecondaryRoles() {
    return this.getStringAttribute('default_secondary_roles');
  }

  // default_warehouse - computed: true, optional: false, required: false
  public get defaultWarehouse() {
    return this.getStringAttribute('default_warehouse');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // expires_at_time - computed: true, optional: false, required: false
  public get expiresAtTime() {
    return this.getStringAttribute('expires_at_time');
  }

  // ext_authn_duo - computed: true, optional: false, required: false
  public get extAuthnDuo() {
    return this.getBooleanAttribute('ext_authn_duo');
  }

  // ext_authn_uid - computed: true, optional: false, required: false
  public get extAuthnUid() {
    return this.getStringAttribute('ext_authn_uid');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // has_mfa - computed: true, optional: false, required: false
  public get hasMfa() {
    return this.getBooleanAttribute('has_mfa');
  }

  // has_password - computed: true, optional: false, required: false
  public get hasPassword() {
    return this.getBooleanAttribute('has_password');
  }

  // has_rsa_public_key - computed: true, optional: false, required: false
  public get hasRsaPublicKey() {
    return this.getBooleanAttribute('has_rsa_public_key');
  }

  // has_workload_identity - computed: true, optional: false, required: false
  public get hasWorkloadIdentity() {
    return this.getBooleanAttribute('has_workload_identity');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // last_success_login - computed: true, optional: false, required: false
  public get lastSuccessLogin() {
    return this.getStringAttribute('last_success_login');
  }

  // locked_until_time - computed: true, optional: false, required: false
  public get lockedUntilTime() {
    return this.getStringAttribute('locked_until_time');
  }

  // login_name - computed: true, optional: false, required: false
  public get loginName() {
    return this.getStringAttribute('login_name');
  }

  // mins_to_bypass_mfa - computed: true, optional: false, required: false
  public get minsToBypassMfa() {
    return this.getStringAttribute('mins_to_bypass_mfa');
  }

  // mins_to_unlock - computed: true, optional: false, required: false
  public get minsToUnlock() {
    return this.getStringAttribute('mins_to_unlock');
  }

  // must_change_password - computed: true, optional: false, required: false
  public get mustChangePassword() {
    return this.getBooleanAttribute('must_change_password');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // snowflake_lock - computed: true, optional: false, required: false
  public get snowflakeLock() {
    return this.getBooleanAttribute('snowflake_lock');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class LegacyServiceUserShowOutputList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LegacyServiceUserShowOutputOutputReference {
    return new LegacyServiceUserShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LegacyServiceUserDefaultWorkloadIdentityAws {
  /**
  * The ARN of the AWS IAM role to use for workload identity federation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#arn LegacyServiceUser#arn}
  */
  readonly arn: string;
}

export function legacyServiceUserDefaultWorkloadIdentityAwsToTerraform(struct?: LegacyServiceUserDefaultWorkloadIdentityAwsOutputReference | LegacyServiceUserDefaultWorkloadIdentityAws): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktn.stringToTerraform(struct!.arn),
  }
}


export function legacyServiceUserDefaultWorkloadIdentityAwsToHclTerraform(struct?: LegacyServiceUserDefaultWorkloadIdentityAwsOutputReference | LegacyServiceUserDefaultWorkloadIdentityAws): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktn.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LegacyServiceUserDefaultWorkloadIdentityAwsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LegacyServiceUserDefaultWorkloadIdentityAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserDefaultWorkloadIdentityAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}
export interface LegacyServiceUserDefaultWorkloadIdentityAzure {
  /**
  * The Azure issuer URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#issuer LegacyServiceUser#issuer}
  */
  readonly issuer: string;
  /**
  * The Azure subject identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#subject LegacyServiceUser#subject}
  */
  readonly subject: string;
}

export function legacyServiceUserDefaultWorkloadIdentityAzureToTerraform(struct?: LegacyServiceUserDefaultWorkloadIdentityAzureOutputReference | LegacyServiceUserDefaultWorkloadIdentityAzure): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer: cdktn.stringToTerraform(struct!.issuer),
    subject: cdktn.stringToTerraform(struct!.subject),
  }
}


export function legacyServiceUserDefaultWorkloadIdentityAzureToHclTerraform(struct?: LegacyServiceUserDefaultWorkloadIdentityAzureOutputReference | LegacyServiceUserDefaultWorkloadIdentityAzure): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktn.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LegacyServiceUserDefaultWorkloadIdentityAzureOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LegacyServiceUserDefaultWorkloadIdentityAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserDefaultWorkloadIdentityAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issuer = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issuer = value.issuer;
      this._subject = value.subject;
    }
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface LegacyServiceUserDefaultWorkloadIdentityGcp {
  /**
  * The GCP service account subject identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#subject LegacyServiceUser#subject}
  */
  readonly subject: string;
}

export function legacyServiceUserDefaultWorkloadIdentityGcpToTerraform(struct?: LegacyServiceUserDefaultWorkloadIdentityGcpOutputReference | LegacyServiceUserDefaultWorkloadIdentityGcp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject: cdktn.stringToTerraform(struct!.subject),
  }
}


export function legacyServiceUserDefaultWorkloadIdentityGcpToHclTerraform(struct?: LegacyServiceUserDefaultWorkloadIdentityGcpOutputReference | LegacyServiceUserDefaultWorkloadIdentityGcp): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subject: {
      value: cdktn.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LegacyServiceUserDefaultWorkloadIdentityGcpOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LegacyServiceUserDefaultWorkloadIdentityGcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserDefaultWorkloadIdentityGcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subject = value.subject;
    }
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface LegacyServiceUserDefaultWorkloadIdentityOidc {
  /**
  * The OIDC issuer URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#issuer LegacyServiceUser#issuer}
  */
  readonly issuer: string;
  /**
  * List of allowed OIDC audiences.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#oidc_audience_list LegacyServiceUser#oidc_audience_list}
  */
  readonly oidcAudienceList?: string[];
  /**
  * The OIDC subject identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#subject LegacyServiceUser#subject}
  */
  readonly subject: string;
}

export function legacyServiceUserDefaultWorkloadIdentityOidcToTerraform(struct?: LegacyServiceUserDefaultWorkloadIdentityOidcOutputReference | LegacyServiceUserDefaultWorkloadIdentityOidc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer: cdktn.stringToTerraform(struct!.issuer),
    oidc_audience_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.oidcAudienceList),
    subject: cdktn.stringToTerraform(struct!.subject),
  }
}


export function legacyServiceUserDefaultWorkloadIdentityOidcToHclTerraform(struct?: LegacyServiceUserDefaultWorkloadIdentityOidcOutputReference | LegacyServiceUserDefaultWorkloadIdentityOidc): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issuer: {
      value: cdktn.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oidc_audience_list: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.oidcAudienceList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subject: {
      value: cdktn.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LegacyServiceUserDefaultWorkloadIdentityOidcOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LegacyServiceUserDefaultWorkloadIdentityOidc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._oidcAudienceList !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcAudienceList = this._oidcAudienceList;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserDefaultWorkloadIdentityOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issuer = undefined;
      this._oidcAudienceList = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issuer = value.issuer;
      this._oidcAudienceList = value.oidcAudienceList;
      this._subject = value.subject;
    }
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // oidc_audience_list - computed: false, optional: true, required: false
  private _oidcAudienceList?: string[]; 
  public get oidcAudienceList() {
    return this.getListAttribute('oidc_audience_list');
  }
  public set oidcAudienceList(value: string[]) {
    this._oidcAudienceList = value;
  }
  public resetOidcAudienceList() {
    this._oidcAudienceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcAudienceListInput() {
    return this._oidcAudienceList;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface LegacyServiceUserDefaultWorkloadIdentity {
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#aws LegacyServiceUser#aws}
  */
  readonly aws?: LegacyServiceUserDefaultWorkloadIdentityAws;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#azure LegacyServiceUser#azure}
  */
  readonly azure?: LegacyServiceUserDefaultWorkloadIdentityAzure;
  /**
  * gcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#gcp LegacyServiceUser#gcp}
  */
  readonly gcp?: LegacyServiceUserDefaultWorkloadIdentityGcp;
  /**
  * oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#oidc LegacyServiceUser#oidc}
  */
  readonly oidc?: LegacyServiceUserDefaultWorkloadIdentityOidc;
}

export function legacyServiceUserDefaultWorkloadIdentityToTerraform(struct?: LegacyServiceUserDefaultWorkloadIdentityOutputReference | LegacyServiceUserDefaultWorkloadIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: legacyServiceUserDefaultWorkloadIdentityAwsToTerraform(struct!.aws),
    azure: legacyServiceUserDefaultWorkloadIdentityAzureToTerraform(struct!.azure),
    gcp: legacyServiceUserDefaultWorkloadIdentityGcpToTerraform(struct!.gcp),
    oidc: legacyServiceUserDefaultWorkloadIdentityOidcToTerraform(struct!.oidc),
  }
}


export function legacyServiceUserDefaultWorkloadIdentityToHclTerraform(struct?: LegacyServiceUserDefaultWorkloadIdentityOutputReference | LegacyServiceUserDefaultWorkloadIdentity): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: legacyServiceUserDefaultWorkloadIdentityAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "list",
      storageClassType: "LegacyServiceUserDefaultWorkloadIdentityAwsList",
    },
    azure: {
      value: legacyServiceUserDefaultWorkloadIdentityAzureToHclTerraform(struct!.azure),
      isBlock: true,
      type: "list",
      storageClassType: "LegacyServiceUserDefaultWorkloadIdentityAzureList",
    },
    gcp: {
      value: legacyServiceUserDefaultWorkloadIdentityGcpToHclTerraform(struct!.gcp),
      isBlock: true,
      type: "list",
      storageClassType: "LegacyServiceUserDefaultWorkloadIdentityGcpList",
    },
    oidc: {
      value: legacyServiceUserDefaultWorkloadIdentityOidcToHclTerraform(struct!.oidc),
      isBlock: true,
      type: "list",
      storageClassType: "LegacyServiceUserDefaultWorkloadIdentityOidcList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LegacyServiceUserDefaultWorkloadIdentityOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LegacyServiceUserDefaultWorkloadIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._azure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure?.internalValue;
    }
    if (this._gcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcp = this._gcp?.internalValue;
    }
    if (this._oidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidc = this._oidc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LegacyServiceUserDefaultWorkloadIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aws.internalValue = undefined;
      this._azure.internalValue = undefined;
      this._gcp.internalValue = undefined;
      this._oidc.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aws.internalValue = value.aws;
      this._azure.internalValue = value.azure;
      this._gcp.internalValue = value.gcp;
      this._oidc.internalValue = value.oidc;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new LegacyServiceUserDefaultWorkloadIdentityAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: LegacyServiceUserDefaultWorkloadIdentityAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new LegacyServiceUserDefaultWorkloadIdentityAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: LegacyServiceUserDefaultWorkloadIdentityAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // gcp - computed: false, optional: true, required: false
  private _gcp = new LegacyServiceUserDefaultWorkloadIdentityGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }
  public putGcp(value: LegacyServiceUserDefaultWorkloadIdentityGcp) {
    this._gcp.internalValue = value;
  }
  public resetGcp() {
    this._gcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpInput() {
    return this._gcp.internalValue;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new LegacyServiceUserDefaultWorkloadIdentityOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: LegacyServiceUserDefaultWorkloadIdentityOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user snowflake_legacy_service_user}
*/
export class LegacyServiceUser extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_legacy_service_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LegacyServiceUser resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LegacyServiceUser to import
  * @param importFromId The id of the existing LegacyServiceUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LegacyServiceUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_legacy_service_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs/resources/legacy_service_user snowflake_legacy_service_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LegacyServiceUserConfig
  */
  public constructor(scope: Construct, id: string, config: LegacyServiceUserConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_legacy_service_user',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.14.0',
        providerVersionConstraint: ' ~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._abortDetachedQuery = config.abortDetachedQuery;
    this._autocommit = config.autocommit;
    this._binaryInputFormat = config.binaryInputFormat;
    this._binaryOutputFormat = config.binaryOutputFormat;
    this._clientMemoryLimit = config.clientMemoryLimit;
    this._clientMetadataRequestUseConnectionCtx = config.clientMetadataRequestUseConnectionCtx;
    this._clientPrefetchThreads = config.clientPrefetchThreads;
    this._clientResultChunkSize = config.clientResultChunkSize;
    this._clientResultColumnCaseInsensitive = config.clientResultColumnCaseInsensitive;
    this._clientSessionKeepAlive = config.clientSessionKeepAlive;
    this._clientSessionKeepAliveHeartbeatFrequency = config.clientSessionKeepAliveHeartbeatFrequency;
    this._clientTimestampTypeMapping = config.clientTimestampTypeMapping;
    this._comment = config.comment;
    this._dateInputFormat = config.dateInputFormat;
    this._dateOutputFormat = config.dateOutputFormat;
    this._daysToExpiry = config.daysToExpiry;
    this._defaultNamespace = config.defaultNamespace;
    this._defaultRole = config.defaultRole;
    this._defaultSecondaryRolesOption = config.defaultSecondaryRolesOption;
    this._defaultWarehouse = config.defaultWarehouse;
    this._disabled = config.disabled;
    this._displayName = config.displayName;
    this._email = config.email;
    this._enableUnloadPhysicalTypeOptimization = config.enableUnloadPhysicalTypeOptimization;
    this._enableUnredactedQuerySyntaxError = config.enableUnredactedQuerySyntaxError;
    this._errorOnNondeterministicMerge = config.errorOnNondeterministicMerge;
    this._errorOnNondeterministicUpdate = config.errorOnNondeterministicUpdate;
    this._geographyOutputFormat = config.geographyOutputFormat;
    this._geometryOutputFormat = config.geometryOutputFormat;
    this._id = config.id;
    this._jdbcTreatDecimalAsInt = config.jdbcTreatDecimalAsInt;
    this._jdbcTreatTimestampNtzAsUtc = config.jdbcTreatTimestampNtzAsUtc;
    this._jdbcUseSessionTimezone = config.jdbcUseSessionTimezone;
    this._jsonIndent = config.jsonIndent;
    this._lockTimeout = config.lockTimeout;
    this._logLevel = config.logLevel;
    this._loginName = config.loginName;
    this._minsToUnlock = config.minsToUnlock;
    this._multiStatementCount = config.multiStatementCount;
    this._mustChangePassword = config.mustChangePassword;
    this._name = config.name;
    this._networkPolicy = config.networkPolicy;
    this._noorderSequenceAsDefault = config.noorderSequenceAsDefault;
    this._odbcTreatDecimalAsInt = config.odbcTreatDecimalAsInt;
    this._password = config.password;
    this._preventUnloadToInternalStages = config.preventUnloadToInternalStages;
    this._queryTag = config.queryTag;
    this._quotedIdentifiersIgnoreCase = config.quotedIdentifiersIgnoreCase;
    this._rowsPerResultset = config.rowsPerResultset;
    this._rsaPublicKey = config.rsaPublicKey;
    this._rsaPublicKey2 = config.rsaPublicKey2;
    this._s3StageVpceDnsName = config.s3StageVpceDnsName;
    this._searchPath = config.searchPath;
    this._simulatedDataSharingConsumer = config.simulatedDataSharingConsumer;
    this._statementQueuedTimeoutInSeconds = config.statementQueuedTimeoutInSeconds;
    this._statementTimeoutInSeconds = config.statementTimeoutInSeconds;
    this._strictJsonOutput = config.strictJsonOutput;
    this._timeInputFormat = config.timeInputFormat;
    this._timeOutputFormat = config.timeOutputFormat;
    this._timestampDayIsAlways24H = config.timestampDayIsAlways24H;
    this._timestampInputFormat = config.timestampInputFormat;
    this._timestampLtzOutputFormat = config.timestampLtzOutputFormat;
    this._timestampNtzOutputFormat = config.timestampNtzOutputFormat;
    this._timestampOutputFormat = config.timestampOutputFormat;
    this._timestampTypeMapping = config.timestampTypeMapping;
    this._timestampTzOutputFormat = config.timestampTzOutputFormat;
    this._timezone = config.timezone;
    this._traceLevel = config.traceLevel;
    this._transactionAbortOnError = config.transactionAbortOnError;
    this._transactionDefaultIsolationLevel = config.transactionDefaultIsolationLevel;
    this._twoDigitCenturyStart = config.twoDigitCenturyStart;
    this._unsupportedDdlAction = config.unsupportedDdlAction;
    this._useCachedResult = config.useCachedResult;
    this._weekOfYearPolicy = config.weekOfYearPolicy;
    this._weekStart = config.weekStart;
    this._defaultWorkloadIdentity.internalValue = config.defaultWorkloadIdentity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abort_detached_query - computed: true, optional: true, required: false
  private _abortDetachedQuery?: boolean | cdktn.IResolvable; 
  public get abortDetachedQuery() {
    return this.getBooleanAttribute('abort_detached_query');
  }
  public set abortDetachedQuery(value: boolean | cdktn.IResolvable) {
    this._abortDetachedQuery = value;
  }
  public resetAbortDetachedQuery() {
    this._abortDetachedQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortDetachedQueryInput() {
    return this._abortDetachedQuery;
  }

  // autocommit - computed: true, optional: true, required: false
  private _autocommit?: boolean | cdktn.IResolvable; 
  public get autocommit() {
    return this.getBooleanAttribute('autocommit');
  }
  public set autocommit(value: boolean | cdktn.IResolvable) {
    this._autocommit = value;
  }
  public resetAutocommit() {
    this._autocommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autocommitInput() {
    return this._autocommit;
  }

  // binary_input_format - computed: true, optional: true, required: false
  private _binaryInputFormat?: string; 
  public get binaryInputFormat() {
    return this.getStringAttribute('binary_input_format');
  }
  public set binaryInputFormat(value: string) {
    this._binaryInputFormat = value;
  }
  public resetBinaryInputFormat() {
    this._binaryInputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryInputFormatInput() {
    return this._binaryInputFormat;
  }

  // binary_output_format - computed: true, optional: true, required: false
  private _binaryOutputFormat?: string; 
  public get binaryOutputFormat() {
    return this.getStringAttribute('binary_output_format');
  }
  public set binaryOutputFormat(value: string) {
    this._binaryOutputFormat = value;
  }
  public resetBinaryOutputFormat() {
    this._binaryOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryOutputFormatInput() {
    return this._binaryOutputFormat;
  }

  // client_memory_limit - computed: true, optional: true, required: false
  private _clientMemoryLimit?: number; 
  public get clientMemoryLimit() {
    return this.getNumberAttribute('client_memory_limit');
  }
  public set clientMemoryLimit(value: number) {
    this._clientMemoryLimit = value;
  }
  public resetClientMemoryLimit() {
    this._clientMemoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMemoryLimitInput() {
    return this._clientMemoryLimit;
  }

  // client_metadata_request_use_connection_ctx - computed: true, optional: true, required: false
  private _clientMetadataRequestUseConnectionCtx?: boolean | cdktn.IResolvable; 
  public get clientMetadataRequestUseConnectionCtx() {
    return this.getBooleanAttribute('client_metadata_request_use_connection_ctx');
  }
  public set clientMetadataRequestUseConnectionCtx(value: boolean | cdktn.IResolvable) {
    this._clientMetadataRequestUseConnectionCtx = value;
  }
  public resetClientMetadataRequestUseConnectionCtx() {
    this._clientMetadataRequestUseConnectionCtx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMetadataRequestUseConnectionCtxInput() {
    return this._clientMetadataRequestUseConnectionCtx;
  }

  // client_prefetch_threads - computed: true, optional: true, required: false
  private _clientPrefetchThreads?: number; 
  public get clientPrefetchThreads() {
    return this.getNumberAttribute('client_prefetch_threads');
  }
  public set clientPrefetchThreads(value: number) {
    this._clientPrefetchThreads = value;
  }
  public resetClientPrefetchThreads() {
    this._clientPrefetchThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPrefetchThreadsInput() {
    return this._clientPrefetchThreads;
  }

  // client_result_chunk_size - computed: true, optional: true, required: false
  private _clientResultChunkSize?: number; 
  public get clientResultChunkSize() {
    return this.getNumberAttribute('client_result_chunk_size');
  }
  public set clientResultChunkSize(value: number) {
    this._clientResultChunkSize = value;
  }
  public resetClientResultChunkSize() {
    this._clientResultChunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientResultChunkSizeInput() {
    return this._clientResultChunkSize;
  }

  // client_result_column_case_insensitive - computed: true, optional: true, required: false
  private _clientResultColumnCaseInsensitive?: boolean | cdktn.IResolvable; 
  public get clientResultColumnCaseInsensitive() {
    return this.getBooleanAttribute('client_result_column_case_insensitive');
  }
  public set clientResultColumnCaseInsensitive(value: boolean | cdktn.IResolvable) {
    this._clientResultColumnCaseInsensitive = value;
  }
  public resetClientResultColumnCaseInsensitive() {
    this._clientResultColumnCaseInsensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientResultColumnCaseInsensitiveInput() {
    return this._clientResultColumnCaseInsensitive;
  }

  // client_session_keep_alive - computed: true, optional: true, required: false
  private _clientSessionKeepAlive?: boolean | cdktn.IResolvable; 
  public get clientSessionKeepAlive() {
    return this.getBooleanAttribute('client_session_keep_alive');
  }
  public set clientSessionKeepAlive(value: boolean | cdktn.IResolvable) {
    this._clientSessionKeepAlive = value;
  }
  public resetClientSessionKeepAlive() {
    this._clientSessionKeepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSessionKeepAliveInput() {
    return this._clientSessionKeepAlive;
  }

  // client_session_keep_alive_heartbeat_frequency - computed: true, optional: true, required: false
  private _clientSessionKeepAliveHeartbeatFrequency?: number; 
  public get clientSessionKeepAliveHeartbeatFrequency() {
    return this.getNumberAttribute('client_session_keep_alive_heartbeat_frequency');
  }
  public set clientSessionKeepAliveHeartbeatFrequency(value: number) {
    this._clientSessionKeepAliveHeartbeatFrequency = value;
  }
  public resetClientSessionKeepAliveHeartbeatFrequency() {
    this._clientSessionKeepAliveHeartbeatFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSessionKeepAliveHeartbeatFrequencyInput() {
    return this._clientSessionKeepAliveHeartbeatFrequency;
  }

  // client_timestamp_type_mapping - computed: true, optional: true, required: false
  private _clientTimestampTypeMapping?: string; 
  public get clientTimestampTypeMapping() {
    return this.getStringAttribute('client_timestamp_type_mapping');
  }
  public set clientTimestampTypeMapping(value: string) {
    this._clientTimestampTypeMapping = value;
  }
  public resetClientTimestampTypeMapping() {
    this._clientTimestampTypeMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTimestampTypeMappingInput() {
    return this._clientTimestampTypeMapping;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // date_input_format - computed: true, optional: true, required: false
  private _dateInputFormat?: string; 
  public get dateInputFormat() {
    return this.getStringAttribute('date_input_format');
  }
  public set dateInputFormat(value: string) {
    this._dateInputFormat = value;
  }
  public resetDateInputFormat() {
    this._dateInputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInputFormatInput() {
    return this._dateInputFormat;
  }

  // date_output_format - computed: true, optional: true, required: false
  private _dateOutputFormat?: string; 
  public get dateOutputFormat() {
    return this.getStringAttribute('date_output_format');
  }
  public set dateOutputFormat(value: string) {
    this._dateOutputFormat = value;
  }
  public resetDateOutputFormat() {
    this._dateOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateOutputFormatInput() {
    return this._dateOutputFormat;
  }

  // days_to_expiry - computed: false, optional: true, required: false
  private _daysToExpiry?: number; 
  public get daysToExpiry() {
    return this.getNumberAttribute('days_to_expiry');
  }
  public set daysToExpiry(value: number) {
    this._daysToExpiry = value;
  }
  public resetDaysToExpiry() {
    this._daysToExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysToExpiryInput() {
    return this._daysToExpiry;
  }

  // default_namespace - computed: false, optional: true, required: false
  private _defaultNamespace?: string; 
  public get defaultNamespace() {
    return this.getStringAttribute('default_namespace');
  }
  public set defaultNamespace(value: string) {
    this._defaultNamespace = value;
  }
  public resetDefaultNamespace() {
    this._defaultNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNamespaceInput() {
    return this._defaultNamespace;
  }

  // default_role - computed: false, optional: true, required: false
  private _defaultRole?: string; 
  public get defaultRole() {
    return this.getStringAttribute('default_role');
  }
  public set defaultRole(value: string) {
    this._defaultRole = value;
  }
  public resetDefaultRole() {
    this._defaultRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRoleInput() {
    return this._defaultRole;
  }

  // default_secondary_roles_option - computed: false, optional: true, required: false
  private _defaultSecondaryRolesOption?: string; 
  public get defaultSecondaryRolesOption() {
    return this.getStringAttribute('default_secondary_roles_option');
  }
  public set defaultSecondaryRolesOption(value: string) {
    this._defaultSecondaryRolesOption = value;
  }
  public resetDefaultSecondaryRolesOption() {
    this._defaultSecondaryRolesOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecondaryRolesOptionInput() {
    return this._defaultSecondaryRolesOption;
  }

  // default_warehouse - computed: false, optional: true, required: false
  private _defaultWarehouse?: string; 
  public get defaultWarehouse() {
    return this.getStringAttribute('default_warehouse');
  }
  public set defaultWarehouse(value: string) {
    this._defaultWarehouse = value;
  }
  public resetDefaultWarehouse() {
    this._defaultWarehouse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultWarehouseInput() {
    return this._defaultWarehouse;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: string; 
  public get disabled() {
    return this.getStringAttribute('disabled');
  }
  public set disabled(value: string) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // enable_unload_physical_type_optimization - computed: true, optional: true, required: false
  private _enableUnloadPhysicalTypeOptimization?: boolean | cdktn.IResolvable; 
  public get enableUnloadPhysicalTypeOptimization() {
    return this.getBooleanAttribute('enable_unload_physical_type_optimization');
  }
  public set enableUnloadPhysicalTypeOptimization(value: boolean | cdktn.IResolvable) {
    this._enableUnloadPhysicalTypeOptimization = value;
  }
  public resetEnableUnloadPhysicalTypeOptimization() {
    this._enableUnloadPhysicalTypeOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUnloadPhysicalTypeOptimizationInput() {
    return this._enableUnloadPhysicalTypeOptimization;
  }

  // enable_unredacted_query_syntax_error - computed: true, optional: true, required: false
  private _enableUnredactedQuerySyntaxError?: boolean | cdktn.IResolvable; 
  public get enableUnredactedQuerySyntaxError() {
    return this.getBooleanAttribute('enable_unredacted_query_syntax_error');
  }
  public set enableUnredactedQuerySyntaxError(value: boolean | cdktn.IResolvable) {
    this._enableUnredactedQuerySyntaxError = value;
  }
  public resetEnableUnredactedQuerySyntaxError() {
    this._enableUnredactedQuerySyntaxError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUnredactedQuerySyntaxErrorInput() {
    return this._enableUnredactedQuerySyntaxError;
  }

  // error_on_nondeterministic_merge - computed: true, optional: true, required: false
  private _errorOnNondeterministicMerge?: boolean | cdktn.IResolvable; 
  public get errorOnNondeterministicMerge() {
    return this.getBooleanAttribute('error_on_nondeterministic_merge');
  }
  public set errorOnNondeterministicMerge(value: boolean | cdktn.IResolvable) {
    this._errorOnNondeterministicMerge = value;
  }
  public resetErrorOnNondeterministicMerge() {
    this._errorOnNondeterministicMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOnNondeterministicMergeInput() {
    return this._errorOnNondeterministicMerge;
  }

  // error_on_nondeterministic_update - computed: true, optional: true, required: false
  private _errorOnNondeterministicUpdate?: boolean | cdktn.IResolvable; 
  public get errorOnNondeterministicUpdate() {
    return this.getBooleanAttribute('error_on_nondeterministic_update');
  }
  public set errorOnNondeterministicUpdate(value: boolean | cdktn.IResolvable) {
    this._errorOnNondeterministicUpdate = value;
  }
  public resetErrorOnNondeterministicUpdate() {
    this._errorOnNondeterministicUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOnNondeterministicUpdateInput() {
    return this._errorOnNondeterministicUpdate;
  }

  // fully_qualified_name - computed: true, optional: false, required: false
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
  }

  // geography_output_format - computed: true, optional: true, required: false
  private _geographyOutputFormat?: string; 
  public get geographyOutputFormat() {
    return this.getStringAttribute('geography_output_format');
  }
  public set geographyOutputFormat(value: string) {
    this._geographyOutputFormat = value;
  }
  public resetGeographyOutputFormat() {
    this._geographyOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geographyOutputFormatInput() {
    return this._geographyOutputFormat;
  }

  // geometry_output_format - computed: true, optional: true, required: false
  private _geometryOutputFormat?: string; 
  public get geometryOutputFormat() {
    return this.getStringAttribute('geometry_output_format');
  }
  public set geometryOutputFormat(value: string) {
    this._geometryOutputFormat = value;
  }
  public resetGeometryOutputFormat() {
    this._geometryOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geometryOutputFormatInput() {
    return this._geometryOutputFormat;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // jdbc_treat_decimal_as_int - computed: true, optional: true, required: false
  private _jdbcTreatDecimalAsInt?: boolean | cdktn.IResolvable; 
  public get jdbcTreatDecimalAsInt() {
    return this.getBooleanAttribute('jdbc_treat_decimal_as_int');
  }
  public set jdbcTreatDecimalAsInt(value: boolean | cdktn.IResolvable) {
    this._jdbcTreatDecimalAsInt = value;
  }
  public resetJdbcTreatDecimalAsInt() {
    this._jdbcTreatDecimalAsInt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcTreatDecimalAsIntInput() {
    return this._jdbcTreatDecimalAsInt;
  }

  // jdbc_treat_timestamp_ntz_as_utc - computed: true, optional: true, required: false
  private _jdbcTreatTimestampNtzAsUtc?: boolean | cdktn.IResolvable; 
  public get jdbcTreatTimestampNtzAsUtc() {
    return this.getBooleanAttribute('jdbc_treat_timestamp_ntz_as_utc');
  }
  public set jdbcTreatTimestampNtzAsUtc(value: boolean | cdktn.IResolvable) {
    this._jdbcTreatTimestampNtzAsUtc = value;
  }
  public resetJdbcTreatTimestampNtzAsUtc() {
    this._jdbcTreatTimestampNtzAsUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcTreatTimestampNtzAsUtcInput() {
    return this._jdbcTreatTimestampNtzAsUtc;
  }

  // jdbc_use_session_timezone - computed: true, optional: true, required: false
  private _jdbcUseSessionTimezone?: boolean | cdktn.IResolvable; 
  public get jdbcUseSessionTimezone() {
    return this.getBooleanAttribute('jdbc_use_session_timezone');
  }
  public set jdbcUseSessionTimezone(value: boolean | cdktn.IResolvable) {
    this._jdbcUseSessionTimezone = value;
  }
  public resetJdbcUseSessionTimezone() {
    this._jdbcUseSessionTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcUseSessionTimezoneInput() {
    return this._jdbcUseSessionTimezone;
  }

  // json_indent - computed: true, optional: true, required: false
  private _jsonIndent?: number; 
  public get jsonIndent() {
    return this.getNumberAttribute('json_indent');
  }
  public set jsonIndent(value: number) {
    this._jsonIndent = value;
  }
  public resetJsonIndent() {
    this._jsonIndent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonIndentInput() {
    return this._jsonIndent;
  }

  // lock_timeout - computed: true, optional: true, required: false
  private _lockTimeout?: number; 
  public get lockTimeout() {
    return this.getNumberAttribute('lock_timeout');
  }
  public set lockTimeout(value: number) {
    this._lockTimeout = value;
  }
  public resetLockTimeout() {
    this._lockTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockTimeoutInput() {
    return this._lockTimeout;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // login_name - computed: false, optional: true, required: false
  private _loginName?: string; 
  public get loginName() {
    return this.getStringAttribute('login_name');
  }
  public set loginName(value: string) {
    this._loginName = value;
  }
  public resetLoginName() {
    this._loginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginNameInput() {
    return this._loginName;
  }

  // mins_to_unlock - computed: false, optional: true, required: false
  private _minsToUnlock?: number; 
  public get minsToUnlock() {
    return this.getNumberAttribute('mins_to_unlock');
  }
  public set minsToUnlock(value: number) {
    this._minsToUnlock = value;
  }
  public resetMinsToUnlock() {
    this._minsToUnlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minsToUnlockInput() {
    return this._minsToUnlock;
  }

  // multi_statement_count - computed: true, optional: true, required: false
  private _multiStatementCount?: number; 
  public get multiStatementCount() {
    return this.getNumberAttribute('multi_statement_count');
  }
  public set multiStatementCount(value: number) {
    this._multiStatementCount = value;
  }
  public resetMultiStatementCount() {
    this._multiStatementCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiStatementCountInput() {
    return this._multiStatementCount;
  }

  // must_change_password - computed: false, optional: true, required: false
  private _mustChangePassword?: string; 
  public get mustChangePassword() {
    return this.getStringAttribute('must_change_password');
  }
  public set mustChangePassword(value: string) {
    this._mustChangePassword = value;
  }
  public resetMustChangePassword() {
    this._mustChangePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mustChangePasswordInput() {
    return this._mustChangePassword;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_policy - computed: true, optional: true, required: false
  private _networkPolicy?: string; 
  public get networkPolicy() {
    return this.getStringAttribute('network_policy');
  }
  public set networkPolicy(value: string) {
    this._networkPolicy = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy;
  }

  // noorder_sequence_as_default - computed: true, optional: true, required: false
  private _noorderSequenceAsDefault?: boolean | cdktn.IResolvable; 
  public get noorderSequenceAsDefault() {
    return this.getBooleanAttribute('noorder_sequence_as_default');
  }
  public set noorderSequenceAsDefault(value: boolean | cdktn.IResolvable) {
    this._noorderSequenceAsDefault = value;
  }
  public resetNoorderSequenceAsDefault() {
    this._noorderSequenceAsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noorderSequenceAsDefaultInput() {
    return this._noorderSequenceAsDefault;
  }

  // odbc_treat_decimal_as_int - computed: true, optional: true, required: false
  private _odbcTreatDecimalAsInt?: boolean | cdktn.IResolvable; 
  public get odbcTreatDecimalAsInt() {
    return this.getBooleanAttribute('odbc_treat_decimal_as_int');
  }
  public set odbcTreatDecimalAsInt(value: boolean | cdktn.IResolvable) {
    this._odbcTreatDecimalAsInt = value;
  }
  public resetOdbcTreatDecimalAsInt() {
    this._odbcTreatDecimalAsInt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get odbcTreatDecimalAsIntInput() {
    return this._odbcTreatDecimalAsInt;
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new LegacyServiceUserParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // prevent_unload_to_internal_stages - computed: true, optional: true, required: false
  private _preventUnloadToInternalStages?: boolean | cdktn.IResolvable; 
  public get preventUnloadToInternalStages() {
    return this.getBooleanAttribute('prevent_unload_to_internal_stages');
  }
  public set preventUnloadToInternalStages(value: boolean | cdktn.IResolvable) {
    this._preventUnloadToInternalStages = value;
  }
  public resetPreventUnloadToInternalStages() {
    this._preventUnloadToInternalStages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventUnloadToInternalStagesInput() {
    return this._preventUnloadToInternalStages;
  }

  // query_tag - computed: true, optional: true, required: false
  private _queryTag?: string; 
  public get queryTag() {
    return this.getStringAttribute('query_tag');
  }
  public set queryTag(value: string) {
    this._queryTag = value;
  }
  public resetQueryTag() {
    this._queryTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTagInput() {
    return this._queryTag;
  }

  // quoted_identifiers_ignore_case - computed: true, optional: true, required: false
  private _quotedIdentifiersIgnoreCase?: boolean | cdktn.IResolvable; 
  public get quotedIdentifiersIgnoreCase() {
    return this.getBooleanAttribute('quoted_identifiers_ignore_case');
  }
  public set quotedIdentifiersIgnoreCase(value: boolean | cdktn.IResolvable) {
    this._quotedIdentifiersIgnoreCase = value;
  }
  public resetQuotedIdentifiersIgnoreCase() {
    this._quotedIdentifiersIgnoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotedIdentifiersIgnoreCaseInput() {
    return this._quotedIdentifiersIgnoreCase;
  }

  // rows_per_resultset - computed: true, optional: true, required: false
  private _rowsPerResultset?: number; 
  public get rowsPerResultset() {
    return this.getNumberAttribute('rows_per_resultset');
  }
  public set rowsPerResultset(value: number) {
    this._rowsPerResultset = value;
  }
  public resetRowsPerResultset() {
    this._rowsPerResultset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsPerResultsetInput() {
    return this._rowsPerResultset;
  }

  // rsa_public_key - computed: false, optional: true, required: false
  private _rsaPublicKey?: string; 
  public get rsaPublicKey() {
    return this.getStringAttribute('rsa_public_key');
  }
  public set rsaPublicKey(value: string) {
    this._rsaPublicKey = value;
  }
  public resetRsaPublicKey() {
    this._rsaPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaPublicKeyInput() {
    return this._rsaPublicKey;
  }

  // rsa_public_key_2 - computed: false, optional: true, required: false
  private _rsaPublicKey2?: string; 
  public get rsaPublicKey2() {
    return this.getStringAttribute('rsa_public_key_2');
  }
  public set rsaPublicKey2(value: string) {
    this._rsaPublicKey2 = value;
  }
  public resetRsaPublicKey2() {
    this._rsaPublicKey2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaPublicKey2Input() {
    return this._rsaPublicKey2;
  }

  // s3_stage_vpce_dns_name - computed: true, optional: true, required: false
  private _s3StageVpceDnsName?: string; 
  public get s3StageVpceDnsName() {
    return this.getStringAttribute('s3_stage_vpce_dns_name');
  }
  public set s3StageVpceDnsName(value: string) {
    this._s3StageVpceDnsName = value;
  }
  public resetS3StageVpceDnsName() {
    this._s3StageVpceDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3StageVpceDnsNameInput() {
    return this._s3StageVpceDnsName;
  }

  // search_path - computed: true, optional: true, required: false
  private _searchPath?: string; 
  public get searchPath() {
    return this.getStringAttribute('search_path');
  }
  public set searchPath(value: string) {
    this._searchPath = value;
  }
  public resetSearchPath() {
    this._searchPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchPathInput() {
    return this._searchPath;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new LegacyServiceUserShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // simulated_data_sharing_consumer - computed: true, optional: true, required: false
  private _simulatedDataSharingConsumer?: string; 
  public get simulatedDataSharingConsumer() {
    return this.getStringAttribute('simulated_data_sharing_consumer');
  }
  public set simulatedDataSharingConsumer(value: string) {
    this._simulatedDataSharingConsumer = value;
  }
  public resetSimulatedDataSharingConsumer() {
    this._simulatedDataSharingConsumer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simulatedDataSharingConsumerInput() {
    return this._simulatedDataSharingConsumer;
  }

  // statement_queued_timeout_in_seconds - computed: true, optional: true, required: false
  private _statementQueuedTimeoutInSeconds?: number; 
  public get statementQueuedTimeoutInSeconds() {
    return this.getNumberAttribute('statement_queued_timeout_in_seconds');
  }
  public set statementQueuedTimeoutInSeconds(value: number) {
    this._statementQueuedTimeoutInSeconds = value;
  }
  public resetStatementQueuedTimeoutInSeconds() {
    this._statementQueuedTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementQueuedTimeoutInSecondsInput() {
    return this._statementQueuedTimeoutInSeconds;
  }

  // statement_timeout_in_seconds - computed: true, optional: true, required: false
  private _statementTimeoutInSeconds?: number; 
  public get statementTimeoutInSeconds() {
    return this.getNumberAttribute('statement_timeout_in_seconds');
  }
  public set statementTimeoutInSeconds(value: number) {
    this._statementTimeoutInSeconds = value;
  }
  public resetStatementTimeoutInSeconds() {
    this._statementTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementTimeoutInSecondsInput() {
    return this._statementTimeoutInSeconds;
  }

  // strict_json_output - computed: true, optional: true, required: false
  private _strictJsonOutput?: boolean | cdktn.IResolvable; 
  public get strictJsonOutput() {
    return this.getBooleanAttribute('strict_json_output');
  }
  public set strictJsonOutput(value: boolean | cdktn.IResolvable) {
    this._strictJsonOutput = value;
  }
  public resetStrictJsonOutput() {
    this._strictJsonOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictJsonOutputInput() {
    return this._strictJsonOutput;
  }

  // time_input_format - computed: true, optional: true, required: false
  private _timeInputFormat?: string; 
  public get timeInputFormat() {
    return this.getStringAttribute('time_input_format');
  }
  public set timeInputFormat(value: string) {
    this._timeInputFormat = value;
  }
  public resetTimeInputFormat() {
    this._timeInputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInputFormatInput() {
    return this._timeInputFormat;
  }

  // time_output_format - computed: true, optional: true, required: false
  private _timeOutputFormat?: string; 
  public get timeOutputFormat() {
    return this.getStringAttribute('time_output_format');
  }
  public set timeOutputFormat(value: string) {
    this._timeOutputFormat = value;
  }
  public resetTimeOutputFormat() {
    this._timeOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOutputFormatInput() {
    return this._timeOutputFormat;
  }

  // timestamp_day_is_always_24h - computed: true, optional: true, required: false
  private _timestampDayIsAlways24H?: boolean | cdktn.IResolvable; 
  public get timestampDayIsAlways24H() {
    return this.getBooleanAttribute('timestamp_day_is_always_24h');
  }
  public set timestampDayIsAlways24H(value: boolean | cdktn.IResolvable) {
    this._timestampDayIsAlways24H = value;
  }
  public resetTimestampDayIsAlways24H() {
    this._timestampDayIsAlways24H = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampDayIsAlways24HInput() {
    return this._timestampDayIsAlways24H;
  }

  // timestamp_input_format - computed: true, optional: true, required: false
  private _timestampInputFormat?: string; 
  public get timestampInputFormat() {
    return this.getStringAttribute('timestamp_input_format');
  }
  public set timestampInputFormat(value: string) {
    this._timestampInputFormat = value;
  }
  public resetTimestampInputFormat() {
    this._timestampInputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInputFormatInput() {
    return this._timestampInputFormat;
  }

  // timestamp_ltz_output_format - computed: true, optional: true, required: false
  private _timestampLtzOutputFormat?: string; 
  public get timestampLtzOutputFormat() {
    return this.getStringAttribute('timestamp_ltz_output_format');
  }
  public set timestampLtzOutputFormat(value: string) {
    this._timestampLtzOutputFormat = value;
  }
  public resetTimestampLtzOutputFormat() {
    this._timestampLtzOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampLtzOutputFormatInput() {
    return this._timestampLtzOutputFormat;
  }

  // timestamp_ntz_output_format - computed: true, optional: true, required: false
  private _timestampNtzOutputFormat?: string; 
  public get timestampNtzOutputFormat() {
    return this.getStringAttribute('timestamp_ntz_output_format');
  }
  public set timestampNtzOutputFormat(value: string) {
    this._timestampNtzOutputFormat = value;
  }
  public resetTimestampNtzOutputFormat() {
    this._timestampNtzOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampNtzOutputFormatInput() {
    return this._timestampNtzOutputFormat;
  }

  // timestamp_output_format - computed: true, optional: true, required: false
  private _timestampOutputFormat?: string; 
  public get timestampOutputFormat() {
    return this.getStringAttribute('timestamp_output_format');
  }
  public set timestampOutputFormat(value: string) {
    this._timestampOutputFormat = value;
  }
  public resetTimestampOutputFormat() {
    this._timestampOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampOutputFormatInput() {
    return this._timestampOutputFormat;
  }

  // timestamp_type_mapping - computed: true, optional: true, required: false
  private _timestampTypeMapping?: string; 
  public get timestampTypeMapping() {
    return this.getStringAttribute('timestamp_type_mapping');
  }
  public set timestampTypeMapping(value: string) {
    this._timestampTypeMapping = value;
  }
  public resetTimestampTypeMapping() {
    this._timestampTypeMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampTypeMappingInput() {
    return this._timestampTypeMapping;
  }

  // timestamp_tz_output_format - computed: true, optional: true, required: false
  private _timestampTzOutputFormat?: string; 
  public get timestampTzOutputFormat() {
    return this.getStringAttribute('timestamp_tz_output_format');
  }
  public set timestampTzOutputFormat(value: string) {
    this._timestampTzOutputFormat = value;
  }
  public resetTimestampTzOutputFormat() {
    this._timestampTzOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampTzOutputFormatInput() {
    return this._timestampTzOutputFormat;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // trace_level - computed: true, optional: true, required: false
  private _traceLevel?: string; 
  public get traceLevel() {
    return this.getStringAttribute('trace_level');
  }
  public set traceLevel(value: string) {
    this._traceLevel = value;
  }
  public resetTraceLevel() {
    this._traceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceLevelInput() {
    return this._traceLevel;
  }

  // transaction_abort_on_error - computed: true, optional: true, required: false
  private _transactionAbortOnError?: boolean | cdktn.IResolvable; 
  public get transactionAbortOnError() {
    return this.getBooleanAttribute('transaction_abort_on_error');
  }
  public set transactionAbortOnError(value: boolean | cdktn.IResolvable) {
    this._transactionAbortOnError = value;
  }
  public resetTransactionAbortOnError() {
    this._transactionAbortOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionAbortOnErrorInput() {
    return this._transactionAbortOnError;
  }

  // transaction_default_isolation_level - computed: true, optional: true, required: false
  private _transactionDefaultIsolationLevel?: string; 
  public get transactionDefaultIsolationLevel() {
    return this.getStringAttribute('transaction_default_isolation_level');
  }
  public set transactionDefaultIsolationLevel(value: string) {
    this._transactionDefaultIsolationLevel = value;
  }
  public resetTransactionDefaultIsolationLevel() {
    this._transactionDefaultIsolationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionDefaultIsolationLevelInput() {
    return this._transactionDefaultIsolationLevel;
  }

  // two_digit_century_start - computed: true, optional: true, required: false
  private _twoDigitCenturyStart?: number; 
  public get twoDigitCenturyStart() {
    return this.getNumberAttribute('two_digit_century_start');
  }
  public set twoDigitCenturyStart(value: number) {
    this._twoDigitCenturyStart = value;
  }
  public resetTwoDigitCenturyStart() {
    this._twoDigitCenturyStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoDigitCenturyStartInput() {
    return this._twoDigitCenturyStart;
  }

  // unsupported_ddl_action - computed: true, optional: true, required: false
  private _unsupportedDdlAction?: string; 
  public get unsupportedDdlAction() {
    return this.getStringAttribute('unsupported_ddl_action');
  }
  public set unsupportedDdlAction(value: string) {
    this._unsupportedDdlAction = value;
  }
  public resetUnsupportedDdlAction() {
    this._unsupportedDdlAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedDdlActionInput() {
    return this._unsupportedDdlAction;
  }

  // use_cached_result - computed: true, optional: true, required: false
  private _useCachedResult?: boolean | cdktn.IResolvable; 
  public get useCachedResult() {
    return this.getBooleanAttribute('use_cached_result');
  }
  public set useCachedResult(value: boolean | cdktn.IResolvable) {
    this._useCachedResult = value;
  }
  public resetUseCachedResult() {
    this._useCachedResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCachedResultInput() {
    return this._useCachedResult;
  }

  // user_type - computed: true, optional: false, required: false
  public get userType() {
    return this.getStringAttribute('user_type');
  }

  // week_of_year_policy - computed: true, optional: true, required: false
  private _weekOfYearPolicy?: number; 
  public get weekOfYearPolicy() {
    return this.getNumberAttribute('week_of_year_policy');
  }
  public set weekOfYearPolicy(value: number) {
    this._weekOfYearPolicy = value;
  }
  public resetWeekOfYearPolicy() {
    this._weekOfYearPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekOfYearPolicyInput() {
    return this._weekOfYearPolicy;
  }

  // week_start - computed: true, optional: true, required: false
  private _weekStart?: number; 
  public get weekStart() {
    return this.getNumberAttribute('week_start');
  }
  public set weekStart(value: number) {
    this._weekStart = value;
  }
  public resetWeekStart() {
    this._weekStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekStartInput() {
    return this._weekStart;
  }

  // default_workload_identity - computed: false, optional: true, required: false
  private _defaultWorkloadIdentity = new LegacyServiceUserDefaultWorkloadIdentityOutputReference(this, "default_workload_identity");
  public get defaultWorkloadIdentity() {
    return this._defaultWorkloadIdentity;
  }
  public putDefaultWorkloadIdentity(value: LegacyServiceUserDefaultWorkloadIdentity) {
    this._defaultWorkloadIdentity.internalValue = value;
  }
  public resetDefaultWorkloadIdentity() {
    this._defaultWorkloadIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultWorkloadIdentityInput() {
    return this._defaultWorkloadIdentity.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      abort_detached_query: cdktn.booleanToTerraform(this._abortDetachedQuery),
      autocommit: cdktn.booleanToTerraform(this._autocommit),
      binary_input_format: cdktn.stringToTerraform(this._binaryInputFormat),
      binary_output_format: cdktn.stringToTerraform(this._binaryOutputFormat),
      client_memory_limit: cdktn.numberToTerraform(this._clientMemoryLimit),
      client_metadata_request_use_connection_ctx: cdktn.booleanToTerraform(this._clientMetadataRequestUseConnectionCtx),
      client_prefetch_threads: cdktn.numberToTerraform(this._clientPrefetchThreads),
      client_result_chunk_size: cdktn.numberToTerraform(this._clientResultChunkSize),
      client_result_column_case_insensitive: cdktn.booleanToTerraform(this._clientResultColumnCaseInsensitive),
      client_session_keep_alive: cdktn.booleanToTerraform(this._clientSessionKeepAlive),
      client_session_keep_alive_heartbeat_frequency: cdktn.numberToTerraform(this._clientSessionKeepAliveHeartbeatFrequency),
      client_timestamp_type_mapping: cdktn.stringToTerraform(this._clientTimestampTypeMapping),
      comment: cdktn.stringToTerraform(this._comment),
      date_input_format: cdktn.stringToTerraform(this._dateInputFormat),
      date_output_format: cdktn.stringToTerraform(this._dateOutputFormat),
      days_to_expiry: cdktn.numberToTerraform(this._daysToExpiry),
      default_namespace: cdktn.stringToTerraform(this._defaultNamespace),
      default_role: cdktn.stringToTerraform(this._defaultRole),
      default_secondary_roles_option: cdktn.stringToTerraform(this._defaultSecondaryRolesOption),
      default_warehouse: cdktn.stringToTerraform(this._defaultWarehouse),
      disabled: cdktn.stringToTerraform(this._disabled),
      display_name: cdktn.stringToTerraform(this._displayName),
      email: cdktn.stringToTerraform(this._email),
      enable_unload_physical_type_optimization: cdktn.booleanToTerraform(this._enableUnloadPhysicalTypeOptimization),
      enable_unredacted_query_syntax_error: cdktn.booleanToTerraform(this._enableUnredactedQuerySyntaxError),
      error_on_nondeterministic_merge: cdktn.booleanToTerraform(this._errorOnNondeterministicMerge),
      error_on_nondeterministic_update: cdktn.booleanToTerraform(this._errorOnNondeterministicUpdate),
      geography_output_format: cdktn.stringToTerraform(this._geographyOutputFormat),
      geometry_output_format: cdktn.stringToTerraform(this._geometryOutputFormat),
      id: cdktn.stringToTerraform(this._id),
      jdbc_treat_decimal_as_int: cdktn.booleanToTerraform(this._jdbcTreatDecimalAsInt),
      jdbc_treat_timestamp_ntz_as_utc: cdktn.booleanToTerraform(this._jdbcTreatTimestampNtzAsUtc),
      jdbc_use_session_timezone: cdktn.booleanToTerraform(this._jdbcUseSessionTimezone),
      json_indent: cdktn.numberToTerraform(this._jsonIndent),
      lock_timeout: cdktn.numberToTerraform(this._lockTimeout),
      log_level: cdktn.stringToTerraform(this._logLevel),
      login_name: cdktn.stringToTerraform(this._loginName),
      mins_to_unlock: cdktn.numberToTerraform(this._minsToUnlock),
      multi_statement_count: cdktn.numberToTerraform(this._multiStatementCount),
      must_change_password: cdktn.stringToTerraform(this._mustChangePassword),
      name: cdktn.stringToTerraform(this._name),
      network_policy: cdktn.stringToTerraform(this._networkPolicy),
      noorder_sequence_as_default: cdktn.booleanToTerraform(this._noorderSequenceAsDefault),
      odbc_treat_decimal_as_int: cdktn.booleanToTerraform(this._odbcTreatDecimalAsInt),
      password: cdktn.stringToTerraform(this._password),
      prevent_unload_to_internal_stages: cdktn.booleanToTerraform(this._preventUnloadToInternalStages),
      query_tag: cdktn.stringToTerraform(this._queryTag),
      quoted_identifiers_ignore_case: cdktn.booleanToTerraform(this._quotedIdentifiersIgnoreCase),
      rows_per_resultset: cdktn.numberToTerraform(this._rowsPerResultset),
      rsa_public_key: cdktn.stringToTerraform(this._rsaPublicKey),
      rsa_public_key_2: cdktn.stringToTerraform(this._rsaPublicKey2),
      s3_stage_vpce_dns_name: cdktn.stringToTerraform(this._s3StageVpceDnsName),
      search_path: cdktn.stringToTerraform(this._searchPath),
      simulated_data_sharing_consumer: cdktn.stringToTerraform(this._simulatedDataSharingConsumer),
      statement_queued_timeout_in_seconds: cdktn.numberToTerraform(this._statementQueuedTimeoutInSeconds),
      statement_timeout_in_seconds: cdktn.numberToTerraform(this._statementTimeoutInSeconds),
      strict_json_output: cdktn.booleanToTerraform(this._strictJsonOutput),
      time_input_format: cdktn.stringToTerraform(this._timeInputFormat),
      time_output_format: cdktn.stringToTerraform(this._timeOutputFormat),
      timestamp_day_is_always_24h: cdktn.booleanToTerraform(this._timestampDayIsAlways24H),
      timestamp_input_format: cdktn.stringToTerraform(this._timestampInputFormat),
      timestamp_ltz_output_format: cdktn.stringToTerraform(this._timestampLtzOutputFormat),
      timestamp_ntz_output_format: cdktn.stringToTerraform(this._timestampNtzOutputFormat),
      timestamp_output_format: cdktn.stringToTerraform(this._timestampOutputFormat),
      timestamp_type_mapping: cdktn.stringToTerraform(this._timestampTypeMapping),
      timestamp_tz_output_format: cdktn.stringToTerraform(this._timestampTzOutputFormat),
      timezone: cdktn.stringToTerraform(this._timezone),
      trace_level: cdktn.stringToTerraform(this._traceLevel),
      transaction_abort_on_error: cdktn.booleanToTerraform(this._transactionAbortOnError),
      transaction_default_isolation_level: cdktn.stringToTerraform(this._transactionDefaultIsolationLevel),
      two_digit_century_start: cdktn.numberToTerraform(this._twoDigitCenturyStart),
      unsupported_ddl_action: cdktn.stringToTerraform(this._unsupportedDdlAction),
      use_cached_result: cdktn.booleanToTerraform(this._useCachedResult),
      week_of_year_policy: cdktn.numberToTerraform(this._weekOfYearPolicy),
      week_start: cdktn.numberToTerraform(this._weekStart),
      default_workload_identity: legacyServiceUserDefaultWorkloadIdentityToTerraform(this._defaultWorkloadIdentity.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      abort_detached_query: {
        value: cdktn.booleanToHclTerraform(this._abortDetachedQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      autocommit: {
        value: cdktn.booleanToHclTerraform(this._autocommit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      binary_input_format: {
        value: cdktn.stringToHclTerraform(this._binaryInputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binary_output_format: {
        value: cdktn.stringToHclTerraform(this._binaryOutputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_memory_limit: {
        value: cdktn.numberToHclTerraform(this._clientMemoryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_metadata_request_use_connection_ctx: {
        value: cdktn.booleanToHclTerraform(this._clientMetadataRequestUseConnectionCtx),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_prefetch_threads: {
        value: cdktn.numberToHclTerraform(this._clientPrefetchThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_result_chunk_size: {
        value: cdktn.numberToHclTerraform(this._clientResultChunkSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_result_column_case_insensitive: {
        value: cdktn.booleanToHclTerraform(this._clientResultColumnCaseInsensitive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_session_keep_alive: {
        value: cdktn.booleanToHclTerraform(this._clientSessionKeepAlive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_session_keep_alive_heartbeat_frequency: {
        value: cdktn.numberToHclTerraform(this._clientSessionKeepAliveHeartbeatFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_timestamp_type_mapping: {
        value: cdktn.stringToHclTerraform(this._clientTimestampTypeMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktn.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      date_input_format: {
        value: cdktn.stringToHclTerraform(this._dateInputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      date_output_format: {
        value: cdktn.stringToHclTerraform(this._dateOutputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      days_to_expiry: {
        value: cdktn.numberToHclTerraform(this._daysToExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_namespace: {
        value: cdktn.stringToHclTerraform(this._defaultNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_role: {
        value: cdktn.stringToHclTerraform(this._defaultRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_secondary_roles_option: {
        value: cdktn.stringToHclTerraform(this._defaultSecondaryRolesOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_warehouse: {
        value: cdktn.stringToHclTerraform(this._defaultWarehouse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktn.stringToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktn.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_unload_physical_type_optimization: {
        value: cdktn.booleanToHclTerraform(this._enableUnloadPhysicalTypeOptimization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_unredacted_query_syntax_error: {
        value: cdktn.booleanToHclTerraform(this._enableUnredactedQuerySyntaxError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      error_on_nondeterministic_merge: {
        value: cdktn.booleanToHclTerraform(this._errorOnNondeterministicMerge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      error_on_nondeterministic_update: {
        value: cdktn.booleanToHclTerraform(this._errorOnNondeterministicUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      geography_output_format: {
        value: cdktn.stringToHclTerraform(this._geographyOutputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geometry_output_format: {
        value: cdktn.stringToHclTerraform(this._geometryOutputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jdbc_treat_decimal_as_int: {
        value: cdktn.booleanToHclTerraform(this._jdbcTreatDecimalAsInt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jdbc_treat_timestamp_ntz_as_utc: {
        value: cdktn.booleanToHclTerraform(this._jdbcTreatTimestampNtzAsUtc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jdbc_use_session_timezone: {
        value: cdktn.booleanToHclTerraform(this._jdbcUseSessionTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      json_indent: {
        value: cdktn.numberToHclTerraform(this._jsonIndent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lock_timeout: {
        value: cdktn.numberToHclTerraform(this._lockTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_level: {
        value: cdktn.stringToHclTerraform(this._logLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_name: {
        value: cdktn.stringToHclTerraform(this._loginName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mins_to_unlock: {
        value: cdktn.numberToHclTerraform(this._minsToUnlock),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multi_statement_count: {
        value: cdktn.numberToHclTerraform(this._multiStatementCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      must_change_password: {
        value: cdktn.stringToHclTerraform(this._mustChangePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_policy: {
        value: cdktn.stringToHclTerraform(this._networkPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      noorder_sequence_as_default: {
        value: cdktn.booleanToHclTerraform(this._noorderSequenceAsDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      odbc_treat_decimal_as_int: {
        value: cdktn.booleanToHclTerraform(this._odbcTreatDecimalAsInt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktn.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prevent_unload_to_internal_stages: {
        value: cdktn.booleanToHclTerraform(this._preventUnloadToInternalStages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      query_tag: {
        value: cdktn.stringToHclTerraform(this._queryTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quoted_identifiers_ignore_case: {
        value: cdktn.booleanToHclTerraform(this._quotedIdentifiersIgnoreCase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rows_per_resultset: {
        value: cdktn.numberToHclTerraform(this._rowsPerResultset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rsa_public_key: {
        value: cdktn.stringToHclTerraform(this._rsaPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsa_public_key_2: {
        value: cdktn.stringToHclTerraform(this._rsaPublicKey2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_stage_vpce_dns_name: {
        value: cdktn.stringToHclTerraform(this._s3StageVpceDnsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_path: {
        value: cdktn.stringToHclTerraform(this._searchPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      simulated_data_sharing_consumer: {
        value: cdktn.stringToHclTerraform(this._simulatedDataSharingConsumer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statement_queued_timeout_in_seconds: {
        value: cdktn.numberToHclTerraform(this._statementQueuedTimeoutInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      statement_timeout_in_seconds: {
        value: cdktn.numberToHclTerraform(this._statementTimeoutInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      strict_json_output: {
        value: cdktn.booleanToHclTerraform(this._strictJsonOutput),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      time_input_format: {
        value: cdktn.stringToHclTerraform(this._timeInputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_output_format: {
        value: cdktn.stringToHclTerraform(this._timeOutputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp_day_is_always_24h: {
        value: cdktn.booleanToHclTerraform(this._timestampDayIsAlways24H),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timestamp_input_format: {
        value: cdktn.stringToHclTerraform(this._timestampInputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp_ltz_output_format: {
        value: cdktn.stringToHclTerraform(this._timestampLtzOutputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp_ntz_output_format: {
        value: cdktn.stringToHclTerraform(this._timestampNtzOutputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp_output_format: {
        value: cdktn.stringToHclTerraform(this._timestampOutputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp_type_mapping: {
        value: cdktn.stringToHclTerraform(this._timestampTypeMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp_tz_output_format: {
        value: cdktn.stringToHclTerraform(this._timestampTzOutputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktn.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trace_level: {
        value: cdktn.stringToHclTerraform(this._traceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transaction_abort_on_error: {
        value: cdktn.booleanToHclTerraform(this._transactionAbortOnError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transaction_default_isolation_level: {
        value: cdktn.stringToHclTerraform(this._transactionDefaultIsolationLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      two_digit_century_start: {
        value: cdktn.numberToHclTerraform(this._twoDigitCenturyStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unsupported_ddl_action: {
        value: cdktn.stringToHclTerraform(this._unsupportedDdlAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_cached_result: {
        value: cdktn.booleanToHclTerraform(this._useCachedResult),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      week_of_year_policy: {
        value: cdktn.numberToHclTerraform(this._weekOfYearPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      week_start: {
        value: cdktn.numberToHclTerraform(this._weekStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_workload_identity: {
        value: legacyServiceUserDefaultWorkloadIdentityToHclTerraform(this._defaultWorkloadIdentity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LegacyServiceUserDefaultWorkloadIdentityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
