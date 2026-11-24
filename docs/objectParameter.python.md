# `objectParameter` Submodule <a name="`objectParameter` Submodule" id="@cdktn/provider-snowflake.objectParameter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectParameter <a name="ObjectParameter" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter snowflake_object_parameter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer"></a>

```python
from cdktn_provider_snowflake import object_parameter

objectParameter.ObjectParameter(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key: str,
  value: str,
  id: str = None,
  object_identifier: IResolvable | typing.List[ObjectParameterObjectIdentifier] = None,
  object_type: str = None,
  on_account: bool | IResolvable = None,
  timeouts: ObjectParameterTimeouts = None,
  value_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.key">key</a></code> | <code>str</code> | Name of object parameter. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.value">value</a></code> | <code>str</code> | Value of object parameter, as a string. Constraints are the same as those for the parameters in Snowflake documentation. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#id ObjectParameter#id}. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.objectIdentifier">object_identifier</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>]</code> | object_identifier block. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.objectType">object_type</a></code> | <code>str</code> | Type of object to which the parameter applies. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.onAccount">on_account</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `false`) If true, the object parameter will be set on the account level. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts">ObjectParameterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.valueType">value_type</a></code> | <code>str</code> | Type of `value`, used only for parameters that the provider does not support yet (forward compatibility). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.key"></a>

- *Type:* str

Name of object parameter.

Valid values are those in [object parameters](https://docs.snowflake.com/en/sql-reference/parameters.html#object-parameters). With the `OBJECT_PARAMETER_PARSE_ON_SET` experiment (enabled by default), the provider supports the following parameters, and it parses and quotes their values itself: on the account level (`on_account = true`): `ABORT_DETACHED_QUERY` | `ACTIVE_PYTHON_PROFILER` | `ALLOW_BIND_VALUES_ACCESS` | `ALLOW_CLIENT_MFA_CACHING` | `ALLOW_ID_TOKEN` | `ALLOWED_SPCS_WORKLOAD_TYPES` | `AUTOCOMMIT` | `BASE_LOCATION_PREFIX` | `BINARY_INPUT_FORMAT` | `BINARY_OUTPUT_FORMAT` | `CATALOG` | `CATALOG_SYNC` | `CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS` | `CLIENT_ENCRYPTION_KEY_SIZE` | `CLIENT_MEMORY_LIMIT` | `CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX` | `CLIENT_METADATA_USE_SESSION_DATABASE` | `CLIENT_PREFETCH_THREADS` | `CLIENT_RESULT_CHUNK_SIZE` | `CLIENT_RESULT_COLUMN_CASE_INSENSITIVE` | `CLIENT_SESSION_KEEP_ALIVE` | `CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY` | `CLIENT_TIMESTAMP_TYPE_MAPPING` | `CORTEX_CODE_CLI_DAILY_EST_CREDIT_LIMIT_PER_USER` | `CORTEX_CODE_DESKTOP_DAILY_EST_CREDIT_LIMIT_PER_USER` | `CORTEX_CODE_SNOWSIGHT_DAILY_EST_CREDIT_LIMIT_PER_USER` | `CORTEX_ENABLED_CROSS_REGION` | `CORTEX_MODELS_ALLOWLIST` | `CSV_TIMESTAMP_FORMAT` | `DATA_METRIC_SCHEDULE` | `DATA_RETENTION_TIME_IN_DAYS` | `DATE_INPUT_FORMAT` | `DATE_OUTPUT_FORMAT` | `DEFAULT_DBT_VERSION` | `DEFAULT_DDL_COLLATION` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU` | `DEFAULT_NULL_ORDERING` | `DEFAULT_STREAMLIT_COMPUTE_POOL` | `DEFAULT_STREAMLIT_NOTEBOOK_WAREHOUSE` | `DISABLE_UI_DOWNLOAD_BUTTON` | `DISABLE_USER_PRIVILEGE_GRANTS` | `DISALLOWED_SPCS_WORKLOAD_TYPES` | `ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG` | `ENABLE_BUDGET_EVENT_LOGGING` | `ENABLE_CONSOLE_OUTPUT` | `ENABLE_CORTEX_ANALYST` | `ENABLE_DATA_COMPACTION` | `ENABLE_EGRESS_COST_OPTIMIZER` | `ENABLE_GET_DDL_USE_DATA_TYPE_ALIAS` | `ENABLE_ICEBERG_MERGE_ON_READ` | `ENABLE_IDENTIFIER_FIRST_LOGIN` | `ENABLE_INTERNAL_STAGES_PRIVATELINK` | `ENABLE_NOTEBOOK_CREATION_IN_PERSONAL_DB` | `ENABLE_PER_ACCOUNT_APP_SERVICE_PRIVATELINK_URL` | `ENABLE_PERSONAL_DATABASE` | `ENABLE_SPCS_BLOCK_STORAGE_SNOWFLAKE_FULL_ENCRYPTION_ENFORCEMENT` | `ENABLE_TAG_PROPAGATION_EVENT_LOGGING` | `ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY` | `ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE` | `ENABLE_UNHANDLED_EXCEPTIONS_REPORTING` | `ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION` | `ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR` | `ENABLE_UNREDACTED_SECURE_OBJECT_ERROR` | `ENFORCE_NETWORK_RULES_FOR_INTERNAL_STAGES` | `ERROR_ON_NONDETERMINISTIC_MERGE` | `ERROR_ON_NONDETERMINISTIC_UPDATE` | `EVENT_TABLE` | `EXTERNAL_OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST` | `EXTERNAL_VOLUME` | `GEOGRAPHY_OUTPUT_FORMAT` | `GEOMETRY_OUTPUT_FORMAT` | `HYBRID_TABLE_LOCK_TIMEOUT` | `ICEBERG_VERSION_DEFAULT` | `INITIAL_REPLICATION_SIZE_LIMIT_IN_TB` | `JDBC_TREAT_DECIMAL_AS_INT` | `JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC` | `JDBC_USE_SESSION_TIMEZONE` | `JS_TREAT_INTEGER_AS_BIGINT` | `JSON_INDENT` | `LISTING_AUTO_FULFILLMENT_REPLICATION_REFRESH_SCHEDULE` | `LOCK_TIMEOUT` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MAX_CONCURRENCY_LEVEL` | `MAX_DATA_EXTENSION_TIME_IN_DAYS` | `METRIC_LEVEL` | `MIN_DATA_RETENTION_TIME_IN_DAYS` | `MULTI_STATEMENT_COUNT` | `NETWORK_POLICY` | `NOORDER_SEQUENCE_AS_DEFAULT` | `OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST` | `ODBC_TREAT_DECIMAL_AS_INT` | `PERIODIC_DATA_REKEYING` | `PIPE_EXECUTION_PAUSED` | `PREVENT_LOAD_FROM_INLINE_URL` | `PREVENT_UNLOAD_TO_INLINE_URL` | `PREVENT_UNLOAD_TO_INTERNAL_STAGES` | `PYTHON_PROFILER_MODULES` | `PYTHON_PROFILER_TARGET_STAGE` | `QUERY_TAG` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `READ_CONSISTENCY_MODE` | `REPLACE_INVALID_CHARACTERS` | `REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION` | `REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_OPERATION` | `ROW_TIMESTAMP_DEFAULT` | `ROWS_PER_RESULTSET` | `S3_STAGE_VPCE_DNS_NAME` | `SEARCH_PATH` | `SERVERLESS_TASK_MAX_STATEMENT_SIZE` | `SERVERLESS_TASK_MIN_STATEMENT_SIZE` | `SHARE_RESTRICTIONS` | `SIMULATED_DATA_SHARING_CONSUMER` | `SQL_TRACE_QUERY_TEXT` | `SSO_LOGIN_PAGE` | `STATEMENT_QUEUED_TIMEOUT_IN_SECONDS` | `STATEMENT_TIMEOUT_IN_SECONDS` | `STORAGE_SERIALIZATION_POLICY` | `STRICT_JSON_OUTPUT` | `SUSPEND_TASK_AFTER_NUM_FAILURES` | `TASK_AUTO_RETRY_ATTEMPTS` | `TIME_INPUT_FORMAT` | `TIME_OUTPUT_FORMAT` | `TIMESTAMP_DAY_IS_ALWAYS_24H` | `TIMESTAMP_INPUT_FORMAT` | `TIMESTAMP_LTZ_OUTPUT_FORMAT` | `TIMESTAMP_NTZ_OUTPUT_FORMAT` | `TIMESTAMP_OUTPUT_FORMAT` | `TIMESTAMP_TYPE_MAPPING` | `TIMESTAMP_TZ_OUTPUT_FORMAT` | `TIMEZONE` | `TRACE_LEVEL` | `TRANSACTION_ABORT_ON_ERROR` | `TRANSACTION_DEFAULT_ISOLATION_LEVEL` | `TWO_DIGIT_CENTURY_START` | `UNSUPPORTED_DDL_ACTION` | `USE_CACHED_RESULT` | `USE_WORKSPACES_FOR_SQL` | `USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE` | `USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS` | `USER_TASK_TIMEOUT_MS` | `WEEK_OF_YEAR_POLICY` | `WEEK_START`; `DATABASE`: `CATALOG` | `DATA_RETENTION_TIME_IN_DAYS` | `DEFAULT_DDL_COLLATION` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU` | `ENABLE_CONSOLE_OUTPUT` | `EXTERNAL_VOLUME` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MAX_DATA_EXTENSION_TIME_IN_DAYS` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `REPLACE_INVALID_CHARACTERS` | `STORAGE_SERIALIZATION_POLICY` | `SUSPEND_TASK_AFTER_NUM_FAILURES` | `TASK_AUTO_RETRY_ATTEMPTS` | `TRACE_LEVEL` | `USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE` | `USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS` | `USER_TASK_TIMEOUT_MS`; `SCHEMA`: `CATALOG` | `DATA_RETENTION_TIME_IN_DAYS` | `DEFAULT_DDL_COLLATION` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU` | `ENABLE_CONSOLE_OUTPUT` | `EXTERNAL_VOLUME` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MAX_DATA_EXTENSION_TIME_IN_DAYS` | `PIPE_EXECUTION_PAUSED` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `REPLACE_INVALID_CHARACTERS` | `STORAGE_SERIALIZATION_POLICY` | `SUSPEND_TASK_AFTER_NUM_FAILURES` | `TASK_AUTO_RETRY_ATTEMPTS` | `TRACE_LEVEL` | `USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE` | `USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS` | `USER_TASK_TIMEOUT_MS`; `WAREHOUSE`: `MAX_CONCURRENCY_LEVEL` | `STATEMENT_QUEUED_TIMEOUT_IN_SECONDS` | `STATEMENT_TIMEOUT_IN_SECONDS`; `USER`: `ABORT_DETACHED_QUERY` | `ACTIVE_PYTHON_PROFILER` | `AUTOCOMMIT` | `BINARY_INPUT_FORMAT` | `BINARY_OUTPUT_FORMAT` | `CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS` | `CLIENT_MEMORY_LIMIT` | `CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX` | `CLIENT_METADATA_USE_SESSION_DATABASE` | `CLIENT_PREFETCH_THREADS` | `CLIENT_RESULT_CHUNK_SIZE` | `CLIENT_RESULT_COLUMN_CASE_INSENSITIVE` | `CLIENT_SESSION_KEEP_ALIVE` | `CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY` | `CLIENT_TIMESTAMP_TYPE_MAPPING` | `CSV_TIMESTAMP_FORMAT` | `DATE_INPUT_FORMAT` | `DATE_OUTPUT_FORMAT` | `ENABLE_GET_DDL_USE_DATA_TYPE_ALIAS` | `ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION` | `ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR` | `ERROR_ON_NONDETERMINISTIC_MERGE` | `ERROR_ON_NONDETERMINISTIC_UPDATE` | `GEOGRAPHY_OUTPUT_FORMAT` | `GEOMETRY_OUTPUT_FORMAT` | `HYBRID_TABLE_LOCK_TIMEOUT` | `JDBC_TREAT_DECIMAL_AS_INT` | `JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC` | `JDBC_USE_SESSION_TIMEZONE` | `JS_TREAT_INTEGER_AS_BIGINT` | `JSON_INDENT` | `LOCK_TIMEOUT` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MULTI_STATEMENT_COUNT` | `NETWORK_POLICY` | `NOORDER_SEQUENCE_AS_DEFAULT` | `ODBC_TREAT_DECIMAL_AS_INT` | `PREVENT_UNLOAD_TO_INTERNAL_STAGES` | `PYTHON_PROFILER_MODULES` | `PYTHON_PROFILER_TARGET_STAGE` | `QUERY_TAG` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `ROWS_PER_RESULTSET` | `S3_STAGE_VPCE_DNS_NAME` | `SEARCH_PATH` | `SIMULATED_DATA_SHARING_CONSUMER` | `STATEMENT_QUEUED_TIMEOUT_IN_SECONDS` | `STATEMENT_TIMEOUT_IN_SECONDS` | `STRICT_JSON_OUTPUT` | `TIME_INPUT_FORMAT` | `TIME_OUTPUT_FORMAT` | `TIMESTAMP_DAY_IS_ALWAYS_24H` | `TIMESTAMP_INPUT_FORMAT` | `TIMESTAMP_LTZ_OUTPUT_FORMAT` | `TIMESTAMP_NTZ_OUTPUT_FORMAT` | `TIMESTAMP_OUTPUT_FORMAT` | `TIMESTAMP_TYPE_MAPPING` | `TIMESTAMP_TZ_OUTPUT_FORMAT` | `TIMEZONE` | `TRACE_LEVEL` | `TRANSACTION_ABORT_ON_ERROR` | `TRANSACTION_DEFAULT_ISOLATION_LEVEL` | `TWO_DIGIT_CENTURY_START` | `UNSUPPORTED_DDL_ACTION` | `USE_CACHED_RESULT` | `WEEK_OF_YEAR_POLICY` | `WEEK_START`; `TASK`: `ABORT_DETACHED_QUERY` | `AUTOCOMMIT` | `BINARY_INPUT_FORMAT` | `BINARY_OUTPUT_FORMAT` | `CLIENT_MEMORY_LIMIT` | `CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX` | `CLIENT_PREFETCH_THREADS` | `CLIENT_RESULT_CHUNK_SIZE` | `CLIENT_RESULT_COLUMN_CASE_INSENSITIVE` | `CLIENT_SESSION_KEEP_ALIVE` | `CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY` | `CLIENT_TIMESTAMP_TYPE_MAPPING` | `DATE_INPUT_FORMAT` | `DATE_OUTPUT_FORMAT` | `ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION` | `ERROR_ON_NONDETERMINISTIC_MERGE` | `ERROR_ON_NONDETERMINISTIC_UPDATE` | `GEOGRAPHY_OUTPUT_FORMAT` | `GEOMETRY_OUTPUT_FORMAT` | `JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC` | `JDBC_USE_SESSION_TIMEZONE` | `JSON_INDENT` | `LOCK_TIMEOUT` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MULTI_STATEMENT_COUNT` | `NOORDER_SEQUENCE_AS_DEFAULT` | `ODBC_TREAT_DECIMAL_AS_INT` | `QUERY_TAG` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `ROWS_PER_RESULTSET` | `S3_STAGE_VPCE_DNS_NAME` | `SERVERLESS_TASK_MAX_STATEMENT_SIZE` | `SERVERLESS_TASK_MIN_STATEMENT_SIZE` | `STATEMENT_QUEUED_TIMEOUT_IN_SECONDS` | `STATEMENT_TIMEOUT_IN_SECONDS` | `STRICT_JSON_OUTPUT` | `SUSPEND_TASK_AFTER_NUM_FAILURES` | `TASK_AUTO_RETRY_ATTEMPTS` | `TIME_INPUT_FORMAT` | `TIME_OUTPUT_FORMAT` | `TIMESTAMP_DAY_IS_ALWAYS_24H` | `TIMESTAMP_INPUT_FORMAT` | `TIMESTAMP_LTZ_OUTPUT_FORMAT` | `TIMESTAMP_NTZ_OUTPUT_FORMAT` | `TIMESTAMP_OUTPUT_FORMAT` | `TIMESTAMP_TYPE_MAPPING` | `TIMESTAMP_TZ_OUTPUT_FORMAT` | `TIMEZONE` | `TRACE_LEVEL` | `TRANSACTION_ABORT_ON_ERROR` | `TRANSACTION_DEFAULT_ISOLATION_LEVEL` | `TWO_DIGIT_CENTURY_START` | `UNSUPPORTED_DDL_ACTION` | `USE_CACHED_RESULT` | `USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE` | `USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS` | `USER_TASK_TIMEOUT_MS` | `WEEK_OF_YEAR_POLICY` | `WEEK_START`; `SERVICE`: `SERVICE_CALLER_TOKEN_VALIDITY_SECS`; `HYBRID TABLE`: `DATA_RETENTION_TIME_IN_DAYS` | `MAX_DATA_EXTENSION_TIME_IN_DAYS`; `ICEBERG TABLE`: `ALLOW_ROW_TIMESTAMP` | `CATALOG` | `CATALOG_SYNC` | `DATA_METRIC_SCHEDULE` | `DATA_RETENTION_TIME_IN_DAYS` | `DEFAULT_DDL_COLLATION` | `ENABLE_DATA_COMPACTION` | `ENABLE_ICEBERG_MERGE_ON_READ` | `EXTERNAL_VOLUME` | `ICEBERG_MERGE_ON_READ_BEHAVIOR` | `LOG_EVENT_LEVEL` | `MAX_DATA_EXTENSION_TIME_IN_DAYS` | `OPTIMIZE_DATA_LAYOUT` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `REPLACE_INVALID_CHARACTERS` | `STORAGE_SERIALIZATION_POLICY` | `TARGET_FILE_SIZE`. Any other parameter, and any parameter on any other object type, is sent to Snowflake as is: with `value_type`, the value is rendered by it, and without it, the value is sent as written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#key ObjectParameter#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.value"></a>

- *Type:* str

Value of object parameter, as a string. Constraints are the same as those for the parameters in Snowflake documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#value ObjectParameter#value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#id ObjectParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `object_identifier`<sup>Optional</sup> <a name="object_identifier" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.objectIdentifier"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>]

object_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#object_identifier ObjectParameter#object_identifier}

---

##### `object_type`<sup>Optional</sup> <a name="object_type" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.objectType"></a>

- *Type:* str

Type of object to which the parameter applies.

Valid values are those in [object types](https://docs.snowflake.com/en/sql-reference/parameters.html#object-types). If no value is provided, then the resource will default to setting the object parameter at account level. The provider supports the parameters of the following object types: `DATABASE` | `SCHEMA` | `WAREHOUSE` | `USER` | `TASK` | `SERVICE` | `HYBRID TABLE` | `ICEBERG TABLE` (see `key`). Other object types are sent as is, with the value rendered by `value_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#object_type ObjectParameter#object_type}

---

##### `on_account`<sup>Optional</sup> <a name="on_account" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.onAccount"></a>

- *Type:* bool | cdktn.IResolvable

(Default: `false`) If true, the object parameter will be set on the account level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#on_account ObjectParameter#on_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts">ObjectParameterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#timeouts ObjectParameter#timeouts}

---

##### `value_type`<sup>Optional</sup> <a name="value_type" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.Initializer.parameter.valueType"></a>

- *Type:* str

Type of `value`, used only for parameters that the provider does not support yet (forward compatibility).

Valid values are (case-insensitive): `STRING` | `IDENTIFIER` | `INTEGER` | `FLOAT` | `BOOLEAN`. `value` is rendered the same way as for the parameters that the provider supports: `STRING` (also use it for enum parameters) is sent as a single-quoted string, `IDENTIFIER` as a quoted identifier (it can be fully qualified, e.g. `DB.SCHEMA.NAME`), and the others as a number or a boolean. The field is required for a parameter that the provider does not support, and it is ignored for the supported parameters (they are listed in the `key` field description, per object type), so it can stay in the configuration when a later provider version starts to support the parameter. Changes of this field are ignored for the supported parameters, but setting it for a supported parameter logs a warning. The field works only with the OBJECT_PARAMETER_PARSE_ON_SET experiment (enabled by default). The transition does not need configuration changes only if `value_type` matches the type of the parameter in Snowflake. Some types are easy to confuse: for example, an identifier (like a network policy name) is also accepted by Snowflake as a `STRING`, but once the provider supports the parameter, it is sent as a quoted, case-sensitive identifier, which may show a plan difference or fail. Check the parameter type in the [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/parameters) before choosing `value_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#value_type ObjectParameter#value_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.putObjectIdentifier">put_object_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetObjectIdentifier">reset_object_identifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetObjectType">reset_object_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetOnAccount">reset_on_account</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetValueType">reset_value_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_object_identifier` <a name="put_object_identifier" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.putObjectIdentifier"></a>

```python
def put_object_identifier(
  value: IResolvable | typing.List[ObjectParameterObjectIdentifier]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.putObjectIdentifier.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#create ObjectParameter#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#delete ObjectParameter#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#read ObjectParameter#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#update ObjectParameter#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_object_identifier` <a name="reset_object_identifier" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetObjectIdentifier"></a>

```python
def reset_object_identifier() -> None
```

##### `reset_object_type` <a name="reset_object_type" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetObjectType"></a>

```python
def reset_object_type() -> None
```

##### `reset_on_account` <a name="reset_on_account" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetOnAccount"></a>

```python
def reset_on_account() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_value_type` <a name="reset_value_type" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.resetValueType"></a>

```python
def reset_value_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ObjectParameter resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.isConstruct"></a>

```python
from cdktn_provider_snowflake import object_parameter

objectParameter.ObjectParameter.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import object_parameter

objectParameter.ObjectParameter.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import object_parameter

objectParameter.ObjectParameter.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import object_parameter

objectParameter.ObjectParameter.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ObjectParameter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ObjectParameter to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ObjectParameter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ObjectParameter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectIdentifier">object_identifier</a></code> | <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList">ObjectParameterObjectIdentifierList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference">ObjectParameterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectIdentifierInput">object_identifier_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectTypeInput">object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.onAccountInput">on_account_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts">ObjectParameterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.valueTypeInput">value_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.onAccount">on_account</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.valueType">value_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `object_identifier`<sup>Required</sup> <a name="object_identifier" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectIdentifier"></a>

```python
object_identifier: ObjectParameterObjectIdentifierList
```

- *Type:* <a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList">ObjectParameterObjectIdentifierList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.timeouts"></a>

```python
timeouts: ObjectParameterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference">ObjectParameterTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `object_identifier_input`<sup>Optional</sup> <a name="object_identifier_input" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectIdentifierInput"></a>

```python
object_identifier_input: IResolvable | typing.List[ObjectParameterObjectIdentifier]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>]

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectTypeInput"></a>

```python
object_type_input: str
```

- *Type:* str

---

##### `on_account_input`<sup>Optional</sup> <a name="on_account_input" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.onAccountInput"></a>

```python
on_account_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ObjectParameterTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts">ObjectParameterTimeouts</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `value_type_input`<sup>Optional</sup> <a name="value_type_input" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.valueTypeInput"></a>

```python
value_type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `on_account`<sup>Required</sup> <a name="on_account" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.onAccount"></a>

```python
on_account: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `value_type`<sup>Required</sup> <a name="value_type" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.objectParameter.ObjectParameter.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectParameterConfig <a name="ObjectParameterConfig" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import object_parameter

objectParameter.ObjectParameterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  key: str,
  value: str,
  id: str = None,
  object_identifier: IResolvable | typing.List[ObjectParameterObjectIdentifier] = None,
  object_type: str = None,
  on_account: bool | IResolvable = None,
  timeouts: ObjectParameterTimeouts = None,
  value_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.key">key</a></code> | <code>str</code> | Name of object parameter. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.value">value</a></code> | <code>str</code> | Value of object parameter, as a string. Constraints are the same as those for the parameters in Snowflake documentation. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#id ObjectParameter#id}. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.objectIdentifier">object_identifier</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>]</code> | object_identifier block. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.objectType">object_type</a></code> | <code>str</code> | Type of object to which the parameter applies. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.onAccount">on_account</a></code> | <code>bool \| cdktn.IResolvable</code> | (Default: `false`) If true, the object parameter will be set on the account level. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts">ObjectParameterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.valueType">value_type</a></code> | <code>str</code> | Type of `value`, used only for parameters that the provider does not support yet (forward compatibility). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Name of object parameter.

Valid values are those in [object parameters](https://docs.snowflake.com/en/sql-reference/parameters.html#object-parameters). With the `OBJECT_PARAMETER_PARSE_ON_SET` experiment (enabled by default), the provider supports the following parameters, and it parses and quotes their values itself: on the account level (`on_account = true`): `ABORT_DETACHED_QUERY` | `ACTIVE_PYTHON_PROFILER` | `ALLOW_BIND_VALUES_ACCESS` | `ALLOW_CLIENT_MFA_CACHING` | `ALLOW_ID_TOKEN` | `ALLOWED_SPCS_WORKLOAD_TYPES` | `AUTOCOMMIT` | `BASE_LOCATION_PREFIX` | `BINARY_INPUT_FORMAT` | `BINARY_OUTPUT_FORMAT` | `CATALOG` | `CATALOG_SYNC` | `CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS` | `CLIENT_ENCRYPTION_KEY_SIZE` | `CLIENT_MEMORY_LIMIT` | `CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX` | `CLIENT_METADATA_USE_SESSION_DATABASE` | `CLIENT_PREFETCH_THREADS` | `CLIENT_RESULT_CHUNK_SIZE` | `CLIENT_RESULT_COLUMN_CASE_INSENSITIVE` | `CLIENT_SESSION_KEEP_ALIVE` | `CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY` | `CLIENT_TIMESTAMP_TYPE_MAPPING` | `CORTEX_CODE_CLI_DAILY_EST_CREDIT_LIMIT_PER_USER` | `CORTEX_CODE_DESKTOP_DAILY_EST_CREDIT_LIMIT_PER_USER` | `CORTEX_CODE_SNOWSIGHT_DAILY_EST_CREDIT_LIMIT_PER_USER` | `CORTEX_ENABLED_CROSS_REGION` | `CORTEX_MODELS_ALLOWLIST` | `CSV_TIMESTAMP_FORMAT` | `DATA_METRIC_SCHEDULE` | `DATA_RETENTION_TIME_IN_DAYS` | `DATE_INPUT_FORMAT` | `DATE_OUTPUT_FORMAT` | `DEFAULT_DBT_VERSION` | `DEFAULT_DDL_COLLATION` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU` | `DEFAULT_NULL_ORDERING` | `DEFAULT_STREAMLIT_COMPUTE_POOL` | `DEFAULT_STREAMLIT_NOTEBOOK_WAREHOUSE` | `DISABLE_UI_DOWNLOAD_BUTTON` | `DISABLE_USER_PRIVILEGE_GRANTS` | `DISALLOWED_SPCS_WORKLOAD_TYPES` | `ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG` | `ENABLE_BUDGET_EVENT_LOGGING` | `ENABLE_CONSOLE_OUTPUT` | `ENABLE_CORTEX_ANALYST` | `ENABLE_DATA_COMPACTION` | `ENABLE_EGRESS_COST_OPTIMIZER` | `ENABLE_GET_DDL_USE_DATA_TYPE_ALIAS` | `ENABLE_ICEBERG_MERGE_ON_READ` | `ENABLE_IDENTIFIER_FIRST_LOGIN` | `ENABLE_INTERNAL_STAGES_PRIVATELINK` | `ENABLE_NOTEBOOK_CREATION_IN_PERSONAL_DB` | `ENABLE_PER_ACCOUNT_APP_SERVICE_PRIVATELINK_URL` | `ENABLE_PERSONAL_DATABASE` | `ENABLE_SPCS_BLOCK_STORAGE_SNOWFLAKE_FULL_ENCRYPTION_ENFORCEMENT` | `ENABLE_TAG_PROPAGATION_EVENT_LOGGING` | `ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY` | `ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE` | `ENABLE_UNHANDLED_EXCEPTIONS_REPORTING` | `ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION` | `ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR` | `ENABLE_UNREDACTED_SECURE_OBJECT_ERROR` | `ENFORCE_NETWORK_RULES_FOR_INTERNAL_STAGES` | `ERROR_ON_NONDETERMINISTIC_MERGE` | `ERROR_ON_NONDETERMINISTIC_UPDATE` | `EVENT_TABLE` | `EXTERNAL_OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST` | `EXTERNAL_VOLUME` | `GEOGRAPHY_OUTPUT_FORMAT` | `GEOMETRY_OUTPUT_FORMAT` | `HYBRID_TABLE_LOCK_TIMEOUT` | `ICEBERG_VERSION_DEFAULT` | `INITIAL_REPLICATION_SIZE_LIMIT_IN_TB` | `JDBC_TREAT_DECIMAL_AS_INT` | `JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC` | `JDBC_USE_SESSION_TIMEZONE` | `JS_TREAT_INTEGER_AS_BIGINT` | `JSON_INDENT` | `LISTING_AUTO_FULFILLMENT_REPLICATION_REFRESH_SCHEDULE` | `LOCK_TIMEOUT` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MAX_CONCURRENCY_LEVEL` | `MAX_DATA_EXTENSION_TIME_IN_DAYS` | `METRIC_LEVEL` | `MIN_DATA_RETENTION_TIME_IN_DAYS` | `MULTI_STATEMENT_COUNT` | `NETWORK_POLICY` | `NOORDER_SEQUENCE_AS_DEFAULT` | `OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST` | `ODBC_TREAT_DECIMAL_AS_INT` | `PERIODIC_DATA_REKEYING` | `PIPE_EXECUTION_PAUSED` | `PREVENT_LOAD_FROM_INLINE_URL` | `PREVENT_UNLOAD_TO_INLINE_URL` | `PREVENT_UNLOAD_TO_INTERNAL_STAGES` | `PYTHON_PROFILER_MODULES` | `PYTHON_PROFILER_TARGET_STAGE` | `QUERY_TAG` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `READ_CONSISTENCY_MODE` | `REPLACE_INVALID_CHARACTERS` | `REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION` | `REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_OPERATION` | `ROW_TIMESTAMP_DEFAULT` | `ROWS_PER_RESULTSET` | `S3_STAGE_VPCE_DNS_NAME` | `SEARCH_PATH` | `SERVERLESS_TASK_MAX_STATEMENT_SIZE` | `SERVERLESS_TASK_MIN_STATEMENT_SIZE` | `SHARE_RESTRICTIONS` | `SIMULATED_DATA_SHARING_CONSUMER` | `SQL_TRACE_QUERY_TEXT` | `SSO_LOGIN_PAGE` | `STATEMENT_QUEUED_TIMEOUT_IN_SECONDS` | `STATEMENT_TIMEOUT_IN_SECONDS` | `STORAGE_SERIALIZATION_POLICY` | `STRICT_JSON_OUTPUT` | `SUSPEND_TASK_AFTER_NUM_FAILURES` | `TASK_AUTO_RETRY_ATTEMPTS` | `TIME_INPUT_FORMAT` | `TIME_OUTPUT_FORMAT` | `TIMESTAMP_DAY_IS_ALWAYS_24H` | `TIMESTAMP_INPUT_FORMAT` | `TIMESTAMP_LTZ_OUTPUT_FORMAT` | `TIMESTAMP_NTZ_OUTPUT_FORMAT` | `TIMESTAMP_OUTPUT_FORMAT` | `TIMESTAMP_TYPE_MAPPING` | `TIMESTAMP_TZ_OUTPUT_FORMAT` | `TIMEZONE` | `TRACE_LEVEL` | `TRANSACTION_ABORT_ON_ERROR` | `TRANSACTION_DEFAULT_ISOLATION_LEVEL` | `TWO_DIGIT_CENTURY_START` | `UNSUPPORTED_DDL_ACTION` | `USE_CACHED_RESULT` | `USE_WORKSPACES_FOR_SQL` | `USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE` | `USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS` | `USER_TASK_TIMEOUT_MS` | `WEEK_OF_YEAR_POLICY` | `WEEK_START`; `DATABASE`: `CATALOG` | `DATA_RETENTION_TIME_IN_DAYS` | `DEFAULT_DDL_COLLATION` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU` | `ENABLE_CONSOLE_OUTPUT` | `EXTERNAL_VOLUME` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MAX_DATA_EXTENSION_TIME_IN_DAYS` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `REPLACE_INVALID_CHARACTERS` | `STORAGE_SERIALIZATION_POLICY` | `SUSPEND_TASK_AFTER_NUM_FAILURES` | `TASK_AUTO_RETRY_ATTEMPTS` | `TRACE_LEVEL` | `USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE` | `USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS` | `USER_TASK_TIMEOUT_MS`; `SCHEMA`: `CATALOG` | `DATA_RETENTION_TIME_IN_DAYS` | `DEFAULT_DDL_COLLATION` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU` | `DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU` | `ENABLE_CONSOLE_OUTPUT` | `EXTERNAL_VOLUME` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MAX_DATA_EXTENSION_TIME_IN_DAYS` | `PIPE_EXECUTION_PAUSED` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `REPLACE_INVALID_CHARACTERS` | `STORAGE_SERIALIZATION_POLICY` | `SUSPEND_TASK_AFTER_NUM_FAILURES` | `TASK_AUTO_RETRY_ATTEMPTS` | `TRACE_LEVEL` | `USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE` | `USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS` | `USER_TASK_TIMEOUT_MS`; `WAREHOUSE`: `MAX_CONCURRENCY_LEVEL` | `STATEMENT_QUEUED_TIMEOUT_IN_SECONDS` | `STATEMENT_TIMEOUT_IN_SECONDS`; `USER`: `ABORT_DETACHED_QUERY` | `ACTIVE_PYTHON_PROFILER` | `AUTOCOMMIT` | `BINARY_INPUT_FORMAT` | `BINARY_OUTPUT_FORMAT` | `CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS` | `CLIENT_MEMORY_LIMIT` | `CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX` | `CLIENT_METADATA_USE_SESSION_DATABASE` | `CLIENT_PREFETCH_THREADS` | `CLIENT_RESULT_CHUNK_SIZE` | `CLIENT_RESULT_COLUMN_CASE_INSENSITIVE` | `CLIENT_SESSION_KEEP_ALIVE` | `CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY` | `CLIENT_TIMESTAMP_TYPE_MAPPING` | `CSV_TIMESTAMP_FORMAT` | `DATE_INPUT_FORMAT` | `DATE_OUTPUT_FORMAT` | `ENABLE_GET_DDL_USE_DATA_TYPE_ALIAS` | `ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION` | `ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR` | `ERROR_ON_NONDETERMINISTIC_MERGE` | `ERROR_ON_NONDETERMINISTIC_UPDATE` | `GEOGRAPHY_OUTPUT_FORMAT` | `GEOMETRY_OUTPUT_FORMAT` | `HYBRID_TABLE_LOCK_TIMEOUT` | `JDBC_TREAT_DECIMAL_AS_INT` | `JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC` | `JDBC_USE_SESSION_TIMEZONE` | `JS_TREAT_INTEGER_AS_BIGINT` | `JSON_INDENT` | `LOCK_TIMEOUT` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MULTI_STATEMENT_COUNT` | `NETWORK_POLICY` | `NOORDER_SEQUENCE_AS_DEFAULT` | `ODBC_TREAT_DECIMAL_AS_INT` | `PREVENT_UNLOAD_TO_INTERNAL_STAGES` | `PYTHON_PROFILER_MODULES` | `PYTHON_PROFILER_TARGET_STAGE` | `QUERY_TAG` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `ROWS_PER_RESULTSET` | `S3_STAGE_VPCE_DNS_NAME` | `SEARCH_PATH` | `SIMULATED_DATA_SHARING_CONSUMER` | `STATEMENT_QUEUED_TIMEOUT_IN_SECONDS` | `STATEMENT_TIMEOUT_IN_SECONDS` | `STRICT_JSON_OUTPUT` | `TIME_INPUT_FORMAT` | `TIME_OUTPUT_FORMAT` | `TIMESTAMP_DAY_IS_ALWAYS_24H` | `TIMESTAMP_INPUT_FORMAT` | `TIMESTAMP_LTZ_OUTPUT_FORMAT` | `TIMESTAMP_NTZ_OUTPUT_FORMAT` | `TIMESTAMP_OUTPUT_FORMAT` | `TIMESTAMP_TYPE_MAPPING` | `TIMESTAMP_TZ_OUTPUT_FORMAT` | `TIMEZONE` | `TRACE_LEVEL` | `TRANSACTION_ABORT_ON_ERROR` | `TRANSACTION_DEFAULT_ISOLATION_LEVEL` | `TWO_DIGIT_CENTURY_START` | `UNSUPPORTED_DDL_ACTION` | `USE_CACHED_RESULT` | `WEEK_OF_YEAR_POLICY` | `WEEK_START`; `TASK`: `ABORT_DETACHED_QUERY` | `AUTOCOMMIT` | `BINARY_INPUT_FORMAT` | `BINARY_OUTPUT_FORMAT` | `CLIENT_MEMORY_LIMIT` | `CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX` | `CLIENT_PREFETCH_THREADS` | `CLIENT_RESULT_CHUNK_SIZE` | `CLIENT_RESULT_COLUMN_CASE_INSENSITIVE` | `CLIENT_SESSION_KEEP_ALIVE` | `CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY` | `CLIENT_TIMESTAMP_TYPE_MAPPING` | `DATE_INPUT_FORMAT` | `DATE_OUTPUT_FORMAT` | `ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION` | `ERROR_ON_NONDETERMINISTIC_MERGE` | `ERROR_ON_NONDETERMINISTIC_UPDATE` | `GEOGRAPHY_OUTPUT_FORMAT` | `GEOMETRY_OUTPUT_FORMAT` | `JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC` | `JDBC_USE_SESSION_TIMEZONE` | `JSON_INDENT` | `LOCK_TIMEOUT` | `LOG_EVENT_LEVEL` | `LOG_LEVEL` | `MULTI_STATEMENT_COUNT` | `NOORDER_SEQUENCE_AS_DEFAULT` | `ODBC_TREAT_DECIMAL_AS_INT` | `QUERY_TAG` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `ROWS_PER_RESULTSET` | `S3_STAGE_VPCE_DNS_NAME` | `SERVERLESS_TASK_MAX_STATEMENT_SIZE` | `SERVERLESS_TASK_MIN_STATEMENT_SIZE` | `STATEMENT_QUEUED_TIMEOUT_IN_SECONDS` | `STATEMENT_TIMEOUT_IN_SECONDS` | `STRICT_JSON_OUTPUT` | `SUSPEND_TASK_AFTER_NUM_FAILURES` | `TASK_AUTO_RETRY_ATTEMPTS` | `TIME_INPUT_FORMAT` | `TIME_OUTPUT_FORMAT` | `TIMESTAMP_DAY_IS_ALWAYS_24H` | `TIMESTAMP_INPUT_FORMAT` | `TIMESTAMP_LTZ_OUTPUT_FORMAT` | `TIMESTAMP_NTZ_OUTPUT_FORMAT` | `TIMESTAMP_OUTPUT_FORMAT` | `TIMESTAMP_TYPE_MAPPING` | `TIMESTAMP_TZ_OUTPUT_FORMAT` | `TIMEZONE` | `TRACE_LEVEL` | `TRANSACTION_ABORT_ON_ERROR` | `TRANSACTION_DEFAULT_ISOLATION_LEVEL` | `TWO_DIGIT_CENTURY_START` | `UNSUPPORTED_DDL_ACTION` | `USE_CACHED_RESULT` | `USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE` | `USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS` | `USER_TASK_TIMEOUT_MS` | `WEEK_OF_YEAR_POLICY` | `WEEK_START`; `SERVICE`: `SERVICE_CALLER_TOKEN_VALIDITY_SECS`; `HYBRID TABLE`: `DATA_RETENTION_TIME_IN_DAYS` | `MAX_DATA_EXTENSION_TIME_IN_DAYS`; `ICEBERG TABLE`: `ALLOW_ROW_TIMESTAMP` | `CATALOG` | `CATALOG_SYNC` | `DATA_METRIC_SCHEDULE` | `DATA_RETENTION_TIME_IN_DAYS` | `DEFAULT_DDL_COLLATION` | `ENABLE_DATA_COMPACTION` | `ENABLE_ICEBERG_MERGE_ON_READ` | `EXTERNAL_VOLUME` | `ICEBERG_MERGE_ON_READ_BEHAVIOR` | `LOG_EVENT_LEVEL` | `MAX_DATA_EXTENSION_TIME_IN_DAYS` | `OPTIMIZE_DATA_LAYOUT` | `QUOTED_IDENTIFIERS_IGNORE_CASE` | `REPLACE_INVALID_CHARACTERS` | `STORAGE_SERIALIZATION_POLICY` | `TARGET_FILE_SIZE`. Any other parameter, and any parameter on any other object type, is sent to Snowflake as is: with `value_type`, the value is rendered by it, and without it, the value is sent as written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#key ObjectParameter#key}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.value"></a>

```python
value: str
```

- *Type:* str

Value of object parameter, as a string. Constraints are the same as those for the parameters in Snowflake documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#value ObjectParameter#value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#id ObjectParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `object_identifier`<sup>Optional</sup> <a name="object_identifier" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.objectIdentifier"></a>

```python
object_identifier: IResolvable | typing.List[ObjectParameterObjectIdentifier]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>]

object_identifier block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#object_identifier ObjectParameter#object_identifier}

---

##### `object_type`<sup>Optional</sup> <a name="object_type" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

Type of object to which the parameter applies.

Valid values are those in [object types](https://docs.snowflake.com/en/sql-reference/parameters.html#object-types). If no value is provided, then the resource will default to setting the object parameter at account level. The provider supports the parameters of the following object types: `DATABASE` | `SCHEMA` | `WAREHOUSE` | `USER` | `TASK` | `SERVICE` | `HYBRID TABLE` | `ICEBERG TABLE` (see `key`). Other object types are sent as is, with the value rendered by `value_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#object_type ObjectParameter#object_type}

---

##### `on_account`<sup>Optional</sup> <a name="on_account" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.onAccount"></a>

```python
on_account: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

(Default: `false`) If true, the object parameter will be set on the account level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#on_account ObjectParameter#on_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.timeouts"></a>

```python
timeouts: ObjectParameterTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts">ObjectParameterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#timeouts ObjectParameter#timeouts}

---

##### `value_type`<sup>Optional</sup> <a name="value_type" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterConfig.property.valueType"></a>

```python
value_type: str
```

- *Type:* str

Type of `value`, used only for parameters that the provider does not support yet (forward compatibility).

Valid values are (case-insensitive): `STRING` | `IDENTIFIER` | `INTEGER` | `FLOAT` | `BOOLEAN`. `value` is rendered the same way as for the parameters that the provider supports: `STRING` (also use it for enum parameters) is sent as a single-quoted string, `IDENTIFIER` as a quoted identifier (it can be fully qualified, e.g. `DB.SCHEMA.NAME`), and the others as a number or a boolean. The field is required for a parameter that the provider does not support, and it is ignored for the supported parameters (they are listed in the `key` field description, per object type), so it can stay in the configuration when a later provider version starts to support the parameter. Changes of this field are ignored for the supported parameters, but setting it for a supported parameter logs a warning. The field works only with the OBJECT_PARAMETER_PARSE_ON_SET experiment (enabled by default). The transition does not need configuration changes only if `value_type` matches the type of the parameter in Snowflake. Some types are easy to confuse: for example, an identifier (like a network policy name) is also accepted by Snowflake as a `STRING`, but once the provider supports the parameter, it is sent as a quoted, case-sensitive identifier, which may show a plan difference or fail. Check the parameter type in the [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/parameters) before choosing `value_type`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#value_type ObjectParameter#value_type}

---

### ObjectParameterObjectIdentifier <a name="ObjectParameterObjectIdentifier" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.Initializer"></a>

```python
from cdktn_provider_snowflake import object_parameter

objectParameter.ObjectParameterObjectIdentifier(
  name: str,
  database: str = None,
  schema: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.name">name</a></code> | <code>str</code> | Name of the object to set the parameter for. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.database">database</a></code> | <code>str</code> | Name of the database that the object was created in. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.schema">schema</a></code> | <code>str</code> | Name of the schema that the object was created in. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the object to set the parameter for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#name ObjectParameter#name}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.database"></a>

```python
database: str
```

- *Type:* str

Name of the database that the object was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#database ObjectParameter#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier.property.schema"></a>

```python
schema: str
```

- *Type:* str

Name of the schema that the object was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#schema ObjectParameter#schema}

---

### ObjectParameterTimeouts <a name="ObjectParameterTimeouts" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import object_parameter

objectParameter.ObjectParameterTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#create ObjectParameter#create}. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#delete ObjectParameter#delete}. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#read ObjectParameter#read}. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#update ObjectParameter#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#create ObjectParameter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#delete ObjectParameter#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#read ObjectParameter#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.24.0/docs/resources/object_parameter#update ObjectParameter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObjectParameterObjectIdentifierList <a name="ObjectParameterObjectIdentifierList" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer"></a>

```python
from cdktn_provider_snowflake import object_parameter

objectParameter.ObjectParameterObjectIdentifierList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ObjectParameterObjectIdentifierOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ObjectParameterObjectIdentifier]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>]

---


### ObjectParameterObjectIdentifierOutputReference <a name="ObjectParameterObjectIdentifierOutputReference" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import object_parameter

objectParameter.ObjectParameterObjectIdentifierOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resetSchema">reset_schema</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_database` <a name="reset_database" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.resetSchema"></a>

```python
def reset_schema() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifierOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ObjectParameterObjectIdentifier
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterObjectIdentifier">ObjectParameterObjectIdentifier</a>

---


### ObjectParameterTimeoutsOutputReference <a name="ObjectParameterTimeoutsOutputReference" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import object_parameter

objectParameter.ObjectParameterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts">ObjectParameterTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ObjectParameterTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.objectParameter.ObjectParameterTimeouts">ObjectParameterTimeouts</a>

---



