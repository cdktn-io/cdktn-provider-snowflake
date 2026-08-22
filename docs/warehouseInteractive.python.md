# `warehouseInteractive` Submodule <a name="`warehouseInteractive` Submodule" id="@cdktn/provider-snowflake.warehouseInteractive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WarehouseInteractive <a name="WarehouseInteractive" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive snowflake_warehouse_interactive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractive(
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
  auto_resume: str = None,
  auto_suspend: typing.Union[int, float] = None,
  comment: str = None,
  fallback_warehouse: str = None,
  id: str = None,
  initially_suspended: bool | IResolvable = None,
  max_cluster_count: typing.Union[int, float] = None,
  max_concurrency_level: typing.Union[int, float] = None,
  min_cluster_count: typing.Union[int, float] = None,
  resource_monitor: str = None,
  statement_queued_timeout_in_seconds: typing.Union[int, float] = None,
  statement_timeout_in_seconds: typing.Union[int, float] = None,
  tables: typing.List[str] = None,
  timeouts: WarehouseInteractiveTimeouts = None,
  warehouse_size: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.name">name</a></code> | <code>str</code> | Identifier for the interactive warehouse; |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.autoResume">auto_resume</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically resume an interactive warehouse when a SQL statement (e.g. query) is submitted to it. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.autoSuspend">auto_suspend</a></code> | <code>typing.Union[int, float]</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of seconds of inactivity after which an interactive warehouse is automatically suspended. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Specifies a comment for the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.fallbackWarehouse">fallback_warehouse</a></code> | <code>str</code> | Specifies the name of the fallback warehouse for the interactive warehouse. For more information about this resource, see [docs](./warehouse). |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#id WarehouseInteractive#id}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.initiallySuspended">initially_suspended</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the interactive warehouse is created initially in the ‘Suspended’ state. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.maxClusterCount">max_cluster_count</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum number of server clusters for the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.maxConcurrencyLevel">max_concurrency_level</a></code> | <code>typing.Union[int, float]</code> | Object parameter that specifies the concurrency level for SQL statements (i.e. queries and DML) executed by an interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.minClusterCount">min_cluster_count</a></code> | <code>typing.Union[int, float]</code> | Specifies the minimum number of server clusters for the interactive warehouse (only applies to multi-cluster warehouses). |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.resourceMonitor">resource_monitor</a></code> | <code>str</code> | Specifies the name of a resource monitor that is explicitly assigned to the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.statementQueuedTimeoutInSeconds">statement_queued_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on an interactive warehouse before it is canceled by the system. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.statementTimeoutInSeconds">statement_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.tables">tables</a></code> | <code>typing.List[str]</code> | Specifies the fully qualified names of the tables associated with the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.warehouseSize">warehouse_size</a></code> | <code>str</code> | Specifies the size of the interactive warehouse. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.name"></a>

- *Type:* str

Identifier for the interactive warehouse;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#name WarehouseInteractive#name}

---

##### `auto_resume`<sup>Optional</sup> <a name="auto_resume" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.autoResume"></a>

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically resume an interactive warehouse when a SQL statement (e.g. query) is submitted to it. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#auto_resume WarehouseInteractive#auto_resume}

---

##### `auto_suspend`<sup>Optional</sup> <a name="auto_suspend" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.autoSuspend"></a>

- *Type:* typing.Union[int, float]

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of seconds of inactivity after which an interactive warehouse is automatically suspended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#auto_suspend WarehouseInteractive#auto_suspend}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.comment"></a>

- *Type:* str

Specifies a comment for the interactive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#comment WarehouseInteractive#comment}

---

##### `fallback_warehouse`<sup>Optional</sup> <a name="fallback_warehouse" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.fallbackWarehouse"></a>

- *Type:* str

Specifies the name of the fallback warehouse for the interactive warehouse. For more information about this resource, see [docs](./warehouse).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#fallback_warehouse WarehouseInteractive#fallback_warehouse}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#id WarehouseInteractive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initially_suspended`<sup>Optional</sup> <a name="initially_suspended" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.initiallySuspended"></a>

- *Type:* bool | cdktn.IResolvable

Specifies whether the interactive warehouse is created initially in the ‘Suspended’ state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#initially_suspended WarehouseInteractive#initially_suspended}

---

##### `max_cluster_count`<sup>Optional</sup> <a name="max_cluster_count" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.maxClusterCount"></a>

- *Type:* typing.Union[int, float]

Specifies the maximum number of server clusters for the interactive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#max_cluster_count WarehouseInteractive#max_cluster_count}

---

##### `max_concurrency_level`<sup>Optional</sup> <a name="max_concurrency_level" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.maxConcurrencyLevel"></a>

- *Type:* typing.Union[int, float]

Object parameter that specifies the concurrency level for SQL statements (i.e. queries and DML) executed by an interactive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#max_concurrency_level WarehouseInteractive#max_concurrency_level}

---

##### `min_cluster_count`<sup>Optional</sup> <a name="min_cluster_count" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.minClusterCount"></a>

- *Type:* typing.Union[int, float]

Specifies the minimum number of server clusters for the interactive warehouse (only applies to multi-cluster warehouses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#min_cluster_count WarehouseInteractive#min_cluster_count}

---

##### `resource_monitor`<sup>Optional</sup> <a name="resource_monitor" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.resourceMonitor"></a>

- *Type:* str

Specifies the name of a resource monitor that is explicitly assigned to the interactive warehouse.

For more information about this resource, see [docs](./resource_monitor).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#resource_monitor WarehouseInteractive#resource_monitor}

---

##### `statement_queued_timeout_in_seconds`<sup>Optional</sup> <a name="statement_queued_timeout_in_seconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.statementQueuedTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on an interactive warehouse before it is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#statement_queued_timeout_in_seconds WarehouseInteractive#statement_queued_timeout_in_seconds}

---

##### `statement_timeout_in_seconds`<sup>Optional</sup> <a name="statement_timeout_in_seconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.statementTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#statement_timeout_in_seconds WarehouseInteractive#statement_timeout_in_seconds}

---

##### `tables`<sup>Optional</sup> <a name="tables" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.tables"></a>

- *Type:* typing.List[str]

Specifies the fully qualified names of the tables associated with the interactive warehouse.

Changes are applied incrementally (ADD TABLES / DROP TABLES) rather than by full re-association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#tables WarehouseInteractive#tables}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#timeouts WarehouseInteractive#timeouts}

---

##### `warehouse_size`<sup>Optional</sup> <a name="warehouse_size" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.warehouseSize"></a>

- *Type:* str

Specifies the size of the interactive warehouse.

Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. Note: changing the size briefly suspends and resumes the warehouse to apply the resize (an interactive warehouse cannot be resized while running); removing the size from config will result in the resource recreation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#warehouse_size WarehouseInteractive#warehouse_size}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetAutoResume">reset_auto_resume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetAutoSuspend">reset_auto_suspend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetFallbackWarehouse">reset_fallback_warehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetInitiallySuspended">reset_initially_suspended</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMaxClusterCount">reset_max_cluster_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMaxConcurrencyLevel">reset_max_concurrency_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMinClusterCount">reset_min_cluster_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetResourceMonitor">reset_resource_monitor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetStatementQueuedTimeoutInSeconds">reset_statement_queued_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetStatementTimeoutInSeconds">reset_statement_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetTables">reset_tables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetWarehouseSize">reset_warehouse_size</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#create WarehouseInteractive#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#delete WarehouseInteractive#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#read WarehouseInteractive#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#update WarehouseInteractive#update}.

---

##### `reset_auto_resume` <a name="reset_auto_resume" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetAutoResume"></a>

```python
def reset_auto_resume() -> None
```

##### `reset_auto_suspend` <a name="reset_auto_suspend" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetAutoSuspend"></a>

```python
def reset_auto_suspend() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_fallback_warehouse` <a name="reset_fallback_warehouse" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetFallbackWarehouse"></a>

```python
def reset_fallback_warehouse() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_initially_suspended` <a name="reset_initially_suspended" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetInitiallySuspended"></a>

```python
def reset_initially_suspended() -> None
```

##### `reset_max_cluster_count` <a name="reset_max_cluster_count" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMaxClusterCount"></a>

```python
def reset_max_cluster_count() -> None
```

##### `reset_max_concurrency_level` <a name="reset_max_concurrency_level" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMaxConcurrencyLevel"></a>

```python
def reset_max_concurrency_level() -> None
```

##### `reset_min_cluster_count` <a name="reset_min_cluster_count" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMinClusterCount"></a>

```python
def reset_min_cluster_count() -> None
```

##### `reset_resource_monitor` <a name="reset_resource_monitor" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetResourceMonitor"></a>

```python
def reset_resource_monitor() -> None
```

##### `reset_statement_queued_timeout_in_seconds` <a name="reset_statement_queued_timeout_in_seconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetStatementQueuedTimeoutInSeconds"></a>

```python
def reset_statement_queued_timeout_in_seconds() -> None
```

##### `reset_statement_timeout_in_seconds` <a name="reset_statement_timeout_in_seconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetStatementTimeoutInSeconds"></a>

```python
def reset_statement_timeout_in_seconds() -> None
```

##### `reset_tables` <a name="reset_tables" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetTables"></a>

```python
def reset_tables() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_warehouse_size` <a name="reset_warehouse_size" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetWarehouseSize"></a>

```python
def reset_warehouse_size() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a WarehouseInteractive resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isConstruct"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractive.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformElement"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractive.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformResource"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractive.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractive.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a WarehouseInteractive resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WarehouseInteractive to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WarehouseInteractive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WarehouseInteractive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList">WarehouseInteractiveParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.showOutput">show_output</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList">WarehouseInteractiveShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference">WarehouseInteractiveTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseType">warehouse_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoResumeInput">auto_resume_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoSuspendInput">auto_suspend_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fallbackWarehouseInput">fallback_warehouse_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.initiallySuspendedInput">initially_suspended_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxClusterCountInput">max_cluster_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxConcurrencyLevelInput">max_concurrency_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.minClusterCountInput">min_cluster_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.resourceMonitorInput">resource_monitor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementQueuedTimeoutInSecondsInput">statement_queued_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementTimeoutInSecondsInput">statement_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tablesInput">tables_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseSizeInput">warehouse_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoResume">auto_resume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoSuspend">auto_suspend</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fallbackWarehouse">fallback_warehouse</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.initiallySuspended">initially_suspended</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxClusterCount">max_cluster_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxConcurrencyLevel">max_concurrency_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.minClusterCount">min_cluster_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.resourceMonitor">resource_monitor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementQueuedTimeoutInSeconds">statement_queued_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementTimeoutInSeconds">statement_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tables">tables</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseSize">warehouse_size</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.parameters"></a>

```python
parameters: WarehouseInteractiveParametersList
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList">WarehouseInteractiveParametersList</a>

---

##### `show_output`<sup>Required</sup> <a name="show_output" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.showOutput"></a>

```python
show_output: WarehouseInteractiveShowOutputList
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList">WarehouseInteractiveShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.timeouts"></a>

```python
timeouts: WarehouseInteractiveTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference">WarehouseInteractiveTimeoutsOutputReference</a>

---

##### `warehouse_type`<sup>Required</sup> <a name="warehouse_type" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseType"></a>

```python
warehouse_type: str
```

- *Type:* str

---

##### `auto_resume_input`<sup>Optional</sup> <a name="auto_resume_input" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoResumeInput"></a>

```python
auto_resume_input: str
```

- *Type:* str

---

##### `auto_suspend_input`<sup>Optional</sup> <a name="auto_suspend_input" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoSuspendInput"></a>

```python
auto_suspend_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `fallback_warehouse_input`<sup>Optional</sup> <a name="fallback_warehouse_input" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fallbackWarehouseInput"></a>

```python
fallback_warehouse_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `initially_suspended_input`<sup>Optional</sup> <a name="initially_suspended_input" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.initiallySuspendedInput"></a>

```python
initially_suspended_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_cluster_count_input`<sup>Optional</sup> <a name="max_cluster_count_input" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxClusterCountInput"></a>

```python
max_cluster_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrency_level_input`<sup>Optional</sup> <a name="max_concurrency_level_input" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxConcurrencyLevelInput"></a>

```python
max_concurrency_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_cluster_count_input`<sup>Optional</sup> <a name="min_cluster_count_input" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.minClusterCountInput"></a>

```python
min_cluster_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_monitor_input`<sup>Optional</sup> <a name="resource_monitor_input" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.resourceMonitorInput"></a>

```python
resource_monitor_input: str
```

- *Type:* str

---

##### `statement_queued_timeout_in_seconds_input`<sup>Optional</sup> <a name="statement_queued_timeout_in_seconds_input" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementQueuedTimeoutInSecondsInput"></a>

```python
statement_queued_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `statement_timeout_in_seconds_input`<sup>Optional</sup> <a name="statement_timeout_in_seconds_input" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementTimeoutInSecondsInput"></a>

```python
statement_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tables_input`<sup>Optional</sup> <a name="tables_input" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tablesInput"></a>

```python
tables_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | WarehouseInteractiveTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a>

---

##### `warehouse_size_input`<sup>Optional</sup> <a name="warehouse_size_input" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseSizeInput"></a>

```python
warehouse_size_input: str
```

- *Type:* str

---

##### `auto_resume`<sup>Required</sup> <a name="auto_resume" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoResume"></a>

```python
auto_resume: str
```

- *Type:* str

---

##### `auto_suspend`<sup>Required</sup> <a name="auto_suspend" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoSuspend"></a>

```python
auto_suspend: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `fallback_warehouse`<sup>Required</sup> <a name="fallback_warehouse" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fallbackWarehouse"></a>

```python
fallback_warehouse: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `initially_suspended`<sup>Required</sup> <a name="initially_suspended" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.initiallySuspended"></a>

```python
initially_suspended: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_cluster_count`<sup>Required</sup> <a name="max_cluster_count" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxClusterCount"></a>

```python
max_cluster_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrency_level`<sup>Required</sup> <a name="max_concurrency_level" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxConcurrencyLevel"></a>

```python
max_concurrency_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_cluster_count`<sup>Required</sup> <a name="min_cluster_count" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.minClusterCount"></a>

```python
min_cluster_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_monitor`<sup>Required</sup> <a name="resource_monitor" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.resourceMonitor"></a>

```python
resource_monitor: str
```

- *Type:* str

---

##### `statement_queued_timeout_in_seconds`<sup>Required</sup> <a name="statement_queued_timeout_in_seconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementQueuedTimeoutInSeconds"></a>

```python
statement_queued_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `statement_timeout_in_seconds`<sup>Required</sup> <a name="statement_timeout_in_seconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementTimeoutInSeconds"></a>

```python
statement_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tables"></a>

```python
tables: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `warehouse_size`<sup>Required</sup> <a name="warehouse_size" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseSize"></a>

```python
warehouse_size: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WarehouseInteractiveConfig <a name="WarehouseInteractiveConfig" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractiveConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  auto_resume: str = None,
  auto_suspend: typing.Union[int, float] = None,
  comment: str = None,
  fallback_warehouse: str = None,
  id: str = None,
  initially_suspended: bool | IResolvable = None,
  max_cluster_count: typing.Union[int, float] = None,
  max_concurrency_level: typing.Union[int, float] = None,
  min_cluster_count: typing.Union[int, float] = None,
  resource_monitor: str = None,
  statement_queued_timeout_in_seconds: typing.Union[int, float] = None,
  statement_timeout_in_seconds: typing.Union[int, float] = None,
  tables: typing.List[str] = None,
  timeouts: WarehouseInteractiveTimeouts = None,
  warehouse_size: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.name">name</a></code> | <code>str</code> | Identifier for the interactive warehouse; |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.autoResume">auto_resume</a></code> | <code>str</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically resume an interactive warehouse when a SQL statement (e.g. query) is submitted to it. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.autoSuspend">auto_suspend</a></code> | <code>typing.Union[int, float]</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of seconds of inactivity after which an interactive warehouse is automatically suspended. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.comment">comment</a></code> | <code>str</code> | Specifies a comment for the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.fallbackWarehouse">fallback_warehouse</a></code> | <code>str</code> | Specifies the name of the fallback warehouse for the interactive warehouse. For more information about this resource, see [docs](./warehouse). |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#id WarehouseInteractive#id}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.initiallySuspended">initially_suspended</a></code> | <code>bool \| cdktn.IResolvable</code> | Specifies whether the interactive warehouse is created initially in the ‘Suspended’ state. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.maxClusterCount">max_cluster_count</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum number of server clusters for the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.maxConcurrencyLevel">max_concurrency_level</a></code> | <code>typing.Union[int, float]</code> | Object parameter that specifies the concurrency level for SQL statements (i.e. queries and DML) executed by an interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.minClusterCount">min_cluster_count</a></code> | <code>typing.Union[int, float]</code> | Specifies the minimum number of server clusters for the interactive warehouse (only applies to multi-cluster warehouses). |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.resourceMonitor">resource_monitor</a></code> | <code>str</code> | Specifies the name of a resource monitor that is explicitly assigned to the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.statementQueuedTimeoutInSeconds">statement_queued_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on an interactive warehouse before it is canceled by the system. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.statementTimeoutInSeconds">statement_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.tables">tables</a></code> | <code>typing.List[str]</code> | Specifies the fully qualified names of the tables associated with the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.warehouseSize">warehouse_size</a></code> | <code>str</code> | Specifies the size of the interactive warehouse. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Identifier for the interactive warehouse;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#name WarehouseInteractive#name}

---

##### `auto_resume`<sup>Optional</sup> <a name="auto_resume" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.autoResume"></a>

```python
auto_resume: str
```

- *Type:* str

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically resume an interactive warehouse when a SQL statement (e.g. query) is submitted to it. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#auto_resume WarehouseInteractive#auto_resume}

---

##### `auto_suspend`<sup>Optional</sup> <a name="auto_suspend" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.autoSuspend"></a>

```python
auto_suspend: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of seconds of inactivity after which an interactive warehouse is automatically suspended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#auto_suspend WarehouseInteractive#auto_suspend}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Specifies a comment for the interactive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#comment WarehouseInteractive#comment}

---

##### `fallback_warehouse`<sup>Optional</sup> <a name="fallback_warehouse" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.fallbackWarehouse"></a>

```python
fallback_warehouse: str
```

- *Type:* str

Specifies the name of the fallback warehouse for the interactive warehouse. For more information about this resource, see [docs](./warehouse).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#fallback_warehouse WarehouseInteractive#fallback_warehouse}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#id WarehouseInteractive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initially_suspended`<sup>Optional</sup> <a name="initially_suspended" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.initiallySuspended"></a>

```python
initially_suspended: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Specifies whether the interactive warehouse is created initially in the ‘Suspended’ state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#initially_suspended WarehouseInteractive#initially_suspended}

---

##### `max_cluster_count`<sup>Optional</sup> <a name="max_cluster_count" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.maxClusterCount"></a>

```python
max_cluster_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum number of server clusters for the interactive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#max_cluster_count WarehouseInteractive#max_cluster_count}

---

##### `max_concurrency_level`<sup>Optional</sup> <a name="max_concurrency_level" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.maxConcurrencyLevel"></a>

```python
max_concurrency_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Object parameter that specifies the concurrency level for SQL statements (i.e. queries and DML) executed by an interactive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#max_concurrency_level WarehouseInteractive#max_concurrency_level}

---

##### `min_cluster_count`<sup>Optional</sup> <a name="min_cluster_count" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.minClusterCount"></a>

```python
min_cluster_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the minimum number of server clusters for the interactive warehouse (only applies to multi-cluster warehouses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#min_cluster_count WarehouseInteractive#min_cluster_count}

---

##### `resource_monitor`<sup>Optional</sup> <a name="resource_monitor" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.resourceMonitor"></a>

```python
resource_monitor: str
```

- *Type:* str

Specifies the name of a resource monitor that is explicitly assigned to the interactive warehouse.

For more information about this resource, see [docs](./resource_monitor).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#resource_monitor WarehouseInteractive#resource_monitor}

---

##### `statement_queued_timeout_in_seconds`<sup>Optional</sup> <a name="statement_queued_timeout_in_seconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.statementQueuedTimeoutInSeconds"></a>

```python
statement_queued_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on an interactive warehouse before it is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#statement_queued_timeout_in_seconds WarehouseInteractive#statement_queued_timeout_in_seconds}

---

##### `statement_timeout_in_seconds`<sup>Optional</sup> <a name="statement_timeout_in_seconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.statementTimeoutInSeconds"></a>

```python
statement_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#statement_timeout_in_seconds WarehouseInteractive#statement_timeout_in_seconds}

---

##### `tables`<sup>Optional</sup> <a name="tables" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.tables"></a>

```python
tables: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the fully qualified names of the tables associated with the interactive warehouse.

Changes are applied incrementally (ADD TABLES / DROP TABLES) rather than by full re-association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#tables WarehouseInteractive#tables}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.timeouts"></a>

```python
timeouts: WarehouseInteractiveTimeouts
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#timeouts WarehouseInteractive#timeouts}

---

##### `warehouse_size`<sup>Optional</sup> <a name="warehouse_size" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.warehouseSize"></a>

```python
warehouse_size: str
```

- *Type:* str

Specifies the size of the interactive warehouse.

Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. Note: changing the size briefly suspends and resumes the warehouse to apply the resize (an interactive warehouse cannot be resized while running); removing the size from config will result in the resource recreation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#warehouse_size WarehouseInteractive#warehouse_size}

---

### WarehouseInteractiveParameters <a name="WarehouseInteractiveParameters" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParameters.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractiveParameters()
```


### WarehouseInteractiveParametersFallbackWarehouse <a name="WarehouseInteractiveParametersFallbackWarehouse" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouse.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouse()
```


### WarehouseInteractiveParametersMaxConcurrencyLevel <a name="WarehouseInteractiveParametersMaxConcurrencyLevel" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevel.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevel()
```


### WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds <a name="WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds()
```


### WarehouseInteractiveParametersStatementTimeoutInSeconds <a name="WarehouseInteractiveParametersStatementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSeconds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSeconds.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSeconds()
```


### WarehouseInteractiveShowOutput <a name="WarehouseInteractiveShowOutput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutput.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractiveShowOutput()
```


### WarehouseInteractiveTimeouts <a name="WarehouseInteractiveTimeouts" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractiveTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#create WarehouseInteractive#create}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#delete WarehouseInteractive#delete}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#read WarehouseInteractive#read}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#update WarehouseInteractive#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#create WarehouseInteractive#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#delete WarehouseInteractive#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#read WarehouseInteractive#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/warehouse_interactive#update WarehouseInteractive#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WarehouseInteractiveParametersFallbackWarehouseList <a name="WarehouseInteractiveParametersFallbackWarehouseList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WarehouseInteractiveParametersFallbackWarehouseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WarehouseInteractiveParametersFallbackWarehouseOutputReference <a name="WarehouseInteractiveParametersFallbackWarehouseOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouse">WarehouseInteractiveParametersFallbackWarehouse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.internalValue"></a>

```python
internal_value: WarehouseInteractiveParametersFallbackWarehouse
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouse">WarehouseInteractiveParametersFallbackWarehouse</a>

---


### WarehouseInteractiveParametersList <a name="WarehouseInteractiveParametersList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractiveParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WarehouseInteractiveParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WarehouseInteractiveParametersMaxConcurrencyLevelList <a name="WarehouseInteractiveParametersMaxConcurrencyLevelList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference <a name="WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevel">WarehouseInteractiveParametersMaxConcurrencyLevel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.internalValue"></a>

```python
internal_value: WarehouseInteractiveParametersMaxConcurrencyLevel
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevel">WarehouseInteractiveParametersMaxConcurrencyLevel</a>

---


### WarehouseInteractiveParametersOutputReference <a name="WarehouseInteractiveParametersOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractiveParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.fallbackWarehouse">fallback_warehouse</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList">WarehouseInteractiveParametersFallbackWarehouseList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.maxConcurrencyLevel">max_concurrency_level</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList">WarehouseInteractiveParametersMaxConcurrencyLevelList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.statementQueuedTimeoutInSeconds">statement_queued_timeout_in_seconds</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList">WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.statementTimeoutInSeconds">statement_timeout_in_seconds</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList">WarehouseInteractiveParametersStatementTimeoutInSecondsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParameters">WarehouseInteractiveParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fallback_warehouse`<sup>Required</sup> <a name="fallback_warehouse" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.fallbackWarehouse"></a>

```python
fallback_warehouse: WarehouseInteractiveParametersFallbackWarehouseList
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList">WarehouseInteractiveParametersFallbackWarehouseList</a>

---

##### `max_concurrency_level`<sup>Required</sup> <a name="max_concurrency_level" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.maxConcurrencyLevel"></a>

```python
max_concurrency_level: WarehouseInteractiveParametersMaxConcurrencyLevelList
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList">WarehouseInteractiveParametersMaxConcurrencyLevelList</a>

---

##### `statement_queued_timeout_in_seconds`<sup>Required</sup> <a name="statement_queued_timeout_in_seconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.statementQueuedTimeoutInSeconds"></a>

```python
statement_queued_timeout_in_seconds: WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList">WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList</a>

---

##### `statement_timeout_in_seconds`<sup>Required</sup> <a name="statement_timeout_in_seconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.statementTimeoutInSeconds"></a>

```python
statement_timeout_in_seconds: WarehouseInteractiveParametersStatementTimeoutInSecondsList
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList">WarehouseInteractiveParametersStatementTimeoutInSecondsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.internalValue"></a>

```python
internal_value: WarehouseInteractiveParameters
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParameters">WarehouseInteractiveParameters</a>

---


### WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList <a name="WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference <a name="WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds">WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.internalValue"></a>

```python
internal_value: WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds">WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds</a>

---


### WarehouseInteractiveParametersStatementTimeoutInSecondsList <a name="WarehouseInteractiveParametersStatementTimeoutInSecondsList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference <a name="WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSeconds">WarehouseInteractiveParametersStatementTimeoutInSeconds</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.internalValue"></a>

```python
internal_value: WarehouseInteractiveParametersStatementTimeoutInSeconds
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSeconds">WarehouseInteractiveParametersStatementTimeoutInSeconds</a>

---


### WarehouseInteractiveShowOutputList <a name="WarehouseInteractiveShowOutputList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractiveShowOutputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WarehouseInteractiveShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### WarehouseInteractiveShowOutputOutputReference <a name="WarehouseInteractiveShowOutputOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractiveShowOutputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.autoResume">auto_resume</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.autoSuspend">auto_suspend</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.available">available</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.createdOn">created_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.isCurrent">is_current</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.isDefault">is_default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.maxClusterCount">max_cluster_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.minClusterCount">min_cluster_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.other">other</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.ownerRoleType">owner_role_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.provisioning">provisioning</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.queued">queued</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.quiescing">quiescing</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.resourceMonitor">resource_monitor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.resumedOn">resumed_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.running">running</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.size">size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.startedClusters">started_clusters</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.tables">tables</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.updatedOn">updated_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutput">WarehouseInteractiveShowOutput</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_resume`<sup>Required</sup> <a name="auto_resume" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.autoResume"></a>

```python
auto_resume: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `auto_suspend`<sup>Required</sup> <a name="auto_suspend" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.autoSuspend"></a>

```python
auto_suspend: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `available`<sup>Required</sup> <a name="available" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.available"></a>

```python
available: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_on`<sup>Required</sup> <a name="created_on" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.createdOn"></a>

```python
created_on: str
```

- *Type:* str

---

##### `is_current`<sup>Required</sup> <a name="is_current" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.isCurrent"></a>

```python
is_current: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `max_cluster_count`<sup>Required</sup> <a name="max_cluster_count" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.maxClusterCount"></a>

```python
max_cluster_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_cluster_count`<sup>Required</sup> <a name="min_cluster_count" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.minClusterCount"></a>

```python
min_cluster_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `other`<sup>Required</sup> <a name="other" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.other"></a>

```python
other: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `owner_role_type`<sup>Required</sup> <a name="owner_role_type" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.ownerRoleType"></a>

```python
owner_role_type: str
```

- *Type:* str

---

##### `provisioning`<sup>Required</sup> <a name="provisioning" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.provisioning"></a>

```python
provisioning: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `queued`<sup>Required</sup> <a name="queued" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.queued"></a>

```python
queued: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `quiescing`<sup>Required</sup> <a name="quiescing" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.quiescing"></a>

```python
quiescing: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_monitor`<sup>Required</sup> <a name="resource_monitor" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.resourceMonitor"></a>

```python
resource_monitor: str
```

- *Type:* str

---

##### `resumed_on`<sup>Required</sup> <a name="resumed_on" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.resumedOn"></a>

```python
resumed_on: str
```

- *Type:* str

---

##### `running`<sup>Required</sup> <a name="running" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.running"></a>

```python
running: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.size"></a>

```python
size: str
```

- *Type:* str

---

##### `started_clusters`<sup>Required</sup> <a name="started_clusters" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.startedClusters"></a>

```python
started_clusters: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.tables"></a>

```python
tables: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `updated_on`<sup>Required</sup> <a name="updated_on" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.updatedOn"></a>

```python
updated_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.internalValue"></a>

```python
internal_value: WarehouseInteractiveShowOutput
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutput">WarehouseInteractiveShowOutput</a>

---


### WarehouseInteractiveTimeoutsOutputReference <a name="WarehouseInteractiveTimeoutsOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_snowflake import warehouse_interactive

warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | WarehouseInteractiveTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a>

---



