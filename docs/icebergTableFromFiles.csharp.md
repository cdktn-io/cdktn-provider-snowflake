# `icebergTableFromFiles` Submodule <a name="`icebergTableFromFiles` Submodule" id="@cdktn/provider-snowflake.icebergTableFromFiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IcebergTableFromFiles <a name="IcebergTableFromFiles" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files snowflake_iceberg_table_from_files}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFiles(Construct Scope, string Id, IcebergTableFromFilesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig">IcebergTableFromFilesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig">IcebergTableFromFilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetExternalVolume">ResetExternalVolume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.putTimeouts"></a>

```csharp
private void PutTimeouts(IcebergTableFromFilesTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts">IcebergTableFromFilesTimeouts</a>

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetCatalog"></a>

```csharp
private void ResetCatalog()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetExternalVolume` <a name="ResetExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetExternalVolume"></a>

```csharp
private void ResetExternalVolume()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetReplaceInvalidCharacters"></a>

```csharp
private void ResetReplaceInvalidCharacters()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IcebergTableFromFiles resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

IcebergTableFromFiles.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

IcebergTableFromFiles.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

IcebergTableFromFiles.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

IcebergTableFromFiles.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IcebergTableFromFiles resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IcebergTableFromFiles to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IcebergTableFromFiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IcebergTableFromFiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.describeOutput">DescribeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList">IcebergTableFromFilesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList">IcebergTableFromFilesParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList">IcebergTableFromFilesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference">IcebergTableFromFilesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.catalogInput">CatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.externalVolumeInput">ExternalVolumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.metadataFilePathInput">MetadataFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts">IcebergTableFromFilesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.catalog">Catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.externalVolume">ExternalVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.metadataFilePath">MetadataFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.schema">Schema</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DescribeOutput`<sup>Required</sup> <a name="DescribeOutput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.describeOutput"></a>

```csharp
public IcebergTableFromFilesDescribeOutputList DescribeOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList">IcebergTableFromFilesDescribeOutputList</a>

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.fullyQualifiedName"></a>

```csharp
public string FullyQualifiedName { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.parameters"></a>

```csharp
public IcebergTableFromFilesParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList">IcebergTableFromFilesParametersList</a>

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.showOutput"></a>

```csharp
public IcebergTableFromFilesShowOutputList ShowOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList">IcebergTableFromFilesShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.timeouts"></a>

```csharp
public IcebergTableFromFilesTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference">IcebergTableFromFilesTimeoutsOutputReference</a>

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.catalogInput"></a>

```csharp
public string CatalogInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `ExternalVolumeInput`<sup>Optional</sup> <a name="ExternalVolumeInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.externalVolumeInput"></a>

```csharp
public string ExternalVolumeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataFilePathInput`<sup>Optional</sup> <a name="MetadataFilePathInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.metadataFilePathInput"></a>

```csharp
public string MetadataFilePathInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.replaceInvalidCharactersInput"></a>

```csharp
public bool|IResolvable ReplaceInvalidCharactersInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.timeoutsInput"></a>

```csharp
public IResolvable|IcebergTableFromFilesTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts">IcebergTableFromFilesTimeouts</a>

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.catalog"></a>

```csharp
public string Catalog { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `ExternalVolume`<sup>Required</sup> <a name="ExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.externalVolume"></a>

```csharp
public string ExternalVolume { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetadataFilePath`<sup>Required</sup> <a name="MetadataFilePath" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.metadataFilePath"></a>

```csharp
public string MetadataFilePath { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.replaceInvalidCharacters"></a>

```csharp
public bool|IResolvable ReplaceInvalidCharacters { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFiles.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IcebergTableFromFilesConfig <a name="IcebergTableFromFilesConfig" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Database,
    string MetadataFilePath,
    string Name,
    string Schema,
    string Catalog = null,
    string Comment = null,
    string ExternalVolume = null,
    string Id = null,
    bool|IResolvable ReplaceInvalidCharacters = null,
    IcebergTableFromFilesTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.database">Database</a></code> | <code>string</code> | The database in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.metadataFilePath">MetadataFilePath</a></code> | <code>string</code> | Specifies the relative path of the Iceberg metadata file in the external volume. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.name">Name</a></code> | <code>string</code> | Specifies the identifier for the Iceberg table; |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.schema">Schema</a></code> | <code>string</code> | The schema in which to create the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.catalog">Catalog</a></code> | <code>string</code> | Specifies the identifier for the catalog integration to use for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.comment">Comment</a></code> | <code>string</code> | Specifies a comment for the Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.externalVolume">ExternalVolume</a></code> | <code>string</code> | Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#id IcebergTableFromFiles#id}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts">IcebergTableFromFilesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

The database in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#database IcebergTableFromFiles#database}

---

##### `MetadataFilePath`<sup>Required</sup> <a name="MetadataFilePath" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.metadataFilePath"></a>

```csharp
public string MetadataFilePath { get; set; }
```

- *Type:* string

Specifies the relative path of the Iceberg metadata file in the external volume.

Cannot be changed after creation. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#metadata_file_path IcebergTableFromFiles#metadata_file_path}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the identifier for the Iceberg table;

must be unique for the schema in which the Iceberg table is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#name IcebergTableFromFiles#name}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

The schema in which to create the Iceberg table.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#schema IcebergTableFromFiles#schema}

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.catalog"></a>

```csharp
public string Catalog { get; set; }
```

- *Type:* string

Specifies the identifier for the catalog integration to use for the Iceberg table.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#catalog IcebergTableFromFiles#catalog}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Specifies a comment for the Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#comment IcebergTableFromFiles#comment}

---

##### `ExternalVolume`<sup>Optional</sup> <a name="ExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.externalVolume"></a>

```csharp
public string ExternalVolume { get; set; }
```

- *Type:* string

Specifies the identifier for the external volume where the Iceberg table stores its metadata files and data in Parquet format.

If not specified, the account-level default is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#external_volume IcebergTableFromFiles#external_volume}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#id IcebergTableFromFiles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.replaceInvalidCharacters"></a>

```csharp
public bool|IResolvable ReplaceInvalidCharacters { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (`�`) in query results for an Iceberg table.

For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#replace_invalid_characters IcebergTableFromFiles#replace_invalid_characters}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesConfig.property.timeouts"></a>

```csharp
public IcebergTableFromFilesTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts">IcebergTableFromFilesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#timeouts IcebergTableFromFiles#timeouts}

---

### IcebergTableFromFilesDescribeOutput <a name="IcebergTableFromFilesDescribeOutput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesDescribeOutput {

};
```


### IcebergTableFromFilesParameters <a name="IcebergTableFromFilesParameters" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesParameters {

};
```


### IcebergTableFromFilesParametersCatalog <a name="IcebergTableFromFilesParametersCatalog" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesParametersCatalog {

};
```


### IcebergTableFromFilesParametersExternalVolume <a name="IcebergTableFromFilesParametersExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolume"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolume.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesParametersExternalVolume {

};
```


### IcebergTableFromFilesParametersReplaceInvalidCharacters <a name="IcebergTableFromFilesParametersReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharacters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharacters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesParametersReplaceInvalidCharacters {

};
```


### IcebergTableFromFilesShowOutput <a name="IcebergTableFromFilesShowOutput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesShowOutput {

};
```


### IcebergTableFromFilesShowOutputAutoRefreshStatus <a name="IcebergTableFromFilesShowOutputAutoRefreshStatus" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesShowOutputAutoRefreshStatus {

};
```


### IcebergTableFromFilesShowOutputPartitionSpecs <a name="IcebergTableFromFilesShowOutputPartitionSpecs" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesShowOutputPartitionSpecs {

};
```


### IcebergTableFromFilesShowOutputPartitionSpecsFields <a name="IcebergTableFromFilesShowOutputPartitionSpecsFields" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesShowOutputPartitionSpecsFields {

};
```


### IcebergTableFromFilesTimeouts <a name="IcebergTableFromFilesTimeouts" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#create IcebergTableFromFiles#create}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#delete IcebergTableFromFiles#delete}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#read IcebergTableFromFiles#read}. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#update IcebergTableFromFiles#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#create IcebergTableFromFiles#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#delete IcebergTableFromFiles#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#read IcebergTableFromFiles#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/iceberg_table_from_files#update IcebergTableFromFiles#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IcebergTableFromFilesDescribeOutputList <a name="IcebergTableFromFilesDescribeOutputList" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesDescribeOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.get"></a>

```csharp
private IcebergTableFromFilesDescribeOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IcebergTableFromFilesDescribeOutputOutputReference <a name="IcebergTableFromFilesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesDescribeOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.check">Check</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.isNullable">IsNullable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.nameMapping">NameMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.primaryKey">PrimaryKey</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.privacyDomain">PrivacyDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.sourceIcebergType">SourceIcebergType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.uniqueKey">UniqueKey</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.writeDefault">WriteDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutput">IcebergTableFromFilesDescribeOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Check`<sup>Required</sup> <a name="Check" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.check"></a>

```csharp
public string Check { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `IsNullable`<sup>Required</sup> <a name="IsNullable" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.isNullable"></a>

```csharp
public IResolvable IsNullable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NameMapping`<sup>Required</sup> <a name="NameMapping" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.nameMapping"></a>

```csharp
public string NameMapping { get; }
```

- *Type:* string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.primaryKey"></a>

```csharp
public IResolvable PrimaryKey { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PrivacyDomain`<sup>Required</sup> <a name="PrivacyDomain" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.privacyDomain"></a>

```csharp
public string PrivacyDomain { get; }
```

- *Type:* string

---

##### `SourceIcebergType`<sup>Required</sup> <a name="SourceIcebergType" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.sourceIcebergType"></a>

```csharp
public string SourceIcebergType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UniqueKey`<sup>Required</sup> <a name="UniqueKey" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.uniqueKey"></a>

```csharp
public IResolvable UniqueKey { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `WriteDefault`<sup>Required</sup> <a name="WriteDefault" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.writeDefault"></a>

```csharp
public string WriteDefault { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutputOutputReference.property.internalValue"></a>

```csharp
public IcebergTableFromFilesDescribeOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesDescribeOutput">IcebergTableFromFilesDescribeOutput</a>

---


### IcebergTableFromFilesParametersCatalogList <a name="IcebergTableFromFilesParametersCatalogList" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesParametersCatalogList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.get"></a>

```csharp
private IcebergTableFromFilesParametersCatalogOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IcebergTableFromFilesParametersCatalogOutputReference <a name="IcebergTableFromFilesParametersCatalogOutputReference" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesParametersCatalogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalog">IcebergTableFromFilesParametersCatalog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogOutputReference.property.internalValue"></a>

```csharp
public IcebergTableFromFilesParametersCatalog InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalog">IcebergTableFromFilesParametersCatalog</a>

---


### IcebergTableFromFilesParametersExternalVolumeList <a name="IcebergTableFromFilesParametersExternalVolumeList" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesParametersExternalVolumeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.get"></a>

```csharp
private IcebergTableFromFilesParametersExternalVolumeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IcebergTableFromFilesParametersExternalVolumeOutputReference <a name="IcebergTableFromFilesParametersExternalVolumeOutputReference" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesParametersExternalVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolume">IcebergTableFromFilesParametersExternalVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeOutputReference.property.internalValue"></a>

```csharp
public IcebergTableFromFilesParametersExternalVolume InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolume">IcebergTableFromFilesParametersExternalVolume</a>

---


### IcebergTableFromFilesParametersList <a name="IcebergTableFromFilesParametersList" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.get"></a>

```csharp
private IcebergTableFromFilesParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IcebergTableFromFilesParametersOutputReference <a name="IcebergTableFromFilesParametersOutputReference" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.catalog">Catalog</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList">IcebergTableFromFilesParametersCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.externalVolume">ExternalVolume</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList">IcebergTableFromFilesParametersExternalVolumeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList">IcebergTableFromFilesParametersReplaceInvalidCharactersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParameters">IcebergTableFromFilesParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.catalog"></a>

```csharp
public IcebergTableFromFilesParametersCatalogList Catalog { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersCatalogList">IcebergTableFromFilesParametersCatalogList</a>

---

##### `ExternalVolume`<sup>Required</sup> <a name="ExternalVolume" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.externalVolume"></a>

```csharp
public IcebergTableFromFilesParametersExternalVolumeList ExternalVolume { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersExternalVolumeList">IcebergTableFromFilesParametersExternalVolumeList</a>

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.replaceInvalidCharacters"></a>

```csharp
public IcebergTableFromFilesParametersReplaceInvalidCharactersList ReplaceInvalidCharacters { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList">IcebergTableFromFilesParametersReplaceInvalidCharactersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersOutputReference.property.internalValue"></a>

```csharp
public IcebergTableFromFilesParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParameters">IcebergTableFromFilesParameters</a>

---


### IcebergTableFromFilesParametersReplaceInvalidCharactersList <a name="IcebergTableFromFilesParametersReplaceInvalidCharactersList" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesParametersReplaceInvalidCharactersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.get"></a>

```csharp
private IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference <a name="IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.level">Level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharacters">IcebergTableFromFilesParametersReplaceInvalidCharacters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.level"></a>

```csharp
public string Level { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharactersOutputReference.property.internalValue"></a>

```csharp
public IcebergTableFromFilesParametersReplaceInvalidCharacters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesParametersReplaceInvalidCharacters">IcebergTableFromFilesParametersReplaceInvalidCharacters</a>

---


### IcebergTableFromFilesShowOutputAutoRefreshStatusList <a name="IcebergTableFromFilesShowOutputAutoRefreshStatusList" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesShowOutputAutoRefreshStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.get"></a>

```csharp
private IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference <a name="IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId">CurrentSnapshotId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.executionState">ExecutionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime">LastSnapshotTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount">PendingSnapshotCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatus">IcebergTableFromFilesShowOutputAutoRefreshStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentSnapshotId`<sup>Required</sup> <a name="CurrentSnapshotId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.currentSnapshotId"></a>

```csharp
public double CurrentSnapshotId { get; }
```

- *Type:* double

---

##### `ExecutionState`<sup>Required</sup> <a name="ExecutionState" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.executionState"></a>

```csharp
public string ExecutionState { get; }
```

- *Type:* string

---

##### `LastSnapshotTime`<sup>Required</sup> <a name="LastSnapshotTime" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.lastSnapshotTime"></a>

```csharp
public string LastSnapshotTime { get; }
```

- *Type:* string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `PendingSnapshotCount`<sup>Required</sup> <a name="PendingSnapshotCount" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.pendingSnapshotCount"></a>

```csharp
public double PendingSnapshotCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusOutputReference.property.internalValue"></a>

```csharp
public IcebergTableFromFilesShowOutputAutoRefreshStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatus">IcebergTableFromFilesShowOutputAutoRefreshStatus</a>

---


### IcebergTableFromFilesShowOutputList <a name="IcebergTableFromFilesShowOutputList" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesShowOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.get"></a>

```csharp
private IcebergTableFromFilesShowOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IcebergTableFromFilesShowOutputOutputReference <a name="IcebergTableFromFilesShowOutputOutputReference" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesShowOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.autoRefreshStatus">AutoRefreshStatus</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList">IcebergTableFromFilesShowOutputAutoRefreshStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.baseLocation">BaseLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.canWriteMetadata">CanWriteMetadata</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.catalogNamespace">CatalogNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.catalogSyncName">CatalogSyncName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.catalogTableName">CatalogTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.currentPartitionSpecId">CurrentPartitionSpecId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.externalVolumeName">ExternalVolumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.icebergTableFormatVersion">IcebergTableFormatVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.icebergTableType">IcebergTableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.nameMapping">NameMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.ownerRoleType">OwnerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.partitionSpecs">PartitionSpecs</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList">IcebergTableFromFilesShowOutputPartitionSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutput">IcebergTableFromFilesShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoRefreshStatus`<sup>Required</sup> <a name="AutoRefreshStatus" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.autoRefreshStatus"></a>

```csharp
public IcebergTableFromFilesShowOutputAutoRefreshStatusList AutoRefreshStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputAutoRefreshStatusList">IcebergTableFromFilesShowOutputAutoRefreshStatusList</a>

---

##### `BaseLocation`<sup>Required</sup> <a name="BaseLocation" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.baseLocation"></a>

```csharp
public string BaseLocation { get; }
```

- *Type:* string

---

##### `CanWriteMetadata`<sup>Required</sup> <a name="CanWriteMetadata" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.canWriteMetadata"></a>

```csharp
public IResolvable CanWriteMetadata { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `CatalogNamespace`<sup>Required</sup> <a name="CatalogNamespace" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.catalogNamespace"></a>

```csharp
public string CatalogNamespace { get; }
```

- *Type:* string

---

##### `CatalogSyncName`<sup>Required</sup> <a name="CatalogSyncName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.catalogSyncName"></a>

```csharp
public string CatalogSyncName { get; }
```

- *Type:* string

---

##### `CatalogTableName`<sup>Required</sup> <a name="CatalogTableName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.catalogTableName"></a>

```csharp
public string CatalogTableName { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `CurrentPartitionSpecId`<sup>Required</sup> <a name="CurrentPartitionSpecId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.currentPartitionSpecId"></a>

```csharp
public double CurrentPartitionSpecId { get; }
```

- *Type:* double

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `ExternalVolumeName`<sup>Required</sup> <a name="ExternalVolumeName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.externalVolumeName"></a>

```csharp
public string ExternalVolumeName { get; }
```

- *Type:* string

---

##### `IcebergTableFormatVersion`<sup>Required</sup> <a name="IcebergTableFormatVersion" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.icebergTableFormatVersion"></a>

```csharp
public double IcebergTableFormatVersion { get; }
```

- *Type:* double

---

##### `IcebergTableType`<sup>Required</sup> <a name="IcebergTableType" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.icebergTableType"></a>

```csharp
public string IcebergTableType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NameMapping`<sup>Required</sup> <a name="NameMapping" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.nameMapping"></a>

```csharp
public string NameMapping { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `OwnerRoleType`<sup>Required</sup> <a name="OwnerRoleType" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.ownerRoleType"></a>

```csharp
public string OwnerRoleType { get; }
```

- *Type:* string

---

##### `PartitionSpecs`<sup>Required</sup> <a name="PartitionSpecs" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.partitionSpecs"></a>

```csharp
public IcebergTableFromFilesShowOutputPartitionSpecsList PartitionSpecs { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList">IcebergTableFromFilesShowOutputPartitionSpecsList</a>

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputOutputReference.property.internalValue"></a>

```csharp
public IcebergTableFromFilesShowOutput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutput">IcebergTableFromFilesShowOutput</a>

---


### IcebergTableFromFilesShowOutputPartitionSpecsFieldsList <a name="IcebergTableFromFilesShowOutputPartitionSpecsFieldsList" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesShowOutputPartitionSpecsFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.get"></a>

```csharp
private IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference <a name="IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.fieldId">FieldId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.sourceId">SourceId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.transform">Transform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFields">IcebergTableFromFilesShowOutputPartitionSpecsFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.fieldId"></a>

```csharp
public double FieldId { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.sourceId"></a>

```csharp
public double SourceId { get; }
```

- *Type:* double

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.transform"></a>

```csharp
public string Transform { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsOutputReference.property.internalValue"></a>

```csharp
public IcebergTableFromFilesShowOutputPartitionSpecsFields InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFields">IcebergTableFromFilesShowOutputPartitionSpecsFields</a>

---


### IcebergTableFromFilesShowOutputPartitionSpecsList <a name="IcebergTableFromFilesShowOutputPartitionSpecsList" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesShowOutputPartitionSpecsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.get"></a>

```csharp
private IcebergTableFromFilesShowOutputPartitionSpecsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### IcebergTableFromFilesShowOutputPartitionSpecsOutputReference <a name="IcebergTableFromFilesShowOutputPartitionSpecsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesShowOutputPartitionSpecsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList">IcebergTableFromFilesShowOutputPartitionSpecsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.property.specId">SpecId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecs">IcebergTableFromFilesShowOutputPartitionSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.property.fields"></a>

```csharp
public IcebergTableFromFilesShowOutputPartitionSpecsFieldsList Fields { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsFieldsList">IcebergTableFromFilesShowOutputPartitionSpecsFieldsList</a>

---

##### `SpecId`<sup>Required</sup> <a name="SpecId" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.property.specId"></a>

```csharp
public double SpecId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecsOutputReference.property.internalValue"></a>

```csharp
public IcebergTableFromFilesShowOutputPartitionSpecs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesShowOutputPartitionSpecs">IcebergTableFromFilesShowOutputPartitionSpecs</a>

---


### IcebergTableFromFilesTimeoutsOutputReference <a name="IcebergTableFromFilesTimeoutsOutputReference" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Snowflake;

new IcebergTableFromFilesTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts">IcebergTableFromFilesTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IcebergTableFromFilesTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.icebergTableFromFiles.IcebergTableFromFilesTimeouts">IcebergTableFromFilesTimeouts</a>

---



