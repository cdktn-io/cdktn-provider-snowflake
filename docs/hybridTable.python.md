# `hybridTable` Submodule <a name="`hybridTable` Submodule" id="@cdktn/provider-snowflake.hybridTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HybridTable <a name="HybridTable" id="@cdktn/provider-snowflake.hybridTable.HybridTable"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table snowflake_hybrid_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTable(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  column: IResolvable | typing.List[HybridTableColumn],
  database: str,
  name: str,
  primary_key_constraint: HybridTablePrimaryKeyConstraint,
  schema: str,
  comment: str = None,
  data_retention_time_in_days: typing.Union[int, float] = None,
  foreign_key_constraint: IResolvable | typing.List[HybridTableForeignKeyConstraint] = None,
  id: str = None,
  index: IResolvable | typing.List[HybridTableIndex] = None,
  max_data_extension_time_in_days: typing.Union[int, float] = None,
  timeouts: HybridTableTimeouts = None,
  unique_constraint: IResolvable | typing.List[HybridTableUniqueConstraint] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.column">column</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>]</code> | column block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.database">database</a></code> | <code>str</code> | The database in which to create the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.name">name</a></code> | <code>str</code> | Specifies the identifier for the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.primaryKeyConstraint">primary_key_constraint</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a></code> | primary_key_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.schema">schema</a></code> | <code>str</code> | The schema in which to create the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Specifies the retention period for the hybrid table so that Time Travel actions can be performed on historical data. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.foreignKeyConstraint">foreign_key_constraint</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>]</code> | foreign_key_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#id HybridTable#id}. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.index">index</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>]</code> | index block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.maxDataExtensionTimeInDays">max_data_extension_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for the hybrid table to prevent streams on it from becoming stale. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.uniqueConstraint">unique_constraint</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>]</code> | unique_constraint block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.column"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>]

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#column HybridTable#column}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.database"></a>

- *Type:* str

The database in which to create the hybrid table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#database HybridTable#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.name"></a>

- *Type:* str

Specifies the identifier for the hybrid table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

##### `primary_key_constraint`<sup>Required</sup> <a name="primary_key_constraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.primaryKeyConstraint"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a>

primary_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#primary_key_constraint HybridTable#primary_key_constraint}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.schema"></a>

- *Type:* str

The schema in which to create the hybrid table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#schema HybridTable#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the hybrid table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#comment HybridTable#comment}

---

##### `data_retention_time_in_days`<sup>Optional</sup> <a name="data_retention_time_in_days" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.dataRetentionTimeInDays"></a>

- *Type:* typing.Union[int, float]

Specifies the retention period for the hybrid table so that Time Travel actions can be performed on historical data.

For more information, check [DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#data_retention_time_in_days HybridTable#data_retention_time_in_days}

---

##### `foreign_key_constraint`<sup>Optional</sup> <a name="foreign_key_constraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.foreignKeyConstraint"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>]

foreign_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#foreign_key_constraint HybridTable#foreign_key_constraint}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#id HybridTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.index"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>]

index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#index HybridTable#index}

---

##### `max_data_extension_time_in_days`<sup>Optional</sup> <a name="max_data_extension_time_in_days" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.maxDataExtensionTimeInDays"></a>

- *Type:* typing.Union[int, float]

Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for the hybrid table to prevent streams on it from becoming stale.

For more information, check [MAX_DATA_EXTENSION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#max_data_extension_time_in_days HybridTable#max_data_extension_time_in_days}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#timeouts HybridTable#timeouts}

---

##### `unique_constraint`<sup>Optional</sup> <a name="unique_constraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.uniqueConstraint"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>]

unique_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#unique_constraint HybridTable#unique_constraint}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putColumn">put_column</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putForeignKeyConstraint">put_foreign_key_constraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putIndex">put_index</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putPrimaryKeyConstraint">put_primary_key_constraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putUniqueConstraint">put_unique_constraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetDataRetentionTimeInDays">reset_data_retention_time_in_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetForeignKeyConstraint">reset_foreign_key_constraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetIndex">reset_index</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetMaxDataExtensionTimeInDays">reset_max_data_extension_time_in_days</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetUniqueConstraint">reset_unique_constraint</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.hybridTable.HybridTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.hybridTable.HybridTable.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.hybridTable.HybridTable.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.hybridTable.HybridTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.hybridTable.HybridTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.hybridTable.HybridTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.hybridTable.HybridTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.hybridTable.HybridTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.hybridTable.HybridTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.hybridTable.HybridTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.hybridTable.HybridTable.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.hybridTable.HybridTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.hybridTable.HybridTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_column` <a name="put_column" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putColumn"></a>

```python
def put_column(
  value: IResolvable | typing.List[HybridTableColumn]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putColumn.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>]

---

##### `put_foreign_key_constraint` <a name="put_foreign_key_constraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putForeignKeyConstraint"></a>

```python
def put_foreign_key_constraint(
  value: IResolvable | typing.List[HybridTableForeignKeyConstraint]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putForeignKeyConstraint.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>]

---

##### `put_index` <a name="put_index" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putIndex"></a>

```python
def put_index(
  value: IResolvable | typing.List[HybridTableIndex]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putIndex.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>]

---

##### `put_primary_key_constraint` <a name="put_primary_key_constraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putPrimaryKeyConstraint"></a>

```python
def put_primary_key_constraint(
  columns: typing.List[str],
  name: str = None
) -> None
```

###### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putPrimaryKeyConstraint.parameter.columns"></a>

- *Type:* typing.List[str]

The column(s) the constraint applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#columns HybridTable#columns}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putPrimaryKeyConstraint.parameter.name"></a>

- *Type:* str

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#create HybridTable#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#delete HybridTable#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#read HybridTable#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#update HybridTable#update}.

---

##### `put_unique_constraint` <a name="put_unique_constraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putUniqueConstraint"></a>

```python
def put_unique_constraint(
  value: IResolvable | typing.List[HybridTableUniqueConstraint]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putUniqueConstraint.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>]

---

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_data_retention_time_in_days` <a name="reset_data_retention_time_in_days" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetDataRetentionTimeInDays"></a>

```python
def reset_data_retention_time_in_days() -> None
```

##### `reset_foreign_key_constraint` <a name="reset_foreign_key_constraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetForeignKeyConstraint"></a>

```python
def reset_foreign_key_constraint() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_index` <a name="reset_index" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetIndex"></a>

```python
def reset_index() -> None
```

##### `reset_max_data_extension_time_in_days` <a name="reset_max_data_extension_time_in_days" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetMaxDataExtensionTimeInDays"></a>

```python
def reset_max_data_extension_time_in_days() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_unique_constraint` <a name="reset_unique_constraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetUniqueConstraint"></a>

```python
def reset_unique_constraint() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a HybridTable resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isConstruct"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a HybridTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the HybridTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing HybridTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the HybridTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.column">column</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList">HybridTableColumnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.describeOutput">describe_output</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList">HybridTableDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.foreignKeyConstraint">foreign_key_constraint</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList">HybridTableForeignKeyConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.index">index</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList">HybridTableIndexList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.primaryKeyConstraint">primary_key_constraint</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference">HybridTablePrimaryKeyConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.showKeysOutput">show_keys_output</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList">HybridTableShowKeysOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList">HybridTableShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference">HybridTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.uniqueConstraint">unique_constraint</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList">HybridTableUniqueConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.columnInput">column_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.dataRetentionTimeInDaysInput">data_retention_time_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.foreignKeyConstraintInput">foreign_key_constraint_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.indexInput">index_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.maxDataExtensionTimeInDaysInput">max_data_extension_time_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.primaryKeyConstraintInput">primary_key_constraint_input</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.uniqueConstraintInput">unique_constraint_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.maxDataExtensionTimeInDays">max_data_extension_time_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.schema">schema</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.column"></a>

```python
column: HybridTableColumnList
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList">HybridTableColumnList</a>

---

##### `describe_output`<sup>Required</sup> <a name="describe_output" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.describeOutput"></a>

```python
describe_output: HybridTableDescribeOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList">HybridTableDescribeOutputList</a>

---

##### `foreign_key_constraint`<sup>Required</sup> <a name="foreign_key_constraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.foreignKeyConstraint"></a>

```python
foreign_key_constraint: HybridTableForeignKeyConstraintList
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList">HybridTableForeignKeyConstraintList</a>

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.index"></a>

```python
index: HybridTableIndexList
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList">HybridTableIndexList</a>

---

##### `primary_key_constraint`<sup>Required</sup> <a name="primary_key_constraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.primaryKeyConstraint"></a>

```python
primary_key_constraint: HybridTablePrimaryKeyConstraintOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference">HybridTablePrimaryKeyConstraintOutputReference</a>

---

##### `show_keys_output`<sup>Required</sup> <a name="show_keys_output" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.showKeysOutput"></a>

```python
show_keys_output: HybridTableShowKeysOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList">HybridTableShowKeysOutputList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.showOutput"></a>

```python
show_output: HybridTableShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList">HybridTableShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.timeouts"></a>

```python
timeouts: HybridTableTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference">HybridTableTimeoutsOutputReference</a>

---

##### `unique_constraint`<sup>Required</sup> <a name="unique_constraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.uniqueConstraint"></a>

```python
unique_constraint: HybridTableUniqueConstraintList
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList">HybridTableUniqueConstraintList</a>

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.columnInput"></a>

```python
column_input: IResolvable | typing.List[HybridTableColumn]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `data_retention_time_in_days_input`<sup>Optional</sup> <a name="data_retention_time_in_days_input" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.dataRetentionTimeInDaysInput"></a>

```python
data_retention_time_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `foreign_key_constraint_input`<sup>Optional</sup> <a name="foreign_key_constraint_input" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.foreignKeyConstraintInput"></a>

```python
foreign_key_constraint_input: IResolvable | typing.List[HybridTableForeignKeyConstraint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_input`<sup>Optional</sup> <a name="index_input" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.indexInput"></a>

```python
index_input: IResolvable | typing.List[HybridTableIndex]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>]

---

##### `max_data_extension_time_in_days_input`<sup>Optional</sup> <a name="max_data_extension_time_in_days_input" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.maxDataExtensionTimeInDaysInput"></a>

```python
max_data_extension_time_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `primary_key_constraint_input`<sup>Optional</sup> <a name="primary_key_constraint_input" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.primaryKeyConstraintInput"></a>

```python
primary_key_constraint_input: HybridTablePrimaryKeyConstraint
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a>

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | HybridTableTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a>

---

##### `unique_constraint_input`<sup>Optional</sup> <a name="unique_constraint_input" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.uniqueConstraintInput"></a>

```python
unique_constraint_input: IResolvable | typing.List[HybridTableUniqueConstraint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `data_retention_time_in_days`<sup>Required</sup> <a name="data_retention_time_in_days" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.dataRetentionTimeInDays"></a>

```python
data_retention_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_data_extension_time_in_days`<sup>Required</sup> <a name="max_data_extension_time_in_days" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.maxDataExtensionTimeInDays"></a>

```python
max_data_extension_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### HybridTableColumn <a name="HybridTableColumn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableColumn(
  name: str,
  type: str,
  collate: str = None,
  comment: str = None,
  default: HybridTableColumnDefault = None,
  not_null: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.name">name</a></code> | <code>str</code> | Column name. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.type">type</a></code> | <code>str</code> | Column type. See [Snowflake data types](https://docs.snowflake.com/en/sql-reference-data-types) for supported values. Example: VARCHAR(256), NUMBER(38,0). |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.collate">collate</a></code> | <code>str</code> | Column collation specification, e.g. en-ci. Case-insensitive (en-ci and EN-CI are treated as equal). |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.comment">comment</a></code> | <code>str</code> | Column-level comment. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.default">default</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a></code> | default block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.notNull">not_null</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether to restrict the column to NOT NULL values. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.name"></a>

```python
name: str
```

- *Type:* str

Column name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.type"></a>

```python
type: str
```

- *Type:* str

Column type. See [Snowflake data types](https://docs.snowflake.com/en/sql-reference-data-types) for supported values. Example: VARCHAR(256), NUMBER(38,0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#type HybridTable#type}

---

##### `collate`<sup>Optional</sup> <a name="collate" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.collate"></a>

```python
collate: str
```

- *Type:* str

Column collation specification, e.g. en-ci. Case-insensitive (en-ci and EN-CI are treated as equal).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#collate HybridTable#collate}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.comment"></a>

```python
comment: str
```

- *Type:* str

Column-level comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#comment HybridTable#comment}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.default"></a>

```python
default: HybridTableColumnDefault
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a>

default block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#default HybridTable#default}

---

##### `not_null`<sup>Optional</sup> <a name="not_null" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.notNull"></a>

```python
not_null: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether to restrict the column to NOT NULL values.

Changing this on an existing column forces recreation. Primary key columns must set this to true because NOT NULL is implied by the primary key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#not_null HybridTable#not_null}

---

### HybridTableColumnDefault <a name="HybridTableColumnDefault" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableColumnDefault(
  constant: str = None,
  expression: str = None,
  sequence: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.constant">constant</a></code> | <code>str</code> | A constant default value for the column. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.expression">expression</a></code> | <code>str</code> | A SQL expression default value for the column. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.sequence">sequence</a></code> | <code>str</code> | The default sequence for the column (uses NEXTVAL). |

---

##### `constant`<sup>Optional</sup> <a name="constant" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.constant"></a>

```python
constant: str
```

- *Type:* str

A constant default value for the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#constant HybridTable#constant}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.expression"></a>

```python
expression: str
```

- *Type:* str

A SQL expression default value for the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#expression HybridTable#expression}

---

##### `sequence`<sup>Optional</sup> <a name="sequence" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.sequence"></a>

```python
sequence: str
```

- *Type:* str

The default sequence for the column (uses NEXTVAL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#sequence HybridTable#sequence}

---

### HybridTableConfig <a name="HybridTableConfig" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  column: IResolvable | typing.List[HybridTableColumn],
  database: str,
  name: str,
  primary_key_constraint: HybridTablePrimaryKeyConstraint,
  schema: str,
  comment: str = None,
  data_retention_time_in_days: typing.Union[int, float] = None,
  foreign_key_constraint: IResolvable | typing.List[HybridTableForeignKeyConstraint] = None,
  id: str = None,
  index: IResolvable | typing.List[HybridTableIndex] = None,
  max_data_extension_time_in_days: typing.Union[int, float] = None,
  timeouts: HybridTableTimeouts = None,
  unique_constraint: IResolvable | typing.List[HybridTableUniqueConstraint] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.column">column</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>]</code> | column block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.database">database</a></code> | <code>str</code> | The database in which to create the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.name">name</a></code> | <code>str</code> | Specifies the identifier for the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.primaryKeyConstraint">primary_key_constraint</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a></code> | primary_key_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.schema">schema</a></code> | <code>str</code> | The schema in which to create the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Specifies the retention period for the hybrid table so that Time Travel actions can be performed on historical data. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.foreignKeyConstraint">foreign_key_constraint</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>]</code> | foreign_key_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#id HybridTable#id}. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.index">index</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>]</code> | index block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.maxDataExtensionTimeInDays">max_data_extension_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for the hybrid table to prevent streams on it from becoming stale. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.uniqueConstraint">unique_constraint</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>]</code> | unique_constraint block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.column"></a>

```python
column: IResolvable | typing.List[HybridTableColumn]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>]

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#column HybridTable#column}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The database in which to create the hybrid table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#database HybridTable#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Specifies the identifier for the hybrid table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

##### `primary_key_constraint`<sup>Required</sup> <a name="primary_key_constraint" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.primaryKeyConstraint"></a>

```python
primary_key_constraint: HybridTablePrimaryKeyConstraint
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a>

primary_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#primary_key_constraint HybridTable#primary_key_constraint}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

The schema in which to create the hybrid table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#schema HybridTable#schema}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the hybrid table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#comment HybridTable#comment}

---

##### `data_retention_time_in_days`<sup>Optional</sup> <a name="data_retention_time_in_days" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.dataRetentionTimeInDays"></a>

```python
data_retention_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the retention period for the hybrid table so that Time Travel actions can be performed on historical data.

For more information, check [DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#data_retention_time_in_days HybridTable#data_retention_time_in_days}

---

##### `foreign_key_constraint`<sup>Optional</sup> <a name="foreign_key_constraint" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.foreignKeyConstraint"></a>

```python
foreign_key_constraint: IResolvable | typing.List[HybridTableForeignKeyConstraint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>]

foreign_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#foreign_key_constraint HybridTable#foreign_key_constraint}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#id HybridTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.index"></a>

```python
index: IResolvable | typing.List[HybridTableIndex]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>]

index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#index HybridTable#index}

---

##### `max_data_extension_time_in_days`<sup>Optional</sup> <a name="max_data_extension_time_in_days" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.maxDataExtensionTimeInDays"></a>

```python
max_data_extension_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for the hybrid table to prevent streams on it from becoming stale.

For more information, check [MAX_DATA_EXTENSION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#max_data_extension_time_in_days HybridTable#max_data_extension_time_in_days}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.timeouts"></a>

```python
timeouts: HybridTableTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#timeouts HybridTable#timeouts}

---

##### `unique_constraint`<sup>Optional</sup> <a name="unique_constraint" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.uniqueConstraint"></a>

```python
unique_constraint: IResolvable | typing.List[HybridTableUniqueConstraint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>]

unique_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#unique_constraint HybridTable#unique_constraint}

---

### HybridTableDescribeOutput <a name="HybridTableDescribeOutput" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableDescribeOutput()
```


### HybridTableForeignKeyConstraint <a name="HybridTableForeignKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableForeignKeyConstraint(
  columns: typing.List[str],
  ref_columns: typing.List[str],
  table_name: str,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.columns">columns</a></code> | <code>typing.List[str]</code> | The local column(s) the foreign key is defined on. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.refColumns">ref_columns</a></code> | <code>typing.List[str]</code> | The column(s) in the referenced table that the foreign key references. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.tableName">table_name</a></code> | <code>str</code> | The table that the foreign key references. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.name">name</a></code> | <code>str</code> | Name of the constraint. |

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.columns"></a>

```python
columns: typing.List[str]
```

- *Type:* typing.List[str]

The local column(s) the foreign key is defined on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#columns HybridTable#columns}

---

##### `ref_columns`<sup>Required</sup> <a name="ref_columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.refColumns"></a>

```python
ref_columns: typing.List[str]
```

- *Type:* typing.List[str]

The column(s) in the referenced table that the foreign key references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#ref_columns HybridTable#ref_columns}

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

The table that the foreign key references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#table_name HybridTable#table_name}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

### HybridTableIndex <a name="HybridTableIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndex.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableIndex(
  columns: typing.List[str],
  name: str,
  include_columns: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.columns">columns</a></code> | <code>typing.List[str]</code> | Index key columns, in order. Order is semantically meaningful. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.name">name</a></code> | <code>str</code> | Name of the secondary index. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.includeColumns">include_columns</a></code> | <code>typing.List[str]</code> | Columns included in the index payload via INCLUDE (...). Order carries no meaning. |

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.columns"></a>

```python
columns: typing.List[str]
```

- *Type:* typing.List[str]

Index key columns, in order. Order is semantically meaningful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#columns HybridTable#columns}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the secondary index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

##### `include_columns`<sup>Optional</sup> <a name="include_columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.includeColumns"></a>

```python
include_columns: typing.List[str]
```

- *Type:* typing.List[str]

Columns included in the index payload via INCLUDE (...). Order carries no meaning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#include_columns HybridTable#include_columns}

---

### HybridTablePrimaryKeyConstraint <a name="HybridTablePrimaryKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTablePrimaryKeyConstraint(
  columns: typing.List[str],
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint.property.columns">columns</a></code> | <code>typing.List[str]</code> | The column(s) the constraint applies to. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint.property.name">name</a></code> | <code>str</code> | Name of the constraint. |

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint.property.columns"></a>

```python
columns: typing.List[str]
```

- *Type:* typing.List[str]

The column(s) the constraint applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#columns HybridTable#columns}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

### HybridTableShowKeysOutput <a name="HybridTableShowKeysOutput" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableShowKeysOutput()
```


### HybridTableShowOutput <a name="HybridTableShowOutput" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableShowOutput()
```


### HybridTableTimeouts <a name="HybridTableTimeouts" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#create HybridTable#create}. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#delete HybridTable#delete}. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#read HybridTable#read}. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#update HybridTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#create HybridTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#delete HybridTable#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#read HybridTable#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#update HybridTable#update}.

---

### HybridTableUniqueConstraint <a name="HybridTableUniqueConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableUniqueConstraint(
  columns: typing.List[str],
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint.property.columns">columns</a></code> | <code>typing.List[str]</code> | The column(s) the constraint applies to. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint.property.name">name</a></code> | <code>str</code> | Name of the constraint. |

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint.property.columns"></a>

```python
columns: typing.List[str]
```

- *Type:* typing.List[str]

The column(s) the constraint applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#columns HybridTable#columns}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

## Classes <a name="Classes" id="Classes"></a>

### HybridTableColumnDefaultOutputReference <a name="HybridTableColumnDefaultOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableColumnDefaultOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetConstant">reset_constant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetSequence">reset_sequence</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_constant` <a name="reset_constant" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetConstant"></a>

```python
def reset_constant() -> None
```

##### `reset_expression` <a name="reset_expression" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_sequence` <a name="reset_sequence" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetSequence"></a>

```python
def reset_sequence() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.constantInput">constant_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.sequenceInput">sequence_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.constant">constant</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.sequence">sequence</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `constant_input`<sup>Optional</sup> <a name="constant_input" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.constantInput"></a>

```python
constant_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `sequence_input`<sup>Optional</sup> <a name="sequence_input" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.sequenceInput"></a>

```python
sequence_input: str
```

- *Type:* str

---

##### `constant`<sup>Required</sup> <a name="constant" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.constant"></a>

```python
constant: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `sequence`<sup>Required</sup> <a name="sequence" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.sequence"></a>

```python
sequence: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.internalValue"></a>

```python
internal_value: HybridTableColumnDefault
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a>

---


### HybridTableColumnList <a name="HybridTableColumnList" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableColumnList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HybridTableColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[HybridTableColumn]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>]

---


### HybridTableColumnOutputReference <a name="HybridTableColumnOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableColumnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.putDefault">put_default</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetCollate">reset_collate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetNotNull">reset_not_null</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_default` <a name="put_default" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.putDefault"></a>

```python
def put_default(
  constant: str = None,
  expression: str = None,
  sequence: str = None
) -> None
```

###### `constant`<sup>Optional</sup> <a name="constant" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.putDefault.parameter.constant"></a>

- *Type:* str

A constant default value for the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#constant HybridTable#constant}

---

###### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.putDefault.parameter.expression"></a>

- *Type:* str

A SQL expression default value for the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#expression HybridTable#expression}

---

###### `sequence`<sup>Optional</sup> <a name="sequence" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.putDefault.parameter.sequence"></a>

- *Type:* str

The default sequence for the column (uses NEXTVAL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#sequence HybridTable#sequence}

---

##### `reset_collate` <a name="reset_collate" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetCollate"></a>

```python
def reset_collate() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_not_null` <a name="reset_not_null" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetNotNull"></a>

```python
def reset_not_null() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.default">default</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference">HybridTableColumnDefaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.collateInput">collate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.defaultInput">default_input</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.notNullInput">not_null_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.collate">collate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.notNull">not_null</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.default"></a>

```python
default: HybridTableColumnDefaultOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference">HybridTableColumnDefaultOutputReference</a>

---

##### `collate_input`<sup>Optional</sup> <a name="collate_input" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.collateInput"></a>

```python
collate_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.defaultInput"></a>

```python
default_input: HybridTableColumnDefault
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `not_null_input`<sup>Optional</sup> <a name="not_null_input" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.notNullInput"></a>

```python
not_null_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `collate`<sup>Required</sup> <a name="collate" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.collate"></a>

```python
collate: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `not_null`<sup>Required</sup> <a name="not_null" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.notNull"></a>

```python
not_null: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | HybridTableColumn
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>

---


### HybridTableDescribeOutputList <a name="HybridTableDescribeOutputList" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableDescribeOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HybridTableDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### HybridTableDescribeOutputOutputReference <a name="HybridTableDescribeOutputOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableDescribeOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.check">check</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.collation">collation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.isNullable">is_nullable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.policyName">policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.primaryKey">primary_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.privacyDomain">privacy_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.schemaEvolutionRecord">schema_evolution_record</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.uniqueKey">unique_key</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutput">HybridTableDescribeOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.check"></a>

```python
check: str
```

- *Type:* str

---

##### `collation`<sup>Required</sup> <a name="collation" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.collation"></a>

```python
collation: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `is_nullable`<sup>Required</sup> <a name="is_nullable" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.isNullable"></a>

```python
is_nullable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_name`<sup>Required</sup> <a name="policy_name" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.policyName"></a>

```python
policy_name: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.primaryKey"></a>

```python
primary_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `privacy_domain`<sup>Required</sup> <a name="privacy_domain" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.privacyDomain"></a>

```python
privacy_domain: str
```

- *Type:* str

---

##### `schema_evolution_record`<sup>Required</sup> <a name="schema_evolution_record" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.schemaEvolutionRecord"></a>

```python
schema_evolution_record: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unique_key`<sup>Required</sup> <a name="unique_key" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.uniqueKey"></a>

```python
unique_key: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.internalValue"></a>

```python
internal_value: HybridTableDescribeOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutput">HybridTableDescribeOutput</a>

---


### HybridTableForeignKeyConstraintList <a name="HybridTableForeignKeyConstraintList" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableForeignKeyConstraintList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HybridTableForeignKeyConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[HybridTableForeignKeyConstraint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>]

---


### HybridTableForeignKeyConstraintOutputReference <a name="HybridTableForeignKeyConstraintOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableForeignKeyConstraintOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.columnsInput">columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.refColumnsInput">ref_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.tableNameInput">table_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.columns">columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.refColumns">ref_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns_input`<sup>Optional</sup> <a name="columns_input" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.columnsInput"></a>

```python
columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ref_columns_input`<sup>Optional</sup> <a name="ref_columns_input" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.refColumnsInput"></a>

```python
ref_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `table_name_input`<sup>Optional</sup> <a name="table_name_input" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.tableNameInput"></a>

```python
table_name_input: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.columns"></a>

```python
columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ref_columns`<sup>Required</sup> <a name="ref_columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.refColumns"></a>

```python
ref_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | HybridTableForeignKeyConstraint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>

---


### HybridTableIndexList <a name="HybridTableIndexList" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableIndexList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HybridTableIndexOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[HybridTableIndex]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>]

---


### HybridTableIndexOutputReference <a name="HybridTableIndexOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableIndexOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.resetIncludeColumns">reset_include_columns</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_columns` <a name="reset_include_columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.resetIncludeColumns"></a>

```python
def reset_include_columns() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.columnsInput">columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.includeColumnsInput">include_columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.columns">columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.includeColumns">include_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns_input`<sup>Optional</sup> <a name="columns_input" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.columnsInput"></a>

```python
columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_columns_input`<sup>Optional</sup> <a name="include_columns_input" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.includeColumnsInput"></a>

```python
include_columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.columns"></a>

```python
columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_columns`<sup>Required</sup> <a name="include_columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.includeColumns"></a>

```python
include_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | HybridTableIndex
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>

---


### HybridTablePrimaryKeyConstraintOutputReference <a name="HybridTablePrimaryKeyConstraintOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTablePrimaryKeyConstraintOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.columnsInput">columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.columns">columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns_input`<sup>Optional</sup> <a name="columns_input" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.columnsInput"></a>

```python
columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.columns"></a>

```python
columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.internalValue"></a>

```python
internal_value: HybridTablePrimaryKeyConstraint
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a>

---


### HybridTableShowKeysOutputList <a name="HybridTableShowKeysOutputList" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableShowKeysOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HybridTableShowKeysOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### HybridTableShowKeysOutputOutputReference <a name="HybridTableShowKeysOutputOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableShowKeysOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.columns">columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.deleteRule">delete_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.referencedColumns">referenced_columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.referencedTable">referenced_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.updateRule">update_rule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutput">HybridTableShowKeysOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.columns"></a>

```python
columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `delete_rule`<sup>Required</sup> <a name="delete_rule" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.deleteRule"></a>

```python
delete_rule: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `referenced_columns`<sup>Required</sup> <a name="referenced_columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.referencedColumns"></a>

```python
referenced_columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `referenced_table`<sup>Required</sup> <a name="referenced_table" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.referencedTable"></a>

```python
referenced_table: str
```

- *Type:* str

---

##### `update_rule`<sup>Required</sup> <a name="update_rule" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.updateRule"></a>

```python
update_rule: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.internalValue"></a>

```python
internal_value: HybridTableShowKeysOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutput">HybridTableShowKeysOutput</a>

---


### HybridTableShowOutputList <a name="HybridTableShowOutputList" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HybridTableShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### HybridTableShowOutputOutputReference <a name="HybridTableShowOutputOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.bytes">bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.rows">rows</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutput">HybridTableShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bytes`<sup>Required</sup> <a name="bytes" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.bytes"></a>

```python
bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.rows"></a>

```python
rows: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: HybridTableShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutput">HybridTableShowOutput</a>

---


### HybridTableTimeoutsOutputReference <a name="HybridTableTimeoutsOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | HybridTableTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a>

---


### HybridTableUniqueConstraintList <a name="HybridTableUniqueConstraintList" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableUniqueConstraintList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> HybridTableUniqueConstraintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[HybridTableUniqueConstraint]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>]

---


### HybridTableUniqueConstraintOutputReference <a name="HybridTableUniqueConstraintOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import hybrid_table

hybridTable.HybridTableUniqueConstraintOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.columnsInput">columns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.columns">columns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `columns_input`<sup>Optional</sup> <a name="columns_input" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.columnsInput"></a>

```python
columns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.columns"></a>

```python
columns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | HybridTableUniqueConstraint
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>

---



