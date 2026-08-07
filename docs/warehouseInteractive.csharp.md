# `warehouseInteractive` Submodule <a name="`warehouseInteractive` Submodule" id="@cdktn/provider-snowflake.warehouseInteractive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WarehouseInteractive <a name="WarehouseInteractive" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive snowflake_warehouse_interactive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new WarehouseInteractive(Construct Scope, string Id, WarehouseInteractiveConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig">WarehouseInteractiveConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig">WarehouseInteractiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetAutoResume">ResetAutoResume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetAutoSuspend">ResetAutoSuspend</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetFallbackWarehouse">ResetFallbackWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetInitiallySuspended">ResetInitiallySuspended</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMaxClusterCount">ResetMaxClusterCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMaxConcurrencyLevel">ResetMaxConcurrencyLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMinClusterCount">ResetMinClusterCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetResourceMonitor">ResetResourceMonitor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetStatementQueuedTimeoutInSeconds">ResetStatementQueuedTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetStatementTimeoutInSeconds">ResetStatementTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetTables">ResetTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetWarehouseSize">ResetWarehouseSize</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.putTimeouts"></a>

```csharp
private void PutTimeouts(WarehouseInteractiveTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a>

---

##### `ResetAutoResume` <a name="ResetAutoResume" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetAutoResume"></a>

```csharp
private void ResetAutoResume()
```

##### `ResetAutoSuspend` <a name="ResetAutoSuspend" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetAutoSuspend"></a>

```csharp
private void ResetAutoSuspend()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetFallbackWarehouse` <a name="ResetFallbackWarehouse" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetFallbackWarehouse"></a>

```csharp
private void ResetFallbackWarehouse()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInitiallySuspended` <a name="ResetInitiallySuspended" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetInitiallySuspended"></a>

```csharp
private void ResetInitiallySuspended()
```

##### `ResetMaxClusterCount` <a name="ResetMaxClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMaxClusterCount"></a>

```csharp
private void ResetMaxClusterCount()
```

##### `ResetMaxConcurrencyLevel` <a name="ResetMaxConcurrencyLevel" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMaxConcurrencyLevel"></a>

```csharp
private void ResetMaxConcurrencyLevel()
```

##### `ResetMinClusterCount` <a name="ResetMinClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetMinClusterCount"></a>

```csharp
private void ResetMinClusterCount()
```

##### `ResetResourceMonitor` <a name="ResetResourceMonitor" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetResourceMonitor"></a>

```csharp
private void ResetResourceMonitor()
```

##### `ResetStatementQueuedTimeoutInSeconds` <a name="ResetStatementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetStatementQueuedTimeoutInSeconds"></a>

```csharp
private void ResetStatementQueuedTimeoutInSeconds()
```

##### `ResetStatementTimeoutInSeconds` <a name="ResetStatementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetStatementTimeoutInSeconds"></a>

```csharp
private void ResetStatementTimeoutInSeconds()
```

##### `ResetTables` <a name="ResetTables" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetTables"></a>

```csharp
private void ResetTables()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWarehouseSize` <a name="ResetWarehouseSize" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.resetWarehouseSize"></a>

```csharp
private void ResetWarehouseSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WarehouseInteractive resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

WarehouseInteractive.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

WarehouseInteractive.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

WarehouseInteractive.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

WarehouseInteractive.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WarehouseInteractive resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WarehouseInteractive to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WarehouseInteractive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WarehouseInteractive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList">WarehouseInteractiveParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList">WarehouseInteractiveShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference">WarehouseInteractiveTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseType">WarehouseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoResumeInput">AutoResumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoSuspendInput">AutoSuspendInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fallbackWarehouseInput">FallbackWarehouseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.initiallySuspendedInput">InitiallySuspendedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxClusterCountInput">MaxClusterCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxConcurrencyLevelInput">MaxConcurrencyLevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.minClusterCountInput">MinClusterCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.resourceMonitorInput">ResourceMonitorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementQueuedTimeoutInSecondsInput">StatementQueuedTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementTimeoutInSecondsInput">StatementTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tablesInput">TablesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseSizeInput">WarehouseSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoResume">AutoResume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoSuspend">AutoSuspend</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fallbackWarehouse">FallbackWarehouse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.initiallySuspended">InitiallySuspended</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxClusterCount">MaxClusterCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxConcurrencyLevel">MaxConcurrencyLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.minClusterCount">MinClusterCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.resourceMonitor">ResourceMonitor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementQueuedTimeoutInSeconds">StatementQueuedTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementTimeoutInSeconds">StatementTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tables">Tables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseSize">WarehouseSize</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.parameters"></a>

```csharp
public WarehouseInteractiveParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList">WarehouseInteractiveParametersList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.showOutput"></a>

```csharp
public WarehouseInteractiveShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList">WarehouseInteractiveShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.timeouts"></a>

```csharp
public WarehouseInteractiveTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference">WarehouseInteractiveTimeoutsOutputReference</a>

---

##### `WarehouseType`<sup>Required</sup> <a name="WarehouseType" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseType"></a>

```csharp
public string WarehouseType { get; }
```

- *Type:* string

---

##### `AutoResumeInput`<sup>Optional</sup> <a name="AutoResumeInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoResumeInput"></a>

```csharp
public string AutoResumeInput { get; }
```

- *Type:* string

---

##### `AutoSuspendInput`<sup>Optional</sup> <a name="AutoSuspendInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoSuspendInput"></a>

```csharp
public double AutoSuspendInput { get; }
```

- *Type:* double

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `FallbackWarehouseInput`<sup>Optional</sup> <a name="FallbackWarehouseInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fallbackWarehouseInput"></a>

```csharp
public string FallbackWarehouseInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitiallySuspendedInput`<sup>Optional</sup> <a name="InitiallySuspendedInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.initiallySuspendedInput"></a>

```csharp
public bool|IResolvable InitiallySuspendedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxClusterCountInput`<sup>Optional</sup> <a name="MaxClusterCountInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxClusterCountInput"></a>

```csharp
public double MaxClusterCountInput { get; }
```

- *Type:* double

---

##### `MaxConcurrencyLevelInput`<sup>Optional</sup> <a name="MaxConcurrencyLevelInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxConcurrencyLevelInput"></a>

```csharp
public double MaxConcurrencyLevelInput { get; }
```

- *Type:* double

---

##### `MinClusterCountInput`<sup>Optional</sup> <a name="MinClusterCountInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.minClusterCountInput"></a>

```csharp
public double MinClusterCountInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceMonitorInput`<sup>Optional</sup> <a name="ResourceMonitorInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.resourceMonitorInput"></a>

```csharp
public string ResourceMonitorInput { get; }
```

- *Type:* string

---

##### `StatementQueuedTimeoutInSecondsInput`<sup>Optional</sup> <a name="StatementQueuedTimeoutInSecondsInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementQueuedTimeoutInSecondsInput"></a>

```csharp
public double StatementQueuedTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `StatementTimeoutInSecondsInput`<sup>Optional</sup> <a name="StatementTimeoutInSecondsInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementTimeoutInSecondsInput"></a>

```csharp
public double StatementTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `TablesInput`<sup>Optional</sup> <a name="TablesInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tablesInput"></a>

```csharp
public string[] TablesInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.timeoutsInput"></a>

```csharp
public IResolvable|WarehouseInteractiveTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a>

---

##### `WarehouseSizeInput`<sup>Optional</sup> <a name="WarehouseSizeInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseSizeInput"></a>

```csharp
public string WarehouseSizeInput { get; }
```

- *Type:* string

---

##### `AutoResume`<sup>Required</sup> <a name="AutoResume" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoResume"></a>

```csharp
public string AutoResume { get; }
```

- *Type:* string

---

##### `AutoSuspend`<sup>Required</sup> <a name="AutoSuspend" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.autoSuspend"></a>

```csharp
public double AutoSuspend { get; }
```

- *Type:* double

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `FallbackWarehouse`<sup>Required</sup> <a name="FallbackWarehouse" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.fallbackWarehouse"></a>

```csharp
public string FallbackWarehouse { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitiallySuspended`<sup>Required</sup> <a name="InitiallySuspended" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.initiallySuspended"></a>

```csharp
public bool|IResolvable InitiallySuspended { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxClusterCount`<sup>Required</sup> <a name="MaxClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxClusterCount"></a>

```csharp
public double MaxClusterCount { get; }
```

- *Type:* double

---

##### `MaxConcurrencyLevel`<sup>Required</sup> <a name="MaxConcurrencyLevel" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.maxConcurrencyLevel"></a>

```csharp
public double MaxConcurrencyLevel { get; }
```

- *Type:* double

---

##### `MinClusterCount`<sup>Required</sup> <a name="MinClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.minClusterCount"></a>

```csharp
public double MinClusterCount { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceMonitor`<sup>Required</sup> <a name="ResourceMonitor" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.resourceMonitor"></a>

```csharp
public string ResourceMonitor { get; }
```

- *Type:* string

---

##### `StatementQueuedTimeoutInSeconds`<sup>Required</sup> <a name="StatementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementQueuedTimeoutInSeconds"></a>

```csharp
public double StatementQueuedTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `StatementTimeoutInSeconds`<sup>Required</sup> <a name="StatementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.statementTimeoutInSeconds"></a>

```csharp
public double StatementTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `Tables`<sup>Required</sup> <a name="Tables" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tables"></a>

```csharp
public string[] Tables { get; }
```

- *Type:* string[]

---

##### `WarehouseSize`<sup>Required</sup> <a name="WarehouseSize" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.warehouseSize"></a>

```csharp
public string WarehouseSize { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractive.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WarehouseInteractiveConfig <a name="WarehouseInteractiveConfig" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new WarehouseInteractiveConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string AutoResume = null,
    double AutoSuspend = null,
    string Comment = null,
    string FallbackWarehouse = null,
    string Id = null,
    bool|IResolvable InitiallySuspended = null,
    double MaxClusterCount = null,
    double MaxConcurrencyLevel = null,
    double MinClusterCount = null,
    string ResourceMonitor = null,
    double StatementQueuedTimeoutInSeconds = null,
    double StatementTimeoutInSeconds = null,
    string[] Tables = null,
    WarehouseInteractiveTimeouts Timeouts = null,
    string WarehouseSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.name">Name</a></code> | <code>string</code> | Identifier for the interactive warehouse; |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.autoResume">AutoResume</a></code> | <code>string</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically resume an interactive warehouse when a SQL statement (e.g. query) is submitted to it. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.autoSuspend">AutoSuspend</a></code> | <code>double</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of seconds of inactivity after which an interactive warehouse is automatically suspended. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.fallbackWarehouse">FallbackWarehouse</a></code> | <code>string</code> | Specifies the name of the fallback warehouse for the interactive warehouse. For more information about this resource, see [docs](./warehouse). |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#id WarehouseInteractive#id}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.initiallySuspended">InitiallySuspended</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the interactive warehouse is created initially in the ‘Suspended’ state. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.maxClusterCount">MaxClusterCount</a></code> | <code>double</code> | Specifies the maximum number of server clusters for the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.maxConcurrencyLevel">MaxConcurrencyLevel</a></code> | <code>double</code> | Object parameter that specifies the concurrency level for SQL statements (i.e. queries and DML) executed by an interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.minClusterCount">MinClusterCount</a></code> | <code>double</code> | Specifies the minimum number of server clusters for the interactive warehouse (only applies to multi-cluster warehouses). |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.resourceMonitor">ResourceMonitor</a></code> | <code>string</code> | Specifies the name of a resource monitor that is explicitly assigned to the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.statementQueuedTimeoutInSeconds">StatementQueuedTimeoutInSeconds</a></code> | <code>double</code> | Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on an interactive warehouse before it is canceled by the system. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.statementTimeoutInSeconds">StatementTimeoutInSeconds</a></code> | <code>double</code> | Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.tables">Tables</a></code> | <code>string[]</code> | Specifies the fully qualified names of the tables associated with the interactive warehouse. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.warehouseSize">WarehouseSize</a></code> | <code>string</code> | Specifies the size of the interactive warehouse. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Identifier for the interactive warehouse;

must be unique for your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#name WarehouseInteractive#name}

---

##### `AutoResume`<sup>Optional</sup> <a name="AutoResume" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.autoResume"></a>

```csharp
public string AutoResume { get; set; }
```

- *Type:* string

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether to automatically resume an interactive warehouse when a SQL statement (e.g. query) is submitted to it. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#auto_resume WarehouseInteractive#auto_resume}

---

##### `AutoSuspend`<sup>Optional</sup> <a name="AutoSuspend" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.autoSuspend"></a>

```csharp
public double AutoSuspend { get; set; }
```

- *Type:* double

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of seconds of inactivity after which an interactive warehouse is automatically suspended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#auto_suspend WarehouseInteractive#auto_suspend}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the interactive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#comment WarehouseInteractive#comment}

---

##### `FallbackWarehouse`<sup>Optional</sup> <a name="FallbackWarehouse" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.fallbackWarehouse"></a>

```csharp
public string FallbackWarehouse { get; set; }
```

- *Type:* string

Specifies the name of the fallback warehouse for the interactive warehouse. For more information about this resource, see [docs](./warehouse).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#fallback_warehouse WarehouseInteractive#fallback_warehouse}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#id WarehouseInteractive#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitiallySuspended`<sup>Optional</sup> <a name="InitiallySuspended" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.initiallySuspended"></a>

```csharp
public bool|IResolvable InitiallySuspended { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the interactive warehouse is created initially in the ‘Suspended’ state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#initially_suspended WarehouseInteractive#initially_suspended}

---

##### `MaxClusterCount`<sup>Optional</sup> <a name="MaxClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.maxClusterCount"></a>

```csharp
public double MaxClusterCount { get; set; }
```

- *Type:* double

Specifies the maximum number of server clusters for the interactive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#max_cluster_count WarehouseInteractive#max_cluster_count}

---

##### `MaxConcurrencyLevel`<sup>Optional</sup> <a name="MaxConcurrencyLevel" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.maxConcurrencyLevel"></a>

```csharp
public double MaxConcurrencyLevel { get; set; }
```

- *Type:* double

Object parameter that specifies the concurrency level for SQL statements (i.e. queries and DML) executed by an interactive warehouse.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#max_concurrency_level WarehouseInteractive#max_concurrency_level}

---

##### `MinClusterCount`<sup>Optional</sup> <a name="MinClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.minClusterCount"></a>

```csharp
public double MinClusterCount { get; set; }
```

- *Type:* double

Specifies the minimum number of server clusters for the interactive warehouse (only applies to multi-cluster warehouses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#min_cluster_count WarehouseInteractive#min_cluster_count}

---

##### `ResourceMonitor`<sup>Optional</sup> <a name="ResourceMonitor" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.resourceMonitor"></a>

```csharp
public string ResourceMonitor { get; set; }
```

- *Type:* string

Specifies the name of a resource monitor that is explicitly assigned to the interactive warehouse.

For more information about this resource, see [docs](./resource_monitor).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#resource_monitor WarehouseInteractive#resource_monitor}

---

##### `StatementQueuedTimeoutInSeconds`<sup>Optional</sup> <a name="StatementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.statementQueuedTimeoutInSeconds"></a>

```csharp
public double StatementQueuedTimeoutInSeconds { get; set; }
```

- *Type:* double

Object parameter that specifies the time, in seconds, a SQL statement (query, DDL, DML, etc.) can be queued on an interactive warehouse before it is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#statement_queued_timeout_in_seconds WarehouseInteractive#statement_queued_timeout_in_seconds}

---

##### `StatementTimeoutInSeconds`<sup>Optional</sup> <a name="StatementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.statementTimeoutInSeconds"></a>

```csharp
public double StatementTimeoutInSeconds { get; set; }
```

- *Type:* double

Specifies the time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#statement_timeout_in_seconds WarehouseInteractive#statement_timeout_in_seconds}

---

##### `Tables`<sup>Optional</sup> <a name="Tables" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.tables"></a>

```csharp
public string[] Tables { get; set; }
```

- *Type:* string[]

Specifies the fully qualified names of the tables associated with the interactive warehouse.

Changes are applied incrementally (ADD TABLES / DROP TABLES) rather than by full re-association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#tables WarehouseInteractive#tables}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.timeouts"></a>

```csharp
public WarehouseInteractiveTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#timeouts WarehouseInteractive#timeouts}

---

##### `WarehouseSize`<sup>Optional</sup> <a name="WarehouseSize" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveConfig.property.warehouseSize"></a>

```csharp
public string WarehouseSize { get; set; }
```

- *Type:* string

Specifies the size of the interactive warehouse.

Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. Note: changing the size briefly suspends and resumes the warehouse to apply the resize (an interactive warehouse cannot be resized while running); removing the size from config will result in the resource recreation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#warehouse_size WarehouseInteractive#warehouse_size}

---

### WarehouseInteractiveParameters <a name="WarehouseInteractiveParameters" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new WarehouseInteractiveParameters {

};
```


### WarehouseInteractiveParametersFallbackWarehouse <a name="WarehouseInteractiveParametersFallbackWarehouse" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouse.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new WarehouseInteractiveParametersFallbackWarehouse {

};
```


### WarehouseInteractiveParametersMaxConcurrencyLevel <a name="WarehouseInteractiveParametersMaxConcurrencyLevel" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new WarehouseInteractiveParametersMaxConcurrencyLevel {

};
```


### WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds <a name="WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds {

};
```


### WarehouseInteractiveParametersStatementTimeoutInSeconds <a name="WarehouseInteractiveParametersStatementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSeconds"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSeconds.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new WarehouseInteractiveParametersStatementTimeoutInSeconds {

};
```


### WarehouseInteractiveShowOutput <a name="WarehouseInteractiveShowOutput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new WarehouseInteractiveShowOutput {

};
```


### WarehouseInteractiveTimeouts <a name="WarehouseInteractiveTimeouts" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new WarehouseInteractiveTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#create WarehouseInteractive#create}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#delete WarehouseInteractive#delete}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#read WarehouseInteractive#read}. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#update WarehouseInteractive#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#create WarehouseInteractive#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#delete WarehouseInteractive#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#read WarehouseInteractive#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/warehouse_interactive#update WarehouseInteractive#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WarehouseInteractiveParametersFallbackWarehouseList <a name="WarehouseInteractiveParametersFallbackWarehouseList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new WarehouseInteractiveParametersFallbackWarehouseList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.get"></a>

```csharp
private WarehouseInteractiveParametersFallbackWarehouseOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### WarehouseInteractiveParametersFallbackWarehouseOutputReference <a name="WarehouseInteractiveParametersFallbackWarehouseOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new WarehouseInteractiveParametersFallbackWarehouseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouse">WarehouseInteractiveParametersFallbackWarehouse</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseOutputReference.property.internalValue"></a>

```csharp
public WarehouseInteractiveParametersFallbackWarehouse InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouse">WarehouseInteractiveParametersFallbackWarehouse</a>

---


### WarehouseInteractiveParametersList <a name="WarehouseInteractiveParametersList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new WarehouseInteractiveParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.get"></a>

```csharp
private WarehouseInteractiveParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### WarehouseInteractiveParametersMaxConcurrencyLevelList <a name="WarehouseInteractiveParametersMaxConcurrencyLevelList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new WarehouseInteractiveParametersMaxConcurrencyLevelList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.get"></a>

```csharp
private WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference <a name="WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevel">WarehouseInteractiveParametersMaxConcurrencyLevel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelOutputReference.property.internalValue"></a>

```csharp
public WarehouseInteractiveParametersMaxConcurrencyLevel InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevel">WarehouseInteractiveParametersMaxConcurrencyLevel</a>

---


### WarehouseInteractiveParametersOutputReference <a name="WarehouseInteractiveParametersOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new WarehouseInteractiveParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.fallbackWarehouse">FallbackWarehouse</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList">WarehouseInteractiveParametersFallbackWarehouseList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.maxConcurrencyLevel">MaxConcurrencyLevel</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList">WarehouseInteractiveParametersMaxConcurrencyLevelList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.statementQueuedTimeoutInSeconds">StatementQueuedTimeoutInSeconds</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList">WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.statementTimeoutInSeconds">StatementTimeoutInSeconds</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList">WarehouseInteractiveParametersStatementTimeoutInSecondsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParameters">WarehouseInteractiveParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FallbackWarehouse`<sup>Required</sup> <a name="FallbackWarehouse" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.fallbackWarehouse"></a>

```csharp
public WarehouseInteractiveParametersFallbackWarehouseList FallbackWarehouse { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersFallbackWarehouseList">WarehouseInteractiveParametersFallbackWarehouseList</a>

---

##### `MaxConcurrencyLevel`<sup>Required</sup> <a name="MaxConcurrencyLevel" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.maxConcurrencyLevel"></a>

```csharp
public WarehouseInteractiveParametersMaxConcurrencyLevelList MaxConcurrencyLevel { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersMaxConcurrencyLevelList">WarehouseInteractiveParametersMaxConcurrencyLevelList</a>

---

##### `StatementQueuedTimeoutInSeconds`<sup>Required</sup> <a name="StatementQueuedTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.statementQueuedTimeoutInSeconds"></a>

```csharp
public WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList StatementQueuedTimeoutInSeconds { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList">WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList</a>

---

##### `StatementTimeoutInSeconds`<sup>Required</sup> <a name="StatementTimeoutInSeconds" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.statementTimeoutInSeconds"></a>

```csharp
public WarehouseInteractiveParametersStatementTimeoutInSecondsList StatementTimeoutInSeconds { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList">WarehouseInteractiveParametersStatementTimeoutInSecondsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersOutputReference.property.internalValue"></a>

```csharp
public WarehouseInteractiveParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParameters">WarehouseInteractiveParameters</a>

---


### WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList <a name="WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.get"></a>

```csharp
private WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference <a name="WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds">WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSecondsOutputReference.property.internalValue"></a>

```csharp
public WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds">WarehouseInteractiveParametersStatementQueuedTimeoutInSeconds</a>

---


### WarehouseInteractiveParametersStatementTimeoutInSecondsList <a name="WarehouseInteractiveParametersStatementTimeoutInSecondsList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new WarehouseInteractiveParametersStatementTimeoutInSecondsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.get"></a>

```csharp
private WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference <a name="WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSeconds">WarehouseInteractiveParametersStatementTimeoutInSeconds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSecondsOutputReference.property.internalValue"></a>

```csharp
public WarehouseInteractiveParametersStatementTimeoutInSeconds InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveParametersStatementTimeoutInSeconds">WarehouseInteractiveParametersStatementTimeoutInSeconds</a>

---


### WarehouseInteractiveShowOutputList <a name="WarehouseInteractiveShowOutputList" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new WarehouseInteractiveShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.get"></a>

```csharp
private WarehouseInteractiveShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### WarehouseInteractiveShowOutputOutputReference <a name="WarehouseInteractiveShowOutputOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new WarehouseInteractiveShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.autoResume">AutoResume</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.autoSuspend">AutoSuspend</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.available">Available</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.isCurrent">IsCurrent</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.isDefault">IsDefault</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.maxClusterCount">MaxClusterCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.minClusterCount">MinClusterCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.other">Other</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.provisioning">Provisioning</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.queued">Queued</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.quiescing">Quiescing</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.resourceMonitor">ResourceMonitor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.resumedOn">ResumedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.running">Running</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.size">Size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.startedClusters">StartedClusters</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.tables">Tables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.updatedOn">UpdatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutput">WarehouseInteractiveShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoResume`<sup>Required</sup> <a name="AutoResume" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.autoResume"></a>

```csharp
public IResolvable AutoResume { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AutoSuspend`<sup>Required</sup> <a name="AutoSuspend" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.autoSuspend"></a>

```csharp
public double AutoSuspend { get; }
```

- *Type:* double

---

##### `Available`<sup>Required</sup> <a name="Available" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.available"></a>

```csharp
public double Available { get; }
```

- *Type:* double

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `IsCurrent`<sup>Required</sup> <a name="IsCurrent" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.isCurrent"></a>

```csharp
public IResolvable IsCurrent { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.isDefault"></a>

```csharp
public IResolvable IsDefault { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MaxClusterCount`<sup>Required</sup> <a name="MaxClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.maxClusterCount"></a>

```csharp
public double MaxClusterCount { get; }
```

- *Type:* double

---

##### `MinClusterCount`<sup>Required</sup> <a name="MinClusterCount" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.minClusterCount"></a>

```csharp
public double MinClusterCount { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Other`<sup>Required</sup> <a name="Other" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.other"></a>

```csharp
public double Other { get; }
```

- *Type:* double

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `Provisioning`<sup>Required</sup> <a name="Provisioning" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.provisioning"></a>

```csharp
public double Provisioning { get; }
```

- *Type:* double

---

##### `Queued`<sup>Required</sup> <a name="Queued" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.queued"></a>

```csharp
public double Queued { get; }
```

- *Type:* double

---

##### `Quiescing`<sup>Required</sup> <a name="Quiescing" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.quiescing"></a>

```csharp
public double Quiescing { get; }
```

- *Type:* double

---

##### `ResourceMonitor`<sup>Required</sup> <a name="ResourceMonitor" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.resourceMonitor"></a>

```csharp
public string ResourceMonitor { get; }
```

- *Type:* string

---

##### `ResumedOn`<sup>Required</sup> <a name="ResumedOn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.resumedOn"></a>

```csharp
public string ResumedOn { get; }
```

- *Type:* string

---

##### `Running`<sup>Required</sup> <a name="Running" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.running"></a>

```csharp
public double Running { get; }
```

- *Type:* double

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.size"></a>

```csharp
public string Size { get; }
```

- *Type:* string

---

##### `StartedClusters`<sup>Required</sup> <a name="StartedClusters" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.startedClusters"></a>

```csharp
public double StartedClusters { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tables`<sup>Required</sup> <a name="Tables" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.tables"></a>

```csharp
public string[] Tables { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.updatedOn"></a>

```csharp
public string UpdatedOn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutputOutputReference.property.internalValue"></a>

```csharp
public WarehouseInteractiveShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveShowOutput">WarehouseInteractiveShowOutput</a>

---


### WarehouseInteractiveTimeoutsOutputReference <a name="WarehouseInteractiveTimeoutsOutputReference" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new WarehouseInteractiveTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WarehouseInteractiveTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.warehouseInteractive.WarehouseInteractiveTimeouts">WarehouseInteractiveTimeouts</a>

---



