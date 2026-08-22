# `icebergTable` Submodule <a name="`icebergTable` Submodule" id="@cdktn/provider-snowflake.icebergTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IcebergTable <a name="IcebergTable" id="@cdktn/provider-snowflake.icebergTable.IcebergTable"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table snowflake_iceberg_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTable(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  column: IResolvable | typing.List[IcebergTableColumn],
  database: str,
  name: str,
  schema: str,
  aggregation_policy: IcebergTableAggregationPolicy = None,
  base_location: str = None,
  catalog: str = None,
  catalog_sync: str = None,
  change_tracking: str = None,
  check_constraint: IResolvable | typing.List[IcebergTableCheckConstraint] = None,
  cluster_by: typing.List[str] = None,
  comment: str = None,
  data_retention_time_in_days: typing.Union[int, float] = None,
  enable_data_compaction: bool | IResolvable = None,
  enable_iceberg_merge_on_read: bool | IResolvable = None,
  error_logging: str = None,
  external_volume: str = None,
  foreign_key_constraint: IResolvable | typing.List[IcebergTableForeignKeyConstraint] = None,
  iceberg_version: typing.Union[int, float] = None,
  id: str = None,
  max_data_extension_time_in_days: typing.Union[int, float] = None,
  partition_by: IResolvable | typing.List[IcebergTablePartitionBy] = None,
  path_layout: str = None,
  primary_key_constraint: IcebergTablePrimaryKeyConstraint = None,
  row_access_policy: IcebergTableRowAccessPolicy = None,
  storage_serialization_policy: str = None,
  target_file_size: str = None,
  timeouts: IcebergTableTimeouts = None,
  unique_constraint: IResolvable | typing.List[IcebergTableUniqueConstraint] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.column">column</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn">IcebergTableColumn</a>]</code> | column block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the Iceberg table; |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.aggregationPolicy">aggregation_policy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy">IcebergTableAggregationPolicy</a></code> | aggregation_policy block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.baseLocation">base_location</a></code> | <code>str</code> | The path to a directory where Snowflake can write data and metadata files for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.catalog">catalog</a></code> | <code>str</code> | Specifies the identifier for the catalog integration to use for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.catalogSync">catalog_sync</a></code> | <code>str</code> | Specifies the name of the catalog integration that Snowflake uses to automatically synchronize the Iceberg table with an external catalog. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.changeTracking">change_tracking</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to enable change tracking on the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.checkConstraint">check_constraint</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint">IcebergTableCheckConstraint</a>]</code> | check_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.clusterBy">cluster_by</a></code> | <code>typing.List[str]</code> | A list of one or more table columns/expressions to be used as clustering key(s) for the table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Specifies the retention period for the Iceberg table so that Time Travel actions can be performed on historical data. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.enableDataCompaction">enable_data_compaction</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether automatic background data compaction is enabled for the Iceberg table. For more information, check [ENABLE_DATA_COMPACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-data-compaction). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.enableIcebergMergeOnRead">enable_iceberg_merge_on_read</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether merge-on-read is enabled for the Iceberg table. For more information, check [ENABLE_ICEBERG_MERGE_ON_READ docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-iceberg-merge-on-read). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.errorLogging">error_logging</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether error logging is enabled for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.externalVolume">external_volume</a></code> | <code>str</code> | Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.foreignKeyConstraint">foreign_key_constraint</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint">IcebergTableForeignKeyConstraint</a>]</code> | foreign_key_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.icebergVersion">iceberg_version</a></code> | <code>typing.Union[int, float]</code> | Specifies the Iceberg table format version. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#id IcebergTable#id}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.maxDataExtensionTimeInDays">max_data_extension_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum number of days for which Snowflake can extend the data retention period for the Iceberg table to prevent streams on the table from becoming stale. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.partitionBy">partition_by</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy">IcebergTablePartitionBy</a>]</code> | partition_by block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.pathLayout">path_layout</a></code> | <code>str</code> | Specifies the storage layout for the Iceberg table's Parquet files. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.primaryKeyConstraint">primary_key_constraint</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint">IcebergTablePrimaryKeyConstraint</a></code> | primary_key_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.rowAccessPolicy">row_access_policy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy">IcebergTableRowAccessPolicy</a></code> | row_access_policy block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.storageSerializationPolicy">storage_serialization_policy</a></code> | <code>str</code> | Specifies the storage serialization policy for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.targetFileSize">target_file_size</a></code> | <code>str</code> | Specifies the target file size (in bytes) used when writing the Iceberg table's Parquet files. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts">IcebergTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.uniqueConstraint">unique_constraint</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint">IcebergTableUniqueConstraint</a>]</code> | unique_constraint block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.column"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn">IcebergTableColumn</a>]

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#column IcebergTable#column}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#database IcebergTable#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the Iceberg table;

must be unique for the schema in which the Iceberg table is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#name IcebergTable#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#schema IcebergTable#schema}

---

##### `aggregation_policy`<sup>Optional</sup> <a name="aggregation_policy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.aggregationPolicy"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy">IcebergTableAggregationPolicy</a>

aggregation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#aggregation_policy IcebergTable#aggregation_policy}

---

##### `base_location`<sup>Optional</sup> <a name="base_location" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.baseLocation"></a>

- *Type:* str

The path to a directory where Snowflake can write data and metadata files for the Iceberg table.

Specify a relative path from the table's `EXTERNAL_VOLUME` location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#base_location IcebergTable#base_location}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.catalog"></a>

- *Type:* str

Specifies the identifier for the catalog integration to use for the Iceberg table.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#catalog IcebergTable#catalog}

---

##### `catalog_sync`<sup>Optional</sup> <a name="catalog_sync" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.catalogSync"></a>

- *Type:* str

Specifies the name of the catalog integration that Snowflake uses to automatically synchronize the Iceberg table with an external catalog.

For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#catalog_sync IcebergTable#catalog_sync}

---

##### `change_tracking`<sup>Optional</sup> <a name="change_tracking" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.changeTracking"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to enable change tracking on the Iceberg table.

Cannot be changed after creation. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#change_tracking IcebergTable#change_tracking}

---

##### `check_constraint`<sup>Optional</sup> <a name="check_constraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.checkConstraint"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint">IcebergTableCheckConstraint</a>]

check_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#check_constraint IcebergTable#check_constraint}

---

##### `cluster_by`<sup>Optional</sup> <a name="cluster_by" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.clusterBy"></a>

- *Type:* typing.List[str]

A list of one or more table columns/expressions to be used as clustering key(s) for the table.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#cluster_by IcebergTable#cluster_by}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#comment IcebergTable#comment}

---

##### `data_retention_time_in_days`<sup>Optional</sup> <a name="data_retention_time_in_days" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.dataRetentionTimeInDays"></a>

- *Type:* typing.Union[int, float]

Specifies the retention period for the Iceberg table so that Time Travel actions can be performed on historical data.

For more information, check [DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#data_retention_time_in_days IcebergTable#data_retention_time_in_days}

---

##### `enable_data_compaction`<sup>Optional</sup> <a name="enable_data_compaction" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.enableDataCompaction"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether automatic background data compaction is enabled for the Iceberg table. For more information, check [ENABLE_DATA_COMPACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-data-compaction).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#enable_data_compaction IcebergTable#enable_data_compaction}

---

##### `enable_iceberg_merge_on_read`<sup>Optional</sup> <a name="enable_iceberg_merge_on_read" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.enableIcebergMergeOnRead"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether merge-on-read is enabled for the Iceberg table. For more information, check [ENABLE_ICEBERG_MERGE_ON_READ docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-iceberg-merge-on-read).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#enable_iceberg_merge_on_read IcebergTable#enable_iceberg_merge_on_read}

---

##### `error_logging`<sup>Optional</sup> <a name="error_logging" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.errorLogging"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether error logging is enabled for the Iceberg table.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#error_logging IcebergTable#error_logging}

---

##### `external_volume`<sup>Optional</sup> <a name="external_volume" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.externalVolume"></a>

- *Type:* str

Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#external_volume IcebergTable#external_volume}

---

##### `foreign_key_constraint`<sup>Optional</sup> <a name="foreign_key_constraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.foreignKeyConstraint"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint">IcebergTableForeignKeyConstraint</a>]

foreign_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#foreign_key_constraint IcebergTable#foreign_key_constraint}

---

##### `iceberg_version`<sup>Optional</sup> <a name="iceberg_version" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.icebergVersion"></a>

- *Type:* typing.Union[int, float]

Specifies the Iceberg table format version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#iceberg_version IcebergTable#iceberg_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#id IcebergTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_data_extension_time_in_days`<sup>Optional</sup> <a name="max_data_extension_time_in_days" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.maxDataExtensionTimeInDays"></a>

- *Type:* typing.Union[int, float]

Specifies the maximum number of days for which Snowflake can extend the data retention period for the Iceberg table to prevent streams on the table from becoming stale.

For more information, check [MAX_DATA_EXTENSION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#max_data_extension_time_in_days IcebergTable#max_data_extension_time_in_days}

---

##### `partition_by`<sup>Optional</sup> <a name="partition_by" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.partitionBy"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy">IcebergTablePartitionBy</a>]

partition_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#partition_by IcebergTable#partition_by}

---

##### `path_layout`<sup>Optional</sup> <a name="path_layout" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.pathLayout"></a>

- *Type:* str

Specifies the storage layout for the Iceberg table's Parquet files.

Valid values are: [FLAT HIERARCHICAL]. Cannot be changed after creation. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#path_layout IcebergTable#path_layout}

---

##### `primary_key_constraint`<sup>Optional</sup> <a name="primary_key_constraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.primaryKeyConstraint"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint">IcebergTablePrimaryKeyConstraint</a>

primary_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#primary_key_constraint IcebergTable#primary_key_constraint}

---

##### `row_access_policy`<sup>Optional</sup> <a name="row_access_policy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.rowAccessPolicy"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy">IcebergTableRowAccessPolicy</a>

row_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#row_access_policy IcebergTable#row_access_policy}

---

##### `storage_serialization_policy`<sup>Optional</sup> <a name="storage_serialization_policy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.storageSerializationPolicy"></a>

- *Type:* str

Specifies the storage serialization policy for the Iceberg table.

Valid values are: [COMPATIBLE OPTIMIZED]. Cannot be changed after creation. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#storage_serialization_policy IcebergTable#storage_serialization_policy}

---

##### `target_file_size`<sup>Optional</sup> <a name="target_file_size" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.targetFileSize"></a>

- *Type:* str

Specifies the target file size (in bytes) used when writing the Iceberg table's Parquet files.

Valid values are: [AUTO 16MB 32MB 64MB 128MB]. For more information, check [TARGET_FILE_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#target-file-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#target_file_size IcebergTable#target_file_size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts">IcebergTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#timeouts IcebergTable#timeouts}

---

##### `unique_constraint`<sup>Optional</sup> <a name="unique_constraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.Initializer.parameter.uniqueConstraint"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint">IcebergTableUniqueConstraint</a>]

unique_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#unique_constraint IcebergTable#unique_constraint}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putAggregationPolicy">put_aggregation_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putCheckConstraint">put_check_constraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putColumn">put_column</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putForeignKeyConstraint">put_foreign_key_constraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putPartitionBy">put_partition_by</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putPrimaryKeyConstraint">put_primary_key_constraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putRowAccessPolicy">put_row_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.putUniqueConstraint">put_unique_constraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetAggregationPolicy">reset_aggregation_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetBaseLocation">reset_base_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetCatalogSync">reset_catalog_sync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetChangeTracking">reset_change_tracking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetCheckConstraint">reset_check_constraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetClusterBy">reset_cluster_by</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetDataRetentionTimeInDays">reset_data_retention_time_in_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetEnableDataCompaction">reset_enable_data_compaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetEnableIcebergMergeOnRead">reset_enable_iceberg_merge_on_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetErrorLogging">reset_error_logging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetExternalVolume">reset_external_volume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetForeignKeyConstraint">reset_foreign_key_constraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetIcebergVersion">reset_iceberg_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetMaxDataExtensionTimeInDays">reset_max_data_extension_time_in_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetPartitionBy">reset_partition_by</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetPathLayout">reset_path_layout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetPrimaryKeyConstraint">reset_primary_key_constraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetRowAccessPolicy">reset_row_access_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetStorageSerializationPolicy">reset_storage_serialization_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetTargetFileSize">reset_target_file_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.resetUniqueConstraint">reset_unique_constraint</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aggregation_policy` <a name="put_aggregation_policy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putAggregationPolicy"></a>

```python
def put_aggregation_policy(
  policy_name: str,
  entity_key: typing.List[str] = None
) -> None
```

###### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putAggregationPolicy.parameter.policyName"></a>

- *Type:* str

Aggregation policy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#policy_name IcebergTable#policy_name}

---

###### `entity_key`<sup>Optional</sup> <a name="entity_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putAggregationPolicy.parameter.entityKey"></a>

- *Type:* typing.List[str]

Defines which columns uniquely identify an entity within the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#entity_key IcebergTable#entity_key}

---

##### `put_check_constraint` <a name="put_check_constraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putCheckConstraint"></a>

```python
def put_check_constraint(
  value: IResolvable | typing.List[IcebergTableCheckConstraint]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putCheckConstraint.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint">IcebergTableCheckConstraint</a>]

---

##### `put_column` <a name="put_column" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putColumn"></a>

```python
def put_column(
  value: IResolvable | typing.List[IcebergTableColumn]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putColumn.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn">IcebergTableColumn</a>]

---

##### `put_foreign_key_constraint` <a name="put_foreign_key_constraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putForeignKeyConstraint"></a>

```python
def put_foreign_key_constraint(
  value: IResolvable | typing.List[IcebergTableForeignKeyConstraint]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putForeignKeyConstraint.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint">IcebergTableForeignKeyConstraint</a>]

---

##### `put_partition_by` <a name="put_partition_by" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putPartitionBy"></a>

```python
def put_partition_by(
  value: IResolvable | typing.List[IcebergTablePartitionBy]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putPartitionBy.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy">IcebergTablePartitionBy</a>]

---

##### `put_primary_key_constraint` <a name="put_primary_key_constraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putPrimaryKeyConstraint"></a>

```python
def put_primary_key_constraint(
  column: typing.List[str],
  comment: str = None,
  deferrable: str = None,
  enable: str = None,
  enforced: str = None,
  initially_deferred: str = None,
  name: str = None,
  rely: str = None,
  validate: str = None
) -> None
```

###### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putPrimaryKeyConstraint.parameter.column"></a>

- *Type:* typing.List[str]

The column(s) the constraint applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#column IcebergTable#column}

---

###### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putPrimaryKeyConstraint.parameter.comment"></a>

- *Type:* str

Constraint comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#comment IcebergTable#comment}

---

###### `deferrable`<sup>Optional</sup> <a name="deferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putPrimaryKeyConstraint.parameter.deferrable"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is deferrable (`true`) or not deferrable (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#deferrable IcebergTable#deferrable}

---

###### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putPrimaryKeyConstraint.parameter.enable"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enabled (`true`) or disabled (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#enable IcebergTable#enable}

---

###### `enforced`<sup>Optional</sup> <a name="enforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putPrimaryKeyConstraint.parameter.enforced"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enforced (`true`) or not enforced (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#enforced IcebergTable#enforced}

---

###### `initially_deferred`<sup>Optional</sup> <a name="initially_deferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putPrimaryKeyConstraint.parameter.initiallyDeferred"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is initially deferred (`true`) or initially immediate (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#initially_deferred IcebergTable#initially_deferred}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putPrimaryKeyConstraint.parameter.name"></a>

- *Type:* str

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#name IcebergTable#name}

---

###### `rely`<sup>Optional</sup> <a name="rely" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putPrimaryKeyConstraint.parameter.rely"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether a constraint in NOVALIDATE mode is taken into account (`true`) or not (`false`) during query rewrite.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#rely IcebergTable#rely}

---

###### `validate`<sup>Optional</sup> <a name="validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putPrimaryKeyConstraint.parameter.validate"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to validate existing data on the table when the constraint is created (`true`) or skip validation (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#validate IcebergTable#validate}

---

##### `put_row_access_policy` <a name="put_row_access_policy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putRowAccessPolicy"></a>

```python
def put_row_access_policy(
  on: typing.List[str],
  policy_name: str
) -> None
```

###### `on`<sup>Required</sup> <a name="on" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putRowAccessPolicy.parameter.on"></a>

- *Type:* typing.List[str]

Defines which columns are affected by the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#on IcebergTable#on}

---

###### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putRowAccessPolicy.parameter.policyName"></a>

- *Type:* str

Row access policy name. For more information about this resource, see [docs](./row_access_policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#policy_name IcebergTable#policy_name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#create IcebergTable#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#delete IcebergTable#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#read IcebergTable#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#update IcebergTable#update}.

---

##### `put_unique_constraint` <a name="put_unique_constraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putUniqueConstraint"></a>

```python
def put_unique_constraint(
  value: IResolvable | typing.List[IcebergTableUniqueConstraint]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.putUniqueConstraint.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint">IcebergTableUniqueConstraint</a>]

---

##### `reset_aggregation_policy` <a name="reset_aggregation_policy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetAggregationPolicy"></a>

```python
def reset_aggregation_policy() -> None
```

##### `reset_base_location` <a name="reset_base_location" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetBaseLocation"></a>

```python
def reset_base_location() -> None
```

##### `reset_catalog` <a name="reset_catalog" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_catalog_sync` <a name="reset_catalog_sync" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetCatalogSync"></a>

```python
def reset_catalog_sync() -> None
```

##### `reset_change_tracking` <a name="reset_change_tracking" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetChangeTracking"></a>

```python
def reset_change_tracking() -> None
```

##### `reset_check_constraint` <a name="reset_check_constraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetCheckConstraint"></a>

```python
def reset_check_constraint() -> None
```

##### `reset_cluster_by` <a name="reset_cluster_by" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetClusterBy"></a>

```python
def reset_cluster_by() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_data_retention_time_in_days` <a name="reset_data_retention_time_in_days" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetDataRetentionTimeInDays"></a>

```python
def reset_data_retention_time_in_days() -> None
```

##### `reset_enable_data_compaction` <a name="reset_enable_data_compaction" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetEnableDataCompaction"></a>

```python
def reset_enable_data_compaction() -> None
```

##### `reset_enable_iceberg_merge_on_read` <a name="reset_enable_iceberg_merge_on_read" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetEnableIcebergMergeOnRead"></a>

```python
def reset_enable_iceberg_merge_on_read() -> None
```

##### `reset_error_logging` <a name="reset_error_logging" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetErrorLogging"></a>

```python
def reset_error_logging() -> None
```

##### `reset_external_volume` <a name="reset_external_volume" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetExternalVolume"></a>

```python
def reset_external_volume() -> None
```

##### `reset_foreign_key_constraint` <a name="reset_foreign_key_constraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetForeignKeyConstraint"></a>

```python
def reset_foreign_key_constraint() -> None
```

##### `reset_iceberg_version` <a name="reset_iceberg_version" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetIcebergVersion"></a>

```python
def reset_iceberg_version() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_data_extension_time_in_days` <a name="reset_max_data_extension_time_in_days" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetMaxDataExtensionTimeInDays"></a>

```python
def reset_max_data_extension_time_in_days() -> None
```

##### `reset_partition_by` <a name="reset_partition_by" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetPartitionBy"></a>

```python
def reset_partition_by() -> None
```

##### `reset_path_layout` <a name="reset_path_layout" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetPathLayout"></a>

```python
def reset_path_layout() -> None
```

##### `reset_primary_key_constraint` <a name="reset_primary_key_constraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetPrimaryKeyConstraint"></a>

```python
def reset_primary_key_constraint() -> None
```

##### `reset_row_access_policy` <a name="reset_row_access_policy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetRowAccessPolicy"></a>

```python
def reset_row_access_policy() -> None
```

##### `reset_storage_serialization_policy` <a name="reset_storage_serialization_policy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetStorageSerializationPolicy"></a>

```python
def reset_storage_serialization_policy() -> None
```

##### `reset_target_file_size` <a name="reset_target_file_size" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetTargetFileSize"></a>

```python
def reset_target_file_size() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_unique_constraint` <a name="reset_unique_constraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.resetUniqueConstraint"></a>

```python
def reset_unique_constraint() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IcebergTable resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.isConstruct"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IcebergTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IcebergTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IcebergTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IcebergTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.aggregationPolicy">aggregation_policy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference">IcebergTableAggregationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.checkConstraint">check_constraint</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList">IcebergTableCheckConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.column">column</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList">IcebergTableColumnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList">IcebergTableDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.foreignKeyConstraint">foreign_key_constraint</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList">IcebergTableForeignKeyConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList">IcebergTableParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.partitionBy">partition_by</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList">IcebergTablePartitionByList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.primaryKeyConstraint">primary_key_constraint</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference">IcebergTablePrimaryKeyConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.rowAccessPolicy">row_access_policy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference">IcebergTableRowAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList">IcebergTableShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference">IcebergTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.uniqueConstraint">unique_constraint</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList">IcebergTableUniqueConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.aggregationPolicyInput">aggregation_policy_input</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy">IcebergTableAggregationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.baseLocationInput">base_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalogSyncInput">catalog_sync_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.changeTrackingInput">change_tracking_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.checkConstraintInput">check_constraint_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint">IcebergTableCheckConstraint</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.clusterByInput">cluster_by_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.columnInput">column_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn">IcebergTableColumn</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.dataRetentionTimeInDaysInput">data_retention_time_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableDataCompactionInput">enable_data_compaction_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableIcebergMergeOnReadInput">enable_iceberg_merge_on_read_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.errorLoggingInput">error_logging_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.externalVolumeInput">external_volume_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.foreignKeyConstraintInput">foreign_key_constraint_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint">IcebergTableForeignKeyConstraint</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.icebergVersionInput">iceberg_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.maxDataExtensionTimeInDaysInput">max_data_extension_time_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.partitionByInput">partition_by_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy">IcebergTablePartitionBy</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.pathLayoutInput">path_layout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.primaryKeyConstraintInput">primary_key_constraint_input</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint">IcebergTablePrimaryKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.rowAccessPolicyInput">row_access_policy_input</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy">IcebergTableRowAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.storageSerializationPolicyInput">storage_serialization_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.targetFileSizeInput">target_file_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts">IcebergTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.uniqueConstraintInput">unique_constraint_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint">IcebergTableUniqueConstraint</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.baseLocation">base_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalogSync">catalog_sync</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.changeTracking">change_tracking</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.clusterBy">cluster_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableDataCompaction">enable_data_compaction</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableIcebergMergeOnRead">enable_iceberg_merge_on_read</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.errorLogging">error_logging</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.externalVolume">external_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.icebergVersion">iceberg_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.maxDataExtensionTimeInDays">max_data_extension_time_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.pathLayout">path_layout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.storageSerializationPolicy">storage_serialization_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.targetFileSize">target_file_size</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `aggregation_policy`<sup>Required</sup> <a name="aggregation_policy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.aggregationPolicy"></a>

```python
aggregation_policy: IcebergTableAggregationPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference">IcebergTableAggregationPolicyOutputReference</a>

---

##### `check_constraint`<sup>Required</sup> <a name="check_constraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.checkConstraint"></a>

```python
check_constraint: IcebergTableCheckConstraintList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList">IcebergTableCheckConstraintList</a>

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.column"></a>

```python
column: IcebergTableColumnList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList">IcebergTableColumnList</a>

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.describeOutput"></a>

```python
describe_output: IcebergTableDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList">IcebergTableDescribeOutputList</a>

---

##### `foreign_key_constraint`<sup>Required</sup> <a name="foreign_key_constraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.foreignKeyConstraint"></a>

```python
foreign_key_constraint: IcebergTableForeignKeyConstraintList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList">IcebergTableForeignKeyConstraintList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.parameters"></a>

```python
parameters: IcebergTableParametersList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList">IcebergTableParametersList</a>

---

##### `partition_by`<sup>Required</sup> <a name="partition_by" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.partitionBy"></a>

```python
partition_by: IcebergTablePartitionByList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList">IcebergTablePartitionByList</a>

---

##### `primary_key_constraint`<sup>Required</sup> <a name="primary_key_constraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.primaryKeyConstraint"></a>

```python
primary_key_constraint: IcebergTablePrimaryKeyConstraintOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference">IcebergTablePrimaryKeyConstraintOutputReference</a>

---

##### `row_access_policy`<sup>Required</sup> <a name="row_access_policy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.rowAccessPolicy"></a>

```python
row_access_policy: IcebergTableRowAccessPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference">IcebergTableRowAccessPolicyOutputReference</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.showOutput"></a>

```python
show_output: IcebergTableShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList">IcebergTableShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.timeouts"></a>

```python
timeouts: IcebergTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference">IcebergTableTimeoutsOutputReference</a>

---

##### `unique_constraint`<sup>Required</sup> <a name="unique_constraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.uniqueConstraint"></a>

```python
unique_constraint: IcebergTableUniqueConstraintList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList">IcebergTableUniqueConstraintList</a>

---

##### `aggregation_policy_input`<sup>Optional</sup> <a name="aggregation_policy_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.aggregationPolicyInput"></a>

```python
aggregation_policy_input: IcebergTableAggregationPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy">IcebergTableAggregationPolicy</a>

---

##### `base_location_input`<sup>Optional</sup> <a name="base_location_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.baseLocationInput"></a>

```python
base_location_input: str
```

- *Type:* str

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `catalog_sync_input`<sup>Optional</sup> <a name="catalog_sync_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalogSyncInput"></a>

```python
catalog_sync_input: str
```

- *Type:* str

---

##### `change_tracking_input`<sup>Optional</sup> <a name="change_tracking_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.changeTrackingInput"></a>

```python
change_tracking_input: str
```

- *Type:* str

---

##### `check_constraint_input`<sup>Optional</sup> <a name="check_constraint_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.checkConstraintInput"></a>

```python
check_constraint_input: IResolvable | typing.List[IcebergTableCheckConstraint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint">IcebergTableCheckConstraint</a>]

---

##### `cluster_by_input`<sup>Optional</sup> <a name="cluster_by_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.clusterByInput"></a>

```python
cluster_by_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.columnInput"></a>

```python
column_input: IResolvable | typing.List[IcebergTableColumn]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn">IcebergTableColumn</a>]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `data_retention_time_in_days_input`<sup>Optional</sup> <a name="data_retention_time_in_days_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.dataRetentionTimeInDaysInput"></a>

```python
data_retention_time_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_data_compaction_input`<sup>Optional</sup> <a name="enable_data_compaction_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableDataCompactionInput"></a>

```python
enable_data_compaction_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_iceberg_merge_on_read_input`<sup>Optional</sup> <a name="enable_iceberg_merge_on_read_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableIcebergMergeOnReadInput"></a>

```python
enable_iceberg_merge_on_read_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `error_logging_input`<sup>Optional</sup> <a name="error_logging_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.errorLoggingInput"></a>

```python
error_logging_input: str
```

- *Type:* str

---

##### `external_volume_input`<sup>Optional</sup> <a name="external_volume_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.externalVolumeInput"></a>

```python
external_volume_input: str
```

- *Type:* str

---

##### `foreign_key_constraint_input`<sup>Optional</sup> <a name="foreign_key_constraint_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.foreignKeyConstraintInput"></a>

```python
foreign_key_constraint_input: IResolvable | typing.List[IcebergTableForeignKeyConstraint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint">IcebergTableForeignKeyConstraint</a>]

---

##### `iceberg_version_input`<sup>Optional</sup> <a name="iceberg_version_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.icebergVersionInput"></a>

```python
iceberg_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_data_extension_time_in_days_input`<sup>Optional</sup> <a name="max_data_extension_time_in_days_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.maxDataExtensionTimeInDaysInput"></a>

```python
max_data_extension_time_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `partition_by_input`<sup>Optional</sup> <a name="partition_by_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.partitionByInput"></a>

```python
partition_by_input: IResolvable | typing.List[IcebergTablePartitionBy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy">IcebergTablePartitionBy</a>]

---

##### `path_layout_input`<sup>Optional</sup> <a name="path_layout_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.pathLayoutInput"></a>

```python
path_layout_input: str
```

- *Type:* str

---

##### `primary_key_constraint_input`<sup>Optional</sup> <a name="primary_key_constraint_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.primaryKeyConstraintInput"></a>

```python
primary_key_constraint_input: IcebergTablePrimaryKeyConstraint
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint">IcebergTablePrimaryKeyConstraint</a>

---

##### `row_access_policy_input`<sup>Optional</sup> <a name="row_access_policy_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.rowAccessPolicyInput"></a>

```python
row_access_policy_input: IcebergTableRowAccessPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy">IcebergTableRowAccessPolicy</a>

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `storage_serialization_policy_input`<sup>Optional</sup> <a name="storage_serialization_policy_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.storageSerializationPolicyInput"></a>

```python
storage_serialization_policy_input: str
```

- *Type:* str

---

##### `target_file_size_input`<sup>Optional</sup> <a name="target_file_size_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.targetFileSizeInput"></a>

```python
target_file_size_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | IcebergTableTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts">IcebergTableTimeouts</a>

---

##### `unique_constraint_input`<sup>Optional</sup> <a name="unique_constraint_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.uniqueConstraintInput"></a>

```python
unique_constraint_input: IResolvable | typing.List[IcebergTableUniqueConstraint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint">IcebergTableUniqueConstraint</a>]

---

##### `base_location`<sup>Required</sup> <a name="base_location" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.baseLocation"></a>

```python
base_location: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `catalog_sync`<sup>Required</sup> <a name="catalog_sync" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.catalogSync"></a>

```python
catalog_sync: str
```

- *Type:* str

---

##### `change_tracking`<sup>Required</sup> <a name="change_tracking" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.changeTracking"></a>

```python
change_tracking: str
```

- *Type:* str

---

##### `cluster_by`<sup>Required</sup> <a name="cluster_by" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.clusterBy"></a>

```python
cluster_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `data_retention_time_in_days`<sup>Required</sup> <a name="data_retention_time_in_days" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.dataRetentionTimeInDays"></a>

```python
data_retention_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_data_compaction`<sup>Required</sup> <a name="enable_data_compaction" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableDataCompaction"></a>

```python
enable_data_compaction: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `enable_iceberg_merge_on_read`<sup>Required</sup> <a name="enable_iceberg_merge_on_read" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.enableIcebergMergeOnRead"></a>

```python
enable_iceberg_merge_on_read: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `error_logging`<sup>Required</sup> <a name="error_logging" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.errorLogging"></a>

```python
error_logging: str
```

- *Type:* str

---

##### `external_volume`<sup>Required</sup> <a name="external_volume" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.externalVolume"></a>

```python
external_volume: str
```

- *Type:* str

---

##### `iceberg_version`<sup>Required</sup> <a name="iceberg_version" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.icebergVersion"></a>

```python
iceberg_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_data_extension_time_in_days`<sup>Required</sup> <a name="max_data_extension_time_in_days" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.maxDataExtensionTimeInDays"></a>

```python
max_data_extension_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path_layout`<sup>Required</sup> <a name="path_layout" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.pathLayout"></a>

```python
path_layout: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `storage_serialization_policy`<sup>Required</sup> <a name="storage_serialization_policy" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.storageSerializationPolicy"></a>

```python
storage_serialization_policy: str
```

- *Type:* str

---

##### `target_file_size`<sup>Required</sup> <a name="target_file_size" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.targetFileSize"></a>

```python
target_file_size: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.icebergTable.IcebergTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IcebergTableAggregationPolicy <a name="IcebergTableAggregationPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableAggregationPolicy(
  policy_name: str,
  entity_key: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy.property.policyName">policy_name</a></code> | <code>str</code> | Aggregation policy name. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy.property.entityKey">entity_key</a></code> | <code>typing.List[str]</code> | Defines which columns uniquely identify an entity within the Iceberg table. |

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

Aggregation policy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#policy_name IcebergTable#policy_name}

---

##### `entity_key`<sup>Optional</sup> <a name="entity_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy.property.entityKey"></a>

```python
entity_key: typing.List[str]
```

- *Type:* typing.List[str]

Defines which columns uniquely identify an entity within the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#entity_key IcebergTable#entity_key}

---

### IcebergTableCheckConstraint <a name="IcebergTableCheckConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableCheckConstraint(
  expression: str,
  name: str = None,
  validate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint.property.expression">expression</a></code> | <code>str</code> | The CHECK constraint expression. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint.property.name">name</a></code> | <code>str</code> | Name of the constraint. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint.property.validate">validate</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether existing data is validated against the constraint (`true`, `ENABLE VALIDATE`) or not (`false`, `ENABLE NOVALIDATE`). |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint.property.expression"></a>

```python
expression: str
```

- *Type:* str

The CHECK constraint expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#expression IcebergTable#expression}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#name IcebergTable#name}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint.property.validate"></a>

```python
validate: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether existing data is validated against the constraint (`true`, `ENABLE VALIDATE`) or not (`false`, `ENABLE NOVALIDATE`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#validate IcebergTable#validate}

---

### IcebergTableColumn <a name="IcebergTableColumn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableColumn(
  name: str,
  type: str,
  comment: str = None,
  default: IcebergTableColumnDefault = None,
  masking_policy: IcebergTableColumnMaskingPolicy = None,
  not_null: str = None,
  projection_policy: IcebergTableColumnProjectionPolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.name">name</a></code> | <code>str</code> | Column name. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.type">type</a></code> | <code>str</code> | Column type, e.g. VARIANT. For a full list of column types, see [Summary of Data Types](https://docs.snowflake.com/en/sql-reference/intro-summary-data-types). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.comment">comment</a></code> | <code>str</code> | Column comment. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.default">default</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault">IcebergTableColumnDefault</a></code> | default block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.maskingPolicy">masking_policy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy">IcebergTableColumnMaskingPolicy</a></code> | masking_policy block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.notNull">not_null</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to restrict the column to NOT NULL values. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.projectionPolicy">projection_policy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy">IcebergTableColumnProjectionPolicy</a></code> | projection_policy block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.name"></a>

```python
name: str
```

- *Type:* str

Column name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#name IcebergTable#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.type"></a>

```python
type: str
```

- *Type:* str

Column type, e.g. VARIANT. For a full list of column types, see [Summary of Data Types](https://docs.snowflake.com/en/sql-reference/intro-summary-data-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#type IcebergTable#type}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.comment"></a>

```python
comment: str
```

- *Type:* str

Column comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#comment IcebergTable#comment}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.default"></a>

```python
default: IcebergTableColumnDefault
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault">IcebergTableColumnDefault</a>

default block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#default IcebergTable#default}

---

##### `masking_policy`<sup>Optional</sup> <a name="masking_policy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.maskingPolicy"></a>

```python
masking_policy: IcebergTableColumnMaskingPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy">IcebergTableColumnMaskingPolicy</a>

masking_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#masking_policy IcebergTable#masking_policy}

---

##### `not_null`<sup>Optional</sup> <a name="not_null" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.notNull"></a>

```python
not_null: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to restrict the column to NOT NULL values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#not_null IcebergTable#not_null}

---

##### `projection_policy`<sup>Optional</sup> <a name="projection_policy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumn.property.projectionPolicy"></a>

```python
projection_policy: IcebergTableColumnProjectionPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy">IcebergTableColumnProjectionPolicy</a>

projection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#projection_policy IcebergTable#projection_policy}

---

### IcebergTableColumnDefault <a name="IcebergTableColumnDefault" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableColumnDefault(
  expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault.property.expression">expression</a></code> | <code>str</code> | The default expression value for the column. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault.property.expression"></a>

```python
expression: str
```

- *Type:* str

The default expression value for the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#expression IcebergTable#expression}

---

### IcebergTableColumnMaskingPolicy <a name="IcebergTableColumnMaskingPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableColumnMaskingPolicy(
  policy_name: str,
  using: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy.property.policyName">policy_name</a></code> | <code>str</code> | Masking policy name. For more information about this resource, see [docs](./masking_policy). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy.property.using">using</a></code> | <code>typing.List[str]</code> | Specifies the arguments to pass into the conditional masking policy SQL expression, in order. |

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

Masking policy name. For more information about this resource, see [docs](./masking_policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#policy_name IcebergTable#policy_name}

---

##### `using`<sup>Optional</sup> <a name="using" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy.property.using"></a>

```python
using: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the arguments to pass into the conditional masking policy SQL expression, in order.

The first column in the list specifies the column for the policy conditions to mask or tokenize the data and must match the column to which the masking policy is set. The additional columns specify the columns to evaluate to determine whether to mask or tokenize the data in each row of the query result when a query is made on the first column. If the USING clause is omitted, Snowflake treats the conditional masking policy as a normal masking policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#using IcebergTable#using}

---

### IcebergTableColumnProjectionPolicy <a name="IcebergTableColumnProjectionPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableColumnProjectionPolicy(
  policy_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy.property.policyName">policy_name</a></code> | <code>str</code> | Projection policy name. |

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

Projection policy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#policy_name IcebergTable#policy_name}

---

### IcebergTableConfig <a name="IcebergTableConfig" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  column: IResolvable | typing.List[IcebergTableColumn],
  database: str,
  name: str,
  schema: str,
  aggregation_policy: IcebergTableAggregationPolicy = None,
  base_location: str = None,
  catalog: str = None,
  catalog_sync: str = None,
  change_tracking: str = None,
  check_constraint: IResolvable | typing.List[IcebergTableCheckConstraint] = None,
  cluster_by: typing.List[str] = None,
  comment: str = None,
  data_retention_time_in_days: typing.Union[int, float] = None,
  enable_data_compaction: bool | IResolvable = None,
  enable_iceberg_merge_on_read: bool | IResolvable = None,
  error_logging: str = None,
  external_volume: str = None,
  foreign_key_constraint: IResolvable | typing.List[IcebergTableForeignKeyConstraint] = None,
  iceberg_version: typing.Union[int, float] = None,
  id: str = None,
  max_data_extension_time_in_days: typing.Union[int, float] = None,
  partition_by: IResolvable | typing.List[IcebergTablePartitionBy] = None,
  path_layout: str = None,
  primary_key_constraint: IcebergTablePrimaryKeyConstraint = None,
  row_access_policy: IcebergTableRowAccessPolicy = None,
  storage_serialization_policy: str = None,
  target_file_size: str = None,
  timeouts: IcebergTableTimeouts = None,
  unique_constraint: IResolvable | typing.List[IcebergTableUniqueConstraint] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.column">column</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn">IcebergTableColumn</a>]</code> | column block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the Iceberg table; |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.aggregationPolicy">aggregation_policy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy">IcebergTableAggregationPolicy</a></code> | aggregation_policy block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.baseLocation">base_location</a></code> | <code>str</code> | The path to a directory where Snowflake can write data and metadata files for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.catalog">catalog</a></code> | <code>str</code> | Specifies the identifier for the catalog integration to use for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.catalogSync">catalog_sync</a></code> | <code>str</code> | Specifies the name of the catalog integration that Snowflake uses to automatically synchronize the Iceberg table with an external catalog. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.changeTracking">change_tracking</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to enable change tracking on the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.checkConstraint">check_constraint</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint">IcebergTableCheckConstraint</a>]</code> | check_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.clusterBy">cluster_by</a></code> | <code>typing.List[str]</code> | A list of one or more table columns/expressions to be used as clustering key(s) for the table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Specifies the retention period for the Iceberg table so that Time Travel actions can be performed on historical data. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.enableDataCompaction">enable_data_compaction</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether automatic background data compaction is enabled for the Iceberg table. For more information, check [ENABLE_DATA_COMPACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-data-compaction). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.enableIcebergMergeOnRead">enable_iceberg_merge_on_read</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether merge-on-read is enabled for the Iceberg table. For more information, check [ENABLE_ICEBERG_MERGE_ON_READ docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-iceberg-merge-on-read). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.errorLogging">error_logging</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether error logging is enabled for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.externalVolume">external_volume</a></code> | <code>str</code> | Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.foreignKeyConstraint">foreign_key_constraint</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint">IcebergTableForeignKeyConstraint</a>]</code> | foreign_key_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.icebergVersion">iceberg_version</a></code> | <code>typing.Union[int, float]</code> | Specifies the Iceberg table format version. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#id IcebergTable#id}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.maxDataExtensionTimeInDays">max_data_extension_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum number of days for which Snowflake can extend the data retention period for the Iceberg table to prevent streams on the table from becoming stale. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.partitionBy">partition_by</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy">IcebergTablePartitionBy</a>]</code> | partition_by block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.pathLayout">path_layout</a></code> | <code>str</code> | Specifies the storage layout for the Iceberg table's Parquet files. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.primaryKeyConstraint">primary_key_constraint</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint">IcebergTablePrimaryKeyConstraint</a></code> | primary_key_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.rowAccessPolicy">row_access_policy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy">IcebergTableRowAccessPolicy</a></code> | row_access_policy block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.storageSerializationPolicy">storage_serialization_policy</a></code> | <code>str</code> | Specifies the storage serialization policy for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.targetFileSize">target_file_size</a></code> | <code>str</code> | Specifies the target file size (in bytes) used when writing the Iceberg table's Parquet files. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts">IcebergTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.uniqueConstraint">unique_constraint</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint">IcebergTableUniqueConstraint</a>]</code> | unique_constraint block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.column"></a>

```python
column: IResolvable | typing.List[IcebergTableColumn]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn">IcebergTableColumn</a>]

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#column IcebergTable#column}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#database IcebergTable#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the Iceberg table;

must be unique for the schema in which the Iceberg table is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#name IcebergTable#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#schema IcebergTable#schema}

---

##### `aggregation_policy`<sup>Optional</sup> <a name="aggregation_policy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.aggregationPolicy"></a>

```python
aggregation_policy: IcebergTableAggregationPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy">IcebergTableAggregationPolicy</a>

aggregation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#aggregation_policy IcebergTable#aggregation_policy}

---

##### `base_location`<sup>Optional</sup> <a name="base_location" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.baseLocation"></a>

```python
base_location: str
```

- *Type:* str

The path to a directory where Snowflake can write data and metadata files for the Iceberg table.

Specify a relative path from the table's `EXTERNAL_VOLUME` location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#base_location IcebergTable#base_location}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

Specifies the identifier for the catalog integration to use for the Iceberg table.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#catalog IcebergTable#catalog}

---

##### `catalog_sync`<sup>Optional</sup> <a name="catalog_sync" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.catalogSync"></a>

```python
catalog_sync: str
```

- *Type:* str

Specifies the name of the catalog integration that Snowflake uses to automatically synchronize the Iceberg table with an external catalog.

For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#catalog_sync IcebergTable#catalog_sync}

---

##### `change_tracking`<sup>Optional</sup> <a name="change_tracking" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.changeTracking"></a>

```python
change_tracking: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to enable change tracking on the Iceberg table.

Cannot be changed after creation. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#change_tracking IcebergTable#change_tracking}

---

##### `check_constraint`<sup>Optional</sup> <a name="check_constraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.checkConstraint"></a>

```python
check_constraint: IResolvable | typing.List[IcebergTableCheckConstraint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint">IcebergTableCheckConstraint</a>]

check_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#check_constraint IcebergTable#check_constraint}

---

##### `cluster_by`<sup>Optional</sup> <a name="cluster_by" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.clusterBy"></a>

```python
cluster_by: typing.List[str]
```

- *Type:* typing.List[str]

A list of one or more table columns/expressions to be used as clustering key(s) for the table.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#cluster_by IcebergTable#cluster_by}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#comment IcebergTable#comment}

---

##### `data_retention_time_in_days`<sup>Optional</sup> <a name="data_retention_time_in_days" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.dataRetentionTimeInDays"></a>

```python
data_retention_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the retention period for the Iceberg table so that Time Travel actions can be performed on historical data.

For more information, check [DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#data_retention_time_in_days IcebergTable#data_retention_time_in_days}

---

##### `enable_data_compaction`<sup>Optional</sup> <a name="enable_data_compaction" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.enableDataCompaction"></a>

```python
enable_data_compaction: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether automatic background data compaction is enabled for the Iceberg table. For more information, check [ENABLE_DATA_COMPACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-data-compaction).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#enable_data_compaction IcebergTable#enable_data_compaction}

---

##### `enable_iceberg_merge_on_read`<sup>Optional</sup> <a name="enable_iceberg_merge_on_read" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.enableIcebergMergeOnRead"></a>

```python
enable_iceberg_merge_on_read: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether merge-on-read is enabled for the Iceberg table. For more information, check [ENABLE_ICEBERG_MERGE_ON_READ docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-iceberg-merge-on-read).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#enable_iceberg_merge_on_read IcebergTable#enable_iceberg_merge_on_read}

---

##### `error_logging`<sup>Optional</sup> <a name="error_logging" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.errorLogging"></a>

```python
error_logging: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether error logging is enabled for the Iceberg table.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#error_logging IcebergTable#error_logging}

---

##### `external_volume`<sup>Optional</sup> <a name="external_volume" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.externalVolume"></a>

```python
external_volume: str
```

- *Type:* str

Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#external_volume IcebergTable#external_volume}

---

##### `foreign_key_constraint`<sup>Optional</sup> <a name="foreign_key_constraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.foreignKeyConstraint"></a>

```python
foreign_key_constraint: IResolvable | typing.List[IcebergTableForeignKeyConstraint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint">IcebergTableForeignKeyConstraint</a>]

foreign_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#foreign_key_constraint IcebergTable#foreign_key_constraint}

---

##### `iceberg_version`<sup>Optional</sup> <a name="iceberg_version" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.icebergVersion"></a>

```python
iceberg_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the Iceberg table format version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#iceberg_version IcebergTable#iceberg_version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#id IcebergTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_data_extension_time_in_days`<sup>Optional</sup> <a name="max_data_extension_time_in_days" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.maxDataExtensionTimeInDays"></a>

```python
max_data_extension_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum number of days for which Snowflake can extend the data retention period for the Iceberg table to prevent streams on the table from becoming stale.

For more information, check [MAX_DATA_EXTENSION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#max_data_extension_time_in_days IcebergTable#max_data_extension_time_in_days}

---

##### `partition_by`<sup>Optional</sup> <a name="partition_by" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.partitionBy"></a>

```python
partition_by: IResolvable | typing.List[IcebergTablePartitionBy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy">IcebergTablePartitionBy</a>]

partition_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#partition_by IcebergTable#partition_by}

---

##### `path_layout`<sup>Optional</sup> <a name="path_layout" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.pathLayout"></a>

```python
path_layout: str
```

- *Type:* str

Specifies the storage layout for the Iceberg table's Parquet files.

Valid values are: [FLAT HIERARCHICAL]. Cannot be changed after creation. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#path_layout IcebergTable#path_layout}

---

##### `primary_key_constraint`<sup>Optional</sup> <a name="primary_key_constraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.primaryKeyConstraint"></a>

```python
primary_key_constraint: IcebergTablePrimaryKeyConstraint
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint">IcebergTablePrimaryKeyConstraint</a>

primary_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#primary_key_constraint IcebergTable#primary_key_constraint}

---

##### `row_access_policy`<sup>Optional</sup> <a name="row_access_policy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.rowAccessPolicy"></a>

```python
row_access_policy: IcebergTableRowAccessPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy">IcebergTableRowAccessPolicy</a>

row_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#row_access_policy IcebergTable#row_access_policy}

---

##### `storage_serialization_policy`<sup>Optional</sup> <a name="storage_serialization_policy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.storageSerializationPolicy"></a>

```python
storage_serialization_policy: str
```

- *Type:* str

Specifies the storage serialization policy for the Iceberg table.

Valid values are: [COMPATIBLE OPTIMIZED]. Cannot be changed after creation. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#storage_serialization_policy IcebergTable#storage_serialization_policy}

---

##### `target_file_size`<sup>Optional</sup> <a name="target_file_size" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.targetFileSize"></a>

```python
target_file_size: str
```

- *Type:* str

Specifies the target file size (in bytes) used when writing the Iceberg table's Parquet files.

Valid values are: [AUTO 16MB 32MB 64MB 128MB]. For more information, check [TARGET_FILE_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#target-file-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#target_file_size IcebergTable#target_file_size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.timeouts"></a>

```python
timeouts: IcebergTableTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts">IcebergTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#timeouts IcebergTable#timeouts}

---

##### `unique_constraint`<sup>Optional</sup> <a name="unique_constraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTableConfig.property.uniqueConstraint"></a>

```python
unique_constraint: IResolvable | typing.List[IcebergTableUniqueConstraint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint">IcebergTableUniqueConstraint</a>]

unique_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#unique_constraint IcebergTable#unique_constraint}

---

### IcebergTableDescribeOutput <a name="IcebergTableDescribeOutput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableDescribeOutput()
```


### IcebergTableForeignKeyConstraint <a name="IcebergTableForeignKeyConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableForeignKeyConstraint(
  column: typing.List[str],
  table_name: str,
  comment: str = None,
  deferrable: str = None,
  enable: str = None,
  enforced: str = None,
  initially_deferred: str = None,
  match: str = None,
  name: str = None,
  on_delete: str = None,
  on_update: str = None,
  ref_column: typing.List[str] = None,
  rely: str = None,
  validate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.column">column</a></code> | <code>typing.List[str]</code> | The local column(s) the foreign key is defined on. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.tableName">table_name</a></code> | <code>str</code> | The table that the foreign key references. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.comment">comment</a></code> | <code>str</code> | Constraint comment. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.deferrable">deferrable</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is deferrable (`true`) or not deferrable (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.enable">enable</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enabled (`true`) or disabled (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.enforced">enforced</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enforced (`true`) or not enforced (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.initiallyDeferred">initially_deferred</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is initially deferred (`true`) or initially immediate (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.match">match</a></code> | <code>str</code> | The match type for the foreign key. Valid values are: [FULL SIMPLE PARTIAL]. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.name">name</a></code> | <code>str</code> | Name of the constraint. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.onDelete">on_delete</a></code> | <code>str</code> | Specifies the action to perform when the referenced primary/unique key is deleted. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.onUpdate">on_update</a></code> | <code>str</code> | Specifies the action to perform when the referenced primary/unique key is updated. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.refColumn">ref_column</a></code> | <code>typing.List[str]</code> | The column(s) in the referenced table that the foreign key references. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.rely">rely</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether a constraint in NOVALIDATE mode is taken into account (`true`) or not (`false`) during query rewrite. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.validate">validate</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to validate existing data on the table when the constraint is created (`true`) or skip validation (`false`). |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.column"></a>

```python
column: typing.List[str]
```

- *Type:* typing.List[str]

The local column(s) the foreign key is defined on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#column IcebergTable#column}

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

The table that the foreign key references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#table_name IcebergTable#table_name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.comment"></a>

```python
comment: str
```

- *Type:* str

Constraint comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#comment IcebergTable#comment}

---

##### `deferrable`<sup>Optional</sup> <a name="deferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.deferrable"></a>

```python
deferrable: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is deferrable (`true`) or not deferrable (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#deferrable IcebergTable#deferrable}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.enable"></a>

```python
enable: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enabled (`true`) or disabled (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#enable IcebergTable#enable}

---

##### `enforced`<sup>Optional</sup> <a name="enforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.enforced"></a>

```python
enforced: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enforced (`true`) or not enforced (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#enforced IcebergTable#enforced}

---

##### `initially_deferred`<sup>Optional</sup> <a name="initially_deferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.initiallyDeferred"></a>

```python
initially_deferred: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is initially deferred (`true`) or initially immediate (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#initially_deferred IcebergTable#initially_deferred}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.match"></a>

```python
match: str
```

- *Type:* str

The match type for the foreign key. Valid values are: [FULL SIMPLE PARTIAL].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#match IcebergTable#match}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#name IcebergTable#name}

---

##### `on_delete`<sup>Optional</sup> <a name="on_delete" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.onDelete"></a>

```python
on_delete: str
```

- *Type:* str

Specifies the action to perform when the referenced primary/unique key is deleted.

Valid values are: [CASCADE SET NULL SET DEFAULT RESTRICT NO ACTION].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#on_delete IcebergTable#on_delete}

---

##### `on_update`<sup>Optional</sup> <a name="on_update" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.onUpdate"></a>

```python
on_update: str
```

- *Type:* str

Specifies the action to perform when the referenced primary/unique key is updated.

Valid values are: [CASCADE SET NULL SET DEFAULT RESTRICT NO ACTION].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#on_update IcebergTable#on_update}

---

##### `ref_column`<sup>Optional</sup> <a name="ref_column" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.refColumn"></a>

```python
ref_column: typing.List[str]
```

- *Type:* typing.List[str]

The column(s) in the referenced table that the foreign key references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#ref_column IcebergTable#ref_column}

---

##### `rely`<sup>Optional</sup> <a name="rely" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.rely"></a>

```python
rely: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether a constraint in NOVALIDATE mode is taken into account (`true`) or not (`false`) during query rewrite.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#rely IcebergTable#rely}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint.property.validate"></a>

```python
validate: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to validate existing data on the table when the constraint is created (`true`) or skip validation (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#validate IcebergTable#validate}

---

### IcebergTableParameters <a name="IcebergTableParameters" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParameters.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParameters()
```


### IcebergTableParametersCatalog <a name="IcebergTableParametersCatalog" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalog.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersCatalog()
```


### IcebergTableParametersCatalogSync <a name="IcebergTableParametersCatalogSync" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSync.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersCatalogSync()
```


### IcebergTableParametersDataRetentionTimeInDays <a name="IcebergTableParametersDataRetentionTimeInDays" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDays.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersDataRetentionTimeInDays()
```


### IcebergTableParametersEnableDataCompaction <a name="IcebergTableParametersEnableDataCompaction" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompaction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompaction.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersEnableDataCompaction()
```


### IcebergTableParametersEnableIcebergMergeOnRead <a name="IcebergTableParametersEnableIcebergMergeOnRead" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnRead"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnRead.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersEnableIcebergMergeOnRead()
```


### IcebergTableParametersExternalVolume <a name="IcebergTableParametersExternalVolume" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolume.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersExternalVolume()
```


### IcebergTableParametersMaxDataExtensionTimeInDays <a name="IcebergTableParametersMaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDays"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDays.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersMaxDataExtensionTimeInDays()
```


### IcebergTableParametersStorageSerializationPolicy <a name="IcebergTableParametersStorageSerializationPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicy.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersStorageSerializationPolicy()
```


### IcebergTableParametersTargetFileSize <a name="IcebergTableParametersTargetFileSize" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSize.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersTargetFileSize()
```


### IcebergTablePartitionBy <a name="IcebergTablePartitionBy" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTablePartitionBy(
  bucket: IcebergTablePartitionByBucket = None,
  day: str = None,
  hour: str = None,
  identity: str = None,
  month: str = None,
  truncate: IcebergTablePartitionByTruncate = None,
  year: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.bucket">bucket</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket">IcebergTablePartitionByBucket</a></code> | bucket block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.day">day</a></code> | <code>str</code> | Partitions the table by the day component of the column. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.hour">hour</a></code> | <code>str</code> | Partitions the table by the hour component of the column. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.identity">identity</a></code> | <code>str</code> | Name of the column to use as-is for partitioning. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.month">month</a></code> | <code>str</code> | Partitions the table by the month component of the column. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.truncate">truncate</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate">IcebergTablePartitionByTruncate</a></code> | truncate block. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.year">year</a></code> | <code>str</code> | Partitions the table by the year component of the column. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.bucket"></a>

```python
bucket: IcebergTablePartitionByBucket
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket">IcebergTablePartitionByBucket</a>

bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#bucket IcebergTable#bucket}

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.day"></a>

```python
day: str
```

- *Type:* str

Partitions the table by the day component of the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#day IcebergTable#day}

---

##### `hour`<sup>Optional</sup> <a name="hour" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.hour"></a>

```python
hour: str
```

- *Type:* str

Partitions the table by the hour component of the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#hour IcebergTable#hour}

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.identity"></a>

```python
identity: str
```

- *Type:* str

Name of the column to use as-is for partitioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#identity IcebergTable#identity}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.month"></a>

```python
month: str
```

- *Type:* str

Partitions the table by the month component of the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#month IcebergTable#month}

---

##### `truncate`<sup>Optional</sup> <a name="truncate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.truncate"></a>

```python
truncate: IcebergTablePartitionByTruncate
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate">IcebergTablePartitionByTruncate</a>

truncate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#truncate IcebergTable#truncate}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy.property.year"></a>

```python
year: str
```

- *Type:* str

Partitions the table by the year component of the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#year IcebergTable#year}

---

### IcebergTablePartitionByBucket <a name="IcebergTablePartitionByBucket" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTablePartitionByBucket(
  column: str,
  num_buckets: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket.property.column">column</a></code> | <code>str</code> | Name of the column to bucket. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket.property.numBuckets">num_buckets</a></code> | <code>typing.Union[int, float]</code> | Number of buckets to hash the column values into. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket.property.column"></a>

```python
column: str
```

- *Type:* str

Name of the column to bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#column IcebergTable#column}

---

##### `num_buckets`<sup>Required</sup> <a name="num_buckets" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket.property.numBuckets"></a>

```python
num_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of buckets to hash the column values into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#num_buckets IcebergTable#num_buckets}

---

### IcebergTablePartitionByTruncate <a name="IcebergTablePartitionByTruncate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTablePartitionByTruncate(
  column: str,
  width: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate.property.column">column</a></code> | <code>str</code> | Name of the column to truncate. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate.property.width">width</a></code> | <code>typing.Union[int, float]</code> | Width to truncate the column value to. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate.property.column"></a>

```python
column: str
```

- *Type:* str

Name of the column to truncate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#column IcebergTable#column}

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate.property.width"></a>

```python
width: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Width to truncate the column value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#width IcebergTable#width}

---

### IcebergTablePrimaryKeyConstraint <a name="IcebergTablePrimaryKeyConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTablePrimaryKeyConstraint(
  column: typing.List[str],
  comment: str = None,
  deferrable: str = None,
  enable: str = None,
  enforced: str = None,
  initially_deferred: str = None,
  name: str = None,
  rely: str = None,
  validate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.column">column</a></code> | <code>typing.List[str]</code> | The column(s) the constraint applies to. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.comment">comment</a></code> | <code>str</code> | Constraint comment. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.deferrable">deferrable</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is deferrable (`true`) or not deferrable (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.enable">enable</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enabled (`true`) or disabled (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.enforced">enforced</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enforced (`true`) or not enforced (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.initiallyDeferred">initially_deferred</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is initially deferred (`true`) or initially immediate (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.name">name</a></code> | <code>str</code> | Name of the constraint. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.rely">rely</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether a constraint in NOVALIDATE mode is taken into account (`true`) or not (`false`) during query rewrite. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.validate">validate</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to validate existing data on the table when the constraint is created (`true`) or skip validation (`false`). |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.column"></a>

```python
column: typing.List[str]
```

- *Type:* typing.List[str]

The column(s) the constraint applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#column IcebergTable#column}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.comment"></a>

```python
comment: str
```

- *Type:* str

Constraint comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#comment IcebergTable#comment}

---

##### `deferrable`<sup>Optional</sup> <a name="deferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.deferrable"></a>

```python
deferrable: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is deferrable (`true`) or not deferrable (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#deferrable IcebergTable#deferrable}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.enable"></a>

```python
enable: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enabled (`true`) or disabled (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#enable IcebergTable#enable}

---

##### `enforced`<sup>Optional</sup> <a name="enforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.enforced"></a>

```python
enforced: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enforced (`true`) or not enforced (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#enforced IcebergTable#enforced}

---

##### `initially_deferred`<sup>Optional</sup> <a name="initially_deferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.initiallyDeferred"></a>

```python
initially_deferred: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is initially deferred (`true`) or initially immediate (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#initially_deferred IcebergTable#initially_deferred}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#name IcebergTable#name}

---

##### `rely`<sup>Optional</sup> <a name="rely" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.rely"></a>

```python
rely: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether a constraint in NOVALIDATE mode is taken into account (`true`) or not (`false`) during query rewrite.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#rely IcebergTable#rely}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint.property.validate"></a>

```python
validate: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to validate existing data on the table when the constraint is created (`true`) or skip validation (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#validate IcebergTable#validate}

---

### IcebergTableRowAccessPolicy <a name="IcebergTableRowAccessPolicy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableRowAccessPolicy(
  on: typing.List[str],
  policy_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy.property.on">on</a></code> | <code>typing.List[str]</code> | Defines which columns are affected by the policy. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy.property.policyName">policy_name</a></code> | <code>str</code> | Row access policy name. For more information about this resource, see [docs](./row_access_policy). |

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy.property.on"></a>

```python
on: typing.List[str]
```

- *Type:* typing.List[str]

Defines which columns are affected by the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#on IcebergTable#on}

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

Row access policy name. For more information about this resource, see [docs](./row_access_policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#policy_name IcebergTable#policy_name}

---

### IcebergTableShowOutput <a name="IcebergTableShowOutput" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableShowOutput()
```


### IcebergTableShowOutputAutoRefreshStatus <a name="IcebergTableShowOutputAutoRefreshStatus" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatus.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableShowOutputAutoRefreshStatus()
```


### IcebergTableShowOutputPartitionSpecs <a name="IcebergTableShowOutputPartitionSpecs" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecs.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableShowOutputPartitionSpecs()
```


### IcebergTableShowOutputPartitionSpecsFields <a name="IcebergTableShowOutputPartitionSpecsFields" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFields.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableShowOutputPartitionSpecsFields()
```


### IcebergTableTimeouts <a name="IcebergTableTimeouts" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#create IcebergTable#create}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#delete IcebergTable#delete}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#read IcebergTable#read}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#update IcebergTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#create IcebergTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#delete IcebergTable#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#read IcebergTable#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#update IcebergTable#update}.

---

### IcebergTableUniqueConstraint <a name="IcebergTableUniqueConstraint" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableUniqueConstraint(
  column: typing.List[str],
  comment: str = None,
  deferrable: str = None,
  enable: str = None,
  enforced: str = None,
  initially_deferred: str = None,
  name: str = None,
  rely: str = None,
  validate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.column">column</a></code> | <code>typing.List[str]</code> | The column(s) the constraint applies to. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.comment">comment</a></code> | <code>str</code> | Constraint comment. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.deferrable">deferrable</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is deferrable (`true`) or not deferrable (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.enable">enable</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enabled (`true`) or disabled (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.enforced">enforced</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enforced (`true`) or not enforced (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.initiallyDeferred">initially_deferred</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is initially deferred (`true`) or initially immediate (`false`). |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.name">name</a></code> | <code>str</code> | Name of the constraint. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.rely">rely</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether a constraint in NOVALIDATE mode is taken into account (`true`) or not (`false`) during query rewrite. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.validate">validate</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to validate existing data on the table when the constraint is created (`true`) or skip validation (`false`). |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.column"></a>

```python
column: typing.List[str]
```

- *Type:* typing.List[str]

The column(s) the constraint applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#column IcebergTable#column}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.comment"></a>

```python
comment: str
```

- *Type:* str

Constraint comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#comment IcebergTable#comment}

---

##### `deferrable`<sup>Optional</sup> <a name="deferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.deferrable"></a>

```python
deferrable: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is deferrable (`true`) or not deferrable (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#deferrable IcebergTable#deferrable}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.enable"></a>

```python
enable: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enabled (`true`) or disabled (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#enable IcebergTable#enable}

---

##### `enforced`<sup>Optional</sup> <a name="enforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.enforced"></a>

```python
enforced: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is enforced (`true`) or not enforced (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#enforced IcebergTable#enforced}

---

##### `initially_deferred`<sup>Optional</sup> <a name="initially_deferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.initiallyDeferred"></a>

```python
initially_deferred: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether the constraint is initially deferred (`true`) or initially immediate (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#initially_deferred IcebergTable#initially_deferred}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#name IcebergTable#name}

---

##### `rely`<sup>Optional</sup> <a name="rely" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.rely"></a>

```python
rely: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether a constraint in NOVALIDATE mode is taken into account (`true`) or not (`false`) during query rewrite.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#rely IcebergTable#rely}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint.property.validate"></a>

```python
validate: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Whether to validate existing data on the table when the constraint is created (`true`) or skip validation (`false`).

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#validate IcebergTable#validate}

---

## Classes <a name="Classes" id="Classes"></a>

### IcebergTableAggregationPolicyOutputReference <a name="IcebergTableAggregationPolicyOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableAggregationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.resetEntityKey">reset_entity_key</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_entity_key` <a name="reset_entity_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.resetEntityKey"></a>

```python
def reset_entity_key() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.entityKeyInput">entity_key_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.entityKey">entity_key</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy">IcebergTableAggregationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `entity_key_input`<sup>Optional</sup> <a name="entity_key_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.entityKeyInput"></a>

```python
entity_key_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `entity_key`<sup>Required</sup> <a name="entity_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.entityKey"></a>

```python
entity_key: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableAggregationPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableAggregationPolicy">IcebergTableAggregationPolicy</a>

---


### IcebergTableCheckConstraintList <a name="IcebergTableCheckConstraintList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableCheckConstraintList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableCheckConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint">IcebergTableCheckConstraint</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IcebergTableCheckConstraint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint">IcebergTableCheckConstraint</a>]

---


### IcebergTableCheckConstraintOutputReference <a name="IcebergTableCheckConstraintOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableCheckConstraintOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.resetValidate">reset_validate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_validate` <a name="reset_validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.resetValidate"></a>

```python
def reset_validate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.validateInput">validate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.validate">validate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint">IcebergTableCheckConstraint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `validate_input`<sup>Optional</sup> <a name="validate_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.validateInput"></a>

```python
validate_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.validate"></a>

```python
validate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraintOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IcebergTableCheckConstraint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableCheckConstraint">IcebergTableCheckConstraint</a>

---


### IcebergTableColumnDefaultOutputReference <a name="IcebergTableColumnDefaultOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableColumnDefaultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault">IcebergTableColumnDefault</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableColumnDefault
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault">IcebergTableColumnDefault</a>

---


### IcebergTableColumnList <a name="IcebergTableColumnList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableColumnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn">IcebergTableColumn</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IcebergTableColumn]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn">IcebergTableColumn</a>]

---


### IcebergTableColumnMaskingPolicyOutputReference <a name="IcebergTableColumnMaskingPolicyOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableColumnMaskingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.resetUsing">reset_using</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_using` <a name="reset_using" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.resetUsing"></a>

```python
def reset_using() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.usingInput">using_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.using">using</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy">IcebergTableColumnMaskingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `using_input`<sup>Optional</sup> <a name="using_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.usingInput"></a>

```python
using_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `using`<sup>Required</sup> <a name="using" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.using"></a>

```python
using: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableColumnMaskingPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy">IcebergTableColumnMaskingPolicy</a>

---


### IcebergTableColumnOutputReference <a name="IcebergTableColumnOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableColumnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putDefault">put_default</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putMaskingPolicy">put_masking_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putProjectionPolicy">put_projection_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetMaskingPolicy">reset_masking_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetNotNull">reset_not_null</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetProjectionPolicy">reset_projection_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default` <a name="put_default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putDefault"></a>

```python
def put_default(
  expression: str
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putDefault.parameter.expression"></a>

- *Type:* str

The default expression value for the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#expression IcebergTable#expression}

---

##### `put_masking_policy` <a name="put_masking_policy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putMaskingPolicy"></a>

```python
def put_masking_policy(
  policy_name: str,
  using: typing.List[str] = None
) -> None
```

###### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putMaskingPolicy.parameter.policyName"></a>

- *Type:* str

Masking policy name. For more information about this resource, see [docs](./masking_policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#policy_name IcebergTable#policy_name}

---

###### `using`<sup>Optional</sup> <a name="using" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putMaskingPolicy.parameter.using"></a>

- *Type:* typing.List[str]

Specifies the arguments to pass into the conditional masking policy SQL expression, in order.

The first column in the list specifies the column for the policy conditions to mask or tokenize the data and must match the column to which the masking policy is set. The additional columns specify the columns to evaluate to determine whether to mask or tokenize the data in each row of the query result when a query is made on the first column. If the USING clause is omitted, Snowflake treats the conditional masking policy as a normal masking policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#using IcebergTable#using}

---

##### `put_projection_policy` <a name="put_projection_policy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putProjectionPolicy"></a>

```python
def put_projection_policy(
  policy_name: str
) -> None
```

###### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.putProjectionPolicy.parameter.policyName"></a>

- *Type:* str

Projection policy name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#policy_name IcebergTable#policy_name}

---

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_masking_policy` <a name="reset_masking_policy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetMaskingPolicy"></a>

```python
def reset_masking_policy() -> None
```

##### `reset_not_null` <a name="reset_not_null" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetNotNull"></a>

```python
def reset_not_null() -> None
```

##### `reset_projection_policy` <a name="reset_projection_policy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.resetProjectionPolicy"></a>

```python
def reset_projection_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.default">default</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference">IcebergTableColumnDefaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.maskingPolicy">masking_policy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference">IcebergTableColumnMaskingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.projectionPolicy">projection_policy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference">IcebergTableColumnProjectionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.defaultInput">default_input</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault">IcebergTableColumnDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.maskingPolicyInput">masking_policy_input</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy">IcebergTableColumnMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.notNullInput">not_null_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.projectionPolicyInput">projection_policy_input</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy">IcebergTableColumnProjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.notNull">not_null</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn">IcebergTableColumn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.default"></a>

```python
default: IcebergTableColumnDefaultOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefaultOutputReference">IcebergTableColumnDefaultOutputReference</a>

---

##### `masking_policy`<sup>Required</sup> <a name="masking_policy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.maskingPolicy"></a>

```python
masking_policy: IcebergTableColumnMaskingPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicyOutputReference">IcebergTableColumnMaskingPolicyOutputReference</a>

---

##### `projection_policy`<sup>Required</sup> <a name="projection_policy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.projectionPolicy"></a>

```python
projection_policy: IcebergTableColumnProjectionPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference">IcebergTableColumnProjectionPolicyOutputReference</a>

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.defaultInput"></a>

```python
default_input: IcebergTableColumnDefault
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnDefault">IcebergTableColumnDefault</a>

---

##### `masking_policy_input`<sup>Optional</sup> <a name="masking_policy_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.maskingPolicyInput"></a>

```python
masking_policy_input: IcebergTableColumnMaskingPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnMaskingPolicy">IcebergTableColumnMaskingPolicy</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `not_null_input`<sup>Optional</sup> <a name="not_null_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.notNullInput"></a>

```python
not_null_input: str
```

- *Type:* str

---

##### `projection_policy_input`<sup>Optional</sup> <a name="projection_policy_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.projectionPolicyInput"></a>

```python
projection_policy_input: IcebergTableColumnProjectionPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy">IcebergTableColumnProjectionPolicy</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `not_null`<sup>Required</sup> <a name="not_null" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.notNull"></a>

```python
not_null: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IcebergTableColumn
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumn">IcebergTableColumn</a>

---


### IcebergTableColumnProjectionPolicyOutputReference <a name="IcebergTableColumnProjectionPolicyOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableColumnProjectionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy">IcebergTableColumnProjectionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableColumnProjectionPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableColumnProjectionPolicy">IcebergTableColumnProjectionPolicy</a>

---


### IcebergTableDescribeOutputList <a name="IcebergTableDescribeOutputList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableDescribeOutputOutputReference <a name="IcebergTableDescribeOutputOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.check">check</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.isNullable">is_nullable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.nameMapping">name_mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.primaryKey">primary_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.privacyDomain">privacy_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.sourceIcebergType">source_iceberg_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.uniqueKey">unique_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.writeDefault">write_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutput">IcebergTableDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.check"></a>

```python
check: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `is_nullable`<sup>Required</sup> <a name="is_nullable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.isNullable"></a>

```python
is_nullable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_mapping`<sup>Required</sup> <a name="name_mapping" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.nameMapping"></a>

```python
name_mapping: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.primaryKey"></a>

```python
primary_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `privacy_domain`<sup>Required</sup> <a name="privacy_domain" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.privacyDomain"></a>

```python
privacy_domain: str
```

- *Type:* str

---

##### `source_iceberg_type`<sup>Required</sup> <a name="source_iceberg_type" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.sourceIcebergType"></a>

```python
source_iceberg_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unique_key`<sup>Required</sup> <a name="unique_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.uniqueKey"></a>

```python
unique_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `write_default`<sup>Required</sup> <a name="write_default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.writeDefault"></a>

```python
write_default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableDescribeOutput">IcebergTableDescribeOutput</a>

---


### IcebergTableForeignKeyConstraintList <a name="IcebergTableForeignKeyConstraintList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableForeignKeyConstraintList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableForeignKeyConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint">IcebergTableForeignKeyConstraint</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IcebergTableForeignKeyConstraint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint">IcebergTableForeignKeyConstraint</a>]

---


### IcebergTableForeignKeyConstraintOutputReference <a name="IcebergTableForeignKeyConstraintOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableForeignKeyConstraintOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetDeferrable">reset_deferrable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetEnable">reset_enable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetEnforced">reset_enforced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetInitiallyDeferred">reset_initially_deferred</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetMatch">reset_match</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetOnDelete">reset_on_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetOnUpdate">reset_on_update</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetRefColumn">reset_ref_column</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetRely">reset_rely</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetValidate">reset_validate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_deferrable` <a name="reset_deferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetDeferrable"></a>

```python
def reset_deferrable() -> None
```

##### `reset_enable` <a name="reset_enable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```

##### `reset_enforced` <a name="reset_enforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetEnforced"></a>

```python
def reset_enforced() -> None
```

##### `reset_initially_deferred` <a name="reset_initially_deferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetInitiallyDeferred"></a>

```python
def reset_initially_deferred() -> None
```

##### `reset_match` <a name="reset_match" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetMatch"></a>

```python
def reset_match() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_on_delete` <a name="reset_on_delete" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetOnDelete"></a>

```python
def reset_on_delete() -> None
```

##### `reset_on_update` <a name="reset_on_update" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetOnUpdate"></a>

```python
def reset_on_update() -> None
```

##### `reset_ref_column` <a name="reset_ref_column" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetRefColumn"></a>

```python
def reset_ref_column() -> None
```

##### `reset_rely` <a name="reset_rely" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetRely"></a>

```python
def reset_rely() -> None
```

##### `reset_validate` <a name="reset_validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.resetValidate"></a>

```python
def reset_validate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.columnInput">column_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.deferrableInput">deferrable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enableInput">enable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enforcedInput">enforced_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.initiallyDeferredInput">initially_deferred_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.matchInput">match_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onDeleteInput">on_delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onUpdateInput">on_update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.refColumnInput">ref_column_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.relyInput">rely_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.validateInput">validate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.column">column</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.deferrable">deferrable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enable">enable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enforced">enforced</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.initiallyDeferred">initially_deferred</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.match">match</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onDelete">on_delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onUpdate">on_update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.refColumn">ref_column</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.rely">rely</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.validate">validate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint">IcebergTableForeignKeyConstraint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.columnInput"></a>

```python
column_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `deferrable_input`<sup>Optional</sup> <a name="deferrable_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.deferrableInput"></a>

```python
deferrable_input: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enableInput"></a>

```python
enable_input: str
```

- *Type:* str

---

##### `enforced_input`<sup>Optional</sup> <a name="enforced_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enforcedInput"></a>

```python
enforced_input: str
```

- *Type:* str

---

##### `initially_deferred_input`<sup>Optional</sup> <a name="initially_deferred_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.initiallyDeferredInput"></a>

```python
initially_deferred_input: str
```

- *Type:* str

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.matchInput"></a>

```python
match_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `on_delete_input`<sup>Optional</sup> <a name="on_delete_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onDeleteInput"></a>

```python
on_delete_input: str
```

- *Type:* str

---

##### `on_update_input`<sup>Optional</sup> <a name="on_update_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onUpdateInput"></a>

```python
on_update_input: str
```

- *Type:* str

---

##### `ref_column_input`<sup>Optional</sup> <a name="ref_column_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.refColumnInput"></a>

```python
ref_column_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rely_input`<sup>Optional</sup> <a name="rely_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.relyInput"></a>

```python
rely_input: str
```

- *Type:* str

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `validate_input`<sup>Optional</sup> <a name="validate_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.validateInput"></a>

```python
validate_input: str
```

- *Type:* str

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.column"></a>

```python
column: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `deferrable`<sup>Required</sup> <a name="deferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.deferrable"></a>

```python
deferrable: str
```

- *Type:* str

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enable"></a>

```python
enable: str
```

- *Type:* str

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.enforced"></a>

```python
enforced: str
```

- *Type:* str

---

##### `initially_deferred`<sup>Required</sup> <a name="initially_deferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.initiallyDeferred"></a>

```python
initially_deferred: str
```

- *Type:* str

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.match"></a>

```python
match: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `on_delete`<sup>Required</sup> <a name="on_delete" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onDelete"></a>

```python
on_delete: str
```

- *Type:* str

---

##### `on_update`<sup>Required</sup> <a name="on_update" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.onUpdate"></a>

```python
on_update: str
```

- *Type:* str

---

##### `ref_column`<sup>Required</sup> <a name="ref_column" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.refColumn"></a>

```python
ref_column: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `rely`<sup>Required</sup> <a name="rely" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.rely"></a>

```python
rely: str
```

- *Type:* str

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.validate"></a>

```python
validate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraintOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IcebergTableForeignKeyConstraint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableForeignKeyConstraint">IcebergTableForeignKeyConstraint</a>

---


### IcebergTableParametersCatalogList <a name="IcebergTableParametersCatalogList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersCatalogList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableParametersCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableParametersCatalogOutputReference <a name="IcebergTableParametersCatalogOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersCatalogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalog">IcebergTableParametersCatalog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableParametersCatalog
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalog">IcebergTableParametersCatalog</a>

---


### IcebergTableParametersCatalogSyncList <a name="IcebergTableParametersCatalogSyncList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersCatalogSyncList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableParametersCatalogSyncOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableParametersCatalogSyncOutputReference <a name="IcebergTableParametersCatalogSyncOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersCatalogSyncOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSync">IcebergTableParametersCatalogSync</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableParametersCatalogSync
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSync">IcebergTableParametersCatalogSync</a>

---


### IcebergTableParametersDataRetentionTimeInDaysList <a name="IcebergTableParametersDataRetentionTimeInDaysList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersDataRetentionTimeInDaysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableParametersDataRetentionTimeInDaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableParametersDataRetentionTimeInDaysOutputReference <a name="IcebergTableParametersDataRetentionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDays">IcebergTableParametersDataRetentionTimeInDays</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableParametersDataRetentionTimeInDays
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDays">IcebergTableParametersDataRetentionTimeInDays</a>

---


### IcebergTableParametersEnableDataCompactionList <a name="IcebergTableParametersEnableDataCompactionList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersEnableDataCompactionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableParametersEnableDataCompactionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableParametersEnableDataCompactionOutputReference <a name="IcebergTableParametersEnableDataCompactionOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersEnableDataCompactionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompaction">IcebergTableParametersEnableDataCompaction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableParametersEnableDataCompaction
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompaction">IcebergTableParametersEnableDataCompaction</a>

---


### IcebergTableParametersEnableIcebergMergeOnReadList <a name="IcebergTableParametersEnableIcebergMergeOnReadList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableParametersEnableIcebergMergeOnReadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableParametersEnableIcebergMergeOnReadOutputReference <a name="IcebergTableParametersEnableIcebergMergeOnReadOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnRead">IcebergTableParametersEnableIcebergMergeOnRead</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableParametersEnableIcebergMergeOnRead
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnRead">IcebergTableParametersEnableIcebergMergeOnRead</a>

---


### IcebergTableParametersExternalVolumeList <a name="IcebergTableParametersExternalVolumeList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersExternalVolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableParametersExternalVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableParametersExternalVolumeOutputReference <a name="IcebergTableParametersExternalVolumeOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersExternalVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolume">IcebergTableParametersExternalVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableParametersExternalVolume
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolume">IcebergTableParametersExternalVolume</a>

---


### IcebergTableParametersList <a name="IcebergTableParametersList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableParametersMaxDataExtensionTimeInDaysList <a name="IcebergTableParametersMaxDataExtensionTimeInDaysList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference <a name="IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDays">IcebergTableParametersMaxDataExtensionTimeInDays</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableParametersMaxDataExtensionTimeInDays
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDays">IcebergTableParametersMaxDataExtensionTimeInDays</a>

---


### IcebergTableParametersOutputReference <a name="IcebergTableParametersOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList">IcebergTableParametersCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.catalogSync">catalog_sync</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList">IcebergTableParametersCatalogSyncList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList">IcebergTableParametersDataRetentionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.enableDataCompaction">enable_data_compaction</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList">IcebergTableParametersEnableDataCompactionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.enableIcebergMergeOnRead">enable_iceberg_merge_on_read</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList">IcebergTableParametersEnableIcebergMergeOnReadList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.externalVolume">external_volume</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList">IcebergTableParametersExternalVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.maxDataExtensionTimeInDays">max_data_extension_time_in_days</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList">IcebergTableParametersMaxDataExtensionTimeInDaysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.storageSerializationPolicy">storage_serialization_policy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList">IcebergTableParametersStorageSerializationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.targetFileSize">target_file_size</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList">IcebergTableParametersTargetFileSizeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParameters">IcebergTableParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.catalog"></a>

```python
catalog: IcebergTableParametersCatalogList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogList">IcebergTableParametersCatalogList</a>

---

##### `catalog_sync`<sup>Required</sup> <a name="catalog_sync" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.catalogSync"></a>

```python
catalog_sync: IcebergTableParametersCatalogSyncList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersCatalogSyncList">IcebergTableParametersCatalogSyncList</a>

---

##### `data_retention_time_in_days`<sup>Required</sup> <a name="data_retention_time_in_days" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.dataRetentionTimeInDays"></a>

```python
data_retention_time_in_days: IcebergTableParametersDataRetentionTimeInDaysList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersDataRetentionTimeInDaysList">IcebergTableParametersDataRetentionTimeInDaysList</a>

---

##### `enable_data_compaction`<sup>Required</sup> <a name="enable_data_compaction" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.enableDataCompaction"></a>

```python
enable_data_compaction: IcebergTableParametersEnableDataCompactionList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableDataCompactionList">IcebergTableParametersEnableDataCompactionList</a>

---

##### `enable_iceberg_merge_on_read`<sup>Required</sup> <a name="enable_iceberg_merge_on_read" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.enableIcebergMergeOnRead"></a>

```python
enable_iceberg_merge_on_read: IcebergTableParametersEnableIcebergMergeOnReadList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersEnableIcebergMergeOnReadList">IcebergTableParametersEnableIcebergMergeOnReadList</a>

---

##### `external_volume`<sup>Required</sup> <a name="external_volume" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.externalVolume"></a>

```python
external_volume: IcebergTableParametersExternalVolumeList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersExternalVolumeList">IcebergTableParametersExternalVolumeList</a>

---

##### `max_data_extension_time_in_days`<sup>Required</sup> <a name="max_data_extension_time_in_days" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.maxDataExtensionTimeInDays"></a>

```python
max_data_extension_time_in_days: IcebergTableParametersMaxDataExtensionTimeInDaysList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersMaxDataExtensionTimeInDaysList">IcebergTableParametersMaxDataExtensionTimeInDaysList</a>

---

##### `storage_serialization_policy`<sup>Required</sup> <a name="storage_serialization_policy" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.storageSerializationPolicy"></a>

```python
storage_serialization_policy: IcebergTableParametersStorageSerializationPolicyList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList">IcebergTableParametersStorageSerializationPolicyList</a>

---

##### `target_file_size`<sup>Required</sup> <a name="target_file_size" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.targetFileSize"></a>

```python
target_file_size: IcebergTableParametersTargetFileSizeList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList">IcebergTableParametersTargetFileSizeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableParameters
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParameters">IcebergTableParameters</a>

---


### IcebergTableParametersStorageSerializationPolicyList <a name="IcebergTableParametersStorageSerializationPolicyList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersStorageSerializationPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableParametersStorageSerializationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableParametersStorageSerializationPolicyOutputReference <a name="IcebergTableParametersStorageSerializationPolicyOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicy">IcebergTableParametersStorageSerializationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableParametersStorageSerializationPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersStorageSerializationPolicy">IcebergTableParametersStorageSerializationPolicy</a>

---


### IcebergTableParametersTargetFileSizeList <a name="IcebergTableParametersTargetFileSizeList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersTargetFileSizeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableParametersTargetFileSizeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableParametersTargetFileSizeOutputReference <a name="IcebergTableParametersTargetFileSizeOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableParametersTargetFileSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSize">IcebergTableParametersTargetFileSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSizeOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableParametersTargetFileSize
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableParametersTargetFileSize">IcebergTableParametersTargetFileSize</a>

---


### IcebergTablePartitionByBucketOutputReference <a name="IcebergTablePartitionByBucketOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTablePartitionByBucketOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.columnInput">column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.numBucketsInput">num_buckets_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.column">column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.numBuckets">num_buckets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket">IcebergTablePartitionByBucket</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.columnInput"></a>

```python
column_input: str
```

- *Type:* str

---

##### `num_buckets_input`<sup>Optional</sup> <a name="num_buckets_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.numBucketsInput"></a>

```python
num_buckets_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.column"></a>

```python
column: str
```

- *Type:* str

---

##### `num_buckets`<sup>Required</sup> <a name="num_buckets" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.numBuckets"></a>

```python
num_buckets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTablePartitionByBucket
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket">IcebergTablePartitionByBucket</a>

---


### IcebergTablePartitionByList <a name="IcebergTablePartitionByList" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTablePartitionByList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTablePartitionByOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy">IcebergTablePartitionBy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IcebergTablePartitionBy]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy">IcebergTablePartitionBy</a>]

---


### IcebergTablePartitionByOutputReference <a name="IcebergTablePartitionByOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTablePartitionByOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.putBucket">put_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.putTruncate">put_truncate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetDay">reset_day</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetHour">reset_hour</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetMonth">reset_month</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetTruncate">reset_truncate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetYear">reset_year</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bucket` <a name="put_bucket" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.putBucket"></a>

```python
def put_bucket(
  column: str,
  num_buckets: typing.Union[int, float]
) -> None
```

###### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.putBucket.parameter.column"></a>

- *Type:* str

Name of the column to bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#column IcebergTable#column}

---

###### `num_buckets`<sup>Required</sup> <a name="num_buckets" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.putBucket.parameter.numBuckets"></a>

- *Type:* typing.Union[int, float]

Number of buckets to hash the column values into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#num_buckets IcebergTable#num_buckets}

---

##### `put_truncate` <a name="put_truncate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.putTruncate"></a>

```python
def put_truncate(
  column: str,
  width: typing.Union[int, float]
) -> None
```

###### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.putTruncate.parameter.column"></a>

- *Type:* str

Name of the column to truncate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#column IcebergTable#column}

---

###### `width`<sup>Required</sup> <a name="width" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.putTruncate.parameter.width"></a>

- *Type:* typing.Union[int, float]

Width to truncate the column value to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/iceberg_table#width IcebergTable#width}

---

##### `reset_bucket` <a name="reset_bucket" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_day` <a name="reset_day" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetDay"></a>

```python
def reset_day() -> None
```

##### `reset_hour` <a name="reset_hour" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetHour"></a>

```python
def reset_hour() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_month` <a name="reset_month" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetMonth"></a>

```python
def reset_month() -> None
```

##### `reset_truncate` <a name="reset_truncate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetTruncate"></a>

```python
def reset_truncate() -> None
```

##### `reset_year` <a name="reset_year" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.resetYear"></a>

```python
def reset_year() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.bucket">bucket</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference">IcebergTablePartitionByBucketOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.truncate">truncate</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference">IcebergTablePartitionByTruncateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.bucketInput">bucket_input</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket">IcebergTablePartitionByBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.dayInput">day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.hourInput">hour_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.identityInput">identity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.monthInput">month_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.truncateInput">truncate_input</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate">IcebergTablePartitionByTruncate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.yearInput">year_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.day">day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.hour">hour</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.identity">identity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.month">month</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.year">year</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy">IcebergTablePartitionBy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.bucket"></a>

```python
bucket: IcebergTablePartitionByBucketOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucketOutputReference">IcebergTablePartitionByBucketOutputReference</a>

---

##### `truncate`<sup>Required</sup> <a name="truncate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.truncate"></a>

```python
truncate: IcebergTablePartitionByTruncateOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference">IcebergTablePartitionByTruncateOutputReference</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.bucketInput"></a>

```python
bucket_input: IcebergTablePartitionByBucket
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByBucket">IcebergTablePartitionByBucket</a>

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.dayInput"></a>

```python
day_input: str
```

- *Type:* str

---

##### `hour_input`<sup>Optional</sup> <a name="hour_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.hourInput"></a>

```python
hour_input: str
```

- *Type:* str

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.identityInput"></a>

```python
identity_input: str
```

- *Type:* str

---

##### `month_input`<sup>Optional</sup> <a name="month_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.monthInput"></a>

```python
month_input: str
```

- *Type:* str

---

##### `truncate_input`<sup>Optional</sup> <a name="truncate_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.truncateInput"></a>

```python
truncate_input: IcebergTablePartitionByTruncate
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate">IcebergTablePartitionByTruncate</a>

---

##### `year_input`<sup>Optional</sup> <a name="year_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.yearInput"></a>

```python
year_input: str
```

- *Type:* str

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.day"></a>

```python
day: str
```

- *Type:* str

---

##### `hour`<sup>Required</sup> <a name="hour" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.hour"></a>

```python
hour: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.identity"></a>

```python
identity: str
```

- *Type:* str

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.month"></a>

```python
month: str
```

- *Type:* str

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.year"></a>

```python
year: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IcebergTablePartitionBy
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionBy">IcebergTablePartitionBy</a>

---


### IcebergTablePartitionByTruncateOutputReference <a name="IcebergTablePartitionByTruncateOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTablePartitionByTruncateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.columnInput">column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.widthInput">width_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.column">column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.width">width</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate">IcebergTablePartitionByTruncate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.columnInput"></a>

```python
column_input: str
```

- *Type:* str

---

##### `width_input`<sup>Optional</sup> <a name="width_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.widthInput"></a>

```python
width_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.column"></a>

```python
column: str
```

- *Type:* str

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.width"></a>

```python
width: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncateOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTablePartitionByTruncate
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePartitionByTruncate">IcebergTablePartitionByTruncate</a>

---


### IcebergTablePrimaryKeyConstraintOutputReference <a name="IcebergTablePrimaryKeyConstraintOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTablePrimaryKeyConstraintOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetDeferrable">reset_deferrable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetEnable">reset_enable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetEnforced">reset_enforced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetInitiallyDeferred">reset_initially_deferred</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetRely">reset_rely</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetValidate">reset_validate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_deferrable` <a name="reset_deferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetDeferrable"></a>

```python
def reset_deferrable() -> None
```

##### `reset_enable` <a name="reset_enable" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```

##### `reset_enforced` <a name="reset_enforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetEnforced"></a>

```python
def reset_enforced() -> None
```

##### `reset_initially_deferred` <a name="reset_initially_deferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetInitiallyDeferred"></a>

```python
def reset_initially_deferred() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_rely` <a name="reset_rely" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetRely"></a>

```python
def reset_rely() -> None
```

##### `reset_validate` <a name="reset_validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.resetValidate"></a>

```python
def reset_validate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.columnInput">column_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.deferrableInput">deferrable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enableInput">enable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enforcedInput">enforced_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.initiallyDeferredInput">initially_deferred_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.relyInput">rely_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.validateInput">validate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.column">column</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.deferrable">deferrable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enable">enable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enforced">enforced</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.initiallyDeferred">initially_deferred</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.rely">rely</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.validate">validate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint">IcebergTablePrimaryKeyConstraint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.columnInput"></a>

```python
column_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `deferrable_input`<sup>Optional</sup> <a name="deferrable_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.deferrableInput"></a>

```python
deferrable_input: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enableInput"></a>

```python
enable_input: str
```

- *Type:* str

---

##### `enforced_input`<sup>Optional</sup> <a name="enforced_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enforcedInput"></a>

```python
enforced_input: str
```

- *Type:* str

---

##### `initially_deferred_input`<sup>Optional</sup> <a name="initially_deferred_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.initiallyDeferredInput"></a>

```python
initially_deferred_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rely_input`<sup>Optional</sup> <a name="rely_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.relyInput"></a>

```python
rely_input: str
```

- *Type:* str

---

##### `validate_input`<sup>Optional</sup> <a name="validate_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.validateInput"></a>

```python
validate_input: str
```

- *Type:* str

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.column"></a>

```python
column: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `deferrable`<sup>Required</sup> <a name="deferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.deferrable"></a>

```python
deferrable: str
```

- *Type:* str

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enable"></a>

```python
enable: str
```

- *Type:* str

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.enforced"></a>

```python
enforced: str
```

- *Type:* str

---

##### `initially_deferred`<sup>Required</sup> <a name="initially_deferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.initiallyDeferred"></a>

```python
initially_deferred: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rely`<sup>Required</sup> <a name="rely" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.rely"></a>

```python
rely: str
```

- *Type:* str

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.validate"></a>

```python
validate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraintOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTablePrimaryKeyConstraint
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTablePrimaryKeyConstraint">IcebergTablePrimaryKeyConstraint</a>

---


### IcebergTableRowAccessPolicyOutputReference <a name="IcebergTableRowAccessPolicyOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableRowAccessPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.onInput">on_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.policyNameInput">policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.on">on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy">IcebergTableRowAccessPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_input`<sup>Optional</sup> <a name="on_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.onInput"></a>

```python
on_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_name_input`<sup>Optional</sup> <a name="policy_name_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.policyNameInput"></a>

```python
policy_name_input: str
```

- *Type:* str

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.on"></a>

```python
on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableRowAccessPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableRowAccessPolicy">IcebergTableRowAccessPolicy</a>

---


### IcebergTableShowOutputAutoRefreshStatusList <a name="IcebergTableShowOutputAutoRefreshStatusList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableShowOutputAutoRefreshStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableShowOutputAutoRefreshStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableShowOutputAutoRefreshStatusOutputReference <a name="IcebergTableShowOutputAutoRefreshStatusOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId">current_snapshot_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.executionState">execution_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime">last_snapshot_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount">pending_snapshot_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatus">IcebergTableShowOutputAutoRefreshStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_snapshot_id`<sup>Required</sup> <a name="current_snapshot_id" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId"></a>

```python
current_snapshot_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `execution_state`<sup>Required</sup> <a name="execution_state" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.executionState"></a>

```python
execution_state: str
```

- *Type:* str

---

##### `last_snapshot_time`<sup>Required</sup> <a name="last_snapshot_time" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime"></a>

```python
last_snapshot_time: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `pending_snapshot_count`<sup>Required</sup> <a name="pending_snapshot_count" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount"></a>

```python
pending_snapshot_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableShowOutputAutoRefreshStatus
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatus">IcebergTableShowOutputAutoRefreshStatus</a>

---


### IcebergTableShowOutputList <a name="IcebergTableShowOutputList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableShowOutputOutputReference <a name="IcebergTableShowOutputOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.autoRefreshStatus">auto_refresh_status</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList">IcebergTableShowOutputAutoRefreshStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.baseLocation">base_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.canWriteMetadata">can_write_metadata</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogSyncName">catalog_sync_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogTableName">catalog_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.currentPartitionSpecId">current_partition_spec_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.externalVolumeName">external_volume_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.icebergTableFormatVersion">iceberg_table_format_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.icebergTableType">iceberg_table_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.nameMapping">name_mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.partitionSpecs">partition_specs</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList">IcebergTableShowOutputPartitionSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutput">IcebergTableShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_refresh_status`<sup>Required</sup> <a name="auto_refresh_status" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.autoRefreshStatus"></a>

```python
auto_refresh_status: IcebergTableShowOutputAutoRefreshStatusList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputAutoRefreshStatusList">IcebergTableShowOutputAutoRefreshStatusList</a>

---

##### `base_location`<sup>Required</sup> <a name="base_location" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.baseLocation"></a>

```python
base_location: str
```

- *Type:* str

---

##### `can_write_metadata`<sup>Required</sup> <a name="can_write_metadata" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.canWriteMetadata"></a>

```python
can_write_metadata: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `catalog_namespace`<sup>Required</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogNamespace"></a>

```python
catalog_namespace: str
```

- *Type:* str

---

##### `catalog_sync_name`<sup>Required</sup> <a name="catalog_sync_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogSyncName"></a>

```python
catalog_sync_name: str
```

- *Type:* str

---

##### `catalog_table_name`<sup>Required</sup> <a name="catalog_table_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.catalogTableName"></a>

```python
catalog_table_name: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `current_partition_spec_id`<sup>Required</sup> <a name="current_partition_spec_id" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.currentPartitionSpecId"></a>

```python
current_partition_spec_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `external_volume_name`<sup>Required</sup> <a name="external_volume_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.externalVolumeName"></a>

```python
external_volume_name: str
```

- *Type:* str

---

##### `iceberg_table_format_version`<sup>Required</sup> <a name="iceberg_table_format_version" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.icebergTableFormatVersion"></a>

```python
iceberg_table_format_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iceberg_table_type`<sup>Required</sup> <a name="iceberg_table_type" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.icebergTableType"></a>

```python
iceberg_table_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_mapping`<sup>Required</sup> <a name="name_mapping" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.nameMapping"></a>

```python
name_mapping: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `partition_specs`<sup>Required</sup> <a name="partition_specs" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.partitionSpecs"></a>

```python
partition_specs: IcebergTableShowOutputPartitionSpecsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList">IcebergTableShowOutputPartitionSpecsList</a>

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutput">IcebergTableShowOutput</a>

---


### IcebergTableShowOutputPartitionSpecsFieldsList <a name="IcebergTableShowOutputPartitionSpecsFieldsList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableShowOutputPartitionSpecsFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableShowOutputPartitionSpecsFieldsOutputReference <a name="IcebergTableShowOutputPartitionSpecsFieldsOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.fieldId">field_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.sourceId">source_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.transform">transform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFields">IcebergTableShowOutputPartitionSpecsFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_id`<sup>Required</sup> <a name="field_id" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.fieldId"></a>

```python
field_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.sourceId"></a>

```python
source_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.transform"></a>

```python
transform: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableShowOutputPartitionSpecsFields
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFields">IcebergTableShowOutputPartitionSpecsFields</a>

---


### IcebergTableShowOutputPartitionSpecsList <a name="IcebergTableShowOutputPartitionSpecsList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableShowOutputPartitionSpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableShowOutputPartitionSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableShowOutputPartitionSpecsOutputReference <a name="IcebergTableShowOutputPartitionSpecsOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList">IcebergTableShowOutputPartitionSpecsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.specId">spec_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecs">IcebergTableShowOutputPartitionSpecs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.fields"></a>

```python
fields: IcebergTableShowOutputPartitionSpecsFieldsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsFieldsList">IcebergTableShowOutputPartitionSpecsFieldsList</a>

---

##### `spec_id`<sup>Required</sup> <a name="spec_id" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.specId"></a>

```python
spec_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecsOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableShowOutputPartitionSpecs
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableShowOutputPartitionSpecs">IcebergTableShowOutputPartitionSpecs</a>

---


### IcebergTableTimeoutsOutputReference <a name="IcebergTableTimeoutsOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts">IcebergTableTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IcebergTableTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableTimeouts">IcebergTableTimeouts</a>

---


### IcebergTableUniqueConstraintList <a name="IcebergTableUniqueConstraintList" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableUniqueConstraintList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableUniqueConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint">IcebergTableUniqueConstraint</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[IcebergTableUniqueConstraint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint">IcebergTableUniqueConstraint</a>]

---


### IcebergTableUniqueConstraintOutputReference <a name="IcebergTableUniqueConstraintOutputReference" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table

icebergTable.IcebergTableUniqueConstraintOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetDeferrable">reset_deferrable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetEnable">reset_enable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetEnforced">reset_enforced</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetInitiallyDeferred">reset_initially_deferred</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetRely">reset_rely</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetValidate">reset_validate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_deferrable` <a name="reset_deferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetDeferrable"></a>

```python
def reset_deferrable() -> None
```

##### `reset_enable` <a name="reset_enable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetEnable"></a>

```python
def reset_enable() -> None
```

##### `reset_enforced` <a name="reset_enforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetEnforced"></a>

```python
def reset_enforced() -> None
```

##### `reset_initially_deferred` <a name="reset_initially_deferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetInitiallyDeferred"></a>

```python
def reset_initially_deferred() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_rely` <a name="reset_rely" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetRely"></a>

```python
def reset_rely() -> None
```

##### `reset_validate` <a name="reset_validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.resetValidate"></a>

```python
def reset_validate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.columnInput">column_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.deferrableInput">deferrable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enableInput">enable_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enforcedInput">enforced_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.initiallyDeferredInput">initially_deferred_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.relyInput">rely_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.validateInput">validate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.column">column</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.deferrable">deferrable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enable">enable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enforced">enforced</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.initiallyDeferred">initially_deferred</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.rely">rely</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.validate">validate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint">IcebergTableUniqueConstraint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.columnInput"></a>

```python
column_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `deferrable_input`<sup>Optional</sup> <a name="deferrable_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.deferrableInput"></a>

```python
deferrable_input: str
```

- *Type:* str

---

##### `enable_input`<sup>Optional</sup> <a name="enable_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enableInput"></a>

```python
enable_input: str
```

- *Type:* str

---

##### `enforced_input`<sup>Optional</sup> <a name="enforced_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enforcedInput"></a>

```python
enforced_input: str
```

- *Type:* str

---

##### `initially_deferred_input`<sup>Optional</sup> <a name="initially_deferred_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.initiallyDeferredInput"></a>

```python
initially_deferred_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rely_input`<sup>Optional</sup> <a name="rely_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.relyInput"></a>

```python
rely_input: str
```

- *Type:* str

---

##### `validate_input`<sup>Optional</sup> <a name="validate_input" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.validateInput"></a>

```python
validate_input: str
```

- *Type:* str

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.column"></a>

```python
column: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `deferrable`<sup>Required</sup> <a name="deferrable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.deferrable"></a>

```python
deferrable: str
```

- *Type:* str

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enable"></a>

```python
enable: str
```

- *Type:* str

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.enforced"></a>

```python
enforced: str
```

- *Type:* str

---

##### `initially_deferred`<sup>Required</sup> <a name="initially_deferred" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.initiallyDeferred"></a>

```python
initially_deferred: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `rely`<sup>Required</sup> <a name="rely" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.rely"></a>

```python
rely: str
```

- *Type:* str

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.validate"></a>

```python
validate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraintOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IcebergTableUniqueConstraint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTable.IcebergTableUniqueConstraint">IcebergTableUniqueConstraint</a>

---



