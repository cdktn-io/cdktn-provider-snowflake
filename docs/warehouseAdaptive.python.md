# `warehouseAdaptive` Submodule <a name="`warehouseAdaptive` Submodule" id="@cdktn/provider-snowflake.warehouseAdaptive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WarehouseAdaptive <a name="WarehouseAdaptive" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive snowflake_warehouse_adaptive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_adaptive

warehouseAdaptive.WarehouseAdaptive(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  comment: str = None,
  id: str = None,
  max_query_performance_level: str = None,
  query_throughput_multiplier: typing.Union[int, float] = None,
  statement_queued_timeout_in_seconds: typing.Union[int, float] = None,
  statement_timeout_in_seconds: typing.Union[int, float] = None,
  timeouts: WarehouseAdaptiveTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.name">name</a></code> | <code>str</code> | Identifier for the adaptive warehouse; |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the adaptive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#id WarehouseAdaptive#id}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.maxQueryPerformanceLevel">max_query_performance_level</a></code> | <code>str</code> | Specifies the maximum query performance level for the adaptive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.queryThroughputMultiplier">query_throughput_multiplier</a></code> | <code>typing.Union[int, float]</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the query throughput multiplier for the adaptive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.statementQueuedTimeoutInSeconds">statement_queued_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on a warehouse before it is canceled by the system. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.statementTimeoutInSeconds">statement_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts">WarehouseAdaptiveTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.name"></a>

- *Type:* str

Identifier for the adaptive warehouse;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#name WarehouseAdaptive#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the adaptive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#comment WarehouseAdaptive#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#id WarehouseAdaptive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_query_performance_level`<sup>Optional</sup> <a name="max_query_performance_level" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.maxQueryPerformanceLevel"></a>

- *Type:* str

Specifies the maximum query performance level for the adaptive warehouse.

Determines the initial compute capacity. Valid values are (case-insensitive): `XSMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `XXLARGE` | `XXXLARGE` | `X4LARGE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#max_query_performance_level WarehouseAdaptive#max_query_performance_level}

---

##### `query_throughput_multiplier`<sup>Optional</sup> <a name="query_throughput_multiplier" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.queryThroughputMultiplier"></a>

- *Type:* typing.Union[int, float]

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the query throughput multiplier for the adaptive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#query_throughput_multiplier WarehouseAdaptive#query_throughput_multiplier}

---

##### `statement_queued_timeout_in_seconds`<sup>Optional</sup> <a name="statement_queued_timeout_in_seconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.statementQueuedTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on a warehouse before it is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#statement_queued_timeout_in_seconds WarehouseAdaptive#statement_queued_timeout_in_seconds}

---

##### `statement_timeout_in_seconds`<sup>Optional</sup> <a name="statement_timeout_in_seconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.statementTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#statement_timeout_in_seconds WarehouseAdaptive#statement_timeout_in_seconds}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts">WarehouseAdaptiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#timeouts WarehouseAdaptive#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetMaxQueryPerformanceLevel">reset_max_query_performance_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetQueryThroughputMultiplier">reset_query_throughput_multiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetStatementQueuedTimeoutInSeconds">reset_statement_queued_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetStatementTimeoutInSeconds">reset_statement_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#create WarehouseAdaptive#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#delete WarehouseAdaptive#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#read WarehouseAdaptive#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#update WarehouseAdaptive#update}.

---

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_query_performance_level` <a name="reset_max_query_performance_level" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetMaxQueryPerformanceLevel"></a>

```python
def reset_max_query_performance_level() -> None
```

##### `reset_query_throughput_multiplier` <a name="reset_query_throughput_multiplier" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetQueryThroughputMultiplier"></a>

```python
def reset_query_throughput_multiplier() -> None
```

##### `reset_statement_queued_timeout_in_seconds` <a name="reset_statement_queued_timeout_in_seconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetStatementQueuedTimeoutInSeconds"></a>

```python
def reset_statement_queued_timeout_in_seconds() -> None
```

##### `reset_statement_timeout_in_seconds` <a name="reset_statement_timeout_in_seconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetStatementTimeoutInSeconds"></a>

```python
def reset_statement_timeout_in_seconds() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WarehouseAdaptive resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.isConstruct"></a>

```python
from cdktn_provider_snowflake import warehouse_adaptive

warehouseAdaptive.WarehouseAdaptive.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import warehouse_adaptive

warehouseAdaptive.WarehouseAdaptive.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import warehouse_adaptive

warehouseAdaptive.WarehouseAdaptive.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import warehouse_adaptive

warehouseAdaptive.WarehouseAdaptive.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WarehouseAdaptive resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WarehouseAdaptive to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WarehouseAdaptive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WarehouseAdaptive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList">WarehouseAdaptiveParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList">WarehouseAdaptiveShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference">WarehouseAdaptiveTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.warehouseType">warehouse_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.maxQueryPerformanceLevelInput">max_query_performance_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.queryThroughputMultiplierInput">query_throughput_multiplier_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.statementQueuedTimeoutInSecondsInput">statement_queued_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.statementTimeoutInSecondsInput">statement_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts">WarehouseAdaptiveTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.maxQueryPerformanceLevel">max_query_performance_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.queryThroughputMultiplier">query_throughput_multiplier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.statementQueuedTimeoutInSeconds">statement_queued_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.statementTimeoutInSeconds">statement_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.parameters"></a>

```python
parameters: WarehouseAdaptiveParametersList
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList">WarehouseAdaptiveParametersList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.showOutput"></a>

```python
show_output: WarehouseAdaptiveShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList">WarehouseAdaptiveShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.timeouts"></a>

```python
timeouts: WarehouseAdaptiveTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference">WarehouseAdaptiveTimeoutsOutputReference</a>

---

##### `warehouse_type`<sup>Required</sup> <a name="warehouse_type" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.warehouseType"></a>

```python
warehouse_type: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_query_performance_level_input`<sup>Optional</sup> <a name="max_query_performance_level_input" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.maxQueryPerformanceLevelInput"></a>

```python
max_query_performance_level_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `query_throughput_multiplier_input`<sup>Optional</sup> <a name="query_throughput_multiplier_input" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.queryThroughputMultiplierInput"></a>

```python
query_throughput_multiplier_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `statement_queued_timeout_in_seconds_input`<sup>Optional</sup> <a name="statement_queued_timeout_in_seconds_input" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.statementQueuedTimeoutInSecondsInput"></a>

```python
statement_queued_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `statement_timeout_in_seconds_input`<sup>Optional</sup> <a name="statement_timeout_in_seconds_input" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.statementTimeoutInSecondsInput"></a>

```python
statement_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | WarehouseAdaptiveTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts">WarehouseAdaptiveTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_query_performance_level`<sup>Required</sup> <a name="max_query_performance_level" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.maxQueryPerformanceLevel"></a>

```python
max_query_performance_level: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `query_throughput_multiplier`<sup>Required</sup> <a name="query_throughput_multiplier" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.queryThroughputMultiplier"></a>

```python
query_throughput_multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `statement_queued_timeout_in_seconds`<sup>Required</sup> <a name="statement_queued_timeout_in_seconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.statementQueuedTimeoutInSeconds"></a>

```python
statement_queued_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `statement_timeout_in_seconds`<sup>Required</sup> <a name="statement_timeout_in_seconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.statementTimeoutInSeconds"></a>

```python
statement_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WarehouseAdaptiveConfig <a name="WarehouseAdaptiveConfig" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_adaptive

warehouseAdaptive.WarehouseAdaptiveConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  comment: str = None,
  id: str = None,
  max_query_performance_level: str = None,
  query_throughput_multiplier: typing.Union[int, float] = None,
  statement_queued_timeout_in_seconds: typing.Union[int, float] = None,
  statement_timeout_in_seconds: typing.Union[int, float] = None,
  timeouts: WarehouseAdaptiveTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.name">name</a></code> | <code>str</code> | Identifier for the adaptive warehouse; |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the adaptive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#id WarehouseAdaptive#id}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.maxQueryPerformanceLevel">max_query_performance_level</a></code> | <code>str</code> | Specifies the maximum query performance level for the adaptive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.queryThroughputMultiplier">query_throughput_multiplier</a></code> | <code>typing.Union[int, float]</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the query throughput multiplier for the adaptive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.statementQueuedTimeoutInSeconds">statement_queued_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on a warehouse before it is canceled by the system. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.statementTimeoutInSeconds">statement_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts">WarehouseAdaptiveTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Identifier for the adaptive warehouse;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#name WarehouseAdaptive#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the adaptive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#comment WarehouseAdaptive#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#id WarehouseAdaptive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_query_performance_level`<sup>Optional</sup> <a name="max_query_performance_level" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.maxQueryPerformanceLevel"></a>

```python
max_query_performance_level: str
```

- *Type:* str

Specifies the maximum query performance level for the adaptive warehouse.

Determines the initial compute capacity. Valid values are (case-insensitive): `XSMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `XXLARGE` | `XXXLARGE` | `X4LARGE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#max_query_performance_level WarehouseAdaptive#max_query_performance_level}

---

##### `query_throughput_multiplier`<sup>Optional</sup> <a name="query_throughput_multiplier" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.queryThroughputMultiplier"></a>

```python
query_throughput_multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the query throughput multiplier for the adaptive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#query_throughput_multiplier WarehouseAdaptive#query_throughput_multiplier}

---

##### `statement_queued_timeout_in_seconds`<sup>Optional</sup> <a name="statement_queued_timeout_in_seconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.statementQueuedTimeoutInSeconds"></a>

```python
statement_queued_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on a warehouse before it is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#statement_queued_timeout_in_seconds WarehouseAdaptive#statement_queued_timeout_in_seconds}

---

##### `statement_timeout_in_seconds`<sup>Optional</sup> <a name="statement_timeout_in_seconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.statementTimeoutInSeconds"></a>

```python
statement_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#statement_timeout_in_seconds WarehouseAdaptive#statement_timeout_in_seconds}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.timeouts"></a>

```python
timeouts: WarehouseAdaptiveTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts">WarehouseAdaptiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#timeouts WarehouseAdaptive#timeouts}

---

### WarehouseAdaptiveParameters <a name="WarehouseAdaptiveParameters" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParameters.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_adaptive

warehouseAdaptive.WarehouseAdaptiveParameters()
```


### WarehouseAdaptiveParametersStatementQueuedTimeoutInSeconds <a name="WarehouseAdaptiveParametersStatementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSeconds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSeconds.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_adaptive

warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSeconds()
```


### WarehouseAdaptiveParametersStatementTimeoutInSeconds <a name="WarehouseAdaptiveParametersStatementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSeconds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSeconds.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_adaptive

warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSeconds()
```


### WarehouseAdaptiveShowOutput <a name="WarehouseAdaptiveShowOutput" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_adaptive

warehouseAdaptive.WarehouseAdaptiveShowOutput()
```


### WarehouseAdaptiveTimeouts <a name="WarehouseAdaptiveTimeouts" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_adaptive

warehouseAdaptive.WarehouseAdaptiveTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#create WarehouseAdaptive#create}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#delete WarehouseAdaptive#delete}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#read WarehouseAdaptive#read}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#update WarehouseAdaptive#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#create WarehouseAdaptive#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#delete WarehouseAdaptive#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#read WarehouseAdaptive#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.15.0/docs/resources/warehouse_adaptive#update WarehouseAdaptive#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WarehouseAdaptiveParametersList <a name="WarehouseAdaptiveParametersList" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_adaptive

warehouseAdaptive.WarehouseAdaptiveParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WarehouseAdaptiveParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WarehouseAdaptiveParametersOutputReference <a name="WarehouseAdaptiveParametersOutputReference" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_adaptive

warehouseAdaptive.WarehouseAdaptiveParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.property.statementQueuedTimeoutInSeconds">statement_queued_timeout_in_seconds</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList">WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.property.statementTimeoutInSeconds">statement_timeout_in_seconds</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList">WarehouseAdaptiveParametersStatementTimeoutInSecondsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParameters">WarehouseAdaptiveParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `statement_queued_timeout_in_seconds`<sup>Required</sup> <a name="statement_queued_timeout_in_seconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.property.statementQueuedTimeoutInSeconds"></a>

```python
statement_queued_timeout_in_seconds: WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList">WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList</a>

---

##### `statement_timeout_in_seconds`<sup>Required</sup> <a name="statement_timeout_in_seconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.property.statementTimeoutInSeconds"></a>

```python
statement_timeout_in_seconds: WarehouseAdaptiveParametersStatementTimeoutInSecondsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList">WarehouseAdaptiveParametersStatementTimeoutInSecondsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.property.internalValue"></a>

```python
internal_value: WarehouseAdaptiveParameters
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParameters">WarehouseAdaptiveParameters</a>

---


### WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList <a name="WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_adaptive

warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference <a name="WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_adaptive

warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSeconds">WarehouseAdaptiveParametersStatementQueuedTimeoutInSeconds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.internalValue"></a>

```python
internal_value: WarehouseAdaptiveParametersStatementQueuedTimeoutInSeconds
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSeconds">WarehouseAdaptiveParametersStatementQueuedTimeoutInSeconds</a>

---


### WarehouseAdaptiveParametersStatementTimeoutInSecondsList <a name="WarehouseAdaptiveParametersStatementTimeoutInSecondsList" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_adaptive

warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference <a name="WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_adaptive

warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSeconds">WarehouseAdaptiveParametersStatementTimeoutInSeconds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.internalValue"></a>

```python
internal_value: WarehouseAdaptiveParametersStatementTimeoutInSeconds
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSeconds">WarehouseAdaptiveParametersStatementTimeoutInSeconds</a>

---


### WarehouseAdaptiveShowOutputList <a name="WarehouseAdaptiveShowOutputList" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_adaptive

warehouseAdaptive.WarehouseAdaptiveShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WarehouseAdaptiveShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WarehouseAdaptiveShowOutputOutputReference <a name="WarehouseAdaptiveShowOutputOutputReference" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_adaptive

warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.autoResume">auto_resume</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.available">available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.isCurrent">is_current</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.isDefault">is_default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.maxQueryPerformanceLevel">max_query_performance_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.other">other</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.provisioning">provisioning</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.queryThroughputMultiplier">query_throughput_multiplier</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.queued">queued</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.quiescing">quiescing</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.resourceMonitor">resource_monitor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.resumedOn">resumed_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.running">running</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.updatedOn">updated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutput">WarehouseAdaptiveShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_resume`<sup>Required</sup> <a name="auto_resume" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.autoResume"></a>

```python
auto_resume: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `available`<sup>Required</sup> <a name="available" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.available"></a>

```python
available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `is_current`<sup>Required</sup> <a name="is_current" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.isCurrent"></a>

```python
is_current: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `max_query_performance_level`<sup>Required</sup> <a name="max_query_performance_level" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.maxQueryPerformanceLevel"></a>

```python
max_query_performance_level: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `other`<sup>Required</sup> <a name="other" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.other"></a>

```python
other: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `provisioning`<sup>Required</sup> <a name="provisioning" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.provisioning"></a>

```python
provisioning: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `query_throughput_multiplier`<sup>Required</sup> <a name="query_throughput_multiplier" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.queryThroughputMultiplier"></a>

```python
query_throughput_multiplier: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `queued`<sup>Required</sup> <a name="queued" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.queued"></a>

```python
queued: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `quiescing`<sup>Required</sup> <a name="quiescing" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.quiescing"></a>

```python
quiescing: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_monitor`<sup>Required</sup> <a name="resource_monitor" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.resourceMonitor"></a>

```python
resource_monitor: str
```

- *Type:* str

---

##### `resumed_on`<sup>Required</sup> <a name="resumed_on" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.resumedOn"></a>

```python
resumed_on: str
```

- *Type:* str

---

##### `running`<sup>Required</sup> <a name="running" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.running"></a>

```python
running: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_on`<sup>Required</sup> <a name="updated_on" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.updatedOn"></a>

```python
updated_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: WarehouseAdaptiveShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutput">WarehouseAdaptiveShowOutput</a>

---


### WarehouseAdaptiveTimeoutsOutputReference <a name="WarehouseAdaptiveTimeoutsOutputReference" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_adaptive

warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts">WarehouseAdaptiveTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WarehouseAdaptiveTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts">WarehouseAdaptiveTimeouts</a>

---



