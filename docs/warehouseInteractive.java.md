# `warehouseInteractive` Submodule <a name="`warehouseInteractive` Submodule" id="@cdktn/provider-snowflake.warehouseInteractive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WarehouseInteractive <a name="WarehouseInteractive" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive snowflake_warehouse_interactive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractive;

WarehouseInteractive.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .autoResume(java.lang.String)
//  .autoSuspend(java.lang.Number)
//  .comment(java.lang.String)
//  .fallbackWarehouse(java.lang.String)
//  .id(java.lang.String)
//  .initiallySuspended(java.lang.Boolean|IResolvable)
//  .maxClusterCount(java.lang.Number)
//  .maxConcurrencyLevel(java.lang.Number)
//  .minClusterCount(java.lang.Number)
//  .resourceMonitor(java.lang.String)
//  .statementQueuedTimeoutInSeconds(java.lang.Number)
//  .statementTimeoutInSeconds(java.lang.Number)
//  .tables(java.util.List<java.lang.String>)
//  .timeouts(WarehouseInteractiveTimeouts)
//  .warehouseSize(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Identifier for the interactive warehouse; |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.autoResume">autoResume</a></code> | <code>java.lang.String</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically resume an interactive warehouse when a SQL statement (e.g. query) is submitted to it. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.autoSuspend">autoSuspend</a></code> | <code>java.lang.Number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of seconds of inactivity after which an interactive warehouse is automatically suspended. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.fallbackWarehouse">fallbackWarehouse</a></code> | <code>java.lang.String</code> | Specifies the name of the fallback warehouse for the interactive warehouse. For more information about this resource, see [docs](./warehouse). |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#id WarehouseInteractive#id}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.initiallySuspended">initiallySuspended</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the interactive warehouse is created initially in the ‘Suspended’ state. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.maxClusterCount">maxClusterCount</a></code> | <code>java.lang.Number</code> | Specifies the maximum number of server clusters for the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.maxConcurrencyLevel">maxConcurrencyLevel</a></code> | <code>java.lang.Number</code> | Object parameter that specifies the concurrency level for SQL statements (i.e. queries and DML) executed by an interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.minClusterCount">minClusterCount</a></code> | <code>java.lang.Number</code> | Specifies the minimum number of server clusters for the interactive warehouse (only applies to multi-cluster warehouses). |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.resourceMonitor">resourceMonitor</a></code> | <code>java.lang.String</code> | Specifies the name of a resource monitor that is explicitly assigned to the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.statementQueuedTimeoutInSeconds">statementQueuedTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on an interactive warehouse before it is canceled by the system. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.statementTimeoutInSeconds">statementTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.tables">tables</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the fully qualified names of the tables associated with the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.warehouseSize">warehouseSize</a></code> | <code>java.lang.String</code> | Specifies the size of the interactive warehouse. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Identifier for the interactive warehouse;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#name WarehouseInteractive#name}

---

##### `autoResume`<sup>Optional</sup> <a name="autoResume" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.autoResume"></a>

- *Type:* java.lang.String

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically resume an interactive warehouse when a SQL statement (e.g. query) is submitted to it. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#auto_resume WarehouseInteractive#auto_resume}

---

##### `autoSuspend`<sup>Optional</sup> <a name="autoSuspend" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.autoSuspend"></a>

- *Type:* java.lang.Number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of seconds of inactivity after which an interactive warehouse is automatically suspended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#auto_suspend WarehouseInteractive#auto_suspend}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the interactive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#comment WarehouseInteractive#comment}

---

##### `fallbackWarehouse`<sup>Optional</sup> <a name="fallbackWarehouse" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.fallbackWarehouse"></a>

- *Type:* java.lang.String

Specifies the name of the fallback warehouse for the interactive warehouse. For more information about this resource, see [docs](./warehouse).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#fallback_warehouse WarehouseInteractive#fallback_warehouse}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#id WarehouseInteractive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initiallySuspended`<sup>Optional</sup> <a name="initiallySuspended" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.initiallySuspended"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the interactive warehouse is created initially in the ‘Suspended’ state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#initially_suspended WarehouseInteractive#initially_suspended}

---

##### `maxClusterCount`<sup>Optional</sup> <a name="maxClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.maxClusterCount"></a>

- *Type:* java.lang.Number

Specifies the maximum number of server clusters for the interactive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#max_cluster_count WarehouseInteractive#max_cluster_count}

---

##### `maxConcurrencyLevel`<sup>Optional</sup> <a name="maxConcurrencyLevel" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.maxConcurrencyLevel"></a>

- *Type:* java.lang.Number

Object parameter that specifies the concurrency level for SQL statements (i.e. queries and DML) executed by an interactive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#max_concurrency_level WarehouseInteractive#max_concurrency_level}

---

##### `minClusterCount`<sup>Optional</sup> <a name="minClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.minClusterCount"></a>

- *Type:* java.lang.Number

Specifies the minimum number of server clusters for the interactive warehouse (only applies to multi-cluster warehouses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#min_cluster_count WarehouseInteractive#min_cluster_count}

---

##### `resourceMonitor`<sup>Optional</sup> <a name="resourceMonitor" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.resourceMonitor"></a>

- *Type:* java.lang.String

Specifies the name of a resource monitor that is explicitly assigned to the interactive warehouse.

For more information about this resource, see [docs](./resource_monitor).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#resource_monitor WarehouseInteractive#resource_monitor}

---

##### `statementQueuedTimeoutInSeconds`<sup>Optional</sup> <a name="statementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.statementQueuedTimeoutInSeconds"></a>

- *Type:* java.lang.Number

Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on an interactive warehouse before it is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#statement_queued_timeout_in_seconds WarehouseInteractive#statement_queued_timeout_in_seconds}

---

##### `statementTimeoutInSeconds`<sup>Optional</sup> <a name="statementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.statementTimeoutInSeconds"></a>

- *Type:* java.lang.Number

Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#statement_timeout_in_seconds WarehouseInteractive#statement_timeout_in_seconds}

---

##### `tables`<sup>Optional</sup> <a name="tables" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.tables"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the fully qualified names of the tables associated with the interactive warehouse.

Changes are applied incrementally (ADD TABLES / DROP TABLES) rather than by full re-association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#tables WarehouseInteractive#tables}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#timeouts WarehouseInteractive#timeouts}

---

##### `warehouseSize`<sup>Optional</sup> <a name="warehouseSize" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.warehouseSize"></a>

- *Type:* java.lang.String

Specifies the size of the interactive warehouse.

Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. Note: changing the size briefly suspends and resumes the warehouse to apply the resize (an interactive warehouse cannot be resized while running); removing the size from config will result in the resource recreation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#warehouse_size WarehouseInteractive#warehouse_size}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetAutoResume">resetAutoResume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetAutoSuspend">resetAutoSuspend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetFallbackWarehouse">resetFallbackWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetInitiallySuspended">resetInitiallySuspended</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMaxClusterCount">resetMaxClusterCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMaxConcurrencyLevel">resetMaxConcurrencyLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMinClusterCount">resetMinClusterCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetResourceMonitor">resetResourceMonitor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetStatementQueuedTimeoutInSeconds">resetStatementQueuedTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetStatementTimeoutInSeconds">resetStatementTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetTables">resetTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetWarehouseSize">resetWarehouseSize</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.putTimeouts"></a>

```java
public void putTimeouts(WarehouseInteractiveTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a>

---

##### `resetAutoResume` <a name="resetAutoResume" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetAutoResume"></a>

```java
public void resetAutoResume()
```

##### `resetAutoSuspend` <a name="resetAutoSuspend" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetAutoSuspend"></a>

```java
public void resetAutoSuspend()
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetComment"></a>

```java
public void resetComment()
```

##### `resetFallbackWarehouse` <a name="resetFallbackWarehouse" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetFallbackWarehouse"></a>

```java
public void resetFallbackWarehouse()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetId"></a>

```java
public void resetId()
```

##### `resetInitiallySuspended` <a name="resetInitiallySuspended" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetInitiallySuspended"></a>

```java
public void resetInitiallySuspended()
```

##### `resetMaxClusterCount` <a name="resetMaxClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMaxClusterCount"></a>

```java
public void resetMaxClusterCount()
```

##### `resetMaxConcurrencyLevel` <a name="resetMaxConcurrencyLevel" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMaxConcurrencyLevel"></a>

```java
public void resetMaxConcurrencyLevel()
```

##### `resetMinClusterCount` <a name="resetMinClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMinClusterCount"></a>

```java
public void resetMinClusterCount()
```

##### `resetResourceMonitor` <a name="resetResourceMonitor" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetResourceMonitor"></a>

```java
public void resetResourceMonitor()
```

##### `resetStatementQueuedTimeoutInSeconds` <a name="resetStatementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetStatementQueuedTimeoutInSeconds"></a>

```java
public void resetStatementQueuedTimeoutInSeconds()
```

##### `resetStatementTimeoutInSeconds` <a name="resetStatementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetStatementTimeoutInSeconds"></a>

```java
public void resetStatementTimeoutInSeconds()
```

##### `resetTables` <a name="resetTables" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetTables"></a>

```java
public void resetTables()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWarehouseSize` <a name="resetWarehouseSize" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetWarehouseSize"></a>

```java
public void resetWarehouseSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WarehouseInteractive resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractive;

WarehouseInteractive.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractive;

WarehouseInteractive.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractive;

WarehouseInteractive.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractive;

WarehouseInteractive.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WarehouseInteractive.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WarehouseInteractive resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WarehouseInteractive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WarehouseInteractive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WarehouseInteractive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList">WarehouseInteractiveParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList">WarehouseInteractiveShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference">WarehouseInteractiveTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseType">warehouseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoResumeInput">autoResumeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoSuspendInput">autoSuspendInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fallbackWarehouseInput">fallbackWarehouseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.initiallySuspendedInput">initiallySuspendedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxClusterCountInput">maxClusterCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxConcurrencyLevelInput">maxConcurrencyLevelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.minClusterCountInput">minClusterCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.resourceMonitorInput">resourceMonitorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementQueuedTimeoutInSecondsInput">statementQueuedTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementTimeoutInSecondsInput">statementTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tablesInput">tablesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseSizeInput">warehouseSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoResume">autoResume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoSuspend">autoSuspend</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fallbackWarehouse">fallbackWarehouse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.initiallySuspended">initiallySuspended</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxClusterCount">maxClusterCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxConcurrencyLevel">maxConcurrencyLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.minClusterCount">minClusterCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.resourceMonitor">resourceMonitor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementQueuedTimeoutInSeconds">statementQueuedTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementTimeoutInSeconds">statementTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tables">tables</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseSize">warehouseSize</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.parameters"></a>

```java
public WarehouseInteractiveParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList">WarehouseInteractiveParametersList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.showOutput"></a>

```java
public WarehouseInteractiveShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList">WarehouseInteractiveShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.timeouts"></a>

```java
public WarehouseInteractiveTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference">WarehouseInteractiveTimeoutsOutputReference</a>

---

##### `warehouseType`<sup>Required</sup> <a name="warehouseType" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseType"></a>

```java
public java.lang.String getWarehouseType();
```

- *Type:* java.lang.String

---

##### `autoResumeInput`<sup>Optional</sup> <a name="autoResumeInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoResumeInput"></a>

```java
public java.lang.String getAutoResumeInput();
```

- *Type:* java.lang.String

---

##### `autoSuspendInput`<sup>Optional</sup> <a name="autoSuspendInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoSuspendInput"></a>

```java
public java.lang.Number getAutoSuspendInput();
```

- *Type:* java.lang.Number

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `fallbackWarehouseInput`<sup>Optional</sup> <a name="fallbackWarehouseInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fallbackWarehouseInput"></a>

```java
public java.lang.String getFallbackWarehouseInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `initiallySuspendedInput`<sup>Optional</sup> <a name="initiallySuspendedInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.initiallySuspendedInput"></a>

```java
public java.lang.Boolean|IResolvable getInitiallySuspendedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxClusterCountInput`<sup>Optional</sup> <a name="maxClusterCountInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxClusterCountInput"></a>

```java
public java.lang.Number getMaxClusterCountInput();
```

- *Type:* java.lang.Number

---

##### `maxConcurrencyLevelInput`<sup>Optional</sup> <a name="maxConcurrencyLevelInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxConcurrencyLevelInput"></a>

```java
public java.lang.Number getMaxConcurrencyLevelInput();
```

- *Type:* java.lang.Number

---

##### `minClusterCountInput`<sup>Optional</sup> <a name="minClusterCountInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.minClusterCountInput"></a>

```java
public java.lang.Number getMinClusterCountInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceMonitorInput`<sup>Optional</sup> <a name="resourceMonitorInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.resourceMonitorInput"></a>

```java
public java.lang.String getResourceMonitorInput();
```

- *Type:* java.lang.String

---

##### `statementQueuedTimeoutInSecondsInput`<sup>Optional</sup> <a name="statementQueuedTimeoutInSecondsInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementQueuedTimeoutInSecondsInput"></a>

```java
public java.lang.Number getStatementQueuedTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `statementTimeoutInSecondsInput`<sup>Optional</sup> <a name="statementTimeoutInSecondsInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementTimeoutInSecondsInput"></a>

```java
public java.lang.Number getStatementTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `tablesInput`<sup>Optional</sup> <a name="tablesInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tablesInput"></a>

```java
public java.util.List<java.lang.String> getTablesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.timeoutsInput"></a>

```java
public IResolvable|WarehouseInteractiveTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a>

---

##### `warehouseSizeInput`<sup>Optional</sup> <a name="warehouseSizeInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseSizeInput"></a>

```java
public java.lang.String getWarehouseSizeInput();
```

- *Type:* java.lang.String

---

##### `autoResume`<sup>Required</sup> <a name="autoResume" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoResume"></a>

```java
public java.lang.String getAutoResume();
```

- *Type:* java.lang.String

---

##### `autoSuspend`<sup>Required</sup> <a name="autoSuspend" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoSuspend"></a>

```java
public java.lang.Number getAutoSuspend();
```

- *Type:* java.lang.Number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `fallbackWarehouse`<sup>Required</sup> <a name="fallbackWarehouse" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fallbackWarehouse"></a>

```java
public java.lang.String getFallbackWarehouse();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `initiallySuspended`<sup>Required</sup> <a name="initiallySuspended" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.initiallySuspended"></a>

```java
public java.lang.Boolean|IResolvable getInitiallySuspended();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxClusterCount`<sup>Required</sup> <a name="maxClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxClusterCount"></a>

```java
public java.lang.Number getMaxClusterCount();
```

- *Type:* java.lang.Number

---

##### `maxConcurrencyLevel`<sup>Required</sup> <a name="maxConcurrencyLevel" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxConcurrencyLevel"></a>

```java
public java.lang.Number getMaxConcurrencyLevel();
```

- *Type:* java.lang.Number

---

##### `minClusterCount`<sup>Required</sup> <a name="minClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.minClusterCount"></a>

```java
public java.lang.Number getMinClusterCount();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceMonitor`<sup>Required</sup> <a name="resourceMonitor" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.resourceMonitor"></a>

```java
public java.lang.String getResourceMonitor();
```

- *Type:* java.lang.String

---

##### `statementQueuedTimeoutInSeconds`<sup>Required</sup> <a name="statementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementQueuedTimeoutInSeconds"></a>

```java
public java.lang.Number getStatementQueuedTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `statementTimeoutInSeconds`<sup>Required</sup> <a name="statementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementTimeoutInSeconds"></a>

```java
public java.lang.Number getStatementTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tables"></a>

```java
public java.util.List<java.lang.String> getTables();
```

- *Type:* java.util.List<java.lang.String>

---

##### `warehouseSize`<sup>Required</sup> <a name="warehouseSize" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseSize"></a>

```java
public java.lang.String getWarehouseSize();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WarehouseInteractiveConfig <a name="WarehouseInteractiveConfig" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractiveConfig;

WarehouseInteractiveConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .autoResume(java.lang.String)
//  .autoSuspend(java.lang.Number)
//  .comment(java.lang.String)
//  .fallbackWarehouse(java.lang.String)
//  .id(java.lang.String)
//  .initiallySuspended(java.lang.Boolean|IResolvable)
//  .maxClusterCount(java.lang.Number)
//  .maxConcurrencyLevel(java.lang.Number)
//  .minClusterCount(java.lang.Number)
//  .resourceMonitor(java.lang.String)
//  .statementQueuedTimeoutInSeconds(java.lang.Number)
//  .statementTimeoutInSeconds(java.lang.Number)
//  .tables(java.util.List<java.lang.String>)
//  .timeouts(WarehouseInteractiveTimeouts)
//  .warehouseSize(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.name">name</a></code> | <code>java.lang.String</code> | Identifier for the interactive warehouse; |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.autoResume">autoResume</a></code> | <code>java.lang.String</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically resume an interactive warehouse when a SQL statement (e.g. query) is submitted to it. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.autoSuspend">autoSuspend</a></code> | <code>java.lang.Number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of seconds of inactivity after which an interactive warehouse is automatically suspended. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.fallbackWarehouse">fallbackWarehouse</a></code> | <code>java.lang.String</code> | Specifies the name of the fallback warehouse for the interactive warehouse. For more information about this resource, see [docs](./warehouse). |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#id WarehouseInteractive#id}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.initiallySuspended">initiallySuspended</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the interactive warehouse is created initially in the ‘Suspended’ state. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.maxClusterCount">maxClusterCount</a></code> | <code>java.lang.Number</code> | Specifies the maximum number of server clusters for the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.maxConcurrencyLevel">maxConcurrencyLevel</a></code> | <code>java.lang.Number</code> | Object parameter that specifies the concurrency level for SQL statements (i.e. queries and DML) executed by an interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.minClusterCount">minClusterCount</a></code> | <code>java.lang.Number</code> | Specifies the minimum number of server clusters for the interactive warehouse (only applies to multi-cluster warehouses). |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.resourceMonitor">resourceMonitor</a></code> | <code>java.lang.String</code> | Specifies the name of a resource monitor that is explicitly assigned to the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.statementQueuedTimeoutInSeconds">statementQueuedTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on an interactive warehouse before it is canceled by the system. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.statementTimeoutInSeconds">statementTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.tables">tables</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the fully qualified names of the tables associated with the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.warehouseSize">warehouseSize</a></code> | <code>java.lang.String</code> | Specifies the size of the interactive warehouse. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Identifier for the interactive warehouse;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#name WarehouseInteractive#name}

---

##### `autoResume`<sup>Optional</sup> <a name="autoResume" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.autoResume"></a>

```java
public java.lang.String getAutoResume();
```

- *Type:* java.lang.String

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically resume an interactive warehouse when a SQL statement (e.g. query) is submitted to it. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#auto_resume WarehouseInteractive#auto_resume}

---

##### `autoSuspend`<sup>Optional</sup> <a name="autoSuspend" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.autoSuspend"></a>

```java
public java.lang.Number getAutoSuspend();
```

- *Type:* java.lang.Number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of seconds of inactivity after which an interactive warehouse is automatically suspended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#auto_suspend WarehouseInteractive#auto_suspend}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the interactive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#comment WarehouseInteractive#comment}

---

##### `fallbackWarehouse`<sup>Optional</sup> <a name="fallbackWarehouse" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.fallbackWarehouse"></a>

```java
public java.lang.String getFallbackWarehouse();
```

- *Type:* java.lang.String

Specifies the name of the fallback warehouse for the interactive warehouse. For more information about this resource, see [docs](./warehouse).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#fallback_warehouse WarehouseInteractive#fallback_warehouse}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#id WarehouseInteractive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initiallySuspended`<sup>Optional</sup> <a name="initiallySuspended" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.initiallySuspended"></a>

```java
public java.lang.Boolean|IResolvable getInitiallySuspended();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the interactive warehouse is created initially in the ‘Suspended’ state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#initially_suspended WarehouseInteractive#initially_suspended}

---

##### `maxClusterCount`<sup>Optional</sup> <a name="maxClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.maxClusterCount"></a>

```java
public java.lang.Number getMaxClusterCount();
```

- *Type:* java.lang.Number

Specifies the maximum number of server clusters for the interactive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#max_cluster_count WarehouseInteractive#max_cluster_count}

---

##### `maxConcurrencyLevel`<sup>Optional</sup> <a name="maxConcurrencyLevel" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.maxConcurrencyLevel"></a>

```java
public java.lang.Number getMaxConcurrencyLevel();
```

- *Type:* java.lang.Number

Object parameter that specifies the concurrency level for SQL statements (i.e. queries and DML) executed by an interactive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#max_concurrency_level WarehouseInteractive#max_concurrency_level}

---

##### `minClusterCount`<sup>Optional</sup> <a name="minClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.minClusterCount"></a>

```java
public java.lang.Number getMinClusterCount();
```

- *Type:* java.lang.Number

Specifies the minimum number of server clusters for the interactive warehouse (only applies to multi-cluster warehouses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#min_cluster_count WarehouseInteractive#min_cluster_count}

---

##### `resourceMonitor`<sup>Optional</sup> <a name="resourceMonitor" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.resourceMonitor"></a>

```java
public java.lang.String getResourceMonitor();
```

- *Type:* java.lang.String

Specifies the name of a resource monitor that is explicitly assigned to the interactive warehouse.

For more information about this resource, see [docs](./resource_monitor).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#resource_monitor WarehouseInteractive#resource_monitor}

---

##### `statementQueuedTimeoutInSeconds`<sup>Optional</sup> <a name="statementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.statementQueuedTimeoutInSeconds"></a>

```java
public java.lang.Number getStatementQueuedTimeoutInSeconds();
```

- *Type:* java.lang.Number

Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on an interactive warehouse before it is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#statement_queued_timeout_in_seconds WarehouseInteractive#statement_queued_timeout_in_seconds}

---

##### `statementTimeoutInSeconds`<sup>Optional</sup> <a name="statementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.statementTimeoutInSeconds"></a>

```java
public java.lang.Number getStatementTimeoutInSeconds();
```

- *Type:* java.lang.Number

Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#statement_timeout_in_seconds WarehouseInteractive#statement_timeout_in_seconds}

---

##### `tables`<sup>Optional</sup> <a name="tables" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.tables"></a>

```java
public java.util.List<java.lang.String> getTables();
```

- *Type:* java.util.List<java.lang.String>

Specifies the fully qualified names of the tables associated with the interactive warehouse.

Changes are applied incrementally (ADD TABLES / DROP TABLES) rather than by full re-association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#tables WarehouseInteractive#tables}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.timeouts"></a>

```java
public WarehouseInteractiveTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#timeouts WarehouseInteractive#timeouts}

---

##### `warehouseSize`<sup>Optional</sup> <a name="warehouseSize" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.warehouseSize"></a>

```java
public java.lang.String getWarehouseSize();
```

- *Type:* java.lang.String

Specifies the size of the interactive warehouse.

Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. Note: changing the size briefly suspends and resumes the warehouse to apply the resize (an interactive warehouse cannot be resized while running); removing the size from config will result in the resource recreation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#warehouse_size WarehouseInteractive#warehouse_size}

---

### WarehouseInteractiveParameters <a name="WarehouseInteractiveParameters" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParameters.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractiveParameters;

WarehouseInteractiveParameters.builder()
    .build();
```


### WarehouseInteractiveParametersFallbackWarehouse <a name="WarehouseInteractiveParametersFallbackWarehouse" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouse.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractiveParametersFallbackWarehouse;

WarehouseInteractiveParametersFallbackWarehouse.builder()
    .build();
```


### WarehouseInteractiveParametersMaxConcurrencyLevel <a name="WarehouseInteractiveParametersMaxConcurrencyLevel" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevel.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractiveParametersMaxConcurrencyLevel;

WarehouseInteractiveParametersMaxConcurrencyLevel.builder()
    .build();
```


### WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds <a name="WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds;

WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds.builder()
    .build();
```


### WarehouseInteractiveParametersStatementTimeoutInSeconds <a name="WarehouseInteractiveParametersStatementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSeconds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSeconds.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractiveParametersStatementTimeoutInSeconds;

WarehouseInteractiveParametersStatementTimeoutInSeconds.builder()
    .build();
```


### WarehouseInteractiveShowOutput <a name="WarehouseInteractiveShowOutput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractiveShowOutput;

WarehouseInteractiveShowOutput.builder()
    .build();
```


### WarehouseInteractiveTimeouts <a name="WarehouseInteractiveTimeouts" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractiveTimeouts;

WarehouseInteractiveTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#create WarehouseInteractive#create}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#delete WarehouseInteractive#delete}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#read WarehouseInteractive#read}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#update WarehouseInteractive#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#create WarehouseInteractive#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#delete WarehouseInteractive#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#read WarehouseInteractive#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#update WarehouseInteractive#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WarehouseInteractiveParametersFallbackWarehouseList <a name="WarehouseInteractiveParametersFallbackWarehouseList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractiveParametersFallbackWarehouseList;

new WarehouseInteractiveParametersFallbackWarehouseList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.get"></a>

```java
public WarehouseInteractiveParametersFallbackWarehouseOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### WarehouseInteractiveParametersFallbackWarehouseOutputReference <a name="WarehouseInteractiveParametersFallbackWarehouseOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractiveParametersFallbackWarehouseOutputReference;

new WarehouseInteractiveParametersFallbackWarehouseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouse">WarehouseInteractiveParametersFallbackWarehouse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.internalValue"></a>

```java
public WarehouseInteractiveParametersFallbackWarehouse getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouse">WarehouseInteractiveParametersFallbackWarehouse</a>

---


### WarehouseInteractiveParametersList <a name="WarehouseInteractiveParametersList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractiveParametersList;

new WarehouseInteractiveParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.get"></a>

```java
public WarehouseInteractiveParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### WarehouseInteractiveParametersMaxConcurrencyLevelList <a name="WarehouseInteractiveParametersMaxConcurrencyLevelList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractiveParametersMaxConcurrencyLevelList;

new WarehouseInteractiveParametersMaxConcurrencyLevelList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.get"></a>

```java
public WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference <a name="WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference;

new WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevel">WarehouseInteractiveParametersMaxConcurrencyLevel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.internalValue"></a>

```java
public WarehouseInteractiveParametersMaxConcurrencyLevel getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevel">WarehouseInteractiveParametersMaxConcurrencyLevel</a>

---


### WarehouseInteractiveParametersOutputReference <a name="WarehouseInteractiveParametersOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractiveParametersOutputReference;

new WarehouseInteractiveParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.fallbackWarehouse">fallbackWarehouse</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList">WarehouseInteractiveParametersFallbackWarehouseList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.maxConcurrencyLevel">maxConcurrencyLevel</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList">WarehouseInteractiveParametersMaxConcurrencyLevelList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.statementQueuedTimeoutInSeconds">statementQueuedTimeoutInSeconds</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList">WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.statementTimeoutInSeconds">statementTimeoutInSeconds</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList">WarehouseInteractiveParametersStatementTimeoutInSecondsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParameters">WarehouseInteractiveParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fallbackWarehouse`<sup>Required</sup> <a name="fallbackWarehouse" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.fallbackWarehouse"></a>

```java
public WarehouseInteractiveParametersFallbackWarehouseList getFallbackWarehouse();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList">WarehouseInteractiveParametersFallbackWarehouseList</a>

---

##### `maxConcurrencyLevel`<sup>Required</sup> <a name="maxConcurrencyLevel" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.maxConcurrencyLevel"></a>

```java
public WarehouseInteractiveParametersMaxConcurrencyLevelList getMaxConcurrencyLevel();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList">WarehouseInteractiveParametersMaxConcurrencyLevelList</a>

---

##### `statementQueuedTimeoutInSeconds`<sup>Required</sup> <a name="statementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.statementQueuedTimeoutInSeconds"></a>

```java
public WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList getStatementQueuedTimeoutInSeconds();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList">WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList</a>

---

##### `statementTimeoutInSeconds`<sup>Required</sup> <a name="statementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.statementTimeoutInSeconds"></a>

```java
public WarehouseInteractiveParametersStatementTimeoutInSecondsList getStatementTimeoutInSeconds();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList">WarehouseInteractiveParametersStatementTimeoutInSecondsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.internalValue"></a>

```java
public WarehouseInteractiveParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParameters">WarehouseInteractiveParameters</a>

---


### WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList <a name="WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList;

new WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.get"></a>

```java
public WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference <a name="WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference;

new WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds">WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.internalValue"></a>

```java
public WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds">WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds</a>

---


### WarehouseInteractiveParametersStatementTimeoutInSecondsList <a name="WarehouseInteractiveParametersStatementTimeoutInSecondsList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractiveParametersStatementTimeoutInSecondsList;

new WarehouseInteractiveParametersStatementTimeoutInSecondsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.get"></a>

```java
public WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference <a name="WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference;

new WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSeconds">WarehouseInteractiveParametersStatementTimeoutInSeconds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.internalValue"></a>

```java
public WarehouseInteractiveParametersStatementTimeoutInSeconds getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSeconds">WarehouseInteractiveParametersStatementTimeoutInSeconds</a>

---


### WarehouseInteractiveShowOutputList <a name="WarehouseInteractiveShowOutputList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractiveShowOutputList;

new WarehouseInteractiveShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.get"></a>

```java
public WarehouseInteractiveShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### WarehouseInteractiveShowOutputOutputReference <a name="WarehouseInteractiveShowOutputOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractiveShowOutputOutputReference;

new WarehouseInteractiveShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.autoResume">autoResume</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.autoSuspend">autoSuspend</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.available">available</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.isCurrent">isCurrent</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.isDefault">isDefault</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.maxClusterCount">maxClusterCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.minClusterCount">minClusterCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.other">other</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.provisioning">provisioning</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.queued">queued</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.quiescing">quiescing</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.resourceMonitor">resourceMonitor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.resumedOn">resumedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.running">running</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.size">size</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.startedClusters">startedClusters</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.tables">tables</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutput">WarehouseInteractiveShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoResume`<sup>Required</sup> <a name="autoResume" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.autoResume"></a>

```java
public IResolvable getAutoResume();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `autoSuspend`<sup>Required</sup> <a name="autoSuspend" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.autoSuspend"></a>

```java
public java.lang.Number getAutoSuspend();
```

- *Type:* java.lang.Number

---

##### `available`<sup>Required</sup> <a name="available" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.available"></a>

```java
public java.lang.Number getAvailable();
```

- *Type:* java.lang.Number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `isCurrent`<sup>Required</sup> <a name="isCurrent" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.isCurrent"></a>

```java
public IResolvable getIsCurrent();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.isDefault"></a>

```java
public IResolvable getIsDefault();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `maxClusterCount`<sup>Required</sup> <a name="maxClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.maxClusterCount"></a>

```java
public java.lang.Number getMaxClusterCount();
```

- *Type:* java.lang.Number

---

##### `minClusterCount`<sup>Required</sup> <a name="minClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.minClusterCount"></a>

```java
public java.lang.Number getMinClusterCount();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `other`<sup>Required</sup> <a name="other" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.other"></a>

```java
public java.lang.Number getOther();
```

- *Type:* java.lang.Number

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.ownerRoleType"></a>

```java
public java.lang.String getOwnerRoleType();
```

- *Type:* java.lang.String

---

##### `provisioning`<sup>Required</sup> <a name="provisioning" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.provisioning"></a>

```java
public java.lang.Number getProvisioning();
```

- *Type:* java.lang.Number

---

##### `queued`<sup>Required</sup> <a name="queued" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.queued"></a>

```java
public java.lang.Number getQueued();
```

- *Type:* java.lang.Number

---

##### `quiescing`<sup>Required</sup> <a name="quiescing" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.quiescing"></a>

```java
public java.lang.Number getQuiescing();
```

- *Type:* java.lang.Number

---

##### `resourceMonitor`<sup>Required</sup> <a name="resourceMonitor" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.resourceMonitor"></a>

```java
public java.lang.String getResourceMonitor();
```

- *Type:* java.lang.String

---

##### `resumedOn`<sup>Required</sup> <a name="resumedOn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.resumedOn"></a>

```java
public java.lang.String getResumedOn();
```

- *Type:* java.lang.String

---

##### `running`<sup>Required</sup> <a name="running" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.running"></a>

```java
public java.lang.Number getRunning();
```

- *Type:* java.lang.Number

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.size"></a>

```java
public java.lang.String getSize();
```

- *Type:* java.lang.String

---

##### `startedClusters`<sup>Required</sup> <a name="startedClusters" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.startedClusters"></a>

```java
public java.lang.Number getStartedClusters();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.tables"></a>

```java
public java.util.List<java.lang.String> getTables();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.updatedOn"></a>

```java
public java.lang.String getUpdatedOn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.internalValue"></a>

```java
public WarehouseInteractiveShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutput">WarehouseInteractiveShowOutput</a>

---


### WarehouseInteractiveTimeoutsOutputReference <a name="WarehouseInteractiveTimeoutsOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_interactive.WarehouseInteractiveTimeoutsOutputReference;

new WarehouseInteractiveTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|WarehouseInteractiveTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a>

---



