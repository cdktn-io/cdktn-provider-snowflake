# `hybridTable` Submodule <a name="`hybridTable` Submodule" id="@cdktn/provider-snowflake.hybridTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HybridTable <a name="HybridTable" id="@cdktn/provider-snowflake.hybridTable.HybridTable"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table snowflake_hybrid_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTable(Construct Scope, string Id, HybridTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig">HybridTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.hybridTable.HybridTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig">HybridTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putColumn">PutColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putForeignKeyConstraint">PutForeignKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putIndex">PutIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putPrimaryKeyConstraint">PutPrimaryKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.putUniqueConstraint">PutUniqueConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetDataRetentionTimeInDays">ResetDataRetentionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetForeignKeyConstraint">ResetForeignKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetIndex">ResetIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetMaxDataExtensionTimeInDays">ResetMaxDataExtensionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.resetUniqueConstraint">ResetUniqueConstraint</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.hybridTable.HybridTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.hybridTable.HybridTable.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.hybridTable.HybridTable.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.hybridTable.HybridTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.hybridTable.HybridTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.hybridTable.HybridTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.hybridTable.HybridTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.hybridTable.HybridTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.hybridTable.HybridTable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.hybridTable.HybridTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.hybridTable.HybridTable.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.hybridTable.HybridTable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.hybridTable.HybridTable.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutColumn` <a name="PutColumn" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putColumn"></a>

```csharp
private void PutColumn(IResolvable|HybridTableColumn[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putColumn.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>[]

---

##### `PutForeignKeyConstraint` <a name="PutForeignKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putForeignKeyConstraint"></a>

```csharp
private void PutForeignKeyConstraint(IResolvable|HybridTableForeignKeyConstraint[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putForeignKeyConstraint.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>[]

---

##### `PutIndex` <a name="PutIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putIndex"></a>

```csharp
private void PutIndex(IResolvable|HybridTableIndex[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putIndex.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>[]

---

##### `PutPrimaryKeyConstraint` <a name="PutPrimaryKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putPrimaryKeyConstraint"></a>

```csharp
private void PutPrimaryKeyConstraint(HybridTablePrimaryKeyConstraint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putPrimaryKeyConstraint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putTimeouts"></a>

```csharp
private void PutTimeouts(HybridTableTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a>

---

##### `PutUniqueConstraint` <a name="PutUniqueConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putUniqueConstraint"></a>

```csharp
private void PutUniqueConstraint(IResolvable|HybridTableUniqueConstraint[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.hybridTable.HybridTable.putUniqueConstraint.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>[]

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetDataRetentionTimeInDays` <a name="ResetDataRetentionTimeInDays" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetDataRetentionTimeInDays"></a>

```csharp
private void ResetDataRetentionTimeInDays()
```

##### `ResetForeignKeyConstraint` <a name="ResetForeignKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetForeignKeyConstraint"></a>

```csharp
private void ResetForeignKeyConstraint()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIndex` <a name="ResetIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetIndex"></a>

```csharp
private void ResetIndex()
```

##### `ResetMaxDataExtensionTimeInDays` <a name="ResetMaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetMaxDataExtensionTimeInDays"></a>

```csharp
private void ResetMaxDataExtensionTimeInDays()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUniqueConstraint` <a name="ResetUniqueConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.resetUniqueConstraint"></a>

```csharp
private void ResetUniqueConstraint()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a HybridTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

HybridTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

HybridTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

HybridTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.hybridTable.HybridTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

HybridTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a HybridTable resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HybridTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HybridTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.hybridTable.HybridTable.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the HybridTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.column">Column</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList">HybridTableColumnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList">HybridTableDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.foreignKeyConstraint">ForeignKeyConstraint</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList">HybridTableForeignKeyConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.index">Index</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList">HybridTableIndexList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.primaryKeyConstraint">PrimaryKeyConstraint</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference">HybridTablePrimaryKeyConstraintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.showKeysOutput">ShowKeysOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList">HybridTableShowKeysOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList">HybridTableShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference">HybridTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.uniqueConstraint">UniqueConstraint</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList">HybridTableUniqueConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.columnInput">ColumnInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.dataRetentionTimeInDaysInput">DataRetentionTimeInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.foreignKeyConstraintInput">ForeignKeyConstraintInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.indexInput">IndexInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.maxDataExtensionTimeInDaysInput">MaxDataExtensionTimeInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.primaryKeyConstraintInput">PrimaryKeyConstraintInput</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.uniqueConstraintInput">UniqueConstraintInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.dataRetentionTimeInDays">DataRetentionTimeInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.maxDataExtensionTimeInDays">MaxDataExtensionTimeInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.schema">Schema</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.column"></a>

```csharp
public HybridTableColumnList Column { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList">HybridTableColumnList</a>

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.describeOutput"></a>

```csharp
public HybridTableDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList">HybridTableDescribeOutputList</a>

---

##### `ForeignKeyConstraint`<sup>Required</sup> <a name="ForeignKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.foreignKeyConstraint"></a>

```csharp
public HybridTableForeignKeyConstraintList ForeignKeyConstraint { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList">HybridTableForeignKeyConstraintList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.index"></a>

```csharp
public HybridTableIndexList Index { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList">HybridTableIndexList</a>

---

##### `PrimaryKeyConstraint`<sup>Required</sup> <a name="PrimaryKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.primaryKeyConstraint"></a>

```csharp
public HybridTablePrimaryKeyConstraintOutputReference PrimaryKeyConstraint { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference">HybridTablePrimaryKeyConstraintOutputReference</a>

---

##### `ShowKeysOutput`<sup>Required</sup> <a name="ShowKeysOutput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.showKeysOutput"></a>

```csharp
public HybridTableShowKeysOutputList ShowKeysOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList">HybridTableShowKeysOutputList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.showOutput"></a>

```csharp
public HybridTableShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList">HybridTableShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.timeouts"></a>

```csharp
public HybridTableTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference">HybridTableTimeoutsOutputReference</a>

---

##### `UniqueConstraint`<sup>Required</sup> <a name="UniqueConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.uniqueConstraint"></a>

```csharp
public HybridTableUniqueConstraintList UniqueConstraint { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList">HybridTableUniqueConstraintList</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.columnInput"></a>

```csharp
public IResolvable|HybridTableColumn[] ColumnInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>[]

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `DataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="DataRetentionTimeInDaysInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.dataRetentionTimeInDaysInput"></a>

```csharp
public double DataRetentionTimeInDaysInput { get; }
```

- *Type:* double

---

##### `ForeignKeyConstraintInput`<sup>Optional</sup> <a name="ForeignKeyConstraintInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.foreignKeyConstraintInput"></a>

```csharp
public IResolvable|HybridTableForeignKeyConstraint[] ForeignKeyConstraintInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.indexInput"></a>

```csharp
public IResolvable|HybridTableIndex[] IndexInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>[]

---

##### `MaxDataExtensionTimeInDaysInput`<sup>Optional</sup> <a name="MaxDataExtensionTimeInDaysInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.maxDataExtensionTimeInDaysInput"></a>

```csharp
public double MaxDataExtensionTimeInDaysInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrimaryKeyConstraintInput`<sup>Optional</sup> <a name="PrimaryKeyConstraintInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.primaryKeyConstraintInput"></a>

```csharp
public HybridTablePrimaryKeyConstraint PrimaryKeyConstraintInput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a>

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.timeoutsInput"></a>

```csharp
public IResolvable|HybridTableTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a>

---

##### `UniqueConstraintInput`<sup>Optional</sup> <a name="UniqueConstraintInput" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.uniqueConstraintInput"></a>

```csharp
public IResolvable|HybridTableUniqueConstraint[] UniqueConstraintInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>[]

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `DataRetentionTimeInDays`<sup>Required</sup> <a name="DataRetentionTimeInDays" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.dataRetentionTimeInDays"></a>

```csharp
public double DataRetentionTimeInDays { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxDataExtensionTimeInDays`<sup>Required</sup> <a name="MaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.maxDataExtensionTimeInDays"></a>

```csharp
public double MaxDataExtensionTimeInDays { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.hybridTable.HybridTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HybridTableColumn <a name="HybridTableColumn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableColumn {
    string Name,
    string Type,
    string Collate = null,
    string Comment = null,
    HybridTableColumnDefault Default = null,
    bool|IResolvable NotNull = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.name">Name</a></code> | <code>string</code> | Column name. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.type">Type</a></code> | <code>string</code> | Column type. See [Snowflake data types](https://docs.snowflake.com/en/sql-reference-data-types) for supported values. Example: VARCHAR(256), NUMBER(38,0). |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.collate">Collate</a></code> | <code>string</code> | Column collation specification, e.g. en-ci. Case-insensitive (en-ci and EN-CI are treated as equal). |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.comment">Comment</a></code> | <code>string</code> | Column-level comment. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.default">Default</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a></code> | default block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.notNull">NotNull</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to restrict the column to NOT NULL values. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Column name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Column type. See [Snowflake data types](https://docs.snowflake.com/en/sql-reference-data-types) for supported values. Example: VARCHAR(256), NUMBER(38,0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#type HybridTable#type}

---

##### `Collate`<sup>Optional</sup> <a name="Collate" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.collate"></a>

```csharp
public string Collate { get; set; }
```

- *Type:* string

Column collation specification, e.g. en-ci. Case-insensitive (en-ci and EN-CI are treated as equal).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#collate HybridTable#collate}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Column-level comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#comment HybridTable#comment}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.default"></a>

```csharp
public HybridTableColumnDefault Default { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a>

default block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#default HybridTable#default}

---

##### `NotNull`<sup>Optional</sup> <a name="NotNull" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumn.property.notNull"></a>

```csharp
public bool|IResolvable NotNull { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to restrict the column to NOT NULL values.

Changing this on an existing column forces recreation. Primary key columns must set this to true because NOT NULL is implied by the primary key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#not_null HybridTable#not_null}

---

### HybridTableColumnDefault <a name="HybridTableColumnDefault" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableColumnDefault {
    string Constant = null,
    string Expression = null,
    string Sequence = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.constant">Constant</a></code> | <code>string</code> | A constant default value for the column. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.expression">Expression</a></code> | <code>string</code> | A SQL expression default value for the column. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.sequence">Sequence</a></code> | <code>string</code> | The default sequence for the column (uses NEXTVAL). |

---

##### `Constant`<sup>Optional</sup> <a name="Constant" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.constant"></a>

```csharp
public string Constant { get; set; }
```

- *Type:* string

A constant default value for the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#constant HybridTable#constant}

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

A SQL expression default value for the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#expression HybridTable#expression}

---

##### `Sequence`<sup>Optional</sup> <a name="Sequence" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault.property.sequence"></a>

```csharp
public string Sequence { get; set; }
```

- *Type:* string

The default sequence for the column (uses NEXTVAL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#sequence HybridTable#sequence}

---

### HybridTableConfig <a name="HybridTableConfig" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|HybridTableColumn[] Column,
    string Database,
    string Name,
    HybridTablePrimaryKeyConstraint PrimaryKeyConstraint,
    string Schema,
    string Comment = null,
    double DataRetentionTimeInDays = null,
    IResolvable|HybridTableForeignKeyConstraint[] ForeignKeyConstraint = null,
    string Id = null,
    IResolvable|HybridTableIndex[] Index = null,
    double MaxDataExtensionTimeInDays = null,
    HybridTableTimeouts Timeouts = null,
    IResolvable|HybridTableUniqueConstraint[] UniqueConstraint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.column">Column</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>[]</code> | column block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.database">Database</a></code> | <code>string</code> | The database in which to create the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier for the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.primaryKeyConstraint">PrimaryKeyConstraint</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a></code> | primary_key_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.schema">Schema</a></code> | <code>string</code> | The schema in which to create the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the hybrid table. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.dataRetentionTimeInDays">DataRetentionTimeInDays</a></code> | <code>double</code> | Specifies the retention period for the hybrid table so that Time Travel actions can be performed on historical data. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.foreignKeyConstraint">ForeignKeyConstraint</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>[]</code> | foreign_key_constraint block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#id HybridTable#id}. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.index">Index</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>[]</code> | index block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.maxDataExtensionTimeInDays">MaxDataExtensionTimeInDays</a></code> | <code>double</code> | Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for the hybrid table to prevent streams on it from becoming stale. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.uniqueConstraint">UniqueConstraint</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>[]</code> | unique_constraint block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.column"></a>

```csharp
public IResolvable|HybridTableColumn[] Column { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>[]

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#column HybridTable#column}

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database in which to create the hybrid table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#database HybridTable#database}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier for the hybrid table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

##### `PrimaryKeyConstraint`<sup>Required</sup> <a name="PrimaryKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.primaryKeyConstraint"></a>

```csharp
public HybridTablePrimaryKeyConstraint PrimaryKeyConstraint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a>

primary_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#primary_key_constraint HybridTable#primary_key_constraint}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The schema in which to create the hybrid table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#schema HybridTable#schema}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the hybrid table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#comment HybridTable#comment}

---

##### `DataRetentionTimeInDays`<sup>Optional</sup> <a name="DataRetentionTimeInDays" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.dataRetentionTimeInDays"></a>

```csharp
public double DataRetentionTimeInDays { get; set; }
```

- *Type:* double

Specifies the retention period for the hybrid table so that Time Travel actions can be performed on historical data.

For more information, check [DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#data_retention_time_in_days HybridTable#data_retention_time_in_days}

---

##### `ForeignKeyConstraint`<sup>Optional</sup> <a name="ForeignKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.foreignKeyConstraint"></a>

```csharp
public IResolvable|HybridTableForeignKeyConstraint[] ForeignKeyConstraint { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>[]

foreign_key_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#foreign_key_constraint HybridTable#foreign_key_constraint}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#id HybridTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.index"></a>

```csharp
public IResolvable|HybridTableIndex[] Index { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>[]

index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#index HybridTable#index}

---

##### `MaxDataExtensionTimeInDays`<sup>Optional</sup> <a name="MaxDataExtensionTimeInDays" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.maxDataExtensionTimeInDays"></a>

```csharp
public double MaxDataExtensionTimeInDays { get; set; }
```

- *Type:* double

Object parameter that specifies the maximum number of days for which Snowflake can extend the data retention period for the hybrid table to prevent streams on it from becoming stale.

For more information, check [MAX_DATA_EXTENSION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#max_data_extension_time_in_days HybridTable#max_data_extension_time_in_days}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.timeouts"></a>

```csharp
public HybridTableTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#timeouts HybridTable#timeouts}

---

##### `UniqueConstraint`<sup>Optional</sup> <a name="UniqueConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTableConfig.property.uniqueConstraint"></a>

```csharp
public IResolvable|HybridTableUniqueConstraint[] UniqueConstraint { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>[]

unique_constraint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#unique_constraint HybridTable#unique_constraint}

---

### HybridTableDescribeOutput <a name="HybridTableDescribeOutput" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableDescribeOutput {

};
```


### HybridTableForeignKeyConstraint <a name="HybridTableForeignKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableForeignKeyConstraint {
    string[] Columns,
    string[] RefColumns,
    string TableName,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.columns">Columns</a></code> | <code>string[]</code> | The local column(s) the foreign key is defined on. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.refColumns">RefColumns</a></code> | <code>string[]</code> | The column(s) in the referenced table that the foreign key references. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.tableName">TableName</a></code> | <code>string</code> | The table that the foreign key references. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.name">Name</a></code> | <code>string</code> | Name of the constraint. |

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.columns"></a>

```csharp
public string[] Columns { get; set; }
```

- *Type:* string[]

The local column(s) the foreign key is defined on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#columns HybridTable#columns}

---

##### `RefColumns`<sup>Required</sup> <a name="RefColumns" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.refColumns"></a>

```csharp
public string[] RefColumns { get; set; }
```

- *Type:* string[]

The column(s) in the referenced table that the foreign key references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#ref_columns HybridTable#ref_columns}

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

The table that the foreign key references.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#table_name HybridTable#table_name}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

### HybridTableIndex <a name="HybridTableIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndex.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableIndex {
    string[] Columns,
    string Name,
    string[] IncludeColumns = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.columns">Columns</a></code> | <code>string[]</code> | Index key columns, in order. Order is semantically meaningful. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.name">Name</a></code> | <code>string</code> | Name of the secondary index. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.includeColumns">IncludeColumns</a></code> | <code>string[]</code> | Columns included in the index payload via INCLUDE (...). Order carries no meaning. |

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.columns"></a>

```csharp
public string[] Columns { get; set; }
```

- *Type:* string[]

Index key columns, in order. Order is semantically meaningful.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#columns HybridTable#columns}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the secondary index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

##### `IncludeColumns`<sup>Optional</sup> <a name="IncludeColumns" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndex.property.includeColumns"></a>

```csharp
public string[] IncludeColumns { get; set; }
```

- *Type:* string[]

Columns included in the index payload via INCLUDE (...). Order carries no meaning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#include_columns HybridTable#include_columns}

---

### HybridTablePrimaryKeyConstraint <a name="HybridTablePrimaryKeyConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTablePrimaryKeyConstraint {
    string[] Columns,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint.property.columns">Columns</a></code> | <code>string[]</code> | The column(s) the constraint applies to. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint.property.name">Name</a></code> | <code>string</code> | Name of the constraint. |

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint.property.columns"></a>

```csharp
public string[] Columns { get; set; }
```

- *Type:* string[]

The column(s) the constraint applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#columns HybridTable#columns}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

### HybridTableShowKeysOutput <a name="HybridTableShowKeysOutput" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableShowKeysOutput {

};
```


### HybridTableShowOutput <a name="HybridTableShowOutput" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableShowOutput {

};
```


### HybridTableTimeouts <a name="HybridTableTimeouts" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#create HybridTable#create}. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#delete HybridTable#delete}. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#read HybridTable#read}. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#update HybridTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#create HybridTable#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#delete HybridTable#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#read HybridTable#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#update HybridTable#update}.

---

### HybridTableUniqueConstraint <a name="HybridTableUniqueConstraint" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableUniqueConstraint {
    string[] Columns,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint.property.columns">Columns</a></code> | <code>string[]</code> | The column(s) the constraint applies to. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint.property.name">Name</a></code> | <code>string</code> | Name of the constraint. |

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint.property.columns"></a>

```csharp
public string[] Columns { get; set; }
```

- *Type:* string[]

The column(s) the constraint applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#columns HybridTable#columns}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/hybrid_table#name HybridTable#name}

---

## Classes <a name="Classes" id="Classes"></a>

### HybridTableColumnDefaultOutputReference <a name="HybridTableColumnDefaultOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableColumnDefaultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetConstant">ResetConstant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetSequence">ResetSequence</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConstant` <a name="ResetConstant" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetConstant"></a>

```csharp
private void ResetConstant()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```

##### `ResetSequence` <a name="ResetSequence" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.resetSequence"></a>

```csharp
private void ResetSequence()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.constantInput">ConstantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.sequenceInput">SequenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.constant">Constant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.sequence">Sequence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConstantInput`<sup>Optional</sup> <a name="ConstantInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.constantInput"></a>

```csharp
public string ConstantInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `SequenceInput`<sup>Optional</sup> <a name="SequenceInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.sequenceInput"></a>

```csharp
public string SequenceInput { get; }
```

- *Type:* string

---

##### `Constant`<sup>Required</sup> <a name="Constant" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.constant"></a>

```csharp
public string Constant { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Sequence`<sup>Required</sup> <a name="Sequence" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.sequence"></a>

```csharp
public string Sequence { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference.property.internalValue"></a>

```csharp
public HybridTableColumnDefault InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a>

---


### HybridTableColumnList <a name="HybridTableColumnList" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableColumnList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.get"></a>

```csharp
private HybridTableColumnOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnList.property.internalValue"></a>

```csharp
public IResolvable|HybridTableColumn[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>[]

---


### HybridTableColumnOutputReference <a name="HybridTableColumnOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableColumnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.putDefault">PutDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetCollate">ResetCollate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetNotNull">ResetNotNull</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefault` <a name="PutDefault" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.putDefault"></a>

```csharp
private void PutDefault(HybridTableColumnDefault Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.putDefault.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a>

---

##### `ResetCollate` <a name="ResetCollate" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetCollate"></a>

```csharp
private void ResetCollate()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetNotNull` <a name="ResetNotNull" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.resetNotNull"></a>

```csharp
private void ResetNotNull()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.default">Default</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference">HybridTableColumnDefaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.collateInput">CollateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.defaultInput">DefaultInput</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.notNullInput">NotNullInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.collate">Collate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.notNull">NotNull</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.default"></a>

```csharp
public HybridTableColumnDefaultOutputReference Default { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefaultOutputReference">HybridTableColumnDefaultOutputReference</a>

---

##### `CollateInput`<sup>Optional</sup> <a name="CollateInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.collateInput"></a>

```csharp
public string CollateInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.defaultInput"></a>

```csharp
public HybridTableColumnDefault DefaultInput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumnDefault">HybridTableColumnDefault</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotNullInput`<sup>Optional</sup> <a name="NotNullInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.notNullInput"></a>

```csharp
public bool|IResolvable NotNullInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Collate`<sup>Required</sup> <a name="Collate" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.collate"></a>

```csharp
public string Collate { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NotNull`<sup>Required</sup> <a name="NotNull" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.notNull"></a>

```csharp
public bool|IResolvable NotNull { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableColumnOutputReference.property.internalValue"></a>

```csharp
public IResolvable|HybridTableColumn InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableColumn">HybridTableColumn</a>

---


### HybridTableDescribeOutputList <a name="HybridTableDescribeOutputList" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.get"></a>

```csharp
private HybridTableDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### HybridTableDescribeOutputOutputReference <a name="HybridTableDescribeOutputOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.check">Check</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.collation">Collation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.isNullable">IsNullable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.primaryKey">PrimaryKey</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.privacyDomain">PrivacyDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.schemaEvolutionRecord">SchemaEvolutionRecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.uniqueKey">UniqueKey</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutput">HybridTableDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Check`<sup>Required</sup> <a name="Check" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.check"></a>

```csharp
public string Check { get; }
```

- *Type:* string

---

##### `Collation`<sup>Required</sup> <a name="Collation" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.collation"></a>

```csharp
public string Collation { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `IsNullable`<sup>Required</sup> <a name="IsNullable" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.isNullable"></a>

```csharp
public IResolvable IsNullable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.primaryKey"></a>

```csharp
public IResolvable PrimaryKey { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PrivacyDomain`<sup>Required</sup> <a name="PrivacyDomain" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.privacyDomain"></a>

```csharp
public string PrivacyDomain { get; }
```

- *Type:* string

---

##### `SchemaEvolutionRecord`<sup>Required</sup> <a name="SchemaEvolutionRecord" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.schemaEvolutionRecord"></a>

```csharp
public string SchemaEvolutionRecord { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UniqueKey`<sup>Required</sup> <a name="UniqueKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.uniqueKey"></a>

```csharp
public IResolvable UniqueKey { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public HybridTableDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableDescribeOutput">HybridTableDescribeOutput</a>

---


### HybridTableForeignKeyConstraintList <a name="HybridTableForeignKeyConstraintList" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableForeignKeyConstraintList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.get"></a>

```csharp
private HybridTableForeignKeyConstraintOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintList.property.internalValue"></a>

```csharp
public IResolvable|HybridTableForeignKeyConstraint[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>[]

---


### HybridTableForeignKeyConstraintOutputReference <a name="HybridTableForeignKeyConstraintOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableForeignKeyConstraintOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.refColumnsInput">RefColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.columns">Columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.refColumns">RefColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.columnsInput"></a>

```csharp
public string[] ColumnsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RefColumnsInput`<sup>Optional</sup> <a name="RefColumnsInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.refColumnsInput"></a>

```csharp
public string[] RefColumnsInput { get; }
```

- *Type:* string[]

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.columns"></a>

```csharp
public string[] Columns { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RefColumns`<sup>Required</sup> <a name="RefColumns" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.refColumns"></a>

```csharp
public string[] RefColumns { get; }
```

- *Type:* string[]

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraintOutputReference.property.internalValue"></a>

```csharp
public IResolvable|HybridTableForeignKeyConstraint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableForeignKeyConstraint">HybridTableForeignKeyConstraint</a>

---


### HybridTableIndexList <a name="HybridTableIndexList" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableIndexList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.get"></a>

```csharp
private HybridTableIndexOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexList.property.internalValue"></a>

```csharp
public IResolvable|HybridTableIndex[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>[]

---


### HybridTableIndexOutputReference <a name="HybridTableIndexOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableIndexOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.resetIncludeColumns">ResetIncludeColumns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeColumns` <a name="ResetIncludeColumns" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.resetIncludeColumns"></a>

```csharp
private void ResetIncludeColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.includeColumnsInput">IncludeColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.columns">Columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.includeColumns">IncludeColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.columnsInput"></a>

```csharp
public string[] ColumnsInput { get; }
```

- *Type:* string[]

---

##### `IncludeColumnsInput`<sup>Optional</sup> <a name="IncludeColumnsInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.includeColumnsInput"></a>

```csharp
public string[] IncludeColumnsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.columns"></a>

```csharp
public string[] Columns { get; }
```

- *Type:* string[]

---

##### `IncludeColumns`<sup>Required</sup> <a name="IncludeColumns" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.includeColumns"></a>

```csharp
public string[] IncludeColumns { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableIndexOutputReference.property.internalValue"></a>

```csharp
public IResolvable|HybridTableIndex InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableIndex">HybridTableIndex</a>

---


### HybridTablePrimaryKeyConstraintOutputReference <a name="HybridTablePrimaryKeyConstraintOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTablePrimaryKeyConstraintOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.columns">Columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.columnsInput"></a>

```csharp
public string[] ColumnsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.columns"></a>

```csharp
public string[] Columns { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraintOutputReference.property.internalValue"></a>

```csharp
public HybridTablePrimaryKeyConstraint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTablePrimaryKeyConstraint">HybridTablePrimaryKeyConstraint</a>

---


### HybridTableShowKeysOutputList <a name="HybridTableShowKeysOutputList" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableShowKeysOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.get"></a>

```csharp
private HybridTableShowKeysOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### HybridTableShowKeysOutputOutputReference <a name="HybridTableShowKeysOutputOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableShowKeysOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.columns">Columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.deleteRule">DeleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.referencedColumns">ReferencedColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.referencedTable">ReferencedTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.updateRule">UpdateRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutput">HybridTableShowKeysOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.columns"></a>

```csharp
public string[] Columns { get; }
```

- *Type:* string[]

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.deleteRule"></a>

```csharp
public string DeleteRule { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReferencedColumns`<sup>Required</sup> <a name="ReferencedColumns" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.referencedColumns"></a>

```csharp
public string[] ReferencedColumns { get; }
```

- *Type:* string[]

---

##### `ReferencedTable`<sup>Required</sup> <a name="ReferencedTable" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.referencedTable"></a>

```csharp
public string ReferencedTable { get; }
```

- *Type:* string

---

##### `UpdateRule`<sup>Required</sup> <a name="UpdateRule" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.updateRule"></a>

```csharp
public string UpdateRule { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutputOutputReference.property.internalValue"></a>

```csharp
public HybridTableShowKeysOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowKeysOutput">HybridTableShowKeysOutput</a>

---


### HybridTableShowOutputList <a name="HybridTableShowOutputList" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.get"></a>

```csharp
private HybridTableShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### HybridTableShowOutputOutputReference <a name="HybridTableShowOutputOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.bytes">Bytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.rows">Rows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutput">HybridTableShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bytes`<sup>Required</sup> <a name="Bytes" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.bytes"></a>

```csharp
public double Bytes { get; }
```

- *Type:* double

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `Rows`<sup>Required</sup> <a name="Rows" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.rows"></a>

```csharp
public double Rows { get; }
```

- *Type:* double

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableShowOutputOutputReference.property.internalValue"></a>

```csharp
public HybridTableShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.hybridTable.HybridTableShowOutput">HybridTableShowOutput</a>

---


### HybridTableTimeoutsOutputReference <a name="HybridTableTimeoutsOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|HybridTableTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableTimeouts">HybridTableTimeouts</a>

---


### HybridTableUniqueConstraintList <a name="HybridTableUniqueConstraintList" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableUniqueConstraintList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.get"></a>

```csharp
private HybridTableUniqueConstraintOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintList.property.internalValue"></a>

```csharp
public IResolvable|HybridTableUniqueConstraint[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>[]

---


### HybridTableUniqueConstraintOutputReference <a name="HybridTableUniqueConstraintOutputReference" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new HybridTableUniqueConstraintOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.columns">Columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.columnsInput"></a>

```csharp
public string[] ColumnsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.columns"></a>

```csharp
public string[] Columns { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraintOutputReference.property.internalValue"></a>

```csharp
public IResolvable|HybridTableUniqueConstraint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.hybridTable.HybridTableUniqueConstraint">HybridTableUniqueConstraint</a>

---



