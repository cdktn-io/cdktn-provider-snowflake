# `postgresMirror` Submodule <a name="`postgresMirror` Submodule" id="@cdktn/provider-snowflake.postgresMirror"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresMirror <a name="PostgresMirror" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror snowflake_postgres_mirror}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PostgresMirror(Construct Scope, string Id, PostgresMirrorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig">PostgresMirrorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig">PostgresMirrorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putRefreshInterval">PutRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetDropTargetDatabaseOnDestroy">ResetDropTargetDatabaseOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetExternalVolume">ResetExternalVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetPostgresSchemas">ResetPostgresSchemas</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetPostgresTables">ResetPostgresTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetRefreshInterval">ResetRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetTargetTableType">ResetTargetTableType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetWarehouse">ResetWarehouse</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRefreshInterval` <a name="PutRefreshInterval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putRefreshInterval"></a>

```csharp
private void PutRefreshInterval(PostgresMirrorRefreshInterval Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putRefreshInterval.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putTimeouts"></a>

```csharp
private void PutTimeouts(PostgresMirrorTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a>

---

##### `ResetDropTargetDatabaseOnDestroy` <a name="ResetDropTargetDatabaseOnDestroy" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetDropTargetDatabaseOnDestroy"></a>

```csharp
private void ResetDropTargetDatabaseOnDestroy()
```

##### `ResetExternalVolume` <a name="ResetExternalVolume" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetExternalVolume"></a>

```csharp
private void ResetExternalVolume()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPostgresSchemas` <a name="ResetPostgresSchemas" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetPostgresSchemas"></a>

```csharp
private void ResetPostgresSchemas()
```

##### `ResetPostgresTables` <a name="ResetPostgresTables" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetPostgresTables"></a>

```csharp
private void ResetPostgresTables()
```

##### `ResetRefreshInterval` <a name="ResetRefreshInterval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetRefreshInterval"></a>

```csharp
private void ResetRefreshInterval()
```

##### `ResetTargetTableType` <a name="ResetTargetTableType" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetTargetTableType"></a>

```csharp
private void ResetTargetTableType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWarehouse` <a name="ResetWarehouse" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.resetWarehouse"></a>

```csharp
private void ResetWarehouse()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PostgresMirror resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

PostgresMirror.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

PostgresMirror.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

PostgresMirror.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

PostgresMirror.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PostgresMirror resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PostgresMirror to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PostgresMirror that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PostgresMirror to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList">PostgresMirrorDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.refreshInterval">RefreshInterval</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference">PostgresMirrorRefreshIntervalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference">PostgresMirrorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dropTargetDatabaseOnDestroyInput">DropTargetDatabaseOnDestroyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.externalVolumeInput">ExternalVolumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresDatabaseInput">PostgresDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresInstanceInput">PostgresInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresSchemasInput">PostgresSchemasInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresTablesInput">PostgresTablesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.refreshIntervalInput">RefreshIntervalInput</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetDatabaseInput">TargetDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetTableTypeInput">TargetTableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.warehouseInput">WarehouseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dropTargetDatabaseOnDestroy">DropTargetDatabaseOnDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.externalVolume">ExternalVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresDatabase">PostgresDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresInstance">PostgresInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresSchemas">PostgresSchemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresTables">PostgresTables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetDatabase">TargetDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetTableType">TargetTableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.warehouse">Warehouse</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.describeOutput"></a>

```csharp
public PostgresMirrorDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList">PostgresMirrorDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `RefreshInterval`<sup>Required</sup> <a name="RefreshInterval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.refreshInterval"></a>

```csharp
public PostgresMirrorRefreshIntervalOutputReference RefreshInterval { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference">PostgresMirrorRefreshIntervalOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.timeouts"></a>

```csharp
public PostgresMirrorTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference">PostgresMirrorTimeoutsOutputReference</a>

---

##### `DropTargetDatabaseOnDestroyInput`<sup>Optional</sup> <a name="DropTargetDatabaseOnDestroyInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dropTargetDatabaseOnDestroyInput"></a>

```csharp
public bool|IResolvable DropTargetDatabaseOnDestroyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExternalVolumeInput`<sup>Optional</sup> <a name="ExternalVolumeInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.externalVolumeInput"></a>

```csharp
public string ExternalVolumeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PostgresDatabaseInput`<sup>Optional</sup> <a name="PostgresDatabaseInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresDatabaseInput"></a>

```csharp
public string PostgresDatabaseInput { get; }
```

- *Type:* string

---

##### `PostgresInstanceInput`<sup>Optional</sup> <a name="PostgresInstanceInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresInstanceInput"></a>

```csharp
public string PostgresInstanceInput { get; }
```

- *Type:* string

---

##### `PostgresSchemasInput`<sup>Optional</sup> <a name="PostgresSchemasInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresSchemasInput"></a>

```csharp
public string[] PostgresSchemasInput { get; }
```

- *Type:* string[]

---

##### `PostgresTablesInput`<sup>Optional</sup> <a name="PostgresTablesInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresTablesInput"></a>

```csharp
public string[] PostgresTablesInput { get; }
```

- *Type:* string[]

---

##### `RefreshIntervalInput`<sup>Optional</sup> <a name="RefreshIntervalInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.refreshIntervalInput"></a>

```csharp
public PostgresMirrorRefreshInterval RefreshIntervalInput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a>

---

##### `TargetDatabaseInput`<sup>Optional</sup> <a name="TargetDatabaseInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetDatabaseInput"></a>

```csharp
public string TargetDatabaseInput { get; }
```

- *Type:* string

---

##### `TargetTableTypeInput`<sup>Optional</sup> <a name="TargetTableTypeInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetTableTypeInput"></a>

```csharp
public string TargetTableTypeInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.timeoutsInput"></a>

```csharp
public IResolvable|PostgresMirrorTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a>

---

##### `WarehouseInput`<sup>Optional</sup> <a name="WarehouseInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.warehouseInput"></a>

```csharp
public string WarehouseInput { get; }
```

- *Type:* string

---

##### `DropTargetDatabaseOnDestroy`<sup>Required</sup> <a name="DropTargetDatabaseOnDestroy" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.dropTargetDatabaseOnDestroy"></a>

```csharp
public bool|IResolvable DropTargetDatabaseOnDestroy { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExternalVolume`<sup>Required</sup> <a name="ExternalVolume" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.externalVolume"></a>

```csharp
public string ExternalVolume { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PostgresDatabase`<sup>Required</sup> <a name="PostgresDatabase" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresDatabase"></a>

```csharp
public string PostgresDatabase { get; }
```

- *Type:* string

---

##### `PostgresInstance`<sup>Required</sup> <a name="PostgresInstance" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresInstance"></a>

```csharp
public string PostgresInstance { get; }
```

- *Type:* string

---

##### `PostgresSchemas`<sup>Required</sup> <a name="PostgresSchemas" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresSchemas"></a>

```csharp
public string[] PostgresSchemas { get; }
```

- *Type:* string[]

---

##### `PostgresTables`<sup>Required</sup> <a name="PostgresTables" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.postgresTables"></a>

```csharp
public string[] PostgresTables { get; }
```

- *Type:* string[]

---

##### `TargetDatabase`<sup>Required</sup> <a name="TargetDatabase" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetDatabase"></a>

```csharp
public string TargetDatabase { get; }
```

- *Type:* string

---

##### `TargetTableType`<sup>Required</sup> <a name="TargetTableType" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.targetTableType"></a>

```csharp
public string TargetTableType { get; }
```

- *Type:* string

---

##### `Warehouse`<sup>Required</sup> <a name="Warehouse" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.warehouse"></a>

```csharp
public string Warehouse { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirror.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresMirrorConfig <a name="PostgresMirrorConfig" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PostgresMirrorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string PostgresDatabase,
    string PostgresInstance,
    string TargetDatabase,
    bool|IResolvable DropTargetDatabaseOnDestroy = null,
    string ExternalVolume = null,
    string Id = null,
    string[] PostgresSchemas = null,
    string[] PostgresTables = null,
    PostgresMirrorRefreshInterval RefreshInterval = null,
    string TargetTableType = null,
    PostgresMirrorTimeouts Timeouts = null,
    string Warehouse = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.name">Name</a></code> | <code>string</code> | Specifies the name of the mirror. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresDatabase">PostgresDatabase</a></code> | <code>string</code> | Specifies the source database on the Postgres instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresInstance">PostgresInstance</a></code> | <code>string</code> | Specifies the source Postgres instance (case-sensitive). The role used by the provider must own the instance. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.targetDatabase">TargetDatabase</a></code> | <code>string</code> | Specifies the Snowflake database the mirror creates and keeps up to date. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.dropTargetDatabaseOnDestroy">DropTargetDatabaseOnDestroy</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | (Default: `true`) Specifies whether destroying the mirror also drops its target database. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.externalVolume">ExternalVolume</a></code> | <code>string</code> | Specifies the external volume for Iceberg target tables. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#id PostgresMirror#id}. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresSchemas">PostgresSchemas</a></code> | <code>string[]</code> | Specifies the source schemas to mirror. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresTables">PostgresTables</a></code> | <code>string[]</code> | Specifies the source tables to mirror, as schema-qualified names (`schema.table`) written the way `DESCRIBE_MIRROR` returns them: unquoted and lowercase, except for parts Postgres requires to be quoted, such as `public."MixedCase"`. Other spellings of the same table show as a change on every plan. Tables are added and removed in place, without copying the other tables again. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.refreshInterval">RefreshInterval</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a></code> | refresh_interval block. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.targetTableType">TargetTableType</a></code> | <code>string</code> | Specifies the format of the target tables. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.warehouse">Warehouse</a></code> | <code>string</code> | Specifies the warehouse the mirror's apply task runs on. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the name of the mirror.

It must be unique across all Postgres instances in the account. Snowflake stores the name lowercased, and the lowercased name is the resource ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#name PostgresMirror#name}

---

##### `PostgresDatabase`<sup>Required</sup> <a name="PostgresDatabase" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresDatabase"></a>

```csharp
public string PostgresDatabase { get; set; }
```

- *Type:* string

Specifies the source database on the Postgres instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_database PostgresMirror#postgres_database}

---

##### `PostgresInstance`<sup>Required</sup> <a name="PostgresInstance" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresInstance"></a>

```csharp
public string PostgresInstance { get; set; }
```

- *Type:* string

Specifies the source Postgres instance (case-sensitive). The role used by the provider must own the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_instance PostgresMirror#postgres_instance}

---

##### `TargetDatabase`<sup>Required</sup> <a name="TargetDatabase" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.targetDatabase"></a>

```csharp
public string TargetDatabase { get; set; }
```

- *Type:* string

Specifies the Snowflake database the mirror creates and keeps up to date.

The database must not exist yet, and Snowflake uppercases its name. The mirror protects the database, so do not manage it with `snowflake_database`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#target_database PostgresMirror#target_database}

---

##### `DropTargetDatabaseOnDestroy`<sup>Optional</sup> <a name="DropTargetDatabaseOnDestroy" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.dropTargetDatabaseOnDestroy"></a>

```csharp
public bool|IResolvable DropTargetDatabaseOnDestroy { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

(Default: `true`) Specifies whether destroying the mirror also drops its target database.

A kept target database can never be the target of a mirror again, so with `false`, a replacement that keeps the same `target_database` fails. A kept target database stays owned by the `SNOWFLAKE` application. To manage or drop it, first transfer its ownership with `GRANT OWNERSHIP ON DATABASE`, which needs the `MANAGE GRANTS` privilege.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#drop_target_database_on_destroy PostgresMirror#drop_target_database_on_destroy}

---

##### `ExternalVolume`<sup>Optional</sup> <a name="ExternalVolume" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.externalVolume"></a>

```csharp
public string ExternalVolume { get; set; }
```

- *Type:* string

Specifies the external volume for Iceberg target tables.

Valid only with `target_table_type = "ICEBERG"`. When not set, the tables use Snowflake-managed storage. Grant `USAGE` on the volume to `APPLICATION SNOWFLAKE` first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#external_volume PostgresMirror#external_volume}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#id PostgresMirror#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PostgresSchemas`<sup>Optional</sup> <a name="PostgresSchemas" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresSchemas"></a>

```csharp
public string[] PostgresSchemas { get; set; }
```

- *Type:* string[]

Specifies the source schemas to mirror.

Every current and future table in them is included. Schema names are literal and case-sensitive, written without Postgres quoting, such as `MixedCase` rather than `"MixedCase"`. Schemas are added and removed in place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_schemas PostgresMirror#postgres_schemas}

---

##### `PostgresTables`<sup>Optional</sup> <a name="PostgresTables" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.postgresTables"></a>

```csharp
public string[] PostgresTables { get; set; }
```

- *Type:* string[]

Specifies the source tables to mirror, as schema-qualified names (`schema.table`) written the way `DESCRIBE_MIRROR` returns them: unquoted and lowercase, except for parts Postgres requires to be quoted, such as `public."MixedCase"`. Other spellings of the same table show as a change on every plan. Tables are added and removed in place, without copying the other tables again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#postgres_tables PostgresMirror#postgres_tables}

---

##### `RefreshInterval`<sup>Optional</sup> <a name="RefreshInterval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.refreshInterval"></a>

```csharp
public PostgresMirrorRefreshInterval RefreshInterval { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a>

refresh_interval block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#refresh_interval PostgresMirror#refresh_interval}

---

##### `TargetTableType`<sup>Optional</sup> <a name="TargetTableType" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.targetTableType"></a>

```csharp
public string TargetTableType { get; set; }
```

- *Type:* string

Specifies the format of the target tables.

When not set, Snowflake uses `SNOWFLAKE`. Valid values are (case-insensitive): `SNOWFLAKE` | `ICEBERG`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#target_table_type PostgresMirror#target_table_type}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.timeouts"></a>

```csharp
public PostgresMirrorTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#timeouts PostgresMirror#timeouts}

---

##### `Warehouse`<sup>Optional</sup> <a name="Warehouse" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorConfig.property.warehouse"></a>

```csharp
public string Warehouse { get; set; }
```

- *Type:* string

Specifies the warehouse the mirror's apply task runs on.

When not set, the task runs on serverless compute. Snowflake uppercases the name, so the warehouse itself must have an uppercase name; the case used in the configuration does not matter. Grant `USAGE` on the warehouse to `APPLICATION SNOWFLAKE` first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#warehouse PostgresMirror#warehouse}

---

### PostgresMirrorDescribeOutput <a name="PostgresMirrorDescribeOutput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PostgresMirrorDescribeOutput {

};
```


### PostgresMirrorRefreshInterval <a name="PostgresMirrorRefreshInterval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PostgresMirrorRefreshInterval {
    double Hours = null,
    double Minutes = null,
    double Seconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.hours">Hours</a></code> | <code>double</code> | Specifies the refresh interval in hours. (conflicts with `minutes` and `seconds`). |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.minutes">Minutes</a></code> | <code>double</code> | Specifies the refresh interval in minutes. (conflicts with `hours` and `seconds`). |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.seconds">Seconds</a></code> | <code>double</code> | Specifies the refresh interval in seconds. (conflicts with `hours` and `minutes`). |

---

##### `Hours`<sup>Optional</sup> <a name="Hours" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.hours"></a>

```csharp
public double Hours { get; set; }
```

- *Type:* double

Specifies the refresh interval in hours. (conflicts with `minutes` and `seconds`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#hours PostgresMirror#hours}

---

##### `Minutes`<sup>Optional</sup> <a name="Minutes" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.minutes"></a>

```csharp
public double Minutes { get; set; }
```

- *Type:* double

Specifies the refresh interval in minutes. (conflicts with `hours` and `seconds`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#minutes PostgresMirror#minutes}

---

##### `Seconds`<sup>Optional</sup> <a name="Seconds" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval.property.seconds"></a>

```csharp
public double Seconds { get; set; }
```

- *Type:* double

Specifies the refresh interval in seconds. (conflicts with `hours` and `minutes`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#seconds PostgresMirror#seconds}

---

### PostgresMirrorTimeouts <a name="PostgresMirrorTimeouts" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PostgresMirrorTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#create PostgresMirror#create}. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#delete PostgresMirror#delete}. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#read PostgresMirror#read}. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#update PostgresMirror#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#create PostgresMirror#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#delete PostgresMirror#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#read PostgresMirror#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.23.0/docs/resources/postgres_mirror#update PostgresMirror#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresMirrorDescribeOutputList <a name="PostgresMirrorDescribeOutputList" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PostgresMirrorDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.get"></a>

```csharp
private PostgresMirrorDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### PostgresMirrorDescribeOutputOutputReference <a name="PostgresMirrorDescribeOutputOutputReference" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PostgresMirrorDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagBytes">ApplyLagBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagOperations">ApplyLagOperations</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagSeconds">ApplyLagSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.catalogIntegrationName">CatalogIntegrationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.externalVolume">ExternalVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.feedOnly">FeedOnly</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastAppliedCommitLsn">LastAppliedCommitLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastAppliedCommitTime">LastAppliedCommitTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastApplyTime">LastApplyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastOperationId">LastOperationId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastOperationTime">LastOperationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresDatabase">PostgresDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresInstance">PostgresInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresSchemas">PostgresSchemas</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresStatus">PostgresStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresTables">PostgresTables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.recentQueryDurations">RecentQueryDurations</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.refreshInterval">RefreshInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.targetDatabase">TargetDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.targetTableType">TargetTableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.warehouse">Warehouse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutput">PostgresMirrorDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplyLagBytes`<sup>Required</sup> <a name="ApplyLagBytes" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagBytes"></a>

```csharp
public double ApplyLagBytes { get; }
```

- *Type:* double

---

##### `ApplyLagOperations`<sup>Required</sup> <a name="ApplyLagOperations" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagOperations"></a>

```csharp
public double ApplyLagOperations { get; }
```

- *Type:* double

---

##### `ApplyLagSeconds`<sup>Required</sup> <a name="ApplyLagSeconds" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.applyLagSeconds"></a>

```csharp
public double ApplyLagSeconds { get; }
```

- *Type:* double

---

##### `CatalogIntegrationName`<sup>Required</sup> <a name="CatalogIntegrationName" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.catalogIntegrationName"></a>

```csharp
public string CatalogIntegrationName { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `ExternalVolume`<sup>Required</sup> <a name="ExternalVolume" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.externalVolume"></a>

```csharp
public string ExternalVolume { get; }
```

- *Type:* string

---

##### `FeedOnly`<sup>Required</sup> <a name="FeedOnly" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.feedOnly"></a>

```csharp
public IResolvable FeedOnly { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LastAppliedCommitLsn`<sup>Required</sup> <a name="LastAppliedCommitLsn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastAppliedCommitLsn"></a>

```csharp
public string LastAppliedCommitLsn { get; }
```

- *Type:* string

---

##### `LastAppliedCommitTime`<sup>Required</sup> <a name="LastAppliedCommitTime" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastAppliedCommitTime"></a>

```csharp
public string LastAppliedCommitTime { get; }
```

- *Type:* string

---

##### `LastApplyTime`<sup>Required</sup> <a name="LastApplyTime" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastApplyTime"></a>

```csharp
public string LastApplyTime { get; }
```

- *Type:* string

---

##### `LastOperationId`<sup>Required</sup> <a name="LastOperationId" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastOperationId"></a>

```csharp
public double LastOperationId { get; }
```

- *Type:* double

---

##### `LastOperationTime`<sup>Required</sup> <a name="LastOperationTime" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.lastOperationTime"></a>

```csharp
public string LastOperationTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PostgresDatabase`<sup>Required</sup> <a name="PostgresDatabase" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresDatabase"></a>

```csharp
public string PostgresDatabase { get; }
```

- *Type:* string

---

##### `PostgresInstance`<sup>Required</sup> <a name="PostgresInstance" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresInstance"></a>

```csharp
public string PostgresInstance { get; }
```

- *Type:* string

---

##### `PostgresSchemas`<sup>Required</sup> <a name="PostgresSchemas" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresSchemas"></a>

```csharp
public string[] PostgresSchemas { get; }
```

- *Type:* string[]

---

##### `PostgresStatus`<sup>Required</sup> <a name="PostgresStatus" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresStatus"></a>

```csharp
public string PostgresStatus { get; }
```

- *Type:* string

---

##### `PostgresTables`<sup>Required</sup> <a name="PostgresTables" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.postgresTables"></a>

```csharp
public string[] PostgresTables { get; }
```

- *Type:* string[]

---

##### `RecentQueryDurations`<sup>Required</sup> <a name="RecentQueryDurations" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.recentQueryDurations"></a>

```csharp
public string RecentQueryDurations { get; }
```

- *Type:* string

---

##### `RefreshInterval`<sup>Required</sup> <a name="RefreshInterval" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.refreshInterval"></a>

```csharp
public string RefreshInterval { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TargetDatabase`<sup>Required</sup> <a name="TargetDatabase" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.targetDatabase"></a>

```csharp
public string TargetDatabase { get; }
```

- *Type:* string

---

##### `TargetTableType`<sup>Required</sup> <a name="TargetTableType" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.targetTableType"></a>

```csharp
public string TargetTableType { get; }
```

- *Type:* string

---

##### `Warehouse`<sup>Required</sup> <a name="Warehouse" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.warehouse"></a>

```csharp
public string Warehouse { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public PostgresMirrorDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorDescribeOutput">PostgresMirrorDescribeOutput</a>

---


### PostgresMirrorRefreshIntervalOutputReference <a name="PostgresMirrorRefreshIntervalOutputReference" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PostgresMirrorRefreshIntervalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetHours">ResetHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetMinutes">ResetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetSeconds">ResetSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHours` <a name="ResetHours" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetHours"></a>

```csharp
private void ResetHours()
```

##### `ResetMinutes` <a name="ResetMinutes" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetMinutes"></a>

```csharp
private void ResetMinutes()
```

##### `ResetSeconds` <a name="ResetSeconds" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.resetSeconds"></a>

```csharp
private void ResetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.hoursInput">HoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.minutesInput">MinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.secondsInput">SecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HoursInput`<sup>Optional</sup> <a name="HoursInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.hoursInput"></a>

```csharp
public double HoursInput { get; }
```

- *Type:* double

---

##### `MinutesInput`<sup>Optional</sup> <a name="MinutesInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.minutesInput"></a>

```csharp
public double MinutesInput { get; }
```

- *Type:* double

---

##### `SecondsInput`<sup>Optional</sup> <a name="SecondsInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.secondsInput"></a>

```csharp
public double SecondsInput { get; }
```

- *Type:* double

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshIntervalOutputReference.property.internalValue"></a>

```csharp
public PostgresMirrorRefreshInterval InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorRefreshInterval">PostgresMirrorRefreshInterval</a>

---


### PostgresMirrorTimeoutsOutputReference <a name="PostgresMirrorTimeoutsOutputReference" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new PostgresMirrorTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PostgresMirrorTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.postgresMirror.PostgresMirrorTimeouts">PostgresMirrorTimeouts</a>

---



