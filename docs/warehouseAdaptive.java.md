# `warehouseAdaptive` Submodule <a name="`warehouseAdaptive` Submodule" id="@cdktn/provider-snowflake.warehouseAdaptive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WarehouseAdaptive <a name="WarehouseAdaptive" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive snowflake_warehouse_adaptive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_adaptive.WarehouseAdaptive;

WarehouseAdaptive.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .maxQueryPerformanceLevel(java.lang.String)
//  .queryThroughputMultiplier(java.lang.Number)
//  .statementQueuedTimeoutInSeconds(java.lang.Number)
//  .statementTimeoutInSeconds(java.lang.Number)
//  .timeouts(WarehouseAdaptiveTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Identifier for the adaptive warehouse; |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the adaptive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#id WarehouseAdaptive#id}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.maxQueryPerformanceLevel">maxQueryPerformanceLevel</a></code> | <code>java.lang.String</code> | Specifies the maximum query performance level for the adaptive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.queryThroughputMultiplier">queryThroughputMultiplier</a></code> | <code>java.lang.Number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the query throughput multiplier for the adaptive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.statementQueuedTimeoutInSeconds">statementQueuedTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on a warehouse before it is canceled by the system. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.statementTimeoutInSeconds">statementTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts">WarehouseAdaptiveTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Identifier for the adaptive warehouse;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#name WarehouseAdaptive#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the adaptive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#comment WarehouseAdaptive#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#id WarehouseAdaptive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxQueryPerformanceLevel`<sup>Optional</sup> <a name="maxQueryPerformanceLevel" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.maxQueryPerformanceLevel"></a>

- *Type:* java.lang.String

Specifies the maximum query performance level for the adaptive warehouse.

Determines the initial compute capacity. Valid values are (case-insensitive): `XSMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `XXLARGE` | `XXXLARGE` | `X4LARGE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#max_query_performance_level WarehouseAdaptive#max_query_performance_level}

---

##### `queryThroughputMultiplier`<sup>Optional</sup> <a name="queryThroughputMultiplier" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.queryThroughputMultiplier"></a>

- *Type:* java.lang.Number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the query throughput multiplier for the adaptive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#query_throughput_multiplier WarehouseAdaptive#query_throughput_multiplier}

---

##### `statementQueuedTimeoutInSeconds`<sup>Optional</sup> <a name="statementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.statementQueuedTimeoutInSeconds"></a>

- *Type:* java.lang.Number

Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on a warehouse before it is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#statement_queued_timeout_in_seconds WarehouseAdaptive#statement_queued_timeout_in_seconds}

---

##### `statementTimeoutInSeconds`<sup>Optional</sup> <a name="statementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.statementTimeoutInSeconds"></a>

- *Type:* java.lang.Number

Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#statement_timeout_in_seconds WarehouseAdaptive#statement_timeout_in_seconds}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts">WarehouseAdaptiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#timeouts WarehouseAdaptive#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetMaxQueryPerformanceLevel">resetMaxQueryPerformanceLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetQueryThroughputMultiplier">resetQueryThroughputMultiplier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetStatementQueuedTimeoutInSeconds">resetStatementQueuedTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetStatementTimeoutInSeconds">resetStatementTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.putTimeouts"></a>

```java
public void putTimeouts(WarehouseAdaptiveTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts">WarehouseAdaptiveTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetComment"></a>

```java
public void resetComment()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetId"></a>

```java
public void resetId()
```

##### `resetMaxQueryPerformanceLevel` <a name="resetMaxQueryPerformanceLevel" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetMaxQueryPerformanceLevel"></a>

```java
public void resetMaxQueryPerformanceLevel()
```

##### `resetQueryThroughputMultiplier` <a name="resetQueryThroughputMultiplier" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetQueryThroughputMultiplier"></a>

```java
public void resetQueryThroughputMultiplier()
```

##### `resetStatementQueuedTimeoutInSeconds` <a name="resetStatementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetStatementQueuedTimeoutInSeconds"></a>

```java
public void resetStatementQueuedTimeoutInSeconds()
```

##### `resetStatementTimeoutInSeconds` <a name="resetStatementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetStatementTimeoutInSeconds"></a>

```java
public void resetStatementTimeoutInSeconds()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WarehouseAdaptive resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.warehouse_adaptive.WarehouseAdaptive;

WarehouseAdaptive.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.warehouse_adaptive.WarehouseAdaptive;

WarehouseAdaptive.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.warehouse_adaptive.WarehouseAdaptive;

WarehouseAdaptive.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.warehouse_adaptive.WarehouseAdaptive;

WarehouseAdaptive.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),WarehouseAdaptive.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a WarehouseAdaptive resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the WarehouseAdaptive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing WarehouseAdaptive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the WarehouseAdaptive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList">WarehouseAdaptiveParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList">WarehouseAdaptiveShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference">WarehouseAdaptiveTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.warehouseType">warehouseType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.maxQueryPerformanceLevelInput">maxQueryPerformanceLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.queryThroughputMultiplierInput">queryThroughputMultiplierInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.statementQueuedTimeoutInSecondsInput">statementQueuedTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.statementTimeoutInSecondsInput">statementTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts">WarehouseAdaptiveTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.maxQueryPerformanceLevel">maxQueryPerformanceLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.queryThroughputMultiplier">queryThroughputMultiplier</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.statementQueuedTimeoutInSeconds">statementQueuedTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.statementTimeoutInSeconds">statementTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.parameters"></a>

```java
public WarehouseAdaptiveParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList">WarehouseAdaptiveParametersList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.showOutput"></a>

```java
public WarehouseAdaptiveShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList">WarehouseAdaptiveShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.timeouts"></a>

```java
public WarehouseAdaptiveTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference">WarehouseAdaptiveTimeoutsOutputReference</a>

---

##### `warehouseType`<sup>Required</sup> <a name="warehouseType" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.warehouseType"></a>

```java
public java.lang.String getWarehouseType();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxQueryPerformanceLevelInput`<sup>Optional</sup> <a name="maxQueryPerformanceLevelInput" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.maxQueryPerformanceLevelInput"></a>

```java
public java.lang.String getMaxQueryPerformanceLevelInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `queryThroughputMultiplierInput`<sup>Optional</sup> <a name="queryThroughputMultiplierInput" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.queryThroughputMultiplierInput"></a>

```java
public java.lang.Number getQueryThroughputMultiplierInput();
```

- *Type:* java.lang.Number

---

##### `statementQueuedTimeoutInSecondsInput`<sup>Optional</sup> <a name="statementQueuedTimeoutInSecondsInput" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.statementQueuedTimeoutInSecondsInput"></a>

```java
public java.lang.Number getStatementQueuedTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `statementTimeoutInSecondsInput`<sup>Optional</sup> <a name="statementTimeoutInSecondsInput" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.statementTimeoutInSecondsInput"></a>

```java
public java.lang.Number getStatementTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.timeoutsInput"></a>

```java
public IResolvable|WarehouseAdaptiveTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts">WarehouseAdaptiveTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxQueryPerformanceLevel`<sup>Required</sup> <a name="maxQueryPerformanceLevel" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.maxQueryPerformanceLevel"></a>

```java
public java.lang.String getMaxQueryPerformanceLevel();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `queryThroughputMultiplier`<sup>Required</sup> <a name="queryThroughputMultiplier" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.queryThroughputMultiplier"></a>

```java
public java.lang.Number getQueryThroughputMultiplier();
```

- *Type:* java.lang.Number

---

##### `statementQueuedTimeoutInSeconds`<sup>Required</sup> <a name="statementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.statementQueuedTimeoutInSeconds"></a>

```java
public java.lang.Number getStatementQueuedTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `statementTimeoutInSeconds`<sup>Required</sup> <a name="statementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.statementTimeoutInSeconds"></a>

```java
public java.lang.Number getStatementTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptive.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### WarehouseAdaptiveConfig <a name="WarehouseAdaptiveConfig" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_adaptive.WarehouseAdaptiveConfig;

WarehouseAdaptiveConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .maxQueryPerformanceLevel(java.lang.String)
//  .queryThroughputMultiplier(java.lang.Number)
//  .statementQueuedTimeoutInSeconds(java.lang.Number)
//  .statementTimeoutInSeconds(java.lang.Number)
//  .timeouts(WarehouseAdaptiveTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.name">name</a></code> | <code>java.lang.String</code> | Identifier for the adaptive warehouse; |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the adaptive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#id WarehouseAdaptive#id}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.maxQueryPerformanceLevel">maxQueryPerformanceLevel</a></code> | <code>java.lang.String</code> | Specifies the maximum query performance level for the adaptive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.queryThroughputMultiplier">queryThroughputMultiplier</a></code> | <code>java.lang.Number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the query throughput multiplier for the adaptive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.statementQueuedTimeoutInSeconds">statementQueuedTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on a warehouse before it is canceled by the system. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.statementTimeoutInSeconds">statementTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts">WarehouseAdaptiveTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Identifier for the adaptive warehouse;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#name WarehouseAdaptive#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the adaptive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#comment WarehouseAdaptive#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#id WarehouseAdaptive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxQueryPerformanceLevel`<sup>Optional</sup> <a name="maxQueryPerformanceLevel" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.maxQueryPerformanceLevel"></a>

```java
public java.lang.String getMaxQueryPerformanceLevel();
```

- *Type:* java.lang.String

Specifies the maximum query performance level for the adaptive warehouse.

Determines the initial compute capacity. Valid values are (case-insensitive): `XSMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `XXLARGE` | `XXXLARGE` | `X4LARGE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#max_query_performance_level WarehouseAdaptive#max_query_performance_level}

---

##### `queryThroughputMultiplier`<sup>Optional</sup> <a name="queryThroughputMultiplier" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.queryThroughputMultiplier"></a>

```java
public java.lang.Number getQueryThroughputMultiplier();
```

- *Type:* java.lang.Number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the query throughput multiplier for the adaptive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#query_throughput_multiplier WarehouseAdaptive#query_throughput_multiplier}

---

##### `statementQueuedTimeoutInSeconds`<sup>Optional</sup> <a name="statementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.statementQueuedTimeoutInSeconds"></a>

```java
public java.lang.Number getStatementQueuedTimeoutInSeconds();
```

- *Type:* java.lang.Number

Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on a warehouse before it is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#statement_queued_timeout_in_seconds WarehouseAdaptive#statement_queued_timeout_in_seconds}

---

##### `statementTimeoutInSeconds`<sup>Optional</sup> <a name="statementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.statementTimeoutInSeconds"></a>

```java
public java.lang.Number getStatementTimeoutInSeconds();
```

- *Type:* java.lang.Number

Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#statement_timeout_in_seconds WarehouseAdaptive#statement_timeout_in_seconds}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveConfig.property.timeouts"></a>

```java
public WarehouseAdaptiveTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts">WarehouseAdaptiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#timeouts WarehouseAdaptive#timeouts}

---

### WarehouseAdaptiveParameters <a name="WarehouseAdaptiveParameters" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParameters.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_adaptive.WarehouseAdaptiveParameters;

WarehouseAdaptiveParameters.builder()
    .build();
```


### WarehouseAdaptiveParametersStatementQueuedTimeoutInSeconds <a name="WarehouseAdaptiveParametersStatementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSeconds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSeconds.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_adaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSeconds;

WarehouseAdaptiveParametersStatementQueuedTimeoutInSeconds.builder()
    .build();
```


### WarehouseAdaptiveParametersStatementTimeoutInSeconds <a name="WarehouseAdaptiveParametersStatementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSeconds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSeconds.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_adaptive.WarehouseAdaptiveParametersStatementTimeoutInSeconds;

WarehouseAdaptiveParametersStatementTimeoutInSeconds.builder()
    .build();
```


### WarehouseAdaptiveShowOutput <a name="WarehouseAdaptiveShowOutput" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_adaptive.WarehouseAdaptiveShowOutput;

WarehouseAdaptiveShowOutput.builder()
    .build();
```


### WarehouseAdaptiveTimeouts <a name="WarehouseAdaptiveTimeouts" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_adaptive.WarehouseAdaptiveTimeouts;

WarehouseAdaptiveTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#create WarehouseAdaptive#create}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#delete WarehouseAdaptive#delete}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#read WarehouseAdaptive#read}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#update WarehouseAdaptive#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#create WarehouseAdaptive#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#delete WarehouseAdaptive#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#read WarehouseAdaptive#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.16.0/docs/resources/warehouse_adaptive#update WarehouseAdaptive#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WarehouseAdaptiveParametersList <a name="WarehouseAdaptiveParametersList" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_adaptive.WarehouseAdaptiveParametersList;

new WarehouseAdaptiveParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.get"></a>

```java
public WarehouseAdaptiveParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### WarehouseAdaptiveParametersOutputReference <a name="WarehouseAdaptiveParametersOutputReference" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_adaptive.WarehouseAdaptiveParametersOutputReference;

new WarehouseAdaptiveParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.property.statementQueuedTimeoutInSeconds">statementQueuedTimeoutInSeconds</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList">WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.property.statementTimeoutInSeconds">statementTimeoutInSeconds</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList">WarehouseAdaptiveParametersStatementTimeoutInSecondsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParameters">WarehouseAdaptiveParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statementQueuedTimeoutInSeconds`<sup>Required</sup> <a name="statementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.property.statementQueuedTimeoutInSeconds"></a>

```java
public WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList getStatementQueuedTimeoutInSeconds();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList">WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList</a>

---

##### `statementTimeoutInSeconds`<sup>Required</sup> <a name="statementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.property.statementTimeoutInSeconds"></a>

```java
public WarehouseAdaptiveParametersStatementTimeoutInSecondsList getStatementTimeoutInSeconds();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList">WarehouseAdaptiveParametersStatementTimeoutInSecondsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersOutputReference.property.internalValue"></a>

```java
public WarehouseAdaptiveParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParameters">WarehouseAdaptiveParameters</a>

---


### WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList <a name="WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_adaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList;

new WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.get"></a>

```java
public WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference <a name="WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_adaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference;

new WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSeconds">WarehouseAdaptiveParametersStatementQueuedTimeoutInSeconds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.internalValue"></a>

```java
public WarehouseAdaptiveParametersStatementQueuedTimeoutInSeconds getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementQueuedTimeoutInSeconds">WarehouseAdaptiveParametersStatementQueuedTimeoutInSeconds</a>

---


### WarehouseAdaptiveParametersStatementTimeoutInSecondsList <a name="WarehouseAdaptiveParametersStatementTimeoutInSecondsList" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_adaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList;

new WarehouseAdaptiveParametersStatementTimeoutInSecondsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.get"></a>

```java
public WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference <a name="WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_adaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference;

new WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSeconds">WarehouseAdaptiveParametersStatementTimeoutInSeconds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSecondsOutputReference.property.internalValue"></a>

```java
public WarehouseAdaptiveParametersStatementTimeoutInSeconds getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveParametersStatementTimeoutInSeconds">WarehouseAdaptiveParametersStatementTimeoutInSeconds</a>

---


### WarehouseAdaptiveShowOutputList <a name="WarehouseAdaptiveShowOutputList" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_adaptive.WarehouseAdaptiveShowOutputList;

new WarehouseAdaptiveShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.get"></a>

```java
public WarehouseAdaptiveShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### WarehouseAdaptiveShowOutputOutputReference <a name="WarehouseAdaptiveShowOutputOutputReference" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_adaptive.WarehouseAdaptiveShowOutputOutputReference;

new WarehouseAdaptiveShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.autoResume">autoResume</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.available">available</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.isCurrent">isCurrent</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.isDefault">isDefault</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.maxQueryPerformanceLevel">maxQueryPerformanceLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.other">other</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.provisioning">provisioning</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.queryThroughputMultiplier">queryThroughputMultiplier</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.queued">queued</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.quiescing">quiescing</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.resourceMonitor">resourceMonitor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.resumedOn">resumedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.running">running</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutput">WarehouseAdaptiveShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoResume`<sup>Required</sup> <a name="autoResume" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.autoResume"></a>

```java
public IResolvable getAutoResume();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `available`<sup>Required</sup> <a name="available" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.available"></a>

```java
public java.lang.Number getAvailable();
```

- *Type:* java.lang.Number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `isCurrent`<sup>Required</sup> <a name="isCurrent" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.isCurrent"></a>

```java
public IResolvable getIsCurrent();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.isDefault"></a>

```java
public IResolvable getIsDefault();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `maxQueryPerformanceLevel`<sup>Required</sup> <a name="maxQueryPerformanceLevel" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.maxQueryPerformanceLevel"></a>

```java
public java.lang.String getMaxQueryPerformanceLevel();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `other`<sup>Required</sup> <a name="other" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.other"></a>

```java
public java.lang.Number getOther();
```

- *Type:* java.lang.Number

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.ownerRoleType"></a>

```java
public java.lang.String getOwnerRoleType();
```

- *Type:* java.lang.String

---

##### `provisioning`<sup>Required</sup> <a name="provisioning" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.provisioning"></a>

```java
public java.lang.Number getProvisioning();
```

- *Type:* java.lang.Number

---

##### `queryThroughputMultiplier`<sup>Required</sup> <a name="queryThroughputMultiplier" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.queryThroughputMultiplier"></a>

```java
public java.lang.Number getQueryThroughputMultiplier();
```

- *Type:* java.lang.Number

---

##### `queued`<sup>Required</sup> <a name="queued" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.queued"></a>

```java
public java.lang.Number getQueued();
```

- *Type:* java.lang.Number

---

##### `quiescing`<sup>Required</sup> <a name="quiescing" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.quiescing"></a>

```java
public java.lang.Number getQuiescing();
```

- *Type:* java.lang.Number

---

##### `resourceMonitor`<sup>Required</sup> <a name="resourceMonitor" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.resourceMonitor"></a>

```java
public java.lang.String getResourceMonitor();
```

- *Type:* java.lang.String

---

##### `resumedOn`<sup>Required</sup> <a name="resumedOn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.resumedOn"></a>

```java
public java.lang.String getResumedOn();
```

- *Type:* java.lang.String

---

##### `running`<sup>Required</sup> <a name="running" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.running"></a>

```java
public java.lang.Number getRunning();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.updatedOn"></a>

```java
public java.lang.String getUpdatedOn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutputOutputReference.property.internalValue"></a>

```java
public WarehouseAdaptiveShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveShowOutput">WarehouseAdaptiveShowOutput</a>

---


### WarehouseAdaptiveTimeoutsOutputReference <a name="WarehouseAdaptiveTimeoutsOutputReference" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.warehouse_adaptive.WarehouseAdaptiveTimeoutsOutputReference;

new WarehouseAdaptiveTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts">WarehouseAdaptiveTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|WarehouseAdaptiveTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.warehouseAdaptive.WarehouseAdaptiveTimeouts">WarehouseAdaptiveTimeouts</a>

---



