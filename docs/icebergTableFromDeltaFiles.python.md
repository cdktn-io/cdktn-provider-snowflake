# `icebergTableFromDeltaFiles` Submodule <a name="`icebergTableFromDeltaFiles` Submodule" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IcebergTableFromDeltaFiles <a name="IcebergTableFromDeltaFiles" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files snowflake_iceberg_table_from_delta_files}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  base_location: str,
  database: str,
  name: str,
  schema: str,
  auto_refresh: str = None,
  catalog: str = None,
  comment: str = None,
  external_volume: str = None,
  id: str = None,
  replace_invalid_characters: bool | IResolvable = None,
  timeouts: IcebergTableFromDeltaFilesTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.baseLocation">base_location</a></code> | <code>str</code> | Specifies the relative path of the Delta table's directory in the external volume. Cannot be changed after creation. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the Iceberg table; |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.autoRefresh">auto_refresh</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should automatically refresh the Iceberg table metadata when new files are added to the Delta table's directory. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.catalog">catalog</a></code> | <code>str</code> | Specifies the identifier for the catalog integration to use for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.externalVolume">external_volume</a></code> | <code>str</code> | Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#id IcebergTableFromDeltaFiles#id}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `base_location`<sup>Required</sup> <a name="base_location" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.baseLocation"></a>

- *Type:* str

Specifies the relative path of the Delta table's directory in the external volume. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#base_location IcebergTableFromDeltaFiles#base_location}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#database IcebergTableFromDeltaFiles#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the Iceberg table;

must be unique for the schema in which the Iceberg table is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#name IcebergTableFromDeltaFiles#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#schema IcebergTableFromDeltaFiles#schema}

---

##### `auto_refresh`<sup>Optional</sup> <a name="auto_refresh" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.autoRefresh"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should automatically refresh the Iceberg table metadata when new files are added to the Delta table's directory.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#auto_refresh IcebergTableFromDeltaFiles#auto_refresh}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.catalog"></a>

- *Type:* str

Specifies the identifier for the catalog integration to use for the Iceberg table.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#catalog IcebergTableFromDeltaFiles#catalog}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#comment IcebergTableFromDeltaFiles#comment}

---

##### `external_volume`<sup>Optional</sup> <a name="external_volume" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.externalVolume"></a>

- *Type:* str

Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#external_volume IcebergTableFromDeltaFiles#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#id IcebergTableFromDeltaFiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.replaceInvalidCharacters"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table.

For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#replace_invalid_characters IcebergTableFromDeltaFiles#replace_invalid_characters}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#timeouts IcebergTableFromDeltaFiles#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetAutoRefresh">reset_auto_refresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetExternalVolume">reset_external_volume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#create IcebergTableFromDeltaFiles#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#delete IcebergTableFromDeltaFiles#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#read IcebergTableFromDeltaFiles#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#update IcebergTableFromDeltaFiles#update}.

---

##### `reset_auto_refresh` <a name="reset_auto_refresh" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetAutoRefresh"></a>

```python
def reset_auto_refresh() -> None
```

##### `reset_catalog` <a name="reset_catalog" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_external_volume` <a name="reset_external_volume" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetExternalVolume"></a>

```python
def reset_external_volume() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IcebergTableFromDeltaFiles resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isConstruct"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IcebergTableFromDeltaFiles resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IcebergTableFromDeltaFiles to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IcebergTableFromDeltaFiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IcebergTableFromDeltaFiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList">IcebergTableFromDeltaFilesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList">IcebergTableFromDeltaFilesParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList">IcebergTableFromDeltaFilesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference">IcebergTableFromDeltaFilesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.autoRefreshInput">auto_refresh_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.baseLocationInput">base_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.externalVolumeInput">external_volume_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.autoRefresh">auto_refresh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.baseLocation">base_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.externalVolume">external_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.schema">schema</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.describeOutput"></a>

```python
describe_output: IcebergTableFromDeltaFilesDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList">IcebergTableFromDeltaFilesDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.parameters"></a>

```python
parameters: IcebergTableFromDeltaFilesParametersList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList">IcebergTableFromDeltaFilesParametersList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.showOutput"></a>

```python
show_output: IcebergTableFromDeltaFilesShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList">IcebergTableFromDeltaFilesShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.timeouts"></a>

```python
timeouts: IcebergTableFromDeltaFilesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference">IcebergTableFromDeltaFilesTimeoutsOutputReference</a>

---

##### `auto_refresh_input`<sup>Optional</sup> <a name="auto_refresh_input" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.autoRefreshInput"></a>

```python
auto_refresh_input: str
```

- *Type:* str

---

##### `base_location_input`<sup>Optional</sup> <a name="base_location_input" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.baseLocationInput"></a>

```python
base_location_input: str
```

- *Type:* str

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `external_volume_input`<sup>Optional</sup> <a name="external_volume_input" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.externalVolumeInput"></a>

```python
external_volume_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | IcebergTableFromDeltaFilesTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a>

---

##### `auto_refresh`<sup>Required</sup> <a name="auto_refresh" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.autoRefresh"></a>

```python
auto_refresh: str
```

- *Type:* str

---

##### `base_location`<sup>Required</sup> <a name="base_location" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.baseLocation"></a>

```python
base_location: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `external_volume`<sup>Required</sup> <a name="external_volume" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.externalVolume"></a>

```python
external_volume: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFiles.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IcebergTableFromDeltaFilesConfig <a name="IcebergTableFromDeltaFilesConfig" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  base_location: str,
  database: str,
  name: str,
  schema: str,
  auto_refresh: str = None,
  catalog: str = None,
  comment: str = None,
  external_volume: str = None,
  id: str = None,
  replace_invalid_characters: bool | IResolvable = None,
  timeouts: IcebergTableFromDeltaFilesTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.baseLocation">base_location</a></code> | <code>str</code> | Specifies the relative path of the Delta table's directory in the external volume. Cannot be changed after creation. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the Iceberg table; |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.autoRefresh">auto_refresh</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should automatically refresh the Iceberg table metadata when new files are added to the Delta table's directory. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.catalog">catalog</a></code> | <code>str</code> | Specifies the identifier for the catalog integration to use for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.externalVolume">external_volume</a></code> | <code>str</code> | Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#id IcebergTableFromDeltaFiles#id}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `base_location`<sup>Required</sup> <a name="base_location" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.baseLocation"></a>

```python
base_location: str
```

- *Type:* str

Specifies the relative path of the Delta table's directory in the external volume. Cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#base_location IcebergTableFromDeltaFiles#base_location}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#database IcebergTableFromDeltaFiles#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the Iceberg table;

must be unique for the schema in which the Iceberg table is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#name IcebergTableFromDeltaFiles#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#schema IcebergTableFromDeltaFiles#schema}

---

##### `auto_refresh`<sup>Optional</sup> <a name="auto_refresh" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.autoRefresh"></a>

```python
auto_refresh: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should automatically refresh the Iceberg table metadata when new files are added to the Delta table's directory.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#auto_refresh IcebergTableFromDeltaFiles#auto_refresh}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

Specifies the identifier for the catalog integration to use for the Iceberg table.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#catalog IcebergTableFromDeltaFiles#catalog}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#comment IcebergTableFromDeltaFiles#comment}

---

##### `external_volume`<sup>Optional</sup> <a name="external_volume" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.externalVolume"></a>

```python
external_volume: str
```

- *Type:* str

Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#external_volume IcebergTableFromDeltaFiles#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#id IcebergTableFromDeltaFiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table.

For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#replace_invalid_characters IcebergTableFromDeltaFiles#replace_invalid_characters}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesConfig.property.timeouts"></a>

```python
timeouts: IcebergTableFromDeltaFilesTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#timeouts IcebergTableFromDeltaFiles#timeouts}

---

### IcebergTableFromDeltaFilesDescribeOutput <a name="IcebergTableFromDeltaFilesDescribeOutput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutput()
```


### IcebergTableFromDeltaFilesParameters <a name="IcebergTableFromDeltaFilesParameters" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParameters.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParameters()
```


### IcebergTableFromDeltaFilesParametersCatalog <a name="IcebergTableFromDeltaFilesParametersCatalog" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalog.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalog()
```


### IcebergTableFromDeltaFilesParametersExternalVolume <a name="IcebergTableFromDeltaFilesParametersExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolume.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolume()
```


### IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters <a name="IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters()
```


### IcebergTableFromDeltaFilesShowOutput <a name="IcebergTableFromDeltaFilesShowOutput" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutput()
```


### IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus <a name="IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus()
```


### IcebergTableFromDeltaFilesShowOutputPartitionSpecs <a name="IcebergTableFromDeltaFilesShowOutputPartitionSpecs" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecs.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecs()
```


### IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields <a name="IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields()
```


### IcebergTableFromDeltaFilesTimeouts <a name="IcebergTableFromDeltaFilesTimeouts" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#create IcebergTableFromDeltaFiles#create}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#delete IcebergTableFromDeltaFiles#delete}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#read IcebergTableFromDeltaFiles#read}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#update IcebergTableFromDeltaFiles#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#create IcebergTableFromDeltaFiles#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#delete IcebergTableFromDeltaFiles#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#read IcebergTableFromDeltaFiles#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_delta_files#update IcebergTableFromDeltaFiles#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IcebergTableFromDeltaFilesDescribeOutputList <a name="IcebergTableFromDeltaFilesDescribeOutputList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromDeltaFilesDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromDeltaFilesDescribeOutputOutputReference <a name="IcebergTableFromDeltaFilesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.check">check</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.isNullable">is_nullable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.nameMapping">name_mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.primaryKey">primary_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.privacyDomain">privacy_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.sourceIcebergType">source_iceberg_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.uniqueKey">unique_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.writeDefault">write_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutput">IcebergTableFromDeltaFilesDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.check"></a>

```python
check: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `is_nullable`<sup>Required</sup> <a name="is_nullable" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.isNullable"></a>

```python
is_nullable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_mapping`<sup>Required</sup> <a name="name_mapping" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.nameMapping"></a>

```python
name_mapping: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.primaryKey"></a>

```python
primary_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `privacy_domain`<sup>Required</sup> <a name="privacy_domain" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.privacyDomain"></a>

```python
privacy_domain: str
```

- *Type:* str

---

##### `source_iceberg_type`<sup>Required</sup> <a name="source_iceberg_type" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.sourceIcebergType"></a>

```python
source_iceberg_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unique_key`<sup>Required</sup> <a name="unique_key" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.uniqueKey"></a>

```python
unique_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `write_default`<sup>Required</sup> <a name="write_default" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.writeDefault"></a>

```python
write_default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromDeltaFilesDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesDescribeOutput">IcebergTableFromDeltaFilesDescribeOutput</a>

---


### IcebergTableFromDeltaFilesParametersCatalogList <a name="IcebergTableFromDeltaFilesParametersCatalogList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromDeltaFilesParametersCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromDeltaFilesParametersCatalogOutputReference <a name="IcebergTableFromDeltaFilesParametersCatalogOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalog">IcebergTableFromDeltaFilesParametersCatalog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromDeltaFilesParametersCatalog
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalog">IcebergTableFromDeltaFilesParametersCatalog</a>

---


### IcebergTableFromDeltaFilesParametersExternalVolumeList <a name="IcebergTableFromDeltaFilesParametersExternalVolumeList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference <a name="IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolume">IcebergTableFromDeltaFilesParametersExternalVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromDeltaFilesParametersExternalVolume
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolume">IcebergTableFromDeltaFilesParametersExternalVolume</a>

---


### IcebergTableFromDeltaFilesParametersList <a name="IcebergTableFromDeltaFilesParametersList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromDeltaFilesParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromDeltaFilesParametersOutputReference <a name="IcebergTableFromDeltaFilesParametersOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList">IcebergTableFromDeltaFilesParametersCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.externalVolume">external_volume</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList">IcebergTableFromDeltaFilesParametersExternalVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList">IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParameters">IcebergTableFromDeltaFilesParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.catalog"></a>

```python
catalog: IcebergTableFromDeltaFilesParametersCatalogList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersCatalogList">IcebergTableFromDeltaFilesParametersCatalogList</a>

---

##### `external_volume`<sup>Required</sup> <a name="external_volume" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.externalVolume"></a>

```python
external_volume: IcebergTableFromDeltaFilesParametersExternalVolumeList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersExternalVolumeList">IcebergTableFromDeltaFilesParametersExternalVolumeList</a>

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList">IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromDeltaFilesParameters
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParameters">IcebergTableFromDeltaFilesParameters</a>

---


### IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList <a name="IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference <a name="IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters">IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharactersOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters">IcebergTableFromDeltaFilesParametersReplaceInvalidCharacters</a>

---


### IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList <a name="IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference <a name="IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId">current_snapshot_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.executionState">execution_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime">last_snapshot_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount">pending_snapshot_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus">IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_snapshot_id`<sup>Required</sup> <a name="current_snapshot_id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId"></a>

```python
current_snapshot_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `execution_state`<sup>Required</sup> <a name="execution_state" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.executionState"></a>

```python
execution_state: str
```

- *Type:* str

---

##### `last_snapshot_time`<sup>Required</sup> <a name="last_snapshot_time" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime"></a>

```python
last_snapshot_time: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `pending_snapshot_count`<sup>Required</sup> <a name="pending_snapshot_count" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount"></a>

```python
pending_snapshot_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus">IcebergTableFromDeltaFilesShowOutputAutoRefreshStatus</a>

---


### IcebergTableFromDeltaFilesShowOutputList <a name="IcebergTableFromDeltaFilesShowOutputList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromDeltaFilesShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromDeltaFilesShowOutputOutputReference <a name="IcebergTableFromDeltaFilesShowOutputOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.autoRefreshStatus">auto_refresh_status</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList">IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.baseLocation">base_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.canWriteMetadata">can_write_metadata</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogSyncName">catalog_sync_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogTableName">catalog_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.currentPartitionSpecId">current_partition_spec_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.externalVolumeName">external_volume_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.icebergTableFormatVersion">iceberg_table_format_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.icebergTableType">iceberg_table_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.nameMapping">name_mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.partitionSpecs">partition_specs</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList">IcebergTableFromDeltaFilesShowOutputPartitionSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutput">IcebergTableFromDeltaFilesShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_refresh_status`<sup>Required</sup> <a name="auto_refresh_status" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.autoRefreshStatus"></a>

```python
auto_refresh_status: IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList">IcebergTableFromDeltaFilesShowOutputAutoRefreshStatusList</a>

---

##### `base_location`<sup>Required</sup> <a name="base_location" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.baseLocation"></a>

```python
base_location: str
```

- *Type:* str

---

##### `can_write_metadata`<sup>Required</sup> <a name="can_write_metadata" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.canWriteMetadata"></a>

```python
can_write_metadata: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `catalog_namespace`<sup>Required</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogNamespace"></a>

```python
catalog_namespace: str
```

- *Type:* str

---

##### `catalog_sync_name`<sup>Required</sup> <a name="catalog_sync_name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogSyncName"></a>

```python
catalog_sync_name: str
```

- *Type:* str

---

##### `catalog_table_name`<sup>Required</sup> <a name="catalog_table_name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.catalogTableName"></a>

```python
catalog_table_name: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `current_partition_spec_id`<sup>Required</sup> <a name="current_partition_spec_id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.currentPartitionSpecId"></a>

```python
current_partition_spec_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `external_volume_name`<sup>Required</sup> <a name="external_volume_name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.externalVolumeName"></a>

```python
external_volume_name: str
```

- *Type:* str

---

##### `iceberg_table_format_version`<sup>Required</sup> <a name="iceberg_table_format_version" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.icebergTableFormatVersion"></a>

```python
iceberg_table_format_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iceberg_table_type`<sup>Required</sup> <a name="iceberg_table_type" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.icebergTableType"></a>

```python
iceberg_table_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_mapping`<sup>Required</sup> <a name="name_mapping" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.nameMapping"></a>

```python
name_mapping: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `partition_specs`<sup>Required</sup> <a name="partition_specs" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.partitionSpecs"></a>

```python
partition_specs: IcebergTableFromDeltaFilesShowOutputPartitionSpecsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList">IcebergTableFromDeltaFilesShowOutputPartitionSpecsList</a>

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromDeltaFilesShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutput">IcebergTableFromDeltaFilesShowOutput</a>

---


### IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList <a name="IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference <a name="IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.fieldId">field_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.sourceId">source_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.transform">transform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields">IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_id`<sup>Required</sup> <a name="field_id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.fieldId"></a>

```python
field_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.sourceId"></a>

```python
source_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.transform"></a>

```python
transform: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields">IcebergTableFromDeltaFilesShowOutputPartitionSpecsFields</a>

---


### IcebergTableFromDeltaFilesShowOutputPartitionSpecsList <a name="IcebergTableFromDeltaFilesShowOutputPartitionSpecsList" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference <a name="IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList">IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.specId">spec_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecs">IcebergTableFromDeltaFilesShowOutputPartitionSpecs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.fields"></a>

```python
fields: IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList">IcebergTableFromDeltaFilesShowOutputPartitionSpecsFieldsList</a>

---

##### `spec_id`<sup>Required</sup> <a name="spec_id" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.specId"></a>

```python
spec_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecsOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromDeltaFilesShowOutputPartitionSpecs
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesShowOutputPartitionSpecs">IcebergTableFromDeltaFilesShowOutputPartitionSpecs</a>

---


### IcebergTableFromDeltaFilesTimeoutsOutputReference <a name="IcebergTableFromDeltaFilesTimeoutsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_delta_files

icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IcebergTableFromDeltaFilesTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTableFromDeltaFiles.IcebergTableFromDeltaFilesTimeouts">IcebergTableFromDeltaFilesTimeouts</a>

---



