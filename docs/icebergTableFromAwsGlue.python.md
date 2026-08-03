# `icebergTableFromAwsGlue` Submodule <a name="`icebergTableFromAwsGlue` Submodule" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IcebergTableFromAwsGlue <a name="IcebergTableFromAwsGlue" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue snowflake_iceberg_table_from_aws_glue}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlue(
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
  external_volume: str = None,
  id: str = None,
  replace_invalid_characters: bool | IResolvable = None,
  timeouts: IcebergTableFromAwsGlueTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.catalogTableName">catalog_table_name</a></code> | <code>str</code> | Specifies the name of the table as it appears in the AWS Glue catalog. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the Iceberg table; |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.autoRefresh">auto_refresh</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should periodically refresh the Iceberg table metadata from the AWS Glue catalog. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.catalog">catalog</a></code> | <code>str</code> | Specifies the identifier for the catalog integration to use for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | Specifies the namespace (or database) in the AWS Glue catalog that the table belongs to. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.externalVolume">external_volume</a></code> | <code>str</code> | Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#id IcebergTableFromAwsGlue#id}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts">IcebergTableFromAwsGlueTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_table_name`<sup>Required</sup> <a name="catalog_table_name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.catalogTableName"></a>

- *Type:* str

Specifies the name of the table as it appears in the AWS Glue catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#catalog_table_name IcebergTableFromAwsGlue#catalog_table_name}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#database IcebergTableFromAwsGlue#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the Iceberg table;

must be unique for the schema in which the Iceberg table is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#name IcebergTableFromAwsGlue#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#schema IcebergTableFromAwsGlue#schema}

---

##### `auto_refresh`<sup>Optional</sup> <a name="auto_refresh" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.autoRefresh"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should periodically refresh the Iceberg table metadata from the AWS Glue catalog.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#auto_refresh IcebergTableFromAwsGlue#auto_refresh}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.catalog"></a>

- *Type:* str

Specifies the identifier for the catalog integration to use for the Iceberg table.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#catalog IcebergTableFromAwsGlue#catalog}

---

##### `catalog_namespace`<sup>Optional</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.catalogNamespace"></a>

- *Type:* str

Specifies the namespace (or database) in the AWS Glue catalog that the table belongs to.

If not specified, the catalog integration's default namespace is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#catalog_namespace IcebergTableFromAwsGlue#catalog_namespace}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#comment IcebergTableFromAwsGlue#comment}

---

##### `external_volume`<sup>Optional</sup> <a name="external_volume" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.externalVolume"></a>

- *Type:* str

Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#external_volume IcebergTableFromAwsGlue#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#id IcebergTableFromAwsGlue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.replaceInvalidCharacters"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table.

For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#replace_invalid_characters IcebergTableFromAwsGlue#replace_invalid_characters}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts">IcebergTableFromAwsGlueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#timeouts IcebergTableFromAwsGlue#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetAutoRefresh">reset_auto_refresh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetCatalogNamespace">reset_catalog_namespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetExternalVolume">reset_external_volume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#create IcebergTableFromAwsGlue#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#delete IcebergTableFromAwsGlue#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#read IcebergTableFromAwsGlue#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#update IcebergTableFromAwsGlue#update}.

---

##### `reset_auto_refresh` <a name="reset_auto_refresh" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetAutoRefresh"></a>

```python
def reset_auto_refresh() -> None
```

##### `reset_catalog` <a name="reset_catalog" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_catalog_namespace` <a name="reset_catalog_namespace" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetCatalogNamespace"></a>

```python
def reset_catalog_namespace() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_external_volume` <a name="reset_external_volume" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetExternalVolume"></a>

```python
def reset_external_volume() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IcebergTableFromAwsGlue resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isConstruct"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlue.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlue.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlue.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlue.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IcebergTableFromAwsGlue resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IcebergTableFromAwsGlue to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IcebergTableFromAwsGlue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IcebergTableFromAwsGlue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList">IcebergTableFromAwsGlueDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList">IcebergTableFromAwsGlueParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList">IcebergTableFromAwsGlueShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference">IcebergTableFromAwsGlueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.autoRefreshInput">auto_refresh_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogNamespaceInput">catalog_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogTableNameInput">catalog_table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.externalVolumeInput">external_volume_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts">IcebergTableFromAwsGlueTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.autoRefresh">auto_refresh</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogTableName">catalog_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.externalVolume">external_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.schema">schema</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.describeOutput"></a>

```python
describe_output: IcebergTableFromAwsGlueDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList">IcebergTableFromAwsGlueDescribeOutputList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.parameters"></a>

```python
parameters: IcebergTableFromAwsGlueParametersList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList">IcebergTableFromAwsGlueParametersList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.showOutput"></a>

```python
show_output: IcebergTableFromAwsGlueShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList">IcebergTableFromAwsGlueShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.timeouts"></a>

```python
timeouts: IcebergTableFromAwsGlueTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference">IcebergTableFromAwsGlueTimeoutsOutputReference</a>

---

##### `auto_refresh_input`<sup>Optional</sup> <a name="auto_refresh_input" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.autoRefreshInput"></a>

```python
auto_refresh_input: str
```

- *Type:* str

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `catalog_namespace_input`<sup>Optional</sup> <a name="catalog_namespace_input" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogNamespaceInput"></a>

```python
catalog_namespace_input: str
```

- *Type:* str

---

##### `catalog_table_name_input`<sup>Optional</sup> <a name="catalog_table_name_input" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogTableNameInput"></a>

```python
catalog_table_name_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `external_volume_input`<sup>Optional</sup> <a name="external_volume_input" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.externalVolumeInput"></a>

```python
external_volume_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | IcebergTableFromAwsGlueTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts">IcebergTableFromAwsGlueTimeouts</a>

---

##### `auto_refresh`<sup>Required</sup> <a name="auto_refresh" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.autoRefresh"></a>

```python
auto_refresh: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `catalog_namespace`<sup>Required</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogNamespace"></a>

```python
catalog_namespace: str
```

- *Type:* str

---

##### `catalog_table_name`<sup>Required</sup> <a name="catalog_table_name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.catalogTableName"></a>

```python
catalog_table_name: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `external_volume`<sup>Required</sup> <a name="external_volume" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.externalVolume"></a>

```python
external_volume: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlue.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IcebergTableFromAwsGlueConfig <a name="IcebergTableFromAwsGlueConfig" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig(
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
  external_volume: str = None,
  id: str = None,
  replace_invalid_characters: bool | IResolvable = None,
  timeouts: IcebergTableFromAwsGlueTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.catalogTableName">catalog_table_name</a></code> | <code>str</code> | Specifies the name of the table as it appears in the AWS Glue catalog. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the Iceberg table; |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.autoRefresh">auto_refresh</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should periodically refresh the Iceberg table metadata from the AWS Glue catalog. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.catalog">catalog</a></code> | <code>str</code> | Specifies the identifier for the catalog integration to use for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | Specifies the namespace (or database) in the AWS Glue catalog that the table belongs to. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.externalVolume">external_volume</a></code> | <code>str</code> | Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#id IcebergTableFromAwsGlue#id}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts">IcebergTableFromAwsGlueTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `catalog_table_name`<sup>Required</sup> <a name="catalog_table_name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.catalogTableName"></a>

```python
catalog_table_name: str
```

- *Type:* str

Specifies the name of the table as it appears in the AWS Glue catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#catalog_table_name IcebergTableFromAwsGlue#catalog_table_name}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#database IcebergTableFromAwsGlue#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the Iceberg table;

must be unique for the schema in which the Iceberg table is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#name IcebergTableFromAwsGlue#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#schema IcebergTableFromAwsGlue#schema}

---

##### `auto_refresh`<sup>Optional</sup> <a name="auto_refresh" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.autoRefresh"></a>

```python
auto_refresh: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether Snowflake should periodically refresh the Iceberg table metadata from the AWS Glue catalog.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#auto_refresh IcebergTableFromAwsGlue#auto_refresh}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

Specifies the identifier for the catalog integration to use for the Iceberg table.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#catalog IcebergTableFromAwsGlue#catalog}

---

##### `catalog_namespace`<sup>Optional</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.catalogNamespace"></a>

```python
catalog_namespace: str
```

- *Type:* str

Specifies the namespace (or database) in the AWS Glue catalog that the table belongs to.

If not specified, the catalog integration's default namespace is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#catalog_namespace IcebergTableFromAwsGlue#catalog_namespace}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#comment IcebergTableFromAwsGlue#comment}

---

##### `external_volume`<sup>Optional</sup> <a name="external_volume" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.externalVolume"></a>

```python
external_volume: str
```

- *Type:* str

Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#external_volume IcebergTableFromAwsGlue#external_volume}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#id IcebergTableFromAwsGlue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table.

For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#replace_invalid_characters IcebergTableFromAwsGlue#replace_invalid_characters}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueConfig.property.timeouts"></a>

```python
timeouts: IcebergTableFromAwsGlueTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts">IcebergTableFromAwsGlueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#timeouts IcebergTableFromAwsGlue#timeouts}

---

### IcebergTableFromAwsGlueDescribeOutput <a name="IcebergTableFromAwsGlueDescribeOutput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutput()
```


### IcebergTableFromAwsGlueParameters <a name="IcebergTableFromAwsGlueParameters" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParameters.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueParameters()
```


### IcebergTableFromAwsGlueParametersCatalog <a name="IcebergTableFromAwsGlueParametersCatalog" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalog.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalog()
```


### IcebergTableFromAwsGlueParametersExternalVolume <a name="IcebergTableFromAwsGlueParametersExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolume.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolume()
```


### IcebergTableFromAwsGlueParametersReplaceInvalidCharacters <a name="IcebergTableFromAwsGlueParametersReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharacters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharacters.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharacters()
```


### IcebergTableFromAwsGlueShowOutput <a name="IcebergTableFromAwsGlueShowOutput" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutput()
```


### IcebergTableFromAwsGlueShowOutputAutoRefreshStatus <a name="IcebergTableFromAwsGlueShowOutputAutoRefreshStatus" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatus.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatus()
```


### IcebergTableFromAwsGlueShowOutputPartitionSpecs <a name="IcebergTableFromAwsGlueShowOutputPartitionSpecs" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecs.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecs()
```


### IcebergTableFromAwsGlueShowOutputPartitionSpecsFields <a name="IcebergTableFromAwsGlueShowOutputPartitionSpecsFields" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFields.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFields()
```


### IcebergTableFromAwsGlueTimeouts <a name="IcebergTableFromAwsGlueTimeouts" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#create IcebergTableFromAwsGlue#create}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#delete IcebergTableFromAwsGlue#delete}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#read IcebergTableFromAwsGlue#read}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#update IcebergTableFromAwsGlue#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#create IcebergTableFromAwsGlue#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#delete IcebergTableFromAwsGlue#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#read IcebergTableFromAwsGlue#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_aws_glue#update IcebergTableFromAwsGlue#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IcebergTableFromAwsGlueDescribeOutputList <a name="IcebergTableFromAwsGlueDescribeOutputList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromAwsGlueDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromAwsGlueDescribeOutputOutputReference <a name="IcebergTableFromAwsGlueDescribeOutputOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.check">check</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.isNullable">is_nullable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.nameMapping">name_mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.primaryKey">primary_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.privacyDomain">privacy_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.sourceIcebergType">source_iceberg_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.uniqueKey">unique_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.writeDefault">write_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutput">IcebergTableFromAwsGlueDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.check"></a>

```python
check: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `is_nullable`<sup>Required</sup> <a name="is_nullable" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.isNullable"></a>

```python
is_nullable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_mapping`<sup>Required</sup> <a name="name_mapping" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.nameMapping"></a>

```python
name_mapping: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.primaryKey"></a>

```python
primary_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `privacy_domain`<sup>Required</sup> <a name="privacy_domain" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.privacyDomain"></a>

```python
privacy_domain: str
```

- *Type:* str

---

##### `source_iceberg_type`<sup>Required</sup> <a name="source_iceberg_type" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.sourceIcebergType"></a>

```python
source_iceberg_type: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unique_key`<sup>Required</sup> <a name="unique_key" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.uniqueKey"></a>

```python
unique_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `write_default`<sup>Required</sup> <a name="write_default" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.writeDefault"></a>

```python
write_default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromAwsGlueDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueDescribeOutput">IcebergTableFromAwsGlueDescribeOutput</a>

---


### IcebergTableFromAwsGlueParametersCatalogList <a name="IcebergTableFromAwsGlueParametersCatalogList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromAwsGlueParametersCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromAwsGlueParametersCatalogOutputReference <a name="IcebergTableFromAwsGlueParametersCatalogOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalog">IcebergTableFromAwsGlueParametersCatalog</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromAwsGlueParametersCatalog
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalog">IcebergTableFromAwsGlueParametersCatalog</a>

---


### IcebergTableFromAwsGlueParametersExternalVolumeList <a name="IcebergTableFromAwsGlueParametersExternalVolumeList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromAwsGlueParametersExternalVolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromAwsGlueParametersExternalVolumeOutputReference <a name="IcebergTableFromAwsGlueParametersExternalVolumeOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolume">IcebergTableFromAwsGlueParametersExternalVolume</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromAwsGlueParametersExternalVolume
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolume">IcebergTableFromAwsGlueParametersExternalVolume</a>

---


### IcebergTableFromAwsGlueParametersList <a name="IcebergTableFromAwsGlueParametersList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromAwsGlueParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromAwsGlueParametersOutputReference <a name="IcebergTableFromAwsGlueParametersOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.catalog">catalog</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList">IcebergTableFromAwsGlueParametersCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.externalVolume">external_volume</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList">IcebergTableFromAwsGlueParametersExternalVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList">IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParameters">IcebergTableFromAwsGlueParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.catalog"></a>

```python
catalog: IcebergTableFromAwsGlueParametersCatalogList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersCatalogList">IcebergTableFromAwsGlueParametersCatalogList</a>

---

##### `external_volume`<sup>Required</sup> <a name="external_volume" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.externalVolume"></a>

```python
external_volume: IcebergTableFromAwsGlueParametersExternalVolumeList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersExternalVolumeList">IcebergTableFromAwsGlueParametersExternalVolumeList</a>

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList">IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromAwsGlueParameters
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParameters">IcebergTableFromAwsGlueParameters</a>

---


### IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList <a name="IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference <a name="IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharacters">IcebergTableFromAwsGlueParametersReplaceInvalidCharacters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharactersOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromAwsGlueParametersReplaceInvalidCharacters
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueParametersReplaceInvalidCharacters">IcebergTableFromAwsGlueParametersReplaceInvalidCharacters</a>

---


### IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList <a name="IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference <a name="IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId">current_snapshot_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.executionState">execution_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime">last_snapshot_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount">pending_snapshot_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatus">IcebergTableFromAwsGlueShowOutputAutoRefreshStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_snapshot_id`<sup>Required</sup> <a name="current_snapshot_id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId"></a>

```python
current_snapshot_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `execution_state`<sup>Required</sup> <a name="execution_state" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.executionState"></a>

```python
execution_state: str
```

- *Type:* str

---

##### `last_snapshot_time`<sup>Required</sup> <a name="last_snapshot_time" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime"></a>

```python
last_snapshot_time: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `pending_snapshot_count`<sup>Required</sup> <a name="pending_snapshot_count" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount"></a>

```python
pending_snapshot_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromAwsGlueShowOutputAutoRefreshStatus
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatus">IcebergTableFromAwsGlueShowOutputAutoRefreshStatus</a>

---


### IcebergTableFromAwsGlueShowOutputList <a name="IcebergTableFromAwsGlueShowOutputList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromAwsGlueShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromAwsGlueShowOutputOutputReference <a name="IcebergTableFromAwsGlueShowOutputOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.autoRefreshStatus">auto_refresh_status</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList">IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.baseLocation">base_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.canWriteMetadata">can_write_metadata</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogNamespace">catalog_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogSyncName">catalog_sync_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogTableName">catalog_table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.currentPartitionSpecId">current_partition_spec_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.externalVolumeName">external_volume_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.icebergTableFormatVersion">iceberg_table_format_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.icebergTableType">iceberg_table_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.nameMapping">name_mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.partitionSpecs">partition_specs</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList">IcebergTableFromAwsGlueShowOutputPartitionSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutput">IcebergTableFromAwsGlueShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_refresh_status`<sup>Required</sup> <a name="auto_refresh_status" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.autoRefreshStatus"></a>

```python
auto_refresh_status: IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList">IcebergTableFromAwsGlueShowOutputAutoRefreshStatusList</a>

---

##### `base_location`<sup>Required</sup> <a name="base_location" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.baseLocation"></a>

```python
base_location: str
```

- *Type:* str

---

##### `can_write_metadata`<sup>Required</sup> <a name="can_write_metadata" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.canWriteMetadata"></a>

```python
can_write_metadata: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `catalog_namespace`<sup>Required</sup> <a name="catalog_namespace" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogNamespace"></a>

```python
catalog_namespace: str
```

- *Type:* str

---

##### `catalog_sync_name`<sup>Required</sup> <a name="catalog_sync_name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogSyncName"></a>

```python
catalog_sync_name: str
```

- *Type:* str

---

##### `catalog_table_name`<sup>Required</sup> <a name="catalog_table_name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.catalogTableName"></a>

```python
catalog_table_name: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `current_partition_spec_id`<sup>Required</sup> <a name="current_partition_spec_id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.currentPartitionSpecId"></a>

```python
current_partition_spec_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `external_volume_name`<sup>Required</sup> <a name="external_volume_name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.externalVolumeName"></a>

```python
external_volume_name: str
```

- *Type:* str

---

##### `iceberg_table_format_version`<sup>Required</sup> <a name="iceberg_table_format_version" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.icebergTableFormatVersion"></a>

```python
iceberg_table_format_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iceberg_table_type`<sup>Required</sup> <a name="iceberg_table_type" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.icebergTableType"></a>

```python
iceberg_table_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_mapping`<sup>Required</sup> <a name="name_mapping" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.nameMapping"></a>

```python
name_mapping: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `partition_specs`<sup>Required</sup> <a name="partition_specs" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.partitionSpecs"></a>

```python
partition_specs: IcebergTableFromAwsGlueShowOutputPartitionSpecsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList">IcebergTableFromAwsGlueShowOutputPartitionSpecsList</a>

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromAwsGlueShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutput">IcebergTableFromAwsGlueShowOutput</a>

---


### IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList <a name="IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference <a name="IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.fieldId">field_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.sourceId">source_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.transform">transform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFields">IcebergTableFromAwsGlueShowOutputPartitionSpecsFields</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_id`<sup>Required</sup> <a name="field_id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.fieldId"></a>

```python
field_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.sourceId"></a>

```python
source_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.transform"></a>

```python
transform: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromAwsGlueShowOutputPartitionSpecsFields
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFields">IcebergTableFromAwsGlueShowOutputPartitionSpecsFields</a>

---


### IcebergTableFromAwsGlueShowOutputPartitionSpecsList <a name="IcebergTableFromAwsGlueShowOutputPartitionSpecsList" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference <a name="IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList">IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.specId">spec_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecs">IcebergTableFromAwsGlueShowOutputPartitionSpecs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.fields"></a>

```python
fields: IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList">IcebergTableFromAwsGlueShowOutputPartitionSpecsFieldsList</a>

---

##### `spec_id`<sup>Required</sup> <a name="spec_id" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.specId"></a>

```python
spec_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecsOutputReference.property.internalValue"></a>

```python
internal_value: IcebergTableFromAwsGlueShowOutputPartitionSpecs
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueShowOutputPartitionSpecs">IcebergTableFromAwsGlueShowOutputPartitionSpecs</a>

---


### IcebergTableFromAwsGlueTimeoutsOutputReference <a name="IcebergTableFromAwsGlueTimeoutsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import iceberg_table_from_aws_glue

icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts">IcebergTableFromAwsGlueTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IcebergTableFromAwsGlueTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.icebergTableFromAwsGlue.IcebergTableFromAwsGlueTimeouts">IcebergTableFromAwsGlueTimeouts</a>

---



