# `objectParameter` Submodule <a name="`objectParameter` Submodule" id="@cdktn/provider-snowflake.objectParameter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectParameter <a name="ObjectParameter" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter snowflake_object_parameter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer"></a>

```java
import io.cdktn.providers.snowflake.object_parameter.ObjectParameter;

ObjectParameter.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .key(java.lang.String)
    .value(java.lang.String)
//  .id(java.lang.String)
//  .objectIdentifier(IResolvable|java.util.List<ObjectParameterObjectIdentifier>)
//  .objectType(java.lang.String)
//  .onAccount(java.lang.Boolean|IResolvable)
//  .timeouts(ObjectParameterTimeouts)
//  .valueType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | Name of object parameter. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.value">value</a></code> | <code>java.lang.String</code> | Value of object parameter, as a string. Constraints are the same as those for the parameters in Snowflake documentation. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#id ObjectParameter#id}. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.objectIdentifier">objectIdentifier</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>></code> | object_identifier block. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.objectType">objectType</a></code> | <code>java.lang.String</code> | Type of object to which the parameter applies. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.onAccount">onAccount</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `false`) If true, the object parameter will be set on the account level. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts">ObjectParameterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.valueType">valueType</a></code> | <code>java.lang.String</code> | Type of `value`, used only for parameters that the provider does not support yet (forward compatibility). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.key"></a>

- *Type:* java.lang.String

Name of object parameter.

Valid values are those in [object parameters](https://docs.snowflake.com/en/sql-reference/parameters.html#object-parameters). With the `OBJECT_PARAMETER_PARSE_ON_SET` experiment (enabled by default), the provider supports the following parameters, and it parses and quotes their values itself: on the account level (`on_account = true`): `ABORT_DETACHED_QUERY` | `ACTIVE_PYTHON_PROFILER` | `ALLOW_BIND_VALUES_ACCESS` | `ALLOW_CLIENT_MFA_CACHING` | `ALLOW_ID_TOKEN` | `ALLOWED_SPCS_WORKLOAD_TYPES` | `AUTOCOMMIT` | `BASE_LOCATION_PREFIX` | `BINARY_INPUT_FORMAT` | `BINARY_OUTPUT_FORMAT` | `CATALOG` | `CATALOG_SYNC` | `CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS` | `CLIENT_ENCRYPTION_KEY_SIZE` | `CLIENT_MEMORY_LIMIT` | `CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX` | `CLIENT_METADATA_USE_SESSION_DATABASE` | `CLIENT_PREFETCH_THREADS` | `CLIENT_RESULT_CHUNK_SIZE` | `CLIENT_RESULT_COLUMN_CASE_INSENSITIVE` | `CLIENT_SESSION_KEEP_ALIVE` | `CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY` | `CLIENT_TIMESTAMP_TYPE_MAPPING` | `CORTEX_CODE_CLI_DAILY_EST_CREDIT_LIMIT_PER_USER` | `CORTEX_CODE_DESKTOP_DAILY_EST_CREDIT_LIMIT_PER_USER` | `CORTEX_CODE_SNOWSIGHT_DAILY_EST_CREDIT_LIMIT_PER_USER` | `CORTEX_ENABLED_CROSS_REGION` | `CORTEX_MODELS_ALLOWLIST` | `CSV_TIMESTAMP_FORMAT` | `DATA_METRIC_SCHEDULE` | `DATA_RETENTION_TIME_IN_DAYS` | `DATE_INPUT_FORMAT` | `DATE_OUTPUT_FORMAT` | `DEFAULT_DBT_VERSION` | `DEFAULT_DDL_COLLATION` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU` | `DEFAULT_NULL_ORDERING` | `DEFAULT_STREAMLIT_COMPUTE_POOL` | `DEFAULT_STREAMLIT_NOTEBOOK_WAREHOUSE` | `DISABLE_UI_DOWNLOAD_BUTTON` | `DISABLE_USER_PRIVILEGE_GRANTS` | `DISALLOWED_SPCS_WORKLOAD_TYPES` | `ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG` | `ENABLE_BUDGET_EVENT_LOGGING` | `ENABLE_CONSOLE_OUTPUT` | `ENABLE_CORTEX_ANALYST` | `ENABLE_DATA_COMPACTION` | `ENABLE_EGRESS_COST_OPTIMIZER` | `ENABLE_GET_DDL_USE_DATA_TYPE_ALIAS` | `ENABLE_ICEBERG_MERGE_ON_READ` | `ENABLE_IDENTIFIER_FIRST_LOGIN` | `ENABLE_INTERNAL_STAGES_PRIVATELINK` | `ENABLE_NOTEBOOK_CREATION_IN_PERSONAL_DB` | `ENABLE_PER_ACCOUNT_APP_SERVICE_PRIVATELINK_URL` | `ENABLE_PERSONAL_DATABASE` | `ENABLE_SPCS_BLOCK_STORAGE_SNOWFLAKE_FULL_ENCRYPTION_ENFORCEMENT` | `ENABLE_TAG_PROPAGATION_EVENT_LOGGING` | `ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY` | `ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE` | `ENABLE_UNHANDLED_EXCEPTIONS_REPORTING` | `ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION` | `ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR` | `ENABLE_UNREDACTED_SECURE_OBJECT_ERROR` | `ENFORCE_NETWORK_RULES_FOR_INTERNAL_STAGES` | `ERROR_ON_NONDETERMINISTIC_MERGE` | `ERROR_ON_NONDETERMINISTIC_UPDATE` | `EVENT_TABLE` | `EXTERNAL_OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST` | `EXTERNAL_VOLUME` | `GEOGRAPHY_OUTPUT_FORMAT` | `GEOMETRY_OUTPUT_FORMAT` | `HYBRID_TABLE_LOCK_TIMEOUT` | `ICEBERG_VERSION_DEFAULT` | `INITIAL_REPLICATION_SIZE_LIMIT_IN_TB` | `JDBC_TREAT_DECIMAL_AS_INT` | `JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC` | `JDBC_USE_SESSION_TIMEZONE` | `JS_TREAT_INTEGER_AS_BIGINT` | `JSON_INDENT` | `LISTING_AUTO_FULFILLMENT_REPLICATION_REFRESH_SCHEDULE` | `LOCK_TIMEOUT` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MAX_CONCURRENCY_LEVEL` | `MAX_DATA_EXTENSION_TIME_IN_DAYS` | `METRIC_LEVEL` | `MIN_DATA_RETENTION_TIME_IN_DAYS` | `MULTI_STATEMENT_COUNT` | `NETWORK_POLICY` | `NOORDER_SEQUENCE_AS_DEFAULT` | `OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST` | `ODBC_TREAT_DECIMAL_AS_INT` | `PERIODIC_DATA_REKEYING` | `PIPE_EXECUTION_PAUSED` | `PREVENT_LOAD_FROM_INLINE_URL` | `PREVENT_UNLOAD_TO_INLINE_URL` | `PREVENT_UNLOAD_TO_INTERNAL_STAGES` | `PYTHON_PROFILER_MODULES` | `PYTHON_PROFILER_TARGET_STAGE` | `QUERY_TAG` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `READ_CONSISTENCY_MODE` | `REPLACE_INVALID_CHARACTERS` | `REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION` | `REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_OPERATION` | `ROW_TIMESTAMP_DEFAULT` | `ROWS_PER_RESULTSET` | `S3_STAGE_VPCE_DNS_NAME` | `SEARCH_PATH` | `SERVERLESS_TASK_MAX_STATEMENT_SIZE` | `SERVERLESS_TASK_MIN_STATEMENT_SIZE` | `SHARE_RESTRICTIONS` | `SIMULATED_DATA_SHARING_CONSUMER` | `SQL_TRACE_QUERY_TEXT` | `SSO_LOGIN_PAGE` | `STATEMENT_QUEUED_TIMEOUT_IN_SECONDS` | `STATEMENT_TIMEOUT_IN_SECONDS` | `STORAGE_SERIALIZATION_POLICY` | `STRICT_JSON_OUTPUT` | `SUSPEND_TASK_AFTER_NUM_FAILURES` | `TASK_AUTO_RETRY_ATTEMPTS` | `TIME_INPUT_FORMAT` | `TIME_OUTPUT_FORMAT` | `TIMESTAMP_DAY_IS_ALWAYS_24H` | `TIMESTAMP_INPUT_FORMAT` | `TIMESTAMP_LTZ_OUTPUT_FORMAT` | `TIMESTAMP_NTZ_OUTPUT_FORMAT` | `TIMESTAMP_OUTPUT_FORMAT` | `TIMESTAMP_TYPE_MAPPING` | `TIMESTAMP_TZ_OUTPUT_FORMAT` | `TIMEZONE` | `TRACE_LEVEL` | `TRANSACTION_ABORT_ON_ERROR` | `TRANSACTION_DEFAULT_ISOLATION_LEVEL` | `TWO_DIGIT_CENTURY_START` | `UNSUPPORTED_DDL_ACTION` | `USE_CACHED_RESULT` | `USE_WORKSPACES_FOR_SQL` | `USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE` | `USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS` | `USER_TASK_TIMEOUT_MS` | `WEEK_OF_YEAR_POLICY` | `WEEK_START`; `DATABASE`: `CATALOG` | `DATA_RETENTION_TIME_IN_DAYS` | `DEFAULT_DDL_COLLATION` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU` | `ENABLE_CONSOLE_OUTPUT` | `EXTERNAL_VOLUME` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MAX_DATA_EXTENSION_TIME_IN_DAYS` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `REPLACE_INVALID_CHARACTERS` | `STORAGE_SERIALIZATION_POLICY` | `SUSPEND_TASK_AFTER_NUM_FAILURES` | `TASK_AUTO_RETRY_ATTEMPTS` | `TRACE_LEVEL` | `USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE` | `USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS` | `USER_TASK_TIMEOUT_MS`; `SCHEMA`: `CATALOG` | `DATA_RETENTION_TIME_IN_DAYS` | `DEFAULT_DDL_COLLATION` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU` | `ENABLE_CONSOLE_OUTPUT` | `EXTERNAL_VOLUME` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MAX_DATA_EXTENSION_TIME_IN_DAYS` | `PIPE_EXECUTION_PAUSED` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `REPLACE_INVALID_CHARACTERS` | `STORAGE_SERIALIZATION_POLICY` | `SUSPEND_TASK_AFTER_NUM_FAILURES` | `TASK_AUTO_RETRY_ATTEMPTS` | `TRACE_LEVEL` | `USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE` | `USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS` | `USER_TASK_TIMEOUT_MS`; `WAREHOUSE`: `MAX_CONCURRENCY_LEVEL` | `STATEMENT_QUEUED_TIMEOUT_IN_SECONDS` | `STATEMENT_TIMEOUT_IN_SECONDS`; `USER`: `ABORT_DETACHED_QUERY` | `ACTIVE_PYTHON_PROFILER` | `AUTOCOMMIT` | `BINARY_INPUT_FORMAT` | `BINARY_OUTPUT_FORMAT` | `CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS` | `CLIENT_MEMORY_LIMIT` | `CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX` | `CLIENT_METADATA_USE_SESSION_DATABASE` | `CLIENT_PREFETCH_THREADS` | `CLIENT_RESULT_CHUNK_SIZE` | `CLIENT_RESULT_COLUMN_CASE_INSENSITIVE` | `CLIENT_SESSION_KEEP_ALIVE` | `CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY` | `CLIENT_TIMESTAMP_TYPE_MAPPING` | `CSV_TIMESTAMP_FORMAT` | `DATE_INPUT_FORMAT` | `DATE_OUTPUT_FORMAT` | `ENABLE_GET_DDL_USE_DATA_TYPE_ALIAS` | `ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION` | `ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR` | `ERROR_ON_NONDETERMINISTIC_MERGE` | `ERROR_ON_NONDETERMINISTIC_UPDATE` | `GEOGRAPHY_OUTPUT_FORMAT` | `GEOMETRY_OUTPUT_FORMAT` | `HYBRID_TABLE_LOCK_TIMEOUT` | `JDBC_TREAT_DECIMAL_AS_INT` | `JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC` | `JDBC_USE_SESSION_TIMEZONE` | `JS_TREAT_INTEGER_AS_BIGINT` | `JSON_INDENT` | `LOCK_TIMEOUT` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MULTI_STATEMENT_COUNT` | `NETWORK_POLICY` | `NOORDER_SEQUENCE_AS_DEFAULT` | `ODBC_TREAT_DECIMAL_AS_INT` | `PREVENT_UNLOAD_TO_INTERNAL_STAGES` | `PYTHON_PROFILER_MODULES` | `PYTHON_PROFILER_TARGET_STAGE` | `QUERY_TAG` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `ROWS_PER_RESULTSET` | `S3_STAGE_VPCE_DNS_NAME` | `SEARCH_PATH` | `SIMULATED_DATA_SHARING_CONSUMER` | `STATEMENT_QUEUED_TIMEOUT_IN_SECONDS` | `STATEMENT_TIMEOUT_IN_SECONDS` | `STRICT_JSON_OUTPUT` | `TIME_INPUT_FORMAT` | `TIME_OUTPUT_FORMAT` | `TIMESTAMP_DAY_IS_ALWAYS_24H` | `TIMESTAMP_INPUT_FORMAT` | `TIMESTAMP_LTZ_OUTPUT_FORMAT` | `TIMESTAMP_NTZ_OUTPUT_FORMAT` | `TIMESTAMP_OUTPUT_FORMAT` | `TIMESTAMP_TYPE_MAPPING` | `TIMESTAMP_TZ_OUTPUT_FORMAT` | `TIMEZONE` | `TRACE_LEVEL` | `TRANSACTION_ABORT_ON_ERROR` | `TRANSACTION_DEFAULT_ISOLATION_LEVEL` | `TWO_DIGIT_CENTURY_START` | `UNSUPPORTED_DDL_ACTION` | `USE_CACHED_RESULT` | `WEEK_OF_YEAR_POLICY` | `WEEK_START`; `TASK`: `ABORT_DETACHED_QUERY` | `AUTOCOMMIT` | `BINARY_INPUT_FORMAT` | `BINARY_OUTPUT_FORMAT` | `CLIENT_MEMORY_LIMIT` | `CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX` | `CLIENT_PREFETCH_THREADS` | `CLIENT_RESULT_CHUNK_SIZE` | `CLIENT_RESULT_COLUMN_CASE_INSENSITIVE` | `CLIENT_SESSION_KEEP_ALIVE` | `CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY` | `CLIENT_TIMESTAMP_TYPE_MAPPING` | `DATE_INPUT_FORMAT` | `DATE_OUTPUT_FORMAT` | `ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION` | `ERROR_ON_NONDETERMINISTIC_MERGE` | `ERROR_ON_NONDETERMINISTIC_UPDATE` | `GEOGRAPHY_OUTPUT_FORMAT` | `GEOMETRY_OUTPUT_FORMAT` | `JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC` | `JDBC_USE_SESSION_TIMEZONE` | `JSON_INDENT` | `LOCK_TIMEOUT` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MULTI_STATEMENT_COUNT` | `NOORDER_SEQUENCE_AS_DEFAULT` | `ODBC_TREAT_DECIMAL_AS_INT` | `QUERY_TAG` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `ROWS_PER_RESULTSET` | `S3_STAGE_VPCE_DNS_NAME` | `SERVERLESS_TASK_MAX_STATEMENT_SIZE` | `SERVERLESS_TASK_MIN_STATEMENT_SIZE` | `STATEMENT_QUEUED_TIMEOUT_IN_SECONDS` | `STATEMENT_TIMEOUT_IN_SECONDS` | `STRICT_JSON_OUTPUT` | `SUSPEND_TASK_AFTER_NUM_FAILURES` | `TASK_AUTO_RETRY_ATTEMPTS` | `TIME_INPUT_FORMAT` | `TIME_OUTPUT_FORMAT` | `TIMESTAMP_DAY_IS_ALWAYS_24H` | `TIMESTAMP_INPUT_FORMAT` | `TIMESTAMP_LTZ_OUTPUT_FORMAT` | `TIMESTAMP_NTZ_OUTPUT_FORMAT` | `TIMESTAMP_OUTPUT_FORMAT` | `TIMESTAMP_TYPE_MAPPING` | `TIMESTAMP_TZ_OUTPUT_FORMAT` | `TIMEZONE` | `TRACE_LEVEL` | `TRANSACTION_ABORT_ON_ERROR` | `TRANSACTION_DEFAULT_ISOLATION_LEVEL` | `TWO_DIGIT_CENTURY_START` | `UNSUPPORTED_DDL_ACTION` | `USE_CACHED_RESULT` | `USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE` | `USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS` | `USER_TASK_TIMEOUT_MS` | `WEEK_OF_YEAR_POLICY` | `WEEK_START`; `SERVICE`: `SERVICE_CALLER_TOKEN_VALIDITY_SECS`; `HYBRID TABLE`: `DATA_RETENTION_TIME_IN_DAYS` | `MAX_DATA_EXTENSION_TIME_IN_DAYS`; `ICEBERG TABLE`: `ALLOW_ROW_TIMESTAMP` | `CATALOG` | `CATALOG_SYNC` | `DATA_METRIC_SCHEDULE` | `DATA_RETENTION_TIME_IN_DAYS` | `DEFAULT_DDL_COLLATION` | `ENABLE_DATA_COMPACTION` | `ENABLE_ICEBERG_MERGE_ON_READ` | `EXTERNAL_VOLUME` | `ICEBERG_MERGE_ON_READ_BEHAVIOR` | `LOG_EVENT_LEVEL` | `MAX_DATA_EXTENSION_TIME_IN_DAYS` | `OPTIMIZE_DATA_LAYOUT` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `REPLACE_INVALID_CHARACTERS` | `STORAGE_SERIALIZATION_POLICY` | `TARGET_FILE_SIZE`. Any other parameter, and any parameter on any other object type, is sent to Snowflake as is: with `value_type`, the value is rendered by it, and without it, the value is sent as written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#key ObjectParameter#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.value"></a>

- *Type:* java.lang.String

Value of object parameter, as a string. Constraints are the same as those for the parameters in Snowflake documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#value ObjectParameter#value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#id ObjectParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objectIdentifier`<sup>Optional</sup> <a name="objectIdentifier" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.objectIdentifier"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>>

object_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#object_identifier ObjectParameter#object_identifier}

---

##### `objectType`<sup>Optional</sup> <a name="objectType" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.objectType"></a>

- *Type:* java.lang.String

Type of object to which the parameter applies.

Valid values are those in [object types](https://docs.snowflake.com/en/sql-reference/parameters.html#object-types). If no value is provided, then the resource will default to setting the object parameter at account level. The provider supports the parameters of the following object types: `DATABASE` | `SCHEMA` | `WAREHOUSE` | `USER` | `TASK` | `SERVICE` | `HYBRID TABLE` | `ICEBERG TABLE` (see `key`). Other object types are sent as is, with the value rendered by `value_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#object_type ObjectParameter#object_type}

---

##### `onAccount`<sup>Optional</sup> <a name="onAccount" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.onAccount"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `false`) If true, the object parameter will be set on the account level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#on_account ObjectParameter#on_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts">ObjectParameterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#timeouts ObjectParameter#timeouts}

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.valueType"></a>

- *Type:* java.lang.String

Type of `value`, used only for parameters that the provider does not support yet (forward compatibility).

Valid values are (case-insensitive): `STRING` | `IDENTIFIER` | `INTEGER` | `FLOAT` | `BOOLEAN`. `value` is rendered the same way as for the parameters that the provider supports: `STRING` (also use it for enum parameters) is sent as a single-quoted string, `IDENTIFIER` as a quoted identifier (it can be fully qualified, e.g. `DB.SCHEMA.NAME`), and the others as a number or a boolean. The field is required for a parameter that the provider does not support, and it is ignored for the supported parameters (they are listed in the `key` field description, per object type), so it can stay in the configuration when a later provider version starts to support the parameter. Changes of this field are ignored for the supported parameters, but setting it for a supported parameter logs a warning. The field works only with the OBJECT_PARAMETER_PARSE_ON_SET experiment (enabled by default). The transition does not need configuration changes only if `value_type` matches the type of the parameter in Snowflake. Some types are easy to confuse: for example, an identifier (like a network policy name) is also accepted by Snowflake as a `STRING`, but once the provider supports the parameter, it is sent as a quoted, case-sensitive identifier, which may show a plan difference or fail. Check the parameter type in the [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/parameters) before choosing `value_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#value_type ObjectParameter#value_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.putObjectIdentifier">putObjectIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetObjectIdentifier">resetObjectIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetObjectType">resetObjectType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetOnAccount">resetOnAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetValueType">resetValueType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putObjectIdentifier` <a name="putObjectIdentifier" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.putObjectIdentifier"></a>

```java
public void putObjectIdentifier(IResolvable|java.util.List<ObjectParameterObjectIdentifier> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.putObjectIdentifier.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.putTimeouts"></a>

```java
public void putTimeouts(ObjectParameterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts">ObjectParameterTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetId"></a>

```java
public void resetId()
```

##### `resetObjectIdentifier` <a name="resetObjectIdentifier" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetObjectIdentifier"></a>

```java
public void resetObjectIdentifier()
```

##### `resetObjectType` <a name="resetObjectType" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetObjectType"></a>

```java
public void resetObjectType()
```

##### `resetOnAccount` <a name="resetOnAccount" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetOnAccount"></a>

```java
public void resetOnAccount()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetValueType` <a name="resetValueType" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetValueType"></a>

```java
public void resetValueType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ObjectParameter resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.object_parameter.ObjectParameter;

ObjectParameter.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.object_parameter.ObjectParameter;

ObjectParameter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.object_parameter.ObjectParameter;

ObjectParameter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.object_parameter.ObjectParameter;

ObjectParameter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ObjectParameter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ObjectParameter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ObjectParameter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ObjectParameter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ObjectParameter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectIdentifier">objectIdentifier</a></code> | <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList">ObjectParameterObjectIdentifierList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference">ObjectParameterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectIdentifierInput">objectIdentifierInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectTypeInput">objectTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.onAccountInput">onAccountInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts">ObjectParameterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.valueTypeInput">valueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectType">objectType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.onAccount">onAccount</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.valueType">valueType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `objectIdentifier`<sup>Required</sup> <a name="objectIdentifier" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectIdentifier"></a>

```java
public ObjectParameterObjectIdentifierList getObjectIdentifier();
```

- *Type:* <a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList">ObjectParameterObjectIdentifierList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.timeouts"></a>

```java
public ObjectParameterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference">ObjectParameterTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `objectIdentifierInput`<sup>Optional</sup> <a name="objectIdentifierInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectIdentifierInput"></a>

```java
public IResolvable|java.util.List<ObjectParameterObjectIdentifier> getObjectIdentifierInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>>

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectTypeInput"></a>

```java
public java.lang.String getObjectTypeInput();
```

- *Type:* java.lang.String

---

##### `onAccountInput`<sup>Optional</sup> <a name="onAccountInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.onAccountInput"></a>

```java
public java.lang.Boolean|IResolvable getOnAccountInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.timeoutsInput"></a>

```java
public IResolvable|ObjectParameterTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts">ObjectParameterTimeouts</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.valueTypeInput"></a>

```java
public java.lang.String getValueTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

---

##### `onAccount`<sup>Required</sup> <a name="onAccount" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.onAccount"></a>

```java
public java.lang.Boolean|IResolvable getOnAccount();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectParameterConfig <a name="ObjectParameterConfig" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.object_parameter.ObjectParameterConfig;

ObjectParameterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .key(java.lang.String)
    .value(java.lang.String)
//  .id(java.lang.String)
//  .objectIdentifier(IResolvable|java.util.List<ObjectParameterObjectIdentifier>)
//  .objectType(java.lang.String)
//  .onAccount(java.lang.Boolean|IResolvable)
//  .timeouts(ObjectParameterTimeouts)
//  .valueType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.key">key</a></code> | <code>java.lang.String</code> | Name of object parameter. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.value">value</a></code> | <code>java.lang.String</code> | Value of object parameter, as a string. Constraints are the same as those for the parameters in Snowflake documentation. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#id ObjectParameter#id}. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.objectIdentifier">objectIdentifier</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>></code> | object_identifier block. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.objectType">objectType</a></code> | <code>java.lang.String</code> | Type of object to which the parameter applies. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.onAccount">onAccount</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `false`) If true, the object parameter will be set on the account level. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts">ObjectParameterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.valueType">valueType</a></code> | <code>java.lang.String</code> | Type of `value`, used only for parameters that the provider does not support yet (forward compatibility). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Name of object parameter.

Valid values are those in [object parameters](https://docs.snowflake.com/en/sql-reference/parameters.html#object-parameters). With the `OBJECT_PARAMETER_PARSE_ON_SET` experiment (enabled by default), the provider supports the following parameters, and it parses and quotes their values itself: on the account level (`on_account = true`): `ABORT_DETACHED_QUERY` | `ACTIVE_PYTHON_PROFILER` | `ALLOW_BIND_VALUES_ACCESS` | `ALLOW_CLIENT_MFA_CACHING` | `ALLOW_ID_TOKEN` | `ALLOWED_SPCS_WORKLOAD_TYPES` | `AUTOCOMMIT` | `BASE_LOCATION_PREFIX` | `BINARY_INPUT_FORMAT` | `BINARY_OUTPUT_FORMAT` | `CATALOG` | `CATALOG_SYNC` | `CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS` | `CLIENT_ENCRYPTION_KEY_SIZE` | `CLIENT_MEMORY_LIMIT` | `CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX` | `CLIENT_METADATA_USE_SESSION_DATABASE` | `CLIENT_PREFETCH_THREADS` | `CLIENT_RESULT_CHUNK_SIZE` | `CLIENT_RESULT_COLUMN_CASE_INSENSITIVE` | `CLIENT_SESSION_KEEP_ALIVE` | `CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY` | `CLIENT_TIMESTAMP_TYPE_MAPPING` | `CORTEX_CODE_CLI_DAILY_EST_CREDIT_LIMIT_PER_USER` | `CORTEX_CODE_DESKTOP_DAILY_EST_CREDIT_LIMIT_PER_USER` | `CORTEX_CODE_SNOWSIGHT_DAILY_EST_CREDIT_LIMIT_PER_USER` | `CORTEX_ENABLED_CROSS_REGION` | `CORTEX_MODELS_ALLOWLIST` | `CSV_TIMESTAMP_FORMAT` | `DATA_METRIC_SCHEDULE` | `DATA_RETENTION_TIME_IN_DAYS` | `DATE_INPUT_FORMAT` | `DATE_OUTPUT_FORMAT` | `DEFAULT_DBT_VERSION` | `DEFAULT_DDL_COLLATION` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU` | `DEFAULT_NULL_ORDERING` | `DEFAULT_STREAMLIT_COMPUTE_POOL` | `DEFAULT_STREAMLIT_NOTEBOOK_WAREHOUSE` | `DISABLE_UI_DOWNLOAD_BUTTON` | `DISABLE_USER_PRIVILEGE_GRANTS` | `DISALLOWED_SPCS_WORKLOAD_TYPES` | `ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG` | `ENABLE_BUDGET_EVENT_LOGGING` | `ENABLE_CONSOLE_OUTPUT` | `ENABLE_CORTEX_ANALYST` | `ENABLE_DATA_COMPACTION` | `ENABLE_EGRESS_COST_OPTIMIZER` | `ENABLE_GET_DDL_USE_DATA_TYPE_ALIAS` | `ENABLE_ICEBERG_MERGE_ON_READ` | `ENABLE_IDENTIFIER_FIRST_LOGIN` | `ENABLE_INTERNAL_STAGES_PRIVATELINK` | `ENABLE_NOTEBOOK_CREATION_IN_PERSONAL_DB` | `ENABLE_PER_ACCOUNT_APP_SERVICE_PRIVATELINK_URL` | `ENABLE_PERSONAL_DATABASE` | `ENABLE_SPCS_BLOCK_STORAGE_SNOWFLAKE_FULL_ENCRYPTION_ENFORCEMENT` | `ENABLE_TAG_PROPAGATION_EVENT_LOGGING` | `ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY` | `ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE` | `ENABLE_UNHANDLED_EXCEPTIONS_REPORTING` | `ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION` | `ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR` | `ENABLE_UNREDACTED_SECURE_OBJECT_ERROR` | `ENFORCE_NETWORK_RULES_FOR_INTERNAL_STAGES` | `ERROR_ON_NONDETERMINISTIC_MERGE` | `ERROR_ON_NONDETERMINISTIC_UPDATE` | `EVENT_TABLE` | `EXTERNAL_OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST` | `EXTERNAL_VOLUME` | `GEOGRAPHY_OUTPUT_FORMAT` | `GEOMETRY_OUTPUT_FORMAT` | `HYBRID_TABLE_LOCK_TIMEOUT` | `ICEBERG_VERSION_DEFAULT` | `INITIAL_REPLICATION_SIZE_LIMIT_IN_TB` | `JDBC_TREAT_DECIMAL_AS_INT` | `JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC` | `JDBC_USE_SESSION_TIMEZONE` | `JS_TREAT_INTEGER_AS_BIGINT` | `JSON_INDENT` | `LISTING_AUTO_FULFILLMENT_REPLICATION_REFRESH_SCHEDULE` | `LOCK_TIMEOUT` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MAX_CONCURRENCY_LEVEL` | `MAX_DATA_EXTENSION_TIME_IN_DAYS` | `METRIC_LEVEL` | `MIN_DATA_RETENTION_TIME_IN_DAYS` | `MULTI_STATEMENT_COUNT` | `NETWORK_POLICY` | `NOORDER_SEQUENCE_AS_DEFAULT` | `OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST` | `ODBC_TREAT_DECIMAL_AS_INT` | `PERIODIC_DATA_REKEYING` | `PIPE_EXECUTION_PAUSED` | `PREVENT_LOAD_FROM_INLINE_URL` | `PREVENT_UNLOAD_TO_INLINE_URL` | `PREVENT_UNLOAD_TO_INTERNAL_STAGES` | `PYTHON_PROFILER_MODULES` | `PYTHON_PROFILER_TARGET_STAGE` | `QUERY_TAG` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `READ_CONSISTENCY_MODE` | `REPLACE_INVALID_CHARACTERS` | `REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION` | `REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_OPERATION` | `ROW_TIMESTAMP_DEFAULT` | `ROWS_PER_RESULTSET` | `S3_STAGE_VPCE_DNS_NAME` | `SEARCH_PATH` | `SERVERLESS_TASK_MAX_STATEMENT_SIZE` | `SERVERLESS_TASK_MIN_STATEMENT_SIZE` | `SHARE_RESTRICTIONS` | `SIMULATED_DATA_SHARING_CONSUMER` | `SQL_TRACE_QUERY_TEXT` | `SSO_LOGIN_PAGE` | `STATEMENT_QUEUED_TIMEOUT_IN_SECONDS` | `STATEMENT_TIMEOUT_IN_SECONDS` | `STORAGE_SERIALIZATION_POLICY` | `STRICT_JSON_OUTPUT` | `SUSPEND_TASK_AFTER_NUM_FAILURES` | `TASK_AUTO_RETRY_ATTEMPTS` | `TIME_INPUT_FORMAT` | `TIME_OUTPUT_FORMAT` | `TIMESTAMP_DAY_IS_ALWAYS_24H` | `TIMESTAMP_INPUT_FORMAT` | `TIMESTAMP_LTZ_OUTPUT_FORMAT` | `TIMESTAMP_NTZ_OUTPUT_FORMAT` | `TIMESTAMP_OUTPUT_FORMAT` | `TIMESTAMP_TYPE_MAPPING` | `TIMESTAMP_TZ_OUTPUT_FORMAT` | `TIMEZONE` | `TRACE_LEVEL` | `TRANSACTION_ABORT_ON_ERROR` | `TRANSACTION_DEFAULT_ISOLATION_LEVEL` | `TWO_DIGIT_CENTURY_START` | `UNSUPPORTED_DDL_ACTION` | `USE_CACHED_RESULT` | `USE_WORKSPACES_FOR_SQL` | `USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE` | `USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS` | `USER_TASK_TIMEOUT_MS` | `WEEK_OF_YEAR_POLICY` | `WEEK_START`; `DATABASE`: `CATALOG` | `DATA_RETENTION_TIME_IN_DAYS` | `DEFAULT_DDL_COLLATION` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU` | `ENABLE_CONSOLE_OUTPUT` | `EXTERNAL_VOLUME` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MAX_DATA_EXTENSION_TIME_IN_DAYS` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `REPLACE_INVALID_CHARACTERS` | `STORAGE_SERIALIZATION_POLICY` | `SUSPEND_TASK_AFTER_NUM_FAILURES` | `TASK_AUTO_RETRY_ATTEMPTS` | `TRACE_LEVEL` | `USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE` | `USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS` | `USER_TASK_TIMEOUT_MS`; `SCHEMA`: `CATALOG` | `DATA_RETENTION_TIME_IN_DAYS` | `DEFAULT_DDL_COLLATION` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU` | `ENABLE_CONSOLE_OUTPUT` | `EXTERNAL_VOLUME` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MAX_DATA_EXTENSION_TIME_IN_DAYS` | `PIPE_EXECUTION_PAUSED` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `REPLACE_INVALID_CHARACTERS` | `STORAGE_SERIALIZATION_POLICY` | `SUSPEND_TASK_AFTER_NUM_FAILURES` | `TASK_AUTO_RETRY_ATTEMPTS` | `TRACE_LEVEL` | `USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE` | `USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS` | `USER_TASK_TIMEOUT_MS`; `WAREHOUSE`: `MAX_CONCURRENCY_LEVEL` | `STATEMENT_QUEUED_TIMEOUT_IN_SECONDS` | `STATEMENT_TIMEOUT_IN_SECONDS`; `USER`: `ABORT_DETACHED_QUERY` | `ACTIVE_PYTHON_PROFILER` | `AUTOCOMMIT` | `BINARY_INPUT_FORMAT` | `BINARY_OUTPUT_FORMAT` | `CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS` | `CLIENT_MEMORY_LIMIT` | `CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX` | `CLIENT_METADATA_USE_SESSION_DATABASE` | `CLIENT_PREFETCH_THREADS` | `CLIENT_RESULT_CHUNK_SIZE` | `CLIENT_RESULT_COLUMN_CASE_INSENSITIVE` | `CLIENT_SESSION_KEEP_ALIVE` | `CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY` | `CLIENT_TIMESTAMP_TYPE_MAPPING` | `CSV_TIMESTAMP_FORMAT` | `DATE_INPUT_FORMAT` | `DATE_OUTPUT_FORMAT` | `ENABLE_GET_DDL_USE_DATA_TYPE_ALIAS` | `ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION` | `ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR` | `ERROR_ON_NONDETERMINISTIC_MERGE` | `ERROR_ON_NONDETERMINISTIC_UPDATE` | `GEOGRAPHY_OUTPUT_FORMAT` | `GEOMETRY_OUTPUT_FORMAT` | `HYBRID_TABLE_LOCK_TIMEOUT` | `JDBC_TREAT_DECIMAL_AS_INT` | `JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC` | `JDBC_USE_SESSION_TIMEZONE` | `JS_TREAT_INTEGER_AS_BIGINT` | `JSON_INDENT` | `LOCK_TIMEOUT` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MULTI_STATEMENT_COUNT` | `NETWORK_POLICY` | `NOORDER_SEQUENCE_AS_DEFAULT` | `ODBC_TREAT_DECIMAL_AS_INT` | `PREVENT_UNLOAD_TO_INTERNAL_STAGES` | `PYTHON_PROFILER_MODULES` | `PYTHON_PROFILER_TARGET_STAGE` | `QUERY_TAG` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `ROWS_PER_RESULTSET` | `S3_STAGE_VPCE_DNS_NAME` | `SEARCH_PATH` | `SIMULATED_DATA_SHARING_CONSUMER` | `STATEMENT_QUEUED_TIMEOUT_IN_SECONDS` | `STATEMENT_TIMEOUT_IN_SECONDS` | `STRICT_JSON_OUTPUT` | `TIME_INPUT_FORMAT` | `TIME_OUTPUT_FORMAT` | `TIMESTAMP_DAY_IS_ALWAYS_24H` | `TIMESTAMP_INPUT_FORMAT` | `TIMESTAMP_LTZ_OUTPUT_FORMAT` | `TIMESTAMP_NTZ_OUTPUT_FORMAT` | `TIMESTAMP_OUTPUT_FORMAT` | `TIMESTAMP_TYPE_MAPPING` | `TIMESTAMP_TZ_OUTPUT_FORMAT` | `TIMEZONE` | `TRACE_LEVEL` | `TRANSACTION_ABORT_ON_ERROR` | `TRANSACTION_DEFAULT_ISOLATION_LEVEL` | `TWO_DIGIT_CENTURY_START` | `UNSUPPORTED_DDL_ACTION` | `USE_CACHED_RESULT` | `WEEK_OF_YEAR_POLICY` | `WEEK_START`; `TASK`: `ABORT_DETACHED_QUERY` | `AUTOCOMMIT` | `BINARY_INPUT_FORMAT` | `BINARY_OUTPUT_FORMAT` | `CLIENT_MEMORY_LIMIT` | `CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX` | `CLIENT_PREFETCH_THREADS` | `CLIENT_RESULT_CHUNK_SIZE` | `CLIENT_RESULT_COLUMN_CASE_INSENSITIVE` | `CLIENT_SESSION_KEEP_ALIVE` | `CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY` | `CLIENT_TIMESTAMP_TYPE_MAPPING` | `DATE_INPUT_FORMAT` | `DATE_OUTPUT_FORMAT` | `ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION` | `ERROR_ON_NONDETERMINISTIC_MERGE` | `ERROR_ON_NONDETERMINISTIC_UPDATE` | `GEOGRAPHY_OUTPUT_FORMAT` | `GEOMETRY_OUTPUT_FORMAT` | `JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC` | `JDBC_USE_SESSION_TIMEZONE` | `JSON_INDENT` | `LOCK_TIMEOUT` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MULTI_STATEMENT_COUNT` | `NOORDER_SEQUENCE_AS_DEFAULT` | `ODBC_TREAT_DECIMAL_AS_INT` | `QUERY_TAG` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `ROWS_PER_RESULTSET` | `S3_STAGE_VPCE_DNS_NAME` | `SERVERLESS_TASK_MAX_STATEMENT_SIZE` | `SERVERLESS_TASK_MIN_STATEMENT_SIZE` | `STATEMENT_QUEUED_TIMEOUT_IN_SECONDS` | `STATEMENT_TIMEOUT_IN_SECONDS` | `STRICT_JSON_OUTPUT` | `SUSPEND_TASK_AFTER_NUM_FAILURES` | `TASK_AUTO_RETRY_ATTEMPTS` | `TIME_INPUT_FORMAT` | `TIME_OUTPUT_FORMAT` | `TIMESTAMP_DAY_IS_ALWAYS_24H` | `TIMESTAMP_INPUT_FORMAT` | `TIMESTAMP_LTZ_OUTPUT_FORMAT` | `TIMESTAMP_NTZ_OUTPUT_FORMAT` | `TIMESTAMP_OUTPUT_FORMAT` | `TIMESTAMP_TYPE_MAPPING` | `TIMESTAMP_TZ_OUTPUT_FORMAT` | `TIMEZONE` | `TRACE_LEVEL` | `TRANSACTION_ABORT_ON_ERROR` | `TRANSACTION_DEFAULT_ISOLATION_LEVEL` | `TWO_DIGIT_CENTURY_START` | `UNSUPPORTED_DDL_ACTION` | `USE_CACHED_RESULT` | `USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE` | `USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS` | `USER_TASK_TIMEOUT_MS` | `WEEK_OF_YEAR_POLICY` | `WEEK_START`; `SERVICE`: `SERVICE_CALLER_TOKEN_VALIDITY_SECS`; `HYBRID TABLE`: `DATA_RETENTION_TIME_IN_DAYS` | `MAX_DATA_EXTENSION_TIME_IN_DAYS`; `ICEBERG TABLE`: `ALLOW_ROW_TIMESTAMP` | `CATALOG` | `CATALOG_SYNC` | `DATA_METRIC_SCHEDULE` | `DATA_RETENTION_TIME_IN_DAYS` | `DEFAULT_DDL_COLLATION` | `ENABLE_DATA_COMPACTION` | `ENABLE_ICEBERG_MERGE_ON_READ` | `EXTERNAL_VOLUME` | `ICEBERG_MERGE_ON_READ_BEHAVIOR` | `LOG_EVENT_LEVEL` | `MAX_DATA_EXTENSION_TIME_IN_DAYS` | `OPTIMIZE_DATA_LAYOUT` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `REPLACE_INVALID_CHARACTERS` | `STORAGE_SERIALIZATION_POLICY` | `TARGET_FILE_SIZE`. Any other parameter, and any parameter on any other object type, is sent to Snowflake as is: with `value_type`, the value is rendered by it, and without it, the value is sent as written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#key ObjectParameter#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value of object parameter, as a string. Constraints are the same as those for the parameters in Snowflake documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#value ObjectParameter#value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#id ObjectParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `objectIdentifier`<sup>Optional</sup> <a name="objectIdentifier" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.objectIdentifier"></a>

```java
public IResolvable|java.util.List<ObjectParameterObjectIdentifier> getObjectIdentifier();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>>

object_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#object_identifier ObjectParameter#object_identifier}

---

##### `objectType`<sup>Optional</sup> <a name="objectType" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.objectType"></a>

```java
public java.lang.String getObjectType();
```

- *Type:* java.lang.String

Type of object to which the parameter applies.

Valid values are those in [object types](https://docs.snowflake.com/en/sql-reference/parameters.html#object-types). If no value is provided, then the resource will default to setting the object parameter at account level. The provider supports the parameters of the following object types: `DATABASE` | `SCHEMA` | `WAREHOUSE` | `USER` | `TASK` | `SERVICE` | `HYBRID TABLE` | `ICEBERG TABLE` (see `key`). Other object types are sent as is, with the value rendered by `value_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#object_type ObjectParameter#object_type}

---

##### `onAccount`<sup>Optional</sup> <a name="onAccount" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.onAccount"></a>

```java
public java.lang.Boolean|IResolvable getOnAccount();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `false`) If true, the object parameter will be set on the account level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#on_account ObjectParameter#on_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.timeouts"></a>

```java
public ObjectParameterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts">ObjectParameterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#timeouts ObjectParameter#timeouts}

---

##### `valueType`<sup>Optional</sup> <a name="valueType" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

Type of `value`, used only for parameters that the provider does not support yet (forward compatibility).

Valid values are (case-insensitive): `STRING` | `IDENTIFIER` | `INTEGER` | `FLOAT` | `BOOLEAN`. `value` is rendered the same way as for the parameters that the provider supports: `STRING` (also use it for enum parameters) is sent as a single-quoted string, `IDENTIFIER` as a quoted identifier (it can be fully qualified, e.g. `DB.SCHEMA.NAME`), and the others as a number or a boolean. The field is required for a parameter that the provider does not support, and it is ignored for the supported parameters (they are listed in the `key` field description, per object type), so it can stay in the configuration when a later provider version starts to support the parameter. Changes of this field are ignored for the supported parameters, but setting it for a supported parameter logs a warning. The field works only with the OBJECT_PARAMETER_PARSE_ON_SET experiment (enabled by default). The transition does not need configuration changes only if `value_type` matches the type of the parameter in Snowflake. Some types are easy to confuse: for example, an identifier (like a network policy name) is also accepted by Snowflake as a `STRING`, but once the provider supports the parameter, it is sent as a quoted, case-sensitive identifier, which may show a plan difference or fail. Check the parameter type in the [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/parameters) before choosing `value_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#value_type ObjectParameter#value_type}

---

### ObjectParameterObjectIdentifier <a name="ObjectParameterObjectIdentifier" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.Initializer"></a>

```java
import io.cdktn.providers.snowflake.object_parameter.ObjectParameterObjectIdentifier;

ObjectParameterObjectIdentifier.builder()
    .name(java.lang.String)
//  .database(java.lang.String)
//  .schema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.name">name</a></code> | <code>java.lang.String</code> | Name of the object to set the parameter for. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.database">database</a></code> | <code>java.lang.String</code> | Name of the database that the object was created in. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.schema">schema</a></code> | <code>java.lang.String</code> | Name of the schema that the object was created in. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the object to set the parameter for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#name ObjectParameter#name}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Name of the database that the object was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#database ObjectParameter#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Name of the schema that the object was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#schema ObjectParameter#schema}

---

### ObjectParameterTimeouts <a name="ObjectParameterTimeouts" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.object_parameter.ObjectParameterTimeouts;

ObjectParameterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#create ObjectParameter#create}. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#delete ObjectParameter#delete}. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#read ObjectParameter#read}. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#update ObjectParameter#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#create ObjectParameter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#delete ObjectParameter#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#read ObjectParameter#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#update ObjectParameter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObjectParameterObjectIdentifierList <a name="ObjectParameterObjectIdentifierList" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.object_parameter.ObjectParameterObjectIdentifierList;

new ObjectParameterObjectIdentifierList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.get"></a>

```java
public ObjectParameterObjectIdentifierOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ObjectParameterObjectIdentifier> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>>

---


### ObjectParameterObjectIdentifierOutputReference <a name="ObjectParameterObjectIdentifierOutputReference" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.object_parameter.ObjectParameterObjectIdentifierOutputReference;

new ObjectParameterObjectIdentifierOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resetSchema"></a>

```java
public void resetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.internalValue"></a>

```java
public IResolvable|ObjectParameterObjectIdentifier getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>

---


### ObjectParameterTimeoutsOutputReference <a name="ObjectParameterTimeoutsOutputReference" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.object_parameter.ObjectParameterTimeoutsOutputReference;

new ObjectParameterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts">ObjectParameterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ObjectParameterTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts">ObjectParameterTimeouts</a>

---



