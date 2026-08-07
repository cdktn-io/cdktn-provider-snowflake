# `icebergTableFromRest` Submodule <a name="`icebergTableFromRest` Submodule" id="@cdktn/provider-snowflake.icebergTableFromRest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IcebergTableFromRest <a name="IcebergTableFromRest" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest snowflake_iceberg_table_from_rest}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRest(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog_table_name: str,
  database: str,
  name: str,
  schema: str,
  auto_refresh: str = None,
  catalog: str = None,
  catalog_namespace: str = None,
  comment: str = None,
  enable_iceberg_merge_on_read: bool | IResolvable = None,
  external_volume: str = None,
  iceberg_merge_on_read_behavior: str = None,
  id: str = None,
  path_layout: str = None,
  replace_invalid_characters: bool | IResolvable = None,
  storage_serialization_policy: str = None,
  target_file_size: str = None,
  timeouts: IcebergTableFromRestTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.catalogTableName">catalog_table_name</a></code> | <code>str</code> | Specifies the name of the table as it appears in the external catalog. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the Iceberg table; |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.autoRefresh">auto_refresh</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should periodically refresh the Iceberg table metadata from the external catalog. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.catalog">catalog</a></code> | <code>str</code> | Specifies the identifier for the catalog integration to use for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | Specifies the namespace (or database) in the external catalog that the table belongs to. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.enableIcebergMergeOnRead">enable_iceberg_merge_on_read</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether merge-on-read is enabled for the Iceberg table. For more information, check [ENABLE_ICEBERG_MERGE_ON_READ docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-iceberg-merge-on-read). |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.externalVolume">external_volume</a></code> | <code>str</code> | Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.icebergMergeOnReadBehavior">iceberg_merge_on_read_behavior</a></code> | <code>str</code> | Specifies the merge-on-read behavior for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#id IcebergTableFromRest#id}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.pathLayout">path_layout</a></code> | <code>str</code> | Specifies the storage layout for the Iceberg table's Parquet files. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.storageSerializationPolicy">storage_serialization_policy</a></code> | <code>str</code> | Specifies the storage serialization policy for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.targetFileSize">target_file_size</a></code> | <code>str</code> | Specifies the target file size (in bytes) used when writing the Iceberg table's Parquet files. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts">IcebergTableFromRestTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_table_name`<sup>Required</sup> <a name="catalog_table_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.catalogTableName"></a>

- *Type:* str

Specifies the name of the table as it appears in the external catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#catalog_table_name IcebergTableFromRest#catalog_table_name}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#database IcebergTableFromRest#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the Iceberg table;

must be unique for the schema in which the Iceberg table is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#name IcebergTableFromRest#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#schema IcebergTableFromRest#schema}

---

##### `auto_refresh`<sup>Optional</sup> <a name="auto_refresh" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.autoRefresh"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should periodically refresh the Iceberg table metadata from the external catalog.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#auto_refresh IcebergTableFromRest#auto_refresh}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.catalog"></a>

- *Type:* str

Specifies the identifier for the catalog integration to use for the Iceberg table.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#catalog IcebergTableFromRest#catalog}

---

##### `catalog_namespace`<sup>Optional</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.catalogNamespace"></a>

- *Type:* str

Specifies the namespace (or database) in the external catalog that the table belongs to.

If not specified, the catalog integration's default namespace is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#catalog_namespace IcebergTableFromRest#catalog_namespace}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#comment IcebergTableFromRest#comment}

---

##### `enable_iceberg_merge_on_read`<sup>Optional</sup> <a name="enable_iceberg_merge_on_read" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.enableIcebergMergeOnRead"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether merge-on-read is enabled for the Iceberg table. For more information, check [ENABLE_ICEBERG_MERGE_ON_READ docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-iceberg-merge-on-read).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#enable_iceberg_merge_on_read IcebergTableFromRest#enable_iceberg_merge_on_read}

---

##### `external_volume`<sup>Optional</sup> <a name="external_volume" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.externalVolume"></a>

- *Type:* str

Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#external_volume IcebergTableFromRest#external_volume}

---

##### `iceberg_merge_on_read_behavior`<sup>Optional</sup> <a name="iceberg_merge_on_read_behavior" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.icebergMergeOnReadBehavior"></a>

- *Type:* str

Specifies the merge-on-read behavior for the Iceberg table.

Valid values are: [AUTO ENABLED DISABLED]. Cannot be changed after creation. For more information, check [ICEBERG_MERGE_ON_READ_BEHAVIOR docs](https://docs.snowflake.com/en/sql-reference/parameters#iceberg-merge-on-read-behavior).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#iceberg_merge_on_read_behavior IcebergTableFromRest#iceberg_merge_on_read_behavior}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#id IcebergTableFromRest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `path_layout`<sup>Optional</sup> <a name="path_layout" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.pathLayout"></a>

- *Type:* str

Specifies the storage layout for the Iceberg table's Parquet files.

Valid values are: [FLAT HIERARCHICAL]. Cannot be changed after creation. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#path_layout IcebergTableFromRest#path_layout}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.replaceInvalidCharacters"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table.

For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#replace_invalid_characters IcebergTableFromRest#replace_invalid_characters}

---

##### `storage_serialization_policy`<sup>Optional</sup> <a name="storage_serialization_policy" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.storageSerializationPolicy"></a>

- *Type:* str

Specifies the storage serialization policy for the Iceberg table.

Valid values are: [COMPATIBLE OPTIMIZED]. Cannot be changed after creation. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#storage_serialization_policy IcebergTableFromRest#storage_serialization_policy}

---

##### `target_file_size`<sup>Optional</sup> <a name="target_file_size" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.targetFileSize"></a>

- *Type:* str

Specifies the target file size (in bytes) used when writing the Iceberg table's Parquet files.

Valid values are: [AUTO 16MB 32MB 64MB 128MB]. For more information, check [TARGET_FILE_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#target-file-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#target_file_size IcebergTableFromRest#target_file_size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts">IcebergTableFromRestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#timeouts IcebergTableFromRest#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetAutoRefresh">reset_auto_refresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetCatalogNamespace">reset_catalog_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetEnableIcebergMergeOnRead">reset_enable_iceberg_merge_on_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetExternalVolume">reset_external_volume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetIcebergMergeOnReadBehavior">reset_iceberg_merge_on_read_behavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetPathLayout">reset_path_layout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetStorageSerializationPolicy">reset_storage_serialization_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetTargetFileSize">reset_target_file_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#create IcebergTableFromRest#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#delete IcebergTableFromRest#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#read IcebergTableFromRest#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#update IcebergTableFromRest#update}.

---

##### `reset_auto_refresh` <a name="reset_auto_refresh" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetAutoRefresh"></a>

```python
def reset_auto_refresh() -> None
```

##### `reset_catalog` <a name="reset_catalog" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_catalog_namespace` <a name="reset_catalog_namespace" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetCatalogNamespace"></a>

```python
def reset_catalog_namespace() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_enable_iceberg_merge_on_read` <a name="reset_enable_iceberg_merge_on_read" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetEnableIcebergMergeOnRead"></a>

```python
def reset_enable_iceberg_merge_on_read() -> None
```

##### `reset_external_volume` <a name="reset_external_volume" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetExternalVolume"></a>

```python
def reset_external_volume() -> None
```

##### `reset_iceberg_merge_on_read_behavior` <a name="reset_iceberg_merge_on_read_behavior" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetIcebergMergeOnReadBehavior"></a>

```python
def reset_iceberg_merge_on_read_behavior() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_path_layout` <a name="reset_path_layout" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetPathLayout"></a>

```python
def reset_path_layout() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_storage_serialization_policy` <a name="reset_storage_serialization_policy" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetStorageSerializationPolicy"></a>

```python
def reset_storage_serialization_policy() -> None
```

##### `reset_target_file_size` <a name="reset_target_file_size" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetTargetFileSize"></a>

```python
def reset_target_file_size() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IcebergTableFromRest resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.isConstruct"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRest.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRest.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRest.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRest.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IcebergTableFromRest resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IcebergTableFromRest to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IcebergTableFromRest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IcebergTableFromRest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList">IcebergTableFromRestDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList">IcebergTableFromRestParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList">IcebergTableFromRestShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference">IcebergTableFromRestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.autoRefreshInput">auto_refresh_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalogNamespaceInput">catalog_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalogTableNameInput">catalog_table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.enableIcebergMergeOnReadInput">enable_iceberg_merge_on_read_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.externalVolumeInput">external_volume_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.icebergMergeOnReadBehaviorInput">iceberg_merge_on_read_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.pathLayoutInput">path_layout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.storageSerializationPolicyInput">storage_serialization_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.targetFileSizeInput">target_file_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts">IcebergTableFromRestTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.autoRefresh">auto_refresh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalogTableName">catalog_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.enableIcebergMergeOnRead">enable_iceberg_merge_on_read</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.externalVolume">external_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.icebergMergeOnReadBehavior">iceberg_merge_on_read_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.pathLayout">path_layout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.storageSerializationPolicy">storage_serialization_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.targetFileSize">target_file_size</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.describeOutput"></a>

```python
describe_output: IcebergTableFromRestDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList">IcebergTableFromRestDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.parameters"></a>

```python
parameters: IcebergTableFromRestParametersList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList">IcebergTableFromRestParametersList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.showOutput"></a>

```python
show_output: IcebergTableFromRestShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList">IcebergTableFromRestShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.timeouts"></a>

```python
timeouts: IcebergTableFromRestTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference">IcebergTableFromRestTimeoutsOutputReference</a>

---

##### `auto_refresh_input`<sup>Optional</sup> <a name="auto_refresh_input" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.autoRefreshInput"></a>

```python
auto_refresh_input: str
```

- *Type:* str

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `catalog_namespace_input`<sup>Optional</sup> <a name="catalog_namespace_input" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalogNamespaceInput"></a>

```python
catalog_namespace_input: str
```

- *Type:* str

---

##### `catalog_table_name_input`<sup>Optional</sup> <a name="catalog_table_name_input" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalogTableNameInput"></a>

```python
catalog_table_name_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `enable_iceberg_merge_on_read_input`<sup>Optional</sup> <a name="enable_iceberg_merge_on_read_input" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.enableIcebergMergeOnReadInput"></a>

```python
enable_iceberg_merge_on_read_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `external_volume_input`<sup>Optional</sup> <a name="external_volume_input" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.externalVolumeInput"></a>

```python
external_volume_input: str
```

- *Type:* str

---

##### `iceberg_merge_on_read_behavior_input`<sup>Optional</sup> <a name="iceberg_merge_on_read_behavior_input" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.icebergMergeOnReadBehaviorInput"></a>

```python
iceberg_merge_on_read_behavior_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_layout_input`<sup>Optional</sup> <a name="path_layout_input" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.pathLayoutInput"></a>

```python
path_layout_input: str
```

- *Type:* str

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `storage_serialization_policy_input`<sup>Optional</sup> <a name="storage_serialization_policy_input" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.storageSerializationPolicyInput"></a>

```python
storage_serialization_policy_input: str
```

- *Type:* str

---

##### `target_file_size_input`<sup>Optional</sup> <a name="target_file_size_input" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.targetFileSizeInput"></a>

```python
target_file_size_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | IcebergTableFromRestTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts">IcebergTableFromRestTimeouts</a>

---

##### `auto_refresh`<sup>Required</sup> <a name="auto_refresh" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.autoRefresh"></a>

```python
auto_refresh: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `catalog_namespace`<sup>Required</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalogNamespace"></a>

```python
catalog_namespace: str
```

- *Type:* str

---

##### `catalog_table_name`<sup>Required</sup> <a name="catalog_table_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.catalogTableName"></a>

```python
catalog_table_name: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `enable_iceberg_merge_on_read`<sup>Required</sup> <a name="enable_iceberg_merge_on_read" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.enableIcebergMergeOnRead"></a>

```python
enable_iceberg_merge_on_read: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `external_volume`<sup>Required</sup> <a name="external_volume" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.externalVolume"></a>

```python
external_volume: str
```

- *Type:* str

---

##### `iceberg_merge_on_read_behavior`<sup>Required</sup> <a name="iceberg_merge_on_read_behavior" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.icebergMergeOnReadBehavior"></a>

```python
iceberg_merge_on_read_behavior: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path_layout`<sup>Required</sup> <a name="path_layout" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.pathLayout"></a>

```python
path_layout: str
```

- *Type:* str

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `storage_serialization_policy`<sup>Required</sup> <a name="storage_serialization_policy" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.storageSerializationPolicy"></a>

```python
storage_serialization_policy: str
```

- *Type:* str

---

##### `target_file_size`<sup>Required</sup> <a name="target_file_size" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.targetFileSize"></a>

```python
target_file_size: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRest.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IcebergTableFromRestConfig <a name="IcebergTableFromRestConfig" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  catalog_table_name: str,
  database: str,
  name: str,
  schema: str,
  auto_refresh: str = None,
  catalog: str = None,
  catalog_namespace: str = None,
  comment: str = None,
  enable_iceberg_merge_on_read: bool | IResolvable = None,
  external_volume: str = None,
  iceberg_merge_on_read_behavior: str = None,
  id: str = None,
  path_layout: str = None,
  replace_invalid_characters: bool | IResolvable = None,
  storage_serialization_policy: str = None,
  target_file_size: str = None,
  timeouts: IcebergTableFromRestTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.catalogTableName">catalog_table_name</a></code> | <code>str</code> | Specifies the name of the table as it appears in the external catalog. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the Iceberg table; |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.autoRefresh">auto_refresh</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should periodically refresh the Iceberg table metadata from the external catalog. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.catalog">catalog</a></code> | <code>str</code> | Specifies the identifier for the catalog integration to use for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | Specifies the namespace (or database) in the external catalog that the table belongs to. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.enableIcebergMergeOnRead">enable_iceberg_merge_on_read</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether merge-on-read is enabled for the Iceberg table. For more information, check [ENABLE_ICEBERG_MERGE_ON_READ docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-iceberg-merge-on-read). |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.externalVolume">external_volume</a></code> | <code>str</code> | Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.icebergMergeOnReadBehavior">iceberg_merge_on_read_behavior</a></code> | <code>str</code> | Specifies the merge-on-read behavior for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#id IcebergTableFromRest#id}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.pathLayout">path_layout</a></code> | <code>str</code> | Specifies the storage layout for the Iceberg table's Parquet files. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.storageSerializationPolicy">storage_serialization_policy</a></code> | <code>str</code> | Specifies the storage serialization policy for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.targetFileSize">target_file_size</a></code> | <code>str</code> | Specifies the target file size (in bytes) used when writing the Iceberg table's Parquet files. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts">IcebergTableFromRestTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_table_name`<sup>Required</sup> <a name="catalog_table_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.catalogTableName"></a>

```python
catalog_table_name: str
```

- *Type:* str

Specifies the name of the table as it appears in the external catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#catalog_table_name IcebergTableFromRest#catalog_table_name}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#database IcebergTableFromRest#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the Iceberg table;

must be unique for the schema in which the Iceberg table is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#name IcebergTableFromRest#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#schema IcebergTableFromRest#schema}

---

##### `auto_refresh`<sup>Optional</sup> <a name="auto_refresh" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.autoRefresh"></a>

```python
auto_refresh: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should periodically refresh the Iceberg table metadata from the external catalog.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#auto_refresh IcebergTableFromRest#auto_refresh}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

Specifies the identifier for the catalog integration to use for the Iceberg table.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#catalog IcebergTableFromRest#catalog}

---

##### `catalog_namespace`<sup>Optional</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.catalogNamespace"></a>

```python
catalog_namespace: str
```

- *Type:* str

Specifies the namespace (or database) in the external catalog that the table belongs to.

If not specified, the catalog integration's default namespace is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#catalog_namespace IcebergTableFromRest#catalog_namespace}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#comment IcebergTableFromRest#comment}

---

##### `enable_iceberg_merge_on_read`<sup>Optional</sup> <a name="enable_iceberg_merge_on_read" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.enableIcebergMergeOnRead"></a>

```python
enable_iceberg_merge_on_read: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether merge-on-read is enabled for the Iceberg table. For more information, check [ENABLE_ICEBERG_MERGE_ON_READ docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-iceberg-merge-on-read).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#enable_iceberg_merge_on_read IcebergTableFromRest#enable_iceberg_merge_on_read}

---

##### `external_volume`<sup>Optional</sup> <a name="external_volume" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.externalVolume"></a>

```python
external_volume: str
```

- *Type:* str

Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#external_volume IcebergTableFromRest#external_volume}

---

##### `iceberg_merge_on_read_behavior`<sup>Optional</sup> <a name="iceberg_merge_on_read_behavior" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.icebergMergeOnReadBehavior"></a>

```python
iceberg_merge_on_read_behavior: str
```

- *Type:* str

Specifies the merge-on-read behavior for the Iceberg table.

Valid values are: [AUTO ENABLED DISABLED]. Cannot be changed after creation. For more information, check [ICEBERG_MERGE_ON_READ_BEHAVIOR docs](https://docs.snowflake.com/en/sql-reference/parameters#iceberg-merge-on-read-behavior).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#iceberg_merge_on_read_behavior IcebergTableFromRest#iceberg_merge_on_read_behavior}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#id IcebergTableFromRest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `path_layout`<sup>Optional</sup> <a name="path_layout" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.pathLayout"></a>

```python
path_layout: str
```

- *Type:* str

Specifies the storage layout for the Iceberg table's Parquet files.

Valid values are: [FLAT HIERARCHICAL]. Cannot be changed after creation. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#path_layout IcebergTableFromRest#path_layout}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table.

For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#replace_invalid_characters IcebergTableFromRest#replace_invalid_characters}

---

##### `storage_serialization_policy`<sup>Optional</sup> <a name="storage_serialization_policy" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.storageSerializationPolicy"></a>

```python
storage_serialization_policy: str
```

- *Type:* str

Specifies the storage serialization policy for the Iceberg table.

Valid values are: [COMPATIBLE OPTIMIZED]. Cannot be changed after creation. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#storage_serialization_policy IcebergTableFromRest#storage_serialization_policy}

---

##### `target_file_size`<sup>Optional</sup> <a name="target_file_size" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.targetFileSize"></a>

```python
target_file_size: str
```

- *Type:* str

Specifies the target file size (in bytes) used when writing the Iceberg table's Parquet files.

Valid values are: [AUTO 16MB 32MB 64MB 128MB]. For more information, check [TARGET_FILE_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#target-file-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#target_file_size IcebergTableFromRest#target_file_size}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestConfig.property.timeouts"></a>

```python
timeouts: IcebergTableFromRestTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts">IcebergTableFromRestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#timeouts IcebergTableFromRest#timeouts}

---

### IcebergTableFromRestDescribeOutput <a name="IcebergTableFromRestDescribeOutput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestDescribeOutput()
```


### IcebergTableFromRestParameters <a name="IcebergTableFromRestParameters" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParameters.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParameters()
```


### IcebergTableFromRestParametersCatalog <a name="IcebergTableFromRestParametersCatalog" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalog.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParametersCatalog()
```


### IcebergTableFromRestParametersEnableIcebergMergeOnRead <a name="IcebergTableFromRestParametersEnableIcebergMergeOnRead" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnRead"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnRead.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnRead()
```


### IcebergTableFromRestParametersExternalVolume <a name="IcebergTableFromRestParametersExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolume.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParametersExternalVolume()
```


### IcebergTableFromRestParametersIcebergMergeOnReadBehavior <a name="IcebergTableFromRestParametersIcebergMergeOnReadBehavior" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehavior.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehavior()
```


### IcebergTableFromRestParametersReplaceInvalidCharacters <a name="IcebergTableFromRestParametersReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharacters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharacters.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharacters()
```


### IcebergTableFromRestParametersStorageSerializationPolicy <a name="IcebergTableFromRestParametersStorageSerializationPolicy" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicy.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicy()
```


### IcebergTableFromRestParametersTargetFileSize <a name="IcebergTableFromRestParametersTargetFileSize" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSize.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParametersTargetFileSize()
```


### IcebergTableFromRestShowOutput <a name="IcebergTableFromRestShowOutput" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestShowOutput()
```


### IcebergTableFromRestShowOutputAutoRefreshStatus <a name="IcebergTableFromRestShowOutputAutoRefreshStatus" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatus.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatus()
```


### IcebergTableFromRestShowOutputPartitionSpecs <a name="IcebergTableFromRestShowOutputPartitionSpecs" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecs.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecs()
```


### IcebergTableFromRestShowOutputPartitionSpecsFields <a name="IcebergTableFromRestShowOutputPartitionSpecsFields" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFields.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFields()
```


### IcebergTableFromRestTimeouts <a name="IcebergTableFromRestTimeouts" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#create IcebergTableFromRest#create}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#delete IcebergTableFromRest#delete}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#read IcebergTableFromRest#read}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#update IcebergTableFromRest#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#create IcebergTableFromRest#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#delete IcebergTableFromRest#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#read IcebergTableFromRest#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_rest#update IcebergTableFromRest#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IcebergTableFromRestDescribeOutputList <a name="IcebergTableFromRestDescribeOutputList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromRestDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromRestDescribeOutputOutputReference <a name="IcebergTableFromRestDescribeOutputOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.check">check</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.isNullable">is_nullable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.nameMapping">name_mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.primaryKey">primary_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.privacyDomain">privacy_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.sourceIcebergType">source_iceberg_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.uniqueKey">unique_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.writeDefault">write_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutput">IcebergTableFromRestDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.check"></a>

```python
check: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `is_nullable`<sup>Required</sup> <a name="is_nullable" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.isNullable"></a>

```python
is_nullable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_mapping`<sup>Required</sup> <a name="name_mapping" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.nameMapping"></a>

```python
name_mapping: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.primaryKey"></a>

```python
primary_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `privacy_domain`<sup>Required</sup> <a name="privacy_domain" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.privacyDomain"></a>

```python
privacy_domain: str
```

- *Type:* str

---

##### `source_iceberg_type`<sup>Required</sup> <a name="source_iceberg_type" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.sourceIcebergType"></a>

```python
source_iceberg_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unique_key`<sup>Required</sup> <a name="unique_key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.uniqueKey"></a>

```python
unique_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `write_default`<sup>Required</sup> <a name="write_default" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.writeDefault"></a>

```python
write_default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromRestDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestDescribeOutput">IcebergTableFromRestDescribeOutput</a>

---


### IcebergTableFromRestParametersCatalogList <a name="IcebergTableFromRestParametersCatalogList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParametersCatalogList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromRestParametersCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromRestParametersCatalogOutputReference <a name="IcebergTableFromRestParametersCatalogOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalog">IcebergTableFromRestParametersCatalog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromRestParametersCatalog
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalog">IcebergTableFromRestParametersCatalog</a>

---


### IcebergTableFromRestParametersEnableIcebergMergeOnReadList <a name="IcebergTableFromRestParametersEnableIcebergMergeOnReadList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference <a name="IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnRead">IcebergTableFromRestParametersEnableIcebergMergeOnRead</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromRestParametersEnableIcebergMergeOnRead
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnRead">IcebergTableFromRestParametersEnableIcebergMergeOnRead</a>

---


### IcebergTableFromRestParametersExternalVolumeList <a name="IcebergTableFromRestParametersExternalVolumeList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromRestParametersExternalVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromRestParametersExternalVolumeOutputReference <a name="IcebergTableFromRestParametersExternalVolumeOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolume">IcebergTableFromRestParametersExternalVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromRestParametersExternalVolume
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolume">IcebergTableFromRestParametersExternalVolume</a>

---


### IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList <a name="IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference <a name="IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehavior">IcebergTableFromRestParametersIcebergMergeOnReadBehavior</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromRestParametersIcebergMergeOnReadBehavior
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehavior">IcebergTableFromRestParametersIcebergMergeOnReadBehavior</a>

---


### IcebergTableFromRestParametersList <a name="IcebergTableFromRestParametersList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromRestParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromRestParametersOutputReference <a name="IcebergTableFromRestParametersOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList">IcebergTableFromRestParametersCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.enableIcebergMergeOnRead">enable_iceberg_merge_on_read</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList">IcebergTableFromRestParametersEnableIcebergMergeOnReadList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.externalVolume">external_volume</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList">IcebergTableFromRestParametersExternalVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.icebergMergeOnReadBehavior">iceberg_merge_on_read_behavior</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList">IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList">IcebergTableFromRestParametersReplaceInvalidCharactersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.storageSerializationPolicy">storage_serialization_policy</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList">IcebergTableFromRestParametersStorageSerializationPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.targetFileSize">target_file_size</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList">IcebergTableFromRestParametersTargetFileSizeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParameters">IcebergTableFromRestParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.catalog"></a>

```python
catalog: IcebergTableFromRestParametersCatalogList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersCatalogList">IcebergTableFromRestParametersCatalogList</a>

---

##### `enable_iceberg_merge_on_read`<sup>Required</sup> <a name="enable_iceberg_merge_on_read" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.enableIcebergMergeOnRead"></a>

```python
enable_iceberg_merge_on_read: IcebergTableFromRestParametersEnableIcebergMergeOnReadList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersEnableIcebergMergeOnReadList">IcebergTableFromRestParametersEnableIcebergMergeOnReadList</a>

---

##### `external_volume`<sup>Required</sup> <a name="external_volume" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.externalVolume"></a>

```python
external_volume: IcebergTableFromRestParametersExternalVolumeList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersExternalVolumeList">IcebergTableFromRestParametersExternalVolumeList</a>

---

##### `iceberg_merge_on_read_behavior`<sup>Required</sup> <a name="iceberg_merge_on_read_behavior" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.icebergMergeOnReadBehavior"></a>

```python
iceberg_merge_on_read_behavior: IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList">IcebergTableFromRestParametersIcebergMergeOnReadBehaviorList</a>

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IcebergTableFromRestParametersReplaceInvalidCharactersList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList">IcebergTableFromRestParametersReplaceInvalidCharactersList</a>

---

##### `storage_serialization_policy`<sup>Required</sup> <a name="storage_serialization_policy" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.storageSerializationPolicy"></a>

```python
storage_serialization_policy: IcebergTableFromRestParametersStorageSerializationPolicyList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList">IcebergTableFromRestParametersStorageSerializationPolicyList</a>

---

##### `target_file_size`<sup>Required</sup> <a name="target_file_size" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.targetFileSize"></a>

```python
target_file_size: IcebergTableFromRestParametersTargetFileSizeList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList">IcebergTableFromRestParametersTargetFileSizeList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromRestParameters
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParameters">IcebergTableFromRestParameters</a>

---


### IcebergTableFromRestParametersReplaceInvalidCharactersList <a name="IcebergTableFromRestParametersReplaceInvalidCharactersList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference <a name="IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharacters">IcebergTableFromRestParametersReplaceInvalidCharacters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharactersOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromRestParametersReplaceInvalidCharacters
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersReplaceInvalidCharacters">IcebergTableFromRestParametersReplaceInvalidCharacters</a>

---


### IcebergTableFromRestParametersStorageSerializationPolicyList <a name="IcebergTableFromRestParametersStorageSerializationPolicyList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromRestParametersStorageSerializationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromRestParametersStorageSerializationPolicyOutputReference <a name="IcebergTableFromRestParametersStorageSerializationPolicyOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicy">IcebergTableFromRestParametersStorageSerializationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromRestParametersStorageSerializationPolicy
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersStorageSerializationPolicy">IcebergTableFromRestParametersStorageSerializationPolicy</a>

---


### IcebergTableFromRestParametersTargetFileSizeList <a name="IcebergTableFromRestParametersTargetFileSizeList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromRestParametersTargetFileSizeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromRestParametersTargetFileSizeOutputReference <a name="IcebergTableFromRestParametersTargetFileSizeOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSize">IcebergTableFromRestParametersTargetFileSize</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSizeOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromRestParametersTargetFileSize
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestParametersTargetFileSize">IcebergTableFromRestParametersTargetFileSize</a>

---


### IcebergTableFromRestShowOutputAutoRefreshStatusList <a name="IcebergTableFromRestShowOutputAutoRefreshStatusList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference <a name="IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId">current_snapshot_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.executionState">execution_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime">last_snapshot_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount">pending_snapshot_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatus">IcebergTableFromRestShowOutputAutoRefreshStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_snapshot_id`<sup>Required</sup> <a name="current_snapshot_id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId"></a>

```python
current_snapshot_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `execution_state`<sup>Required</sup> <a name="execution_state" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.executionState"></a>

```python
execution_state: str
```

- *Type:* str

---

##### `last_snapshot_time`<sup>Required</sup> <a name="last_snapshot_time" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime"></a>

```python
last_snapshot_time: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `pending_snapshot_count`<sup>Required</sup> <a name="pending_snapshot_count" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount"></a>

```python
pending_snapshot_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromRestShowOutputAutoRefreshStatus
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatus">IcebergTableFromRestShowOutputAutoRefreshStatus</a>

---


### IcebergTableFromRestShowOutputList <a name="IcebergTableFromRestShowOutputList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromRestShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromRestShowOutputOutputReference <a name="IcebergTableFromRestShowOutputOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.autoRefreshStatus">auto_refresh_status</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList">IcebergTableFromRestShowOutputAutoRefreshStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.baseLocation">base_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.canWriteMetadata">can_write_metadata</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.catalogSyncName">catalog_sync_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.catalogTableName">catalog_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.currentPartitionSpecId">current_partition_spec_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.externalVolumeName">external_volume_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.icebergTableFormatVersion">iceberg_table_format_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.icebergTableType">iceberg_table_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.nameMapping">name_mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.partitionSpecs">partition_specs</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList">IcebergTableFromRestShowOutputPartitionSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutput">IcebergTableFromRestShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_refresh_status`<sup>Required</sup> <a name="auto_refresh_status" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.autoRefreshStatus"></a>

```python
auto_refresh_status: IcebergTableFromRestShowOutputAutoRefreshStatusList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputAutoRefreshStatusList">IcebergTableFromRestShowOutputAutoRefreshStatusList</a>

---

##### `base_location`<sup>Required</sup> <a name="base_location" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.baseLocation"></a>

```python
base_location: str
```

- *Type:* str

---

##### `can_write_metadata`<sup>Required</sup> <a name="can_write_metadata" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.canWriteMetadata"></a>

```python
can_write_metadata: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `catalog_namespace`<sup>Required</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.catalogNamespace"></a>

```python
catalog_namespace: str
```

- *Type:* str

---

##### `catalog_sync_name`<sup>Required</sup> <a name="catalog_sync_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.catalogSyncName"></a>

```python
catalog_sync_name: str
```

- *Type:* str

---

##### `catalog_table_name`<sup>Required</sup> <a name="catalog_table_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.catalogTableName"></a>

```python
catalog_table_name: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `current_partition_spec_id`<sup>Required</sup> <a name="current_partition_spec_id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.currentPartitionSpecId"></a>

```python
current_partition_spec_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `external_volume_name`<sup>Required</sup> <a name="external_volume_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.externalVolumeName"></a>

```python
external_volume_name: str
```

- *Type:* str

---

##### `iceberg_table_format_version`<sup>Required</sup> <a name="iceberg_table_format_version" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.icebergTableFormatVersion"></a>

```python
iceberg_table_format_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iceberg_table_type`<sup>Required</sup> <a name="iceberg_table_type" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.icebergTableType"></a>

```python
iceberg_table_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_mapping`<sup>Required</sup> <a name="name_mapping" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.nameMapping"></a>

```python
name_mapping: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `partition_specs`<sup>Required</sup> <a name="partition_specs" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.partitionSpecs"></a>

```python
partition_specs: IcebergTableFromRestShowOutputPartitionSpecsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList">IcebergTableFromRestShowOutputPartitionSpecsList</a>

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromRestShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutput">IcebergTableFromRestShowOutput</a>

---


### IcebergTableFromRestShowOutputPartitionSpecsFieldsList <a name="IcebergTableFromRestShowOutputPartitionSpecsFieldsList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference <a name="IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.fieldId">field_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.sourceId">source_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.transform">transform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFields">IcebergTableFromRestShowOutputPartitionSpecsFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_id`<sup>Required</sup> <a name="field_id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.fieldId"></a>

```python
field_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.sourceId"></a>

```python
source_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.transform"></a>

```python
transform: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromRestShowOutputPartitionSpecsFields
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFields">IcebergTableFromRestShowOutputPartitionSpecsFields</a>

---


### IcebergTableFromRestShowOutputPartitionSpecsList <a name="IcebergTableFromRestShowOutputPartitionSpecsList" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromRestShowOutputPartitionSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromRestShowOutputPartitionSpecsOutputReference <a name="IcebergTableFromRestShowOutputPartitionSpecsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList">IcebergTableFromRestShowOutputPartitionSpecsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.property.specId">spec_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecs">IcebergTableFromRestShowOutputPartitionSpecs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.property.fields"></a>

```python
fields: IcebergTableFromRestShowOutputPartitionSpecsFieldsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsFieldsList">IcebergTableFromRestShowOutputPartitionSpecsFieldsList</a>

---

##### `spec_id`<sup>Required</sup> <a name="spec_id" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.property.specId"></a>

```python
spec_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecsOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromRestShowOutputPartitionSpecs
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestShowOutputPartitionSpecs">IcebergTableFromRestShowOutputPartitionSpecs</a>

---


### IcebergTableFromRestTimeoutsOutputReference <a name="IcebergTableFromRestTimeoutsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_rest

icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts">IcebergTableFromRestTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IcebergTableFromRestTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTableFromRest.IcebergTableFromRestTimeouts">IcebergTableFromRestTimeouts</a>

---



